import { useState, useEffect } from "react";
import Result from "./result";

const Question = ({ questions }) => {
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const [result, setResult] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const onShowModal = () => {
    setShowModal(false);
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
  };
  const onNextQuestion = () => {
    let nextQuestion = currentQuestion + 1;

    setCurrentQuestion(nextQuestion);
  };
  useEffect(() => {
    answers.every((element) => element != null) ? answerCount() : null;
  }, [result, answers]);

  return (
    <div className=" border-gray-300 border-2 rounded-xl font-montserrat ">
      {answers.every((element) => element != null) && showModal ? (
        <Result result={result} onShowModal={onShowModal} />
      ) : null}
      <div className="p-5">
        <div className="mb-2 min-w-40">
          <h1 className=" px-4 text-lg text-accent ">
            {questions[currentQuestion].question}
          </h1>

          <ul className="grid  md:grid-cols-2 grid-cols-1 text-sm max-w-lg">
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
                className="border-2 m-2 p-1 px-4 rounded-2xl h-min-10
                     hover:text-yellow-400 text-textColor"
              >
                {choice}
              </li>
            ))}
          </ul>
          {currentQuestion === 9 ? null : (
            <button
              className="bg-accent text-white font-bold uppercase text-sm px-6 py-3 rounded shadow m-4 float-right disabled:opacity-50"
              type="button"
              onClick={() => onNextQuestion()}
              disabled={answers[currentQuestion] === null ? true : false}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;
