const mongoose =require('mongoose');

const Schema =mongoose.Schema;

const registration = new Schema({

    name:{
        type:String
    },
    password:{
        type:String
    }

})

const Model = mongoose.model('registraion', registration);

module.exports= Model