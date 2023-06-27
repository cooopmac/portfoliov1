import React from "react";
import { useState, useEffect } from "react";

const AboutPage = () => {
  const [fadeOpacity, setFadeOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const fadeInOffset = window.innerHeight * 0.5; // Adjust the offset as needed

      if (scrollPosition > fadeInOffset) {
        setFadeOpacity(1);
      } else {
        setFadeOpacity(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="h-fixed relative flex flex-col justify-center items-center md:flex-row p-10">
      <div
        className="w-full md:w-1/2 flex flex-col items-center justify-center p-8"
        style={{ opacity: fadeOpacity, transition: "opacity 0.5s" }}
      >
        <h1 className="text-white text-[48px] font-bold">About Me.</h1>
        <p className="text-gray-400 max-w-md">
          Hey, I'm Cooper, a passionate student at the{" "}
          <span className="text-[#37AA9C]">University of Guelph. </span>
          Computers have been my lifelong fascination, and I'm currently
          pursuing a degree in software development. With a strong foundation in
          both{" "}
          <span className="text-[#37AA9C]">
            front-end and back-end development
          </span>
          , I love creating seamless user experiences and building robust
          systems. Aside from coding, you can find me on the golf course, honing
          my skills and enjoying the outdoors. Staying active through fitness is
          also important to me. Growing up with a deep passion for computers,
          I'm constantly exploring new technologies and frameworks to expand my
          knowledge. As I embark on my career, I'm eager to apply my skills and{" "}
          <span className="text-[#37AA9C]">
            collaborate with experienced professionals{" "}
          </span>
          to make a meaningful impact in the world of software development.
        </p>
      </div>
      <div
        className="rounded-lg bg-[#37AA9C] p-5 flex justify-center mr-20"
        style={{ opacity: fadeOpacity, transition: "opacity 0.5s" }}
      >
        <img
          src="../assets/AvatarMaker.svg"
          alt="headshot"
          className="m-5 rounded-lg"
        />
      </div>
    </section>
  );
};

export default AboutPage;
