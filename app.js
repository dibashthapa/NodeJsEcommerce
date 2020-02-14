const express = require("express");
const app = express()
const cors = require("cors");
const bodyparser= require("body-parser");
const path = require("path");

app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'app/views'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static("public"))
app.use('/css',express.static(__dirname +'/css'));
app.use(cors())
require('./app/routes')(app);
app.listen(5000 || process.env.PORT,()=>{
  console.log("Server running")
})
