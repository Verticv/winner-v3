import React from "react";

const EntireAccordionContent = ({ card }) => {
  return (
    <div
      style={{
        background: "#ffffff",
        width: "630px",
      }}
      className="flex items-center h-30px rounded-b-lg"
    >
      <div
        style={{ borderColor: "#bbbbbb", width: "203px" }}
        className="flex items-center justify-between border-r ml-8px h-30px"
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
            fontSize: "12px",
            color: "#682aa7",
            letterSpacing: "-0.031em",
          }}
          className="text-12 mr-9px font-malgun"
        >
          {card.text1}
        </p>
      </div>
      <div
        style={{ borderColor: "#bbbbbb", width: "210px" }}
        className="flex items-center justify-between border-r h-30px"
      >
        <p
          style={{
            fontSize: "12px",
            color: "#444444",
            letterSpacing: "-0.031em",
          }}
          className="ml-10px -mt-2px font-malgun"
        >
          {card.text2}
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "#682aa7",
            letterSpacing: "-0.031em",
          }}
          className="text-12  mr-9px font-malgun"
        >
          {card.text3}
        </p>
      </div>
      <div
        style={{ width: "209px" }}
        className="flex items-center justify-between"
      >
        <p
          style={{
            fontSize: "12px",
            color: "#444444",
            letterSpacing: "-0.031em",
          }}
          className="ml-8px font-malgun"
        >
          {card.text4}
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "#682aa7",
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
