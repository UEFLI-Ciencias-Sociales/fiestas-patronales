import React from 'react'
import { Button } from '../Button'

export default function Questionaire({
  handleNextQuestion,
  showAnswer,
  handleAnswer,
  data: {
    question,
    correct_answer,
    answers
  },
}) {

  const handleClick = (answer) => {
    handleAnswer(answer)
  }
  
  return (
    <div className='questionaire-container'>
      <div className='question-container'>
          {question}
      </div>
      <div className='response-container'>
        {answers.map((answer, index) => {
          const textColor = showAnswer
            ? answer === correct_answer
              ? 'correct'
              : 'incorrect'
            : undefined 

        return <Button
          key={index}
          className={`${textColor} btn-questionaire`}
          onClick={handleClick}
        >
          {answer}
        </Button>
})}
      </div>
      {showAnswer && <Button className="btn-next-question mt-1" onClick={handleNextQuestion}>
        Next Question
      </Button>}
    </div>
  )
}
