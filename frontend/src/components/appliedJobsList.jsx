import EmpNavBar from "./empNavBar"
import { useEffect, useState } from "react"
import { get_empName } from "./services/empApi"
import { get_all_appliedJobs } from "./services/empApi"
import "./appliedJobsList.css"
import AppliedJob from "./APPLIEDJOB"
import { getAllStatus } from "./services/empApi";
import logo from '../assets/load.gif'
function AppliedJobsList (){
    const [emp,setEmp] = useState({Name:"LogIn",Email:""})
    const [logedIn,setLogedIn] = useState("Log In")
    const [appliedJobs,setAppliedJobs] = useState([])
    const [notifications,setNotifications] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        const decode = async ()=>{
            try {
                const data = await get_empName();
                setEmp(data)
                setLogedIn("Log out")
            } catch (error) {
                console.error("Error fetching employee", error);
            }
        }
        decode()
    },[])
    useEffect(()=>{
        const fetch = async()=>{
            const res = await getAllStatus(emp.Name)
            if(res.msg==="successfull"){
                setNotifications(res.status)
            }
            setLoading(false)
        }
        fetch()
    },[emp])
    useEffect(()=>{
        const get_jobs = async ()=>{
            try {
                const data = await get_all_appliedJobs(emp.Name);
                console.log("here = ",data);
                setAppliedJobs([...data])
            } catch (error) {
                console.error("Error fetching Jobs", error);
            }
        }
        get_jobs()
    },[emp])
    return <>
    <div className="appliedJobs">
        <EmpNavBar emp={emp} logedIn={logedIn} notifications={notifications}/>
        <div className="list">
        {loading ? <img src={logo} alt="loading..." className="loader"/>:<span></span>}
           {(appliedJobs.length === 0 && loading === false)? <span>No Applications found</span> :appliedJobs.map((job)=>{
                return <AppliedJob companyName={job.companyName} title={job.title} salary={job.salary} Qualification={job.Qualification} Experience={job.Experience} Previous_ctc={job.Previous_ctc} ReasonToJoin={job.ReasonToJoin} status={job.status}/>
           })}
        </div>
    </div>
    </>
}

export default AppliedJobsList