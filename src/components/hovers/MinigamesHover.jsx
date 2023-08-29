import React, { useState } from "react";
import Powerball from "../../images/navbarHover/6_1.png";
import PowerballLogo from "../../images/navbarHover/6_1_logo.png";
import PowerLadder from "../../images/navbarHover/6_2.png";
import Speedkino from "../../images/navbarHover/6_3.png";
import KinoLadder from "../../images/navbarHover/6_4.png";
import Expand from "react-expand-animated";
import { useHistory } from "react-router-dom";
import useNavButtonPosition from "hooks/useNavButtonPosition";

const MinigamesHover = ({ selection }) => {
  const [isHover, setHover] = useState(null);
  const history = useHistory();

  const hoverMenuPosition = useNavButtonPosition("menu-wrapper", "navbar-6-button");

  const gamesArray = [
    {
      id: 0,
      background: Powerball,
      logo: PowerballLogo,
      imgText: "e-스포츠",
    },
    {
      id: 1,
      background: Speedkino,
      logo: PowerballLogo,
      imgText: "화면구성설명",
      path: "/esports/structure",
    },
    {
      id: 2,
      background: PowerLadder,
      logo: PowerballLogo,
      imgText: "단폴더베팅방법",
      path: "/esports/single",
    },
    {
      id: 3,
      background: KinoLadder,
      logo: PowerballLogo,
      imgText: "다폴더베팅방법",
      path: "/esports/multi",
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
        {isHover === item.id && (
          <button
            style={{
              boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)",
              background: "linear-gradient(to right, #df52ff, #6c22ff)",
              width: "90px",
              height: "26px",
              right: "60px",
            }}
            className="absolute z-50 top-20px pt-2px right-15px flex items-center justify-center h-28px text-white rounded-14px cursor-pointer font-spoqaMedium text-13px tracking-tighter"
          >
            {!item.imgText.includes("e-스포츠") ? "설명보기" : "게임시작"}
          </button>
        )}
        {isHover === item.id && <div className="w-full h-full bg-black opacity-60 z-10 rounded-6px"></div>}
        {item.logo && <img className="object-none absolute right-0 bottom-0" src={item.logo} alt="game_image_logo" />}

        <img className={`absolute bottom-0 object-none h-auto z-40`} src={item.background} alt="game_image" />
        <div
          style={{ width: "132px" }}
          className="absolute flex flex-col justify-end items-center h-full right-0 bottom-0 z-0"
        >
          <p className="text-white text-12px tracking-tighter font-spoqa mb-7px">{item.imgText}</p>
        </div>
      </div>
    ));
  }
  return (
    <Expand
      open={selection === 6}
      duration={200}
      styles={{
        open: { left: hoverMenuPosition, boxShadow: "3px 3px 10px #00000050", backgroundColor: "#ededeb" },
        close: { left: hoverMenuPosition, backgroundColor: "#ededeb" },
      }}
      className="rounded-8px absolute w-auto m-auto h-262px bg-white"
    >
      <div
        onMouseLeave={() => setHover(null)}
        style={{ minHeight: "176px" }}
        className="h-full w-auto flex justify-center"
      >
        <div style={{ width: "460px" }} className="p-15px grid gap-10px grid-cols-2 limit:grid-cols-2">
          <GamesList items={gamesArray} />
        </div>
      </div>
    </Expand>
  );
};

export default MinigamesHover;
