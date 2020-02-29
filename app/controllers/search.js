const express = require('express');
const router = express.Router();
const axios = require("axios");
router.get('/search', (req, res, next) => {
  name= req.query.name;
  axios.get("https://ecommeceapi.herokuapp.com/search?name="+name)
  .then((api_data)=>{
    response= JSON.parse(JSON.stringify(api_data.data));
    res.render("items",{data:response})
  })
  .catch((err)=>{
    console.log(err)
  })

});

module.exports = router;
