import { IoLocationOutline } from "react-icons/io5";    
import { useEffect, useState} from "react"
import { get_company_details } from "./services/jobportal";

function Card(props){
    const id = props.job.companyId
    const [companyDetails,setcompanyDetails] = useState({});
    useEffect(()=>{
        const decode = async ()=>{
            try {
                const res = await get_company_details(id)
                setcompanyDetails(res);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        }
          decode()
      },[id])
      const limitWords = (text, wordLimit) => {
        const words = text.split(' ');
        return words.slice(0, wordLimit).join(' ') + (words.length > wordLimit ? '...' : '');
    };
    
    const limitedDescription = limitWords(props.job.jobDescription, 15);
    return <>
        <div className={`bg-white p-6 flex-col mb-4 cursor-pointer rounded-md ${props.isSelected ? 'border-blue-500 border-2' : 'border-gray-300 shadow'}`} onClick={props.onClick}>
            <div className="flex gap-4 items-center">
                <img src={companyDetails.companyLogo} alt="" className="w-10 h-10"/>
                <div className="flex-col gap-0">
                    <p className="font-bold">{props.job.title}</p>
                    <span className="text-xs font-semibold">{props.job.companyName}</span>
                </div>
            </div>

            <div className="mt-4">
                <p className="text-sm" dangerouslySetInnerHTML={{ __html: limitedDescription }}></p>
            </div>

            <div className="flex gap-3 mt-4">
                <span className="text-sm bg-blue-100 text-blue-600 w-24 h-8 rounded-2xl flex justify-center items-center">{props.job.jobType}</span>
                <span className="text-sm bg-blue-100 text-blue-600 w-24 h-8 rounded-2xl flex justify-center items-center">{props.job.salary}INR</span>
                <span className="text-sm bg-blue-100 text-blue-600 w-24 h-8 rounded-2xl flex justify-center items-center">{props.job.workspaceType}</span>
            </div>

            <div className="mt-4 border-t relative flex items-center pt-4 opacity-60">
                <div className="flex items-center absolute left-0">
                    <IoLocationOutline className="text-sm"/>
                    <span className="text-sm">{props.job.location}</span>
                </div>
                <span className="absolute right-0 text-sm">Postes 8hrs ago</span>
            </div>
        </div>

    </>
}

export default Card