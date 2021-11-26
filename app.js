const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { limiter } = require('./libraries/rateLimit');
const { dbConnect } = require('./libraries/mongoose');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const celebrateErrors = require('./middlewares/celebrateErrors');
const cors = require('./middlewares/cors');
const {
  requestLogger,
  errorLogger,
} = require('./middlewares/logger');

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

app.use(routes);

app.use(errorLogger);
app.use(celebrateErrors);
app.use(errorHandler);

module.exports = app;
