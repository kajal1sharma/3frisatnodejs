const mongoose =require('mongoose');

const Schema =mongoose.Schema;

const userModel =Schema({

    username:{
        type:String
    },
    password:{
        type:String
    }

});

const model = mongoose.model('user', userModel);

module.exports =model;