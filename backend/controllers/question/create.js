
const _ = require('lodash');

const create = ({Question},{config})=> async (req,res,next)=>{
    try{
        const question = new Question();

        if(!req.body.title){
            throw new Error('title must be present');    
        }
        _.extend(question,req.body);

        await question.save();
        console.log(question,'save result');
        res.status(200).send({question});
    }catch(error){
        next(error)
    }

}

module.exports = create ; 