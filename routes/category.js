const express = require("express");
const { category } = require("../models");
const { addCategory, getCategory } = require("../Controllers/category");
const { requireSignin, userMiddliware, adminMiddliware } = require("../Common-middilwar");
const router = express.Router();


router.post('/category/create',requireSignin, adminMiddliware, addCategory);
router.get('/category/getCategory', getCategory);

module.exports = router;

