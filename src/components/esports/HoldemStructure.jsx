import React from "react";
import img from "../../images/esports/guide_02_01.png";

const HoldemStructure = () => {
  return (
    // <div style={{borderRadius:"1em"}} className="w-full bg-gray-fafafa border border-gray-dddddd p-30px space-y-30px">
    <>
      <div
        className="w-full overflow-hidden rounded-10px p-px"
        style={{
          background: "linear-gradient(to top, #4f3a7a, #f0d3ff)",
          boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div
          style={{
            backgroundColor: "#dfdbfa",
            paddingRight: "60px",
            paddingLeft: "60px",
            paddingTop: "60px",
            paddingBottom: "60px",
          }}
          className="w-full bg-gray-323232 rounded-10px overflow-hidden justify-center items-center"
        >
          <img className="object-contain" src={img} alt="img" />
        </div>
      </div>
    </>
  );
};

export default HoldemStructure;
