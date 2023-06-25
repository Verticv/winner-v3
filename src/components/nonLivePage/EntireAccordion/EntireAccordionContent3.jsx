import React from "react";

const EntireAccordionContent3 = ({ card }) => {
  return (
    <div
      style={{
        background: "#ffffff",
        borderColor: "#bbbbbb",
      }}
      className="flex items-center h-30px border-b "
    >
      <div
        style={{ borderColor: "#bbbbbb", width: "209px" }}
        className="flex items-center justify-between border-r ml-9px "
      >
        <p style={{ fontSize: "12px", color: "#444444" }} className="">
          {card.text}
        </p>
        <p
          style={{ fontSize: "12px", color: "#682aa7" }}
          className="text-12 mr-8px"
        >
          {card.text1}
        </p>
      </div>
      <div
        style={{ borderColor: "#bbbbbb", width: "208px" }}
        className="flex items-center justify-between border-r"
      >
        <p style={{ fontSize: "12px", color: "#444444" }} className="ml-10px">
          {card.text2}
        </p>
        <p
          style={{ fontSize: "12px", color: "#682aa7" }}
          className="text-12 mr-7px"
        >
          {card.text3}
        </p>
      </div>
      <div
        style={{ width: "211px" }}
        className="flex items-center justify-between"
      >
        <p style={{ fontSize: "12px", color: "#444444" }} className="ml-11px">
          {card.text4}
        </p>
        <p
          style={{ fontSize: "12px", color: "#682aa7" }}
          className="text-12 mr-9px"
        >
          {card.text5}
        </p>
      </div>
    </div>
  );
};

export default EntireAccordionContent3;
