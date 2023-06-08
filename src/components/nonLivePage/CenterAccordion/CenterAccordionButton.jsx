import React, { useState } from "react";
import CenterAccordionContent from "./CenterAccordionContent";
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
        <div className="flex">
          <div className="flex">
            <p
              style={{ color: "#eeeeee" }}
              // className="text-12px"
            >
              {date}
            </p>
            <img className="ml-6px object-none" src={icon1} alt="icon1" />
            <img className="ml-5px object-none" src={icon2} alt="icon1" />
          </div>
          <div className="ml-24px">
            <svg
              className={`w-6 h-6 text-white mr-11px ${
                isOpen ? "transform rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
      {isOpen && (
        <div style={{ background: "#420572" }} className="rounded-b-lg">
          {card.map((item) => (
            <CenterAccordionContent key={item.id} card={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CenterAccordionButton;
