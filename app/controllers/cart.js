const express = require('express');
const router = express.Router();

router.get("/cart",(req,res,next)=>{
  res.render("cart")
})

module.exports = router;
