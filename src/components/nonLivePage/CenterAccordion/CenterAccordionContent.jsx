import React from "react";
import icon from "../../../images/nonLivePage/CenterAccordion/star2.png";

const CenterAccordionContent = ({ card, lastObject }) => {
  return (
    <>
      <div
        style={{
          borderColor: "#cccccc",
        }}
        //   className={`flex items-center
        //    ${
        //     lastObject.text == "첼시" ? "" : "border-b"
        //   }
        //    h-31px  `}
        // >
        className={`flex items-center ${
          lastObject.id !== card.id ? "border-b h-31px" : "h-30px"
        }
        `}
      >
        <div className="items-center ml-6px mt-6px mb-8px">
          <img src={icon} alt="icon" />
        </div>
        <div
          style={{
            borderColor: "#cccccc",
            width: "252px",
            height: "30px",
            fontFamily: "MalgunGothicRegular",
          }}
          className="flex items-center justify-between border-l border-r ml-6px"
        >
          <p
            style={{
              fontSize: "12px",
              color: "#444444",
              letterSpacing: "-0.031em",
            }}
            className="ml-9px mt-10px mb-12px"
          >
            {card.text}
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "#444444",
              letterSpacing: "-0.031em",
            }}
            className=" mr-10px mt-10px mb-11px"
          >
            {card.text1}
          </p>
        </div>
        <div className="flex items-center">
          <p
            style={{
              fontSize: "12px",
              color: "#444444",
              letterSpacing: "-0.031em",
              width: "21px",
            }}
            className="ml-23px"
          >
            {card.text2}
          </p>
        </div>
        <div
          style={{ borderColor: "#cccccc", width: "252px", height: "30px" }}
          className="flex items-center justify-between border-l border-r ml-24px"
        >
          <p
            style={{
              fontSize: "12px",
              color: "#444444",
              letterSpacing: "-0.031em",
            }}
            className=" ml-9px mt-10px mb-11px"
          >
            {card.text3}
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "#444444",
              letterSpacing: "-0.031em",
            }}
            className=" mr-9px mt-10px mb-9px"
          >
            {card.text4}
          </p>
        </div>
        <div
          style={{ width: "39px" }}
          className="flex items-center justify-center"
        >
          <p
            style={{
              fontSize: "12px",
              color: "#444444",
              letterSpacing: "-0.031em",
            }}
          >
            {card.text5}
          </p>
        </div>
      </div>
    </>
  );
};

export default CenterAccordionContent;
