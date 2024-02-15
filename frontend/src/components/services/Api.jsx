import axios from 'axios';
const companySignup = async (data)=>{
    console.log(data);
    await fetch("http://localhost:3060/api/v1/company/register",{
      method:"POST",
      body:JSON.stringify(data),
      headers:{'content-type':'application/json'}
    })
}

const empSignup = async (data) =>{
  console.log(data);
  const response =  await fetch("http://localhost:3060/api/v1/emp/register",{
      method:"POST",
      body:JSON.stringify(data),
      headers:{'content-type':'application/json'}
    })
    console.log(response);
}

const emp_Signup = async (data) => {
  console.log(data);

  try {
    const response = await axios.post("http://localhost:3060/api/v1/emp/register", data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response);
    localStorage.setItem('token', response.data.token)
    return response.data.msg;
  } catch (error) {
    console.log('Error during registration:', error.response.data.msg);
    return error.response.data.msg;
  }
};

const company_Signup = async (data) => {
  console.log(data);

  try {
    const response = await axios.post("http://localhost:3060/api/v1/company/register", data, {
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

const company_signIn = async (data) =>{
  console.log(data);
  try {
    const response = await axios.post("http://localhost:3060/api/v1/company/login",data,{
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

const emp_signIn = async (data) =>{
  console.log(data);
  try {
    const response = await axios.post("http://localhost:3060/api/v1/emp/login",data,{
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

const get_cmpName = async () =>{
  try {
    const token = localStorage.getItem('token')
    const res = await axios.get("http://localhost:3060/api/v1/company/decode",{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return ({cpm:"LogIn",email:""})
  }
}

const createJobPost = async (data)=>{
  const token = localStorage.getItem('token')
  try {
    const res = await axios.post("http://localhost:3060/api/v1/company/add",data,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    console.log(res);
    return res.data.msg;
  } catch (error) {
    console.log(error);
    return error.response.data.msg;
  }
}

const cmpJobOffers = async (data) => {
  console.log(data);
  const token = localStorage.getItem('token')
  try {
    const res = await axios.get(`http://localhost:3060/api/v1/company/applications?companyName=${data}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data.jobs;
  } catch (error) {
    console.log(error);
  }
};


const deleteJobOffer = async (id)=>{
  console.log(id);
  const token = localStorage.getItem('token')
  try {
    const res = await axios.delete(`http://localhost:3060/api/v1/company/delete?id=${id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if(res.data.msg === "successfull"){
      return res.data.msg
    }
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

const updateOfer = async(data)=>{
  const token = localStorage.getItem('token')
  try {
    const res = await axios.patch(`http://localhost:3060/api/v1/company/update?id=${data.id}`,data,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if(res.data.msg === "successfull"){
      return res.data.msg
    }
    console.log(res);
  } catch (error) {
    console.log(error);
    return error.response.data.msg;
  }
}


const getSearchJobs = async(data)=>{
  const token = localStorage.getItem('token')
  try {
    const res = await axios.get(`http://localhost:3060/api/v1/company/search?companyName=${data.companyName}&title=${data.title}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  } catch (error) {
    console.log(error);
  }
}




export {companySignup,empSignup,emp_Signup,company_Signup,company_signIn,emp_signIn,get_cmpName,createJobPost,cmpJobOffers,deleteJobOffer,updateOfer,getSearchJobs};