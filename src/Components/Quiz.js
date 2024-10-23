import originalQuestions from './Questions';
import React, { useState, useEffect } from 'react';

export default function Quiz() {

  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questionsLeft = currentQuestionIndex + 1;
  const [selectedOption, setSelectedOption] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState(Array(10).fill(false));
  const [questions, setQuestions] = useState(() => {
    const shuffled = originalQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
});

const nextQuestion = () => {
  if (currentQuestionIndex < questions.length - 1) {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOption(null); 
  } else {
    setIsQuizFinished(true);
  }
};

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(null); 
    }
  };

  const checkAnswer = (option) => {
    if (selectedOption) return;
  
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (option === correctAnswer) {
      setScore(score + 10);
    }
    setSelectedOption(option);
        const updatedAnsweredQuestions = [...answeredQuestions];
    updatedAnsweredQuestions[currentQuestionIndex] = true;
    setAnsweredQuestions(updatedAnsweredQuestions);
      setTimeout(() => {
      nextQuestion();
    }, 1000);
  };


const resetQuiz = () => {
  setScore(0);
  setCurrentQuestionIndex(0);
  setSelectedOption(null);
  const shuffled = originalQuestions.sort(() => 0.5 - Math.random());
  setQuestions(shuffled.slice(0, 10));
  setAnsweredQuestions(Array(10).fill(false));
  setIsQuizFinished(false);
};

  return (
    <div className='quiz'>
      <br />
      <br />
      <div className='QuizFrame'>
      </div>
      <div className='QuizFrame'>
        <ul className='QuizAVT'>
        <li>{questionsLeft}/{questions.length}</li>
        </ul>
      {!isQuizFinished ? (
        <ul className='QuizSCORE'>
          <li>YOUR SCORE: {score}</li>
        </ul>
      ) : null}
        <ul className='QuizAVT'>
        <li onClick={resetQuiz}><i className="fa-solid fa-undo"></i></li>
        </ul>
      </div>
      <br />

      <div className='QuizFrame'>
        <ul className='QuizT'>
       {isQuizFinished ? (
          <li className='Title'>YOUR FINAL SCORE: {score}</li>
        ) : (
          <>
            <li className='Title'>{questions[currentQuestionIndex].question}</li>
            {questions[currentQuestionIndex].options.map((option, index) => {
              const isAnswered = answeredQuestions[currentQuestionIndex];
              const correctAnswer = questions[currentQuestionIndex].answer;
              let backgroundColor;

              if (isAnswered) {
                if (option === correctAnswer) {
                  backgroundColor = '#ff6f00';
                } else if (option === selectedOption) {
                  backgroundColor = '#FFB74D';
                } else {
                  backgroundColor = '#ffa500';
                }
              } else {
                backgroundColor = '#ffa500';
              }
            
              return (
                <li 
                  key={index} 
                  className='option' 
                  onClick={() => {
                    if (!isAnswered) {
                      checkAnswer(option);
                    }
                  }} 
                  style={{ 
                    cursor: isAnswered ? 'default' : 'pointer',
                    backgroundColor: backgroundColor 
                  }} 
                >
                  {option}
                </li>
              );
            })}
          </>
        )}

          <div className='Actions'>
            <button onClick={previousQuestion}>PREVIOUS</button>
            <button onClick={nextQuestion}>NEXT</button>
          </div>
        </ul>
      </div>
    </div>
  )
}



