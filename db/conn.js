const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost:27017/train", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(
        `MongoDB Database Connected with Host: ${con.connection.host}`
      );
    })
    .catch((err) => {
      console.log("Connection Error => ", err.message);
    });
};

module.exports = connectDatabase;