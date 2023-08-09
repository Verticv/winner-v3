import Footer from "components/mainPage/Footer";
import Navbar from "components/mainPage/NavBar";
import OverlayBackground1 from "../images/overlay_background_1.png";
import OverlayBackground2 from "../images/overlay_background_2.png";
import NoticeBanner from "components/mainPage/NoticeBanner";
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
// import PoupUpComponent from "components/nonLivePage/PoupUpComponent/PoupUpComponent";

import Tabs from "components/nonLivePage/Tabs/Tabs";
import { useSelector } from "react-redux";

const NonLiveBet = ({ isAuthenticated, setAuthenticated }) => {
  const [active, setActive] = useState(0);
  const [englandActive, setEnglandActive] = useState(true);

  useEffect(() => {
    console.log("englandActive", englandActive);
  }, [englandActive, setEnglandActive]);
  const liveGameData = useSelector((state) => state.nonLive.liveGame.data);
  console.log("state :>> ", liveGameData);
  return (
    <>
      <div
        style={{
          background: "linear-gradient(to right, #b644c4, #351894)",
          // minHeight: "3000px",
        }}
        className="w-full relative flex flex-col justify-center items-start limit:items-center limit1920:overflow-x-hidden"
      >
        <img
          style={{ top: "124px" }}
          src={OverlayBackground1}
          alt="overlay background"
          className="absolute w-full"
        />
        <img
          style={{ top: "956px" }}
          src={OverlayBackground2}
          alt="overlay background"
          className="absolute w-full opacity-50"
        />
      </div>
      <div
        style={{ top: "125px" }}
        className="w-full absolute flex flex-col justify-center items-start limit:items-center limit1920:overflow-x-hidden"
      >
        <div className="fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center">
          <Navbar
            isAuthenticated={isAuthenticated}
            setAuth={setAuthenticated}
          />
        </div>

        <div className="relative w-full flex flex-col items-start limit:items-center limit1920:items-center">
          <NoticeBanner />
        </div>

        <div className="relative w-full flex flex-col items-start -mt-2px limit:items-center limit1920:items-center h-36px">
          <MainTabs />
          <div className="absolute bottom-0 left-0 h-px w-full bg-r2c1137" />
        </div>
        <div
          style={{ background: "linear-gradient(to right, #b644c4, #351894)" }}
          className="relative w-full flex items-start "
        >
          {/* <div
            style={{ marginLeft: "717px", marginTop: "130px" }}
            className="flex items-center justify-center absolute z-50 "
          >
            <PoupUpComponent />
          </div> */}
          <div
            style={{
              overflowY: "auto",
              flexShrink: 0,
              height: "730px",
              marginBottom: "90px",
            }}
          >
            <Search />
            <LeftAccordion />
          </div>
          <div
            style={{
              overflowY: "auto",
              flexShrink: 0,
              height: "730px",
            }}
          >
            <Tabs active={active} setActive={setActive} />
            {/*  */}
            <div style={{ width: "650px" }}>
              {active === 0 ? (
                <>
                  <CenterComponent setEnglandActive={setEnglandActive} />
                  <CenterAccordion setEnglandActive={setEnglandActive} />
                </>
              ) : active === 1 ? (
                <>
                  <CenterComponent setEnglandActive={setEnglandActive} />
                  <CenterAccordion setEnglandActive={setEnglandActive} />
                </>
              ) : (
                <>
                  <CenterComponent setEnglandActive={setEnglandActive} />
                  <CenterAccordion setEnglandActive={setEnglandActive} />
                </>
              )}
            </div>
            {/* <CenterComponent />
            <CenterAccordion /> */}
          </div>
          <div
            style={{
              overflowY: "auto",
              flexShrink: 0,
              height: "730px",
              marginLeft: englandActive ? "-5px" : "-4px",
              marginRight: englandActive ? "5px" : "",
            }}
          >
            {englandActive ? (
              <EnglandComponent2
                englandActive={englandActive}
                setEnglandActive={setEnglandActive}
              />
            ) : (
              <>
                <EnglandComponent
                  englandActive={englandActive}
                  setEnglandActive={setEnglandActive}
                />
                {liveGameData.length > 0 && <EntireAccordion />}
              </>
            )}
          </div>
          <div
            style={{
              overflowY: "auto",
              flexShrink: 0,
              height: "730px",
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
