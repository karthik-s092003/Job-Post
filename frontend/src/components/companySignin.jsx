import { useState } from "react";
import { company_signIn } from "./services/Api";
import {useNavigate} from "react-router-dom";
import { FaSpinner } from 'react-icons/fa';
function CompanySignIn(){
    const [data, setData] = useState({
        Email: '',
        Password: ''        
      });
      const [disp,setDisp] = useState({display:"none"})
      const [msg,setMsg] = useState("")
      const [isloading,setIsloading] = useState(false)
      const navigate = useNavigate();
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

      const submit =async ()=>{
        try {
          setIsloading(true)
          const res =await company_signIn(data);
          console.log(res);
          if(res==="successfull"){
           navigate("/job-post")
          }
          else{
           setMsg(res);
           setDisp({display:"flex"})
          }
        } catch (error) {
          console.log(error);
        }
        finally{
          setIsloading(false)
        }
      }
      function signUp(){
        navigate("/company/signup")
      }
    return <>
    <div className="companyLogin">
    <div className="card1">
    <div className="brand">
      <h1>CareerNavigator</h1>
    </div>
    <div className="msgbox">
      <h2>Welcome Back!</h2>
      <span>Do not have an account?</span>
    </div>
      <button onClick={signUp}>Sign Up</button>    
  </div>
    <div className="card2">
      <div className="title">
          <span>Sign In</span>
      </div>
      <div className="inn">
          <div className="set">
            <input type="text" placeholder="Company Emali Id" onChange={email} />
          <i className='bx bxs-user icon'></i>
          </div>
          <div className="set">
            <input type="password" placeholder="Password" onChange={password}/>
          <i className='bx bxs-lock-alt icon' ></i>
          </div>
      </div>
      <div className="errors" style={disp}>
        <span>{msg}</span>
      </div>
      <div className="submit">
          <button className="btn flex justify-center items-center" onClick={submit}>{isloading?<FaSpinner className="animate-spin text-white" size={20} />:<p>Sign In</p>}</button>
      </div>
    </div>
    </div>
    </>
}

export default CompanySignIn;