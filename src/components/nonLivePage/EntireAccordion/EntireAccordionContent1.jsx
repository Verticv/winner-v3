import React from "react";

const EntireAccordionContent1 = () => {
  return (
    <div
      style={{
        background: "#ffffff",
        borderColor: "#bbbbbb",
        width: "630px",
        borderBottomLeftRadius: "4px",
        borderBottomRightRadius: "4px",
      }}
      className="flex items-center h-30px "
    >
      <div
        style={{ borderColor: "#bbbbbb", width: "308px" }}
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
          아스널 (리저브)
        </p>
        <p
          style={{
            fontSize: "13px",
            color: "#682aa7",
            letterSpacing: "-0.031em",
          }}
          className="mr-9px font-malgun"
        >
          1.52
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
          리버플 (리저브)
        </p>
        <p
          style={{
            fontSize: "13px",
            color: "#682aa7",
            letterSpacing: "-0.031em",
          }}
          className="mr-9px font-malgun"
        >
          2.53
        </p>
      </div>
    </div>
  );
};

export default EntireAccordionContent1;
