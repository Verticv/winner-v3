import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setBetSlipData } from "reducers/nonLive-reducer";

const EntireAccordionContent1 = ({ card }) => {
  const dispatch = useDispatch();
  const [leftActive, setLeftActive] = useState(false);
  const [rightActive, setRightActive] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);

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
  return (
    <div
      style={{
        background: "#ffffff",
        borderColor: "#bbbbbb",
        width: "630px",
        borderBottomLeftRadius: "4px",
        borderBottomRightRadius: "4px",
      }}
      className="flex items-center h-30px "
    >
      <div
        style={{
          borderColor: "#bbbbbb",
          width: "316px",
          background: leftActive
            ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))"
            : "#ffffff",
          color: leftActive ? "#eeeeee" : "#444444",
          ...(isHovered ? hoverStyle : null),
          borderBottomLeftRadius: "4px",
        }}
        className="flex items-center justify-between border-r  h-30px cursor-pointer"
        onClick={() => {
          dispatch(
            setBetSlipData({
              data: card,
            })
          );
          setLeftActive((prev) => !prev);
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p
          style={{
            fontSize: "12px",
            letterSpacing: "-0.031em",
          }}
          className="font-malgun -mt-2px ml-8px"
        >
          {card.team1}
        </p>
        <p
          style={{
            fontSize: "13px",
            color: leftActive || isHovered ? "#eeeeee" : "#682aa7",
            letterSpacing: "-0.031em",
          }}
          className="mr-9px font-malgun"
        >
          {card.score1}
        </p>
      </div>
      <div
        style={{
          borderColor: "#bbbbbb",
          width: "314px",
          height: "100%",
          background: rightActive
            ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))"
            : "#ffffff",
          color: rightActive ? "#eeeeee" : "#444444",
          ...(isHovered1 ? hoverStyle : null),
          borderBottomRightRadius: "4px",
        }}
        className="flex items-center justify-between cursor-pointer"
        onClick={() => {
          dispatch(
            setBetSlipData({
              data: card,
            })
          );
          setRightActive((prev) => !prev);
        }}
        onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave1}
      >
        <p
          style={{
            fontSize: "12px",
            letterSpacing: "-0.031em",
          }}
          className="ml-8px mb-px -mt-2px font-malgun"
        >
          {card.team2}
        </p>
        <p
          style={{
            fontSize: "13px",
            color: rightActive || isHovered1 ? "#eeeeee" : "#682aa7",
            letterSpacing: "-0.031em",
          }}
          className="mr-9px font-malgun"
        >
          {card.score3}
        </p>
      </div>
    </div>
  );
};

export default EntireAccordionContent1;
