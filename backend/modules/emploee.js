const mongoose = require('mongoose')

const empSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:[true,'must provoid name'],
        unique: true,
    },
    Email:{
        type:String,
        required:true,
        unique: true,
    },
    Password:{
        type:String,
        required:true,
    },
})

module.exports = mongoose.model('Employee',empSchema)