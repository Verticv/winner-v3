import React, { useState } from "react";
// import CenterAccordionContent from "./CenterAccordionContent";
import Arrow from "../../../images/nonLivePage/CenterAccordion/Arrow.png";
// import EntireAccordionContent from "./EntireAccordionContent";
import activeStarIcon from "../../../images/nonLivePage/CenterAccordion/star_on2.png";
import EntireAccordionContent0 from "./EntireAccordionContent0";

// import AccordionContent1 from "./AccordionContent1";

const EntireAccordionButton0 = ({ icon, title, cards, handleZoomClick }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeStar, setActiveStar] = useState(false);
  const [hoverStar, setHoverStar] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="ml-4px  mr-5px mb-5px ">
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
              marginBottom: "1px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "540px",
            }}
            className="text-12px ml-9px font-bold"
          >
            {title}
          </p>
        </div>
        <div className="flex items-center">
          <img
            style={{
              borderColor: "#764cbb",
              height: activeStar || hoverStar ? "33px" : "31px",
              paddingRight: activeStar || hoverStar ? "1px" : "2px",
              marginTop: activeStar || hoverStar ? "2px" : "",
            }}
            className="border-r mb-px -mr-px object-none"
            src={activeStar || hoverStar ? activeStarIcon : icon}
            alt="icon"
            onClick={(e) => {
              e.stopPropagation();
              setActiveStar((prev) => !prev);
              handleZoomClick("zoom-out");
            }}
            onMouseEnter={() => setHoverStar(true)}
            onMouseLeave={() => setHoverStar(false)}
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
        <div style={{ background: "#420572" }} className="">
          {cards.map((item) => (
            <EntireAccordionContent0 key={item.id} card={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EntireAccordionButton0;
