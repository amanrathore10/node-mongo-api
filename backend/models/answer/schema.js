const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema ({
    questionId:{
        type:ObjectId,
        required:true
    },
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
    
},
{timestamps:true}
);

module.exports = schema ;