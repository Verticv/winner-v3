import React, { useState } from "react";
import Expand from "react-expand-animated";
import useNavButtonPosition from "hooks/useNavButtonPosition";
import { useHistory } from "react-router";

import Img1_1 from "../../images/navbarHover/1_1.png";
import Img1_2 from "../../images/navbarHover/1_2.png";
import Img1_3 from "../../images/navbarHover/1_3.png";
import Img1_4 from "../../images/navbarHover/1_4.png";
import Img1_5 from "../../images/navbarHover/1_5.png";
import Img1_6 from "../../images/navbarHover/1_6.png";
import Img1_7 from "../../images/navbarHover/1_7.png";
// import Img1_8 from "../../images/navbarHover/1_8.png";
import Img1_9 from "../../images/navbarHover/1_9.png";
import Img1_10 from "../../images/navbarHover/1_10.png";
import Img1_11 from "../../images/navbarHover/1_11.png";
import Img1_12 from "../../images/navbarHover/1_12.png";
import Img1_13 from "../../images/navbarHover/1_13.png";
import Img1_14 from "../../images/navbarHover/1_14.png";
import Img1_15 from "../../images/navbarHover/1_15.png";
import Img1_16 from "../../images/navbarHover/1_16.png";

import Img1_1_logo from "../../images/navbarHover/1_1_logo.png";
import Img1_2_logo from "../../images/navbarHover/1_2_logo.png";
import Img1_3_logo from "../../images/navbarHover/1_3_logo.png";
import Img1_4_logo from "../../images/navbarHover/1_4_logo.png";
import Img1_5_logo from "../../images/navbarHover/1_5_logo.png";
import Img1_6_logo from "../../images/navbarHover/1_6_logo.png";
import Img1_7_logo from "../../images/navbarHover/1_7_logo.png";
import Img1_9_logo from "../../images/navbarHover/1_9_logo.png";
import Img1_10_logo from "../../images/navbarHover/1_10_logo.png";
import Img1_11_logo from "../../images/navbarHover/1_11_logo.png";
import Img1_12_logo from "../../images/navbarHover/1_12_logo.png";
import Img1_13_logo from "../../images/navbarHover/1_13_logo.png";
import Img1_14_logo from "../../images/navbarHover/1_14_logo.png";
import Img1_15_logo from "../../images/navbarHover/1_15_logo.png";
import Img1_16_logo from "../../images/navbarHover/1_16_logo.png";

import Best from "../../images/navbarHover/best.png";

