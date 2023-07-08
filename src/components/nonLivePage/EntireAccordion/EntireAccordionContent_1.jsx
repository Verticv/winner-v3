import React from "react";

const EntireAccordionContent_1 = ({ card, lastObject }) => {
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
        style={{ borderColor: "#cccccc", width: "307px" }}
        className="flex items-center justify-between border-r ml-9px h-30px"
      >
        <p
          style={{
            fontSize: "12px",
            color: "#444444",
            letterSpacing: "-0.031em",
            marginBottom: `${card.marginBottom}`,
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
          className="mr-9px mb-2px font-malgun"
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
          className="ml-8px mb-2px font-malgun"
        >
          {card.text2}
        </p>
        <p
          style={{
            fontSize: "13px",
            color: "#682aa7",
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
