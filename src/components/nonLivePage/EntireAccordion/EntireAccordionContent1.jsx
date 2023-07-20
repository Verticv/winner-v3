import React, { useState } from "react";

const EntireAccordionContent1 = () => {
  const [leftActive, setLeftActive] = useState(false);
  const [rightActive, setRightActive] = useState(false);
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
        style={{
          borderColor: "#bbbbbb",
          width: "316px",
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
          아스널 (리저브)
        </p>
        <p
          style={{
            fontSize: "13px",
            color: leftActive ? "#eeeeee" : "#682aa7",
            letterSpacing: "-0.031em",
          }}
          className="mr-9px font-malgun"
        >
          1.52
        </p>
      </div>
      <div
        style={{
          borderColor: "#bbbbbb",
          width: "314px",
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
          className="ml-8px mb-px font-malgun"
        >
          리버플 (리저브)
        </p>
        <p
          style={{
            fontSize: "13px",
            color: rightActive ? "#eeeeee" : "#682aa7",
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
