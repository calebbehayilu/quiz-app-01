import { useEffect } from "react";
import data from "../data";
import Question from "../question";

const Movies = () => {
  useEffect(() => {}, [data]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-10">
      <h1 className="text-textColor">Movies</h1>
      <Question  questions={data} />
    </div>
  );
};

export default Movies;
