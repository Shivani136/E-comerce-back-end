const express = require("express");
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const db = require("./models");

//routes
const authRoutes =  require("./routes/auth")
const adminRoutes =  require("./routes/admin/auth")
const categoryRoutes =  require("./routes/category")

mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    // useCreateIndex : true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.use(express.json())
//app.use(bodyParser());

app.use('/api',authRoutes)
app.use('/api',adminRoutes)
app.use('/api',categoryRoutes)

app.listen(process.env.PORT, ()=>{
   console.log(`Server is running on port ${ process.env.PORT }`)
})










