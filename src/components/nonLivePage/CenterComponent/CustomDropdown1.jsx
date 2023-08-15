import React, { useState } from "react";
import img from "../../../images/nonLivePage/RightComponent/Arrow.png";
import "./CenterStyle.css";

const CustomDropdown1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = [
    "전체",
    "1시간",
    "2시간",
    "3시간",
    "6시간",
    "8시간",
    "12시간",
    "24시간",
    "48시간",
    "72시간",

    // Add more options as needed
  ];

  return (
    <div
      style={{
        background: "#ffffff",
        width: "77px",
        height: "27px",
        borderRadius: "4px",
      }}
      className="relative items-center justify-between rounded-lg "
    >
      <button
        type="button"
        className="flex items-center justify-between focus:outline-none"
        style={{ paddingTop: "3px" }}
        onClick={toggleDropdown}
      >
        <p
          style={{ color: "#444444", letterSpacing: "-0.031em" }}
          className="text-13px ml-9px font-malgun"
        >
          {" "}
          {selectedOption || "전체"}{" "}
        </p>
        <img
          src={img}
          alt="img"
          // ml-21px mt-2px
          style={{ top: "10px", right: "10px" }}
          className={`absolute transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          style={{
            background: "#666666",
            width: "79px",
            borderRadius: "4px",
          }}
          className="p-px absolute mt-6px -ml-px z-30"
        >
          <div
            style={{
              background: "#ffffff",
              width: "77px",
              borderRadius: "4px",
            }}
            className="hover relative items-center justify-between"
          >
            <ul>
              {options.map((option) => (
                <li
                  key={option}
                  className="py-2 px-2 text-13px cursor-pointer font-malgun"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown1;
