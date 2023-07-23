import { useState, useEffect } from "react";
import Result from "./result";

const Question = (props) => {
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const [result, setResult] = useState(0);
  const [showModal, setShowModal] = useState(false);

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

  useEffect(() => {
  }, [result]);

  return (
    <div className=" border-gray-300 border-2 rounded-xl">
      {showModal ? (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <h1 className="text-blue-400 p-5 m-2">
                {" "}
                Your Result is : {result} / 10
              </h1>
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="p-5">
        {props.questions.map((question) => (
          <div className="mb-2" key={question.id}>
            <h1 className=" px-4 text-lg text-lime-300 ">
              {question.id + `. ` + question.question}
            </h1>

            <ul className="grid grid-cols-2 text-sm max-w-lg">
              {question.choices.map((choice, i) => (
                <li
                  key={choice}
                  onClick={() => checkAnswer(question.id, i, question.answer)}
                  className="border-2 m-2 p-1 px-4 rounded-2xl h-min-10
                     hover:text-lime-400"
                >
                  {choice}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button
        className="bg-pink-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow m-4 float-right disabled:opacity-50"
        type="button"
        onClick={() => answerCount()}
        disabled={answers.every((element) => element != null) ? false : true}
      >
        Submit
      </button>
    </div>
  );
};

export default Question;
