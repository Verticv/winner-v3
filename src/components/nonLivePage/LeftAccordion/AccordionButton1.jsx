import React, { useState } from "react";
import AccordionContent1 from "./AccordionContent1";
import Arrow from "../../../images/nonLivePage/CenterAccordion/Arrow.png";

const AccordionButton1 = ({ icon, title, card }) => {
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
          <img
            className="-ml-3px mt-11px mb-16px object-none"
            src={icon}
            alt="icon"
          />
          <p
            style={{ letterSpacing: "-0.031em" }}
            className="text-lg text-14px text-white ml-6px mt-14px mb-15px font-malgun "
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
            <AccordionContent1 key={item.id} card={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AccordionButton1;
