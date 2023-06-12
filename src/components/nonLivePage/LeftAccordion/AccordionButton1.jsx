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
          <img
            src={Arrow}
            className={`w-6 h-6 text-white object-none mr-11px ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </div>
      </div>
      {isOpen && (
        <div style={{ background: "#420572" }}>
          {card.map((item) => (
            <AccordionContent1 key={item.id} card={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AccordionButton1;
