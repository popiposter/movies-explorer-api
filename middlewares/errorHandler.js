const {
  SERVER_ERR_STATUS,
  SERVER_ERR_MSG,
} = require('../constants');

module.exports = (err, req, res, next) => {
  const status = err.statusCode || SERVER_ERR_STATUS;
  const { message } = err;

  res.status(status)
    .json({ message: message || SERVER_ERR_MSG });

  return next();
};
