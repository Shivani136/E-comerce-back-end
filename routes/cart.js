const express = require("express");
const { requireSignin, userMiddliware,  } = require("../Common-middilwar");
const { addItemToCart } = require("../Controllers/cart");
const router = express.Router();


router.post('/user/cart/addtocart',requireSignin, userMiddliware, addItemToCart);
// router.get('/category/getCategory', getCategory);

module.exports = router;

