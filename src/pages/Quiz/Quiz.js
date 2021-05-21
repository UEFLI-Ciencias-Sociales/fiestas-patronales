import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "src/components/Button";
import { Loading } from "src/components/Loading";
import { Questionaire } from "src/components/Questionaire";
import { dataQuestions } from "src/data/questions";

const MAX_QUESTION = 10;
const alreadyIndexs = [0];

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [endQuiz, setEndQuiz] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [buttonSelect, setButtonSelect] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setQuestions(
        dataQuestions.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
        }))
      );
    }, 500);

  }, []);

  const handleAnswer = (answer, indicador) => {
    if (!showAnswer) {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
      setButtonSelect(undefined);
    }
    
    setShowAnswer(true);
    setButtonSelect(indicador);
  };

  const resetQuiz = () => {
    const initialIndex = Math.round(Math.random() * (questions.length - 1))
    setEndQuiz(false);
    setScore(0);
    setCurrentIndex(initialIndex);
    alreadyIndexs.length = 0;
    alreadyIndexs.push(initialIndex);
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);
    let newIndex;

    do {
      newIndex = Math.round(Math.random() * (questions.length - 1));
    } while (alreadyIndexs.includes(newIndex));
    alreadyIndexs.push(newIndex);
    setCurrentIndex(newIndex);

    if (
      alreadyIndexs.length === MAX_QUESTION ||
      alreadyIndexs.length === questions.length
    ) {
      setEndQuiz(true);
    }
  };

  return (
    
    <div className="quiz-container">
      {endQuiz ? (
        <div>
          <div className="quiz-score">
            Tu puntación es {score}/{MAX_QUESTION}
          </div>
          <Button onClick={resetQuiz} className="block w-full p-2 rounded-lg bg-white mb-4">
            Reintentar
          </Button>
          <Link to='/' className="text-center block w-full p-2 rounded-lg bg-white">
            <div onClick={resetQuiz}>Volver al inicio</div>
          </Link>
        </div>
      ) : questions.length > 0 ? (
        <Questionaire
          handleAnswer={handleAnswer}
          handleNextQuestion={handleNextQuestion}
          showAnswer={showAnswer}
          buttonSelect={buttonSelect}
          data={questions[currentIndex]}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
}
