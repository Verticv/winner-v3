import React, { useState } from "react";
import AccordionContent1 from "./AccordionContent1";
import Arrow from "../../../images/nonLivePage/CenterAccordion/Arrow2.png";

const AccordionButton1 = ({ icon, title, card }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        background: "linear-gradient(to top, #4f3a7a, #e597ff)",
        width: "280px",
        borderRadius: "6px",
        boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.8)",
      }}
      className="rounded-lg p-px mb-4px"
    >
      <div
        style={{
          background: "linear-gradient(to top, #6b22ff, #df52ff)",
          width: "278px",
          borderRadius: "5px",
          borderBottomRightRadius: `${isOpen ? "0px" : "5px"}`,
          borderBottomLeftRadius: `${isOpen ? "0px" : "5px"}`,
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
            style={{
              marginTop: 0,
              marginBottom: "7px",
            }}
          />
          <p
            style={{
              letterSpacing: "-0.031em",
              fontFamily: "MalgunGothicRegular",
            }}
            className="text-lg text-14px text-white ml-4px mt-11px mb-15px font-malgun "
          >
            {title}
          </p>
        </div>
        <div>
          <img
            src={Arrow}
            alt=""
            className={`object-none text-white mr-10px mt-16px mb-18px ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </div>
      </div>
      {isOpen && (
        <div
          style={{ background: "#420572" }}
          className="pt-2px rounded-b-lg pb-4px"
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
