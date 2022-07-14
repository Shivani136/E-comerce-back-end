const express = require("express");
const { signup, signin } = require("../Controllers/auth");
const { validateSignInRequest , isRequestValidated, validateSignUpRequest} = require("../validators/auth");
const router = express.Router();


router.post('/signup', validateSignInRequest, isRequestValidated, signup)
router.post('/signin', validateSignUpRequest, isRequestValidated, signin)

router.post('/profile', (req, res) => {
    res.status(200).json({
        user: 'profile'
    })
})

module.exports = router;

