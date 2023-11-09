const express = require('express');
const { getDashboard, login } = require('../controllers/main');
const router = express.Router();
const authMiddleWare = require('../middlewares/auth');

router.route('/dashboard').get(authMiddleWare, getDashboard);
router.route('/login').post(login);

module.exports = router;