import { FiSearch } from "react-icons/fi";
import Card from "./card";
import NavBar from "./navbar";
import "../index.css"
import "./jobPortal.css"

function JobPortalDashBoard() {
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
            <Card/>
            <Card/>
            <Card/>
          </div>

          <div className="w-[55%] h-full flex-col p-4 bg-white overflow-y-scroll cards">
            <div className="flex gap-4 items-center border-b p-4">
                <img src="https://firebasestorage.googleapis.com/v0/b/otp-project-329ec.appspot.com/o/x-logo-twitter-elon-musk_dezeen_2364_col_0.webp?alt=media&token=46a652da-1ad1-4f39-a15e-b1fa4f376951" alt="" className="w-10 h-10"/>
                <div className="flex-col gap-0 ">
                    <p className="font-bold text-2xl">Senior Software Engineer</p>
                    <span className="text-xs font-semibold">Twitter, Inc.</span>
                </div>
            </div>

            <div className="flex gap-4 mt-4 p-4">
                <div className="box w-36 h-16 bg-blue-100 rounded-md">
                  <span className=" text-xs text-blue-600">Job Type</span>
                  <p className=" font-semibold text-blue-600">Full Time</p>
                </div>

                <div className="box w-36 h-16 bg-blue-100 rounded-md">
                  <span className=" text-xs text-blue-600">Experience</span>
                  <p className=" font-semibold text-blue-600">5 - 10 years</p>
                </div>

                <div className="box w-36 h-16 bg-blue-100 rounded-md">
                  <span className=" text-xs text-blue-600">Salary</span>
                  <p className=" font-semibold text-blue-600">Rs. 7.5 LPA</p>
                </div>
      
            </div>

            <div>
              <h1 className=" font-bold mb-4">Job Description: SDE 3</h1>
              <p className=" text-sm mb-4">
                As SDE 3, we are seeking a highly accomplished full-stack expert, who will be responsible for designing, developing, and maintaining a highly concurrent product. The candidate should have relevant work experience in building scalable, highly concurrent, and robust products where the performance of the product is at the core.
              </p>

              <h2 className=" font-bold mb-4">Key Responsibilities:</h2>
              <ul className=" text-sm mb-4 ">
                <li>Owning a full life cycle from ideating, designing, developing, and delivering.</li>
                <li>Collaborate with all stakeholders to understand and deliver new requirements.</li>
                <li>Building reusable platforms like workflow, integration framework, form field access privilege, data security, etc.</li>
                <li>The right candidate is passionate about technology and product development and comfortable with ambiguities and can move fast.</li>
                <li>Working with the DB layer and writing optimal SQL queries.</li>
                <li>Monitor and assess overall system performance using tools like New Relic and optimize it.</li>
              </ul>

              <h2 className=" font-bold mb-4">Skills & Qualifications:</h2>
              <ul className=" text-sm mb-4">
                <li>Experience of 7+ yrs in Node.JS</li>
                <li>Experience in Nest.js and Express.js will be a plus.</li>
                <li>Working knowledge of modules such as Sequelizer</li>
                <li>Strong knowledge of the MVC architecture</li>
                <li>Prior experience in writing APIs in Node.JS is a must</li>
                <li>Experience working in products such as Bitbucket, AWS, and NewRelic, will be preferred</li>
                <li>Relevant experience working on the MySQL/NoSQL database will be preferred.</li>
                <li>Must be a team player.</li>
                <li>Experience in Development Ops will be helpful.</li>
                <li>Previous experience with startups will be considered an added advantage</li>
                <li>B.Tech from IIT /NIT /BITS Pilani will be an added advantage.</li>
              </ul>
            </div>

          </div>
          </div>
          
          
        </div>
          
        </div>
    </div>
    </>
}

export default JobPortalDashBoard;