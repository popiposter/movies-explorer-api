const router = require('express')
  .Router();
const { celebrate } = require('celebrate');
const {
  updateUser,
  getCurrentUserInfo,
} = require('../controllers/users');
const {
  userInfoSchema,
} = require('../models/userJoi');

router.get('/me', getCurrentUserInfo);
router.patch('/me', celebrate({
  body: userInfoSchema,
}), updateUser);

module.exports = router;
