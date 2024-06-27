import axios from 'axios';
const FETCHURI = "https://jobpost-cknl.onrender.com/api/v1"
// const FETCHURI ="http://localhost:3060/api/v1"


const company_SignIn = async (data) => {
    try {
      const response = await axios.post(`${FETCHURI}/company/register`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response);
      localStorage.setItem('token', response.data.token)
      return response.data.msg;
    } catch (error) {
      console.log('Error during company registration:', error.response.data.msg);
      return error.response.data.msg;
    }
  };
  
  const company_LogIn = async (data) =>{
    try {
      const response = await axios.post(`${FETCHURI}/company/login`,data,{
        headers: {
          'Content-Type': 'application/json'
        }
      })
      localStorage.setItem('token', response.data.token)
      console.log(response);
      return response.data.msg;
    } catch (error) {
      console.log('Error during company registration:', error.response.data.msg);
      return error.response.data.msg;
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
    return res.data;
    } catch (error) {
        return ([])
    }
}

const get_company_details = async (id)=>{
    const token = localStorage.getItem('token')
    try {
        const res = await axios.get(`${FETCHURI}/company/details?id=${id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data;
    } catch (error) {
        console.log(error);
    }
}

const searchFilter = async(data)=>{
  const token = localStorage.getItem('token')
  let queryParams = [];
  for (let key in data) {
    if (data[key] !== undefined && data[key] !== null) {
      queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`);
    }
  }
  const queryString = queryParams.join('&');

  const url = `${FETCHURI}/emp/search?${queryString}`;
  try {
    const res = await axios.get(url,{
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

const uploadResume = async (data)=>{
  const token = localStorage.getItem('token')
  const formData = new FormData();
  formData.append('empName', data.FirstName);
  formData.append('file', data.resume);

  try {
    const res = await axios.post(`${FETCHURI}/emp/upload`,formData,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  } catch (error) {
    console.log(error); 
  }
}

const applyForJob = async (data)=>{
  const token = localStorage.getItem('token')
  try {
    console.log("data = ", data);
    const res = await axios.post(`${FETCHURI}/emp/applyjob`,data,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  } catch (error) {
    console.log(error); 
  }
}

export {company_LogIn,company_SignIn,applyForJob,get_all_jobs,get_company_details,searchFilter,getAllLocations,getAllCmp,get_empName,uploadResume}
  