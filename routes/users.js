const router = require('express')
  .Router();
const {
  updateUser,
  getCurrentUserInfo,
} = require('../controllers/users');
const { userInfoValidator } = require('../utils/validation');

router.get('/me', getCurrentUserInfo);
router.patch('/me', userInfoValidator, updateUser);

module.exports = router;
