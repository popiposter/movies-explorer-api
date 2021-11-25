const { Joi } = require('celebrate');

const {
  EMPTY_STR_MSG,
  REQ_MSG,
  EMAIL_MSG,
  MIN_STR,
  MAX_STR,
} = require('../constants');

module.exports.userSignupSchema = Joi.object()
  .keys({
    email: Joi.string()
      .email()
      .required()
      .messages({
        'string.empty': EMPTY_STR_MSG,
        'any.required': REQ_MSG,
        'string.email': EMAIL_MSG,
      }),
    password: Joi.string()
      .required()
      .min(8)
      .messages({
        'string.empty': EMPTY_STR_MSG,
        'any.required': REQ_MSG,
        'string.min': MIN_STR,
      }),
    name: Joi.string()
      .required()
      .min(2)
      .max(30)
      .messages({
        'string.empty': EMPTY_STR_MSG,
        'string.min': MIN_STR,
        'string.max': MAX_STR,
        'any.required': REQ_MSG,
      }),
  });

module.exports.userSigninSchema = Joi.object()
  .keys({
    email: Joi.string()
      .email()
      .required()
      .messages({
        'string.empty': EMPTY_STR_MSG,
        'any.required': REQ_MSG,
        'string.email': EMAIL_MSG,
      }),
    password: Joi.string()
      .required()
      .min(8)
      .messages({
        'string.empty': EMPTY_STR_MSG,
        'any.required': REQ_MSG,
        'string.min': MIN_STR,
      }),
  });

module.exports.userInfoSchema = Joi.object()
  .keys({
    email: Joi.string()
      .email()
      .required()
      .messages({
        'string.empty': EMPTY_STR_MSG,
        'any.required': REQ_MSG,
        'string.email': EMAIL_MSG,
      }),
    name: Joi.string()
      .min(2)
      .max(30)
      .messages({
        'string.empty': EMPTY_STR_MSG,
        'string.min': MIN_STR,
        'string.max': MAX_STR,
      }),
  });
