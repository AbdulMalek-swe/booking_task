const mongoose = require("mongoose");
 const {ObjectId} = mongoose.Schema.Types
const cleanerSchema = mongoose.Schema(
  {
    servicename:{
      type:String,
      required:[true,"please provide cleaning name"],
    },
    firstname: {
        type: String,
        required: [true, "Please provide a first name"],
        trim: true,
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [100, "Name is too large"],
      },
      lastname: {
        type: String,
        required: [true, "Please provide a first name"],
        trim: true,
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [100, "Name is too large"],
      },
      lavel:{
        type:String,
        require:[true,'provide a job lavel'],
        trim:true
      },
      id:{
      type:ObjectId,
        required:[true,"cleaner id must be provider"]
      }
  },
  {
    timestamps: true,
  }
);

 

const Cleaner = mongoose.model("Cleaner",cleanerSchema);
module.exports = Cleaner;