import React from "react";
import FootballIcon from "../../images/myPage/betHistory/football.png";
import BasketballIcon from "../../images/myPage/betHistory/basketball.png";
import USFlagIcon from "../../images/myPage/betHistory/us_flag.png";

const GameDetails = () => {
  const Options = ({
    bet,
    team1 = "CF파추카",
    team2 = "과달하라 차바스",
    stat1 = "2.26",
    stat2 = "2.96",
    stat3 = "3.47",
  }) => (
    <div className="flex space-x-2px">
      <button
        style={{
          textShadow: bet === "left" ? "1px 1px 1px #00000070" : "",
          background: bet === "left" ? "linear-gradient(to top, #5423a0, #9d3bbb )" : "#fff",
          width: "287px",
          borderColor: bet === "left" ? "#5523a0" : "#bbbbbb",
          boxShadow: "0 1px 1px rgba(0,0,0,0.5)",
        }}
        className={`flex items-center justify-center h-38px rounded-5px border`}
      >
        <div
          style={{
            width: "286px",
            color: bet === "left" ? "#fff" : "#444444",
          }}
          className={`flex items-center justify-between h-36px rounded-3px cursor-pointer pl-11px pr-9px`}
        >
          <span
            style={{ width: "223px", letterSpacing: "-0.015em" }}
            className="truncate text-left font-spoqaMedium tracking-tight text-14px overflow-ellipsis"
          >
            {team1}
          </span>
          <span style={{ letterSpacing: "-0.015em" }} className="font-roboto tracking-tight text-14px ">
            {stat1}
          </span>
        </div>
      </button>

      <button
        style={{
          textShadow: bet === "middle" ? "1px 1px 1px #00000070" : "",
          background: bet === "middle" ? "linear-gradient(to top, #5423a0, #9d3bbb )" : "",
          borderColor: bet === "middle" ? "#5523a0" : "#bbbbbb",
          boxShadow: "0 1px 1px rgba(0,0,0,0.5)",
        }}
        className={`flex group items-center justify-center w-83px h-38px rounded-5px border`}
      >
        <div
          style={{
            width: "81px",
            color: bet === "middle" ? "#fff" : "#444444",
            letterSpacing: "-0.015em",
          }}
          className={`flex items-center justify-center h-36px rounded-3px cursor-pointer `}
        >
          <span className="font-roboto tracking-tight text-14px ">{stat2}</span>
        </div>
      </button>

      <button
        style={{
          textShadow: bet === "right" ? "1px 1px 1px #00000070" : "",
          background: bet === "right" ? "linear-gradient(to top, #5423a0, #9d3bbb )" : "#fff",
          borderColor: bet === "right" ? "#5523a0" : "#bbbbbb",
          width: "286px",
          boxShadow: "0 1px 1px rgba(0,0,0,0.5)",
        }}
        className={` flex group items-center justify-center h-38px rounded-5px border`}
      >
        <div
          style={{
            width: "284px",
            color: bet === "right" ? "#fff" : "#444444",
            letterSpacing: "-0.015em",
          }}
          className={`flex items-center justify-between h-36px rounded-3px cursor-pointer pr-9px pl-11px`}
        >
          <span className="font-roboto tracking-tight text-14px">{stat3}</span>
          <span
            style={{ width: "223px", letterSpacing: "-0.015em" }}
            className="truncate font-spoqaMedium tracking-tight text-14px text-right overflow-ellipsis"
          >
            {team2}
          </span>
        </div>
      </button>
    </div>
  );

  const SingleCard = () => (
    <div
      style={{ borderColor: "#6852a7", boxShadow: "0 2px 2px rgba(0, 0, 0, 0.4)" }}
      className="w-full rounded-4px overflow-hidden border-2"
    >
      <div
        className="flex items-center justify-between h-54px w-full px-18px"
        style={{
          background: "#6852a7",
        }}
      >
        <div className="flex items-center -mt-px justify-between w-full">
          <div className="flex items-center">
            <img className="-mt-2px" src={FootballIcon} alt="" />
            <span
              className="ml-6px  text-16px font-medium tracking-tight text-white  truncate -mt-px"
              style={{ maxWidth: "920px", letterSpacing: "-0.015em" }}
            >
              축구 / 미국 - 메이저리그사커
            </span>
          </div>
          <img className="ml-px -mt-2px" src={USFlagIcon} alt="" />
        </div>
      </div>
      <div
        style={{ backgroundColor: "#f7f7f7", letterSpacing: "-0.015em" }}
        className="w-full h-54px  flex items-center tracking-tight pt-px"
      >
        <div
          style={{ marginLeft: "25px", width: "114px", letterSpacing: "-0.015em" }}
          className="flex items-center justify-center font-roboto text-14px text-r444444 tracking-tight"
        >
          <p className="-ml-6px">2021-06-29 15:45</p>
        </div>
        <div
          style={{ letterSpacing: "-0.015em" }}
          className="w-80px flex items-center justify-center text-14px text-r444444"
        >
          축구
        </div>

        <div style={{ marginLeft: "0px" }}>
          <Options bet="middle" />
        </div>

        <div
          style={{ letterSpacing: "-0.015em" }}
          className="w-56px ml-17px font-roboto text-14px text-r444444 text-center"
        >
          4 : 4
        </div>
        <div className="w-63px text-14px text-center font-semibold" style={{ color: "#00a651" }}>
          <p className="-ml-3px">무</p>
        </div>
      </div>
    </div>
  );

  const DoubleCard = () => (
    <div
      className="w-full rounded-4px overflow-hidden border-2 "
      style={{ borderColor: "#6852a7", boxShadow: "0 2px 2px rgba(0, 0, 0, 0.4)" }}
    >
      <div
        className="flex items-center justify-between h-54px w-full px-18px"
        style={{
          background: "#6852a7",
        }}
      >
        <div className="flex items-center justify-between -mt-px w-full">
          <div className="flex items-center">
            <img className="-mt-2px" src={BasketballIcon} alt="" />
            <span
              className="ml-6px font-spoqaMedium text-16px font-medium tracking-tight text-white -mt-px truncate"
              style={{ maxWidth: "920px", letterSpacing: "-0.015em" }}
            >
              농구 / 미국 - NBA
            </span>
          </div>
          <img className="ml-px -mt-2px" src={USFlagIcon} alt="" />
        </div>
      </div>

      <div className="w-full h-56px border-b border-gray-dddddd flex items-center tracking-tight">
        <div
          style={{ marginLeft: "25px", width: "114px" }}
          className="flex items-center pt-px justify-center font-roboto text-14px text-r444444 tracking-tight mt-3px"
        >
          <p className="-ml-4px">2021-06-29 15:45</p>
        </div>
        <div className="w-80px flex items-center justify-center text-14px text-r444444">축구</div>
        <div style={{ marginLeft: "0px" }}>
          <Options bet="left" team1="LA레이커스" team2="피닉스" stat1="2.95" stat2="VS" stat3="1.39" />
        </div>

        <div className="w-56px ml-17px font-roboto text-14px text-r444444 text-center truncate">222 : 222</div>
        <div style={{ color: "#f04281" }} className="w-63px text-center font-spoqaMedium text-14px">
          <p className="-ml-3px font-semibold">승</p>
        </div>
      </div>

      <div className="w-full h-54px flex items-center tracking-tight pt-px">
        <div
          style={{ marginLeft: "25px", width: "114px" }}
          className="flex items-center justify-center font-roboto text-14px text-r444444 tracking-tight mt-3px"
        >
          <p className="-ml-4px">2021-06-29 15:45</p>
        </div>
        <div className="w-80px flex items-center justify-center font-spoqaMedium text-14px text-r444444">축구</div>

        <div style={{ marginLeft: "0px" }}>
          <Options bet="right" team1="세크라멘토" team2="오클라호마" stat1="2.95" stat2="VS" stat3="2.25" />
        </div>

        <div className="w-56px ml-17px font-roboto text-14px text-r444444 text-center truncate">222 : 222</div>
        <div className="w-63px text-center text-14px text-r444444">
          <p className="-ml-3px font-semibold">패</p>
        </div>
      </div>
    </div>
  );

  return (
    <div
      style={{ background: "linear-gradient(to top, #ededeb, #cb78e6)" }}
      className="rounded-10px shadow-table overflow-hidden p-px"
    >
      <div className="w-full rounded-10px overflow-hidden bg-white">
        <div
          className="h-54px w-full px-11px font-spoqaMedium text-14px tracking-tight text-eeeeee flex items-center font-semibold"
          style={{ background: "linear-gradient(to right, #9d3bbb, #5423a0)", letterSpacing: "-0.015em" }}
        >
          <div style={{ marginLeft: "25px", width: "114px" }} className="h-14px flex justify-center items-center">
            <p className="-ml-8px">경기일시</p>
          </div>
          <div style={{ marginLeft: "0" }} className="w-80px h-14px flex justify-center items-center">
            종목
          </div>
          <div style={{ marginLeft: "0px", width: "285px" }} className="h-14px flex justify-center items-center">
            승(홈)
          </div>
          <div style={{ marginLeft: "4px" }} className="w-81px h-14px flex justify-center items-center">
            무
          </div>
          <div
            style={{ marginLeft: "4px", marginRight: "17px", width: "285px" }}
            className="h-14px flex justify-center items-center"
          >
            패(원정)
          </div>
          <div style={{ marginLeft: "0" }} className="w-56px h-14px flex justify-center items-center">
            스코어
          </div>
          <div style={{ marginLeft: "0" }} className="w-63px h-14px flex justify-center items-center">
            결과
          </div>
        </div>

        <div className="px-9px pb-9px space-y-10px pt-8px">
          <SingleCard />
          <DoubleCard />
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
