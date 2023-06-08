import React, { useState } from "react";
import icon from "../../../images/nonLivePage/LeftAccordion/Card/star.png";

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
      className="items-center justify-between px-3px rounded-lg mb-2px"
    >
      <div className="flex ml-10px justify-between items-center mr-11px pt-11px">
        <p style={{ color: "#444444" }} className="text-12px">
          FC바르셀로나
        </p>
        <p style={{ color: "#f04281" }} className="text-12px">
          18:30
        </p>
      </div>
      <div className="ml-10px mb-10px">
        <p style={{ color: "#444444" }} className="text-12px mt-7px">
          아틀레티코
        </p>
      </div>
      <div className="flex justify-between ml-10px">
        <div className="mb-11px">
          <p style={{ color: "#0072bc" }} className="text-12px">
            2023-05-14 18:30
          </p>
        </div>
        <div className="flex">
          <img className="mb-9px object-none" src={icon} alt="img" />
          <svg
            onClick={toggleAccordion}
            style={{ color: "#444444" }}
            className={`w-6 h-6 mr-10px mb-11px ${
              isOpen ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div
          style={{
            background: "#eeeeee",
            borderColor: "#cccccc",
          }}
          className="flex border-t border-b border-solid h-31px items-center justify-between"
        >
          <div className="flex">
            <p
              style={{ color: "#444444" }}
              className=" ml-6px mr-49px text-12px"
            >
              1
            </p>
            <p style={{ color: "#682aa7" }} className="mr-7px text-13px">
              2.12
            </p>
          </div>
          <div
            style={{ borderColor: "#cccccc" }}
            className="flex border-l border-r border-solid "
          >
            <p
              style={{ color: "#444444" }}
              className="ml-7px mr-43px text-12px"
            >
              무
            </p>
            <p style={{ color: "#682aa7" }} className="mr-8px text-13px">
              3.59
            </p>
          </div>
          <div className="flex mr-7px">
            <p style={{ color: "#444444" }} className="ml-8px text-12px">
              2
            </p>
            <p style={{ color: "#682aa7" }} className="ml-36px text-13px">
              3.62
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionCard1;
