import React, { useState } from "react";
// import CenterAccordionContent from "./CenterAccordionContent";
import Arrow from "../../../images/nonLivePage/CenterAccordion/Arrow.png";
import EntireAccordionContent3 from "./EntireAccordionContent3";

// import AccordionContent1 from "./AccordionContent1";

const EntireAccordionButton3 = ({ icon, title, card }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="ml-4px mr-5px mb-5px">
      <div
        style={{
          background: "linear-gradient(to right, #9d3bbb, #5423a0)",
          width: "630px",
        }}
        className={`flex items-center justify-between ${
          isOpen ? "rounded-t-lg" : "rounded-lg"
        } cursor-pointer h-31px`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center">
          <p
            style={{ color: "#eeeeee", letterSpacing: "-0.031em" }}
            className="text-13px ml-10px mb-px font-MalgunGothicBold"
          >
            {title}
          </p>
        </div>
        <div className="flex items-center">
          <img
            style={{
              borderColor: "#764cbb",
              height: "31px",
              paddingRight: "2px",
            }}
            className="border-r mb-px -mr-px object-none"
            src={icon}
            alt="icon"
          />
          <img
            src={Arrow}
            alt="img"
            style={{ marginBottom: "1px" }}
            className={`object-none text-white ml-14px mr-14px ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </div>
      </div>
      {isOpen && (
        <div style={{ background: "#420572" }} className="rounded-b-lg">
          <div
            style={{ background: "#eeeeee", width: "630px" }}
            className="flex items-center justify-between h-28px "
          >
            <div style={{ marginLeft: "90px" }}>
              <p
                style={{
                  color: "444444",
                  letterSpacing: "-0.031em",
                  fontSize: "12px",
                }}
                className="font-malgun -mt-2px"
              >
                아스널
              </p>
            </div>
            <div style={{ marginRight: "5px" }}>
              <p
                style={{
                  color: "444444",
                  letterSpacing: "-0.031em",
                  fontSize: "12px",
                }}
                className="font-malgun -mt-2px ml-2px"
              >
                무 : 리버플
              </p>
            </div>
            <div style={{ marginRight: "89px" }}>
              <p
                style={{
                  color: "444444",
                  letterSpacing: "-0.031em",
                  fontSize: "12px",
                }}
                className="font-malgun -mt-2px"
              >
                리버플
              </p>
            </div>
          </div>
          {card.map((item) => (
            <EntireAccordionContent3 key={item.id} card={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EntireAccordionButton3;
