function Details(props){
    return <>
        <div className="w-[55%] h-full flex-col p-4 bg-white overflow-y-scroll cards">
        {
        props.selectedJob ? (
          <>
            <div className="flex gap-4 items-center border-b p-4">
              <img src={props.companyDetails.companyLogo} alt="" className="w-10 h-10" />
              <div className="flex-col gap-0">
                <p className="font-bold text-2xl">{props.selectedJob.title}</p>
                <span className="text-xs font-semibold">{props.companyDetails.companyName}</span>
              </div>
            </div>

            <div className="flex gap-4 mt-4 p-4">
              <div className="box w-36 h-16 bg-blue-100 rounded-md">
                <span className="text-xs text-blue-600">Job Type</span>
                <p className="font-semibold text-blue-600">{props.selectedJob.jobType}</p>
              </div>

              <div className="box w-36 h-16 bg-blue-100 rounded-md">
                <span className="text-xs text-blue-600">Work Space</span>
                <p className="font-semibold text-blue-600">{props.selectedJob.workspaceType}</p>
              </div>

              <div className="box w-36 h-16 bg-blue-100 rounded-md">
                <span className="text-xs text-blue-600">Salary</span>
                <p className="font-semibold text-blue-600">{props.selectedJob.salary} LPA</p>
              </div>
            </div>

            <div>
              <h1 className="font-bold mb-4">Job Description:</h1>
              <p className="mb-4">{props.selectedJob.jobDescription}</p>

              <h1 className="font-bold mb-4">Location:</h1>
              <p className="mb-4">{props.selectedJob.location}</p>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500 mt-4">Please select a job to see the details.</p>
        )
      }

          </div>
    
    </>
}

export default Details