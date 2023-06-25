import React, { useState } from "react";
import img from "../../../images/nonLivePage/RightComponent/Arrow.png";

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
      style={{ background: "#ffffff", width: "77px", height: "27px" }}
      className="relative items-center justify-between rounded-lg "
    >
      <button
        type="button"
        className="flex items-center justify-between focus:outline-none"
        onClick={toggleDropdown}
      >
        <p
          style={{ color: "#444444", letterSpacing: "-0.031em" }}
          className="text-13px ml-9px mt-6px mb-6px font-malgun"
        >
          {" "}
          {selectedOption || "전체"}{" "}
        </p>
        <img
          src={img}
          alt="img"
          className={`ml-21px mt-6px mb-9px transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-2 w-full bg-white rounded-md shadow-lg">
          {options.map((option) => (
            <li
              key={option}
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown1;
