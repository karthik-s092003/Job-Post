import axios from "axios";

const get_empName = async ()=>{
    const token = localStorage.getItem('token')
    try {
      const res = await axios.get("http://localhost:3060/api/v1/emp/decode",{
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
        const res = await axios.get("http://localhost:3060/api/v1/emp/allJobs",{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    console.log(res.data);
    return res.data;
    } catch (error) {
        return ([])
    }
}

const applyJob = async (data)=>{
    console.log("DATA === " ,data);
    const token = localStorage.getItem('token')
    try {
        const res = await axios.post("http://localhost:3060/api/v1/emp/applyjob",data,{
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
        const res = await axios.get(`http://localhost:3060/api/v1/emp/appliedjobs?Name=${Name}`,{
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


export {get_empName,get_all_jobs,applyJob,get_all_appliedJobs}