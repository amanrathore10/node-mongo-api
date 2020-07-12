const mongoose = require('mongoose');

class MongoManager{
    constructor(config){
        this._config = config;
    }
    getmongoURL(){
        return this._config.MONGODB_URI;
    }
    connect(){
        return mongoose.connect(this.getmongoURL(),{ useNewUrlParser: true });
    }
}

module.exports = { MongoManager } ;
