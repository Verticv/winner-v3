import React, { useState } from "react";
import CenterAccordionContent from "./CenterAccordionContent";
import Arrow from "../../../images/nonLivePage/CenterAccordion/Arrow.png";

// import AccordionContent1 from "./AccordionContent1";

const CenterAccordionButton = ({ icon, title, date, icon1, icon2, card }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        background: "#2e0450",
        width: "640px",
      }}
      className="rounded-lg p-px mb-5px"
    >
      <div
        style={{ background: "#420572" }}
        className={`flex items-center justify-between ${
          isOpen ? "rounded-t-lg" : "rounded-lg"
        } cursor-pointer h-30px`}
        onClick={toggleAccordion}
      >
        <div className="flex">
          <img className="ml-6px object-none" src={icon} alt="icon" />
          <p style={{ color: "#eeeeee" }} className="text-12px ml-4px">
            {title}
          </p>
        </div>
        <div className="flex items-center">
          <div style={{ borderColor: "#533583" }} className="flex border-r">
            <p style={{ color: "#eeeeee" }} className="text-12px">
              {date}
            </p>
            <img className="ml-6px object-none" src={icon1} alt="icon1" />
            <img
              className="ml-5px mr-10px object-none"
              src={icon2}
              alt="icon1"
            />
          </div>
          <div
            style={{ width: "39px" }}
            className="justify-center items-center flex"
          >
            <img
              src={Arrow}
              className={`w-6 h-6 object-none text-white ml-13px mr-14px ${
                isOpen ? "transform rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div style={{ background: "#420572" }} className="rounded-b-lg">
          {card.map((item) => (
            // @ts-ignore
            <CenterAccordionContent key={item.id} card={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CenterAccordionButton;
