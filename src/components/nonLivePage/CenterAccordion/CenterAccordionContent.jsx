import React from "react";
import icon from "../../../images/nonLivePage/CenterAccordion/star2.png";

const CenterAccordionContent = ({ card }) => {
  return (
    <div
      style={{
        background: "#dddddd",
        borderColor: "#cccccc",
      }}
      className="flex items-center border-b "
    >
      <div className="items-center ml-6px">
        <img src={icon} alt="icon" />
      </div>
      <div
        style={{ borderColor: "#cccccc", width: "250px" }}
        className="flex items-center justify-between border-l border-r ml-6px mr-23px"
      >
        <p className="text-12 ml-9px">{card.text}</p>
        <p className="text-12 mr-10px">{card.text1}</p>
      </div>
      <div style={{ borderColor: "#cccccc" }} className="items-center ">
        <p className="text-12">{card.text2}</p>
      </div>
      <div
        style={{ borderColor: "#cccccc", width: "250px" }}
        className="flex items-center justify-between border-l border-r ml-24px"
      >
        <p className="text-12 ml-10px">{card.text3}</p>
        <p className="text-12 mr-9px">{card.text4}</p>
      </div>
      <div style={{ width: "39px" }} className="items-center">
        <p className="text-12 ml-9px mr-10px">{card.text5}</p>
      </div>
    </div>
  );
};

export default CenterAccordionContent;
