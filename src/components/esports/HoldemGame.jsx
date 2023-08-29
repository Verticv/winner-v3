import React from "react";
import img from "../../images/esports/img.png";

const HoldemGame = () => {
  return (
    // <div style={{borderRadius:"1em"}} className="w-full bg-gray-fafafa border border-gray-dddddd p-30px space-y-30px">
    <>
      <div
        className="w-full rounded-6px p-px h-57px mb-21px -mt-19px"
        style={{
          background: "linear-gradient(to top, #4f3a7a, #cb78e6)",
          boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.6)",
        }}
      >
        <div
          style={{ background: "linear-gradient(to top, #491f9c, #9e3cbc)" }}
          className="w-full bg-gray-323232 rounded-6px h-55px flex flex-col justify-start pt-14px items-center cursor-pointer"
        >
          <span
            style={{ color: "#ffffff" }}
            className="text-20px font-spoqaBold tracking-tight"
          >
            홀덤게임 이용가이드
          </span>
        </div>
      </div>
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
    </>
  );
};

export default HoldemGame;
