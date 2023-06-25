import React from "react";

const EntireAccordionContent = ({ card }) => {
  return (
    <div
      style={{
        background: "#ffffff",
      }}
      className="flex items-center h-30px rounded-b-lg"
    >
      <div
        style={{ borderColor: "#bbbbbb", width: "210px" }}
        className="flex items-center justify-between border-r ml-8px "
      >
        <p style={{ fontSize: "12px", color: "#444444" }} className="">
          {card.text}
        </p>
        <p
          style={{ fontSize: "12px", color: "#682aa7" }}
          className="text-12 mr-9px"
        >
          {card.text1}
        </p>
      </div>
      <div
        style={{ borderColor: "#bbbbbb", width: "209px" }}
        className="flex items-center justify-between border-r"
      >
        <p style={{ fontSize: "12px", color: "#444444" }} className="ml-9px">
          {card.text2}
        </p>
        <p
          style={{ fontSize: "12px", color: "#682aa7" }}
          className="text-12 mr-9px"
        >
          {card.text3}
        </p>
      </div>
      <div
        style={{ width: "209px" }}
        className="flex items-center justify-between"
      >
        <p style={{ fontSize: "12px", color: "#444444" }} className="ml-8px">
          {card.text4}
        </p>
        <p
          style={{ fontSize: "12px", color: "#682aa7" }}
          className="text-12 mr-7px"
        >
          {card.text5}
        </p>
      </div>
    </div>
  );
};

export default EntireAccordionContent;
