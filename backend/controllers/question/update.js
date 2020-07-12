const _ = require('lodash');

const update = ({ Question },{ config }) => async(req,res,next) => {

    try{
        const {id} = req.params;
        const question = await Question.findById(id);
        _.extend(question,req.body);
        await question.save();
        res.status(200).send({question});
    }catch(error){
        next(error);
    }
}

module.exports = update ;