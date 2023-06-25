import React, { useState } from "react";
import AccordionContent from "./AccordionContent";
import Arrow from "../../../images/nonLivePage/CenterAccordion/Arrow.png";

const AccordionButton = ({ icon, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const card1 = [
    {
      text: "맨체스터유나이티드",
      text2: "맨체스터시티",
      time: "18:30",
      date: "2023-05-14 18:30",
    },
    {
      text: "맨체스터유나이티드",
      text2: "맨체스터시티",
      time: "18:30",
      date: "2023-05-14 18:30",
    },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(to top, #4f3a7a, #cb78e6)",
        width: "280px",
      }}
      className="rounded-lg p-px mb-4px"
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
            className="text-14px text-white ml-6px mt-14px mb-15px font-malgun "
          >
            {title}
          </p>
        </div>
        <div className="flex items-center">
          <div
            style={{ background: "#5423a0" }}
            className="flex items-center justify-center w-18px h-19px rounded-lg mt-12px mb-12px"
          >
            <p className="text-13px text-white font-malgun">5</p>
          </div>
          <img
            src={Arrow}
            className={`object-none text-white mr-10px ml-9px mt-17px mb-18px ${
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
          <AccordionContent card={card1} />
        </div>
      )}
    </div>
  );
};

export default AccordionButton;
