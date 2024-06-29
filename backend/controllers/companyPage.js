const Jobs = require("../modules/Jobs")
const appliedJobs = require("../modules/appliedJobs")
const company = require("../modules/company")
const Status = require("../modules/status")
const Application = require("../modules/jobApplication")

const getALLJobPost = async (req,res)=>{
    try {
        const posts = await Jobs.find({})
        if(posts.length===0){
            res.status(201).json("No job offers.....")
        }
        res.status(200).json({posts})
    } catch (error) {
        res.status(400).json({msg:"something went wrong"})
    }
}


const createJobPost = async (req,res)=>{
    try {
        const job = await Jobs.create(req.body)
        res.status(201).json({ job,msg:"successfull" })
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
}

const getJobPost = async (req,res)=>{
    const {id} = req.params
    let job;
    try {
        job = await Jobs.findOne({_id:id})
        res.status(200).json({job})
    } catch (error) {
        if(!job){
           return res.status(400).json({msg:`Job with id ${id} does not exists`})
        }
        res.status(400).json({msg:"something went wrong"})
    }
}


const deleteJobPost = async (req,res)=>{
    const {id} = req.query
    let job;
    try {
        job = await Jobs.findOneAndDelete({_id:id})
        res.status(200).json({job,msg:"successfull"})
    } catch (error) {
        if(!job){
           return res.status(400).json({msg:`Job with id ${id} does not exists`})
        }
        res.status(400).json({msg:"something went wrong"})
    }
}

const updateJobPost = async (req,res)=>{
    const {id} = req.query
    let job;
    try {
        job = await Jobs.findOneAndUpdate({_id:id},req.body,{
            new:true,
            runValidators: true,
        })
        res.status(200).json({job,msg:"successfull"})
    } catch (error) {
        if(!job){
           return res.status(400).json({msg:`Please enter all the details`})
        }
        res.status(400).json({msg:"something went wrong"})
    }
}

const applied_Jobs = async (req,res)=>{
    const {companyName} = req.query
    if(!companyName){
        return res.status(400).json({msg:"Name of the company is needed"})
    }
    try {
        const jobs = await Jobs.find({companyName:companyName})
        if(jobs.length===0){
            return res.status(200).json({msg:"No job applications found"})
        }
        res.status(200).json({jobs,msg:"successfull"})
    } catch (error) {
        res.status(400).json({msg:"something went wrong"})
    }
}

const acceptOrRejectApplicant = async (req,res)=>{
    const {FirstName,LastName,msg,status,companyId,jobId,empId} = req.body
    if(!FirstName||!LastName||!msg||!status||!companyId||!jobId||!empId){
        return res.status(400).json({msg:"Please enter all the details"})
    }
    let job;
    try {
        job = await Application.findOneAndDelete({empId:empId,jobId:jobId})
        if(!job){
            return res.status(400).json({msg:`Applicant not found`})
         }
        await Status.create(req.body)
        const newList = await Application.find({jobId:jobId});
        res.status(200).json({msg:"successfull",newList})
    } catch (error) {
        res.status(400).json({msg:"something went wrong....",error})
    }
}

const rejectApplicant = async (req,res)=>{
    const {Name} = req.body
    if(!Name){
        return res.status(400).json({msg:"Name is needed"})
    }
    let job;
    try {
        job = await appliedJobs.findOneAndDelete({Name:Name})
        res.status(200).json({job,msg:"Applicant rejected"})
    } catch (error) {
        if(!job){
            return res.status(400).json({msg:`Applicant not found`})
         }
        res.status(400).json({msg:"something went wrong"})
    }
}


const search = async (req,res)=>{
    const {title,companyName} = req.query
    const queryObject = {}
    if(companyName){
        queryObject.companyName = companyName
    }
    if(title){
        queryObject.title = { $regex: title, $options: 'i' };
    }
    try {
        Job =await Jobs.find(queryObject)
        res.status(200).json(Job)        
    } catch (error) {
        if(!Job){
            return res.status(201).json("NO job offers found...")
        }
        res.status(400).json({msg:"something went wrong..."})
    }
}

const getAllApplications = async (req,res)=>{
    const {companyName} = req.query
    if(!companyName){
        return res.status(400).json({msg:"Name of the company is needed"})
    }
    try {
        const jobs = await appliedJobs.find({companyName:companyName})
        if(jobs.length===0){
            return res.status(200).json({msg:"No job applications found"})
        }
        res.status(200).json({jobs,msg:"successfull"})
    } catch (error) {
        res.status(400).json({msg:"something went wrong"})
    }
}

const get_Company_details = async(req,res)=>{
    const {id} = req.query
    try {
        const response = await company.find({_id:id})
        res.status(200).json({companyName:response[0].companyName,companyLogo:response[0].companyLogo})
    } catch (error) {
        res.status(400).json({msg:"something went wrong"})
    }
}

const getAllOfferedJobTitles = async (req, res) => {
    const {cmpId} = req.user;
    try {
        const titles = await Jobs.find({ companyId: cmpId }, 'title'); 
        res.status(200).json(titles);
    } catch (error) {
        res.status(500).json({ msg: "something went wrong",error });
    }
}

const getJobApplicants = async (req,res) =>{
    const {cmpId} = req.user;
    const {jobId} = req.query;
    try {
        const Applicants = await Application.find({companyId:cmpId,jobId:jobId})
        res.status(200).json(Applicants);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "something went wrong",error});
    }
}

module.exports = {getJobApplicants,createJobPost,getAllOfferedJobTitles,deleteJobPost,updateJobPost,getALLJobPost,getJobPost,applied_Jobs,acceptOrRejectApplicant,rejectApplicant,search,getAllApplications,get_Company_details}