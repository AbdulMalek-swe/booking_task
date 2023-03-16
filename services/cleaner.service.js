const Cleaner = require("../model/cleaner.model");
const User = require("../model/user.model");
module.exports.getCleanerService = async(email)=>{
   const {_id}= await User.findOne({email:email});
  const result = await Cleaner.find({id:_id});
  return result;
}
module.exports.postCleanerService = async (data) =>{
   const result = await Cleaner(data).save();
   return result;
}