const Reservation = require("../model/resirvation.model");

module.exports.getReservationService = async()=>{
    const result = await Reservation.find({});
    return result;
}
module.exports.postReservationService = async(data)=>{
    const result = await Reservation(data).save();
    return result;
}