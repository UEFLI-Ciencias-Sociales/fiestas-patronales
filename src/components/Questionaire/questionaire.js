import React from 'react'
import { Button } from '../Button'

export default function Questionaire({
  handleNextQuestion,
  showAnswer,
  handleAnswer,
  item=0,
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
        
        return <Button
          key={index}
          className={`${textColor} btn-questionaire`}
          onClick={() => {handleClick(answer,index);
            // setMono(index);
          }}
        >
          {answer} + index {index} + item {item} 
          {/* + mono {mono} */}
        </Button>
})}
      </div>
      {showAnswer && <Button className="btn-next-question mt-1" onClick={handleNextQuestion}>
        Next Question
      </Button>}
    </div>
  )
}
