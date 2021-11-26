const router = require('express')
  .Router();
const {
  userSigninValidator,
  userSignupValidator,
} = require('../utils/validation');
const {
  login,
  createUser,
  logout,
} = require('../controllers/users');
const auth = require('../middlewares/auth');
const usersRoute = require('./users');
const moviesRoute = require('./movies');
const NotFoundError = require('../errors/not-found-err');
const { ROUTE_NOT_FOUND_MSG } = require('../constants');

router.post('/signin', userSigninValidator, login);
router.post('/signup', userSignupValidator, createUser);

router.use(auth);

router.use('/users', usersRoute);
router.use('/movies', moviesRoute);

router.post('/signout', logout);

router.use((req, res, next) => {
  next(new NotFoundError(ROUTE_NOT_FOUND_MSG));
});

module.exports = router;
