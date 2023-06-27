import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import navLinks from "../constants";
import Gradient from "rgt";
import resume from "../../public/images/Resume - Cooper MacGregor.pdf";

const Nav = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [toggle, setToggle] = useState(false); // New state for div visibility

  const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView(targetId);
    }
  };

  useEffect(() => {
    const handleScrollNav = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScrollNav);

    return () => {
      window.removeEventListener("scroll", handleScrollNav);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`px-12 w-full flex items-center py-5 fixed top-0 z-20 bg-[#1A1A1B] ${
        visible ? "shadow-md" : "shadow-none"
      } ${
        visible
          ? "translate-y-0 opacity-100 transition-all duration-300"
          : "translate-y-[-100%] opacity-0 transition-all duration-300"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => handleScroll("home")}
        >
          <p className="text-[#39ace7] text-[36px] flex cursor-pointer font-light">
            <Gradient dir="left-to-right" from="#37AA9C" to="#94F3E4">
              CM.
            </Gradient>
          </p>
        </Link>
        <ul className="list-none hidden md:flex flex-row gap-10 text-[24px] font-bold cursor-pointer items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="text-[#37AA9C] transition ease-in-out hover:translate-y-[-4px]"
            >
              <Link to={`#${nav.id}`} onClick={() => handleScroll(nav.id)}>
                {nav.name}
              </Link>
            </li>
          ))}
          <button className="px-4 py-2 border border-[#37AA9C] rounded-lg font-normal text-[18px] transition ease-in-out hover:bg-white/[.05] ">
            <a
              href="src\assets\Resume - Cooper MacGregor.pdf"
              download="Cooper MacGregor Resume"
              className="text-white"
            >
              <Gradient dir="left-to-right" from="#37AA9C" to="#94F3E4">
                Resume
              </Gradient>
            </a>
          </button>
        </ul>
        <div className="hover:bg-white/[.05] p-2 rounded-lg md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5" // Use strokeWidth instead of stroke-width
            stroke="white"
            className="w-6 h-6" // Use className instead of class
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <div className={`${!toggle ? "hidden" : "flex"} p-6 top-20 z-30`}>
            <ul className="list-none flex flex-col justify-end items-start gap-5 text-[24px] font-bold cursor-pointer">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="text-[#37AA9C] transition ease-in-out hover:translate-y-[-4px]"
                >
                  <Link to={`#${nav.id}`} onClick={() => handleScroll(nav.id)}>
                    {nav.name}
                  </Link>
                </li>
              ))}
              <button className="px-4 py-2 border border-[#37AA9C] rounded-lg font-normal text-[18px] transition ease-in-out hover:bg-white/[.05] ">
                <a
                  className="text-white"
                  href={resume}
                  download="Cooper MacGregor Resume"
                >
                  <Gradient dir="left-to-right" from="#37AA9C" to="#94F3E4">
                    Resume
                  </Gradient>
                </a>
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
