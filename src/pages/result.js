import Link from "next/link";

const Result = ({ result, onShowModal }) => {
  return (
    <div
      className=" bg-opacity-70 bg-background overflow-hidden justify-center items-center flex 
                     fixed inset-0 z-50 outline-none focus:outline-none "
    >
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-primary outline-none focus:outline-none">
          <h1 className="text-textColor p-5 m-2">
            Your Result is : {result} / 10
          </h1>
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b ">
            <Link
              href={"/"}
              className="  rounded-lg bg-accent text-textColor background-transparent font-bold uppercase px-6
                   py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Go Home
            </Link>
            <button
              className=" ml-3 rounded-lg bg-secondary text-textColor background-transparent font-bold uppercase px-6
                   py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => onShowModal()}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
