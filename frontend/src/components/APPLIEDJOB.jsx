function AppliedJob(props){
    return <>
    <div className="post">
            
            <div className="one">
                 <h2>{props.companyName}</h2>
            </div>
            <div className="two">
            <span>{props.title}</span>
            <span>{props.salary}</span>
            </div>
            <div className="three">
            <span>{props.Qualification}</span>
            <span>{props.Experience}</span>
            <span>{props.Previous_ctc}</span>
            <span>{props.ReasonToJoin}</span>
            </div>
            <div className="four">
                <span>{props.status?"Accepted":"Pending"}</span>
            </div>
    </div>
    </>
}

export default AppliedJob