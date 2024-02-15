import "./offersList.css"
import Jobs from "./job"


function JobOffers(props){

    return <>
    <div className="list">
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
        />
        })}
    </div>
    </>
}

export default JobOffers