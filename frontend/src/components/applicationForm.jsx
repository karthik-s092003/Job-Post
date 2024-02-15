import "./applicationForm.css"
import { useState } from "react"

function ApplicationForm (props){
    const [formData,setFormData] =  useState({
        Name: props.Name,
        companyName: props.companyName,
        title: props.title,
        salary: props.salary,
        Qualification: "",
        Experience: "",
        Previous_ctc: 0,
        ReasonToJoin: "",
    })

    function qualification(e) {
        setFormData(prevData => ({
            ...prevData,
            Qualification:e.target.value
          }));
    }

    function exp(e) {
        setFormData(prevData => ({
            ...prevData,
            Experience:e.target.value
          }));
    }

    function ctc(e) {
        setFormData(prevData => ({
            ...prevData,
            Previous_ctc:parseFloat(e.target.value)
          }));
    }
    
    function reason(e) {
        setFormData(prevData => ({
            ...prevData,
            ReasonToJoin:e.target.value
          }));
    }

    function handleSubmit(){
        console.log("formdat = ",formData);
        props.applyForJob(formData)
    }

    return<>
     <div className="form">
        <div className="Backdrop" onClick={props.toggelDisp}></div>
        <div className="jobOffers">
            <div className="title">
                <span>Application form</span>
            </div>
            <div className="cont">
                <div className="row">

                <div className="elements left">
                <span>Qualification</span>
                <input type="text" placeholder="Enter your qualification..." onChange={qualification}/>
                </div>
                <div className="elements right">
                <span>Experience</span>
                <input type="text" placeholder="Enter your Experience..." onChange={exp}/>
                 </div>
                </div>
                <div className="row">
            <div className="elements left">
                <span>Previous ctc</span>
                <input type="text" placeholder="Enter your Previous ctc..." onChange={ctc}/>
            </div>
            <div className="elements right">
                <span>Why do you need this job</span>
                <input type="text" placeholder="Enter your ans..." onChange={reason}/>
            </div>
                </div>
            </div>
            {props.errDisp&&<div className="errr">
                <span>{props.err}</span>
            </div>}
            <div className="sub">

            <button onClick={handleSubmit}>submit</button>
            </div>
        </div>
     </div> 
    </>
}

export default ApplicationForm