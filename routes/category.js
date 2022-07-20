const express = require("express");
const { category } = require("../models");
const { addCategory, getCategory } = require("../Controllers/category");
const { requireSignin, userMiddliware, adminMiddliware } = require("../Common-middilwar");
const router = express.Router();
const multer = require('multer');
const shortid = require('shortid');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname),'uploads'));
    },
    filename: function (req, file, cb) {
     cb(null, shortid.generate() + '-' + file.originalname)
    }
  });

const upload = multer({storage});

router.post('/category/create',requireSignin, adminMiddliware, upload.single('categoryImage'),  addCategory);
router.get('/category/getCategory', getCategory);

module.exports = router;

