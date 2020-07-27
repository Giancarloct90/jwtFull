const express = require('express');
const router = express.Router();
const {
    userController
} = require('../controller/userC');

// TO SAVE A NEW USERS
router.post('/newUser', userController.signUp);

//
router.get('/me', userController.signIn);

module.exports = router;