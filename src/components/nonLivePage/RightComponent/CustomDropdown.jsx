import React, { useState } from "react";
import img from "../../../images/nonLivePage/RightComponent/Arrow.png";

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = ["싱글", "멀티"];

  return (
    <div
      style={{ background: "#ffffff", width: "86px", height: "27px" }}
      className="relative items-center justify-between rounded-lg "
    >
      <button
        type="button"
        className="flex items-center justify-between focus:outline-none"
        onClick={toggleDropdown}
      >
        <p
          style={{ color: "#444444", letterSpacing: "-0.031em" }}
          className="text-13px mt-6px ml-9px font-malgun"
        >
          {" "}
          {selectedOption || "싱글"}{" "}
        </p>
        <img
          src={img}
          alt=""
          className={`ml-30px mt-3px transition-transform duration-300 ${
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

export default CustomDropdown;
