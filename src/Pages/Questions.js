import Title from '../Components/Title'
import Counter from "../Components/Countdown"
import { db } from "../Components/config";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function Questions() {

    var props = useParams();
    console.log(props);
    return (
        <div className="QuestionsPage">
         <Title Title="Exam"/>
         <QuestionsForm i = {(props.script_index.replace(":","")).toString()}/>
        </div>
    );
}

function QuestionsForm({i}){

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const getQuestionsFromFirebase = [];
        const subscriber = db
        .collection("/Exams").where("id", "==", i)
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => { 
                getQuestionsFromFirebase.push({
                    ...doc.data(),
                    key: doc.id,
                });
            });
            setPosts(getQuestionsFromFirebase);
            setLoading(false);
        });
        return () => subscriber();
    }, []);

    if (loading) {
        return <h1>loading firebase data...</h1>
    }

    const questions = [
        {
        text: posts[0]["Question1"],
        options: [
            { id: 0, text: posts[0]["Question1WrongAnswer1"], isCorrect: false },
            { id: 1, text: posts[0]["Question1WrongAnswer2"], isCorrect: false },
            { id: 2, text: posts[0]["Question1WrongAnswer3"], isCorrect: false },
            { id: 3, text: posts[0]["Question1RightAnswer"], isCorrect: true },
        ],
        },
        {
          text: posts[0]["Question2"],
          options: [
              { id: 0, text: posts[0]["Question2WrongAnswer1"], isCorrect: false },
              { id: 1, text: posts[0]["Question2WrongAnswer2"], isCorrect: false },
              { id: 2, text: posts[0]["Question2WrongAnswer3"], isCorrect: false },
              { id: 3, text: posts[0]["Question2RightAnswer"], isCorrect: true },
          ],
          },
        
        {
          text: posts[0]["Question3"],
          options: [
              { id: 0, text: posts[0]["Question3WrongAnswer1"], isCorrect: false },
              { id: 1, text: posts[0]["Question3WrongAnswer2"], isCorrect: false },
              { id: 2, text: posts[0]["Question3WrongAnswer3"], isCorrect: false },
              { id: 3, text: posts[0]["Question3RightAnswer"], isCorrect: true },
          ],
          },
          {
            text: posts[0]["Question4"],
            options: [
                { id: 0, text: posts[0]["Question4WrongAnswer1"], isCorrect: false },
                { id: 1, text: posts[0]["Question4WrongAnswer2"], isCorrect: false },
                { id: 2, text: posts[0]["Question4WrongAnswer3"], isCorrect: false },
                { id: 3, text: posts[0]["Question4RightAnswer"], isCorrect: true },
            ],
            },
            {
              text: posts[0]["Question5"],
              options: [
                  { id: 0, text: posts[0]["Question5WrongAnswer1"], isCorrect: false },
                  { id: 1, text: posts[0]["Question5WrongAnswer2"], isCorrect: false },
                  { id: 2, text: posts[0]["Question5WrongAnswer3"], isCorrect: false },
                  { id: 3, text: posts[0]["Question5RightAnswer"], isCorrect: true },
              ],
              },
              {
                text: posts[0]["Question6"],
                options: [
                    { id: 0, text: posts[0]["Question6WrongAnswer1"], isCorrect: false },
                    { id: 1, text: posts[0]["Question6WrongAnswer2"], isCorrect: false },
                    { id: 2, text: posts[0]["Question6WrongAnswer3"], isCorrect: false },
                    { id: 3, text: posts[0]["Question6RightAnswer"], isCorrect: true },
                ],
                },
                {
                  text: posts[0]["Question7"],
                  options: [
                      { id: 0, text: posts[0]["Question7WrongAnswer1"], isCorrect: false },
                      { id: 1, text: posts[0]["Question7WrongAnswer2"], isCorrect: false },
                      { id: 2, text: posts[0]["Question7WrongAnswer3"], isCorrect: false },
                      { id: 3, text: posts[0]["Question7RightAnswer"], isCorrect: true },
                  ],
                  },
                  {
                    text: posts[0]["Question8"],
                    options: [
                        { id: 0, text: posts[0]["Question8WrongAnswer1"], isCorrect: false },
                        { id: 1, text: posts[0]["Question8WrongAnswer2"], isCorrect: false },
                        { id: 2, text: posts[0]["Question8WrongAnswer3"], isCorrect: false },
                        { id: 3, text: posts[0]["Question8RightAnswer"], isCorrect: true },
                    ],
                    },
                    {
                      text: posts[0]["Question9"],
                      options: [
                          { id: 0, text: posts[0]["Question9WrongAnswer1"], isCorrect: false },
                          { id: 1, text: posts[0]["Question9WrongAnswer2"], isCorrect: false },
                          { id: 2, text: posts[0]["Question9WrongAnswer3"], isCorrect: false },
                          { id: 3, text: posts[0]["Question9RightAnswer"], isCorrect: true },
                      ],
                      },
                      {
                        text: posts[0]["Question10"],
                        options: [
                            { id: 0, text: posts[0]["Question10WrongAnswer1"], isCorrect: false },
                            { id: 1, text: posts[0]["Question10WrongAnswer2"], isCorrect: false },
                            { id: 2, text: posts[0]["Question10WrongAnswer3"], isCorrect: false },
                            { id: 3, text: posts[0]["Question10RightAnswer"], isCorrect: true },
                        ],
                        },
    ];
        
      const optionClicked = (isCorrect) => {
        if (isCorrect) {
          setScore(score + 1);
        }
    
        if (currentQuestion + 1 < questions.length) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setShowResults(true);
        }
      };
    
      const restartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowResults(false);
      };

    return (
        <div className="QuestionsContainer">
            <div class="timer">
                <label class="t_header"><i><b>Times</b></i></label><br/><br/>
                <label class="tms">Starting time: 11:00</label><br/>
                <label class="tms">Submission time: 11:59</label><br/><br/>
                <label class="tms"> Time remaining:</label><br/><br/>
                <label class="cd" id="countdown"></label><br/>
                
            </div><br/>


          <div className="App">
            <div className="Score">
              <h2 className="Score">Score: {score}</h2>
            </div>
            {showResults ? (
              <div className="final-results">
                <h1>Final Results</h1>
                <h2>
                  {score} out of {questions.length} correct - (
                  {(score / questions.length) * 100}%)
                </h2>
                <button onClick={() => restartGame()}>Restart game</button>
              </div>
            ) : (
              <div className="question-card">
                <h2>
                  Question: {currentQuestion + 1} out of {questions.length}
                </h2>
                <h3 className="question-text">{questions[currentQuestion].text}</h3>
      
                <ul>
                  {questions[currentQuestion].options.map((option) => {
                    return (
                      <li
                        key={option.id}
                        onClick={() => optionClicked(option.isCorrect)}
                      >
                        {option.text}
                      </li>
                    );
                  })}
                </ul>
            </div>
            
          )}
          </div>
        </div>
      );
  }

  export default Questions;