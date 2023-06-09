import React, { useState } from "react";
import CenterAccordionContent from "./CenterAccordionContent";
import Arrow from "../../../images/nonLivePage/CenterAccordion/Arrow.png";

// import AccordionContent1 from "./AccordionContent1";

const CenterAccordionButton = ({ icon, title, date, icon1, icon2, card }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const lastIndex = card.length - 1;
  const lastObject = card[lastIndex];
  return (
    <div
      style={{
        background: "#2e0450",
        width: "640px",
        boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.8)",
        borderRadius: "6px",
      }}
      className="rounded-lg p-px mb-5px"
    >
      <div
        style={{
          background: "#420572",
          width: "638px",
          borderRadius: "5px",
          borderBottomRightRadius: `${isOpen ? "0px" : "5px"}`,
          borderBottomLeftRadius: `${isOpen ? "0px" : "5px"}`,
        }}
        className={`flex items-center justify-between ${
          isOpen ? "rounded-t-lg" : "rounded-lg"
        } cursor-pointer h-30px `}
        onClick={toggleAccordion}
      >
        <div className="flex items-center">
          <img
            className="ml-5px mt-7px mb-8px object-none"
            src={icon}
            alt="icon"
          />
          <p
            style={{
              color: "#eeeeee",
              letterSpacing: "-0.031em",
              fontFamily: "MalgunGothicRegular",
              marginBottom: "4px",
            }}
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
              style={{
                color: "#eeeeee",
                letterSpacing: "-0.031em",
                fontFamily: "MalgunGothicRegular",
              }}
              className="text-12px mt-5px font-malgun"
            >
              {date}
            </p>
            <img
              className="-mr-13px -ml-px mb-2px object-none"
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
              alt=""
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
          className=" -ml-px rounded-b-lg"
        >
          {card.map((item) => (
            // @ts-ignore
            <CenterAccordionContent
              key={item.id}
              card={item}
              lastObject={lastObject}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CenterAccordionButton;
