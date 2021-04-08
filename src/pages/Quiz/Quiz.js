import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Loading } from "../../components/Loading";
import { Questionaire } from "../../components/Questionaire";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [endQuiz, setEndQuiz] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results.map(question => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers
          ].sort(() => Math.random() - 0.5)
        })))
      })
      .catch((err) => console.error(err));
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
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);

    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="quiz-container">
      {endQuiz ? (
        <div>
          <div className="quiz-score">
            Your score was {score}/{questions.length}
          </div>
          <Button onClick={resetQuiz} block className="bg-white mb-1">
            Reset
          </Button>
          <Button block className="bg-white">
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
