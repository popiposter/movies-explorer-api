const { isCelebrateError } = require('celebrate');
const BadRequestError = require('../errors/bad-req-err');
const { VALIDATION_ERR_MSG } = require('../constants');

module.exports = (err, req, res, next) => {
  if (isCelebrateError(err)) {
    let message;

    if (err.details.has('body')) {
      message = err.details.get('body').message;
    } else if (err.details.has('params')) {
      message = err.details.get('params').message;
    } else {
      message = VALIDATION_ERR_MSG;
    }

    next(new BadRequestError(message));
  } else {
    next(err);
  }
};
