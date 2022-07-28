const express = require("express");
const { requireSignin } = require("../../Common-middilwar");
const { signup, signin, signout, } = require('../../Controllers/admin/auth');
const { validateSignInRequest, isRequestValidated, validateSignUpRequest } = require("../../validators/auth");
const router = express.Router();


router.post('/admin/signup', validateSignInRequest,isRequestValidated, signup)
router.post('/admin/signin',validateSignUpRequest, isRequestValidated, signin)
router.post('/admin/signout' , requireSignin, signout)


module.exports = router;

