import useFetch from "@/utils/useFetch";
import React from "react";
import Question from "../../components/questions";
import { useSearchParams } from "next/navigation";

const Quiz = () => {
  const params = useSearchParams();

  const { data, isPending, error } = useFetch(
    `http://localhost:8000/${params.get("type")}`
  );

  return (
    <div className="flex flex-col min-h-screen items-center p-10">
      {data && <Question questions={data} />}
      {isPending && (
        <span className="loading loading-spinner loading-lg"></span>
      )}
      {error && (
        <div className="toast toast-bottom toast-center">
          <span className="alert alert-error">Something went wrong</span>
          <button className="btn btn-error">Retry</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
