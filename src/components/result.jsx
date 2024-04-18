import Link from "next/link";

const Result = ({ result, onShowModal }) => {
  return (
    <div className=" bg-opacity-90 bg-slate-500 overflow-hidden justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-neutral outline-none focus:outline-none">
          <h1 className="text-textColor p-5 m-2">
            Your Result is : {result} / 10
          </h1>
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b gap-6 ">
            <Link href={"/"} className="btn btn-info">
              Go Home
            </Link>
            <button className="btn btn-warning" onClick={() => onShowModal()}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
