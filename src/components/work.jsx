import React from "react";
import Gradient from "rgt";
import { HiArrowRight } from "react-icons/hi";
import WorkCard from "./WorkCard";

const work = () => {
  return (
    <section className="relative w-full h-screen mx-auto mb-10">
      <div className="flex justify-around items-center">
        <div className=" items-start flex flex-col pt-[100px] pl-20">
          <h1 className="text-[48px] font-bold text-white">My Work.</h1>
          <div className="flex w-[300px] pt-[125px]">
            <img src="src/assets/undraw_remotely_-2-j6y.svg" />
          </div>
          <div className="pt-5 flex items-center">
            <p className="text-[18px] font-light">
              <Gradient dir="left-to-right" from="#00DFD8" to="#007CF0">
                A Few Projects.
              </Gradient>
            </p>
            <div className="ml-4 text-[#007CF0]">
              <HiArrowRight />
            </div>
          </div>
        </div>

        <div className="max-w-lg flex flex-col gap-5 pt-[100px]">
          <WorkCard
            projectName="The Lazarus Method"
            description="a web-app created for Dr. Ryan Lazarus to be used with his clients, all frontend development (not design) was coded by me. the used of chart.js was also incorporated into the page."
            stackUsed="html - css - javascript - chart.js"
            image="src/assets/lazarus-screenshot.png"
            githublink="https://github.com/justinbather/lazarus-method"
          />
          <WorkCard
            projectName="Molecule Generator"
            description="a fullstack application created solely by me, allows users to upload sdf files of their favourite molecule, save them to a database, apply custom colors for atoms, and have them displayed as an svg file."
            stackUsed="c - python - html - css - javascript"
            image="src/assets/molecule-github.png"
            githublink=""
          />
          <WorkCard
            projectName="coopermacgregor.com"
            description="my portfolio website, created in React and tailwind. My first real react project fully designed and coded by me. incorporates framer motion for animations."
            stackUsed="react - tailwind - vite"
            image="src/assets/port-screenshot.png"
            githublink=""
          />
        </div>
      </div>
    </section>
  );
};

export default work;
