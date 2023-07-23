import { useState, useEffect } from "react";
import Result from "./result";

const Question = (props) => {
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const [result, setResult] = useState(0);
  const [showModal, setShowModal] = useState(false);

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

  useEffect(() => {}, [result]);

  return (
    <div className=" border-gray-300 border-2 rounded-xl font-montserrat scroll-">
      {showModal ? <Result result={result} onShowModal={onShowModal} /> : null}
      <div className="p-5">
        {props.questions.map((question) => (
          <div className="mb-2" key={question.id}>
            <h1 className=" px-4 text-lg text-accent ">
              {question.id + `. ` + question.question}
            </h1>

            <ul className="grid  md:grid-cols-2 grid-cols-1 text-sm max-w-lg">
              {question.choices.map((choice, i) => (
                <li
                  key={choice}
                  onClick={() => checkAnswer(question.id, i, question.answer)}
                  className="border-2 m-2 p-1 px-4 rounded-2xl h-min-10
                     hover:text-yellow-400 text-textColor"
                >
                  {choice}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button
        className="bg-accent text-white font-bold uppercase text-sm px-6 py-3 rounded shadow m-4 float-right disabled:opacity-50"
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
