const { request, response } = require("express");
const productModel = require("../models/productModel");

const createProduct = async (req, res) => {
  try {
    const { name, id } = req.body;
    const newProduct = new productModel({
      name,
      id,
    });

    await productModel.create(newProduct).then((response) => {
      res.status(200).json({ message: "Product created successfully" });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
};
let getManyProduct = async (request, response) => {
  let result = await productModel.find();
  console.log(result);
  response.send(result);
};
let getByIdproduct = async (request, response) => {
  let result = await productModel.findById();
  console.log(result);
  response.send(result);
};
const putByIdproduct = async (request , response) =>{
  let result = await productModel.findByIdAndUpdate() ; 
  console.log(result) ; 
  response.send(result) ; 
}
const deleteByIdproduct = async (request , response) => {
  let result = await productModel.findByIdAndDelete() ; 
  console.log(result)
  response.send(result)
}

const product = {
  getByIdproduct , 
  getManyProduct , 
  createProduct , 
  putByIdproduct , 
  deleteByIdproduct , 
}
module.exports=product ;