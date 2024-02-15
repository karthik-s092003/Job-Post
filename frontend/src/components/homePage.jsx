import { Link } from "react-router-dom"
import "./homePage.css"
import { useEffect } from "react"
function Home(){
    useEffect(()=>{
        localStorage.removeItem('token')
    },[])
    return <>
        <div className="container">
            <h1>CareerNavigator</h1>
            <div className="discription">
               <span>"CareerNavigator is an innovative and user-friendly job board platform designed to be your guiding partner in navigating through the vast landscape of career opportunities. With a commitment to empowering both job seekers and employers, CareerNavigator is dedicated to simplifying the job search and recruitment process."</span> 
            </div>
            <Link className="btn first" to={"/emp/signin"}>Apply for jobs</Link>
            <Link className="btn second" to={"/company/signin"}>Offer jobs</Link>
        </div>
    
    </>
}

export default Home