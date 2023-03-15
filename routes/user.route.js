const express = require("express");
const  user = require("../controller/user.controller");
const router = express.Router();
 
router
    .post("/signup",user.signup)
    .post("/login",user.login)
  
    
module.exports = router;