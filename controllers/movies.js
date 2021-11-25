const Movie = require('../models/movie');
const NotFoundError = require('../errors/not-found-err');
const ForbiddenError = require('../errors/forbidden-err');

const { MOVIE_NOT_FOUND, OWNER_ERR_MSG } = require('../constants');

module.exports.getMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((cards) => res.send({ data: cards }))
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;
  const owner = req.user;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
    owner,
  })
    .then((movie) => res.send({ data: movie }))
    .catch(next);
};

module.exports.deleteMovie = (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      if (!movie) {
        return Promise.reject(new NotFoundError(MOVIE_NOT_FOUND));
      }

      if (movie.owner.valueOf() !== req.user._id) {
        return Promise.reject(new ForbiddenError(OWNER_ERR_MSG));
      }

      return Movie.findByIdAndRemove(req.params.id);
    })
    .then((movie) => res.send({ data: movie }))
    .catch(next);
};
