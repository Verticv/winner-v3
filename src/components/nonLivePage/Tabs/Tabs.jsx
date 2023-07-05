import React, { useState } from "react";
import icon1 from "../../../images/nonLivePage/Tabs/Icon1.png";
import arrow from "../../../images/nonLivePage/Tabs/Arrow.png";
import rArrow from "../../../images/nonLivePage/Tabs/RArrow.png";

const tabs = [
  {
    id: 0,
    icon: icon1,
    name: "전체",
    num: "854",
  },
  {
    id: 1,
    icon: icon1,
    name: "전체",
    num: "854",
  },
  {
    id: 2,
    icon: icon1,
    name: "전체",
    num: "854",
  },
  {
    id: 3,
    icon: icon1,
    name: "전체",
    num: "854",
  },
  {
    id: 4,
    icon: icon1,
    name: "전체",
    num: "854",
  },
  {
    id: 5,
    icon: icon1,
    name: "전체",
    num: "854",
  },
  {
    id: 6,
    icon: icon1,
    name: "전체",
    num: "854",
  },
];

const Tabs = () => {
  // eslint-disable-next-line no-unused-vars
  const [active, setActive] = useState(0);
  return (
    <div style={{ display: "flex", position: "relative", marginTop: "10px" }}>
      <div
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
      >
        <img src={arrow} alt="" />
      </div>
      <div
        style={{
          overflowX: "auto",
          whiteSpace: "nowrap",
          width: "585px",
          //   position: "relative",
        }}
      >
        <div style={{ display: "flex", height: "48px" }}>
          {tabs.map((tab) => (
            <div
              style={{
                background: `${
                  active === tab.id
                    ? "linear-gradient(to top, #4f3a7a, #cb78e6 100%)"
                    : "linear-gradient(to top, #4f3a7a, #a05bf6 50%, #f0d3ff 100%)"
                }`,
                width: "105px",
                height: "44px",
                padding: "1px",
                borderRadius: "6px",
                marginRight: "2px",
                boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.6)",
                flexShrink: 0,
              }}
            >
              <button
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
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={tab.icon}
                  alt="tab"
                  style={{
                    marginRight: "5px",
                  }}
                />
                <span
                  style={{
                    color: `${active === tab.id ? "#fff" : "#2d2834"}`,
                    fontFamily: "MalgunGothicBold",
                    fontSize: "13px",
                    marginRight: "4px",
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
                    padding: "0 4px",
                    background: "#421959",
                    borderRadius: "6px",
                  }}
                >
                  <span>{tab.num}</span>
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
      <div
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
      >
        <img src={rArrow} alt="" />
      </div>
    </div>
  );
};

export default Tabs;
