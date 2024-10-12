const {z} = require("zod");

//create ands obj schema
const signupSchema = z.object({
    username: z.
    string({required_error:"NAME  IS REQUIRED"})
    .trim()
    .min(3,{message:  "NAME MUST BE AT LEAST 3 CHARACTERS"})
    .max(255,{message:   "NAME MUST BE AT MOST 255 CHARACTERS"}),

    email: z.
    string({required_error:"NAME  IS REQUIRED"})
    .trim()
    .email({message:  "PLEASE ENTER A VALID EMAIL"})
    .min(3,{message:  "NAME MUST BE AT LEAST 3 CHARACTERS"})
    .max(255,{message:   "NAME MUST BE AT MOST 255 CHARACTERS"}),
    
    phone: z.
    string({required_error:"NAME  IS REQUIRED"})
    .trim()
    
    .min(10,{message:  "Phone MUST BE AT LEAST 10 CHARACTERS"})
    .max(20,{message:   "PHONE MUST BE AT MOST 20 CHARACTERS"}),

    password: z
    .string({required_error:"NAME  IS REQUIRED"})
    
    .min(7,{message:"Password must be at least of 6 characters"})
    .max(1024,{message:   "Password can't be greater than  1024 characters"})

    


    

});

module.exports = signupSchema;