const mongoose = require("mongoose");
const validator = require("validator");
 
const cleanerSchema = mongoose.Schema({

},
  {
    
    timestamps: true,
  }
);

 
const Cleaner = mongoose.model("Cleaner", userSchema);
module.exports = Cleaner;