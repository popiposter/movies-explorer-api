const { isEmail } = require('validator');
const { URL_REGEX } = require('../constants');

module.exports.isUrl = (value) => URL_REGEX.test(value);
module.exports.isEmail = (value) => isEmail(value);
