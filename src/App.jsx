import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { Navbar, HomePage, WorkPage, AboutPage } from "./components";
import FixedLinks from "./components/FixedLinks";

const App = () => {
  const [sectionIds] = useState(["home", "work"]);

  return (
    <BrowserRouter>
      <div className="relative bg-[#1A1A1B]">
        <Navbar sectionIds={sectionIds} />
        <div id="home">
          <HomePage />
        </div>
        <div className="z-50 invisible lg:visible">
          <FixedLinks />
        </div>
      </div>
      <div className="relative bg-[#1A1A1B]">
        <div id="about">
          <AboutPage />
        </div>
      </div>
      <div className="relative bg-[#1A1A1B]">
        <div id="work">
          <WorkPage />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
