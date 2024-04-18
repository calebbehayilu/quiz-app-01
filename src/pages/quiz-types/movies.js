import { useEffect, useState } from "react";
import Question from "../../components/questions";
import { movies } from "../api/questions/data";

const Movies = () => {
  const [jsonData, setJsonData] = useState({});

  const getData = async () => {
    const res = await fetch("http://localhost:8000/movie/");
    const data = await res.json();

    setJsonData(data);
  };

  useEffect(() => {
    getData();
    console.log(jsonData);
  }, []);
  return (
    <div
      className="flex `{ min-h-screen}` flex-col items-center 
    justify-between p-10"
    >
      <h1 className="text-textColor text-2xl py-4">Movies</h1>
      {jsonData && <Question questions={jsonData} />}
    </div>
  );
};

export default Movies;
