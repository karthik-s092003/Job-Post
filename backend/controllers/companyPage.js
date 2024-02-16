const Jobs = require("../modules/Jobs")
const appliedJobs = require("../modules/appliedJobs")

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
    const {title,jobDescription,companyName, location,salary,applicationEmail,expiresAt} = req.body
    if(!title||!jobDescription||!companyName|| !location||!salary||!applicationEmail||!expiresAt){
        return res.status(400).json({msg:"Make sure you enter all the details"})
    }
    try {
        const job = await Jobs.create(req.body)
        res.status(201).json({ job,msg:"successfull" })
    } catch (error) {
        res.status(400).json({msg:"something went wrong"})
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
        const jobs = await appliedJobs.find({companyName:companyName})
        if(jobs.length===0){
            return res.status(200).json({msg:"No job applications found"})
        }
        res.status(200).json({jobs,msg:"successfull"})
    } catch (error) {
        res.status(400).json({msg:"something went wrong"})
    }
}

const acceptApplicant = async (req,res)=>{
    const {Name} = req.body
    if(!Name){
        return res.status(400).json({msg:"Name is needed"})
    }
    let job;
    try {
        job = await appliedJobs.findOneAndUpdate({Name:Name},req.body,{
            new:true,
            runValidators: true,
        })
        res.status(200).json({job,msg:"Job Applicant accepted"})
    } catch (error) {
        if(!job){
           return res.status(400).json({msg:`Applicant not found`})
        }
        res.status(400).json({msg:"something went wrong"})
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

module.exports = {createJobPost,deleteJobPost,updateJobPost,getALLJobPost,getJobPost,applied_Jobs,acceptApplicant,rejectApplicant,search}