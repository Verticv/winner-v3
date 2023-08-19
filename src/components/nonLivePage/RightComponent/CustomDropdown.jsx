import React, { useEffect, useState } from "react";
import img from "../../../images/nonLivePage/RightComponent/Arrow.png";
import { useSelector } from "react-redux";

const CustomDropdown = ({ selectedOption, setSelectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState("");
  const isSingle = useSelector((state) => state?.nonLive?.betSlip?.isSingle);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    if (isSingle) {
      setSelectedOption("싱글");
    } else {
      setSelectedOption("멀티");
    }
    // eslint-disable-next-line
  }, [isSingle]);

  const options = ["싱글", "멀티"];

  return (
    <div
      style={{
        background: "#ffffff",
        width: "86px",
        height: "27px",
        borderRadius: "4px",
      }}
      className="relative items-center justify-between  "
    >
      <button
        type="button"
        className="flex items-center justify-between focus:outline-none"
        onClick={toggleDropdown}
      >
        <p
          style={{ color: "#444444", letterSpacing: "-0.031em" }}
          className="text-13px mt-4px ml-9px font-malgun"
        >
          {" "}
          {selectedOption || "싱글"}{" "}
        </p>
        <img
          src={img}
          alt="img"
          className={`ml-30px -mb-2px mt-3px transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          style={{
            background: "#666666",
            width: "88px",
            borderRadius: "4px",
          }}
          className="p-px absolute mt-6px -ml-px"
        >
          <div
            style={{
              background: "#ffffff",
              width: "86px",
              // height: "27px",
              borderRadius: "4px",
            }}
            className="hover relative items-center justify-between"
          >
            <ul>
              {options.map((option) => (
                <li
                  key={option}
                  style={{ paddingTop: "0.2rem", paddingBottom: "0.2rem" }}
                  className="py-2 px-2 text-13px cursor-pointer"
                  onClick={() => {
                    handleOptionSelect(option);
                  }}
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

export default CustomDropdown;
