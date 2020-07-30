const express = require('express');
const router = express.Router();
const {
    userController
} = require('../controller/userC');

// TO SAVE A NEW USERS
router.post('/newUser', userController.signUp);

// Testing
// router.get('/me', userController.signIn);

// To Signin
router.post('/signIn', userController.signIn)

module.exports = router;