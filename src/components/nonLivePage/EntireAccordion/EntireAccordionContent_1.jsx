import React from "react";

const EntireAccordionContent_1 = ({ card }) => {
  return (
    <div
      style={{
        background: "#ffffff",
        borderColor: "#bbbbbb",
        width: "630px",
      }}
      className="flex items-center h-30px border-b"
    >
      <div
        style={{ borderColor: "#bbbbbb", width: "308px" }}
        className="flex items-center justify-between border-r ml-9px h-30px"
      >
        <p
          style={{
            fontSize: "12px",
            color: "#444444",
            letterSpacing: "-0.031em",
          }}
          className="font-malgun"
        >
          {card.text}
        </p>
        <p
          style={{
            fontSize: "13px",
            color: "#682aa7",
            letterSpacing: "-0.031em",
          }}
          className="mr-9px font-malgun"
        >
          {card.text1}
        </p>
      </div>
      <div
        style={{ borderColor: "#bbbbbb", width: "314px" }}
        className="flex items-center justify-between"
      >
        <p
          style={{
            fontSize: "12px",
            color: "#444444",
            letterSpacing: "-0.031em",
          }}
          className="ml-8px mb-px font-malgun"
        >
          {card.text2}
        </p>
        <p
          style={{
            fontSize: "13px",
            color: "#682aa7",
            letterSpacing: "-0.031em",
          }}
          className="mr-9px font-malgun"
        >
          {card.text3}
        </p>
      </div>
    </div>
  );
};

export default EntireAccordionContent_1;
