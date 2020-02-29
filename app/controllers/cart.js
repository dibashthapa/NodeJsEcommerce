const express = require('express');
const router = express.Router();
const axios = require("axios");
router.get('/cart', (req, res, next) => {
if(req.query){
types= req.query.types;
  axios.get("https://ecommeceapi.herokuapp.com/search?types="+types)
  .then((api_data)=>{
    response= JSON.parse(JSON.stringify(api_data.data));
res.render("cart",{data:response})
  })
  .catch((err)=>{
    console.log(err)
  })
}
  
});

module.exports = router;
