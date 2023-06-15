import React, { useState } from "react";
import icon from "../../../images/nonLivePage/LeftAccordion/Card/star.png";
import Arrow from "../../../images/nonLivePage/LeftAccordion/Card/Arrow.png";

const AccordionCard1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      style={{
        background: "#ffffff",
      }}
      className="items-center justify-between mx-3px rounded-lg mb-2px "
      // className="items-center justify-between px-3px rounded-lg mb-2px h-85px"
    >
      <div className="flex ml-10px justify-between items-center mr-11px">
        <p
          style={{ color: "#444444", letterSpacing: "-0.031em" }}
          className="text-12px font-malgun mt-8px"
        >
          FC바르셀로나
        </p>
        <p
          style={{ color: "#f04281", letterSpacing: "-0.031em" }}
          className="text-12px font-malgun mt-4px"
        >
          18:30
        </p>
      </div>
      <div className="ml-10px ">
        <p
          style={{ color: "#444444", letterSpacing: "-0.031em" }}
          className="text-12px font-malgun"
        >
          아틀레티코
        </p>
      </div>
      <div className="flex justify-between ml-10px">
        <div className="mt-17px mb-5px">
          <p
            style={{ color: "#0072bc", letterSpacing: "-0.031em" }}
            className="text-12px font-malgun"
          >
            2023-05-14 18:30
          </p>
        </div>
        <div className="flex">
          <img className="mt-8px object-none" src={icon} alt="img" />
          <img
            src={Arrow}
            onClick={toggleAccordion}
            style={{ color: "#444444" }}
            className={`object-none mr-10px ml-10px mt-10px ${
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
          className="flex border-t border-b border-solid h-31px items-center justify-between rounded-b-lg"
        >
          <div className="flex items-center">
            <p
              style={{ color: "#444444", letterSpacing: "-0.031em" }}
              className=" ml-6px mr-49px text-12px font-malgun"
            >
              1
            </p>
            <p
              style={{ color: "#682aa7", letterSpacing: "-0.031em" }}
              className="mr-1px text-12px font-malgun"
            >
              2.12
            </p>
          </div>
          <div
            style={{ borderColor: "#cccccc" }}
            className="flex items-center border-l border-r border-solid "
          >
            <p
              style={{ color: "#444444", letterSpacing: "-0.031em" }}
              className="ml-6px mr-44px text-12px font-malgun"
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
          <div className="flex mr-7px">
            <p
              style={{ color: "#444444", letterSpacing: "-0.031em" }}
              className="mr-14px text-12px font-malgun"
            >
              2
            </p>
            <p
              style={{ color: "#682aa7", letterSpacing: "-0.031em" }}
              className="ml-34px text-13px"
            >
              3.62
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionCard1;
