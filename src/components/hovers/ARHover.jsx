import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Expand from "react-expand-animated";
import AugBanner from "../../images/navbarHover/7_1.png";
import AugBannerLogo from "../../images/navbarHover/7_1_logo.png";
import AugBanner2 from "../../images/navbarHover/7_2.png";
import AugBannerLogo2 from "../../images/navbarHover/7_2_logo.png";
import AugBanner3 from "../../images/navbarHover/7_3.png";
import AugBannerLogo3 from "../../images/navbarHover/7_3_logo.png";
import AugBanner4 from "../../images/navbarHover/7_4.png";
import AugBannerLogo4 from "../../images/navbarHover/7_4_logo.png";
import useNavButtonPosition from "hooks/useNavButtonPosition";

const ARHover = ({ selection }) => {
  const [isHover, setHover] = useState(null);
  const history = useHistory();

  const hoverMenuPosition = useNavButtonPosition("menu-wrapper", "navbar-6-button");

  const gamesArray = [
    {
      id: 0,
      background: AugBanner,
      logo: AugBannerLogo,
      imgText: "파워볼",
    },
    {
      id: 1,
      background: AugBanner3,
      logo: AugBannerLogo3,
      imgText: "파워사다리",
      path: "/esports/single",
    },
    {
      id: 2,
      background: AugBanner2,
      logo: AugBannerLogo2,
      imgText: "스피드키노",
      path: "/esports/structure",
    },
    {
      id: 3,
      background: AugBanner4,
      logo: AugBannerLogo4,
      imgText: "키노사다리",
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
            className="absolute z-50 top-20px pt-px right-15px flex items-center justify-center h-28px text-white rounded-14px cursor-pointer font-spoqaMedium text-12px tracking-tighter"
          >
            게임시작
          </button>
        )}
        {isHover === item.id && <div className="w-full h-full bg-black opacity-60 z-10 rounded-6px"></div>}
        <img className={`absolute bottom-0 object-none h-auto z-40`} src={item.background} alt="game_image" />
        <div
          style={{ width: "132px" }}
          className="absolute flex flex-col justify-start items-center h-full right-0 top-0 z-0"
        >
          <img src={item.logo} alt="game_image_logo" />
          <p className="text-white text-12px -mb-8px tracking-tighter font-spoqa">{item.imgText}</p>
        </div>
      </div>
    ));
  }
  return (
    <Expand
      open={selection === 6}
      duration={200}
      styles={{
        open: { left: hoverMenuPosition },
        close: { left: hoverMenuPosition },
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

export default ARHover;
