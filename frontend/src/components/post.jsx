import "./offersList.css"
import { updateOfer } from "./services/Api";
import {  useState } from "react";
import UpdateJobs from "./updateBox";
function Post(props) {

    const [disp,setDisp] = useState({display:"none"});
    function Display() {
        setDisp({display:"flex"})
        setErr_disp({display:"none"})
    }

    function dispNone(){
        setDisp({display:"none"})
    }

    const [data,setData] = useState({
        companyName:props.companyName,
        applicationEmail:props.applicationEmail,
        title:'',
        jobDescription:'',
        location:'',
        salary:0,
        expiresAt:'',
        id:props.id
    })

    function title(event){
   
        setData(prevData => ({
          ...prevData,
          title: event.target.value
        }));
    }

    function jobDescription(event){
   
        setData(prevData => ({
          ...prevData,
          jobDescription: event.target.value
        }));
    }

    function location(event){
   
        setData(prevData => ({
          ...prevData,
          location: event.target.value
        }));
    }

    function salary(event){
   
        setData(prevData => ({
          ...prevData,
          salary: parseFloat(event.target.value)
        }));
    }

    function expire(event){
   
        setData(prevData => ({
          ...prevData,
          expiresAt: event.target.value
        }));
    }

    function del() {
        props.dell(props.id)
    }
    const [err,setErr] = useState("");
    const [err_disp,setErr_disp] =  useState({display:"none"})

    const handleSubmit = async()=>{
        const response =await updateOfer(data)
        
        if(response === "successfull"){
            setErr_disp({display:"none"})
            props.updateItem(data)
            dispNone();
        }
        else{
            console.log(response);
            setErr(response);
            setErr_disp({display:"flex"})
        }
    }

    return<>
        <div className="post">
            <div className="icons">
            <i class='bx bx-trash' onClick={del}></i>
            <i class='bx bx-edit-alt' onClick={Display} ></i>
            </div>
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
        </div>
        <UpdateJobs disp={disp} dispNone={dispNone} title={title} expire={expire} salary={salary} location={location} jobDescription={jobDescription} handleSubmit={handleSubmit} err={err} err_disp={err_disp}/>
    </>
}

export default Post