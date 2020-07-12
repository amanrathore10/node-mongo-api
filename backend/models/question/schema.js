const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const schema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    },
    tags:{
        type:[String]
    },
    createdBy:{
        type:ObjectId,
        required:true
    }
},{
    timestamps:true
});

module.exports = schema;