import React, { useEffect } from "react";
import Gradient from "rgt";

const about = () => {
  return (
    <section className="relative w-full h-screen md:mt-0">
      <div className="absolute inset-0 max-w-7xl mx-auto flex flex-row gap-5 px-[120px] items-center justify-center md:justify-start">
        <div>
          <p className="text-[#37AA9C] text-[18px] font-light">
            Hi, my name is
          </p>
          <h1 className="text-[48px] font-bold text-white">
            Cooper MacGregor.
          </h1>
          <h1 className="text-[48px] font-bold text-gray-400">
            I create things with code.
          </h1>
          <p className="mt-2 text-gray-400 max-w-md">
            a passionate student pursuing a Bachelor's degree in Computer
            Science at the University of Guelph. With a focus on full-stack
            development and a specialization in front-end technologies like
            React.
          </p>
          <button className="mt-6 px-6 py-2 rounded-lg border border-[#37AA9C] transition ease-in-out hover:bg-white/[.05]">
            <p className="text-white font-normal">
              <Gradient dir="left-to-right" from="#37AA9C" to="#94F3E4">
                Let's Talk
              </Gradient>
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default about;
