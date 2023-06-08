import React from "react";
import icon1 from "../../../images/nonLivePage/LeftAccordion/content/RoundedRectangle.png";

const AccordionContent2 = ({ card }) => {
  return (
    <div className="ml-3px mb-2px mr-3px pt-2px">
      <div
        style={{
          background: "#dddddd",
        }}
        className="flex items-center px-3px rounded-lg h-50px"
      >
        <img className="-mt-14px ml-5px" src={icon1} alt="icon" />
        <p className="-ml-19px mb-20px">{card.num}</p>
        <img className="ml-18px" src={card.icon} alt="icon" />
        <div
          style={{ background: "rgb(102, 102, 102)" }}
          className="h-38px ml-9px w-px mt-6px mb-6px"
        ></div>
        <img className="ml-5px mt-15px mb-15px" src={card.icon2} alt="icon" />
        <p className="ml-4px text-12px mt-19px mb-19px">{card.text}</p>
      </div>
    </div>
  );
};

export default AccordionContent2;
