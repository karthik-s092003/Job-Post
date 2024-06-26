import "../components/Login.css";
import React,{useState} from "react";
import {  company_Signup} from "./services/Api";
import {useNavigate} from "react-router-dom";
import { FaSpinner } from 'react-icons/fa';
function Login(){
    const [data, setData] = useState({
        companyName: '',
        Email: '',
        Password: '',
        confirmPassword:''
      });
      const [isloading,setIsloading] = useState(false)
      const navigate = useNavigate();
      const [msg,setMsg] = useState("")
      const [disp,setDisp] = useState({display:"none"})
  function name(event){

    setData(prevData => ({
      ...prevData,
      companyName: event.target.value
    }));
  }
  function email(event){
   
    setData(prevData => ({
      ...prevData,
      Email: event.target.value
    }));
  }
  function password(event){
  
    setData(prevData => ({
      ...prevData,
      Password:event.target.value
    }));
  }
  function confirm(event){
    setData(prevData => ({
      ...prevData,
      confirmPassword:event.target.value
    }));
  }
  const handleSubmit =async ()=>{
    try {
      setIsloading(true)
      const res = await company_Signup(data);
      if(res === "successfull"){
       navigate("/job-post");
     }
     else{
       setMsg(res._message)
       setDisp({display:"flex"})
     }
    } catch (error) {
      console.log(error);
    }
    finally{
      setIsloading(false)
    }
  }

  function signIn(){
    navigate("/company/signin")
  }
  return <div className="companyLogin">
  <div className="card1">
    <div className="brand">
      <h1>CareerNavigator</h1>
    </div>
    <div className="msgbox">
      <h2>Welcome!!!</h2>
      <span>Already have an account?</span>
    </div>
      <button onClick={signIn}>Sign In</button>    
  </div>
  <div className="card2">
    <div className="title">
        <span>Register your company</span>
    </div>
    <div className="inn">
        <div className="set">
          <input type="text" placeholder="Company name" onChange={name}/>
        <i className='bx bxs-user icon'></i>
        </div>
        <div className="set">
          <input type="text" placeholder="Emali or Phone" onChange={email}/>
        <i className='bx bxs-user icon'></i>
        </div>
        <div className="set">
          <input type="password" placeholder="Password" onChange={password}/>
        <i className='bx bxs-lock-alt icon' ></i>
        </div>
        <div className="set">
          <input type="password" placeholder="Confirm Password" onChange={confirm}/>
        <i className='bx bxs-lock-alt icon' ></i>
        </div>
    </div>
    <div className="errors" style={disp}>
        <span>{msg}</span>
      </div>
    <div className="submit">
        <button onClick={handleSubmit} className="btn flex justify-center items-center">{isloading?<FaSpinner className="animate-spin text-white" size={20} />:<p>Sign Up</p>}</button>
    </div>
  </div>
  </div>
}

export default Login;