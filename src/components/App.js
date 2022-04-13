import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Signin from "../Pages/Signin"
import Signup from "../Pages/Signup"
import Dashboard from "../Pages/Dashboard"
import PrivateRoute from "./PrivateRoute"
import './App.css'
import Navbar from './Navbar'
import ExamineePage from '../Pages/ExamineePage'
import ExaminerPage from '../Pages/ExaminerPage'
import AdminPage from '../Pages/AdminPage'
import CreateExam from "../Pages/CreateExam"
import HelpPage from  "../Pages/HelpPage";
import Questions from "../Pages/Questions";
import Calendar from "../Pages/Calendar";
import Forums from "../Pages/HelpPage"


let script_index = 1;

function App() {

  
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div style={{ maxWidth: "700px"}}>
        <Router>
          <Navbar />
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route path="/signup" component={Signup} />
              <Route path="/signin" component={Signin} />
              <Route path="/" exact element={<ExamineePage />} />
              <Route path="/Home"  element={<ExamineePage />} />
              <Route path="/Help" element={<HelpPage />} />
              <Route path="/Examiner"  element={<ExaminerPage />} />
              <Route path="/CreateExam"  element={<CreateExam />} />
              <Route path="/Admin"  element={<AdminPage />} />
              <Route path="/Forum"  element={<Forums />} />
              <Route path="/Calendar"  element={<Calendar />} />
              <Route path="/Questions/:script_index" exact element={<Questions />} />
            </Switch>
          </AuthProvider>

        </Router>
      </div> 
    </Container>
  
  )

  
}

export default App
