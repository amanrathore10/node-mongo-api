const _ = require('lodash');

const remove = ({ Question },{ config }) => async(req,res,next) => {

    try{
        const {_id} = req.params;
        const question = await Question.findOneAndRemove({_id});
        res.status(200).send({question});
    }catch(error){
        next(error);
    }
}

module.exports = remove ;