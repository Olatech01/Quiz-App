'use client'
import React, { useState } from 'react'
import medium from '../../data/medium'

const Quiz2 = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
  
    const handleAnswerOptionClick = (isCorrect) => {
      if (isCorrect) {
        setScore(score + 2); 
      }
  
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < medium.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    };
  
    return (
      <div className="quiz-container flex flex-col gap-[40px] text-white">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {medium.length * 2}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{medium.length}
              </div>
              <div className="question-text">{medium[currentQuestion].question}</div>
            </div>
            <div className="answer-section grid grid-cols-2 gap-3">
              {medium[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswerOptionClick(option === medium[currentQuestion].answer)} className='border p-2 rounded-lg'>
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    );
}

export default Quiz2