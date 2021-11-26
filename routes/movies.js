const router = require('express')
  .Router();
const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');
const {
  movieValidator,
  idValidator,
} = require('../utils/validation');

router.get('/', getMovies);
router.post('/', movieValidator, createMovie);
router.delete('/:id', idValidator, deleteMovie);

module.exports = router;
