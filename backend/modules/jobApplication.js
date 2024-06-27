const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: [true, 'First name is required'],
    },
    LastName: {
        type: String,
        required: [true, 'Last name is required'],
    },
    Email: {
        type: String,
        required: [true, 'Email is required'],
    },
    Reason: {
        type: String,
        required: [true, 'Reason for application is required'],
    },
    City: {
        type: String,
        required: [true, 'City is required'],
    },
    State: {
        type: String,
        required: [true, 'State is required'],
    },
    Country: {
        type: String,
        required: [true, 'Country is required'],
    },
    jobId:{
        type:String,
        required:true
    },
    companyId:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('JobApplication', jobApplicationSchema);
