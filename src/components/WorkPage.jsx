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
            description="An in-production software for Dr. Ryan Lazarus that allows users to track their progress and see real-time stats on their health journey. 100+ concurrent users."
            stackUsed="django - javascript - chart.js"
            image={lazarus}
            githubLink="https://github.com/justinbather/lazarus-method"
            websiteLink="https://lazarus-method.herokuapp.com/accounts/login/"
          />
          <WorkCard
            projectName="WeCamp"
            description="Changing the way campgrounds manage bookings allowing campers to check availability online and book a site in seconds."
            image={molecule}
            stackUsed="django - tailwind - react - stripe"
            githubLink="https://github.com/cooopmac/campsitemanagementsystem"
            websiteLink="https://campsite-management.netlify.app/park/1"
          />
          <WorkCard
            projectName="cooper-macgregor"
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
