import React from "react";
import icon1 from "../../../images/nonLivePage/Tabs/Icon1.png";
import icon1Active from "../../../images/nonLivePage/Tabs/Icon1_on.png";
import icon2Active from "../../../images/nonLivePage/Tabs/IconsOn/Icon2.png";
import icon3Active from "../../../images/nonLivePage/Tabs/IconsOn/Icon3.png";
import icon4Active from "../../../images/nonLivePage/Tabs/IconsOn/Icon4.png";
import icon5Active from "../../../images/nonLivePage/Tabs/IconsOn/Icon5.png";
import icon6Active from "../../../images/nonLivePage/Tabs/IconsOn/Icon6.png";
import icon10Active from "../../../images/nonLivePage/Tabs/IconsOn/Icon7.png";
import icon9Active from "../../../images/nonLivePage/Tabs/IconsOn/Icon8.png";
import icon8Active from "../../../images/nonLivePage/Tabs/IconsOn/Icon9.png";
import icon7Active from "../../../images/nonLivePage/Tabs/IconsOn/Icon10.png";
import arrow from "../../../images/nonLivePage/Tabs/Arrow.png";
import rArrow from "../../../images/nonLivePage/Tabs/RArrow.png";
import icon2 from "../../../images/nonLivePage/Tabs/Icon2.png";
import icon3 from "../../../images/nonLivePage/Tabs/Icon3.png";
import icon4 from "../../../images/nonLivePage/Tabs/Icon4.png";
import icon5 from "../../../images/nonLivePage/Tabs/Icon5.png";
import icon6 from "../../../images/nonLivePage/Tabs/Icon6.png";
import icon7 from "../../../images/nonLivePage/Tabs/Icon7.png";
import icon8 from "../../../images/nonLivePage/Tabs/Icon8.png";
import icon9 from "../../../images/nonLivePage/Tabs/Icon9.png";
import icon10 from "../../../images/nonLivePage/Tabs/Icon10.png";
import horizontalsScroll from "./horizontalsScroll.js";
// import { ta } from "date-fns/locale";

const tabs = [
  {
    id: 0,
    icon: icon1,
    marginLeftIcon: "11px",
    activeIcon: icon1Active,
    name: "전체",
    num: "854",
    marginRight: "3px",
    width: "105px",
  },
  {
    id: 1,
    icon: icon2,
    marginLeftIcon: "11px",
    activeIcon: icon2Active,
    name: "축구",
    marginLeft: "-1px",
    num: "567",
    marginRight: "4px",
    width: "107px",
  },
  {
    id: 2,
    icon: icon3,
    marginLeftIcon: "12px",
    activeIcon: icon3Active,
    name: "농구",
    marginLeft: "-1px",
    num: "227",
    marginRight: "3px",
    width: "107px",
  },
  {
    id: 3,
    icon: icon4,
    marginLeftIcon: "12px",
    activeIcon: icon4Active,
    name: "야구",
    marginLeft: "-1px",
    num: "407",
    marginRight: "3px",
    width: "107px",
  },
  {
    id: 4,
    icon: icon5,
    marginLeftIcon: "11px",
    activeIcon: icon5Active,
    name: "배구",
    marginLeft: "-1px",
    num: "0",
    marginRight: "3px",
    width: "94px",
  },
  {
    id: 5,
    icon: icon6,
    marginLeftIcon: "11px",
    activeIcon: icon6Active,
    name: "테니스",
    marginLeft: "-1px",
    num: "0",
    marginRight: "3px",
    width: "106px",
  },
  {
    id: 6,
    icon: icon7,
    marginBottom: "1px",
    marginLeftIcon: "11px",
    activeIcon: icon7Active,
    name: "배드민턴",
    marginLeft: "-2px",
    num: "0",
    marginRight: "2px",
    width: "118px",
  },
  {
    id: 7,
    icon: icon8,
    marginBottom: "1px",
    marginLeftIcon: "11px",
    activeIcon: icon8Active,
    name: "하키",
    num: "0",
    marginRight: "3px",
    width: "94px",
  },
  {
    id: 8,
    icon: icon9,
    marginBottom: "1px",
    marginLeftIcon: "11px",
    activeIcon: icon9Active,
    name: "미식축구",
    num: "0",
    marginRight: "2px",
    width: "118px",
  },
  {
    id: 9,
    icon: icon10,
    marginBottom: "1px",
    marginLeftIcon: "12px",
    activeIcon: icon10Active,
    name: "격투기",
    num: "0",
    marginRight: "3px",
    width: "106px",
  },
];

