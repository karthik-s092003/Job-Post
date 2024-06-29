import { useEffect, useState } from "react";
import Navbar from "./navbar";
import { get_cmpName, getJobTitles, getJobApplicants, acceptOrReject } from "./services/jobPost";
import ApplicantCard from "./ApplicantCard";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Ensure the styles are imported

function JobApplications() {
    const [cmpDetails, setCmpDetails] = useState({});
    const [titles, setTitles] = useState([]);
    const [selectedTitle, setSelectedTitle] = useState(null);
    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cmp = await get_cmpName();
                const titles = await getJobTitles();
                setTitles(titles);
                setCmpDetails(cmp);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, []);

    const handleTitleClick = async (title) => {
        setSelectedTitle(title);
        try {
            const applicants = await getJobApplicants(title._id);
            setApplicants(applicants);
        } catch (error) {
            console.error("Error fetching applicants", error);
        }
    };

    const AcceptOrReject = async (data) => {
        try {
            const res = await acceptOrReject(data);
            if (res.newList) {
                setApplicants(res.newList);
                toast.success(`Applicant ${data.status.toLowerCase()} successfully!`);
            }
        } catch (error) {
            console.error("Error updating applicant status", error);
            toast.error(`Error ${data.status.toLowerCase()} applicant`);
        }
    }

    return (
        <div className="w-screen h-screen bg-slate-100">
            <Navbar cmp={cmpDetails} />
            <div className="w-full h-[90%] flex">
                <div className="w-[20%] h-full overflow-y-scroll bg-white flex flex-col gap-3 p-8">
                    <h1 className="text-base font-bold">JOB TITLE</h1>
                    {titles.length === 0 ? (
                        <p className="text-gray-500">No job offers</p>
                    ) : (
                        titles.map((title) => (
                            <span
                                key={title._id}
                                className={`text-sm cursor-pointer ${selectedTitle && selectedTitle._id === title._id ? 'text-blue-600' : ''}`}
                                onClick={() => handleTitleClick(title)}
                            >
                                {title.title}
                            </span>
                        ))
                    )}
                </div>
                <div className="h-full w-[80%] p-10 flex flex-col items-center overflow-y-scroll">
                    {selectedTitle ? (
                        applicants.length === 0 ? (
                            <p className="text-gray-500">No applicants for the selected job</p>
                        ) : (
                            applicants.map((applicant) => (
                                <ApplicantCard key={applicant.empId} data={applicant} AcceptOrReject={AcceptOrReject} />
                            ))
                        )
                    ) : (
                        <p className="text-gray-500">Please select a job title to see the applicants</p>
                    )}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default JobApplications;
