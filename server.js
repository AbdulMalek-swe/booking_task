var colors = require('colors');
var env = require('dotenv').config();
const app = require("./app");
const { dbConnect } = require('./utils/dbConnect');
dbConnect() 
app.listen(process.env.PORT,()=>{
    console.log(`hitting the website ${process.env.PORT}`.red);
})