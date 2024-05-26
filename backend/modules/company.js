const mongoose = require('mongoose')

const CompanySchema = new mongoose.Schema({
    companyName:{
        type:String,
        required:[true,'must provoid name'],
        unique: true,
    },
    companyLogo:{
        type:String,
        default:"https://firebasestorage.googleapis.com/v0/b/otp-project-329ec.appspot.com/o/avatardefault_92824.png?alt=media&token=7e89bccf-539e-4a1f-8b62-a37dbec31ef2"
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

module.exports = mongoose.model('company',CompanySchema)