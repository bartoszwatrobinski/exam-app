import React, { useState } from 'react'
import Title from '../Components/Title'
import Grades from '../Components/ViewGrades'
import Help from '../Components/HelpForums'
import Calendar from '../Components/Calendar'
import ExamsCourses from '../Components/ExamCourses'
import { NavLink } from '../Components/Navbar/NavBarElements';
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from "react-router-dom"

export default function ExaminerPage() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout(){
    setError('')
    try{
        await logout()
        history.push('./signin')
    } catch{
        setError('Failed to log out')
    }
}
  return (
    <div className="ExaminerPage">
        <Title Title = "Examiner Page"/>
        <Grades />
        <Help />
        <createExamButton />
        <Calendar />
        <ExamsCourses />

        <div className="CreateExamButton">
          <NavLink to="/CreateExam">
            <button class="CreateButton" role="button">Create Exam</button>
          </NavLink>
        </div>
        <Card>
                <Card.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email: </strong> {currentUser.email}
                </Card.Body>
          </Card>
                <div className="w-100 text-center mt-2">
                    <button class="signoutButton" variant="link" onClick={handleLogout}>Log out</button>
                </div>

    </div>
  );
}

