import React, { useState } from "react";
import AccordionContent2 from "./AccordionContent2";

const AccordionButton2 = ({ icon, title, card }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        background: "linear-gradient(to top, #4f3a7a, #e597ff)",
        width: "281px",
      }}
      className="rounded-lg p-px mb-5px"
    >
      <div
        style={{ background: "linear-gradient(to top, #6b22ff, #df52ff)" }}
        className={`flex items-center justify-between ${
          isOpen ? "rounded-t-lg" : "rounded-lg"
        } cursor-pointer h-46px`}
        onClick={toggleAccordion}
      >
        <div className="flex">
          <img className="ml-6px mt-15px mb-17px" src={icon} alt="icon" />
          <p className="text-lg text-14px text-white ml-7px mt-22px mb-17px ">
            {title}
          </p>
        </div>
        <div>
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
      {isOpen && (
        <div style={{ background: "#420572" }}>
          {card.map((item) => (
            <AccordionContent2 key={item.id} card={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AccordionButton2;
