import Navbar from "../components/mainPage/NavBar";
import NoticeBanner from "components/mainPage/NoticeBanner";
import QuickMenu from "components/QuickMenu";
import React, { useEffect, useState } from "react";
import Carousel from "../components/mainPage/Carousel";
import Footer from "../components/mainPage/Footer";
import OverlayBackground1 from "../images/overlay_background_1.png";
import OverlayBackground2 from "../images/overlay_background_2.png";
import Cube from "../images/slotCarousel/cube.png";
import SlotGameVerticalCarousel from "components/mainPage/SlotGameVerticalCarousel";
import Jackpot from "components/mainPage/Jackpot";
import MiddleList from "components/mainPage/MiddleList";
import SlotGameHorizontalCarousel from "components/mainPage/SlotGameHorizontalCarousel";
import SportHorizontalCarousel from "components/mainPage/SportHorizontalCarousel";
import LiveHorizontalCarousel from "components/mainPage/LiveHorizontalCarousel";
import LiveRight from "components/mainPage/LiveRight";
import AnimatedCarousel from "components/mainPage/AnimatedCarousel";
import TopButton from "components/TopButton";

const MainPage = ({ isAuthenticated, setAuthenticated }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  console.log("scrollPosition :>> ", scrollPosition);
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

  return (
    <>
      <div
        style={{
          background: "linear-gradient(to right, #b644c4, #351894)",
          minHeight: "3000px",
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
        style={{ top: "125px" }}
        className="w-full absolute flex flex-col justify-center items-start limit:items-center limit1920:overflow-x-hidden"
      >
        <div className="fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center">
          <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
        </div>

        <div className="relative w-full flex flex-col items-start limit:items-center limit1920:items-center">
          <NoticeBanner />
        </div>

        <div style={{ width: "1260px" }} className="flex items-center justify-start mt-4px">
          <Carousel />
          <div style={{ height: "326px" }} className="flex flex-col ml-5px justify-end">
            <Jackpot />
            <SlotGameVerticalCarousel />
          </div>
        </div>

        <div style={{ width: "1260px" }} className="flex items-center justify-start mt-30px">
          <MiddleList />
        </div>

        <div
          style={{
            maxWidth: "1260px",
            marginTop: "30px",
            marginBottom: "22px",
          }}
        >
          <SlotGameHorizontalCarousel />
        </div>

        <div
          style={{
            maxWidth: "1260px",
            marginBottom: "30px",
          }}
        >
          <SportHorizontalCarousel />
        </div>

        <div
          style={{
            maxWidth: "1260px",
            marginBottom: "24px",
          }}
        >
          <div className="flex space-x-10px">
            <LiveHorizontalCarousel />
            <LiveRight />
          </div>
        </div>

        <div
          style={{
            maxWidth: "1260px",
            marginBottom: "27px",
          }}
        >
          <div className="flex flex-col">
            <div className="flex items-center">
              <img src={Cube} alt="" className="-ml-4px mr-px" />
              <p
                style={{ textShadow: "0px 2px 5px rgba(0, 0, 0, 0.75)" }}
                className="text-white text-22px font-spoqaBold tracking-tight mb-2px"
              >
                기타게임
              </p>
            </div>
            <AnimatedCarousel />
          </div>
        </div>

        <Footer />

        <div>
          <QuickMenu />
        </div>

        <div style={{ top: "827px", right: "11px" }} className={`fixed z-20 flex justify-end`}>
          <TopButton scrollPosition={scrollPosition} />
        </div>
      </div>
    </>
  );
};

export default MainPage;