const Tabs = ({ active, setActive }) => {
  // eslint-disable-next-line no-unused-vars
  // const [active, setActive] = useState(0);

  // const setActiveTab = ({ index, item }) => {
  //   horizontalsScroll(tabs, "t-sub", "scroll-wrapper", index);
  //   //setSelectedSection(item.section)
  //   setActive(item.id);
  // };

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 100;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 100;
  };
  const slideRight1 = (tab) => {
    setActive(tab.id);
    horizontalsScroll(tabs, "tab-", "slider", tab.id);
  };
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        marginTop: "10px",
        width: "640px",
        marginLeft: "1px",
      }}
    >
      <button
        className="leftArrow"
        style={{
          background: "#edd9f2",
          width: "25px",
          height: "44px",
          borderRadius: "6px",
          boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "2px",
        }}
        onClick={slideLeft}
      >
        <img className="mr-px" src={arrow} alt="img" />
      </button>
      <div
        id="slider"
        style={{
          overflowX: "auto",
          whiteSpace: "nowrap",
          width: "591px",
          marginLeft: "1px",
          //   position: "relative",
        }}
      >
        <div style={{ display: "flex", height: "48px" }} id="scroll-wrapper">
          {tabs.map((tab, index) => (
            <div
              id={`tab-${tab.id}`}
              style={{
                background: `${
                  active === tab.id
                    ? "linear-gradient(to top, #4f3a7a, #a05bf6 50%, #cb78e6 100%)"
                    : "linear-gradient(to top, #4f3a7a, #a05bf6 50%, #f0d3ff 100%)"
                }`,
                width: `${tab.width}`,
                height: "44px",
                padding: "1px",
                borderRadius: "6px",
                marginRight: "2px",
                boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.6)",
                flexShrink: 0,
              }}
              // onClick={slideRight1}
            >
              <button
                id="slider1"
                // onPointerUp={() => {
                //   setActiveTab({ index, tab });
                // }}
                onClick={() => {
                  // setActive(tab.id);
                  slideRight1(tab);
                }}
                // id={`t-sub${index}`}
                style={{
                  background: `${
                    active === tab.id
                      ? "linear-gradient(to top, #491f9c, #9e3cbc 100%)"
                      : "linear-gradient(to top, #ccc4ff, #ffd9f5 100%)"
                  }`,
                  width: "100%",
                  height: "100%",
                  borderRadius: "5px",
                  display: "flex",
                  // justifyContent: "center",
                  alignItems: "center",
                  overflowX: "auto",
                  whiteSpace: "nowrap",
                }}
              >
                <img
                  src={active === tab.id ? tab.activeIcon : tab.icon}
                  alt="tab"
                  style={{
                    marginRight: "4px",
                    marginLeft: `${tab.marginLeftIcon}`,
                    marginBottom: `${tab.marginBottom}`,
                    // webkitFilter: 'drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.5))',
                    filter:
                      active === tab.id
                        ? "drop-shadow(1px 1px 3px #d478ff)"
                        : "",
                  }}
                />
                <span
                  style={{
                    color: `${active === tab.id ? "#fff" : "#2d2834"}`,
                    fontFamily: "MalgunGothicBold",
                    fontSize: "13px",
                    marginRight: `${tab.marginRight}`,
                    marginBottom: "2px",
                    marginLeft: `${tab.marginLeft}`,
                  }}
                >
                  {tab.name}
                </span>
                <div
                  style={{
                    fontFamily: "MalgunGothicRegular",
                    color: "#fff",
                    fontSize: "12px",
                    padding: "0 5px",
                    background: `${active !== tab.id ? "#73677d" : "#421959"}`,
                    borderRadius: "6px",
                    height: "17px",
                    marginBottom: "1px",
                  }}
                >
                  <p
                    style={{
                      marginTop: "-1px",
                    }}
                  >
                    {tab.num}
                  </p>
                </div>
              </button>
              <div
                className="shadow1"
                style={{
                  height: "47px",
                  width: "0",
                  position: "absolute",
                  //   background: "#191920",
                  top: "-3px",
                  right: "23px",
                  //   boxShadow: "rgb(25, 25, 28) 2.4875px 0px 7px 4px",
                  boxShadow: "rgb(120,47,173) 4.4875px 0px 15px 2px",
                  // boxShadow: "rgb(120, 47, 173) 0.4875px -3px 9px 5px",

                  transform: "rotate(180deg)",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="rightArrow"
        style={{
          background: "#edd9f2",
          width: "25px",
          height: "44px",
          borderRadius: "6px",
          boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "10",
          marginLeft: "-4px",
        }}
        onClick={slideRight}
      >
        <img src={rArrow} alt="" />
      </button>
    </div>
  );
};

export default Tabs;
