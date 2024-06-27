const Jobs = require("../modules/Jobs")
const appliedJobs = require("../modules/appliedJobs")
const Status = require("../modules/status")
const Application = require("../modules/jobApplication")
const { getStorage, ref, listAll,uploadBytesResumable, getDownloadURL } = require('firebase/storage');
const { storage } = require('./firebaseConfig');


const listFiles = async (req, res) => {
    const empName = req.params.empName;
  
    if (!empName) {
      return res.status(400).send('Employee name is required.');
    }
  
    const listRef = ref(storage, empName);
  
    try {
      const resList = await listAll(listRef);
      const files = await Promise.all(
        resList.items.map(async (itemRef) => {
          const downloadURL = await getDownloadURL(itemRef);
          return {
            name: itemRef.name,
            url: downloadURL,
          };
        })
      );
      res.status(200).send(files);
    } catch (error) {
      console.error('Error listing files:', error);
      res.status(500).send('Error listing files.');
    }
  };
  

const handleUpload = async (req, res) => {
    const file = req.file;
    const empName = req.body.empName;
  
    if (!file) {
      return res.status(400).send('No file uploaded.');
    }
  
    if (!empName) {
      return res.status(400).send('Employee name is required.');
    }
  
    try {
      const storageRef = ref(storage, `${empName}/${Date.now()}_${file.originalname}`);
      const metadata = {
        contentType: file.mimetype,
      };
  
      const uploadTask = uploadBytesResumable(storageRef, file.buffer, metadata);
  
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Optional: Handle progress
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        },
        (error) => {
          // Handle unsuccessful uploads
          console.error('Upload failed:', error);
          res.status(500).send('Upload failed.');
        },
        () => {
          // Handle successful uploads on complete
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            res.status(200).send({ url: downloadURL ,msg:"successfull"});
          });
        }
      );
    } catch (error) {
      console.error('Error uploading file:', error);
      res.status(500).send('Error uploading file.');
    }
  };

const searchJobs = async (req,res)=>{
    const  {companyName,location,title,salary,jobType,workspaceType} = req.query;
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
    if(jobType){
        queryObject.jobType = jobType
    }
    if(workspaceType){
        queryObject.workspaceType = workspaceType
    }
    try {
        const jobs = await Jobs.find(queryObject); 
        if (jobs.length === 0) {
            return res.status(201).json({ msg: "No job offers found..." });
        }
        res.status(200).json({ jobs, msg: "Jobs found successfully..." });
    } catch (error) {
        console.error(error.message); 
        res.status(400).json(error.message);
    }
    
}

const applyJob = async (req,res) =>{
    const {FirstName,LastName,Email ,Reason,City,State,Country,jobId,companyId} = req.body
    if(!FirstName||!LastName||!Email||!Reason||!City||!State||!Country||!jobId||!companyId){
        const body = req.body;
        return res.status(400).json({msg:"Make sure you enter all the details"})
    }
    try {
        const job = await Application.create(req.body)
        res.status(201).json({ msg:"successfull",job})
    } catch (error) {
        console.log(error);
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

module.exports = {searchJobs,listFiles,handleUpload,appliedJobsOfEmp,applyJob,decodeToken,getAllJobs,getAllStatus,getLocationList,getCompanyList}