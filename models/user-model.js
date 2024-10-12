const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
    username:{
        type :String,
        required:true,


    },
    email:{
        type:String,
        require: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password:{
        type:String,
        require: true,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
});

//secure password
userSchema.pre("save",async function(next) { 
    console.log("pre method",this);
    const user = this;
    if (!user.isModified("password")) {
        next();
    }
    try{
        const saltRound = await bcrypt.genSalt(10);

        const hash_password = await bcrypt.hash(user.password, saltRound);
        console.log(hash_password);
        
          user.password = hash_password;
    }catch (error){
        next(error);
    }
 
});
//compare password 

userSchema.methods.comparePassword = async function(password){
    console.log(password,this.password);
    
    return  bcrypt.compare(password,this.password);
};

//json web token 
userSchema.methods.generatedToken =  async function () {
try{
    return jwt.sign({
        userId:this._id.toString(),
        email:this.email,
        isAdmin: this.isAdmin,
    },
    process.env.JWT_SECRET_KEY,
    {
    expiresIn: "30d",
    }
);



}catch (error){
    console.error(error);
}
};


//defiine the model and colllection name
const User = new mongoose.model("User",userSchema);
module.exports = User;