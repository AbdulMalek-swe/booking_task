const {
    signupService,
    loginService,
    findUserByEmail, 
    findUserByToken}
    = require("../services/user.service");
  const { generateToken } = require("../utils/token");
  module.exports.signup = async (req, res) => {
    try {
         console.log(req.body);
      const user = await signupService(req.body);
    //   await user.save({validateBeforeSave:false});
        
      res.status(200).json({
        status: "succesfful",
        message: "get user data",
        result: user
      });
    }
    catch (error) {
        console.log(error.message);
      res.status(500).json({
        status: "authentiacation failed",
        message: "signup is failed",
        result: error.message
      })
    }
  }
  module.exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
     console.log(email);
      if (!email || !password) {
        return res.status(401).json({
          status: "fail",
          error: "Please provide your credentials",
        });
      }
  
      const user = await findUserByEmail(email);
  
      if (!user) {
        return res.status(401).json({
          status: "fail",
          error: "No user found. Please create an account",
        });
      }
  
      const isPasswordValid = user.comparePassword(password, user.password);
      console.log(isPasswordValid)
      if (!isPasswordValid) {
        return res.status(403).json({
          status: "fail",
          error: "Password is not correct",
        });
      }
      const token = generateToken(user);
  
      const { password: pwd, ...others } = user.toObject();
  
      res.status(200).json({
        status: "success",
        message: "Successfully logged in",
        data: {
          user: others,
          token,
        },
      });
    } catch (error) {
        console.log(error.message);
      res.status(500).json({
        status: "fail",
        
      });
    }
  };
  
  module.exports.getMe= async (req, res) => {
    try {
      //    console.log(req.body);
      const result = await findUserByEmail(req.query.email);
      const {password:pwd,...others} = result.toObject();
      
      res.status(200).json({
        status: "succesfful",
        message: "get user data",
        result: others
      });
    }
    catch (error) {
      res.status(500).json({
        status: "authentiacation failed",
        message: "signup is failed",
        result: error.message
      })
    }
  }
   