const LiveCasinoHover = ({ selection }) => {
  const [isHover, setHover] = useState(null);
  const history = useHistory();

  const hoverMenuPosition = useNavButtonPosition("menu-wrapper", "navbar-0-button");

  const gamesArray = [
    {
      id: 0,
      background: Img1_1,
      logo: Img1_1_logo,
      imgText: "프레그메틱플레이",
      path: "/live-casino",
    },
    {
      id: 1,
      background: Img1_2,
      logo: Img1_2_logo,
      imgText: "에볼루션",
      path: "/live-casino",
    },
    {
      id: 2,
      background: Img1_3,
      logo: Img1_3_logo,
      imgText: "로얄지",
      path: "/live-casino",
    },
    {
      id: 3,
      background: Img1_4,
      logo: Img1_4_logo,
      imgText: "아시아게이밍",
      path: "/live-casino",
    },
    {
      id: 4,
      background: Img1_5,
      logo: Img1_5_logo,

      imgText: "드림게이밍",
      path: "/live-casino",
    },
    {
      id: 5,
      background: Img1_6,
      logo: Img1_6_logo,
      imgText: "섹시게이밍",
      path: "/live-casino",
    },
    {
      id: 6,
      background: Img1_7,
      logo: Img1_7_logo,
      imgText: "빅게이밍",
      path: "/live-casino",
    },
    {
      id: 7,
      background: Img1_9,
      logo: Img1_9_logo,

      imgText: "오리엔탈게임",
      path: "/live-casino",
    },
    {
      id: 8,
      background: Img1_10,
      logo: Img1_10_logo,
      imgText: "이주기",
      path: "/live-casino",
    },
    {
      id: 9,
      background: Img1_11,
      logo: Img1_11_logo,
      imgText: "마이크로게이밍",
      path: "/live-casino",
    },
    {
      id: 10,
      background: Img1_12,
      logo: Img1_12_logo,
      imgText: "베가스라운지",
      path: "/live-casino",
    },
    {
      id: 11,
      background: Img1_13,
      logo: Img1_13_logo,
      imgText: "비터라이브",
      path: "/live-casino",
    },
    {
      id: 12,
      background: Img1_14,
      logo: Img1_14_logo,
      imgText: "타이산",
      path: "/live-casino",
    },
    {
      id: 13,
      background: Img1_16,
      logo: Img1_16_logo,
      imgText: "모티베이션",
      path: "/live-casino",
    },
    {
      id: 14,
      background: Img1_15,
      logo: Img1_15_logo,
      imgText: "준비중",
      path: "#",
    },
  ];

  function GamesList({ items }) {
    return items.map((item) => (
      <div
        key={item.id}
        className={`relative group cursor-pointer flex items-center flex-shrink-0 h-68px rounded-6px`}
        style={{
          width: "210px",
          background: "linear-gradient(to right, #9c3bbb, #411d99)",
        }}
        onMouseEnter={() => setHover(item.id)}
        onClick={() => history.push(item.path)}
      >
        {0 === item.id && <img src={Best} alt="" className="absolute -left-3px bottom-7px z-50 object-none" />}

        {isHover === item.id && item.id !== 14 && (
          <button
            style={{
              boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)",
              background: "linear-gradient(to right, #df52ff, #6c22ff)",
              width: "90px",
              height: "26px",
              right: "60px",
            }}
            className="absolute z-50 top-0px pt-2px flex items-center justify-center text-white rounded-14px cursor-pointer font-spoqaMedium text-13px tracking-tighter"
          >
            게임시작
          </button>
        )}
        {item.id === 14 && (
          <button
            style={{
              boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)",
              background: "linear-gradient(to right, #7e7e7e, #505050)",
              width: "90px",
              height: "26px",
              right: "60px",
            }}
            className="absolute z-50 top-21px pt-2px flex items-center justify-center text-white rounded-14px cursor-pointer font-spoqaMedium text-13px tracking-tighter"
          >
            점검중
          </button>
        )}
        {(isHover === item.id || 14 === item.id) && (
          <div
            className={`${14 === item.id ? "z-20" : "z-10"} relative w-full h-full bg-black opacity-60  rounded-6px`}
          ></div>
        )}

        <img
          className={`absolute bottom-0 object-none h-auto ${14 === item.id ? "z-0" : "z-40"} `}
          src={item.background}
          alt="game_image"
        />
        {item.logo && <img className="object-none absolute right-0 bottom-0" src={item.logo} alt="game_image_logo" />}

        <div
          style={{ width: "132px" }}
          className={`absolute flex flex-col ${
            item.logo ? "justify-start" : "justify-center"
          } items-center h-full right-0 top-0 z-0`}
        >
          <p
            style={{ color: item.imgText === "준비중" ? "#ebabff" : "#fff" }}
            className="absolute bottom-0 text-12px mb-6px tracking-tighter font-spoqa w-full text-center pr-px"
          >
            {item.imgText}
          </p>
        </div>
      </div>
    ));
  }
  return (
    <Expand
      open={selection === 0}
      duration={200}
      styles={{
        open: { left: hoverMenuPosition, boxShadow: "3px 3px 10px #00000050", backgroundColor: "#ededeb" },
        close: { left: hoverMenuPosition, backgroundColor: "#ededeb" },
      }}
      className="rounded-8px absolute w-auto m-auto h-262px bg-white"
    >
      <div
        onMouseLeave={() => setHover(null)}
        style={{ minHeight: "254px" }}
        className="h-full w-auto flex justify-center"
      >
        <div style={{ width: "1120px" }} className="p-15px grid gap-10px grid-cols-5 limit:grid-cols-5">
          <GamesList items={gamesArray} />
        </div>
      </div>
    </Expand>
  );
};

export default LiveCasinoHover;
