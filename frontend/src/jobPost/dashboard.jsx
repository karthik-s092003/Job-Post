import React, {  useEffect,useState } from 'react'
import Navbar from './navbar'
import { cmpJobOffers } from './services/jobPost'
import Card from '../jobPortal/card'
import Details from '../jobPortal/details'
import { get_cmpName } from './services/jobPost'
import { get_company_details } from '../jobPortal/services/jobportal'

function Dashboard() {
    const [cmpDetails,setCmpDetails] = useState({})
    const [companyDetails,setcompanyDetails] = useState({});
    const [list,setList] = useState([])
    const [selectedJob, setSelectedJob] = useState(null);
    useEffect(()=>{
        const decode = async ()=>{
            try {
                const cmp = await get_cmpName()
                const {jobs} = await cmpJobOffers(cmp.cpm)
                setList([...jobs])
                setCmpDetails(cmp)
            } catch (error) {
                console.error("Error fetching data", error);
            }
        }
          decode()
    },[])

   const handleCardClick = async (job)=>{
        setSelectedJob(job);
        console.log(job);
        try {
            const res = await get_company_details(job.companyId)
            setcompanyDetails(res);
        } catch (error) {
            console.error("Error fetching data", error);
        }
   }
  return <>
    <div className='w-screen h-screen bg-slate-100'>
        <Navbar cmp={cmpDetails}/>
        <div className='w-full h-[15%] my-8 flex gap-5 items-center justify-center' >
            <div className='w-[20%] h-full bg-white rounded-sm shadow flex flex-col justify-center items-center'>
                <span className='text-lg font-bold'>Full Time Jobs:</span>
                <span className='text-sm font-semibold'>0</span>
            </div>
            <div className='w-[20%] h-full bg-white rounded-sm shadow flex flex-col justify-center items-center'>
                <span className='text-lg font-bold'>Part Time Jobs:</span>
                <span className='text-sm font-semibold'>0</span>
            </div>
            <div className='w-[20%] h-full bg-white rounded-sm shadow flex flex-col justify-center items-center'>
                <span className='text-lg font-bold'>Internships:</span>
                <span className='text-sm font-semibold'>0</span>
            </div>
            <div className='w-[20%] h-full bg-white rounded-sm shadow flex flex-col justify-center items-center'>
                <span className='text-lg font-bold'>Contract:</span>
                <span className='text-sm font-semibold'>0</span>
            </div>
        </div>
        <div className='w-full h-[65%] flex justify-center items-center gap-10'>
            <div className='w-[30%] h-full flex-col overflow-y-scroll p-4 ScrollBar pt-0'>
            {list.length > 0 ? (
                list.map((li) => (
                  <Card
                    key={li._id}
                    job={li}
                    isSelected={selectedJob === li}
                    onClick={() => handleCardClick(li)}
                  />
                ))
              ) : (
              <p>No jobs found</p>
              )}
            </div>
            <div className='w-[42%] h-full'>
                <Details selectedJob={selectedJob} companyDetails={companyDetails} apply={false}/>
            </div>
        </div>
    </div>
    
  </>
}

export default Dashboard