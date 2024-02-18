const mongoose = require('mongoose')

const status = new mongoose.Schema({
    Name:{
        type:String,
        required:[true,'must provoid name'],
    },
    companyName: {
        type: String,
        required: true,    
    },
    title:{
        type:String,
        required:[true,'must provoid name'],
    },
    msg:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    },
})

module.exports = mongoose.model('Status',status)