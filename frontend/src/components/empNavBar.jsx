import "./EmpNavBar.css"
import { useState } from "react"
import {useNavigate} from "react-router-dom";
function EmpNavBar(props) {
    
    const[sideBar,setSideBar] = useState(false)

    const navigate = useNavigate()
    function toggleSideBar (){
        const temp = !sideBar;
        setSideBar(temp)
    }

    function logOut(){
        if(props.logedIn === "Log In"){
            navigate("/emp/signin")
        }
        else{
            localStorage.removeItem('token')
            navigate("/")
        } 
    }
    function appliedJobsPage(){
        navigate("/emp/appliedjobs")
    }

    function Home(){
        navigate("/emp")
    }

    return<>
    <div className="empNavBar">
        <h1>CareerNavigator</h1>
        <i class='bx bx-menu menu' onClick={toggleSideBar}></i>
        {sideBar && <div className="sideBar" >
                     <div className="head">
                        <i className='bx bx-x close' onClick={toggleSideBar}></i>
                        <i className='bx bxs-user-circle profile' ></i>
                        <h2>{props.emp.Name}</h2>
                        <span>{props.emp.Email}</span>
                     </div>
                     <div className="empMenu">
                        <span className="MenuItem" onClick={Home}><i className='bx bxs-home'></i> Home</span>
                        <span className="MenuItem" onClick={appliedJobsPage}><i className='bx bxs-carousel'></i> Applied Jobs</span>
                     </div>
                     <button onClick={logOut}>{props.logedIn}</button>
                   </div> 
        }
    </div>
    </>
}

export default EmpNavBar