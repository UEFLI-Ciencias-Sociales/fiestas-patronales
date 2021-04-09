import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Loading } from "../../components/Loading";
import { Questionaire } from "../../components/Questionaire";
import { dataQuestions } from "../../data/questions";

const MAX_QUESTION = 5;
const alreadyIndexs = [0];

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [endQuiz, setEndQuiz] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [item, setItem] = useState(-1);

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
    }
    setItem(indicador);
    setShowAnswer(true);
  };

  const resetQuiz = () => {
    setEndQuiz(false);
    setScore(0);
    setCurrentIndex(Math.round(Math.random() * (questions.length - 1)));
    alreadyIndexs.length = 0;
    alreadyIndexs.push(currentIndex);
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
      alreadyIndexs.length > MAX_QUESTION ||
      alreadyIndexs.length > questions.length
    ) {
      setEndQuiz(true);
    }
  };

  return (
    <div className="quiz-container">
      {endQuiz ? (
        <div>
          <div className="quiz-score">
            Your score was {score}/{MAX_QUESTION}
          </div>
          <Button onClick={resetQuiz} className="bg-white mb-1" block>
            Reset
          </Button>
          <Button className="bg-white" block>
            Back to home
          </Button>
        </div>
      ) : questions.length > 0 ? (
        <Questionaire
          handleAnswer={handleAnswer}
          handleNextQuestion={handleNextQuestion}
          showAnswer={showAnswer}
          item={item}
          data={questions[currentIndex]}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
}
