const router = require('express')
  .Router();
const { celebrate } = require('celebrate');
const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');
const {
  movieSchema,
  idSchema,
} = require('../models/movieJoi');

router.get('/', getMovies);
router.post('/', celebrate({
  body: movieSchema,
}), createMovie);
router.delete('/:id', celebrate({
  body: idSchema,
}), deleteMovie);

module.exports = router;
