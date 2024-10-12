const mongoose  = require('mongoose');

//const URI = " mongodb://127.0.0.1:27017/MERN_ADMIN"
//mongoose.connect(URI);
const URI = process.env.MONGODB_URI;

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("connnection  to database is successful");
    }
    catch (error) {
        console.log(error);
        
        console.error("database connectoin failed");

        process.exit(0);


}
};

module.exports =  connectDb;
