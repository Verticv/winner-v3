import React from "react";

const EntireAccordionContent1 = ({ card }) => {
  return (
    <div
      style={{
        background: "#ffffff",
        borderColor: "#bbbbbb",
      }}
      className="flex items-center h-30px border-b"
    >
      <div
        style={{ borderColor: "#bbbbbb", width: "315px" }}
        className="flex items-center justify-between border-r ml-8px "
      >
        <p style={{ fontSize: "12px", color: "#444444" }} className="">
          {card.text}
        </p>
        <p style={{ fontSize: "13px", color: "#682aa7" }} className="mr-9px">
          {card.text1}
        </p>
      </div>
      <div
        style={{ borderColor: "#bbbbbb", width: "314px" }}
        className="flex items-center justify-between"
      >
        <p style={{ fontSize: "12px", color: "#444444" }} className="ml-8px">
          {card.text2}
        </p>
        <p style={{ fontSize: "13px", color: "#682aa7" }} className="mr-9px">
          {card.text3}
        </p>
      </div>
    </div>
  );
};

export default EntireAccordionContent1;
