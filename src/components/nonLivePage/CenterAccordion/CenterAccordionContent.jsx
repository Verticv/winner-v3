import React, { useState } from "react";
import icon from "../../../images/nonLivePage/CenterAccordion/star2.png";
import Up from "../../../images/nonLivePage/LeftAccordion/Card/Up.png";
import Dn from "../../../images/nonLivePage/LeftAccordion/Card/Dn.png";
import icon1 from "../../../images/nonLivePage/CenterAccordion/Icon1.png";
import activeStarIcon from "../../../images/nonLivePage/CenterAccordion/star_on2.png";

import { useDispatch } from "react-redux";
import { setBetSlipData, setLiveGameData } from "reducers/nonLive-reducer";
import arrowActive from "../../../images/nonLivePage/CenterAccordion/ArrowActive.png";

const CenterAccordionContent = ({ card, lastObject }) => {
  const dispatch = useDispatch();
  const [leftActive, setLeftActive] = useState(false);
  const [centerActive, setCenterActive] = useState(false);
  const [rightActive, setRightActive] = useState(false);
  const [lastItemActive, setLastItemActive] = useState(false);
  const [activeStar, setActiveStar] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const hoverStyle = {
    background: "linear-gradient(to top, #5423a0, #9d3bbb)",
    color: "#eeeeee",
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };
  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };
  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };

  //   <div
  //   style={{ ...defaultStyle, ...(isHovered ? hoverStyle : null) }}
  //   onMouseEnter={handleMouseEnter}
  //   onMouseLeave={handleMouseLeave}
  // >
  //   Hover me!
  // </div>
  return (
    <>
      <button
        style={{
          borderColor: "#cccccc",
        }}
        //   className={`flex items-center
        //    ${
        //     lastObject.text == "첼시" ? "" : "border-b"
        //   }
        //    h-31px  `}
        // >
        className={`flex items-center ${
          lastObject.id !== card.id ? "border-b h-31px" : "h-30px"
        }
        `}
      >
        <div
          className="items-center ml-6px mt-6px mb-8px"
          style={{ width: "23px" }}
        >
          <img
            src={activeStar ? activeStarIcon : icon}
            alt="icon"
            style={{
              marginTop: "1px",
              marginLeft: activeStar ? "-1px" : "",
            }}
            onClick={(e) => {
              e.stopPropagation();
              setActiveStar((prev) => !prev);
            }}
          />
        </div>
        <div
          onClick={() => {
            dispatch(
              setBetSlipData({
                data: card,
              })
            );
            setLeftActive((prev) => !prev);
          }}
          style={{
            borderColor: leftActive ? "#6227a5" : "#cccccc",
            width: "252px",
            height: "30px",
            fontFamily: "MalgunGothicRegular",
            background: leftActive
              ? `linear-gradient(to top, #5423a0, #9d3bbb)`
              : "",
            color: leftActive ? "#eeeeee" : "#444444",
            ...(isHovered ? hoverStyle : null),
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex items-center justify-between border-l border-r"
        >
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "-0.031em",
            }}
            className="ml-9px mt-10px mb-12px"
          >
            {card.team1}
          </p>

          <p
            style={{
              fontSize: "12px",
              color: card.score1ArrowUp
                ? "#f04281"
                : card.score1ArrowDown
                ? "#0072bc"
                : "",
              letterSpacing: "-0.031em",
            }}
            className="flex items-center mr-10px mt-10px mb-12px"
          >
            <span>
              {card.score1ArrowUp ? (
                <img
                  src={Up}
                  alt="Up"
                  className="mr-8px"
                  // className="ml-50px mt-11px mb-12px"
                />
              ) : card.score1ArrowDown ? (
                <img
                  src={Dn}
                  alt="Dn"
                  className="mr-2px"
                  // className="ml-50px mt-11px mb-12px"
                />
              ) : (
                ""
              )}
            </span>
            {card.score1 ? (
              card.score1
            ) : (
              <img src={icon1} alt="icon1" className="mr-4px mt-2px" />
            )}
          </p>
        </div>
        <div
          onClick={() => {
            dispatch(
              setBetSlipData({
                data: card,
              })
            );
            setCenterActive((prev) => !prev);
          }}
          style={{
            height: "100%",
            background: centerActive
              ? `linear-gradient(to top, #5423a0, #9d3bbb)`
              : "",
            color: centerActive ? "#eeeeee" : "#444444",
            ...(isHovered1 ? hoverStyle : null),
          }}
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
          className="flex items-center relative w-68px justify-center"
        >
          {card.score2ArrowUp ? (
            <img
              src={Up}
              alt="Up"
              className="-mr-6px mb-px absolute"
              style={{ right: "56px" }}
              //  className="ml-10px mt-11px mb-12px"
            />
          ) : card.score2ArrowDown ? (
            <img
              src={Dn}
              alt="Dn"
              className="-mr-6px mb-px absolute"
              style={{ right: "56px" }}
              //  className="ml-10px mt-11px mb-12px"
            />
          ) : (
            ""
          )}
          <p
            style={{
              fontSize: "12px",
              color: card.score1ArrowUp
                ? "#f04281"
                : card.score1ArrowDown
                ? "#0072bc"
                : "",
              letterSpacing: "-0.031em",
              width: "100%",
              textAlign: "center",
            }}
            className="mb-2px"
          >
            {card.score2 ? (
              card.score2
            ) : (
              <span className="flex justify-center">
                <img src={icon1} alt="icon1" className="mt-2px" />
              </span>
            )}
          </p>
        </div>
        <div
          onClick={() => {
            dispatch(
              setBetSlipData({
                data: card,
              })
            );
            setRightActive((prev) => !prev);
          }}
          style={{
            borderColor: rightActive ? "#6227a5" : "#cccccc",
            width: "252px",
            height: "30px",
            background: rightActive
              ? `linear-gradient(to top, #5423a0, #9d3bbb)`
              : "",
            color: rightActive ? "#eeeeee" : "#444444",
            ...(isHovered2 ? hoverStyle : null),
          }}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
          className="flex items-center justify-between border-l border-r"
        >
          <p
            style={{
              fontSize: "12px",
              color: card.score1ArrowUp
                ? "#0072bc"
                : card.score1ArrowDown
                ? "#f04281"
                : "",
              letterSpacing: "-0.031em",
            }}
            className="flex items-center ml-10px mt-10px mb-12px"
          >
            {card.score3 ? (
              card.score3
            ) : (
              <img src={icon1} alt="icon1" className="ml-4px mt-2px" />
            )}
            <span>
              {card.score3ArrowUp ? (
                <img
                  src={Up}
                  alt="Up"
                  className="ml-2px"
                  //  className="mr-104px mt-11px mb-12px"
                />
              ) : card.score3ArrowDown ? (
                <img
                  src={Dn}
                  alt="Dn"
                  className="ml-8px"
                  // className="mr-104px mt-11px mb-12px"
                />
              ) : (
                ""
              )}
            </span>
          </p>

          <p
            style={{
              fontSize: "12px",
              letterSpacing: "-0.031em",
            }}
            className=" mr-9px mt-8px mb-8px"
          >
            {card.team2}
          </p>
        </div>
        <div
          style={{
            width: "39px",
            height: "100%",
            borderRight: lastItemActive ? "1px solid #6227a5" : "",
            background: lastItemActive
              ? `linear-gradient(to top, #5423a0, #9d3bbb)`
              : "",
            color: lastItemActive ? "#eeeeee" : "#444444",
            ...(isHovered3 ? hoverStyle : null),
            borderBottomRightRadius: `${
              lastObject.id !== card.id ? "0px" : "6px"
            }`,
          }}
          onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3}
          className="flex items-center justify-center "
          onClick={() => {
            dispatch(setLiveGameData(card));
            setLastItemActive((prev) => !prev);
          }}
        >
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "-0.031em",
              marginRight: "1px",
              marginBottom: "2px",
            }}
          >
            {card.difference}
          </p>
          {lastItemActive ? (
            <img className="ml-px" src={arrowActive} alt="" />
          ) : (
            ""
          )}
        </div>
      </button>
    </>
  );
};

export default CenterAccordionContent;
