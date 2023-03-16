const Reservation = require("../model/resirvation.model");
const User = require("../model/user.model");

module.exports.getReservationService = async(email)=>{
     const {_id} = await User.findOne({email:email})
    const result = await Reservation.find({id:_id});
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
module.exports.cancelReservationService = async(id)=>{
    const  {status} = await Reservation.findById(id);
    if(!status){
        const result = await Reservation.deleteOne({_id:id})
        return result;
    }
    else{
        return;  
    } 
}