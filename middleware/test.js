const jwt = require("jsonwebtoken");
const privateKey = "TOKEN-CRYPTER";
const userModel = require("../models/userModel");

const MiddlewareAuth = async (req, res, next) => {
  let token = req.headers.authorization;
  console.log(token);
  try {
    const result = jwt.verify(token, privateKey);
    console.log("this is payload =>", result);
    const user = await userModel.findById(result.userId);
    console.log("this is the user => ", user);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid JWT or payload!" });
  }
};

module.exports = MiddlewareAuth;
