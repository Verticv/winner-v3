import React, { useState } from "react";
import icon from "../../../images/nonLivePage/LeftAccordion/Card/star.png";
import Arrow from "../../../images/nonLivePage/LeftAccordion/Card/Arrow.png";
import "./style.css";

const AccordionCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      style={{
        background: "#ffffff",
        width: "274px",
        borderRadius: "4px",
      }}
      className="items-center justify-between mx-2px rounded-lg mb-2px "
      // className="items-center justify-between px-3px rounded-lg mb-2px h-85px"
    >
      <div className="flex ml-10px justify-between items-center mr-11px">
        <p
          style={{
            color: "#444444",
            letterSpacing: "-0.031em",
            fontFamily: "MalgunGothicRegular",
          }}
          className="text-12px mt-5px"
        >
          맨체스터유나이티드
        </p>
        <p
          style={{
            color: "#f04281",
            letterSpacing: "-0.031em",
            fontFamily: "MalgunGothicRegular",
          }}
          className="text-12px font-malgun mt-5px"
        >
          18:30
        </p>
      </div>
      <div className="ml-10px ">
        <p
          style={{ color: "#444444", letterSpacing: "-0.031em" }}
          className="text-12px font-malgun"
        >
          맨체스터시티
        </p>
      </div>
      <div className="flex justify-between ml-10px">
        <div className="mt-19px mb-6px">
          <p
            style={{ color: "#0072bc", letterSpacing: "-0.031em" }}
            className="text-12px font-malgun"
          >
            2023-05-14 18:30
          </p>
        </div>
        <div className="flex">
          <div className="tooltip mt-8px items-center justify-center">
            <img className="mt-4px object-none" src={icon} alt="img" />
            <span className="tooltiptext items-center justify-center text-10px font-malgun tracking-tight text-white">
              즐겨찾기에서 제거
            </span>
          </div>
          <img
            src={Arrow}
            alt=""
            onClick={toggleAccordion}
            style={{ color: "#444444" }}
            className={`object-none mr-11px ml-9px mt-14px ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </div>
      </div>
      {isOpen && (
        <div
          style={{
            background: "#eeeeee",
            borderColor: "#cccccc",
          }}
          className="flex border-t border-b border-solid h-31px items-center rounded-b-lg"
        >
          <div
            style={{ width: "91px" }}
            className="flex items-center justify-between"
          >
            <p
              style={{ color: "#444444", letterSpacing: "-0.031em" }}
              className="ml-7px mt-9px mb-9px text-12px font-malgun"
            >
              1
            </p>
            <p
              style={{ color: "#682aa7", letterSpacing: "-0.031em" }}
              className="mr-7px text-12px font-malgun"
            >
              2.12
            </p>
          </div>
          <div
            style={{ borderColor: "#cccccc", width: "93px", height: "31px" }}
            className="flex items-center justify-between  border-l border-r border-solid"
          >
            <p
              style={{ color: "#444444", letterSpacing: "-0.031em" }}
              className="ml-7px text-12px font-malgun"
            >
              무
            </p>
            <p
              style={{ color: "#682aa7", letterSpacing: "-0.031em" }}
              className="mr-7px text-12px font-malgun"
            >
              3.59
            </p>
          </div>
          <div
            style={{ width: "90px" }}
            className="flex items-center justify-between"
          >
            <p
              style={{ color: "#444444", letterSpacing: "-0.031em" }}
              className="ml-8px mt-10px mb-9px text-12px font-malgun"
            >
              2
            </p>
            <p
              style={{ color: "#682aa7", letterSpacing: "-0.031em" }}
              className="mr-7px mt-8px mb-9px text-12px"
            >
              3.62
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionCard;
