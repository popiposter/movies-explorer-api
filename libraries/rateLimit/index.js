const rateLimit = require('express-rate-limit');
const { config } = require('../../config');

module.exports.limiter = rateLimit({
  windowMs: config.rateLimitWindowMs,
  max: config.rateLimitMax,
});
