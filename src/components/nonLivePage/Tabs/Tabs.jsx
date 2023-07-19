import React from "react";
import icon1 from "../../../images/nonLivePage/Tabs/Icon1.png";
import icon1Active from "../../../images/nonLivePage/Tabs/Icon1_on.png";
import icon2Active from "../../../images/nonLivePage/Tabs/IconsOn/Icon2.png";
import icon3Active from "../../../images/nonLivePage/Tabs/IconsOn/Icon3.png";
import icon4Active from "../../../images/nonLivePage/Tabs/IconsOn/Icon4.png";
import icon5Active from "../../../images/nonLivePage/Tabs/IconsOn/Icon5.png";
import icon6Active from "../../../images/nonLivePage/Tabs/IconsOn/Icon6.png";
import icon7Active from "../../../images/nonLivePage/Tabs/IconsOn/Icon7.png";
import icon8Active from "../../../images/nonLivePage/Tabs/IconsOn/Icon8.png";
import icon9Active from "../../../images/nonLivePage/Tabs/IconsOn/Icon9.png";
import icon10Active from "../../../images/nonLivePage/Tabs/IconsOn/Icon10.png";
import arrow from "../../../images/nonLivePage/Tabs/Arrow.png";
import rArrow from "../../../images/nonLivePage/Tabs/RArrow.png";
import icon2 from "../../../images/nonLivePage/Tabs/Icon2.png";
import icon3 from "../../../images/nonLivePage/Tabs/Icon3.png";
import icon4 from "../../../images/nonLivePage/Tabs/Icon4.png";
import icon5 from "../../../images/nonLivePage/Tabs/Icon5.png";
import icon6 from "../../../images/nonLivePage/Tabs/Icon6.png";
import icon7 from "../../../images/nonLivePage/Tabs/Icon10.png";
import icon8 from "../../../images/nonLivePage/Tabs/Icon9.png";
import icon9 from "../../../images/nonLivePage/Tabs/Icon8.png";
import icon10 from "../../../images/nonLivePage/Tabs/Icon7.png";

const tabs = [
  {
    id: 0,
    icon: icon1,
    activeIcon: icon1Active,
    name: "전체",
    num: "854",
    width: "105px",
  },
  {
    id: 1,
    icon: icon2,
    activeIcon: icon2Active,
    name: "축구",
    num: "567",
    width: "107px",
  },
  {
    id: 2,
    icon: icon3,
    activeIcon: icon3Active,
    name: "농구",
    num: "227",
    width: "107px",
  },
  {
    id: 3,
    icon: icon4,
    activeIcon: icon4Active,
    name: "야구",
    num: "407",
    width: "107px",
  },
  {
    id: 4,
    icon: icon5,
    activeIcon: icon5Active,
    name: "배구",
    num: "0",
    width: "94px",
  },
  {
    id: 5,
    icon: icon6,
    activeIcon: icon6Active,
    name: "테니스",
    num: "0",
    width: "106px",
  },
  {
    id: 6,
    icon: icon7,
    activeIcon: icon7Active,
    name: "배드민턴",
    num: "0",
    width: "118px",
  },
  {
    id: 7,
    icon: icon8,
    activeIcon: icon8Active,
    name: "하키",
    num: "0",
    width: "94px",
  },
  {
    id: 8,
    icon: icon9,
    activeIcon: icon9Active,
    name: "미식축구",
    num: "0",
    width: "118px",
  },
  {
    id: 9,
    icon: icon10,
    activeIcon: icon10Active,
    name: "격투기",
    num: "0",
    width: "106px",
  },
];

const Tabs = ({ active, setActive }) => {
  // eslint-disable-next-line no-unused-vars
  // const [active, setActive] = useState(0);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div style={{ display: "flex", position: "relative", marginTop: "10px" }}>
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
          width: "585px",
          marginLeft: "1px",
          //   position: "relative",
        }}
      >
        <div style={{ display: "flex", height: "48px" }}>
          {tabs.map((tab) => (
            <div
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
            >
              <button
                onClick={() => setActive(tab.id)}
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
                }}
              >
                <img
                  src={active === tab.id ? tab.activeIcon : tab.icon}
                  alt="tab"
                  style={{
                    marginRight: "4px",
                    marginLeft: "11px",
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
                    marginRight: "3px",
                    marginBottom: "2px",
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
                    // marginBottom: "1px",
                  }}
                >
                  <p
                    style={{
                      display: "inline-block",
                      height: "17px",
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
                  right: "38px",
                  //   boxShadow: "rgb(25, 25, 28) 2.4875px 0px 7px 4px",
                  boxShadow: "rgb(120,47,173) 4.4875px 0px 15px 2px",
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
        }}
        onClick={slideRight}
      >
        <img src={rArrow} alt="" />
      </button>
    </div>
  );
};

export default Tabs;
