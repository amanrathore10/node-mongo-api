const express = require('express');
const models = require('../models');
const controllers  = require('../controllers');
const {errorHandler} =  require('../middlewares');

const routerInit = (config)=>{
    const router = express();
    
    router.use('/questions',controllers.questions(models,{config}));
    router.use('/answers',controllers.answers(models,{config}));
    router.use(errorHandler);
    return router;
}

module.exports = routerInit;