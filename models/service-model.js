const {Schema ,model, Mongoose} = require("mongoose");

const serviceSchema = new Schema({
    tittle:{ type:String,required:true},
    description:{  type:String,required:true},
    imageUrl:{ type:String,required:true},
    link:{  type:String,required:true},
    createdAt:{  type:Date,default:Date.now },
});

const  Service =  new model('Service', serviceSchema);

module.exports = Service; 



