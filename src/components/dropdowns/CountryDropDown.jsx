import React, { useState } from "react";
import Koreaflag from "../../images/korea_flag.png";
import UKflag from "../../images/uk_flag.png";

const CountryDropDown = ({ setCountry, country }) => {
  const [selectedTab, setSelectedTab] = useState(country === "KR" ? 0 : 1);
  const [hoveredTab, setHoveredTab] = useState(null);

  const countriesArray = [
    { icon: Koreaflag, text: "KR", id: 0 },
    { icon: UKflag, text: "EN", id: 1 },
  ];

  function CountriesList({ items }) {
    return items.map((item) => (
      <button
        key={item.id}
        style={{
          height: "35px",
          background: selectedTab === item.id ? "linear-gradient(to right, #9b3ab9, #5523a0)" : "#ededeb",
        }}
        className={`${
          selectedTab === item.id ? "bg-brown-r3d3934" : hoveredTab === item.id ? "bg-opacity-5 bg-white" : ""
        } flex w-full items-center h-30px pl-5px`}
        onMouseOver={() => {
          setHoveredTab(item.id);
        }}
        onMouseLeave={() => setHoveredTab(null)}
        onClick={() => {
          setSelectedTab(item.id);
          setCountry(item.text);
        }}
      >
        <img
          style={{ width: "38px", height: "25px", borderRadius: "4px", boxShadow: "1px 0px 5px #00000050" }}
          className="object-contain"
          src={item.icon}
          alt="flag"
        ></img>
        <label
          style={{ color: selectedTab === item.id ? "#ffffff" : "#666666" }}
          className="font-spoqaMedium cursor-pointer text-14px ml-4px mt-px"
        >
          {item.text}
        </label>
      </button>
    ));
  }

  return (
    <div
      style={{ height: "70px", width: "70px", borderRadius: "6px", backgroundColor: "#ededeb", overflow: "hidden" }}
      className="flex flex-col shadow-plain -mt-13px -mr-2px"
    >
      <CountriesList items={countriesArray} />
    </div>
  );
};

export default CountryDropDown;
