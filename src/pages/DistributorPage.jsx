import Footer from "components/mainPage/Footer";
import Pagination from "components/myPage/Pagination";
import Navbar from "../components/mainPage/NavBar";

import React, { useState } from "react";
import DistributorBanner from "../images/myPage/distributor/distributor_banner.png";
import SummaryIcon from "../images/myPage/distributor/summary_icon.png";
import PieIcon from "../images/myPage/distributor/pie.png";
import DetailIcon from "../images/myPage/distributor/detail.png";
import MemberIcon from "../images/myPage/distributor/member.png";
import RecommendIcon from "../images/myPage/distributor/recommend.png";
import SummaryIcon1 from "../images/myPage/distributor/summary/img1.png";
import SummaryIcon2 from "../images/myPage/distributor/summary/img2.png";
import SummaryIcon3 from "../images/myPage/distributor/summary/img3.png";
import SummaryIcon4 from "../images/myPage/distributor/summary/img4.png";
import SummaryIcon5 from "../images/myPage/distributor/summary/img5.png";
import SummaryIcon6 from "../images/myPage/distributor/summary/img6.png";
import SummaryIcon7 from "../images/myPage/distributor/summary/img7.png";
import SummaryIcon8 from "../images/myPage/distributor/summary/img8.png";
import DateSearchBar from "components/myPage/DateSearchBar";
import Diamond from "../images/myPage/diamond.png";
import SmallDiamond from "../images/myPage/small_diamond.png";
import GrayArrow from "../images/arrows/white_arrow.png";
import WhiteArrow from "../images/arrows/white_arrow.png";
import ReplyArrow from "../images/arrows/reply_arrow.png";
import Triangle from "../images/triangle.png";
import DefaultUser from "../images/myPage/distributor/default.png";

