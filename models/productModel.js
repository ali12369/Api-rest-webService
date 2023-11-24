const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name : {type: String , required : [true , "product name is required "]} , 
    id : {type : Number , required : [true , "id is required"]} , 
})

const productModel = mongoose.model("product" , productSchema) ; 
module.exports = productModel ; 