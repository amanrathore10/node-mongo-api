const _ = require('lodash');

const update = ( { Answer }, { config } ) => async(req,res,next) => {

    try{
        const {id} = req.params;
        const answer = await Question.findById(id);
        _.extend(answer,req.body);
        await answer.save();
        res.status(200).send({answer});
    }catch(error){
        next(error);
    }
}

module.exports = update ;