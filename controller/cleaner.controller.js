const { postCleanerService } = require("../services/cleaner.service");

module.exports.postCleaner = async(req,res) =>{
    try{
        const data = req.body;
        const result = await postCleanerService(data);
        res.status(200).json({
            message:"succesfully created cleaning",
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