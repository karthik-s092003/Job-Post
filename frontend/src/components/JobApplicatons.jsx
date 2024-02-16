import { useState,useEffect } from "react"
import CmpNavbar from "./cmpHeader"
import { applications } from "./services/Api"
import AppliedJob from "./APPLIEDJOB"


function Applications(){

    const [applicationList,setApplicationList] = useState([])
    useEffect(()=>{
        const decode = async ()=>{
            const {msg,jobs} = await applications("youTube")
            if(msg==="successfull"){
                setApplicationList([...jobs])
            }
        }
        decode()
    },[])
    return <>
        <div className="container">

        <CmpNavbar add={false}/>
        <div className="list">
        {applicationList.length === 0? <span>No jobs found...</span>:<span></span>}
    {applicationList.map((job)=>{
            return <AppliedJob companyName={job.companyName} title={job.title} salary={job.salary} Qualification={job.Qualification} Experience={job.Experience} Previous_ctc={job.Previous_ctc} ReasonToJoin={job.ReasonToJoin} status={job.status}/>
       })}
        </div>
        </div>
    
    </>
}

export default Applications

