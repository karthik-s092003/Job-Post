import "./page.css"
import EmpNavBar from "./empNavBar"
import {get_empName} from "./services/empApi"
import { useEffect, useState } from "react"
import JobOffers from "./JobOffers"
import { get_all_jobs } from "./services/empApi"
import { applyJob } from "./services/empApi"


function EmpPage (){
    const [emp,setEmp] = useState({Name:"LogIn",Email:""})
    const [list,setList] = useState([])
    const [logedIn,setLogedIn] = useState("Log In")
    const [appliedJobs,setAppliedJobs] = useState([])
    useEffect(()=>{
        const decode = async ()=>{
            try {
                const data = await get_empName();
                const res = await get_all_jobs()
                setList([...res])
                setEmp(data)
                
                if(data.Name !== "Log In"){
                    setLogedIn("Log out")
                }
            } catch (error) {
                console.error("Error fetching employee", error);
            }
        }
        decode()
    },[])

    useEffect(()=>{
        console.log(emp);
    },[emp])
    
    const [applicationDisp,setApplicationDisp] = useState(false)
    function toggelDisp(){
        const temp = !applicationDisp
        setApplicationDisp(temp)
    }

    const [errDisp,setErrDisp] = useState(false)
    const [err,setErr] = useState("")

    const applyForJob = async(job)=>{
        console.log("job = ",job);
        const res = await applyJob(job)
        if(res === "successfull"){
            setErrDisp(false)
            setAppliedJobs((prevValue)=>[...prevValue,job])
            console.log(appliedJobs);
            toggelDisp()
        }
        else{
            console.log("else ",res);
            setErr(res)
            setErrDisp(true)
        }
    }

    useEffect(()=>{
        console.log("state ",appliedJobs);
    },[appliedJobs])

    return <>
    <div className="container">    
        <EmpNavBar emp={emp} logedIn={logedIn}/>
        <JobOffers list={list} applyForJob={applyForJob} Name={emp.Name} applicationDisp={applicationDisp} toggelDisp={toggelDisp} err={err} errDisp={errDisp}/>
    </div>
    </>
}
   
export default EmpPage