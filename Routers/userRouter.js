const express = require("express");
const router = express.Router();
const user = require("../controllers/userController");
const Middleware = require("../middleware/test");

router.get("/user", user.getManyuser);
router.get("/user/:id", user.getByIduser);
router.post("/user", user.postuser);
router.put("/user", user.putManyuser);
router.put("/user/:id", user.putByIduser);
router.get("/user/getdata/:email", user.getBymailuser);
router.delete("/user", user.deleteManyuser);
router.delete("/user/:id", user.deleteByIduser);
router.post("/user/signup", user.signup);
router.post("/user/signin", user.signin);
router.post("/user/me", Middleware, user.me);

module.exports = router;
