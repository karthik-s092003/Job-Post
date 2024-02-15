import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Login from "./components/companyLogin";
import SignIn from "./components/companySignin";
import Home from "./components/homePage";
import EmpLogin from "./components/employeeSignup";
import CompanyPage from "./components/companyPage";
import EmpPage from "./components/empPage";
import EmpSignIn from "./components/empSignIn";
import AppliedJobsList from "./components/appliedJobsList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/company/signin" element={<SignIn />} />
        <Route path="/company/*" element={<CompanyPage/>}/>
        <Route path="/company/signup" element={<Login />} />
        <Route path="/emp/signup" element={<EmpLogin/>}/>
        <Route path="/emp/*" element={<EmpPage/>}/>
        <Route path="/emp/signin" element={<EmpSignIn />} />
        <Route path="/emp/appliedjobs" element={<AppliedJobsList/>}/>
      </Routes>
    </Router>
  );
}

export default App;
