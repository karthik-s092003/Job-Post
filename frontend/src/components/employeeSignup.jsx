import { useNavigate} from "react-router-dom"
import "../components/Login.css";
import { useState } from "react";
import {emp_Signup} from "./services/Api"
function EmpLogin (){
    const [disp,setDisp] = useState({display:"none"})
    const [msg,setMsg] = useState("")
    const [data, setData] = useState({
        Name: '',
        Email: '',
        Password: '',
        confirmPassword:''
      });
      const navigate = useNavigate();
      function name(event){

        setData(prevData => ({
          ...prevData,
          Name: event.target.value
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
        const res =await emp_Signup(data);
        if(res === "successfull"){
          navigate("/emp");
        }
        else{
          setMsg(res)
          setDisp({display:"flex"})
        }
      }
      function signup(){
        navigate("/emp/signin")
      }
    return <div className="companyLogin">
      <div className="card1">
    <div className="brand">
      <h1>CareerNavigator</h1>
    </div>
    <div className="msgbox">
      <h2>Welcome!!!</h2>
      <span>Already have an acount?</span>
    </div>
      <button onClick={signup}>Sign Up</button>    
  </div>
    <div className="card2">
      <div className="title">
          <span>Sign Up</span>
      </div>
      <div className="inn">
          <div className="set">
            <input type="text" placeholder="Name" onChange={name}/>
          <i className='bx bxs-user icon'></i>
          </div>
          <div className="set">
            <input type="text" placeholder="Emali Id" onChange={email}/>
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
          <button className="btn" onClick={handleSubmit}>Sign Up</button>
      </div>
    </div>
    </div>
}

export default EmpLogin