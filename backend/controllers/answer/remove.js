const _ = require('lodash');

const remove = ({ Answer },{ config }) => async(req,res,next) => {

    try{
        const {_id} = req.params;
        const answer = await Answer.findOneAndRemove({_id});
        res.status(200).send({answer});
    }catch(error){
        next(error);
    }
}

module.exports = remove ;