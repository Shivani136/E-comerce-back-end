const express = require("express");
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const db = require("./models");
const path = require('path');
const cors = require('cors');

//routes
const authRoutes =  require("./routes/auth")
const adminRoutes =  require("./routes/admin/auth")
const categoryRoutes =  require("./routes/category")
const productRoutes =  require("./routes/product")
const cartSchema =  require("./routes/cart")

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

app.use(cors())

  // apply middleware
app.use(express.json())
app.use('/public', express.static(path.join(__dirname , 'uploads')))
//app.use(bodyParser());

app.use('/api',authRoutes)
app.use('/api',adminRoutes)
app.use('/api',categoryRoutes)
app.use('/api',productRoutes)
app.use('/api',cartSchema)


app.listen(process.env.PORT, ()=>{
   console.log(`Server is running on port ${ process.env.PORT }`)
})










