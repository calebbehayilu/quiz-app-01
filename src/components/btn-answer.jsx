import React from "react";

const BtnAnswer = ({ questions, currentQuestion, choice, i }) => {
  return (
    <li
      onClick={() =>
        checkAnswer(
          questions[currentQuestion].id,
          i,
          questions[currentQuestion].answer
        )
      }
      className="btn btn-accent"
    >
      {choice}
    </li>
  );
};

export default BtnAnswer;