const DistributorPage = ({ isAuthenticated, setAuthenticated }) => {
  const username = "Louie3Louie3Louie3Louie3";
  const RecommendedUserArray = [
    {
      id: 0,
      number: 1,
      username: "louie32",
      name: "김선도",
      nickname: "위너테스트2",
      user_count: 3,
      recommended_date: "2021-07-21",
      login_date: "2021-06-03",
      absent_date: "-47일",
      added_amount: 0,
      bonus: 0,
      withdraw_amount: 0,
      added_withdraw_amount: 0,
      bet_amount: 0,
      win_lose: 0,
      point: 0,
      holding_amount: 0,
      hasSubArray: true,
    },
    {
      id: 3,
      number: 2,
      username: "louie32",
      name: "김선도",
      nickname: "위너테스트2",
      user_count: 0,
      recommended_date: "2021-07-21",
      login_date: "2021-06-03",
      absent_date: "-47일",
      added_amount: 0,
      bonus: 0,
      withdraw_amount: 0,
      added_withdraw_amount: 0,
      bet_amount: 0,
      win_lose: 0,
      point: 0,
      holding_amount: 0,
    },
    {
      id: 6,
      number: 3,
      username: "louie32",
      name: "김선도",
      nickname: "위너테스트2",
      user_count: 0,
      recommended_date: "2021-07-21",
      login_date: "2021-06-03",
      absent_date: "-47일",
      added_amount: 0,
      bonus: 0,
      withdraw_amount: 0,
      added_withdraw_amount: 0,
      bet_amount: 0,
      win_lose: 0,
      point: 0,
      holding_amount: 0,
    },
    {
      id: 9,
      number: 4,
      username: "louie32",
      name: "김선도",
      nickname: "위너테스트2",
      user_count: 0,
      recommended_date: "2021-07-21",
      login_date: "2021-06-03",
      absent_date: "-47일",
      added_amount: 0,
      bonus: 0,
      withdraw_amount: 0,
      added_withdraw_amount: 0,
      bet_amount: 0,
      win_lose: 0,
      point: 0,
      holding_amount: 0,
      isLast: true,
    },
  ];

  const RecommendedUserArray2 = [
    {
      id: 12,
      number: 1,
      username: "louie33",
      nickname: "위너테스트3",
      user_count: 0,
      recommended_date: "2021-07-21",
      login_date: "2021-06-03",
      absent_date: "-47일",
      added_amount: 0,
      bonus: 0,
      withdraw_amount: 0,
      added_withdraw_amount: 0,
      bet_amount: 0,
      win_lose: 0,
      point: 0,
      holding_amount: 0,
      hasSubArray: false,
    },
  ];

  const [page, setPage] = useState(0);
  const [isArrowUp, setArrowUp] = useState(new Array(8).fill(false));
  const [viewOnline, setViewOnline] = useState(false);

  const handleOnChange = (position) => {
    const updatedCheckedState = isArrowUp.map((item, index) => (index === position ? !item : item));
    setArrowUp(updatedCheckedState);
  };

  const SummaryCard = ({ text, img, count }) => (
    <div
      style={{
        background: "linear-gradient(to top, #4f3a7a, #a05bf6 50%, #f0d3ff 100%)",
        width: "227px",
        height: "165px",
      }}
      className="rounded-10px flex flex-col items-center justify-center overflow-hidden shadow-link p-px"
    >
      <div
        style={{ height: "163px", background: "linear-gradient(to top, #ccc4ff, #ffd9f5)" }}
        className="w-full flex flex-col items-center justify-start rounded-10px"
      >
        <img className="mt-19px object-none" src={img} alt="" />
        <span className="mt-10px tracking-tight text-15px font-bold" style={{ color: "#2d2834" }}>
          {text}
        </span>
        <span className="mt-px font-bold tracking-tight text-20px" style={{ color: "#c03a41" }}>
          {count}
        </span>
      </div>
    </div>
  );

  const games = [
    { title1: "스포츠", title2: "" },
    { title1: "미니게임", title2: "" },
    { title1: "프레그메틱", title2: "플레이" },
    { title1: "에볼루션", title2: "" },
    { title1: "로얄지", title2: "" },
    { title1: "아시아", title2: "게이밍" },
    { title1: "드림", title2: "게이밍" },
    { title1: "섹시", title2: "게이밍" },
    { title1: "빅게이밍", title2: "" },
    { title1: "오리엔탈", title2: "게임" },
    { title1: "마이크로", title2: "게이밍" },
    { title1: "베가스", title2: "라운지" },
    { title1: "비터", title2: "라이브" },
    { title1: "타이산", title2: "" },
    { title1: "모티", title2: "베이션" },
    { title1: "프레그메틱", title2: "플레이" },
    { title1: "씨큐나인", title2: "" },
    { title1: "월드매치", title2: "" },
    { title1: "하바네로", title2: "" },
    { title1: "플레이", title2: "앤고" },
    { title1: "스페이드", title2: "" },
    { title1: "분고", title2: "" },
    { title1: "레드", title2: "타이거" },
    { title1: "엘리시움", title2: "" },
    { title1: "빅타임", title2: "게이밍" },
    { title1: "YL게이밍", title2: "" },
    { title1: "넷엔트", title2: "" },
    { title1: "드라군", title2: "소프트" },
    { title1: "YGG", title2: "드라실" },
    { title1: "플레이슨", title2: "" },
    { title1: "플레이텍", title2: "" },
    { title1: "스카이", title2: "윈드" },
    { title1: "와즈단", title2: "" },
    { title1: "PG소프트", title2: "" },
    { title1: "로얄슬롯", title2: "게이밍" },
    { title1: "노리미트", title2: "시티" },
    { title1: "CC88", title2: "" },
    { title1: "패스트", title2: "스핀" },
    { title1: "나가", title2: "게임즈" },
    { title1: "두윈", title2: "카지노" },
    { title1: "보타", title2: "카지노" },
    { title1: "홀덤게임", title2: "" },
    { title1: "e-스포츠", title2: "" },
    { title1: "키론", title2: "가상게임" },
    { title1: "피싱게임", title2: "" },
    { title1: "티비벳", title2: "" },
  ];

  const PercentageCell = ({ innerTable = false }) => (
    <>
      <div className="w-full flex">
        <div className="w-40px mt-10px flex justify-center items-start"></div>
        <div className="w-full flex flex-col overflow-x-auto overflow-y-hidden scroll-div6">
          <div
            style={{
              width: "fit-content",
              paddingRight: innerTable ? "30px" : 0,
              color: "#eeeeee",
              background: innerTable ? "#513d71" : "#5d4386",
              borderColor: "#dddddd",
            }}
            className="flex h-56px border-b items-center text-13px tracking-tight flex-shrink-0"
          >
            <div style={{ backgroundColor: "#3f2a5f" }} className="w-85px h-full flex items-center justify-center">
              <div className="h-full flex items-center justify-center" style={{ width: "85px" }}>
                구분
              </div>
            </div>
            {games.map((item) => {
              if (!item.title2)
                return <div className="w-81px h-full flex items-center justify-center text-eeeeee">{item.title1}</div>;
              else
                return (
                  <div className="w-81px h-full flex flex-col items-center justify-center -space-y-4px text-eeeeee">
                    <span>{item.title1}</span>
                    <span>{item.title2}</span>
                  </div>
                );
            })}
            <div className="w-100px h-full flex items-center justify-center pr-3px">관리</div>
          </div>
          <div
            style={{
              width: "fit-content",
              paddingRight: innerTable ? "30px" : 0,
              color: "#585858",
              background: "#f3f3f3",
            }}
            className="flex h-54px items-center text-13px tracking-tight font-roboto flex-shrink-0 bg-white"
          >
            <div
              style={{ backgroundColor: innerTable ? "#e8e8e8" : "#f8f8f8" }}
              className="w-85px h-full flex items-center justify-center"
            >
              <div className="h-full flex items-center justify-center" style={{ width: "85px" }}>
                변경
              </div>
            </div>
            {games.map((item) => {
              return <div className="w-81px h-full flex items-center justify-center text-r444444 text-13px">0.00%</div>;
            })}
            <div className="w-100px h-full flex items-center justify-center">
              <button
                style={{
                  width: "65px",
                  background: "linear-gradient(to top,  #4f3a7a, #e597ff)",
                }}
                className={` flex items-center justify-center h-36px rounded-4px filter hover:brightness-125 shadow-link`}
              >
                <div
                  style={{
                    width: "63px",
                    background: "linear-gradient(to bottom, #df52ff, #6b22ff)",
                  }}
                  className={` flex items-center justify-center h-34px w-85px rounded-4px  cursor-pointer space-x-10px`}
                >
                  <span className=" tracking-tight text-13px text-white text-shadow-5">수정</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const DetailCell = ({ innerTable = false, innerTable2 }) => (
    <>
      <div className="w-full flex">
        <div className="w-39px mt-10px flex justify-center items-start"></div>
        <div className="w-full flex flex-col overflow-x-auto scroll-div6">
          <div className="flex h-55px items-center bg-eeeeee w-full" style={{ width: `${games.length * 85 + 178}px` }}>
            <div
              style={{ width: "235px", background: "rgb(56,35,114)" }}
              className="-mt-px ml-8px pr-3px h-38px rounded-full  flex items-center justify-center text-14px tracking-tight"
            >
              <img className="mr-10px mt-px" src={SmallDiamond} alt="" />
              <div style={{ fontSize: "15px" }} className="flex items-center space-x-4px">
                <span className="text-white">입금 :</span>
                <span style={{ color: "#ffcc00" }}>000,000,000</span>
              </div>
            </div>
            <div
              style={{ width: "235px", background: "rgb(56,35,114)" }}
              className="-mt-px ml-5px pr-3px h-38px rounded-full  flex items-center justify-center text-14px tracking-tight"
            >
              <img className="mr-10px mt-px" src={SmallDiamond} alt="" />
              <div style={{ fontSize: "15px" }} className="flex items-center space-x-4px">
                <span className="text-white">보너스 :</span>
                <span style={{ color: "#ffcc00" }}>0</span>
              </div>
            </div>
            <div
              style={{ width: "235px", background: "rgb(56,35,114)" }}
              className="-mt-px ml-5px pr-20px h-38px rounded-full  flex items-center justify-center text-14px tracking-tight"
            >
              <img className="mr-10px mt-px" src={SmallDiamond} alt="" />
              <div style={{ fontSize: "15px" }} className="flex items-center space-x-4px">
                <span className="text-white">출금 :</span>
                <span style={{ color: "#ffcc00" }}>0</span>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "fit-content",
              paddingRight: innerTable2 ? "40px" : 0,
              background: innerTable2 ? "#513d71" : "#5d4386",
            }}
            className="flex h-55px border-b border-eeeeee items-center text-eeeeee  text-13px tracking-tight "
          >
            <div style={{ backgroundColor: "#3f2a5f" }} className="w-85px h-full flex items-center justify-center ">
              <div className="h-full flex items-center justify-center text-eeeeee" style={{ width: "85px" }}>
                구분
              </div>
            </div>
            {games.map((item, index) => {
              if (!item.title2)
                return (
                  <div
                    className={`w-85px h-full flex items-center justify-center text-eeeeee ${
                      index === games.length - 1 && "mr-8px"
                    }`}
                  >
                    {item.title1}
                  </div>
                );
              else
                return (
                  <div
                    className={`w-85px h-full flex flex-col items-center justify-center -space-y-4px text-eeeeee ${
                      index === games.length - 1 && "mr-8px"
                    }`}
                  >
                    <span>{item.title1}</span>
                    <span>{item.title2}</span>
                  </div>
                );
            })}

            <div
              style={{ backgroundColor: "#391d66" }}
              className="w-85px text-center h-full flex items-center justify-center"
            >
              합계
            </div>
          </div>
          <div
            style={{
              width: "fit-content",
              paddingRight: innerTable ? "0px" : 0,
              backgroundColor: innerTable2 ? "#f3f3f3" : "#f8f8f8",
            }}
            className="flex h-55px items-center text-13px tracking-tight font-roboto text-r444444 bg-white border-b border-dddddd"
          >
            <div
              style={{ backgroundColor: innerTable2 ? "#e8e8e8" : "#eeeeee" }}
              className="w-85px h-full flex items-center justify-center text-r444444 "
            >
              <div className="h-full flex items-center justify-center" style={{ width: "85px" }}>
                베팅금
              </div>
            </div>
            {games.map((item, index) => {
              return (
                <div
                  className={`w-85px h-full flex items-center justify-end ${index === games.length - 1 && "mr-8px"}`}
                >
                  {index === 0 ? "1.09M" : index === 1 ? "33K" : 0}
                </div>
              );
            })}
            <div
              style={{ backgroundColor: innerTable2 ? "#e8e8e8" : "#eeeeee" }}
              className="w-85px h-full flex items-center justify-end pr-8px"
            >
              7.14M
            </div>
          </div>
          <div
            style={{
              width: "fit-content",
              paddingRight: innerTable ? "0px" : 0,
              backgroundColor: innerTable2 ? "#f3f3f3" : "#f8f8f8",
            }}
            className="flex h-55px items-center text-13px tracking-tight font-roboto text-r444444 bg-white border-b border-dddddd"
          >
            <div
              style={{ backgroundColor: innerTable2 ? "#e8e8e8" : "#eeeeee" }}
              className="w-85px h-full flex items-center justify-center  text-r444444"
            >
              <div className="h-full flex items-center justify-center" style={{ width: "85px" }}>
                승패
              </div>
            </div>
            {games.map((item, index) => {
              return (
                <div
                  className={`w-85px h-full flex items-center justify-end ${index === games.length - 1 && "mr-8px"}`}
                >
                  0
                </div>
              );
            })}
            <div
              style={{ backgroundColor: innerTable2 ? "#e8e8e8" : "#eeeeee" }}
              className="w-85px h-full flex items-center justify-end pr-8px"
            >
              0
            </div>
          </div>
          <div
            style={{
              width: "fit-content",
              backgroundColor: innerTable2 ? "#f3f3f3" : "#f8f8f8",
            }}
            className="flex h-56px items-center text-13px tracking-tight font-roboto border-b border-dddddd bg-white text-r444444"
          >
            <div
              style={{ backgroundColor: innerTable2 ? "#e8e8e8" : "#eeeeee" }}
              className="w-85px h-full flex items-center justify-center  text-r444444"
            >
              <div className="h-full flex items-center justify-center" style={{ width: "85px" }}>
                정산금액
              </div>
            </div>
            {games.map((item, index) => {
              return (
                <div
                  className={`w-85px h-full flex items-center justify-end ${index === games.length - 1 && "mr-8px"}`}
                >
                  0
                </div>
              );
            })}
            <div
              style={{ backgroundColor: innerTable2 ? "#e8e8e8" : "#eeeeee" }}
              className="w-85px h-full flex items-center justify-end pr-8px"
            >
              0
            </div>
          </div>
        </div>
      </div>
    </>
  );

  function RecommendedUserCell({ items }) {
    const [isUserCountOpen, setUserCountOpen] = useState(new Array(20).fill(false));
    const [subArrowClicked, setSubArrowClicked] = useState(new Array(8).fill(false));
    const handleOnChange1 = (position) => {
      const updatedCheckedState = isUserCountOpen.map((item, index) => (index === position ? !item : item));
      setUserCountOpen(updatedCheckedState);
    };

    const handleOnChange2 = (position) => {
      const updatedCheckedState = subArrowClicked.map((item, index) => (index === position ? !item : item));
      setSubArrowClicked(updatedCheckedState);
    };

    return items.map((item) => (
      <>
        <div
          style={{
            height: "67px",
            background:
              isUserCountOpen[item.id] === true && item.hasSubArray === true
                ? "#f8f8f8"
                : item.id % 2 === 1
                ? "#f7f7f7"
                : "#ffffff",
          }}
          className={`w-full flex items-center justify-start font-roboto text-13px text-r444444 tracking-tight`}
        >
          <div className={`${item.name ? "w-90px pr-5px" : "w-138px"}  h-full flex items-center justify-center`}>
            {item.number}
          </div>
          <div className="h-full flex items-center justify-center" style={{ maxWidth: item.name ? "136px" : "120px" }}>
            <div style={{ width: item.name ? "136px" : "120px" }} className="text-center truncate">
              {item.username}
            </div>
          </div>
          {item.name && (
            <div style={{ width: "96px" }} className="h-full flex items-center justify-center font-spoqaMedium">
              <div style={{ width: "96px" }} className="text-center truncate">
                {item.name}
              </div>
            </div>
          )}
          <div
            className="w-144px h-full flex items-center justify-center font-spoqaMedium truncate"
            style={{
              maxWidth: item.name ? "130px" : "132px",
              paddingLeft: item.name ? "7px" : "0",
            }}
          >
            <div style={{ width: item.name ? "130px" : "132px" }} className="text-center truncate">
              {item.nickname}
            </div>
          </div>
          <div
            className={`${
              item.name ? "justify-center" : "justify-end pr-32px"
            } relative w-88px h-full flex items-center`}
            style={{
              width: item.name ? "108px" : "113px",
              paddingLeft: item.name ? "1px" : "0",
            }}
          >
            {item.user_count === 0 ? (
              <div className="">{item.added_amount}</div>
            ) : (
              <button
                style={{
                  width: "87px",
                  background: isUserCountOpen[item.id]
                    ? "linear-gradient(to top, #4872b8, #97caff)"
                    : "linear-gradient(to top,  #4f3a7a, #e597ff)",
                }}
                className={`flex items-center justify-center h-36px rounded-4px filter hover:brightness-125 p-px shadow-link -ml-19px`}
                onClick={() => {
                  handleOnChange1(item.id);
                }}
              >
                <div
                  style={{
                    width: "85px",
                    background: isUserCountOpen[item.id]
                      ? "linear-gradient(to top, #6b8eff, #7ac8ff)"
                      : "linear-gradient(to bottom, #df52ff, #6b22ff)",
                  }}
                  className={`flex items-center justify-center h-34px w-85px rounded-4px cursor-pointer space-x-10px`}
                >
                  <span className="font-spoqaMedium tracking-tight text-13px  text-white text-shadow-5">
                    {isUserCountOpen[item.id] === true ? "접기" : "보기"} {item.user_count}
                  </span>
                  <img className={isUserCountOpen[0] === false && " transform rotate-180"} src={WhiteArrow} alt="" />
                </div>
              </button>
            )}
            {isUserCountOpen[item.id] === true && (
              <div className="absolute bottom-0 -mb-px left-34px">
                <img src={Triangle} alt="" />
              </div>
            )}
          </div>
          <div
            className={`${
              item.name ? "pl-2px" : "pl-11px"
            } text-center flex flex-col items-center justify-center space-y-3px text-13px  tracking-tight font-roboto`}
            style={{ width: item.name ? "125px" : "134px" }}
          >
            <div className="flex items-center h-16px">{item.recommended_date}</div>
            <div className="flex items-center h-16px">{item.login_date}</div>
            <div className="flex items-center h-16px">({item.absent_date})</div>
          </div>
          <div
            className={`relative h-full flex items-center justify-end`}
            style={{ width: item.name ? "109px" : "109px" }}
          >
            <button
              style={{
                background: isUserCountOpen[item.id + 1]
                  ? "linear-gradient(to top, #4872b8, #97caff)"
                  : "linear-gradient(to top,  #4f3a7a, #e597ff)",
              }}
              className={`${isUserCountOpen ? "" : ""} ${
                item.name ? "mr-9px" : ""
              } flex items-center justify-center h-36px w-85px rounded-4px filter hover:brightness-125 p-px shadow-link`}
              onClick={() => {
                handleOnChange1(item.id + 1);
              }}
            >
              <div
                style={{
                  background: isUserCountOpen[item.id + 1]
                    ? "linear-gradient(to top, #6b8eff, #7ac8ff)"
                    : "linear-gradient(to bottom, #df52ff, #6b22ff)",
                }}
                className={` flex items-center justify-center h-34px w-83px rounded-4px cursor-pointer space-x-10px`}
              >
                <span className="font-spoqaMedium tracking-tight text-13px  text-white text-shadow-5">
                  {isUserCountOpen[item.id + 1] === true ? "접기" : "보기"}
                </span>
                <img
                  className={isUserCountOpen[item.id + 1] === false && " transform rotate-180"}
                  src={WhiteArrow}
                  alt=""
                />
              </div>
            </button>
            {isUserCountOpen[item.id + 1] === true && (
              <div className="absolute bottom-0 -mb-px left-47px" style={{ left: item.name ? "47px" : "56px" }}>
                <img src={Triangle} alt="" />
              </div>
            )}
          </div>
          <div
            className="h-full flex items-center justify-end text-right"
            style={{ width: "122px", marginLeft: !item.name ? "9px" : "0px" }}
          >
            <p className="pr-39px">{item.added_amount}</p>
          </div>
          <div
            className="h-full flex items-center justify-end text-right"
            style={{ width: "108px", paddingRight: "31px" }}
          >
            <p className="pr-31px">{item.bonus}</p>
          </div>
          <div className="h-full flex items-center justify-end text-right" style={{ width: "123px" }}>
            <p className="pr-38px">{item.withdraw_amount}</p>
          </div>
          <div style={{ width: "110px" }} className="h-full flex items-center justify-end text-right">
            <p className="pr-30px">{item.added_withdraw_amount}</p>
          </div>
          <div className="h-full flex items-center justify-end text-right" style={{ width: "120px" }}>
            <p className="pr-36px">{item.bet_amount}</p>
          </div>
          <div
            className=" h-full flex items-center justify-end text-right"
            style={{ width: "113px", paddingRight: "33px" }}
          >
            <p>{item.win_lose}</p>
          </div>
          <div className="relative w-full h-full flex items-center justify-center" style={{ width: "122px" }}>
            <button
              style={{
                background: isUserCountOpen[item.id + 2]
                  ? "linear-gradient(to top, #4872b8, #97caff)"
                  : "linear-gradient(to top,  #4f3a7a, #e597ff)",
              }}
              className={` ${
                item.name ? "ml-9px" : "ml-8px"
              } flex items-center justify-center h-36px w-85px rounded-4px filter hover:brightness-125 p-px shadow-link`}
              onClick={() => {
                handleOnChange1(item.id + 2);
              }}
            >
              <div
                style={{
                  background: isUserCountOpen[item.id + 2]
                    ? "linear-gradient(to top, #6b8eff, #7ac8ff)"
                    : "linear-gradient(to bottom, #df52ff, #6b22ff)",
                }}
                className={`
                    flex items-center justify-center h-34px w-83px rounded-4px cursor-pointer space-x-10px`}
              >
                <span className="font-spoqaMedium tracking-tight text-13px  text-white text-shadow-5">
                  {isUserCountOpen[item.id + 2] === true ? "접기" : "보기"}
                </span>
                <img
                  className={isUserCountOpen[item.id + 1] === false && " transform rotate-180"}
                  src={WhiteArrow}
                  alt=""
                />
              </div>
            </button>
            {isUserCountOpen[item.id + 2] === true && (
              <div className="absolute bottom-0 -mb-px left-56px">
                <img src={Triangle} alt="" />
              </div>
            )}
          </div>
          <div className="w-100px h-full flex items-center justify-end">
            <p className="pr-23px">{item.point}</p>
          </div>
          <div className="h-full flex items-center justify-end" style={{ width: "116px" }}>
            <p className="pr-23px">{item.holding_amount}</p>
          </div>
        </div>
        <div
          style={{
            borderTop:
              (isUserCountOpen[item.id] === true ||
                isUserCountOpen[item.id + 1] === true ||
                isUserCountOpen[item.id + 2] === true) &&
              "4px solid #2c135f",
          }}
          className={`flex flex-col relative w-full`}
        >
          {(isUserCountOpen[item.id] === true ||
            isUserCountOpen[item.id + 1] === true ||
            isUserCountOpen[item.id + 2] === true) && (
            <div className="absolute w-39px mt-10px flex justify-center items-start ml-2px">
              <img src={ReplyArrow} className="object-none" alt="" />
            </div>
          )}

          {isUserCountOpen[item.id] === true && item.hasSubArray === true && (
            <>
              <div className="w-full flex">
                <div className="w-40px mt-10px flex justify-center items-start flex-shrink-0">
                  {/* <img src={ReplyArrow} className="object-none" alt="" /> */}
                </div>
                <div className=" w-full flex flex-col flex-shrink-0">
                  {/* === Header === */}
                  <div
                    style={{ height: "69px", background: "#5d4386" }}
                    className=" flex items-center justify-start text-13px text-eeeeee tracking-tight"
                  >
                    <div className="h-full flex items-center justify-center" style={{ width: "138px" }}>
                      번호
                    </div>
                    <button
                      className="h-full flex items-center justify-center space-x-3px filter hover:brightness-125"
                      style={{ width: "115px" }}
                      onClick={() => handleOnChange2(0)}
                    >
                      <p>아이디</p>
                      <img
                        src={GrayArrow}
                        className={`${subArrowClicked[0] === true ? "transform rotate-180" : ""} w-13px`}
                        alt=""
                      />
                    </button>
                    <div className="h-full flex items-center justify-center" style={{ width: "135px" }}>
                      별명
                    </div>
                    <button
                      className="h-full flex items-center justify-center space-x-3px ml-2px"
                      style={{ width: "120px" }}
                      onClick={() => handleOnChange2(1)}
                    >
                      <div className="flex flex-col items-center justify-center space-y-3px filter hover:brightness-125 ">
                        <div className="flex items-center h-16px">하부</div>
                        <div className="flex items-center h-16px">유저수</div>
                      </div>
                      <img
                        src={GrayArrow}
                        className={`${subArrowClicked[1] === false ? "transform rotate-180" : ""} w-13px`}
                        alt=""
                      />
                    </button>
                    <button
                      className="h-full flex items-center justify-center space-x-3px"
                      style={{ width: "127px" }}
                      onClick={() => handleOnChange2(2)}
                    >
                      <div className="flex flex-col items-center justify-center space-y-3px  filter hover:brightness-125">
                        <div className="flex items-center h-16px">추천일시</div>
                        <div className="flex items-center h-16px">로그인일시</div>
                        <div className="flex items-center h-16px">(미접속일수)</div>
                      </div>
                      <img
                        src={GrayArrow}
                        className={`${subArrowClicked[2] === false ? "transform rotate-180" : ""} w-13px`}
                        alt=""
                      />
                    </button>
                    <div className="h-full flex items-center justify-center" style={{ width: "127px" }}>
                      요율보기
                    </div>
                    <div className="h-full flex items-center justify-center" style={{ width: "101px" }}>
                      입금액
                    </div>
                    <div className="h-full flex items-center justify-center" style={{ width: "132px" }}>
                      보너스
                    </div>
                    <button
                      className=" h-full flex items-center justify-center space-x-3px filter hover:brightness-125"
                      style={{ width: "102px" }}
                      onClick={() => handleOnChange2(3)}
                    >
                      <p>출금액</p>
                      <img
                        src={GrayArrow}
                        className={`${subArrowClicked[3] === false ? "transform rotate-180" : ""} w-13px`}
                        alt=""
                      />
                    </button>
                    <div className=" h-full flex items-center justify-center ml-5px" style={{ width: "118px" }}>
                      입출금액
                    </div>
                    <button
                      className=" h-full flex items-center justify-center space-x-3px filter hover:brightness-125"
                      style={{ width: "114px" }}
                      onClick={() => handleOnChange2(4)}
                    >
                      <p>베팅액</p>
                      <img
                        src={GrayArrow}
                        className={`${subArrowClicked[4] === false ? "transform rotate-180" : ""} w-13px`}
                        alt=""
                      />
                    </button>
                    <button
                      className=" h-full flex items-center justify-center space-x-3px filter hover:brightness-125 ml-4px"
                      style={{ width: "110px" }}
                      onClick={() => handleOnChange2(5)}
                    >
                      <p>윈루즈</p>
                      <img
                        src={GrayArrow}
                        className={`${subArrowClicked[5] === false ? "transform rotate-180" : ""} w-13px`}
                        alt=""
                      />
                    </button>
                    <div className=" h-full flex items-center justify-center ml-6px" style={{ width: "113px" }}>
                      상세내역
                    </div>
                    <button
                      className=" h-full flex items-center justify-center space-x-3px filter hover:brightness-125 ml-5px"
                      style={{ width: "104px" }}
                      onClick={() => handleOnChange2(6)}
                    >
                      <p>포인트</p>
                      <img
                        src={GrayArrow}
                        className={`${subArrowClicked[6] === false ? "transform rotate-180" : ""} w-13px`}
                        alt=""
                      />
                    </button>
                    <button
                      className=" h-full flex items-center justify-center space-x-3px filter hover:brightness-125 ml-15px"
                      style={{ width: "100px" }}
                      onClick={() => handleOnChange2(7)}
                    >
                      <div className="flex flex-col items-center justify-center space-y-3px ">
                        <div className="flex items-center h-16px">보유</div>
                        <div className="flex items-center h-16px">금액</div>
                      </div>
                      <img
                        src={GrayArrow}
                        className={`${subArrowClicked[7] === false ? "transform rotate-180" : ""} w-13px`}
                        alt=""
                      />
                    </button>
                  </div>
                  <RecommendedUserCell items={RecommendedUserArray2} />
                </div>
              </div>
            </>
          )}

          {isUserCountOpen[item.id + 1] === true && (
            <>
              {isUserCountOpen[item.id] === true && item.hasSubArray === true ? (
                <>
                  <div className="h-10px" />
                  <PercentageCell />
                </>
              ) : (
                <PercentageCell innerTable={true} />
              )}
            </>
          )}

          {isUserCountOpen[item.id + 2] === true &&
            ((isUserCountOpen[item.id] === true && item.hasSubArray === true) ||
            isUserCountOpen[item.id + 1] === true ? (
              <>
                <div className="h-10px" />
                <DetailCell innerTable={true} innerTable2={items === RecommendedUserArray2} />
              </>
            ) : (
              <>
                <DetailCell innerTable={true} innerTable2={items === RecommendedUserArray2} />
              </>
            ))}
        </div>
      </>
    ));
  }

  const UsersOnline = ({ name = "tntwktntwktntwktntwktntwk" }) => (
    <div className="h-48px rounded-full flex items-center justify-center">
      <div
        style={{
          height: "48px",
          background: "#eeeeee",
          boxShadow: "0px 3px 5px rgba(0, 0, 0, .50)",
        }}
        className="pl-10px pr-15px w-full rounded-full flex items-center space-x-5px"
      >
        <img src={DefaultUser} alt="" />
        <span
          style={{
            maxWidth: "140px",
            textOverflow: "unset",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
          className="text-r444444 text-15px"
        >
          {name.length > 12 ? `${name.slice(0, 12)}...` : name}
        </span>
      </div>
    </div>
  );

  return (
    <div
      className="relative flex flex-col justify-center limit1920:overflow-x-hidden"
      style={{ background: "linear-gradient(to right, #b644c4, #351894)" }}
    >
      <div className="fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center">
        <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
      </div>

      <div
        style={{ marginTop: "148px" }}
        className="relative flex flex-col items-start limit1920:items-center w-1260px limit1920:w-auto"
      >
        <div style={{ height: "136px" }} className="relative mt-26px flex-shrink-0">
          <img
            style={{ height: "150px", width: "1300px", objectFit: "none" }}
            className="z-10"
            src={DistributorBanner}
            alt=""
          />

          <div className="font-bold z-20 absolute top-0 text-24px w-full h-full flex items-center justify-center">
            <span style={{ textShadow: "0 0 4px rgba(0, 0, 0, 0.6)" }} className="leading-none text-white">
              총판페이지
            </span>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center limit496:items-center mt-11px">
        <div
          style={{ borderRadius: "25px", width: "496px", background: "rgb(56,35,114)", color: "#acacac" }}
          className="space-x-4px h-50px flex items-center justify-center text-18px tracking-tight"
        >
          <span
            style={{
              maxWidth: "160px",
              textOverflow: "unset",
              whiteSpace: "nowrap",
              overflow: "hidden",
              color: "#a5eefe",
            }}
            className="font-bold -mt-2px"
          >
            {username.length > 12 ? `${username.slice(0, 12)}...` : username}
          </span>
          <span className="font-spoqaMedium -mt-2px">님의 총판 정보입니다.</span>
        </div>
      </div>

      <div className="relative flex flex-col justify-start limit:justify-center">
        <div className="flex flex-col items-start limit1920:items-center w-full h-full">
          <div className="mt-54px w-1836px">
            <div className="h-29px w-full flex items-center space-x-8px text-18px">
              <img className="mt-px" src={SummaryIcon} alt="" />
              <span className="text-eeeeee -mt-px tracking-tight">총판현황</span>
            </div>
            <div style={{ height: "165px" }} className="flex w-full mt-20px space-x-4px">
              <SummaryCard img={SummaryIcon1} text="전체 유저" count={5} />
              <SummaryCard img={SummaryIcon2} text="요율 설정 완료건" count={20} />
              <SummaryCard img={SummaryIcon3} text="요율 설정 미완료건" count={5} />
              <SummaryCard img={SummaryIcon4} text="전체 포인트" count={0} />
              <SummaryCard img={SummaryIcon5} text="현재까지 사용 포인트" count={0} />
              <SummaryCard img={SummaryIcon6} text="현재 나의 포인트" count={0} />
              <SummaryCard img={SummaryIcon7} text="진행중인 금액" count="78,307.50" />
              <SummaryCard img={SummaryIcon8} text="제휴 금액" count="117,515,875.76" />
            </div>

            <div className="mt-61px h-29px w-full flex items-center space-x-6px text-18px tracking-tight">
              <img src={PieIcon} alt="" />
              <span className="-mt-px text-eeeeee">롤링요율</span>
            </div>

            <div
              style={{
                background: "linear-gradient(to top, #eeeeee, #9361e5)",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.6)",
              }}
              className="mt-19px h-112px w-full rounded-4px flex items-center p-px overflow-x-auto scroll-div6"
            >
              <table className="w-full overflow-hidden rounded-3px bg-white">
                <thead className="h-55px w-full text-13px text-eeeeee tracking-tight" style={{ background: "#472480" }}>
                  <tr className="flex items-center h-55px w-full">
                    {games.map((item) => {
                      if (!item.title2) return <td className="w-75px text-center">{item.title1}</td>;
                      else
                        return (
                          <td className="w-75px text-center flex flex-col items-center pt-2px -space-y-4px">
                            <span>{item.title1}</span>
                            <span>{item.title2}</span>
                          </td>
                        );
                    })}
                  </tr>
                </thead>
                <tbody className="w-full text-r444444 text-13px tracking-tight">
                  <tr className="flex items-center text-13px tracking-tight text-gray-c8c8c8 h-54px w-full">
                    {games.map((item, index) => {
                      return <td className="w-75px text-center">{index === 0 ? "0.70%" : "0.00%"}</td>;
                    })}
                  </tr>
                </tbody>
              </table>
            </div>

            <div
              style={{ marginTop: "59px" }}
              className="h-29px w-full flex items-center space-x-6px text-18px tracking-tight"
            >
              <img src={DetailIcon} alt="" />
              <span className="-mt-px text-eeeeee">나의 상세내역</span>
            </div>
            <div className="pt-10px">
              <DateSearchBar isLeagueSearch={false} hasIdSearch={true} fullWidth={true} />
            </div>

            <div className="flex mt-30px w-full justify-center space-x-11px">
              <div
                style={{ width: "333px", borderColor: "#9361e5", background: "rgb(56,35,114)" }}
                className="h-48px rounded-full border-2 flex items-center justify-center text-15px tracking-tight"
              >
                <img className="mr-10px mt-px" src={Diamond} alt="" />
                <div className="flex items-center space-x-4px">
                  <span className="text-white">입금 :</span>
                  <span style={{ color: "#ffd98b" }}>0</span>
                </div>
              </div>

              <div
                style={{ width: "333px", borderColor: "#9361e5", background: "rgb(56,35,114)" }}
                className="h-48px rounded-full border-2 border-gray-635f5b bg-gray-2e2e2e flex items-center justify-center font-spoqaMedium text-15px tracking-tight"
              >
                <img className="mr-9px mt-px" src={Diamond} alt="" />
                <div className="flex items-center space-x-4px">
                  <span className="text-white">보너스 :</span>
                  <span style={{ color: "#ffd98b" }}>0</span>
                </div>
              </div>

              <div
                style={{ width: "333px", borderColor: "#9361e5", background: "rgb(56,35,114)" }}
                className="h-48px rounded-full border-2 border-gray-635f5b bg-gray-2e2e2e flex items-center justify-center font-spoqaMedium text-15px tracking-tight"
              >
                <img className="mr-10px mt-px" src={Diamond} alt="" />
                <div className="flex items-center space-x-4px">
                  <span className="text-white">출금 :</span>
                  <span style={{ color: "#ffd98b" }}>0</span>
                </div>
              </div>

              <div
                style={{ width: "333px", borderColor: "#9361e5", background: "rgb(56,35,114)" }}
                className="h-48px rounded-full border-2 border-gray-635f5b bg-gray-2e2e2e flex items-center justify-center font-spoqaMedium text-15px tracking-tight"
              >
                <img className="-ml-8px mr-6px mt-px" src={Diamond} alt="" />
                <div className="flex items-center space-x-4px">
                  <span className="text-white">입출금 합계 :</span>
                  <span style={{ color: "#ff7f7f" }}>-3,200,000</span>
                </div>
              </div>
            </div>

            <div>
              <div
                style={{
                  background: "linear-gradient(to top, #eeeeee, #9361e5)",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.6)",
                }}
                className="mt-20px w-full rounded-4px flex items-center p-px overflow-x-auto scroll-div6"
              >
                <div className="bg-white rounded-4px text-r444444 ">
                  <table className="rounded-t-4px">
                    <thead
                      className="h-53px w-full text-13px text-eeeeee tracking-tight border-b"
                      style={{ borderColor: "#dddddd" }}
                    >
                      <tr className="flex items-center h-53px rounded-t-4px" style={{ background: "#472480" }}>
                        <td
                          style={{ backgroundColor: "#391d66", width: "84px" }}
                          className=" h-full flex items-center justify-center rounded-tl-4px"
                        >
                          구분
                        </td>
                        {games.map((item) => {
                          if (!item.title2) return <td className="w-83px text-center">{item.title1}</td>;
                          else
                            return (
                              <td className="w-83px text-center flex flex-col pt-2px -space-y-4px">
                                <span>{item.title1}</span>
                                <span>{item.title2}</span>
                              </td>
                            );
                        })}
                        <td
                          style={{ backgroundColor: "#391d66" }}
                          className="w-70px text-center h-full flex items-center justify-center"
                        >
                          합계
                        </td>
                      </tr>
                    </thead>
                    <tbody className="w-full text-r444444 text-13px tracking-tight">
                      <tr
                        className="flex items-center  text-13px tracking-tight h-55px w-full border-b"
                        style={{ borderColor: "#dddddd" }}
                      >
                        <td
                          style={{ backgroundColor: "#f2f2f2" }}
                          className="w-84px h-full flex items-center justify-center text-13px tracking-tight"
                        >
                          베팅금
                        </td>
                        {games.map((item, index) => (
                          <td className="w-83px text-right pr-5px">
                            {index === 0 ? "1.09M" : index === 1 ? "33K" : 0}
                          </td>
                        ))}
                        <td
                          style={{ backgroundColor: "#f2f2f2" }}
                          className="w-70px text-right pr-10px h-full flex items-center justify-end"
                        >
                          7.14M
                        </td>
                      </tr>
                      <tr
                        className="flex items-center text-13px tracking-tight h-55px w-full border-b"
                        style={{ background: "#f7f7f7", borderColor: "#dddddd" }}
                      >
                        <td
                          style={{ backgroundColor: "#f2f2f2" }}
                          className="w-84px bg-gray-16181a h-full flex items-center justify-center text-13px tracking-tight"
                        >
                          승패
                        </td>
                        {games.map((item, index) => (
                          <td className="w-83px text-right pr-5px">
                            {index === 0 ? "1.09M" : index === 1 ? "33K" : 0}
                          </td>
                        ))}

                        <td
                          style={{ backgroundColor: "#f2f2f2" }}
                          className="w-70px text-right pr-10px h-full flex items-center justify-end"
                        >
                          0
                        </td>
                      </tr>
                      <tr className="flex items-center text-13px tracking-tight h-55px w-full">
                        <td
                          style={{ backgroundColor: "#f2f2f2" }}
                          className="w-84px bg-gray-16181a h-full flex items-center justify-center text-13px tracking-tight"
                        >
                          정산금액
                        </td>
                        {games.map((item, index) => (
                          <td className="w-83px text-right pr-5px">
                            {index === 0 ? "1.09M" : index === 1 ? "33K" : 0}
                          </td>
                        ))}
                        <td
                          style={{ backgroundColor: "#f2f2f2" }}
                          className="w-70px  text-right pr-10px h-full flex items-center justify-end"
                        >
                          0
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-55px h-42px w-full flex items-center space-x-8px text-18px text-eeeeee">
              <img src={MemberIcon} alt="" />
              <div className="tracking-tight">
                접속중인 회원수 : <span className="font-bold text-white tracking-tight ">2명</span>
              </div>

              <div
                style={{
                  width: "75px",
                  height: "42px",
                  borderRadius: "4px",
                  marginLeft: "14px",
                  background: "linear-gradient(to top, #4f3a7a, #e597ff)",
                  boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.6)",
                }}
                className="flex items-center justify-center rounded-4px hover:filter hover:brightness-125 shadow-link"
                onClick={() => setViewOnline(!viewOnline)}
              >
                <div
                  style={{
                    width: "73px",
                    height: "40px",
                    background: "linear-gradient(0deg, #6b22ff, #df52ff)",
                    borderRadius: "3px",
                  }}
                  className="flex items-center justify-center rounded-4px cursor-pointer"
                >
                  <span className="tracking-tight text-14px text-shadow-5 text-white">
                    {viewOnline ? "닫기" : "보기"}
                  </span>
                </div>
              </div>
            </div>

            {viewOnline && (
              <div
                style={{ height: "64px", background: "rgba(52, 34, 103, 0.6)" }}
                className="flex rounded-full mt-13px px-8px items-center space-x-10px"
              >
                <UsersOnline />
                <UsersOnline name="tkskdl12" />
              </div>
            )}

            <div className="mt-60px h-29px w-full flex items-end justify-between text-18px tracking-tight text-eeeeee">
              <div className="flex items-center space-x-8px h-29px">
                <img src={RecommendIcon} alt="" />
                <div>추천 회원내역</div>
              </div>

              <div
                style={{ width: "374px", borderColor: "#9361e5", background: "rgb(56,35,114)" }}
                className="h-48px rounded-full border-2 flex items-center justify-center text-15px tracking-tight"
              >
                <img className="mr-10px mt-px" src={Diamond} alt="" />
                <div className="flex items-center space-x-4px pt-2px">
                  <span className="text-white">보유금 총합계 :</span>
                  <span style={{ color: "#ffd98b" }}>75,000</span>
                </div>
              </div>
            </div>

            {/* === 추천회원내역 표 === */}
            <div
              className="flex flex-col items-center justify-center mt-21px w-full rounded-4px overflow-hidden "
              style={{ filter: "drop-shadow( 0 0px 7px rgba(0, 0, 0, 0.4))" }}
            >
              <div className="flex flex-col items-center justify-center  w-full overflow-hidden">
                <div
                  style={{
                    height: "69px",
                    background: "#472480",
                    borderColor: "#acacac",
                  }}
                  className="w-full flex items-center justify-start font-spoqa text-13px text-eeeeee tracking-tight border-b pt-3px"
                >
                  <div className="w-90px text-center pr-5px">번호</div>
                  <button
                    className="flex text-center items-center space-x-3px justify-center hover:font-spoqaBold filter hover:brightness-125"
                    style={{ width: "136px" }}
                    onClick={() => handleOnChange(0)}
                  >
                    <p>아이디</p>
                    <img
                      src={GrayArrow}
                      className={`${isArrowUp[0] === true ? "transform rotate-180" : ""} w-13px`}
                      alt=""
                    />
                  </button>
                  <div style={{ width: "96px" }} className="text-center">
                    이름
                  </div>
                  <div className="text-center pl-7px" style={{ width: "130px" }}>
                    별명
                  </div>
                  <button
                    style={{ width: "108px" }}
                    className="text-center flex items-center justify-center space-x-3px filter hover:brightness-125"
                    onClick={() => handleOnChange(1)}
                  >
                    <div className="flex flex-col items-center justify-center space-y-3px ">
                      <div className="flex items-center h-16px">하부</div>
                      <div className="flex items-center h-16px">유저수</div>
                    </div>
                    <img
                      src={GrayArrow}
                      className={`${isArrowUp[1] === false ? "transform rotate-180" : ""} w-13px`}
                      alt=""
                    />
                  </button>
                  <button
                    className="text-center flex items-center justify-center space-x-3px filter hover:brightness-125 pr-px"
                    style={{ width: "125px" }}
                    onClick={() => handleOnChange(2)}
                  >
                    <div className="flex flex-col items-center justify-center space-y-3px">
                      <div className="flex items-center h-16px">추천일시</div>
                      <div className="flex items-center h-16px">로그인일시</div>
                      <div className="flex items-center h-16px">(미접속일수)</div>
                    </div>
                    <img
                      src={GrayArrow}
                      className={`${isArrowUp[2] === false ? "transform rotate-180" : ""} w-13px`}
                      alt=""
                    />
                  </button>
                  <div className="text-center" style={{ width: "109px" }}>
                    요율보기
                  </div>
                  <div className="text-center" style={{ width: "122px" }}>
                    입금액
                  </div>
                  <div className="text-center" style={{ width: "108px" }}>
                    보너스
                  </div>
                  <button
                    className="flex text-center items-center space-x-3px justify-center filter hover:brightness-125"
                    style={{ width: "123px" }}
                    onClick={() => handleOnChange(3)}
                  >
                    <p>출금액</p>
                    <img
                      src={GrayArrow}
                      className={`${isArrowUp[3] === false ? "transform rotate-180" : ""} w-13px`}
                      alt=""
                    />
                  </button>
                  <div style={{ width: "110px" }} className="text-center">
                    입출금액
                  </div>
                  <button
                    className="flex w-113px text-center items-center space-x-3px justify-center filter hover:brightness-125"
                    style={{ width: "120px" }}
                    onClick={() => handleOnChange(4)}
                  >
                    <p>베팅액</p>
                    <img
                      src={GrayArrow}
                      className={`${isArrowUp[4] === false ? "transform rotate-180" : ""} w-13px`}
                      alt=""
                    />
                  </button>
                  <button
                    className="flex w-113px text-center items-center space-x-3px justify-center filter hover:brightness-125"
                    style={{ width: "113px" }}
                    onClick={() => handleOnChange(5)}
                  >
                    <p>윈루즈</p>
                    <img
                      src={GrayArrow}
                      className={`${isArrowUp[5] === false ? "transform rotate-180" : ""} w-13px`}
                      alt=""
                    />
                  </button>
                  <div className="w-118px text-center" style={{ width: "122px" }}>
                    상세내역
                  </div>
                  <button
                    className="flex text-center items-center space-x-3px justify-center filter hover:brightness-125"
                    style={{ width: "106px" }}
                    onClick={() => handleOnChange(6)}
                  >
                    <p>포인트</p>
                    <img
                      src={GrayArrow}
                      className={`${isArrowUp[6] === false ? "transform rotate-180" : ""} w-13px`}
                      alt=""
                    />
                  </button>
                  <button
                    className="text-end flex items-center justify-center space-x-3px filter hover:brightness-125 pl-12px"
                    style={{ width: "116px" }}
                    onClick={() => handleOnChange(7)}
                  >
                    <div className="flex flex-col items-center justify-center space-y-3px">
                      <div className="flex items-center h-16px">보유</div>
                      <div className="flex items-center h-16px">금액</div>
                    </div>
                    <img
                      src={GrayArrow}
                      className={`${isArrowUp[7] === false ? "transform rotate-180" : ""} w-13px`}
                      alt=""
                    />
                  </button>
                </div>
                <RecommendedUserCell items={RecommendedUserArray} />
              </div>
            </div>
          </div>

          <div className="flex mt-60px justify-center w-full mb-60px">
            <Pagination page={page} setPage={setPage} />
          </div>

          <div className="w-full">
            <Footer fullWidth={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistributorPage;
