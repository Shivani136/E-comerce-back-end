const express = require("express");
const { signup, signin, } = require('../../Controllers/admin/auth');
const { validateSignInRequest, isRequestValidated, validateSignUpRequest } = require("../../validators/auth");
const router = express.Router();


router.post('/admin/signup', validateSignInRequest,isRequestValidated, signup)
router.post('/admin/signin',validateSignUpRequest, isRequestValidated, signin)



module.exports = router;

