import React, { useState } from "react";
import Arrow from "../../../images/nonLivePage/CenterAccordion/Arrow.png";
import activeStarIcon from "../../../images/nonLivePage/CenterAccordion/star_on2.png";
import EntireAccordionContent11 from "./EntireAccordionContent_1";

// import AccordionContent1 from "./AccordionContent1";

const EntireAccordionButton11 = ({ icon, title, cards, handleZoomClick }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeStar, setActiveStar] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const lastIndex = cards.length - 1;
  const lastObject = cards[lastIndex];
  return (
    <div className="ml-4px  mr-5px mb-5px">
      <div
        style={{
          background: "linear-gradient(to right, #9d3bbb, #5423a0)",
          width: "630px",
          borderRadius: "4px",
          borderBottomRightRadius: `${isOpen ? "0px" : "4px"}`,
          borderBottomLeftRadius: `${isOpen ? "0px" : "4px"}`,
        }}
        className={`flex items-center justify-between ${isOpen ? "rounded-t-lg" : "rounded-lg"} cursor-pointer h-31px`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center">
          <p
            style={{
              color: "#eeeeee",
              letterSpacing: "-0.031em",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "540px",
            }}
            className="text-13px mb-px ml-9px font-bold"
          >
            {title}
          </p>
        </div>
        <div className="flex items-center">
          <img
            style={{
              borderColor: "#764cbb",
              height: activeStar ? "33px" : "31px",
              paddingRight: activeStar ? "1px" : "2px",
              marginTop: activeStar ? "2px" : "",
            }}
            className="border-r mb-px -mr-px object-none"
            src={activeStar ? activeStarIcon : icon}
            alt="icon"
            onClick={(e) => {
              e.stopPropagation();
              setActiveStar((prev) => !prev);
              handleZoomClick("zoom-out");
            }}
          />
          <img
            src={Arrow}
            alt="img"
            style={{ marginBottom: "1px" }}
            className={`object-none text-white ml-14px mr-14px ${isOpen ? "transform rotate-180" : ""}`}
          />
        </div>
      </div>
      {isOpen && (
        <div style={{ background: "#420572" }} className="rounded-b-lg">
          {cards.map((item) => (
            <EntireAccordionContent11 key={item.id} card={item} lastObject={lastObject} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EntireAccordionButton11;
