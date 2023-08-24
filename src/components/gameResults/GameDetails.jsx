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
    <div className="flex space-x-4px">
      <button
        style={{
          textShadow: bet === "left" ? "1px 1px 1px #00000070" : "",
       
          width: '285px',
          borderColor:bet === "left" ? '#5523a0':'#bbbbbb'
        }}
        className={`flex items-center justify-center h-36px rounded-4px shadow-btn border`}
      >
        <div
          style={{
            width:'283px',
            color: bet === "left" ? '#fff' : '#444444',
            background:  bet === "left"
              ? "linear-gradient(to top, #5423a0, #9d3bbb )"
              : "#fff",
          }}
          className={` 
                    flex items-center justify-between h-34px rounded-3px cursor-pointer pl-8px pr-9px pt-px`}
        >
          <span style={{width:'223px'}} className="truncate text-left font-spoqaMedium tracking-tight text-14px overflow-ellipsis">
            {team1}
          </span>
          <span className="font-roboto tracking-tight text-14px pt-2px">
            {stat1}
          </span>
        </div>
      </button>

      <button
        style={{
          textShadow: bet === "middle" ? "1px 1px 1px #00000070" : "",
          
          borderColor:bet === "middle" ? '#6852a7':'#bbbbbb'
        }}
        className={`flex group items-center justify-center w-81px h-36px shadow-btn rounded-4px border`}
      >
        <div
          style={{
            background:
              bet === "middle"
                ? "linear-gradient(to top, #5423a0, #9d3bbb )"
                : "",
            width: '79px',
            color:bet === "middle"?'#fff':'#444444'
          }}
          className={`
          pt-px flex items-center justify-center h-34px rounded-3px cursor-pointer `}
        >
          <span className="font-roboto tracking-tight text-14px pt-2px">
            {stat2}
          </span>
        </div>
      </button>

      <button
        style={{
          textShadow: bet === "right" ? "1px 1px 1px #00000070" : "",
          
          borderColor:bet === "right" ? '#5523a0':'#bbbbbb',
          width: '285px'
        }}
        className={` flex group items-center justify-center h-36px rounded-4px shadow-btn border`}
      >
        <div
          style={{
            width:'283px',
            color: bet === "right" ? '#fff' : '#444444',
            background:  bet === "right"
              ? "linear-gradient(to top, #5423a0, #9d3bbb )"
              : "#fff",
          }}
          className={`
          pt-px flex items-center justify-between h-34px rounded-3px cursor-pointer px-9px`}
        >
          <span className="font-roboto tracking-tight text-14px pt-2px">
            {stat3}
          </span>
          <span style={{width:'223px'}} className="truncate font-spoqaMedium tracking-tight text-14px text-right overflow-ellipsis">
            {team2}
          </span>
        </div>
      </button>
    </div>
  );

  const SingleCard = () => (
    <div
      style={{ borderColor:'#6852a7' }}
      className="w-full rounded-4px overflow-hidden shadow-plain11 border-2 border-gray-473b35"
    >
      <div
        className="flex items-center justify-between h-54px w-full px-18px"
        style={{
          background:
            '#6852a7',
        }}
      >
        <div className="flex items-center -mt-px justify-between w-full">
          <div className="flex items-center">
            <img src={FootballIcon} alt="" />
            <span
              className="ml-4px  text-20px tracking-tight text-white pt-2px truncate"
              style={{ maxWidth: "920px" }}
            >
              축구 / 미국 - 메이저리그사커
            </span>
          </div>
          <img className="ml-5px -mt-2px" src={USFlagIcon} alt="" /> 
        </div>
      </div>
      <div className="w-full h-54px  flex items-center tracking-tight pt-px">
        <div
          style={{ marginLeft: "25px", width: "114px" }}
          className="flex items-center justify-center font-roboto text-14px text-r666666 tracking-tight mt-3px"
        >
          2021-06-29 15:45
        </div>
        <div className="w-80px flex items-center justify-center font-spoqaMedium text-14px text-r666666 pt-px">
          축구
        </div>

        <div style={{ marginLeft: "0px" }}>
          <Options bet="middle" />
        </div>

        <div className="w-56px ml-17px font-roboto text-14px text-r666666 text-center">
          4 : 4
        </div>
        <div className="w-63px font-spoqaMedium text-14px text-green-45bc61 text-center">
          무
        </div>
      </div>
    </div>
  );

  const DoubleCard = () => (
    <div
      className="w-full h-168px rounded-4px overflow-hidden shadow-plain11 border-2 border-gray-473b35"
      style={{ borderColor:'#6852a7' }}
    >
      <div className="flex items-center justify-between h-54px w-full px-18px"
      style={{
          background:
            '#6852a7',
        }}>
        <div className="flex items-center justify-between -mt-2px w-full">
          <div className="flex items-center">
            <img src={BasketballIcon} alt="" />
            <span
              className="ml-5px font-spoqaMedium text-20px tracking-tight text-white pt-2px truncate"
              style={{ maxWidth: "920px" }}
            >
              농구 / 미국 - NBA
              </span>
          </div>
           <img className="ml-5px" src={USFlagIcon} alt="" />
        </div>
      </div>

      <div className="w-full h-54px bg-gray-323231 border-b border-gray-252525 flex items-center tracking-tight pt-px">
        <div
          style={{ marginLeft: "25px", width: "114px" }}
          className="flex items-center justify-center font-roboto text-14px text-r666666 tracking-tight mt-3px"
        >
          2021-06-29 15:45
        </div>
        <div className="w-80px flex items-center justify-center font-spoqaMedium text-14px text-r666666 pt-px">
          축구
        </div>
        <div style={{ marginLeft: "0px" }}>
          <Options
            bet="left"
            team1="LA레이커스"
            team2="피닉스"
            stat1="2.95"
            stat2="VS"
            stat3="1.39"
          />
        </div>

        <div className="w-56px ml-17px font-roboto text-14px text-r666666 text-center truncate">
          222 : 222
        </div>
        <div
          style={{ color: "#e65454" }}
          className="w-63px text-center font-spoqaMedium text-14px"
        >
          승
        </div>
      </div>

      <div className="w-full h-55px bg-gray-323231 flex items-center tracking-tight pt-px">
        <div
          style={{ marginLeft: "25px", width: "114px" }}
          className="flex items-center justify-center font-roboto text-14px text-r666666 tracking-tight mt-3px"
        >
          2021-06-29 15:45
        </div>
        <div className="w-80px flex items-center justify-center font-spoqaMedium text-14px text-r666666 pt-px">
          축구
        </div>

        <div style={{ marginLeft: "0px" }}>
          <Options
            bet="right"
            team1="세크라멘토"
            team2="오클라호마"
            stat1="2.95"
            stat2="VS"
            stat3="2.25"
          />
        </div>

        <div className="w-56px ml-17px font-roboto text-14px text-r666666 text-center truncate">
          222 : 222
        </div>
        <div className="w-63px text-center font-spoqaMedium text-14px text-r666666">
          패
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
        <div className="h-54px w-full px-11px font-spoqaMedium text-14px tracking-tight text-eeeeee flex items-center"
        style={{background:'linear-gradient(to right, #9d3bbb, #5423a0)'}}>
          <div
            style={{ marginLeft: "25px", width: "114px" }}
            className="h-14px flex justify-center items-center"
          >
            경기일시
          </div>
          <div
            style={{ marginLeft: "0" }}
            className="w-80px h-14px flex justify-center items-center"
          >
            종목
          </div>
          <div
            style={{ marginLeft: "0px", width: '285px' }}
            className="h-14px flex justify-center items-center"
          >
            승(홈)
          </div>
          <div
            style={{ marginLeft: "4px" }}
            className="w-81px h-14px flex justify-center items-center"
          >
            무
          </div>
          <div
            style={{ marginLeft: "4px", marginRight: "17px", width: '285px' }}
            className="h-14px flex justify-center items-center"
          >
            패(원정)
          </div>
          <div
            style={{ marginLeft: "0" }}
            className="w-56px h-14px flex justify-center items-center"
          >
            스코어
          </div>
          <div
            style={{ marginLeft: "0" }}
            className="w-63px h-14px flex justify-center items-center"
          >
            결과
          </div>
        </div>

        <div className="px-9px pb-10px space-y-9px pt-10px">
          <SingleCard />
          <DoubleCard />
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
