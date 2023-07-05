import React from "react";
import icon1 from "../../../images/nonLivePage/LeftAccordion/content/RoundedRectangle2.png";
import icon2 from "../../../images/nonLivePage/LeftAccordion/content/Icon.png";
import icon3 from "../../../images/nonLivePage/LeftAccordion/content/emblem.png";
import icon4 from "../../../images/nonLivePage/LeftAccordion/content/emblem2.png";

const AccordionContent1 = ({ card }) => {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "4px",
        position: "relative",
      }}
      className="flex items-center ml-2px mb-2px mr-2px rounded-lg h-50px"
    >
      <img className="-mt-14px ml-4px" src={icon1} alt="icon" />
      <p
        style={{
          color: "#eeeeee",
          letterSpacing: "-0.031em",
          fontFamily: "MalgunGothicBold",
          fontSize: "14px",
          position: "absolute",
          top: "5px",
          left: "12.5px",
          margin: "0",
        }}
        className="-ml-19px mt-11px mb-29px text-14 font-malgun "
      >
        {card.num}
      </p>
      <p
        style={{
          color: "#444444",
          letterSpacing: "-0.031em",
          fontSize: "12px",
          marginBottom: "2px"
        }}
        className="ml-5px mr-5px text-12 font-malgun"
      >
        {card.time}
      </p>
      <div
        style={{ background: "#e0e0e0" }}
        className="h-38px w-px mt-6px mb-6px"
      ></div>
      <img className="ml-5px mt-15px mb-16px" src={icon2} alt="icon" />
      <div
        style={{ background: "#e0e0e0" }}
        className="h-38px ml-5px w-px mt-6px mb-6px"
      ></div>
      <div>
        <div
          className="flex items-center mt-12px "
          style={{ marginTop: "11px", marginBottom: "3px" }}
        >
          <img
            className="ml-6px object-none"
            style={{ marginTop: "1px" }}
            src={icon3}
            alt="icon"
          />
          <p
            style={{
              color: "#444444",
              letterSpacing: "-0.031em",
              fontSize: "12px",
              marginTop: "-1px",
            }}
            className="ml-4px text-12px  font-malgun"
          >
            {card.text1}
          </p>
        </div>
        <div className="flex mb-12px mt-px">
          <img className="ml-6px object-none" src={icon4} alt="icon" />
          <p
            style={{
              color: "#444444",
              letterSpacing: "-0.031em",
              fontSize: "12px",
              marginTop: "-1px",
            }}
            className="ml-4px text-12px  font-malgun"
          >
            {card.text2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccordionContent1;
