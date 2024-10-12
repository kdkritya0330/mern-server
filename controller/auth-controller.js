 const User = require("../models/user-model");
 const bcrypt = require("bcryptjs");
 const home = () => async (req,res) => {
    try{
        res
        .status(200)
        .send("welcome ritesh mern stack project using router"); 
      

    } catch (error) {
        console.error(error)
    }
};


const register  = async (req, res) => {
    try {
        console.log(req.body);

        const {username,email,phone,password } = req.body;

        const userExits = await User.findOne({email});
        if(userExits){

            return res.status(400).json({message: "user already exits"})
        }

        //const saltRound = 10; 
        //const hash_password = await bcrypt.hash(password,saltRound);

      const userCreated = await  User.create({username,
        email,phone,
        password,
        
      });

        res.status(200)
        .json({msg: "registration sucessfull",token: await userCreated.generatedToken(),
            userId: userCreated._id.toString(),
           }); 


    } catch (error){
        console.log(error);
        
        res.status(400).json("internal server error");
    }

   
       
};


//user login logic

const login = async (req, res) => {
    try{
        const { email,password } = req.body;
        const userExit = await User.findOne({email});  
        console.log(userExit);
        if(!userExit) {

        return res.status(400).json({ message: "Invalid Credentials"});
    }
      //const user = await bcrypt.compare(password,userExit.password);
      const user = await userExit.comparePassword(password);
      
    console.log()
    if(user){
        res.status(200)
        .json({msg: "Login Sucessfull ",
            token: await userExit.generatedToken(),
            userId: userExit._id.toString(),
           }); 

      }else{
          res.status(401).json({message:"Invalid email or password"});
      }


    } catch  (error) {
     // res.status(400).json("internal server error");
      next(erro);
    }
};
const user = async (req, res) => {
    try {
      // const userData = await User.find({});
      const userData = req.user;
      console.log(userData);
      return res.status(200).json({  userData });
    } catch (error) {
      console.log(` error from user route ${error}`);
    }
  };

module.exports = {home,register,login,user };
