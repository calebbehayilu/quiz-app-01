import Link from "next/link";
import { BiCameraMovie ,BiMusic ,BiDice3 } from "react-icons/bi";

const GenerQuestion = () => {
  return (
    <div>
      <h1 className="text-textColor">Choose Question Genre </h1>
      <ul className="flex justify-between flex-col md:flex-row  text-textColor">
        <li className="px-5 py-2 bg-accent m-4 rounded-xl ">
          <Link href={"/quiz-types/movies"} className="flex justify-center">
            <BiCameraMovie className="" size={20} />{" "}
            <div className="px-2">Movie</div>
          </Link>
        </li>
        <li className="px-5 py-2 bg-accent m-4 rounded-xl  ">
          <Link href={"/quiz-types/musics"} className="flex justify-center">
            <BiMusic className="" size={20} /> <div className="px-2">Music</div>
          </Link>
        </li>
        <li className="px-5 py-2 bg-accent m-4 rounded-xl ">
          <Link href={"/quiz-types/random"} className="flex justify-center">
            <BiDice3 className="" size={20} />{" "}
            <div className="px-2">Random</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default GenerQuestion;
