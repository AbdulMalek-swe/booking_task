const express = require('express');
const cors = require("cors");
const app = express();
app.use(express.json()); 
app.use(cors())
const userRouter = require("./routes/user.route");
 
app.use("/",userRouter)
module.exports = app;