const { getReservationService, postReservationService } = require("../services/reservation.service");

 
module.exports.getReservation = async(req,res)=>{
   try{
       const result = await getReservationService( );
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