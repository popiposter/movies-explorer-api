const express = require('express');
const helmet = require('helmet');
const { celebrate } = require('celebrate');
const cookieParser = require('cookie-parser');
const { limiter } = require('./libraries/rateLimit');
const { dbConnect } = require('./libraries/mongoose');
const auth = require('./middlewares/auth');
const errorHandler = require('./middlewares/errorHandler');
const celebrateErrors = require('./middlewares/celebrateErrors');
const usersRoute = require('./routes/users');
const moviesRoute = require('./routes/movies');
const {
  userSigninSchema,
  userSignupSchema,
} = require('./models/userJoi');
const {
  login,
  createUser,
  logout,
} = require('./controllers/users');
const cors = require('./middlewares/cors');
const {
  requestLogger,
  errorLogger,
} = require('./middlewares/logger');
const NotFoundError = require('./errors/not-found-err');
const { ROUTE_NOT_FOUND_MSG } = require('./constants');

dbConnect()
  .catch((err) => {
    throw new Error(err);
  });

const app = express();

app.use(helmet());
app.use(limiter);
app.use(cors);
app.use(requestLogger);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.post('/signin', celebrate({
  body: userSigninSchema,
}), login);
app.post('/signup', celebrate({
  body: userSignupSchema,
}), createUser);

app.use(auth);

app.use('/users', usersRoute);
app.use('/movies', moviesRoute);

app.post('/signout', logout);

app.use((req, res, next) => {
  next(new NotFoundError(ROUTE_NOT_FOUND_MSG));
});

app.use(errorLogger);
app.use(celebrateErrors);
app.use(errorHandler);

module.exports = app;
