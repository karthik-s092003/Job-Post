import React, { useState } from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { uploadResume, applyForJob } from './services/jobportal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function JobPortalForm(props) {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Reason: '',
    City: '',
    Country: '',
    State: '',
    resume: null,
    jobId: props.selectedJob._id,
    companyId: props.selectedJob.companyId
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading animation

    try {
      const res = await uploadResume(formData);
      const applyJob = await applyForJob(formData);

      console.log("apply = ", applyJob);
      console.log("response = ", res);

      if (applyJob.msg === "successfull" && res.msg === "successfull") {
        // Show toast notification on success
        toast.success('Registered successfully!', {
          position: "top-right",
          autoClose: 3000, // Close the toast after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Stop loading animation
    }
  };

  return (
    <div className='w-screen p-5 overflow-x-hidden'>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
      {loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        )}

        <div className="space-y-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Application form</h2>
          <div>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="FirstName" className="block text-sm font-medium leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="FirstName"
                    id="FirstName"
                    autoComplete="given-name"
                    value={formData.FirstName}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="LastName" className="block text-sm font-medium leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="LastName"
                    id="LastName"
                    autoComplete="family-name"
                    value={formData.LastName}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="Email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="Email"
                    name="Email"
                    type="email"
                    autoComplete="email"
                    value={formData.Email}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="Reason" className="block text-sm font-medium leading-6 text-gray-900">
                  Reason to join
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="Reason"
                    id="Reason"
                    autoComplete="reason"
                    value={formData.Reason}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="City" className="block text-sm font-medium leading-6 text-gray-900">
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="City"
                    id="City"
                    autoComplete="address-level2"
                    value={formData.City}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="Country" className="block text-sm font-medium leading-6 text-gray-900">
                  Country
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="Country"
                    id="Country"
                    autoComplete="address-level1"
                    value={formData.Country}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="State" className="block text-sm font-medium leading-6 text-gray-900">
                  State
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="State"
                    id="State"
                    autoComplete="postal-code"
                    value={formData.State}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-span-full">
            <label htmlFor="resume" className="block text-sm font-medium leading-6 text-gray-900">
              Resume
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input id="file-upload" name="resume" type="file" onChange={handleFileChange} className="sr-only" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">PNG, JPG, PDF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={props.handleForm}>
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
