const mongoose = require('mongoose')

const JobsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'must provoid name'],
        trim:true,
        maxlength:[20,'Job title can not be more than 20 characters']
    },
    jobDescription: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
        trim:true,
        maxlength:[30,'Job title can not be more than 20 characters']
    },
    location: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: false,
    },
    applicationEmail: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
      expiresAt: {
        type: Date, 
        required: true,
    },
})

module.exports = mongoose.model('Job',JobsSchema)