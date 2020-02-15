const express = require('express');
const router = express.Router();
const axios = require("axios");

router.get('/categories/foods', (req, res, next) => {
  axios.get("https://ecommeceapi.herokuapp.com/search?title=food")
  .then((api_data)=>{
    response= JSON.parse(JSON.stringify(api_data.data));
res.render("foods",{data:response})
  })
  .catch((err)=>{
    console.log(err)
  })



});

router.get('/categories/outfits', (req, res, next) => {
  axios.get("https://ecommeceapi.herokuapp.com/search?title=outfit")
  .then((api_data)=>{
    response= JSON.parse(JSON.stringify(api_data.data));
res.render("outfits",{data:response})
  })
  .catch((err)=>{
    console.log(err)

  })
});




module.exports = router;
