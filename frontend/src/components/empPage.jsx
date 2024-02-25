import "./empPage.css"
import { getAllCmp } from "./services/empApi"
import EmpNavBar from "./empNavBar"
import {get_empName} from "./services/empApi"
import { useEffect, useState } from "react"
import JobOffers from "./JobOffers"
import { get_all_jobs } from "./services/empApi"
import { applyJob } from "./services/empApi"
import { getAllStatus } from "./services/empApi";
import { getAllLocations } from "./services/empApi"
import { searchFilter } from "./services/empApi"

function EmpPage (){
    const [emp,setEmp] = useState({Name:"LogIn",Email:""})
    const [list,setList] = useState([])
    const [logedIn,setLogedIn] = useState("Log In")
    const [appliedJobs,setAppliedJobs] = useState([])
    const [notifications,setNotifications] = useState([])
    const [Loc,setLoc] = useState([])
    const [Cmp,setCmp] = useState([])
    const [search,setSearch] = useState({
        companyName:"",
        location:"",
        title:"",
        salary:0
    })
    useEffect(()=>{
        const decode = async ()=>{
            try {
                const data = await get_empName();
                const res = await get_all_jobs()
                const loc = await getAllLocations();
                const cmp = await getAllCmp();
                setCmp([...cmp])
                setLoc([...loc])
                setList([...res])
                setEmp(data)
                
                if(data.Name !== "Log In"){
                    setLogedIn("Log out")
                }
            } catch (error) {
                console.error("Error fetching employee", error);
            }
        }
        decode()
    },[])

    useEffect(()=>{
        const fetch = async()=>{
            const res = await getAllStatus(emp.Name)
            if(res.msg==="successfull"){
                setNotifications(res.status)
            }
        }
        fetch()
    },[emp])
    
    const [applicationDisp,setApplicationDisp] = useState(false)
    function toggelDisp(){
        const temp = !applicationDisp
        setApplicationDisp(temp)
    }

    const [errDisp,setErrDisp] = useState(false)
    const [err,setErr] = useState("")

    const applyForJob = async(job)=>{
        console.log("job = ",job);
        const res = await applyJob(job)
        if(res === "successfull"){
            setErrDisp(false)
            setAppliedJobs((prevValue)=>[...prevValue,job])
            console.log(appliedJobs);
            toggelDisp()
        }
        else{
            console.log("else ",res);
            setErr(res)
            setErrDisp(true)
        }
    }

  const handleChange =async (event) => {
    setSearch((prevValue)=>{
        return {...prevValue,salary:parseInt(event.target.value)}
    })
    const jobs = await searchFilter({
        companyName:search.companyName,
        location:search.location,
        title:search.title,
        salary:parseInt(event.target.value)
    })
    setList([...jobs])
  };

  const LocFilter = async (e) =>{
    if(e.target.value !== "Location"){
        setSearch((prevValue)=>{
            return {...prevValue,location:e.target.value}
        })
        const jobs = await searchFilter({
            companyName:search.companyName,
            location:e.target.value,
            title:search.title,
            salary:search.salary
        })
        setList([...jobs])
    }
    else{
        setSearch((prevValue)=>{
            return {...prevValue,location:""}
        })
        const jobs = await searchFilter({
            companyName:search.companyName,
            location:"",
            title:search.title,
            salary:search.salary
        })
        setList([...jobs])
    }
  }

  const CmpFilter =async (e) =>{
    if(e.target.value !== "Company"){
        setSearch((prevValue)=>{
            return {...prevValue,companyName:e.target.value}
        })
        const jobs = await searchFilter({
            companyName:e.target.value,
            location:search.location,
            title:search.title,
            salary:search.salary
        })
        setList([...jobs])
    }
    else{
        setSearch((prevValue)=>{
            return {...prevValue,companyName:""}
        })
        const jobs = await searchFilter({
            companyName:"",
            location:search.location,
            title:search.title,
            salary:search.salary
        })
        setList([...jobs])
    }
  }
  const titleFilter =async (e)=>{
    setSearch((prevValue)=>{
        return {...prevValue,title:e.target.value}
    })
    const jobs = await searchFilter({
        companyName:search.companyName,
        location:search.location,
        title:e.target.value,
        salary:search.salary
    })
    setList([...jobs])
  }

    return <>
    <div className="Container">    
        <EmpNavBar emp={emp} logedIn={logedIn} notifications={notifications}/>
        <div className="Profile">
            <i className='bx bxs-user-circle' ></i>
            <span>{emp.Name}</span>
        </div>

        <div className="lists">

            <div className="SearchDiv">
            <input type="text" placeholder="Search by job title..." onChange={titleFilter}/>
            <div>
                <i class='bx bx-search'></i> 
            </div>
            
        </div>
        <div className="filtersDiv">
            <div className="selects">
                <select onChange={LocFilter}>
                <option selected>Location</option>
                {Loc.map((loc)=>{return <option>{loc}</option>})}
            </select>
            <i class='bx bx-chevron-down'></i>
            </div>
            <div className="selects">
                <select onChange={CmpFilter}>
                <option selected>Company</option>
                {Cmp.map((cmp)=>{return <option>{cmp}</option>})}
            </select>
            <i class='bx bx-chevron-down'></i>
            </div>
            <div className="range-input-container">
                <span>Salary</span>
            <input 
            type="range" 
            min="0" 
            max="300000" 
            step="10000"
            value={search.salary} 
            onChange={handleChange} 
            className="custom-range-input" 
            />
                <p>{search.salary} INR and above</p>
            </div>
        </div>
        
            
        </div>
        <JobOffers list={list} applyForJob={applyForJob} Name={emp.Name} applicationDisp={applicationDisp} toggelDisp={toggelDisp} err={err} errDisp={errDisp}/>
    </div>
    </>
}
   
export default EmpPage