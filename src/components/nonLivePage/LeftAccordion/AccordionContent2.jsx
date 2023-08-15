import React from "react";
import icon1 from "../../../images/nonLivePage/LeftAccordion/content/RoundedRectangle2.png";

const AccordionContent2 = ({ card }) => {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "4px",
        position: "relative",
      }}
      className="flex items-center ml-2px mb-2px mr-2px rounded-lg h-50px"
    >
      <img className="-mt-14px ml-4px" src={icon1} alt="icon" />
      <p
        style={{
          color: "#eeeeee",
          letterSpacing: "-0.031em",
          fontFamily: "MalgunGothicBold",
          fontSize: "14px",
          position: "absolute",
          top: "5px",
          left: "12.5px",
          margin: "0",
        }}
        className="-ml-19px mt-11px mb-29px text-14 font-malgun"
      >
        {card.num}
      </p>
      <img className="ml-8px mr-9px " src={card.icon} alt="icon" />
      <div
        style={{ background: "#e0e0e0" }}
        className="h-38px w-px mt-6px mb-6px"
      ></div>
      <div
        style={{
          width: "48px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img className={card.style} src={card.icon2} alt="icon" />
      </div>
      <p
        style={{
          color: "#444444",
          letterSpacing: "-0.031em",
          marginLeft: "-1px",
        }}
        className="text-12px mt-18px mb-20px font-malgun"
      >
        {card.text}
      </p>
    </div>
  );
};

export default AccordionContent2;
