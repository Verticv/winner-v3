import React from "react";
import icon1 from "../../../images/nonLivePage/LeftAccordion/content/RoundedRectangle.png";
import icon2 from "../../../images/nonLivePage/LeftAccordion/content/Icon.png";
import icon3 from "../../../images/nonLivePage/LeftAccordion/content/emblem.png";
import icon4 from "../../../images/nonLivePage/LeftAccordion/content/emblem2.png";

const AccordionContent1 = ({ card }) => {
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
        <p className="ml-14px">{card.time}</p>
        <div
          style={{ background: "rgb(102, 102, 102)" }}
          className="h-38px ml-7px w-px mt-6px mb-6px"
        ></div>
        <img className="ml-5px mt-15px mb-15px" src={icon2} alt="icon" />
        <div
          style={{ background: "rgb(102, 102, 102)" }}
          className="h-38px ml-7px w-px mt-6px mb-6px"
        ></div>
        <div>
          <div className="flex">
            <img
              className="ml-6px mr-6px mt-8px mb-4px object-none"
              src={icon3}
              alt="icon"
            />
            <p className="ml-4px text-12px mt-10px mb-8px">{card.text1}</p>
          </div>
          <div className="flex">
            <img
              className="ml-6px mr-5px mb-8px object-none"
              src={icon4}
              alt="icon"
            />
            <p className="ml-5px text-12px mb-10px">{card.text2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionContent1;
