import React, { useState } from "react";

const EntireAccordionContent_1 = ({ card, lastObject }) => {
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
          borderColor: "#cccccc",
          width: "316px",
          background: leftActive
            ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))"
            : "#ffffff",
          color: leftActive ? "#eeeeee" : "#444444",
          ...(isHovered ? hoverStyle : null),
          borderBottomLeftRadius: `${card.id === 2 ? "4px" : "0px"}`,
        }}
        className="flex items-center justify-between border-r h-30px"
        onClick={() => setLeftActive((prev) => !prev)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p
          style={{
            fontSize: "12px",
            letterSpacing: "-0.031em",
            marginBottom: `${card.marginBottom}`,
          }}
          className="font-malgun ml-9px"
        >
          {card.text}
        </p>
        <p
          style={{
            fontSize: "13px",
            color: leftActive || isHovered ? "#eeeeee" : "#682aa7",
            letterSpacing: "-0.031em",
          }}
          className="mr-9px mb-2px font-malgun"
        >
          {card.text1}
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
          borderBottomRightRadius: `${card.id === 2 ? "4px" : "0px"}`,
        }}
        className="flex items-center justify-between"
        onClick={() => setRightActive((prev) => !prev)}
        onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave1}
      >
        <p
          style={{
            fontSize: "12px",
            letterSpacing: "-0.031em",
          }}
          className="ml-8px mb-2px font-malgun"
        >
          {card.text2}
        </p>
        <p
          style={{
            fontSize: "13px",
            color: rightActive || isHovered1 ? "#eeeeee" : "#682aa7",
            letterSpacing: "-0.031em",
          }}
          className="mr-9px mb-2px font-malgun"
        >
          {card.text3}
        </p>
      </div>
    </div>
  );
};

export default EntireAccordionContent_1;
