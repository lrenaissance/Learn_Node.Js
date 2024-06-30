const mongoose=require("mongoose");

const PostSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  body:{
    type:String,
    required:true
  },
  createdAt:{ //작성시각
    type:Date,
    default:Date.now()
  }
});

module.exports=mongoose.model("Post",PostSchema);