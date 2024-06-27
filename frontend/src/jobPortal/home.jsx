import { FiSearch } from "react-icons/fi";
import Card from "./card";
import NavBar from "./navbar";
import "../index.css"
import "./jobPortal.css"
import Details from "./details";
import { get_all_jobs } from "./services/jobportal";
import { useEffect, useState } from "react"
import { get_company_details,getAllLocations,getAllCmp,get_empName } from "./services/jobportal";
import { searchFilter } from "./services/jobportal";
import JobPortalForm from "./Job-portal-Form";

function JobPortalDashBoard() {
    const [list,setList] = useState([])
    const [selectedJob, setSelectedJob] = useState(null);
    const [companyDetails,setcompanyDetails] = useState({});
    const [jobtype, setjobtype] = useState({
      fullTime: false,
      partTime: false,
      internship: false,
      contract:false,
    });
    const [cmp,setCpm] = useState([])
    const [loc,setLoc] = useState([])
    const [cmpCheckedCheckbox, setCmpCheckedCheckbox] = useState(null);
    const [locCheckedCheckbox, setLocCheckedCheckbox] = useState(null);
    const [searchObject , setSearchObejct] = useState({
      jobType:"",
      location:"",
      companyName:"",
      title:"",
      salary:0,
    })
    const [salary,setSalary] = useState(0);
    const [empDetails,setEmpDetails] = useState({Name: 'Log In', Email: ''})
    const [form,setForm] = useState(false)

    const handleCardClick = async (job) => {
      setSelectedJob(job);
      console.log(job);
      try {
        const res = await get_company_details(job.companyId)
        setcompanyDetails(res);
    } catch (error) {
        console.error("Error fetching data", error);
    }
    };
    useEffect(()=>{
      const decode = async ()=>{
          try {
              const res = await get_all_jobs()
              const companies = await getAllCmp()
              const locations = await getAllLocations()
              const emp = await get_empName()
              setEmpDetails(emp)
              setCpm([...companies])
              setLoc([...locations])
              setList([...res])
          } catch (error) {
              console.error("Error fetching data", error);
          }
      }
        decode()
    },[])

    useEffect(()=>{
      console.log(list,cmp,loc);
      console.log(companyDetails);
    },[list,companyDetails,cmp,loc])

    const searchBar = async (e)=>{
      try {
        setSearchObejct((prevValue)=>{
          return {...prevValue,title:e.target.value}
        })
        const {jobs} = await searchFilter({
          jobType:searchObject.jobType,
          location:searchObject.location,
          companyName:searchObject.companyName,
          title:e.target.value,
          salary:searchObject.salary
        })
      if(!jobs){
        setList([])
      }
      setList([...jobs])
      } catch (error) {
        console.log(error);
      }
    }

    const handleCheckboxChange = async (event)=>{
      const { name,value } = event.target;
      const newjobtype = Object.keys(jobtype).reduce((acc, key) => {
        acc[key] = key === name;
        return acc;
      }, {});
      setjobtype(newjobtype)
      try {
        setSearchObejct((prevValue)=>{
          return {...prevValue,jobType:value}
        })
        const {jobs} = await searchFilter({
          jobType:value,
          location:searchObject.location,
          companyName:searchObject.companyName,
          title:searchObject.title,
          salary:searchObject.salary
        })
      if(!jobs){
        setList([])
      }
      setList([...jobs])
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(()=>{
      console.log("search object = ",searchObject);
    },[searchObject])

    const clearFilter =async ()=>{
      setjobtype({
        fullTime: false,
        partTime: false,
        internship: false,
        contract:false,
        
      })
      setCmpCheckedCheckbox(null)
      setLocCheckedCheckbox(null)
      setSearchObejct({
        jobType:"",
        location:"",
        companyName:"",
        title:"",
        salary:0
      })
      try {
        const res = await get_all_jobs()
        setList([...res])
    } catch (error) {
        console.error("Error fetching data", error);
    }
    }

    const handleLocCheckbox =async (loc) => {
      setLocCheckedCheckbox(loc);
      try {
        setSearchObejct((prevValue)=>{
          return {...prevValue,location:loc}
        })
        const {jobs} = await searchFilter({
          jobType:searchObject.jobType,
          location:loc,
          companyName:searchObject.companyName,
          title:searchObject.title,
          salary:searchObject.salary
        })
      if(!jobs){
        setList([])
      }
      setList([...jobs])
      } catch (error) {
        console.log(error);
      }
    };

   const handleCmpCheckbox = async (company) => {
    setCmpCheckedCheckbox(company);
    console.log("cmp =",company);
    try {
      setSearchObejct((prevValue)=>{
        return {...prevValue,companyName:company,}
      })
      const {jobs} = await searchFilter({
        jobType:searchObject.jobType,
        location:searchObject.location,
        companyName:company,
        title:searchObject.title,
        salary:searchObject.salary
      })
    if(!jobs){
      setList([])
    }
    setList([...jobs])
    } catch (error) {
      console.log(error);
    }
   };
   const handleSalaryFilter = async (e)=>{
      setSalary(e.target.value);
      try {
        const {jobs} = await searchFilter({
          jobType:searchObject.jobType,
          location:searchObject.location,
          companyName:searchObject.companyName,
          title:searchObject.title,
          salary:e.target.value
        })
        if(!jobs){
          setList([])
        }
        setList([...jobs])
      } catch (error) {
        console.log(error);
      }
   }
   const handleForm = ()=>{
    setForm(!form)
   }
   if(form){
    return <JobPortalForm handleForm={handleForm}/>
   }
    return <>
    <div className="w-screen h-screen relative">
        <NavBar emp={empDetails}/>
        <div className="w-full h-[90%] flex">
            <div className="w-[20%] h-full overflow-y-scroll bg-white">
          <div className="border-b p-4 h-16 flex items-center gap-24">
            <span className="uppercase font-semibold text-xs">Filter</span>
            <span onClick={clearFilter} className="uppercase font-semibold text-xs text-blue-600 cursor-pointer">Clear All</span>
          </div>
          <div className="border-b p-4 h-40">
            <span className="uppercase font-semibold text-xs">Job Type</span>
            <ul className="pl-2 py-4 flex-col">
                <li className="flex gap-2 items-center mb-2" >
                <input id="link-checkbox" name="fullTime" checked={jobtype.fullTime} onChange={handleCheckboxChange} type="checkbox" value="Full-time" className=" before:content[''] relative h-3 w-3 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-6 before:w-6 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"/>
                  <p className="font-semibold text-xs">FULL TIME</p>
                </li>
                <li className="flex gap-2 items-center mb-2" >
                <input id="link-checkbox" name="partTime" checked={jobtype.partTime} onChange={handleCheckboxChange} type="checkbox" value="Part-time" className=" before:content[''] relative h-3 w-3 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-6 before:w-6 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"/>
                  <p className="font-semibold text-xs">PART TIME</p>
                </li>
                <li className="flex gap-2 items-center mb-2" >
                <input id="link-checkbox" name="internship" checked={jobtype.internship} onChange={handleCheckboxChange} type="checkbox" value="Internship" className=" before:content[''] relative h-3 w-3 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-6 before:w-6 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"/>
                  <p className="font-semibold text-xs">INTERNSHIP</p>
                </li>
                <li className="flex gap-2 items-center mb-2" >
                <input id="link-checkbox" name="contract" checked={jobtype.contract} onChange={handleCheckboxChange} type="checkbox" value="Contract" className=" before:content[''] relative h-3 w-3 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-6 before:w-6 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"/>
                  <p className="font-semibold text-xs">CONTRACT</p>
                </li>
            </ul>
          </div>
          <div className="border-b p-4 h-40">
            <span className="uppercase font-semibold text-xs">LOCATION</span>
            <ul className="pl-2 py-4 flex-col overflow-y-scroll ScrollBar">
                {loc.length > 0 ? (
                  loc.map((location) => (
                    <li className="flex gap-2 items-center mb-2" >
                    <input id="link-checkbox" type="checkbox"  checked={locCheckedCheckbox === location} onChange={() => handleLocCheckbox(location)} value="" className=" before:content[''] relative h-3 w-3 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-6 before:w-6 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"/>
                    <p className="font-semibold text-xs">{location}</p>
                </li>
                ))
              ) : (
              <p className="text-xs">No jobs found</p>
              )}
            </ul>
          </div>
          <div className="border-b p-4 h-40"> 
            <span className="uppercase font-semibold text-xs">Salary: </span>
            <span className="font-semibold text-xs">{salary} INR and above</span>
            <input type="range" max="300000" min="0" step="10000" value={salary} onChange={handleSalaryFilter} class="w-full h-2 bg-gray-300 rounded outline-none appearance-none mt-10"/>
          </div>
          <div className="border-b p-4 h-40">
            <span className="uppercase font-semibold text-xs">COMPANY</span>
            <ul className="pl-2 py-4 flex-col">
            {cmp.length > 0 ? (
                  cmp.map((company) => (
                    <li className="flex gap-2 items-center mb-2" >
                    <input id="link-checkbox" checked={cmpCheckedCheckbox === company} onChange={() => handleCmpCheckbox(company)} type="checkbox" value="" className=" before:content[''] relative h-3 w-3 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-6 before:w-6 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"/>
                    <p className="font-semibold text-xs">{company}</p>
                </li>
                ))
              ) : (
              <p className="text-xs">No jobs found</p>
              )}
            </ul>
          </div>
        </div>

        <div className="w-[80%] h-full bg-slate-100 p-10 flex-col">
          <div className="flex gap-5">
            <div className=" relative w-[90%] h-10">
              <input type="text" className=" w-full h-full rounded-sm p-4 font-semibold text-xs" placeholder="Title" onChange={searchBar}/>
              <FiSearch className=" absolute right-4 top-3 opacity-40"/>
            </div>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Search</button>
          </div>

          <div className="flex gap-2 my-4">
            <span className="text-sm opacity-50">Showing</span><span className="text-sm">150</span><span className="text-sm opacity-50">Jobs</span>
          </div>

          <div className="w-full h-[88%] flex">
            <div className="w-[40%] h-full flex-col overflow-y-scroll p-4 ScrollBar pt-0">
              {list.length > 0 ? (
                list.map((li) => (
                  <Card
                    key={li._id}
                    job={li}
                    onClick={() => handleCardClick(li)}
                    isSelected={selectedJob === li}
                  />
                ))
              ) : (
              <p>No jobs found</p>
              )}
            </div>
            <div className="w-[55%] h-full">
             <Details selectedJob={selectedJob} companyDetails={companyDetails} apply={true} handleForm={handleForm}/>
            </div>
          </div> 



        </div>
          
      </div>
    </div>
    </>
}

export default JobPortalDashBoard;