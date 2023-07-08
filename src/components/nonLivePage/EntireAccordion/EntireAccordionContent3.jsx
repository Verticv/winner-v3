import React from "react";

const EntireAccordionContent3 = ({ card }) => {
  return (
    <div
      style={{
        background: "#ffffff",
        borderColor: "#bbbbbb",
        width: "630px",
        borderBottomRightRadius: `${card.id !== 0 ? "4px" : "0px"}`,
        borderBottomLeftRadius: `${card.id !== 0 ? "4px" : "0px"}`,
      }}
      className="flex items-center h-31px border-t"
    >
      <div
        style={{ borderColor: "#bbbbbb", width: "201px" }}
        className="flex items-center justify-between border-r ml-9px h-30px"
      >
        <p
          style={{
            fontSize: "12px",
            color: "#444444",
            letterSpacing: "-0.031em",
          }}
          className="-mt-2px font-malgun"
        >
          {card.text}
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "#682aa7",
            letterSpacing: "-0.031em",
          }}
          className="mr-8px mb-2px font-malgun"
        >
          {card.text1}
        </p>
      </div>
      <div
        style={{ borderColor: "#bbbbbb", width: "209px" }}
        className="flex items-center justify-between border-r h-30px"
      >
        <p
          style={{
            fontSize: "12px",
            color: "#444444",
            letterSpacing: "-0.031em",
          }}
          className="ml-10px mb-2px font-malgun"
        >
          {card.text2}
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "#682aa7",
            letterSpacing: "-0.031em",
          }}
          className=" mr-7px mb-2px font-malgun"
        >
          {card.text3}
        </p>
      </div>
      <div
        style={{ width: "211px" }}
        className="flex items-center justify-between"
      >
        <p
          style={{
            fontSize: "12px",
            color: "#444444",
            letterSpacing: "-0.031em",
          }}
          className="ml-11px mb-2px font-malgun"
        >
          {card.text4}
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "#682aa7",
            letterSpacing: "-0.031em",
          }}
          className="font-malgun mb-2px mr-9px"
        >
          {card.text5}
        </p>
      </div>
    </div>
  );
};

export default EntireAccordionContent3;
