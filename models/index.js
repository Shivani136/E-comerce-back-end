const dbConfig = require("../config/dbconfig.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.user = require("./usermodel.js")(mongoose );
db.category = require('./category.js')(mongoose);
db.product = require('./product.js')(mongoose);
db.cart = require('./cart.js')(mongoose);
module.exports = db;




