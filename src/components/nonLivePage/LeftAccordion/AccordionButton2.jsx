import React, { useState } from "react";
import AccordionContent2 from "./AccordionContent2";
import Arrow from "../../../images/nonLivePage/CenterAccordion/Arrow2.png";
import Collapsible from "../Collapsible/index";

const AccordionButton2 = ({ icon, title, card }) => {
  const [isOpen, setIsOpen] = useState(true);

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
      className="rounded-lg p-px mb-5px"
    >
      <Collapsible
        open
        headerChild={
          <div
          style={{
            background: "linear-gradient(to top, #6b22ff, #df52ff)",
            width: "278px",
            height: "44px",
            borderRadius: "5px",
            borderBottomRightRadius: `${isOpen ? "0px" : "5px"}`,
            borderBottomLeftRadius: `${isOpen ? "0px" : "5px"}`,
          }}
          className={`flex items-center justify-between ${isOpen ? "rounded-t-lg" : "rounded-lg"} cursor-pointer`}
          onClick={toggleAccordion}
        >
          <div className="flex items-center">
            <img
              className="-ml-3px mb-6px object-none"
              src={icon}
              alt="icon"
              style={{
                marginTop: 0,
                marginBottom: "9px",
              }}
            />
            <p
              style={{
                letterSpacing: "-0.031em",
                marginBottom: "3px",
              }}
              className="text-14px text-white ml-5px font-malgun font-bold"
            >
              {title}
            </p>
          </div>
          <div>
            <img
              src={Arrow}
              alt=""
              className={`object-none text-white mr-10px mt-17px mb-18px ${isOpen ? "transform rotate-180" : ""}`}
            />
          </div>
          </div>}>
          <div
            style={{
              background: "#420572",
              paddingBottom: "0.1px",
              borderBottomLeftRadius: "6px",
              borderBottomRightRadius: "6px",
            }}
            className="pt-2px rounded-b-lg"
          >
            {card.map((item) => (
              <AccordionContent2 key={item.id} card={item} />
            ))}
          </div>
        </Collapsible>
    </div>
  );
};

export default AccordionButton2;
