
import "./offersList.css"

function  Jobs(props) {
    const apply = async ()=>{
        await props.setDetails({
            companyName: props.companyName,
            title: props.title,
            salary: props.salary,
        })
        await props.setName();
        props.toggelDisp()
    }

   return <>
       
        <div className="Post">
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
            <button onClick={apply}>Apply</button>
        </div>
    </>
}

export default Jobs