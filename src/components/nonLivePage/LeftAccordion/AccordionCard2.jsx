import React, { useState } from "react";
import icon from "../../../images/nonLivePage/LeftAccordion/Card/star.png";
import Arrow from "../../../images/nonLivePage/LeftAccordion/Card/Arrow.png";
import Up from "../../../images/nonLivePage/LeftAccordion/Card/Up.png";
import Dn from "../../../images/nonLivePage/LeftAccordion/Card/Dn.png";
import "./style.css";

const AccordionCard2 = () => {
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
      className="items-center justify-between mx-2px mb-2px "
      // className="items-center justify-between px-3px rounded-lg mb-2px h-85px"
    >
      <div className="flex ml-10px justify-between items-center mr-11px">
        <p
          style={{
            color: "#444444",
            letterSpacing: "-0.031em",
            fontFamily: "MalgunGothicRegular",
          }}
          className="text-12px mt-6px -mb-px"
        >
          맨체스터유나이티드
        </p>
        <p
          style={{ color: "#f04281", letterSpacing: "-0.031em" }}
          className="text-12px font-malgun mt-px -mb-6px"
        >
          18:30
        </p>
      </div>
      <div className="ml-10px ">
        <p
          style={{ color: "#444444", letterSpacing: "-0.031em" }}
          className="text-12px font-malgun mt-px"
        >
          맨체스터시티
        </p>
      </div>
      <div className="flex justify-between ml-10px -mt-px">
        <div className="mt-19px mb-6px">
          <p
            style={{ color: "#0072bc", letterSpacing: "-0.031em" }}
            className="text-12px font-malgun"
          >
            2023-05-14 18:30
          </p>
        </div>
        {/* <div className="flex">
          <img className="mt-12px object-none" src={icon} alt="img" />
          <img
            src={Arrow}
            alt="img"
            onClick={toggleAccordion}
            style={{ color: "#444444" }}
            className={`object-none mr-11px ml-9px mt-14px ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </div> */}
        <div className="flex">
          <div className="tooltip mt-8px items-center justify-center">
            <img className="mt-12px ml-px object-none" src={icon} alt="img" />
            <span className="tooltiptext items-center justify-center text-10px font-malgun tracking-tight text-white">
              즐겨찾기에서 제거
            </span>
          </div>
          <img
            src={Arrow}
            alt=""
            onClick={toggleAccordion}
            style={{ color: "#444444" }}
            className={`object-none mr-11px ml-29px mt-15px ${
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
            borderBottomLeftRadius: "4px",
            borderBottomRightRadius: "4px",
          }}
          className="flex border-t border-solid h-31px items-center"
        >
          <div
            style={{ width: "91px" }}
            className="flex items-center justify-between"
          >
            <p
              style={{ color: "#444444", letterSpacing: "-0.031em" }}
              className=" ml-6px mt-9px mb-11px text-12px font-malgun"
            >
              1
            </p>
            <img
              className="ml-25px object-none mt-12px mb-13px"
              src={Up}
              alt="img"
            />
            <p
              style={{ color: "#f04281", letterSpacing: "-0.031em" }}
              className="mr-8px text-12px font-malgun mb-2px"
            >
              2.12
            </p>
          </div>
          <div
            style={{ borderColor: "#cccccc", width: "93px" }}
            className="flex items-center border-l border-r border-solid justify-between h-30px"
          >
            <p
              style={{ color: "#444444", letterSpacing: "-0.031em" }}
              className="ml-7px mr-27px text-12px font-malgun mb-4px"
            >
              무
            </p>
            <img
              className="mr-8px object-none mt-12px mb-13px"
              src={Up}
              alt="img"
            />
            <p
              style={{ color: "#f04281", letterSpacing: "-0.031em" }}
              className="mr-7px text-12px font-malgun mb-2px"
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
              className="ml-7px mt-10px mb-12px text-12px font-malgun"
            >
              2
            </p>
            <img
              className="ml-23px object-none mt-12px mb-13px"
              src={Dn}
              alt="img"
            />
            <p
              style={{ color: "#0072bc", letterSpacing: "-0.031em" }}
              className="mr-8px mt-8px mb-10px text-12px"
            >
              3.62
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionCard2;
