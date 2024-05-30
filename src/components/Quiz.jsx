'use client'
import React, { useState } from 'react';
import easy from '../../data/easy';
import medium from '../../data/medium';
import hard from '../../data/hard';


const Quiz = () => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const getQuestions = () => {
    switch (currentLevel) {
      case 1:
        return easy;
      case 2:
        return medium;
      case 3:
        return hard;
      default:
        return [];
    }
  };

  const questions = getQuestions();

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 2); 
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleNextLevel = () => {
    setTotalScore(totalScore + score);
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
    setCurrentLevel(currentLevel + 1);
  };

  const handleRetakeQuiz = () => {
    setTotalScore(0);
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
    setCurrentLevel(1);
  };

  return (
    <div className="quiz-container flex flex-col gap-[40px] text-white">
      {showScore ? (
        <div className="score-section border h-[30vh]  rounded-xl flex flex-col gap-3 items-center justify-center px-2">
          You scored {score} out of {questions.length * 2}
          {currentLevel < 3 ? (
            <button onClick={handleNextLevel} className='bg-white text-black px-2 font-bold rounded-lg'>Proceed to Level {currentLevel + 1}</button>
          ) : (
            <div>
              <div>Total score: {totalScore + score} out of {3 * questions.length * 2}</div>
              <button onClick={handleRetakeQuiz} className='bg-white text-black px-2 font-bold rounded-lg'>Retake Quiz</button>
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].question}</div>
          </div>
          <div className="answer-section grid grid-cols-2 gap-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(option === questions[currentQuestion].answer)} className='border p-2 rounded-lg'>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
