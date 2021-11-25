const { Joi } = require('celebrate');

const { URL_REGEX } = require('../constants');
const {
  EMPTY_STR_MSG,
  REQ_MSG,
  URI_MSG,
  NUM_BASE_MSG,
  HEX_MSG,
  MIN_STR,
} = require('../constants');

module.exports.movieSchema = Joi.object()
  .keys({
    country: Joi.string()
      .required()
      .messages({
        'string.empty': EMPTY_STR_MSG,
        'any.required': REQ_MSG,
      }),
    director: Joi.string()
      .required()
      .messages({
        'string.empty': EMPTY_STR_MSG,
        'any.required': REQ_MSG,
      }),
    duration: Joi.number()
      .required()
      .messages({
        'string.empty': EMPTY_STR_MSG,
        'any.required': REQ_MSG,
      }),
    year: Joi.number()
      .required()
      .integer()
      .messages({
        'number.base': NUM_BASE_MSG,
        'any.required': REQ_MSG,
      }),
    description: Joi.string()
      .required()
      .messages({
        'string.empty': EMPTY_STR_MSG,
        'any.required': REQ_MSG,
      }),
    image: Joi.string()
      .required()
      .regex(URL_REGEX)
      .messages({
        'string.empty': EMPTY_STR_MSG,
        'any.required': REQ_MSG,
        'string.pattern.base': URI_MSG,
      }),
    trailer: Joi.string()
      .required()
      .regex(URL_REGEX)
      .messages({
        'string.empty': EMPTY_STR_MSG,
        'any.required': REQ_MSG,
        'string.pattern.base': URI_MSG,
      }),
    thumbnail: Joi.string()
      .required()
      .regex(URL_REGEX)
      .messages({
        'string.empty': EMPTY_STR_MSG,
        'any.required': REQ_MSG,
        'string.pattern.base': URI_MSG,
      }),
    movieId: Joi.number()
      .required()
      .integer()
      .messages({
        'number.base': NUM_BASE_MSG,
        'any.required': REQ_MSG,
      }),
    nameRU: Joi.string()
      .required()
      .messages({
        'string.empty': EMPTY_STR_MSG,
        'any.required': REQ_MSG,
      }),
    nameEN: Joi.string()
      .required()
      .messages({
        'string.empty': EMPTY_STR_MSG,
        'any.required': REQ_MSG,
      }),
  });

module.exports.idSchema = Joi.object()
  .keys(
    {
      id: Joi.string()
        .hex()
        .length(24)
        .messages({
          'string.hex': HEX_MSG,
          'string.empty': EMPTY_STR_MSG,
          'string.length': MIN_STR,
        }),
    },
  );
