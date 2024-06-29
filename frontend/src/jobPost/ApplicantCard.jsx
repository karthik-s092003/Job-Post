import React, { useState } from 'react';
import MessageModal from './MessageModal';

function ApplicantCard({ data, AcceptOrReject }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalPurpose, setModalPurpose] = useState('');
    const [statusData, setStatusData] = useState({
        FirstName: data.FirstName,
        LastName: data.LastName,
        msg: '',
        status: '',
        companyId: data.companyId,
        jobId: data.jobId,
        empId: data.empId
    });

    const handleAccept = () => {
        setModalPurpose('Accepted');
        setIsModalOpen(true);
    };

    const handleReject = () => {
        setModalPurpose('Rejected');
        setIsModalOpen(true);
    };

    const handleModalSubmit = (message) => {
        setStatusData(prevState => ({
            ...prevState,
            msg: message,
            status: modalPurpose
        }));
        updateApplicantStatus(modalPurpose, message);
    };

    const updateApplicantStatus = async (status, message) => {
        try {
            await AcceptOrReject({
                FirstName: statusData.FirstName,
                LastName: statusData.LastName,
                msg: message,
                status: status,
                companyId: statusData.companyId,
                jobId: statusData.jobId,
                empId: statusData.empId
            });
           
        } catch (error) {
            console.log(`Error updating applicant status: ${error.message}`);
        }
    };

    return (
        <div className="w-[60%] bg-white shadow-md rounded-lg px-6 py-4 m-4 flex flex-col">
            <div className="mb-4">
                <h3 className="text-lg font-semibold mb-1">Name</h3>
                <p className="text-gray-800">{`${data.FirstName} ${data.LastName}`}</p>
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="text-gray-800">{data.Email}</p>
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-semibold mb-1">Address</h3>
                <p className="text-gray-800">{`${data.City}, ${data.State}, ${data.Country}`}</p>
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-semibold mb-1">Reason to Join</h3>
                <p className="text-gray-800">{data.Reason}</p>
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-semibold mb-1">Resume</h3>
                <a
                    href={data.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    View Resume
                </a>
            </div>
            <div className="flex gap-4 w-full items-center justify-center">
                <button
                    onClick={handleAccept}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                    Accept
                </button>
                <button
                    onClick={handleReject}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                    Reject
                </button>
            </div>
            <MessageModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleModalSubmit}
            />
           
        </div>
    );
}

export default ApplicantCard;
