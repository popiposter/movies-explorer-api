const mongoose = require('mongoose');
const { isUrl } = require('../utils');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator(value) {
        return isUrl(value);
      },
    },
  },
  trailer: {
    type: String,
    required: true,
    validate: {
      validator(value) {
        return isUrl(value);
      },
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator(value) {
        return isUrl(value);
      },
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: 'Number',
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
