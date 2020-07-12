const _ = require('lodash');

const get = ({Answer},{config}) => async(req,res,next) =>{
    const {id} = req.params;
    try{
        const answer = await Answer.findById(id);
        res.status(200).send({answer});
    }catch(error){
        next(error);
    }
}

module.exports = get ;