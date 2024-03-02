import "./offersList.css"
import Post from "./post"
import logo from '../assets/load.gif'

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
        {props.msg ===""?<img src={logo} alt="loading..." className="loader"/>:<span></span>}
        {(props.list.length===0 && props.msg !=="" )? <span>No jobs fond</span> :props.list.map((job)=>{
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