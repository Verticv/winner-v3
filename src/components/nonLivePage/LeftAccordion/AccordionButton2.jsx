import React, { useState } from "react";
import AccordionContent2 from "./AccordionContent2";
import Arrow from "../../../images/nonLivePage/CenterAccordion/Arrow.png";

const AccordionButton2 = ({ icon, title, card }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        background: "linear-gradient(to top, #4f3a7a, #cb78e6)",
        width: "280px",
      }}
      className="rounded-lg p-px mb-5px"
    >
      <div
        style={{
          background: "linear-gradient(to top, #6b22ff, #df52ff)",
          width: "278px",
        }}
        className={`flex items-center justify-between ${
          isOpen ? "rounded-t-lg" : "rounded-lg"
        } cursor-pointer h-43px`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center">
          <img className="-ml-3px mb-6px object-none" src={icon} alt="icon" />
          <p
            style={{ letterSpacing: "-0.031em" }}
            className="text-14px text-white ml-5px font-malgun"
          >
            {title}
          </p>
        </div>
        <div>
          <img
            src={Arrow}
            alt=""
            className={`object-none text-white mr-10px mt-17px mb-18px ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </div>
      </div>
      {isOpen && (
        <div
          style={{ background: "#420572" }}
          className="pt-2px rounded-b-lg pb-2px"
        >
          {card.map((item) => (
            <AccordionContent2 key={item.id} card={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AccordionButton2;
