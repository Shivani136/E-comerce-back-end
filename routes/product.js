const express = require("express");
const { product } = require("../models");

const { requireSignin,adminMiddliware } = require("../Common-middilwar");
const router = express.Router();

router.post('/product/create',requireSignin, adminMiddliware, addCategory);
// router.get('/category/getCategory', getCategory);

module.exports = router;

