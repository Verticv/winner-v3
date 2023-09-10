import React, { useState } from "react";
import icon1 from "../../../images/nonLivePage/mainTabs/1.png";
import icon2 from "../../../images/nonLivePage/mainTabs/2.png";
import icon3 from "../../../images/nonLivePage/mainTabs/3.png";
import icon4 from "../../../images/nonLivePage/mainTabs/4.png";
import icon5 from "../../../images/nonLivePage/mainTabs/5.png";
import icon6 from "../../../images/nonLivePage/mainTabs/6.png";
import TabButton from "./TabButton";

const MainTabs = () => {
  const [isActiveTab, setActiveTab] = useState(0);
  const items = [
    {
      id: 0,
      icon: icon1,
      marginLeft1: "15px",
      text: "조합베팅",
      marginLeft: "5px",
      marginRight: "14px",
      width: "107px",
      path: "/bet-combination",
    },
    {
      id: 1,
      icon: icon2,
      marginLeft1: "15px",
      text: "스페셜베팅",
      marginLeft: "5px",
      marginRight: "14px",
      width: "120px",
      path: "/bet-combination/special",
    },
    {
      id: 2,
      icon: icon3,
      marginLeft1: "15px",
      text: "라이브스포츠",
      marginLeft: "4px",
      marginRight: "13px",
      width: "137px",
      path: "/bet-combination/live",
    },
    {
      id: 3,
      icon: icon4,
      marginLeft1: "15px",
      text: "경기결과",
      marginLeft: "4px",
      width: "114px",
      marginRight: "15px",
      path: "/gameresults/sports/win-draw-lose",
    },
    {
      id: 4,
      icon: icon5,
      marginLeft1: "15px",
      text: "라이브영상",
      marginLeft: "4px",
      marginRight: "15px",
      width: "124px",
      path: "/bet-combination/live-video",
    },
    {
      id: 5,
      icon: icon6,
      marginLeft1: "14px",
      text: "베팅규정",
      marginLeft: "5px",
      width: "108px",
      marginRight: "14px",
      path: "/cscenter/policy/sportsgame/live-sport",
    },
  ];

  return (
    <div className="flex h-full cursor-pointer ml-6px">
      {items.map((item) => (
        <TabButton key={item.id} item={item} isActiveTab={isActiveTab} setActiveTab={setActiveTab} />
      ))}
    </div>
  );
};

export default MainTabs;
