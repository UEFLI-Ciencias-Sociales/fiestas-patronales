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

  const handleAnswer = (answer) => {
    if (!showAnswer) {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
    }

    setShowAnswer(true);
  };

  const resetQuiz = () => {
    setEndQuiz(false);
    setScore(0);
    setCurrentIndex(0);
    alreadyIndexs.length = 0
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);
    let newIndex;

    do {
      newIndex = Math.round(Math.random() * questions.length);
    } while (alreadyIndexs.includes(newIndex))
    alreadyIndexs.push(newIndex)
    setCurrentIndex(newIndex);

    if (alreadyIndexs.length > MAX_QUESTION || alreadyIndexs.length > questions.length) {
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
          data={questions[currentIndex]}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
}
