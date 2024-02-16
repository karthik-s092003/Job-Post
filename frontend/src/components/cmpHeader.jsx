import "./page.css"
import { get_cmpName } from "./services/Api";
import { useEffect, useState } from "react";
import AddJobs from "./offerJobs"
import { createJobPost } from "./services/Api";
import {useNavigate} from "react-router-dom";

function CmpNavbar(props){
    const [name,setName] = useState("LogIN");
    const [emaill,setEmail] = useState("");
    const [err,setErr] = useState("");
    const [logedIn,setLogedIn] = useState("Log In")
    const [err_disp,setErr_disp] =  useState({display:"none"})
    useEffect(()=>{
        const getCmp = async ()=>{
          
                const {cpm,email} = await get_cmpName();
                console.log(cpm);
                if(cpm!=="LogIn"){
                    setLogedIn("Log Out")
                }
                setName(cpm);
                setEmail(email)
                setData(prevData => ({
                    ...prevData,
                    companyName: cpm,
                  }));
                  setData(prevData => ({
                    ...prevData,
                    applicationEmail:email,
                  }));
        };
        getCmp();
    },[])


    const [disp,setDisp] = useState({display:"none"});
    function Display() {
        setDisp({display:"flex"})
    }

    function dispNone(){
        setDisp({display:"none"})
    }

    const [data,setData] = useState({
        companyName:name,
        applicationEmail:emaill,
        title:'',
        jobDescription:'',
        location:'',
        salary:0,
        expiresAt:''
    })

    

    function title(event){
   
        setData(prevData => ({
          ...prevData,
          title: event.target.value
        }));
    }

    function jobDescription(event){
   
        setData(prevData => ({
          ...prevData,
          jobDescription: event.target.value
        }));
    }

    function location(event){
   
        setData(prevData => ({
          ...prevData,
          location: event.target.value
        }));
    }

    function salary(event){
   
        setData(prevData => ({
          ...prevData,
          salary: parseFloat(event.target.value)
        }));
    }

    function expire(event){
   
        setData(prevData => ({
          ...prevData,
          expiresAt: event.target.value
        }));
    }
    
    const handleSubmit =async ()=> {
        console.log(data);
        const response =await createJobPost(data);
        if(response === "successfull"){
            props.addJobOffer(data)
            dispNone();
            setErr_disp({display:"none"})
        }
        else{
            console.log(response);
            setErr(response);
            setErr_disp({display:"flex"})
        }
    }
    const navigate = useNavigate();
    
    
    const[sideBar,setSideBar] = useState(false)
    
    function logIn(){
        if(name!=="LogIn"){
            navigate("/")
        }
        else{
            navigate("/company/signin")
        }
    }
    
    function toggleSideBar (){
        const temp = !sideBar;
        setSideBar(temp)
    }
    function Home(){
        navigate("/company")
    }
    function Application(){
        navigate("/company/applications")
    }

    return <>
        <div className="cpmNavbar">
            <h1>CareerNavigator</h1>
            {props.add&&<button className="offerJob" onClick={Display}><i class='bx bx-plus'></i></button>}
            <i class='bx bx-menu menu' onClick={toggleSideBar}></i>
            {sideBar && <div className="sideBar" >
                     <div className="head">
                        <i class='bx bx-x close' onClick={toggleSideBar}></i>
                        <i className='bx bxs-user-circle profile' ></i>
                        <h2>{name}</h2>
                        <span>{emaill}</span>
                     </div>
                     <div className="empMenu">
                        <span className="MenuItem" onClick={Home}>Home</span>
                        <span className="MenuItem" onClick={Application}>Job Applications</span>
                     </div>
                     <button onClick={logIn}>{logedIn}</button>
                   </div> 
        }
        </div>
        <AddJobs disp={disp} dispNone={dispNone} title={title} expire={expire} salary={salary} location={location} jobDescription={jobDescription} handleSubmit={handleSubmit} err={err} err_disp={err_disp}/>
    </>
} 

export default CmpNavbar;