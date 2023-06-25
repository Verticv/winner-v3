import React from "react";
import icon1 from "../../../images/nonLivePage/mainTabs/1.png";
import icon2 from "../../../images/nonLivePage/mainTabs/2.png";
import icon3 from "../../../images/nonLivePage/mainTabs/3.png";
import icon4 from "../../../images/nonLivePage/mainTabs/4.png";
import icon5 from "../../../images/nonLivePage/mainTabs/5.png";
import icon6 from "../../../images/nonLivePage/mainTabs/6.png";
import TabButton from "./TabButton";

const MainTabs = () => {
  // const [isActiveTab, setActiveTab] = useState(false);
  const items = [
    {
      id: 0,
      icon: icon1,
      text: "조합베팅",
      active: true,
      marginLeft: "5px",
      marginRight: "14px",
      width: "107px",
    },
    {
      id: 1,
      icon: icon2,
      text: "스페셜베팅",
      marginLeft: "5px",
      marginRight: "14px",
      width: "120px",
    },
    {
      id: 2,
      icon: icon3,
      text: "실시간스포츠",
      marginLeft: "4px",
      marginRight: "13px",
      width: "137px",
    },
    {
      id: 3,
      icon: icon4,
      text: "경기결과",
      marginLeft: "4px",
      width: "114px",
      marginRight: "15px",
    },
    {
      id: 4,
      icon: icon5,
      text: "라이브영상",
      marginLeft: "5px",
      marginRight: "15px",
      width: "124px",
    },
    {
      id: 5,
      icon: icon6,
      text: "베팅규정",
      marginLeft: "5px",
      width: "108px",
      marginRight: "14px",
    },
  ];

  return (
    <div className="flex h-full cursor-pointer ml-6px">
      {items.map((item) => (
        <TabButton key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MainTabs;
