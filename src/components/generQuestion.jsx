// import { BiCameraMovie, BiMusic, BiDice3 } from "react-icons/bi";
import BtnHome from "./btn-home";

const GenerQuestion = () => {
  return (
    <div>
      <h1 className=" text-center">Choose Question Genre </h1>
      <ul className="flex flex-col justify-between  md:flex-row">
        <li className="btn btn-primary btn-home ">
          <BtnHome
            name="Movies"
            link="/quiz?type=movie"
            // icon={<BiCameraMovie size={20} />}
          />
        </li>
        <li className="btn btn-primary btn-home">
          <BtnHome
            name="Music"
            link="/quiz?type=music"
            // icon={<BiMusic size={20} />}
          />
        </li>
        <li className="btn btn-primary btn-home">
          <BtnHome
            name="Random"
            link="/quiz?type=random"
            // icon={<BiDice3 size={20} />}
          />
        </li>
      </ul>
    </div>
  );
};

export default GenerQuestion;
