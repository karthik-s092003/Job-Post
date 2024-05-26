import { FiSearch } from "react-icons/fi";
import Card from "./card";
import NavBar from "./navbar";
import "../index.css"
import "./jobPortal.css"
import Details from "./details";
import { get_all_jobs } from "./services/jobportal";
import { useEffect, useState } from "react"

function JobPortalDashBoard() {
    const [list,setList] = useState([])
    useEffect(()=>{
      const decode = async ()=>{
          try {
              const res = await get_all_jobs()
              setList([...res])
          } catch (error) {
              console.error("Error fetching data", error);
          }
      }
        decode()
    },[])

    useEffect(()=>{
      console.log(list);
    },[list])
    return <>
    <div className="w-screen h-screen ">
        <NavBar/>
        <div className="w-full h-[90%] flex">
            <div className="w-[20%] h-full overflow-y-scroll bg-white">
          <div className="border-b p-4 h-16 flex items-center gap-24">
            <span className="uppercase font-semibold text-xs">Filter</span>
            <span className="uppercase font-semibold text-xs text-blue-600">Clear All</span>
          </div>
          <div className="border-b p-4 h-40">
            <span className="uppercase font-semibold text-xs">Job Type</span>
            <ul className="pl-2 py-4 flex-col">
                <li className="flex gap-2 items-center mb-2" >
                <input id="link-checkbox" type="checkbox" value="" className=" before:content[''] relative h-3 w-3 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-6 before:w-6 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"/>
                  <p className="font-semibold text-xs">FULL TIME</p>
                </li>
                <li className="flex gap-2 items-center mb-2" >
                <input id="link-checkbox" type="checkbox" value="" className=" before:content[''] relative h-3 w-3 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-6 before:w-6 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"/>
                  <p className="font-semibold text-xs">PART TIME</p>
                </li>
                <li className="flex gap-2 items-center mb-2" >
                <input id="link-checkbox" type="checkbox" value="" className=" before:content[''] relative h-3 w-3 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-6 before:w-6 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"/>
                  <p className="font-semibold text-xs">INTERNSHIP</p>
                </li>
                <li className="flex gap-2 items-center mb-2" >
                <input id="link-checkbox" type="checkbox" value="" className=" before:content[''] relative h-3 w-3 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-6 before:w-6 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"/>
                  <p className="font-semibold text-xs">CONTRACT</p>
                </li>
            </ul>
          </div>
          <div className="border-b p-4 h-40">
            <span className="uppercase font-semibold text-xs">LOCATION</span>
            <ul className="pl-2 py-4 flex-col">
                <li className="flex gap-2 items-center mb-2" >
                <input id="link-checkbox" type="checkbox" value="" className=" before:content[''] relative h-3 w-3 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-6 before:w-6 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"/>
                  <p className="font-semibold text-xs">BENGALURU</p>
                </li>
                <li className="flex gap-2 items-center mb-2" >
                <input id="link-checkbox" type="checkbox" value="" className=" before:content[''] relative h-3 w-3 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-6 before:w-6 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"/>
                  <p className="font-semibold text-xs">MUMBAI</p>
                </li>
                <li className="flex gap-2 items-center mb-2" >
                <input id="link-checkbox" type="checkbox" value="" className=" before:content[''] relative h-3 w-3 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-6 before:w-6 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"/>
                  <p className="font-semibold text-xs">DELHI</p>
                </li>
                <li className="flex gap-2 items-center mb-2" >
                <input id="link-checkbox" type="checkbox" value="" className=" before:content[''] relative h-3 w-3 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-6 before:w-6 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"/>
                  <p className="font-semibold text-xs">CHENNAI</p>
                </li>
            </ul>
          </div>
          <div className="border-b p-4 h-40">
            <span className="uppercase font-semibold text-xs">SALARY RANGE</span>
            <ul className="pl-2 py-4 flex-col">
                <li className="flex gap-2 items-center mb-2" >
                <input id="link-checkbox" type="checkbox" value="" className=" before:content[''] relative h-3 w-3 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-6 before:w-6 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"/>
                  <p className="font-semibold text-xs">Rs.0 To Rs.10LPA</p>
                </li>
                <li className="flex gap-2 items-center mb-2" >
                <input id="link-checkbox" type="checkbox" value="" className=" before:content[''] relative h-3 w-3 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-6 before:w-6 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"/>
                  <p className="font-semibold text-xs">Rs.10LPA To Rs.20LPA</p>
                </li>
                <li className="flex gap-2 items-center mb-2" >
                <input id="link-checkbox" type="checkbox" value="" className=" before:content[''] relative h-3 w-3 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-6 before:w-6 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"/>
                  <p className="font-semibold text-xs">Rs.20LPA To Rs.30PLA</p>
                </li>
                <li className="flex gap-2 items-center mb-2" >
                <input id="link-checkbox" type="checkbox" value="" className=" before:content[''] relative h-3 w-3 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-6 before:w-6 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"/>
                  <p className="font-semibold text-xs">Rs.30LPA To Rs.40LPA</p>
                </li>
            </ul>
          </div>
          <div className="border-b p-4 h-40">
            <span className="uppercase font-semibold text-xs">COMPANY</span>
            <ul className="pl-2 py-4 flex-col">
                <li className="flex gap-2 items-center mb-2" >
                <input id="link-checkbox" type="checkbox" value="" className=" before:content[''] relative h-3 w-3 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-6 before:w-6 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"/>
                  <p className="font-semibold text-xs">YOUTUBE</p>
                </li>
                <li className="flex gap-2 items-center mb-2" >
                <input id="link-checkbox" type="checkbox" value="" className=" before:content[''] relative h-3 w-3 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-6 before:w-6 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"/>
                  <p className="font-semibold text-xs">AMAZON</p>
                </li>
                <li className="flex gap-2 items-center mb-2" >
                <input id="link-checkbox" type="checkbox" value="" className=" before:content[''] relative h-3 w-3 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-6 before:w-6 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"/>
                  <p className="font-semibold text-xs">GOOGLE</p>
                </li>
                <li className="flex gap-2 items-center mb-2" >
                <input id="link-checkbox" type="checkbox" value="" className=" before:content[''] relative h-3 w-3 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-6 before:w-6 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"/>
                  <p className="font-semibold text-xs">FACEBOOK</p>
                </li>
            </ul>
          </div>
        </div>

        <div className="w-[80%] h-full bg-slate-100 p-10 flex-col">
          <div className="flex gap-5">
            <div className=" relative w-[90%] h-10">
              <input type="text" className=" w-full h-full rounded-sm p-4 font-semibold text-xs" placeholder="Title"/>
              <FiSearch className=" absolute right-4 top-3 opacity-40"/>
            </div>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Search</button>
          </div>

          <div className="flex gap-2 my-4">
            <span className="text-sm opacity-50">Showing</span><span className="text-sm">150</span><span className="text-sm opacity-50">Jobs</span>
          </div>

          <div className="w-full h-[88%] flex">
            <div className="w-[40%] h-full flex-col overflow-y-scroll p-4 cards pt-0">
              {list.map((li)=>{return <Card job={li}/>} )}
            </div>
            <Details/>
          </div> 
        </div>
          
      </div>
    </div>
    </>
}

export default JobPortalDashBoard;