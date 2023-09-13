import Footer from "components/mainPage/Footer";
import QuickMenu from "components/QuickMenu";
import FreeBoardCompose from "components/freeBoard/FreeBoardCompose";
import FreeBoardMain from "components/freeBoard/FreeBoardMain";
import FreeBoardView from "components/freeBoard/FreeBoardView";
import DirectoryComponent from "components/myPage/DirectoryComponent";
import Navbar from "../components/mainPage/NavBar";
import React, { useEffect, useState } from "react";
import { Route } from "react-router";
import FreeBoardBanner from "../images/freeBoard/free_board_banner_v3.png";
import FreeBoardView2 from "components/freeBoard/FreeBoardView2";
import { useLocation } from "react-router-dom";

const Freeboard = ({ isAuthenticated, setAuthenticated }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();
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
          top: scrollPosition > 200 ? "235px" : "430px",
        }}
        className={`right-208px fixed z-50 flex justify-end`}
      >
        <QuickMenu scrollPosition={scrollPosition} />
      </div>
      <div style={{ marginTop: "154px" }} className="flex flex-col items-start limit:items-center w-full h-full">
        <Route exact path="/freeboard/main*">
          <DirectoryComponent branch1="게시판" mainPath="/freeboard/main" />
        </Route>
        <Route path="/freeboard/view*">
          <DirectoryComponent branch1="게시판" branch2="뷰" mainPath={location.pathname} />
        </Route>
        <Route path="/freeboard/compose*">
          <DirectoryComponent branch1="게시판" branch2="작성하기" mainPath="/freeboard/compose" />
        </Route>

        <div style={{ height: "136px", width: "1280px" }} className="relative flex-shrink-0">
          <img
            style={{ height: "150px", width: "1300px" }}
            className="z-10 object-none flex-shrink-0"
            src={FreeBoardBanner}
            alt=""
          />
          <div className="font-bold z-20 absolute top-0 text-24px w-full h-full flex items-center justify-center">
            <span style={{ textShadow: "0 0 4px rgba(0, 0, 0, 0.6)" }} className="leading-none text-white -mt-6px">
              게시판
            </span>
          </div>
        </div>
        <div className="mt-13px w-default z-30">
          <Route exact path="/freeboard/main*">
            <FreeBoardMain />
          </Route>
          <Route path="/freeboard/view/*">
            <FreeBoardView />
          </Route>
          <Route path="/freeboard/view2*">
            <FreeBoardView2 />
          </Route>
          <Route path="/freeboard/compose*">
            <FreeBoardCompose />
          </Route>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Freeboard;
