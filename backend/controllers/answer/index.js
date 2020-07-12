const express = require('express');
const get = require('./get');
const create = require('./create');
const update = require('./update');
const list = require('./list');
const remove = require('./remove');


module.exports  = ( models, {config} )=>{

    const api = express.Router();

    api.get('/',list(models,{config}));
    api.get('/:id',get(models,{config}));
    api.post('/',create(models,{config}));
    api.delete('/:_id',remove(models,{config}));
    api.patch('/:id',update(models,{config}));
    
    return api;
}