const mongoose = require("mongoose");
 const {ObjectId} = mongoose.Types;
const reservationSchema = mongoose.Schema(
  {
    servicename:{
      type:String,
      required:[true,"please provide service name"],
    },
    cleanername:{
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
    },
    customername:{
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
    },
    lavel:{
        type:String,
        require:[true,'provide a job lavel'],
        trim:true
      },
      status:{
        type:Boolean,
        enum:[true,false],
        default:false
      },
    date:Date,
    time:Date,
  },
  {
    timestamps: true,
  }
);
const Reservation = mongoose.model("Reservation",reservationSchema);
module.exports = Reservation;