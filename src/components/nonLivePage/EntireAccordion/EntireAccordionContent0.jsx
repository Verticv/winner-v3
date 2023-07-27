import React, { useState } from "react";

const EntireAccordionContent0 = ({ card }) => {
  const [leftActive, setLeftActive] = useState(false);
  const [centerActive, setCenterActive] = useState(false);
  const [rightActive, setRightActive] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

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
  return (
    <div
      style={{
        background: "#ffffff",
        width: "630px",
        borderBottomLeftRadius: "4px",
        borderBottomRightRadius: "4px",
      }}
      className="flex items-center h-30px "
    >
      <div
        style={{
          borderColor: "#bbbbbb",
          width: "211px",
          background: leftActive
            ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))"
            : "#ffffff",
          color: leftActive ? "#eeeeee" : "#444444",
          ...(isHovered ? hoverStyle : null),
          borderBottomLeftRadius: "4px",
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
          }}
          className="font-malgun mb-2px ml-8px"
        >
          {card.text}
        </p>
        <p
          style={{
            fontSize: "12px",
            color: leftActive || isHovered ? "#eeeeee" : "#682aa7",
            letterSpacing: "-0.031em",
          }}
          className="text-12 mb-2px mr-9px font-malgun"
        >
          {card.text1}
        </p>
      </div>
      <div
        style={{
          borderColor: "#bbbbbb",
          width: "210px",
          background: centerActive
            ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))"
            : "#ffffff",
          color: centerActive ? "#eeeeee" : "#444444",
          ...(isHovered1 ? hoverStyle : null),
        }}
        className="flex items-center justify-between border-r h-30px"
        onClick={() => setCenterActive((prev) => !prev)}
        onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave1}
      >
        <p
          style={{
            fontSize: "12px",
            letterSpacing: "-0.031em",
          }}
          className="ml-8px -mt-2px font-malgun"
        >
          {card.text2}
        </p>
        <p
          style={{
            fontSize: "12px",
            color: centerActive || isHovered1 ? "#eeeeee" : "#682aa7",
            letterSpacing: "-0.031em",
          }}
          className="text-12 mb-2px  mr-9px font-malgun"
        >
          {card.text3}
        </p>
      </div>
      <div
        style={{
          width: "209px",
          height: "100%",
          background: rightActive
            ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))"
            : "#ffffff",
          color: rightActive ? "#eeeeee" : "#444444",
          ...(isHovered2 ? hoverStyle : null),
          borderBottomRightRadius: "4px",
        }}
        className="flex items-center justify-between"
        onClick={() => setRightActive((prev) => !prev)}
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}
      >
        <p
          style={{
            fontSize: "12px",
            letterSpacing: "-0.031em",
          }}
          className="ml-9px mb-2px font-malgun"
        >
          {card.text4}
        </p>
        <p
          style={{
            fontSize: "12px",
            color: rightActive || isHovered2 ? "#eeeeee" : "#682aa7",
            letterSpacing: "-0.031em",
          }}
          className="text-12 mb-2px mr-9px font-malgun"
        >
          {card.text5}
        </p>
      </div>
    </div>
  );
};

export default EntireAccordionContent0;
