import React from 'react';

function ApplicantCard({ data }) {
    const handleAccept = () => {
        // Implement accept logic here
        console.log("Applicant accepted");
    };

    const handleReject = () => {
        // Implement reject logic here
        console.log("Applicant rejected");
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
        </div>
    );
}

export default ApplicantCard;
