const express = require('express');
const router = express.Router();

const usersConrtoller = require('../controllers/users_controller');
console.log('profile router is loaded');
router.get('/profile', usersConrtoller.profile);


module.exports = router;