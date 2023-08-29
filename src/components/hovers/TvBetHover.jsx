import React, { useState } from "react";
import Expand from "react-expand-animated";
import { useHistory } from "react-router-dom";
import img1 from "../../images/navbarHover/9_1.png";
import img1Logo from "../../images/navbarHover/9_1_logo.png";
import useNavButtonPosition from "hooks/useNavButtonPosition";

const TvBetHover = ({ selection }) => {
  const [isHover, setHover] = useState(null);
  const history = useHistory();

  const hoverMenuPosition = useNavButtonPosition("menu-wrapper", "navbar-9-button");

  const gamesArray = [
    {
      id: 0,
      background: img1,
      logo: img1Logo,
      imgText: "케이플레이피싱",
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
            게임시작
          </button>
        )}
        {isHover === item.id && <div className="w-full h-full bg-black opacity-60 z-10 rounded-6px"></div>}
        <img className={`absolute bottom-0 object-none h-auto z-40`} src={item.background} alt="game_image" />
        {item.logo && <img className="object-none absolute right-0 bottom-0" src={item.logo} alt="game_image_logo" />}

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
      open={selection === 9}
      duration={200}
      styles={{
        open: { left: hoverMenuPosition, boxShadow: "3px 3px 10px #00000050", backgroundColor: "#edeedeb" },
        close: { left: hoverMenuPosition, backgroundColor: "#edeedeb" },
      }}
      className="rounded-8px absolute w-auto m-auto h-98px bg-white"
    >
      <div
        onMouseLeave={() => setHover(null)}
        style={{ minHeight: "98px" }}
        className="h-full w-auto flex justify-center"
      >
        <div style={{ width: "240px" }} className="p-15px grid gap-10px grid-cols-1 limit:grid-cols-1">
          <GamesList items={gamesArray} />
        </div>
      </div>
    </Expand>
  );
};

export default TvBetHover;
