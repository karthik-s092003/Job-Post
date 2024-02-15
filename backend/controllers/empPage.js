const Jobs = require("../modules/Jobs")
const appliedJobs = require("../modules/appliedJobs")

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
        queryObject.salary = {$lte:salary}
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

module.exports = {searchJobs,appliedJobsOfEmp,applyJob,decodeToken,getAllJobs}