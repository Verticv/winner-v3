import Footer from "components/mainPage/Footer";
import DirectoryComponent from "components/myPage/DirectoryComponent";
import Navbar from "../components/mainPage/NavBar";
import QuickMenu from "components/QuickMenu";
import React, { useState, useEffect } from "react";
import { Route } from "react-router";
import HorizontalMenu9 from "components/horizontalMenus/HorizontalMenu9";
import EsportsStructure from "components/esports/EsportsStructure";
import EsportsSingle from "components/esports/EsportsSingle";
import EsportsMulti from "components/esports/EsportsMulti";
import LiveSport from "components/esports/LiveSport";
import HoldemGame from "components/esports/HoldemGame";

const EsportsPage = ({ isAuthenticated, setAuthenticated }) => {
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
    { text: "화면구성설명", id: 0, path: "/esports/structure" },
    { text: "단폴더 베팅방법", id: 1, path: "/esports/single" },
    { text: "다폴더 베팅방법", id: 2, path: "/esports/multi" },
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
          height: "calc(100vh - 497px)",
          top: scrollPosition > 497 ? "235px" : "356px",
        }}
        className={`fixed z-20 flex justify-end`}
      >
        <QuickMenu scrollPosition={scrollPosition} />
      </div>

      <div
        style={{ marginTop: "154px" }}
        className="flex flex-col items-start limit:items-center w-full h-full"
      >
        <Route path="/esports/structure">
          <DirectoryComponent
            branch1="e-스포츠"
            branch2="화면구성설명"
            mainPath="/esports/structure"
            setSelectedTab={setSelectedTab}
          />
        </Route>
        <Route path="/esports/single">
          <DirectoryComponent
            branch1="e-스포츠"
            branch2="단폴더 베팅방법"
            mainPath="/esports/structure"
            setSelectedTab={setSelectedTab}
          />
        </Route>
        <Route path="/esports/multi">
          <DirectoryComponent
            branch1="e-스포츠"
            branch2="다폴더 베팅방법"
            mainPath="/esports/structure"
            setSelectedTab={setSelectedTab}
          />
        </Route>
        <Route path="/esports/LiveSport">
          <DirectoryComponent
            branch1="실시간스포츠"
            branch2="이용가이드"
            mainPath="/esports/LiveSport"
            setSelectedTab={setSelectedTab}
          />
        </Route>

        <Route path="/esports/hold'emGame">
          <DirectoryComponent
            branch1="홀덤게임"
            branch2="이용가이드"
            mainPath="/esports/hold'emGame"
            setSelectedTab={setSelectedTab}
          />
        </Route>

        <div className="w-default mt-4px mb-px z-30">
          <Route path="/esports/structure">
            <HorizontalMenu9
              itemsArray={MenuArray}
              setSelectedTab={setSelectedTab}
            />
          </Route>
          <Route path="/esports/single">
            <HorizontalMenu9
              itemsArray={MenuArray}
              setSelectedTab={setSelectedTab}
            />
          </Route>
          <Route path="/esports/multi">
            <HorizontalMenu9
              itemsArray={MenuArray}
              setSelectedTab={setSelectedTab}
            />
          </Route>
        </div>

        <div className="mt-20px mb-65px w-default z-30">
          <Route path="/esports/structure">
            <EsportsStructure />
          </Route>
          <Route path="/esports/single">
            <EsportsSingle />
          </Route>
          <Route path="/esports/multi">
            <EsportsMulti />
          </Route>
          <Route path="/esports/LiveSport">
            <LiveSport />
          </Route>
          <Route path="/esports/hold'emGame">
            <HoldemGame />
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

export default EsportsPage;
