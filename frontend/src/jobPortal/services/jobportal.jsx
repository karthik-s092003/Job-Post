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

export {company_LogIn,company_SignIn,get_all_jobs,get_company_details}
  