const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorized-err');
const { AUTH_REQ_MSG } = require('../constants');

const { config } = require('../config');

module.exports = (req, res, next) => {
  const { token } = req.cookies;
  let payload;

  try {
    payload = jwt.verify(token, config.jwtSecret);
  } catch (err) {
    next(new UnauthorizedError(AUTH_REQ_MSG));
  }

  req.user = payload;

  next();
};
