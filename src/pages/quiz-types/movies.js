import { useState } from "react";
import Question from "../question";

export const getStaticProps = async () => {
  const url = "http://localhost:8000/movie/";

  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { questions: data },
  };
};

const Movies = ({questions}) => {
  const [jsonData, setJsonData] = useState(questions);

  return (
    <div className="flex `{ min-h-screen}` flex-col items-center 
    justify-between p-10">
      <h1 className="text-textColor text-2xl py-4">Movies</h1>
      <Question  questions={jsonData} />
    </div>
  );
};

export default Movies;
