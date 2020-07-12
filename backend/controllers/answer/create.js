
const _ = require('lodash');

const create = ({Answer},{config})=> async (req,res,next)=>{
    try{
        const answer = new Answer();

        if(!req.body.title){
            throw new Error('title must be present');    
        }
        _.extend(answer,req.body);

        await answer.save();
        res.status(200).send({answer});
    }catch(error){
        next(error)
    }
}
module.exports = create ; 