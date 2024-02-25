const Jobs = require("../modules/Jobs")
const appliedJobs = require("../modules/appliedJobs")
const Status = require("../modules/status")

const searchJobs = async (req,res)=>{
    const  {companyName,location,title,salary} = req.query;
    const queryObject = {}
    if(companyName){
        queryObject.companyName = companyName
    }
    if(location){
        queryObject.location = location
    }
    if(title){
        queryObject.title = { $regex: title, $options: 'i' };
    }
    if(salary){
        queryObject.salary = {$gte:salary}
    }
    let Job;
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

const applyJob = async (req,res) =>{
    const {Name,title,companyName,salary,Qualification,Experience,Previous_ctc,ReasonToJoin} = req.body
    if(!title||!companyName||!salary||!Name||!Qualification||!Experience||!Previous_ctc||!ReasonToJoin){
        return res.status(400).json({msg:"Make sure you enter all the details"})
    }
    try {
        const job = await appliedJobs.create(req.body)
        res.status(201).json({ msg:"successfull"})
    } catch (error) {
        console.log(req.body);
        res.status(400).json({msg:"something went wrong...."})
    }
}

const appliedJobsOfEmp = async (req,res)=>{
    const {Name} = req.query;

    if(!Name){
        return res.status(400).json({msg:"Name of the employee is needed"})
    }
    try {
        const jobs = await appliedJobs.find({Name:Name})
        res.status(200).json(jobs)
    } catch (error) {
        res.status(400).json({msg:"something went wrong..."})
    }
}

const decodeToken = async (req,res)=>{
    try {
        res.status(200).json({Name:req.user.Name,Email:req.user.Email})
    } catch (error) {
        res.status(400).json({msg:"something went wrong"})
    }
}

const getAllJobs = async (req,res)=>{
    try {
        const jobs = await Jobs.find({})
        res.status(200).json(jobs)
    } catch (error) {
        res.status(400).json({msg:"something went wrong"})
    }
}

const getAllStatus = async (req,res)=>{
    const {Name} = req.query
    if(!Name){
        res.status(400).json({msg:"please prvoide the name"})
    }
    try {
        const status = await Status.find({Name:Name})
        res.status(200).json({status,msg:"successfull"})
    } catch (error) {
        res.status(400).json({msg:"something went wrong"})
    }
}


const getLocationList = async (req,res)=>{
    try {
        const loc = await Jobs.distinct("location")
        res.status(200).json(loc)
    } catch (error) {
        res.status(400).json({msg:"something went wrong..."})
    }
}

const getCompanyList = async (req,res)=>{
    try {
        const cmp = await Jobs.distinct("companyName")
        res.status(200).json(cmp)
    } catch (error) {
        res.status(400).json({msg:"something went wrong..."})
    }
}

module.exports = {searchJobs,appliedJobsOfEmp,applyJob,decodeToken,getAllJobs,getAllStatus,getLocationList,getCompanyList}