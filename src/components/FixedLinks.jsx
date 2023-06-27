import React, { useEffect, useState } from "react";

const FixedLinks = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const slideInStyles = {
    animation: animate ? "slide-in 0.5s ease-in-out forwards" : "none",
  };

  const links = [
    {
      href: "https://github.com/cooopmac",
      icon: (
        <svg
          width="46"
          height="46"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#37AA9C" />
              <stop offset="100%" stopColor="#94F3E4" />
            </linearGradient>
          </defs>
          <path
            d="M16.25 22.5v-3.865a3.361 3.361 0 0 0-.94-2.607c3.14-.35 6.44-1.538 6.44-6.99a5.43 5.43 0 0 0-1.5-3.746 5.058 5.058 0 0 0-.09-3.765s-1.18-.35-3.91 1.478a13.397 13.397 0 0 0-7 0C6.52 1.177 5.34 1.527 5.34 1.527a5.058 5.058 0 0 0-.09 3.765 5.43 5.43 0 0 0-1.5 3.775c0 5.413 3.3 6.602 6.44 6.991a3.366 3.366 0 0 0-.94 2.577V22.5 M9.25 19.503c-5 1.498-5-2.496-7-2.996"
            stroke="url(#gradient)"
          ></path>
        </svg>
      ),
    },
    {
      href: "https://www.linkedin.com/in/cooper-macgregor/",
      icon: (
        <svg
          width="46"
          height="46"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z"
            stroke="url(#gradient)"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <div
      className="fixed bottom-0 left-0 ml-5 flex flex-col items-center gap-8 cursor-pointer z-50"
      style={slideInStyles}
    >
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          className="transition ease-in-out hover:translate-y-[-4px]"
        >
          {link.icon}
        </a>
      ))}
      <div className="w-1 h-40 bg-gradient-to-r from-[#37AA9C] to-[#94F3E4]" />
      <style>
        {`
          @keyframes slide-in {
            from {
              transform: translateX(-100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default FixedLinks;
