var colors = require('colors');
var env = require('dotenv').config();
const app = require("./app");
const { dbConnect } = require('./utils/dbConnect');
dbConnect() 
app.listen(5000,()=>{
    console.log("hitting the website".red);
})