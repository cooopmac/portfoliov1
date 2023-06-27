import React from "react";
import { HiArrowRight } from "react-icons/hi";
import WorkCard from "./WorkCard";
import workpic from "../../public/images/undraw_programming_re_kg9v.svg";
import lazarus from "../../public/images/lazarus-screenshot.png";
import molecule from "../../public/images/molecule-github.png";
import portfolio from "../../public/images/port-screenshot.png";

const WorkPage = () => {
  return (
    <section className="relative w-full mx-auto pb-[100px] pt-12">
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="items-center flex flex-col pt-[100px] gap-10 pl-20">
          <h1 className="text-[48px] font-bold text-white">My Work.</h1>
          <div className="flex w-[400px]">
            <img src={workpic} />
          </div>
          <div className="pt-5 flex items-center">
            <p className="text-[#37AA9C] text-[18px] font-light">
              A Few Projects.
            </p>
            <div className="ml-4 text-[#37AA9C]">
              <HiArrowRight />
            </div>
          </div>
        </div>

        <div className="max-w-lg flex flex-col gap-5 pt-[100px] px-10 md:px-0">
          <WorkCard
            projectName="The Lazarus Method"
            description="a web-app created for Dr. Ryan Lazarus to be used with his clients, all frontend development (not design) was coded by me. the used of chart.js was also incorporated into the page."
            stackUsed="html - css - javascript - chart.js"
            image={lazarus}
            githubLink="https://github.com/justinbather/lazarus-method"
            websiteLink="https://lazarus-method.herokuapp.com/accounts/login/"
          />
          <WorkCard
            projectName="Molecule Generator"
            description="a fullstack application created solely by me, allows users to upload sdf files of their favourite molecule, save them to a database, apply custom colors for atoms, and have them displayed as an svg file."
            stackUsed="c - python - html - css - javascript"
            image={molecule}
            githubLink=""
            websiteLink=""
          />
          <WorkCard
            projectName="cooper macgregor .com"
            description="my portfolio website, created in React and tailwind. My first real react project fully designed and coded by me."
            stackUsed="react - tailwind - vite"
            image={portfolio}
            githubLink="https://github.com/cooopmac/portfoliov1"
            websiteLink=""
          />
        </div>
      </div>
    </section>
  );
};

export default WorkPage;
