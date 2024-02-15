import "./offerJobs.css"
function UpdateJobs(props) {

    return <>
    <div className="backdrop" style={props.disp} onClick={props.dispNone}></div>
        <div className="jobOffer edit" style={props.disp}>
        <div className="title"><span>Update Job Opening</span></div>
        
        <div className="row">
        <div className="elements left">
            <span>Title</span>
            <input type="text" placeholder="Enter job title" onChange={props.title} />
        </div>
        <div className="elements right">
            <span>Discription</span>
            <input type="text" placeholder="Give a brief discription of the job..." onChange={props.jobDescription}/>
        </div>
        </div>
        <div className="row">
        <div className="elements left">
            <span>
                location
            </span>
            <input type="text" placeholder="Enter the work location" onChange={props.location} />
        </div>
        <div className="elements right">
            <span>Salary</span>
            <input type="text" placeholder="Enter the salary package" onChange={props.salary} />
        </div>
        </div>
        <div className="row">
        <div className="elements left">
            <span>Last date for application</span>
            <input type="text" placeholder="Enter the offer expiry data.." onChange={props.expire} />
        </div>
        </div>
        <div className="err" style={props.err_disp}>
            <span>{props.err}</span>
        </div>
        <div className="sub">
            <button onClick={props.handleSubmit}>Submit</button>
        </div> 
        </div>
    
    </>
    
}

export default UpdateJobs;