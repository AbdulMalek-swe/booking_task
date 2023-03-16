const express = require('express');
const cors = require("cors");
const app = express();
app.use(express.json()); 
app.use(cors())
const userRouter = require("./routes/user.route");
const cleanerRouter = require("./routes/cleaner.route");
const reservation = require("./routes/reservation.route");
app.use("/",userRouter)
app.use("/",cleanerRouter)
app.use("/",reservation)
module.exports = app;