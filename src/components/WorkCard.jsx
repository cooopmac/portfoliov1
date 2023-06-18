import React from "react";
import Gradient from "rgt";
import { FaGithub } from "react-icons/fa";

const WorkCard = ({
  projectName,
  description,
  stackUsed,
  image,
  githublink,
}) => {
  return (
    <div className="flex bg-[#1A1A1B] rounded-lg overflow-hidden shadow-md shadow-black/50 px-4 py-2 items-center transition ease-in-out hover:translate-y-[-4px] hover:translate-x-0.5 hover:bg-white/[.05] cursor-pointer">
      <div className="pr-4">
        <img className="w-[175px] h-[100px] border-2 rounded-lg" src={image} />
        <div className="pt-7 text-[24px] flex justify-center items-center">
          <a href={githublink} target="_blank">
            <FaGithub className="text-gray-400 transition-colors hover:text-[#00DFD8] cursor-pointer duration-300" />
          </a>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className=" max-w-xs text-[24px] font-bold text-white">
          {projectName}
        </h3>
        <p className="max-w-xs text-[16px] text-gray-400">{description}</p>
        <div className="flex justify-end pt-2">
          <p className="">
            <Gradient dir="left-to-right" from="#00DFD8" to="#007CF0">
              {stackUsed}
            </Gradient>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
