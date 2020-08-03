const express = require('express');
const router = express.Router();
const {
    userController
} = require('../controller/userC');
const verifyToken = require('../middleware/verifyToken');

// TO SAVE A NEW USERS
router.post('/newUser', userController.signUp);

// Home
router.get('/home', verifyToken, userController.home);

// To Signin
router.post('/signIn', userController.signIn)

module.exports = router;