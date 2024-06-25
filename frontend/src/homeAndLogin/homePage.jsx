import React from 'react'
import { Link } from "react-router-dom"
import { useEffect } from "react"
import Navbar from './navbar'
export default function HomePage() {
  useEffect(()=>{
    localStorage.removeItem('token')
  },[])
  return (
    <div className='w-screen h-screen bg-slate-100'>
      <Navbar/>
      <div className='w-full h-[90%] flex'>
        <div className='w-[50%] h-full flex items-center justify-center'>
          <img className='w-[60%] h-[40%]' src="https://firebasestorage.googleapis.com/v0/b/otp-project-329ec.appspot.com/o/Logo%20maker%20project%20(2).png?alt=media&token=a8addf95-60a8-4d10-89b2-a9131939fff2" alt="" />
        </div>
        <div className='w-[50%] h-full flex flex-col justify-center items-start gap-4 p-5 '>
            <h1 className="font-bold text-xl">CareerNavigator</h1>
            <div className="text-sm">
               <span>"CareerNavigator is an innovative and user-friendly job board platform designed to be your guiding partner in navigating through the vast landscape of career opportunities. With a commitment to empowering both job seekers and employers, CareerNavigator is dedicated to simplifying the job search and recruitment process."</span> 
            </div>
            <div className="w-full flex ">
              <Link to={"/emp/signin"} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >Apply for jobs</Link>
              <Link to={"/job-post-signin"} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >Offer jobs</Link>
            </div>
        </div>
      </div>
    </div>
  )
}
