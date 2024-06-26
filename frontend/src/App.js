import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Login from "./components/companyLogin";
import SignIn from "./components/companySignin";
// import Home from "./components/homePage";
import EmpLogin from "./components/employeeSignup";
import CompanyPage from "./components/companyPage";
import EmpPage from "./components/empPage";
import EmpSignIn from "./components/empSignIn";
import AppliedJobsList from "./components/appliedJobsList";
import Applications from "./components/JobApplicatons";
import JobPortalDashBoard from "./jobPortal/home";
import Dashboard from "./jobPost/dashboard";
import Form from "./jobPost/form";
import HomePage from "./homeAndLogin/homePage";
import CMPSignIn from "./homeAndLogin/cmpLogin";
import CMPSignUP from "./homeAndLogin/cmpSignUp";
import JobPortalForm from "./jobPortal/Job-portal-Form";
import JobApplications from "./jobPost/jobApplications";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/company/signin" element={<SignIn />} />
        <Route path="/company/*" element={<CompanyPage  />}/>
        <Route path="/company/signup" element={<Login />} />
        <Route path="/emp/signup" element={<EmpLogin/>}/>
        <Route path="/emp/*" element={<EmpPage/>}/>
        <Route path="/emp/signin" element={<EmpSignIn />} />
        <Route path="/emp/appliedjobs" element={<AppliedJobsList/>}/>
        <Route path="/company/applications" element={<Applications/>}/>
        <Route path="/job-portal" element={<JobPortalDashBoard/>}></Route>
        <Route path="/job-post" element={<Dashboard/>}></Route>
        <Route path="/job-post/form" element={<Form/>}></Route>
        <Route path="/job-post-signin" element={<CMPSignIn/>}></Route>
        <Route path="/job-post-signup" element={<CMPSignUP/>}></Route>
        <Route path="/job-portal-form" element={<JobPortalForm/>}></Route>
        <Route path="/application-forms" element={<JobApplications/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
