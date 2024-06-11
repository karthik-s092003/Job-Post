import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Navbar from './navbar';
import { get_cmpName } from './services/jobPost';

const Form = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [companyName,setCompanyName] = useState('');
  const [applicationEmail,setapplicationEmail] = useState('');
  const [title,setTitle] = useState('');
  const [jobType,setjobtype] = useState('');
  const [workspaceType,setWorkSpace] = useState('');
  const [location,setLocation] = useState('');
  const [salary,setSalary] = useState('');
  const [data,setdata] = useState({});
  const [companyId,setcompanyId] = useState();


  const handleChange = (value) => {
    setJobDescription(value);
  };

  const [skill, setSkill] = useState('');
  const [skills, setSkills] = useState([]);

  const handleInputChange = (e) => {
    setSkill(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (skill && !skills.includes(skill)) {
        setSkills([...skills, skill]);
        setSkill('');
      }
    }
  };

  const handleSubmit = ()=>{
    setdata({
      title:title,
      jobDescription:jobDescription,
      companyName:companyName,
      location:location,
      salary:salary,
      applicationEmail:applicationEmail,
      skills:skills,
      workspaceType:workspaceType,
      jobType:jobType,
      companyId:companyId
    })
  }

  useEffect(()=>{
    const decode = async ()=>{
      try {
          const {id} = await get_cmpName();
          setcompanyId(id)
      } catch (error) {
          console.error("Error fetching data", error);
      }
  }
    decode()
  },[])

  useEffect(()=>{
    console.log("job post = ",data);
  },[data])

  return (
    <div className='w-screen bg-slate-100'>
      <Navbar cmp={{ cpm: "hello" }} />
      <div className='w-full mt-2 flex flex-col p-4'>
        <h1 className='font-bold text-lg mb-1'>Company Details</h1>
        <p className='text-sm text-gray-500 mb-4'>Tell us more about your company, your logo and other details will be automatically added</p>
        <div className='flex flex-wrap gap-10 w-full mb-6'>
          <div className='flex flex-col gap-1 w-full md:w-[48%]'>
            <p className='text-sm font-bold'>Company name:</p>
            <input onChange={(event) => setCompanyName(event.target.value)} type="text" id="company_name" className="bg-gray-50 border text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 " placeholder="Name of your company" required />
          </div>
          <div className='flex flex-col gap-1 w-full md:w-[48%]'>
            <p className='text-sm font-bold'>Email:</p>
            <input onChange={(event) => setapplicationEmail(event.target.value)} type="text" id="email" className="bg-gray-50 border text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400" placeholder="Company email" required />
          </div>
        </div>
        <hr />
      </div>
      <div className='w-full flex flex-col p-4 py-2'>
        <h1 className='font-bold text-lg mb-1'>Job Details</h1>
        <p className='text-sm text-gray-500 mb-4'>Describe the role and responsibilities of the position</p>
        <div className='mb-4'>
          <p className='text-sm font-bold'>Job Title:</p>
          <input onChange={(event) => setTitle(event.target.value)} type="text" id="job_title" className="bg-gray-50 border text-sm rounded-lg block w-[99%] p-2.5 dark:placeholder-gray-400 " placeholder="e.g. Software Engineer" required />
        </div>
        <div className='mb-4'>
          <p className='text-sm font-bold'>Skills:</p>
          <input
            type="text"
            value={skill}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Enter a skill and press Enter"
            className="bg-gray-50 border text-sm rounded-lg block  p-2.5 dark:placeholder-gray-400 mb-2 w-[99%]"
          />
          <ul className='flex flex-wrap gap-2'>
            {skills.map((skill, index) => (
              <li key={index} className='text-white bg-slate-700 font-medium rounded-full text-sm px-5 py-2.5 text-center'>{skill}</li>
            ))}
          </ul>
        </div>
        <div className='flex flex-wrap gap-10 w-full mb-6'>
          <div className='flex flex-col gap-1 w-full md:w-[48%]'>
            <p className='text-sm font-bold'>Job type:</p>
            <select onChange={(event) => setjobtype(event.target.value)} id="job_type" className="bg-gray-50 border text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 text-slate-400">
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Internship</option>
              <option>Contract</option>
            </select>
          </div>
          <div className='flex flex-col gap-1 w-full md:w-[48%]'>
            <p className='text-sm font-bold'>Work space type:</p>
            <select onChange={(event) => setWorkSpace(event.target.value)} id="workspace_type" className="bg-gray-50 border text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 text-slate-400">
              <option>Remote</option>
              <option>Hybrid</option>
              <option>On-site</option>
            </select>
          </div>
        </div>
        <div className='flex flex-wrap gap-10 w-full mb-6'>
          <div className='flex flex-col gap-1 w-full md:w-[48%]'>
            <p className='text-sm font-bold'>Location:</p>
            <input onChange={(event) => setLocation(event.target.value)} type="text" id="location" className="bg-gray-50 border text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 " placeholder="Company location" required />
          </div>
          <div className='flex flex-col gap-1 w-full md:w-[48%]'>
            <p className='text-sm font-bold'>Salary:</p>
            <input onChange={(event) => setSalary(event.target.value)} type="number" id="salary" className="bg-gray-50 border text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400" placeholder="Salary, e.g. 90000" required />
          </div>
        </div>
        <div className="w-full">
          <p className="text-sm font-bold">Job Description:</p>
          <ReactQuill
            value={jobDescription}
            onChange={handleChange}
            modules={Form.modules}
            formats={Form.formats}
            placeholder="Write the job description here..."
            className='bg-slate-50 rounded w-[99%]'
          />
        </div>
        <div className='w-full mt-3 flex justify-center items-center'>
          <button onClick={handleSubmit} type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Post Job</button>
        </div>
      </div>
    </div>
  );
};

Form.modules = {
  toolbar: [
    [{ 'header': '1'}, { 'header': '2'}, { 'font': [] }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'align': [] }],
    [{ 'color': [] }, { 'background': [] }],
    ['clean']
  ]
};

Form.formats = [
  'header', 'font', 'list', 'bullet',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'align', 'color', 'background'
];

export default Form;
