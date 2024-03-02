import { useState,useEffect } from "react"
import CmpNavbar from "./cmpHeader"
import { applications } from "./services/Api"
import MsgBox from "./msgBox"
import Application from "./APPLICATIONS"
import { acceptOrReject } from "./services/Api"
import { get_cmpName } from "./services/Api";
import logo from '../assets/load.gif'


function Applications(){
    const [msg,setMsg] = useState(false)
    const [applicationList,setApplicationList] = useState([])
    const [m,setM] = useState("");
    const [data,setData] = useState({
        Name:"",
        msg:"",
        status:"",
        companyName:"",
        title:""
    })

    useEffect(()=>{
        const getData = async () => {
            try {
                const {cpm} = await get_cmpName();
                const {msg,jobs} = await applications(cpm)
                if(msg==="successfull"){
                    setApplicationList([...jobs])
                    setM(msg);
                }else{
                    setM(msg);
                }
             
            } catch (error) {
                console.error("Error fetching job offers:", error);
            }
        };
        getData();
    },[])



    function accept(formData){
        setData(formData)
    }
    function reject(formData){
        
        setData(formData)
    }
    function toggelDisp(){
        const temp = !msg
        setMsg(temp)
    }

    function message(data){
        setData((prevValue)=>{
            return{...prevValue,msg:data}
        })
    }

    const [errDisp,setErrDisp] = useState(false)
    const [err,setErr] = useState("")

    function error(){
        setErrDisp(false)
    }

    const handleSubmit = async () =>{
        console.log(data);
        const res = await acceptOrReject(data);
        if(res==="successfull"){
            const {msg,jobs} = await applications("youTube")
            if(msg==="successfull"){
                setApplicationList([...jobs])
            }
            toggelDisp();
        }else{
            console.log("else ",res);
            setErr(res)
            setErrDisp(true)
        }
       
    }

    return <>
        <div className="container">
        <CmpNavbar add={false}/>
        <div className="list">
        {msg && <MsgBox toggelDisp={toggelDisp} message={message} handleSubmit={handleSubmit} errDisp={errDisp} err={err}/> }
        {m === ""?  <img src={logo} alt="loading..." className="loader"/>:<span></span>}
    {(applicationList.length === 0 && m!=="") ? <span>{m}</span> :applicationList.map((job)=>{
            return <Application Name={job.Name} companyName={job.companyName} title={job.title} Qualification={job.Qualification} Experience={job.Experience} Previous_ctc={job.Previous_ctc} ReasonToJoin={job.ReasonToJoin} accept={accept} reject={reject} toggelDisp={toggelDisp} error={error}/>
       }) }
        </div>
        </div>
    
    </>
}

export default Applications

