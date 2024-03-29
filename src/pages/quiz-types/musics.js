import { useEffect, useState, Component } from "react";
import Question from "../question";
import axios from "axios";

export const getStaticProps = async () => {
  const url = "http://localhost:8000/music/";

  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { questions: data },
  };
};

const Musics = ({ questions  }) => {

  const [jsonData, setJsonData] = useState(questions);


  return (
    <div
      className="flex `{ min-h-screen}` flex-col items-center 
                    justify-between p-10"
    >
      <h1 className="text-textColor text-2xl py-4">Music</h1>
     <Question questions={jsonData} />
    </div>
  );
};

export default Musics;
