const User = require ("../models/user-model");
const Contact = require("../models/contact-model");
const getAllUsers = async (req,res)=>{
    try{
        const users = await  User.find({},{password:0 });
        if(!users|| users.length  === 0){
         return   res.status(404).json ({message:"No users Found"});
            
        }

   return res.status(200).json(users);


    }catch(error){
        next(error);
    }

};
//single user logic
const getUserByID = async(req,res) => {
    try{
      const id = req.params.id;           
     const data = await User.findOne({_id:id },{password:0});             
      return res.status(200).json(data);


    }catch(Error){
     next(Error);
    }

}

//update user logic
const updateUserById = async  (req,res) => {
    try{
      const id = req.params.id;
      const updateUserData = req.body;
      const  updatedData= await User.updateOne({_id:id},{
        $set: updateUserData,
      });

return  res.status(200).json(updatedData);

    }catch(Error){
     next(Error)
    }
}

 


//user delete logic

const deleteUserById = async(req,res) => {
    try{
      const id = req.params.id;           
      await User.deleteOne({_id: id});             
      return res.status(200).json({message:"User Deleted  Successfully"});


    }catch(Error){
     next(Error);
    }

}

const getAllContacts = async(req,res) => {
    try{
        const contacts = await Contact.find();
        if(!contacts|| contacts.length  === 0){
            return   res.status(404).json ({message:"No contacts Found"});
        }     
        return res.status(200).json(contacts);

    }catch(error){
        next(error);
    }

}; 

module.exports = {getAllUsers,getAllContacts,deleteUserById,getUserByID,updateUserById };  