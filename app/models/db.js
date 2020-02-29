
const mongoose=require("mongoose");



const UserSchema= new mongoose.Schema({
  item_name:{
    type:String,
    required:true
  }
  ,
  url:{
    type:String,
    required:true
  },
  category:{
    type:String,
    required:true
  },
  rating:{
    type:String,
    required:true
  },
  price:{
    type:String,
    required:true
  },
  created:{
    type:Date,
    default:Date.now
  }

})
const items= mongoose.model('items',UserSchema)
module.exports=items
