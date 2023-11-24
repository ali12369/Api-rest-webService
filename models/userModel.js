const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "name is required"] },
  id: { type: Number, required: [true, "id is required"] },
  email: { type: String, required: [true, "email is required"] },
  password: { type: String, required: [true, "password is required"] },
  Admin : {type : Boolean , required : [true , "user is an admin "] , default : false} , 
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
