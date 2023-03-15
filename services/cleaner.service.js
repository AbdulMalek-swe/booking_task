const Cleaner = require("../model/cleaner.model")

module.exports.postCleanerService = async (data) =>{
   const result = await Cleaner(data).save();
   return result;
}