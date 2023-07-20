import React, { useState } from "react";

const EntireAccordionContent = ({ card }) => {
  const [leftActive, setLeftActive] = useState(false);
  const [centerActive, setCenterActive] = useState(false);
  const [rightActive, setRightActive] = useState(false);
  return (
    <div
      style={{
        background: "#ffffff",
        width: "630px",
        borderBottomLeftRadius: "4px",
        borderBottomRightRadius: "4px",
      }}
      className="flex items-center h-30px"
    >
      <div
        style={{
          borderColor: "#bbbbbb",
          width: "203px",
          background: leftActive
            ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))"
            : "#ffffff",
          color: leftActive ? "#eeeeee" : "#444444",
          borderBottomLeftRadius: "4px",
        }}
        className="flex items-center justify-between border-r  h-30px"
        onClick={() => setLeftActive((prev) => !prev)}
      >
        <p
          style={{
            fontSize: "12px",
            letterSpacing: "-0.031em",
          }}
          className="font-malgun ml-8px"
        >
          {card.text}
        </p>
        <p
          style={{
            fontSize: "12px",
            color: leftActive ? "#eeeeee" : "#682aa7",
            letterSpacing: "-0.031em",
          }}
          className="text-12 mr-9px font-malgun"
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
        }}
        className="flex items-center justify-between border-r h-30px"
        onClick={() => setCenterActive((prev) => !prev)}
      >
        <p
          style={{
            fontSize: "12px",
            letterSpacing: "-0.031em",
          }}
          className="ml-10px -mt-2px font-malgun"
        >
          {card.text2}
        </p>
        <p
          style={{
            fontSize: "12px",
            color: centerActive ? "#eeeeee" : "#682aa7",
            letterSpacing: "-0.031em",
          }}
          className="text-12  mr-9px font-malgun"
        >
          {card.text3}
        </p>
      </div>
      <div
        style={{
          width: "219px",
          height: "100%",
          background: rightActive
            ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))"
            : "#ffffff",
          color: rightActive ? "#eeeeee" : "#444444",
          borderBottomRightRadius: "4px",
        }}
        className="flex items-center justify-between"
        onClick={() => setRightActive((prev) => !prev)}
      >
        <p
          style={{
            fontSize: "12px",
            letterSpacing: "-0.031em",
          }}
          className="ml-8px font-malgun"
        >
          {card.text4}
        </p>
        <p
          style={{
            fontSize: "12px",
            color: rightActive ? "#eeeeee" : "#682aa7",
            letterSpacing: "-0.031em",
          }}
          className="text-12 mr-9px font-malgun"
        >
          {card.text5}
        </p>
      </div>
    </div>
  );
};

export default EntireAccordionContent;
