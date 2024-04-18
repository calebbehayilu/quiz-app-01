import { useState, useEffect } from "react";
import Result from "./result";
import BtnAnswer from "./btn-answer";

const Question = ({ questions }) => {
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const [result, setResult] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const onShowModal = () => {
    setShowModal(false);
    setCurrentQuestion(0);
  };

  const answerCount = () => {
    if (answers.every((element) => element != null)) {
      const answersCount = answers.filter(Boolean).length;

      setResult(answersCount);
      setShowModal(true);
    }
  };

  const checkAnswer = (questionId, choice, answer) => {
    const nextAnswers = answers.slice();
    const q_id = questionId - 1;

    if (answers[q_id] === null) {
      if (choice === answer) {
        nextAnswers[q_id] = true;
        setAnswers(nextAnswers);
      } else {
        nextAnswers[q_id] = false;
        setAnswers(nextAnswers);
      }
    }

    if (currentQuestion === 9) return setShowModal(true);

    onNextQuestion();
  };

  const onNextQuestion = () => {
    let nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
  };

  useEffect(() => {
    answers.every((element) => element != null) ? answerCount() : null;
  }, [result, answers]);

  return (
    <div className="">
      {answers.every((element) => element != null) && showModal ? (
        <Result result={result} onShowModal={onShowModal} />
      ) : null}

      <div className="p-5">
        <div className="mb-2 min-w-40">
          <h1 className="p-4 text-lg max-w-md">
            {questions[currentQuestion].question}
          </h1>

          <ul className="flex flex-col gap-3">
            {questions[currentQuestion].choices?.map((choice, i) => (
              <li
                key={choice}
                onClick={() =>
                  checkAnswer(
                    questions[currentQuestion].id,
                    i,
                    questions[currentQuestion].answer
                  )
                }
                className="btn btn-outline btn-accent"
              >
                {choice}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Question;
