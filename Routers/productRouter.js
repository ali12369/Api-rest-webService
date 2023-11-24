const express = require("express");
const router = express.Router();
const product = require("..//controllers/productController");

router.get("/product" , product.getManyProduct) ; 
router.get("/product/:id" , product.getByIdproduct) ; 
router.post("/product" , product.createProduct) ; 
router.put("/product/:id" , product.putByIdproduct) ; 
router.delete("/product/:id" , product.deleteByIdproduct) ; 

module.exports = router ; 
