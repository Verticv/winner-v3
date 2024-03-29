import Footer from "components/mainPage/Footer";
import Navbar from "components/mainPage/NavBar";
import OverlayBackground1 from "../images/overlay_background_1.png";
import OverlayBackground2 from "../images/overlay_background_2.png";
import React, { useEffect, useState } from "react";
import MainTabs from "components/nonLivePage/MainTabs/MainTabs";
import LeftAccordion from "components/nonLivePage/LeftAccordion/LeftAccordion";
import Search from "components/nonLivePage/Search/Search";
import CenterComponent from "components/nonLivePage/CenterComponent/CenterComponent";
import CenterAccordion from "components/nonLivePage/CenterAccordion/CenterAccordion";
import EnglandComponent from "components/nonLivePage/EnglandComponent/EnglandComponent";
import EnglandComponent2 from "components/nonLivePage/EnglandComponent/EnglandComponent2";
import EntireAccordion from "components/nonLivePage/EntireAccordion/EntireAccordion";
import RightComponent from "components/nonLivePage/RightComponent/RightComponent";

import Tabs from "components/nonLivePage/Tabs/Tabs";
import { useSelector } from "react-redux";

const NonLiveBet = ({ isAuthenticated, setAuthenticated }) => {
  const [active, setActive] = useState(0);
  const [englandActive, setEnglandActive] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const liveGameData = useSelector((state) => state.nonLive.liveGame.data);

  useEffect(() => {
    let container_boxes = document.querySelectorAll("div.scroll-box");
    if (container_boxes) {
      container_boxes.forEach((element) => {
        handleOnScroll(element);
        handleScrollEnd(element);
      });
    }
  });

  useEffect(() => {
      handleOnScroll(window);
      handleScrollEnd(window);
  });

  const handleOnScroll = (element) => {
    element.addEventListener("scroll", (event) => {
      pauseHover();
    });
  };
  const pauseHover = () => {
    let timer;
    clearTimeout(timer);
    const allWithClass = Array.from(document.getElementsByClassName("hover-style"));
    allWithClass.forEach((element) => {
      let list = element.classList;
      list.remove("can-hover");
    });
    activateHover()
  };

  const activateHover = () => {
    const allWithClass = Array.from(document.getElementsByClassName("hover-style"));
    setTimeout(() => {
      allWithClass.forEach((element) => {
        let list = element.classList;
        list.add("can-hover");
      });
    }, 500);
  }
  const handleScrollEnd = (element) => {
    element.addEventListener("scrollend", (event) => {
      let timer;
      clearTimeout(timer);
      activateHover()
    });
  };
  return (
    <>
      <div
        style={{
          background: "linear-gradient(to right, #b644c4, #351894)",
        }}
        className="w-full relative flex flex-col justify-center items-start limit:items-center limit1920:overflow-x-hidden"
      >
        <img style={{ top: "124px" }} src={OverlayBackground1} alt="overlay background" className="absolute w-full" />
        <img
          style={{ top: "956px" }}
          src={OverlayBackground2}
          alt="overlay background"
          className="absolute w-full opacity-50"
        />
      </div>
      <div
        style={{
          top: "125px",
          background: "linear-gradient(to right, #52296b, #2c1c5d)",
        }}
        className="w-full absolute flex flex-col justify-center items-start"
      >
        <div className="fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center">
          <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
        </div>

        <div className="h-28px mt-px" />

        <div className="relative w-full flex flex-col items-start -mt-2px limit:items-center limit1920:items-center h-36px z-40">
          <MainTabs />
          <div className="absolute bottom-0 left-0 h-px w-full bg-r2c1137" />
        </div>
        <div
          style={{ background: "linear-gradient(to right, #b644c4, #351894)", minHeight: "calc(100vh + 10px)" }}
          className="relative w-full flex items-start justify-center"
        >
          <div
            style={{
              overflowY: "auto",
              flexShrink: 0,
              maxHeight: "100vh",
              minHeight: "400px",
              marginBottom: "8px",
              marginLeft:'-10px'
            }}
            id="scroll-box"
          >
            <Search />
            <LeftAccordion />
          </div>
          <div
            style={{
              overflowY: "auto",
              overflowX: "visible",
              flexShrink: 0,
              height: "100vh",
              marginRight: "1px",
              marginLeft: "1px",
              width: "650px",
              paddingLeft: "4px",
            }}
            className="scroll-box"
          >
            <Tabs active={active} setActive={setActive} />
            {/*  */}
            <div style={{}}>
              <CenterComponent setEnglandActive={setEnglandActive} setIsOpen={setIsOpen} />
              <CenterAccordion setEnglandActive={setEnglandActive} />
            </div>
          </div>
          <div
            style={{
              overflowY: "auto",
              flexShrink: 0,
              height: "100vh",
              marginLeft: englandActive ? "-1px" : "0",
              marginRight: englandActive ? "5px" : "",
            }}
            className="scroll-box"
          >
            {englandActive ? (
              <EnglandComponent2
                englandActive={englandActive}
                setEnglandActive={setEnglandActive}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
              />
            ) : (
              <>
                <EnglandComponent englandActive={englandActive} setEnglandActive={setEnglandActive} />
                {liveGameData.length > 0 && <EntireAccordion />}
              </>
            )}
          </div>
          <div
            style={{
              overflowY: "auto",
              overflowX: "visible",
              flexShrink: 0,
              height: "100vh",
              paddingLeft: "10px",
              marginLeft: "-10px",
            }}
          >
            <RightComponent />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default NonLiveBet;
