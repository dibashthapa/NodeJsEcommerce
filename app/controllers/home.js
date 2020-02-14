const express = require('express');
const router = express.Router();
const axios = require("axios");


router.get('/', (req, res, next) => {

  axios.get("https://ecommeceapi.herokuapp.com/api")
  .then((api_data)=>{
    response= JSON.parse(JSON.stringify(api_data.data));

res.render("index",{data:response})
  })
  .catch((err)=>{
    console.log(err)
  })

});

module.exports = router;
