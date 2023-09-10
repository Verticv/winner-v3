import Footer from "components/mainPage/Footer";
import DirectoryComponent from "components/myPage/DirectoryComponent";
import Navbar from "../components/mainPage/NavBar";
import QuickMenu from "components/QuickMenu";
import React, { useState, useEffect } from "react";
import { Route } from "react-router";
import HorizontalMenu9 from "components/horizontalMenus/HorizontalMenu9";
import img from "../images/kiron/1.png";


const KironPage = ({ isAuthenticated, setAuthenticated }) => {
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
  const MenuArray = [{ text: "키론가상게임 이용가이드", id: 0, path: "/kiron/guide" }];
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
        <Route path="/kiron/guide">
          <DirectoryComponent
            branch1="e-스포츠"
            branch2="화면구성설명"
            mainPath="/esports/structure"
            setSelectedTab={setSelectedTab}
          />
        </Route>

        <div className="w-default mt-4px mb-px z-30">
          <Route path="/kiron/guide">
            <HorizontalMenu9 itemsArray={MenuArray} setSelectedTab={setSelectedTab} />
          </Route>
        </div>

        <div className="mt-20px mb-65px w-default z-30">
          <Route path="/kiron/guide">
            <div
              className="w-full overflow-hidden rounded-10px p-px"
              style={{
                background: "linear-gradient(to top, #4f3a7a, #f0d3ff)",
                boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div
                style={{
                  backgroundColor: "#dfdbfa",
                  paddingRight: "110px",
                  paddingLeft: "110px",
                  paddingTop: "60px",
                  paddingBottom: "60px",
                }}
                className="w-full bg-gray-323232 rounded-10px overflow-hidden space-y-30px justify-center items-center"
              >
                <img className="object-none" src={img} alt="img" />
              </div>
            </div>
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

export default KironPage;
