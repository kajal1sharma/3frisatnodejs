const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const taskModel = Schema({

    taskName:{
        type:String
    },
    userId:{
        type: mongoose.SchemaTypes.ObjectId('user')
    }

})

module.exports = mongoose.model('tasklist', taskModel);