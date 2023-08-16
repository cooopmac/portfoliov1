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
      <div className="flex justify-center">
        <hr className="w-3/4" />
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="items-center flex flex-col pt-[100px] gap-10 md:pl-20">
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
            description="Course and Progress Tracking Web Application for Dr. Ryan Lazarus in California, a Naturopath focused on helping patients improve their health and wellness physically, mentally, and spiritually."
            stackUsed="django - css - javascript - chart.js"
            image={lazarus}
            githubLink="https://github.com/justinbather/lazarus-method"
            websiteLink="https://lazarus-method.herokuapp.com/accounts/login/"
          />
          <WorkCard
            projectName="GoCamp!"
            description="A fullstack camping application that streamlines the booking process for campgrounds and allows users to easily book campsites utilizing a REST API created by me and a friend, stripe and react for the frontend."
            stackUsed="django - react - tailwind - postgreSQL"
            image={molecule}
            githubLink="https://github.com/justinbather/campsitemanagementsystem"
            websiteLink=""
          />
          <WorkCard
            projectName="cooper-macgregor.com"
            description="My portfolio website, created in React and tailwind. My first real react project fully designed and created by me."
            stackUsed="react - tailwind - vite"
            image={portfolio}
            githubLink="https://github.com/cooopmac/portfoliov1"
            websiteLink="https://cooper-macgregor.netlify.app/"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkPage;
