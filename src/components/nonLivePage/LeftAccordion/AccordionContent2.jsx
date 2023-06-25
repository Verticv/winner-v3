import React from "react";
import icon1 from "../../../images/nonLivePage/LeftAccordion/content/RoundedRectangle.png";

const AccordionContent2 = ({ card }) => {
  return (
    // <div className="ml-3px mb-2px mr-3px pt-2px">
    <div
      style={{
        background: "#ffffff",
      }}
      className="flex items-center ml-2px mb-2px mr-2px rounded-lg h-50px"
    >
      <img className="-mt-14px ml-2px" src={icon1} alt="icon" />
      <p
        style={{ color: "#eeeeee", letterSpacing: "-0.031em" }}
        className="-ml-19px mt-11px mb-29px text-14 font-malgun"
      >
        {card.num}
      </p>
      <img className="ml-16px mr-9px " src={card.icon} alt="icon" />
      <div
        style={{ background: "#e0e0e0" }}
        className="h-38px w-px mt-6px mb-6px"
      ></div>
      <img className="mt-15px mb-15px" src={card.icon2} alt="icon" />
      <p
        style={{ color: "#444444", letterSpacing: "-0.031em" }}
        className="ml-4px text-12px mt-19px mb-19px"
      >
        {card.text}
      </p>
    </div>
    // </div>
  );
};

export default AccordionContent2;
