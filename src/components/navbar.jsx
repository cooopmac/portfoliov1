import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import navLinks from "../constants";
import Gradient from "rgt";

const Navbar = ({ sectionId }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView(targetId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
        <ul className="list-none hidden sm:flex flex-row gap-10 text-[24px] font-bold cursor-pointer items-center">
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
            <p className="text-white">
              <Gradient dir="left-to-right" from="#37AA9C" to="#94F3E4">
                Resume
              </Gradient>
            </p>
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
