const mongoose = require('mongoose')

const status = new mongoose.Schema({
    empId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
    },
    FirstName:{
        type:String,
        required:[true,'must provoid name'],
    },
    LastName:{
        type:String,
        required:[true,'must provoid name'],
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,   
    },
    jobId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
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