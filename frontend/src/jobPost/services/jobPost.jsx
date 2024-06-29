import axios from 'axios';
const FETCHURI = "https://jobpost-cknl.onrender.com/api/v1"
// const FETCHURI ="http://localhost:3060/api/v1"

const cmpJobOffers = async (data) => {
    console.log(data);
    const token = localStorage.getItem('token')
    try {
      const res = await axios.get(`${FETCHURI}/company/applications?companyName=${data}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log("jobs of cmp = ",res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const get_cmpName = async () =>{
    try {
      const token = localStorage.getItem('token')
      const res = await axios.get(`${FETCHURI}/company/decode`,{
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
      const res = await axios.post(`${FETCHURI}/company/add`,data,{
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

  const company_signIn = async (data) =>{
    console.log(data);
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

  const company_Signup = async (data) => {
    console.log(data);
  
    try {
      const response = await axios.post(`${FETCHURI}/company/register`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      localStorage.setItem('token', response.data.token)
      return response.data.msg;
    } catch (error) {
      console.log('Error during company registration:', error.response.data.msg);
      return error.response.data.msg;
    }
  };

  const email_verification = async (email)=>{
    const data = {email:email}
    try {
      const response = await axios.post(`${FETCHURI}/company/emailVerification`,data,{
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return response.data.message  
    } catch (error) {
      console.log('Error during company registration:', error.response.data.msg);
      return error.response.data.msg;
    }
  }

  const getJobTitles = async ()=>{
    const token = localStorage.getItem('token')
    try {
      const res = await axios.get(`${FETCHURI}/company/jobs`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      return error.response.data.msg;
    }
  }


  const getJobApplicants = async (id)=>{
    const token = localStorage.getItem('token')
    try {
      const res = await axios.get(`${FETCHURI}/company/applicants?jobId=${id}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      return error.response.data.msg;
    }
  }

  const acceptOrReject = async(data)=>{
    const token = localStorage.getItem('token')
    try {
      const res = await axios.post(`${FETCHURI}/company/acceptorreject`,data,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      return res.data;
    } catch (error) {
  
      console.log(error);
      return error.response.data.msg
    }
  }

export {cmpJobOffers,acceptOrReject,getJobApplicants,get_cmpName,createJobPost,company_signIn,email_verification,company_Signup,getJobTitles}