import React from 'react'
import Title from '../Components/Title'
import Grades from '../Components/ViewGrades'
import Help from '../Components/HelpForums'
import Calendar from '../Components/Calendar'
import ExamsCourses from '../Components/ExamCourses'

export default function ExamineePage() {
  return (
    <div className="ExamineePage">
        <Title Title = "Examinee Page"/>
        <Grades />
        <Help />
        <Calendar />
        <Currentexams />
        <ExamsCourses />
    </div>
  );
}

  function Currentexams() {
    return (
      <div className="CurrentExams">
          <h1>Current Exams</h1>
  
      </div>
    );
  }

