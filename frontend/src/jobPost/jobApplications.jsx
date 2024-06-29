import { useEffect, useState } from "react"
import Navbar from "./navbar"
import { get_cmpName } from "./services/jobPost"
function JobApplications(){
    const [cmpDetails,setCmpDetails] = useState({})
    useEffect(()=>{
        const decode = async ()=>{
            try {
                const cmp = await get_cmpName()
                setCmpDetails(cmp)
            } catch (error) {
                console.error("Error fetching data", error);
            }
        }
          decode()
    },[])

    return <>
        <div className="w-screen h-screen bg-slate-100">
            <Navbar cmp={cmpDetails}/>
            <div className="w-full h-[90%] flex">
                <div className="w-[25%] h-full overflow-y-scroll bg-white">

                </div>
                <div className="h-full w-[75%] p-10 flex flex-col items-center">
                    
                </div>
            </div>

        </div>

    </>
}

export default JobApplications