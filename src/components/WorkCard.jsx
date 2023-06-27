import React from "react";
import { FaGithub } from "react-icons/fa";

const WorkCard = ({
  projectName,
  description,
  stackUsed,
  image,
  githubLink,
  websiteLink,
}) => {
  return (
    <div className="h-auto flex bg-[#1A1A1B] border border-[#0d2925] rounded-lg overflow-hidden shadow-md shadow-black/50 px-4 py-2 items-center transition ease-in-out hover:translate-y-[-4px] hover:translate-x-0.5 hover:bg-white/[.05] cursor-pointer">
      <div className="pr-4">
        <img
          className="max-w-lg w-[175px] h-[100px] border border-gray-200 rounded-lg"
          src={image}
        />
        <div className="pt-7 text-[24px] flex justify-center items-center gap-5">
          <a href={githubLink} target="_blank">
            <FaGithub className="text-gray-400 transition-colors hover:text-[#37AA9C] cursor-pointer duration-300" />
          </a>
          <a
            href={websiteLink}
            className="text-gray-400 transition-colors hover:text-[#37AA9C] cursor-pointer duration-300"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className=" max-w-xs text-[24px] font-bold text-white">
          {projectName}
        </h3>
        <p className="max-w-xs text-[16px] text-gray-400">{description}</p>
        <div className="flex justify-end pt-2">
          <p className="text-[#37AA9C]">{stackUsed}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
