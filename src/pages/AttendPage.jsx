import Footer from "components/mainPage/Footer";
import Navbar from "../components/mainPage/NavBar";
import QuickMenu from "components/QuickMenu";
import React from "react";
import MyPageBanner from "../images/attendance/attendance_banner.png";
import AttendanceCalendar from "components/attendance/AttendanceCalendar";

const AttendPage = ({ isAuthenticated, setAuthenticated }) => {
  return (
    <div
      className="relative flex flex-col justify-center items-center limit1920:overflow-x-hidden "
      style={{
        background: "linear-gradient(to right, #b644c4, #351894)",
      }}
    >
      <div className="fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center">
        <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
      </div>

      <div style={{ marginTop: "205px" }} className="flex flex-col items-start limit:items-center w-full h-full">
        <div style={{ height: "136px" }} className="relative">
          <img className="z-10" src={MyPageBanner} alt="" />
          <div className="font-bold z-20 absolute top-0 text-24px w-full h-full flex     items-center justify-center">
            <span style={{ textShadow: "0 0 4px rgba(0, 0, 0, 0.6)" }} className="leading-none text-white -mt-2px">
              출석부
            </span>
          </div>
        </div>

        <div className="flex mt-19px w-default justify-center z-30">
          <AttendanceCalendar />
        </div>

        <div>
          <Footer />
        </div>
        <div className="z-50">
          <QuickMenu />
        </div>
      </div>
    </div>
  );
};

export default AttendPage;
