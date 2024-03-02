import "./page.css"
import CmpNavbar from "./cmpHeader"
import { cmpJobOffers } from "./services/Api"
import { get_cmpName } from "./services/Api";
import { useEffect, useState } from "react"
import OfferList from "./offersList";
import { deleteJobOffer } from "./services/Api"
import { getSearchJobs } from "./services/Api";

function CompanyPage (){
    const [jobOffers,setJobOffers] = useState([])
    const [cmp,setCmp] = useState("")
    const [msg,setMsg] = useState("")
    useEffect(() => {
        const getData = async () => {
            try {
                const {cpm} = await get_cmpName();
                const {jobs,msg} = await cmpJobOffers(cpm);
                setJobOffers([...jobs]);
                setMsg(msg);
                setCmp(cpm)
            } catch (error) {
                console.error("Error fetching job offers:", error);
            }
        };
        getData();
    }, []);

    
    // useEffect(() => {
    //     console.log("hi", jobOffers);
    // }, [jobOffers]);
    function addJobOffer (job){
        setJobOffers((prevValue)=>[...prevValue,job])
    }


    function removeJobs(id){
        setJobOffers(prevItems => prevItems.filter(item => item._id !== id))
        console.log("log",jobOffers);
        deleteJobOffer(id)
    }

    const updateItem = (newItem) => {
        const updatedItems = [...jobOffers];
        const index = updatedItems.findIndex(item => item._id === newItem.id);
        if (index !== -1) {
          updatedItems[index] = newItem;
          setJobOffers(updatedItems);
        }
    };

    const searchObj =async (data)=> {
       
            try {
                const res = await getSearchJobs({companyName:cmp,title:data})
                setJobOffers([...res])
            } catch (error) {
                console.log("Some thing went wrong....");
            }
           
    }
 

    return <>
    <div className="container">
        <CmpNavbar addJobOffer={addJobOffer} add={true}/>
        <OfferList list={jobOffers} dell={removeJobs} updateItem={updateItem} search={searchObj} msg={msg}/>
    </div>
    </>
}

export default CompanyPage