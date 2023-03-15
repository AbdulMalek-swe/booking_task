const express = require('express');
const cors = require("cors");
const app = express();
app.use(express.json()); 
app.use(cors())
const userRouter = require("./routes/user.route");
const cleanerRouter = require("./routes/cleaner.route");
app.use("/",userRouter)
app.use("/",cleanerRouter)
module.exports = app;