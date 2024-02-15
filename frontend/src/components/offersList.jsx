import "./offersList.css"
import Post from "./post"

function OfferList (props) {
    function search(e){
        props.search(e.target.value)
    }
    return <>
    <div className="list">
            <div className="cmpSearch">
                <input type="text" placeholder="Search by job title . . ." onChange={search}/>
                <div>
                    <i class='bx bx-search'></i>    
                </div>
            </div>
        {props.list.length ===0?<span>No job offers</span>:<span></span>}
        {props.list.map((job)=>{
            return <Post 
            id={job._id}
            companyName={job.companyName}
            title={job.title}
            jobDescription={job.jobDescription}
            location={job.location}
            salary={job.salary}
            applicationEmail={job.applicationEmail}
            expiresAt={job.expiresAt} 
            dell={props.dell}
            updateItem={props.updateItem}
        />
        })}
    </div>
    </>
    
}

export default OfferList