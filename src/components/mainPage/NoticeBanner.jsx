import React from "react";
import SpeakerIcon from "../../images/speaker.png";
import Bg from "../../images/notice_bg.png";
import "./NoticeBanner.css";

const NoticeBanner = () => {
  const pathname = window.location.pathname;
  return (
    <div
      style={{
        width: "1452px",
        borderRadius: "0% 0% 10% 10% / 0% 0% 100% 100%",
        height: "28px",
      }}
      className="flex items-center h-28px w-full overflow-x-hidden flex-shrink-0 wrap cursor-default mt-px"
    >
      <img
        style={{
          width: pathname === "/bet-combination" ? "1482px" : "1476px",
          height: pathname !== "/bet-combination" && "61px",
          objectFit: "none",
        }}
        src={Bg}
        alt=""
        className={`absolute object-none -ml-12px  ${pathname === "/bet-combination" && "h-30px"}`}
      />
      <div style={{ paddingLeft: "96px" }} className="z-20 pr-15px flex -mt-4px flex-shrink-0">
        <img className="object-none " src={SpeakerIcon} alt="speakerIcon" />
      </div>
      <div className="flex items-center h-28px w-full overflow-x-hidden cursor-default">
        <span style={{ color: "#eeeeee" }} className="banner font-spoqa text-14px z-10 cursor-default -mt-2px">
          입금하시기전 계좌문의 후 입금해 주시기 바랍니다.
        </span>
      </div>
    </div>
  );
};

export default NoticeBanner;
