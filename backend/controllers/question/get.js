const _ = require('lodash');

const get = ({Question},{config}) => async(req,res,next) =>{
    const {id} = req.params;
    try{
        const question = await Question.findById(id);
        res.status(200).send({question});
    }catch(error){
        next(error);
    }
}

module.exports = get ;