import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setBetSlipData } from "reducers/nonLive-reducer";

const EntireAccordionContent_1 = ({ card, lastObject }) => {
  const dispatch = useDispatch();
  const [leftActive, setLeftActive] = useState(false);
  const [rightActive, setRightActive] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);

  const hoverStyle = {
    background: "linear-gradient(to top, #5423a0, #9d3bbb)",
    color: "#fff",
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
        borderColor: "#cccccc",
        width: "630px",
        borderBottomRightRadius: `${card.id === 2 ? "4px" : "0px"}`,
        borderBottomLeftRadius: `${card.id === 2 ? "4px" : "0px"}`,
      }}
      className={`flex items-center
     ${lastObject.id !== card.id ? "border-b h-31px" : "h-30px"}
      `}
    >
      <div
        style={{
          borderColor: leftActive ? "#6227a5" : "#cccccc",
          width: "316px",
          background: leftActive ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))" : "#ffffff",
          color: leftActive ? "#fff" : "#444444",
          ...(isHovered ? hoverStyle : null),
          borderBottomLeftRadius: `${card.id === 2 ? "3px" : "0px"}`,
        }}
        className="flex items-center justify-between border-r h-30px cursor-pointer"
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
            marginBottom: `${card.marginBottom}`,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          className="font-malgun ml-9px"
        >
          {card.team1}
        </p>
        <p
          style={{
            fontSize: "13px",
            color: leftActive || isHovered ? "#fff" : "#111111",
            letterSpacing: "-0.031em",
          }}
          className="mr-9px mb-2px font-malgun font-semibold"
        >
          {card.score1}
        </p>
      </div>
      <div
        style={{
          borderColor: "#cccccc",
          width: "314px",
          height: "100%",
          background: rightActive ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))" : "#ffffff",
          color: rightActive ? "#fff" : "#444444",
          ...(isHovered1 ? hoverStyle : null),
          borderBottomRightRadius: `${card.id === 2 ? "3px" : "0px"}`,
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
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth:'260px'
          }}
          className="ml-8px mb-2px font-malgun"
        >
          {card.team2}
        </p>
        <p
          style={{
            fontSize: "13px",
            color: rightActive || isHovered1 ? "#fff" : "#111111",
            letterSpacing: "-0.031em",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          className="mr-9px mb-2px font-malgun font-semibold"
        >
          {card.score3}
        </p>
      </div>
    </div>
  );
};

export default EntireAccordionContent_1;
