const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const { config } = require('../config');

const NotFoundError = require('../errors/not-found-err');
const ConflictError = require('../errors/conflict-err');

const secureCookie = config.env !== 'development';

const {
  NOT_FOUND_MSG,
  CONFLICT_MSG,
  CREATED_MSG,
  LOGOUT_MSG,
} = require('../constants');

module.exports.createUser = (req, res, next) => {
  const {
    name,
    email,
    password,
  } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name,
      email,
      password: hash,
    }))
    .then(() => res.send({ message: CREATED_MSG }))
    .catch((err) => {
      if (err.name === 'MongoServerError' && err.code === 11000) {
        next(new ConflictError(CONFLICT_MSG));
      } else {
        next(err);
      }
    });
};

module.exports.updateUser = (req, res, next) => {
  const {
    name,
    email,
  } = req.body;

  User.findByIdAndUpdate(
    req.user,
    {
      name,
      email,
    },
    {
      new: true,
      runValidators: true,
      upsert: false,
    },
  )
    .then((user) => {
      if (!user) {
        return Promise.reject(new NotFoundError(NOT_FOUND_MSG));
      }
      return res.send({ data: user });
    })
    .catch((err) => {
      if (err.name === 'MongoServerError' && err.code === 11000) {
        next(new ConflictError(CONFLICT_MSG));
      } else {
        next(err);
      }
    });
};

module.exports.getCurrentUserInfo = (req, res, next) => {
  User.findById(req.user)
    .then((userInfo) => {
      if (!userInfo) {
        return Promise.reject(new NotFoundError(NOT_FOUND_MSG));
      }

      return res.send({ data: userInfo });
    })
    .catch(next);
};

module.exports.login = (req, res, next) => {
  const {
    email,
    password,
  } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        config.jwtSecret,
        { expiresIn: '7d' },
      );

      res.cookie('token', token, {
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
        sameSite: true,
        secure: secureCookie,
      });

      res.send({
        data: {
          about: user.about,
          avatar: user.avatar,
          email: user.email,
          name: user.name,
          _id: user._id,
        },
      });
    })
    .catch(next);
};

module.exports.logout = (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    sameSite: true,
    secure: secureCookie,
  });

  res.json({ message: LOGOUT_MSG })
    .end();
};
