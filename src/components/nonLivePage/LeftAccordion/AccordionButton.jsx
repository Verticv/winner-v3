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
            className={`w-6 h-6 object-none text-white mr-11px ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </div>
      </div>
      {isOpen && (
        <div style={{ background: "#420572" }}>
          <AccordionContent card={card1} />
        </div>
      )}
    </div>
  );
};

export default AccordionButton;
