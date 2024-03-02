import axios from "axios";
const FETCHURI = "https://jobpost-cknl.onrender.com/api/v1"
// const FETCHURI ="http://localhost:3060/api/v1"

const get_empName = async ()=>{
    const token = localStorage.getItem('token')
    try {
      const res = await axios.get(`${FETCHURI}/emp/decode`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    console.log(res.data);
    return res.data;
    } catch (error) {
        return ({Name:"Log In",Email:""})
    }
}

const get_all_jobs = async ()=>{
    const token = localStorage.getItem('token')
    try {
        const res = await axios.get(`${FETCHURI}/emp/allJobs`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    console.log("new test = ",res.data);
    return res.data;
    } catch (error) {
        return ([])
    }
}

const applyJob = async (data)=>{
    console.log("DATA === " ,data);
    const token = localStorage.getItem('token')
    try {
        const res = await axios.post(`${FETCHURI}/emp/applyjob`,data,{
            headers: {
              Authorization: `Bearer ${token}`,
            },
        })
        console.log(res.data);
        return res.data.msg;
    } catch (error) {
        console.log(error);
        return error.response.data.msg;
    }
}

const get_all_appliedJobs = async (Name)=>{
    console.log("name = ",Name);
    const token = localStorage.getItem('token')
    try {
        const res = await axios.get(`${FETCHURI}/emp/appliedjobs?Name=${Name}`,{
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          console.log("applied jobs = ",res.data);
          return res.data;
    } catch (error) {
        console.log(error); 
    }
}

const getAllStatus = async(Name)=>{
  const token = localStorage.getItem('token')
  try {
    const res = await axios.get(`${FETCHURI}/emp/status?Name=${Name}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  } catch (error) {
    console.log(error); 
  }
}

const getAllLocations = async()=>{
  const token = localStorage.getItem('token')
  try {
    const res = await axios.get(`${FETCHURI}/emp/loc`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  } catch (error) {
    console.log(error); 
  }
}

const getAllCmp = async()=>{
  const token = localStorage.getItem('token')
  try {
    const res = await axios.get(`${FETCHURI}/emp/cmp`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  } catch (error) {
    console.log(error); 
  }
}

const searchFilter = async(data)=>{
  const token = localStorage.getItem('token')
  try {
    const res = await axios.get(`${FETCHURI}/emp/search?salary=${data.salary}&companyName=${data.companyName}&location=${data.location}&title=${data.title}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  } catch (error) {
    console.log(error); 
  }
}


export {get_empName,get_all_jobs,applyJob,get_all_appliedJobs,getAllStatus,getAllLocations,getAllCmp,searchFilter}