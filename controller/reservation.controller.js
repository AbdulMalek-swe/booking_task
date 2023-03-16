const { getReservationService,
     postReservationService,
    cancelReservationService } = require("../services/reservation.service");

 
module.exports.getReservation = async(req,res)=>{
   try{
    const {email} = req.user;
       const result = await getReservationService(email);
       res.status(200).json({
           message:"succesfully reservation",
           result
       })
   }
   catch(error){
       console.log(error.message);
       res.status(400).json({
           error:error.message
       })
    }
}
module.exports.postReservation = async(req,res) =>{
   try{
       const data = req.body;
       const result = await postReservationService(data);
       if(!result){
        return res.status(400).json({
            message:"twice reservation is not possible",
        })
       }
       res.status(200).json({
           message:"succesfully created reservation",
           result  
       }) 
   }
   catch(error){
       console.log(error.message);
       res.status(400).json({
           error:error.message
       })
   }
}
module.exports.cancelReservation = async(req,res) =>{
    try{
        const {id }= req.params;
        console.log(id);
        const result = await cancelReservationService(id);
        if(!result){
         return res.status(400).json({
             message:"reservation cancel not possible because cleaner accept it ",
         })
        }
        res.status(200).json({
            message:"succesfully created reservation",
            result  
        }) 
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({
            error:error.message
        })
    }
 }