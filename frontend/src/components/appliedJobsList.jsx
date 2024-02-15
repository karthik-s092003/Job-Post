import EmpNavBar from "./empNavBar"
import { useEffect, useState } from "react"
import { get_empName } from "./services/empApi"
import { get_all_appliedJobs } from "./services/empApi"
import "./appliedJobsList.css"
import AppliedJob from "./APPLIEDJOB"
function AppliedJobsList (){
    const [emp,setEmp] = useState({Name:"LogIn",Email:""})
    const [logedIn,setLogedIn] = useState("Log In")
    const [appliedJobs,setAppliedJobs] = useState([])
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
        <EmpNavBar emp={emp} logedIn={logedIn}/>
        <div className="list">
           {appliedJobs.map((job)=>{
                return <AppliedJob companyName={job.companyName} title={job.title} salary={job.salary} Qualification={job.Qualification} Experience={job.Experience} Previous_ctc={job.Previous_ctc} ReasonToJoin={job.ReasonToJoin} status={job.status}/>
           })}
        </div>
    </div>
    </>
}

export default AppliedJobsList