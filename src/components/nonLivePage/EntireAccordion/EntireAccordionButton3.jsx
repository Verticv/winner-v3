import React, { useState } from "react";
// import CenterAccordionContent from "./CenterAccordionContent";
import Arrow from "../../../images/nonLivePage/CenterAccordion/Arrow.png";
import activeStarIcon from "../../../images/nonLivePage/CenterAccordion/star_on2.png";

import EntireAccordionContent3 from "./EntireAccordionContent3";
import Collapsible from "../Collapsible/index";
// import AccordionContent1 from "./AccordionContent1";

const EntireAccordionButton3 = ({ icon, title, cards, handleZoomClick }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeStar, setActiveStar] = useState(false);
  const [hoverStar, setHoverStar] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="ml-4px mr-5px mb-4px">
      <Collapsible
        disableAnimationOnClose
        open
        headerChild={
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
                className="text-13px ml-10px mb-px font-bold"
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
                  marginTop: activeStar || hoverStar ? "1px" : "",
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
        }>
        <div style={{ background: "#420572" }} className="rounded-b-lg">
          <div style={{ background: "#eeeeee", width: "630px" }} className="flex items-center justify-between h-28px ">
            <div style={{ width: "210px" }} className="flex justify-center px-10px">
              <p
                style={{
                  color: "444444",
                  letterSpacing: "-0.031em",
                  fontSize: "12px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                className="font-malgun -mt-2px"
              >
                아스널

              </p>
            </div>
            <div style={{ width: "210px" }} className="flex justify-center px-10px">
              <p
                style={{
                  color: "444444",
                  letterSpacing: "-0.031em",
                  fontSize: "12px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                className="font-malgun -mt-2px ml-3px"
              >
                무 : 리버플
              </p>
            </div>
            <div style={{ width: "210px" }} className="flex justify-center px-10px">
              <p
                style={{
                  color: "444444",
                  letterSpacing: "-0.031em",
                  fontSize: "12px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                className="font-malgun -mt-2px"
              >
                리버플
              </p>
            </div>
          </div>
          {cards.map((item) => (
            <EntireAccordionContent3 key={item.id} card={item} />
          ))}
        </div>
      </Collapsible>
    </div>
  );
};

export default EntireAccordionButton3;
