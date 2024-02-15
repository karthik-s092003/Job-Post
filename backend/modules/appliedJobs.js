const mongoose = require('mongoose')

const appliedJobsSchema = new mongoose.Schema({
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
    salary: {
        type: Number,
        required: false,
    },
    Qualification:{
        type:String,
        required:true,

    },
    Experience:{
        type:String,
        required:true,
    },
    Previous_ctc:{
        type:Number,
        required:true,
    },
    ReasonToJoin:{
        type:String,
        required:true,
    },
    status:{
        type: Boolean,
        default:false,
    }
})

module.exports = mongoose.model('appliedJobs',appliedJobsSchema)