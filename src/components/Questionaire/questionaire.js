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
  
  return (
    <div className='questionaire-container'>
      <div className='question-container'>
          {question}
      </div>
      <div className='response-container'>
        {answers.map((answer, index) => {
          const textColor = showAnswer
            ? answer === correct_answer
              ? 'text-green-500'
              : 'text-red-500'
            : 'text-blue-500'

          const selected = showAnswer && index === buttonSelect ? 'border-2 border-gray-800' : undefined;
        
        return <Button
          disabled={showAnswer}
          key={index}
          className={`${textColor} ${selected} p-2 rounded-lg bg-white`}
          onClick={() => handleClick(answer,index)}
        >
          {answer}
        </Button>
})}
      </div>
<<<<<<< HEAD
      {showAnswer && <Button className="ml-auto bg-blue-400 p-2 mt-4" onClick={handleNextQuestion}>
=======
      {showAnswer && <Button className="ml-auto text-white bg-blue-400 p-2 mt-4" onClick={handleNextQuestion}>
>>>>>>> 55b8b291a5f31c1b58d46d8dcf0045b779232bd8
        Next Question
      </Button>}
    </div>
  )
}
