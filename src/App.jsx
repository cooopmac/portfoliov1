import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { Navbar, Home, Work } from "./components";
import FixedLinks from "./components/FixedLinks";

const App = () => {
  const [sectionIds] = useState(["home", "work"]);

  return (
    <BrowserRouter>
      <div className="relative bg-[#1A1A1B]">
        <Navbar sectionIds={sectionIds} />
        <div id="home">
          <Home />
        </div>
        <div className="z-50">
          <FixedLinks />
        </div>
      </div>
      <div className="relative bg-[#1A1A1B]">
        <div id="work">
          <Work />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
