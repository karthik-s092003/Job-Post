import "./offersList.css"
import Jobs from "./job"
import { useState } from "react"
import ApplicationForm from "./applicationForm"
import {get_empName} from "./services/empApi"

function JobOffers(props){
    const [formData,setFormData] =  useState({
        Name: props.Name,
        companyName: "",
        title: "",
        salary: "",
        Qualification: "",
        Experience: "",
        Previous_ctc: 0,
        ReasonToJoin: "",
    })

    function setDetails(data){
        setFormData((prevValue)=>{
            return{...prevValue,companyName:data.companyName,title:data.title,salary:data.salary}
        })
    }

    function qualification(q) {
        setFormData(prevData => ({
            ...prevData,
            Qualification:q
          }));
    }

    function exp(e) {
        setFormData(prevData => ({
            ...prevData,
            Experience:e
          }));
    }

    function ctc(c) {
        setFormData(prevData => ({
            ...prevData,
            Previous_ctc:parseFloat(c)
          }));
    }
    
    function reason(r) {
        setFormData(prevData => ({
            ...prevData,
            ReasonToJoin:r
          }));
    }
    const handleSubmit = async()=>{
        console.log("hello === ",formData);
        await props.applyForJob(formData);
    }
    const setName = async()=>{
        const data = await get_empName();
        setFormData((prevValue)=>{
            return{...prevValue,Name:data.Name}
        })
    }
    return <>
    <div className="list">
    {props.applicationDisp&&<ApplicationForm toggelDisp={props.toggelDisp} handleSubmit={handleSubmit} err={props.err} errDisp={props.errDisp} setDetails={setDetails} qualification={qualification} ctc={ctc} exp={exp} reason={reason}/>}
        {props.list.length ===0?<span>No job offers</span>:<span></span>}
        {props.list.map((job)=>{
            return <Jobs 
            id={job._id}
            companyName={job.companyName}
            title={job.title}
            jobDescription={job.jobDescription}
            location={job.location}
            salary={job.salary}
            applicationEmail={job.applicationEmail}
            expiresAt={job.expiresAt} 
            toggelDisp={props.toggelDisp}
            applicationDisp={props.applicationDisp}
            Name={props.Name}
            applyForJob={props.applyForJob}
            err={props.err} errDisp={props.errDisp}
            setDetails={setDetails}
            setName = {setName}
        />
        })}
    </div>
    </>
}

export default JobOffers