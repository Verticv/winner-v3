import React, { useState } from "react";
import icon1 from "../../../images/nonLivePage/LeftAccordion/content/RoundedRectangle2.png";

const AccordionContent2 = ({ card }) => {
  const [hover, setHover] = useState(false)
  return (
    <div
      style={{
        background: hover ? "#946cf0" : "#ffffff",
        borderRadius: "4px",
        position: "relative",
      }}
      className="flex items-center ml-2px mb-2px mr-2px rounded-lg h-50px cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img className="-mt-14px ml-4px flex-shrink-0" src={icon1} alt="icon" />
      <p
        style={{
          color: "#eeeeee",
          letterSpacing: "-0.031em",
          fontSize: "14px",
          position: "absolute",
          top: "5px",
          left: "12.5px",
          margin: "0",
        }}
        className="-ml-19px mt-11px mb-29px text-14 font-malgun flex-shrink-0"
      >
        {card.num}
      </p>
      <img style={{filter: hover && "brightness(0) invert(1)"}} className="ml-8px mr-9px  flex-shrink-0" src={card.icon} alt="icon" />
      <div style={{ background: hover ? "#ac8afa" : "#e0e0e0" }} className="h-38px w-px mt-6px mb-6px flex-shrink-0"></div>
      <div
        style={{
          width: "48px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className=" flex-shrink-0"
      >
        <img className={card.style} src={card.icon2} alt="icon" />
      </div>
      <p
        style={{
          color: hover ? "#ffffff" : "#444444",
          letterSpacing: "-0.031em",
          marginLeft: "-1px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          maxWidth: "150px",
        }}
        className="text-12px mt-18px mb-20px font-malgun"
      >
        {card.text}
      </p>
    </div>
  );
};

export default AccordionContent2;
