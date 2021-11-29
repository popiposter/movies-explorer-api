const { celebrate } = require('celebrate');
const {
  userSigninSchema,
  userSignupSchema,
  userInfoSchema,
} = require('../models/userJoi');
const {
  movieSchema,
  idSchema,
} = require('../models/movieJoi');

module.exports.userSigninValidator = celebrate({
  body: userSigninSchema,
});

module.exports.userSignupValidator = celebrate({
  body: userSignupSchema,
});

module.exports.userInfoValidator = celebrate({
  body: userInfoSchema,
});

module.exports.movieValidator = celebrate({
  body: movieSchema,
});

module.exports.idValidator = celebrate({
  params: idSchema,
});
