import React, { useState } from "react";
import Expand from "react-expand-animated";
import Icon1 from "../../images/navbarHover/11_1.png";
import Icon2 from "../../images/navbarHover/11_2.png";
import AugBannerLogo from "../../images/navbarHover/11_1_logo.png";
import { useHistory } from "react-router-dom";
import useNavButtonPosition from "hooks/useNavButtonPosition";

const HoldemHover = ({ selection }) => {
  const [isHover, setHover] = useState(null);
  const history = useHistory();

  const hoverMenuPosition = useNavButtonPosition("menu-wrapper", "navbar-5-button");

  const gamesArray = [
    {
      id: 0,
      background: Icon1,
      logo: AugBannerLogo,
      imgText: "K-홀덤",
    },
    {
      id: 1,
      background: Icon2,
      logo: AugBannerLogo,
      imgText: "이용가이드",
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
            {item.imgText.includes("이용가이드") ? "설명보기" : "게임시작"}
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
      open={selection === 5}
      duration={200}
      styles={{
        open: { left: hoverMenuPosition, boxShadow: "3px 3px 10px #00000050" },
        close: { left: hoverMenuPosition },
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

export default HoldemHover;
