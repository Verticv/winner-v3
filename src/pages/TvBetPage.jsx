import Footer from "components/mainPage/Footer";
import DirectoryComponent from "components/myPage/DirectoryComponent";
import Navbar from "../components/mainPage/NavBar";
import QuickMenu from "components/QuickMenu";
import React, { useState, useEffect } from "react";
import { Route } from "react-router";
import HorizontalMenu9 from "components/horizontalMenus/HorizontalMenu9";
import TvBetStructure from "components/tvBet/TvBetStructure";
import TvBetHowTo from "components/tvBet/TvBetHowTo";

const TvBetPage = ({ isAuthenticated, setAuthenticated }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const MenuArray = [
    { text: "화면구성설명", id: 0, path: "/tvbet/structure" },
    { text: "베팅방법", id: 1, path: "/tvbet/how-to" },
  ];

  const [, setSelectedTab] = useState(0);

  return (
    <div
      style={{ background: "linear-gradient(to right, #b644c4, #351894)" }}
      className="relative flex flex-col justify-center items-center limit1920:overflow-x-hidden bg-gray-1e1e1e"
    >
      <div className="fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center">
        <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
      </div>
      <div
        style={{
          width: "1496px",
          top: scrollPosition > 200 ? "235px" : "282px",
        }}
        className={`fixed z-50 flex justify-end`}
      >
        <QuickMenu scrollPosition={scrollPosition} />
      </div>
      <div style={{ marginTop: "154px" }} className="flex flex-col items-start limit:items-center w-full h-full">
        <Route path="/tvbet/structure">
          <DirectoryComponent
            branch1="티비벳"
            branch2="화면구성설명"
            mainPath="/tvbet/structure"
            setSelectedTab={setSelectedTab}
          />
        </Route>
        <Route path="/tvbet/how-to">
          <DirectoryComponent
            branch1="티비벳"
            branch2="베팅방법"
            mainPath="/tvbet/structure"
            setSelectedTab={setSelectedTab}
          />
        </Route>

        <div className="w-default mt-4px mb-px z-30">
          <Route path="/tvbet/structure">
            <HorizontalMenu9 itemsArray={MenuArray} setSelectedTab={setSelectedTab} />
          </Route>
          <Route path="/tvbet/how-to">
            <HorizontalMenu9 itemsArray={MenuArray} setSelectedTab={setSelectedTab} />
          </Route>
        </div>

        <div className="mt-20px mb-65px w-default z-30">
          <Route path="/tvbet/structure">
            <TvBetStructure />
          </Route>
          <Route path="/tvbet/how-to">
            <TvBetHowTo />
          </Route>
          <Route path="*"></Route>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default TvBetPage;
