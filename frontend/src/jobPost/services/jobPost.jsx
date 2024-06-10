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

export {cmpJobOffers,get_cmpName}