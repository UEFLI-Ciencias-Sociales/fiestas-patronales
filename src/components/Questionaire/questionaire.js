import React from 'react'
import { Button } from '../Button'

export default function Questionaire({
  handleNextQuestion,
  showAnswer,
  handleAnswer,
  buttonSelect,
  data: {
    question,
    correct_answer,
    answers
  },
}) {
  // const [mono,setMono] = useState(-1);
  const handleClick = (answer,indicador) => {
    handleAnswer(answer,indicador)
  }

  // let cris = 0;
  
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

          const selected = showAnswer && index === buttonSelect ? 'selected' : undefined;
        
        return <Button
          key={index}
          className={`${textColor} ${selected} btn-questionaire`}
          onClick={() => handleClick(answer,index)}
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
