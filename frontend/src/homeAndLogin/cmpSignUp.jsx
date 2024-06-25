import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { email_verification } from '../jobPost/services/jobPost';
import { FaSpinner } from 'react-icons/fa';
import { company_Signup } from '../jobPost/services/jobPost';
import {useNavigate} from "react-router-dom";

const CMPSignUP = () => {
  const [isloading,setIsloading] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword,setShowConfirmPassword] = useState(false)
  const [codeSent, setCodeSent] = useState(false);
  const [email,setEmail] = useState("");
  const [companyName,setComapnyName] = useState("")
  const [Password,setPassword] = useState("")
  const [verificationCode,setVerificationCode] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [msg,setMsg] = useState("")
  const [disp,setDisp] = useState({display:"none"})
  const navigate = useNavigate();
  const handleSubmit =async ()=>{
    if(!codeSent){
      try {
        setIsloading(true)
        const message = await email_verification(email)
        if(message === "Verification code sent successfully"){
          setCodeSent(true)
        }
        else{
          setMsg(message)
          setDisp({display:"flex"})
        }
      } catch (error) {
        console.log(error);
      }
      finally{
        setIsloading(false)
      }
    }
    else{
      
      try {
        const message = await company_Signup({
          companyName:companyName,
          verificationCode:verificationCode,
          Password:Password,
          confirmPassword:confirmPassword,
          Email:email
        })
        if(message==="successfull"){
          navigate("/job-post")
        }
        else{
          console.log("hello = ",message);
          setMsg(message);
          setDisp({display:"flex"})
         }
      } catch (error) {
        console.log(error);
      }
      finally{
        setIsloading(false)
      }
    }
  }

  return (
    <div className="bg-blue-900 absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-blue-800 bottom-0 leading-5 h-full w-full overflow-hidden">
      <div className="relative min-h-screen sm:flex sm:flex-row justify-center bg-transparent rounded-3xl shadow-xl">
        <div className="flex-col flex self-center lg:px-14 sm:max-w-4xl xl:max-w-md z-10">
          <div className="self-start hidden lg:flex flex-col text-gray-300">
            <img className='w-48 h-40 ml-7' src="https://firebasestorage.googleapis.com/v0/b/otp-project-329ec.appspot.com/o/Logo%20maker%20project%20(5).png?alt=media&token=4241f1c3-9117-4c50-b3d9-d5e61603ab99" alt="" />        
            <h1 className="my-3 font-semibold text-4xl">Welcome back</h1>
            <p className="pr-3 text-sm opacity-75">
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>
          </div>
        </div>
        <div className="flex justify-center self-center z-10">
          <div className="p-12 bg-white mx-auto rounded-3xl w-96">
            <div className="mb-7">
              <h3 className="font-semibold text-2xl text-gray-800">Sign Up</h3>
              <p className="text-gray-400">
                already have an account?{' '}
                <a href="/job-post-signin" className="text-sm text-blue-700 hover:text-blue-700">
                  Sign In
                </a>
              </p>
            </div>
            <div className="space-y-6">
              {!codeSent && (<>
                <div>
                <input
                  className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
                  type="text"
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder="Email"
                />
                </div>
               </>)}

              {codeSent && (<> 
                  <div>
                <input
                  className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
                  type="text"
                  onChange={(e)=>setComapnyName(e.target.value)}
                  placeholder="Company Name"
                />
              </div>
              <div>
                <input
                  className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
                  type="text"
                  onChange={(e)=>setVerificationCode(e.target.value)}
                  placeholder="Verification Code"
                />
              </div>
              <div className="relative">
                <input
                  placeholder="Password"
                  type={showPassword ? 'text' : 'password'}
                  onChange={(e)=>setPassword(e.target.value)}
                  className="text-sm text-gray-500 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-blue-400"
                />
                <div className="flex items-center absolute inset-y-0 right-0 mr-3 text-sm leading-5">
                  {showPassword ? (
                    <svg
                      onClick={() => setShowPassword(false)}
                      className="h-4 text-blue-700 cursor-pointer"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                      />
                    </svg>
                  ) : (
                    <svg
                      onClick={() => setShowPassword(true)}
                      className="h-4 text-blue-700 cursor-pointer"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                      />
                    </svg>
                  )}
                </div>
                
              </div>
              <div className="relative">
                <input
                  placeholder="Confirm Password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                  className="text-sm text-gray-500 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-blue-400"
                />
                <div className="flex items-center absolute inset-y-0 right-0 mr-3 text-sm leading-5">
                  {showConfirmPassword ? (
                    <svg
                      onClick={() => setShowConfirmPassword(false)}
                      className="h-4 text-blue-700 cursor-pointer"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                      />
                    </svg>
                  ) : (
                    <svg
                      onClick={() => setShowConfirmPassword(true)}
                      className="h-4 text-blue-700 cursor-pointer"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                      />
                    </svg>
                  )}
                </div>
                
              </div>
            
            
              </>)}
              <div className="w-full flex items-center justify-center text-red-600" style={disp}>
                    <span>{msg}</span>
                  </div>
              <div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full flex justify-center bg-blue-800 hover:bg-blue-700 text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500"
                >
                  {isloading?<FaSpinner className="animate-spin text-white" size={20} />:<p>Sign Up</p>}
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMPSignUP;
