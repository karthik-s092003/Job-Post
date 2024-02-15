import ApplicationForm from "./applicationForm"
import "./offersList.css"

function  Jobs(props) {

   return <>
        {props.applicationDisp&&<ApplicationForm toggelDisp={props.toggelDisp} companyName={props.companyName} title={props.title} salary={props.salary} Name={props.Name} applyForJob={props.applyForJob} err={props.err} errDisp={props.errDisp}/>}
        <div className="post">
            <div className="one">
                 <h2>{props.companyName}</h2>
                 <span>{props.applicationEmail}</span>
            </div>
           <div className="two">
            <span>{props.title}</span>
            <span>{props.jobDescription}</span>
            <span>{props.location}</span>
           </div>
            <div className="three">
            <span>{props.salary} per month</span>
            <span>{props.expiresAt}</span>
            </div>
            <button onClick={props.toggelDisp}>Apply</button>
        </div>
    </>
}

export default Jobs