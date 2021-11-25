const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { isEmail } = require('../utils');
const UnauthorizedError = require('../errors/unauthorized-err');

const { UNAUTHORIZED_MSG } = require('../constants');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(value) {
        return isEmail(value);
      },
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

userSchema.statics.findUserByCredentials = function findUserByCredentials(email, password) {
  return this.findOne({ email })
    .select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new UnauthorizedError(UNAUTHORIZED_MSG));
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new UnauthorizedError(UNAUTHORIZED_MSG));
          }

          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
