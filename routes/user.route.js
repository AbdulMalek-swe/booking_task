const express = require("express");
const  user = require("../controller/user.controller");
const { verifyToken } = require("../middleware/verifyToken");
const router = express.Router();
 
router
    .post("/signup",user.signup)
    .post("/login",user.login)
router
   .get("/me",verifyToken, user.getMe)    
  
    
module.exports = router;