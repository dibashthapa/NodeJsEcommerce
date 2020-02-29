const express = require('express');
const router = express.Router();
const axios = require("axios");
const items= require("../models/db.js");
const config = require("../models/config.js")
router.get("/form",(req,res,next)=>{
  res.render("form");
})
router.post('/add', (req, res, next) => {
  Item= new items(req.body)
  Item.save()
res.redirect("/form");

});

module.exports = router;
