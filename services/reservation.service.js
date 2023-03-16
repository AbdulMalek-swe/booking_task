const Reservation = require("../model/resirvation.model");

module.exports.getReservationService = async()=>{
    const result = await Reservation.find({});
    return result;
}
module.exports.postReservationService = async(data)=>{
    const id = await Reservation.findOne( {id:data.id});
    console.log(id);
    if(!id){
        const result = await Reservation(data).save();
        return result;
    }
    else{
        return;  
    } 


    
}