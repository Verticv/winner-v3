import Footer from "components/mainPage/Footer";
import Navbar from "components/mainPage/NavBar";
import OverlayBackground1 from "../images/overlay_background_1.png";
import OverlayBackground2 from "../images/overlay_background_2.png";
import NoticeBanner from "components/mainPage/NoticeBanner";
import React, { useState } from "react";
import MainTabs from "components/nonLivePage/MainTabs/MainTabs";
import LeftAccordion from "components/nonLivePage/LeftAccordion/LeftAccordion";
import Search from "components/nonLivePage/Search/Search";
import CenterComponent from "components/nonLivePage/CenterComponent/CenterComponent";
import CenterAccordion from "components/nonLivePage/CenterAccordion/CenterAccordion";

const NonLiveBet = ({ isAuthenticated, setAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        style={{
          background: "linear-gradient(to right, #b644c4, #351894)",
          minHeight: "3000px",
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

        {/* <div
          style={{ background: "linear-gradient(to right, #b644c4, #351894)" }}
          className="relative w-full flex flex-col items-start h-full mr-10px ml-10px mt-10px mx-auto"
        >
          <Search />
        </div> */}
        <div
          style={{ background: "linear-gradient(to right, #b644c4, #351894)" }}
          className="relative w-full flex items-start "
        >
          <div>
            <Search />
            <LeftAccordion />
          </div>
          <div>
            <CenterComponent />
            <CenterAccordion />
          </div>
        </div>

        {/* <div>
          <div className="border border-gray-300 rounded-lg mb-4">
            <div
              className="flex items-center justify-between px-4 py-2 cursor-pointer"
              onClick={toggleAccordion}
            >
              <h2 className="text-lg font-medium">title</h2>
              <svg
                className={`w-6 h-6 ${isOpen ? "transform rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {isOpen && (
              <div className="px-4 py-2">
                <p>content</p>
              </div>
            )}
          </div>
        </div> */}

        <Footer />
      </div>
    </>
  );
};

export default NonLiveBet;
