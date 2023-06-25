import React, { useState } from "react";
// import CenterAccordionContent from "./CenterAccordionContent";
import Arrow from "../../../images/nonLivePage/CenterAccordion/Arrow.png";
import CenterAccordionContent1 from "./CenterAccordionContent1";

// import AccordionContent1 from "./AccordionContent1";

const CenterAccordionButton1 = ({ icon, title, date, icon1, icon2, card }) => {
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
        style={{ background: "#420572", width: "638px" }}
        className={`flex items-center justify-between ${
          isOpen ? "rounded-t-lg" : "rounded-lg"
        } cursor-pointer h-30px `}
        onClick={toggleAccordion}
      >
        <div className="flex items-center">
          <img
            className="ml-5px mt-7px mb-7px object-none"
            src={icon}
            alt="icon"
          />
          <p
            style={{ color: "#eeeeee", letterSpacing: "-0.031em" }}
            className="text-12px ml-4px font-malgun"
          >
            {title}
          </p>
        </div>
        <div className="flex items-center">
          <div
            style={{ borderColor: "#533583", height: "30px" }}
            className="flex border-r"
          >
            <p
              style={{ color: "#eeeeee", letterSpacing: "-0.031em" }}
              className="text-12px mt-5px font-malgun"
            >
              {date}
            </p>
            <img
              className="-mr-14px -ml-px mb-2px object-none"
              src={icon1}
              alt="icon1"
            />
            <img className="-mr-2px object-none" src={icon2} alt="icon1" />
          </div>
          <div
            style={{ width: "38px" }}
            className="justify-center items-center flex"
          >
            <img
              src={Arrow}
              alt="img"
              className={`object-none text-white ml-13px mt-10px mb-12px mr-14px ${
                isOpen ? "transform rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          style={{ background: "#ffffff", width: "640px" }}
          className=" -ml-px"
        >
          {/* {card.map((item) => ( */}
          <CenterAccordionContent1 />
          {/* ))} */}
        </div>
      )}
    </div>
  );
};

export default CenterAccordionButton1;
