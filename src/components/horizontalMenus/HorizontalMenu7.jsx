import React from "react";
import { useHistory } from "react-router";

const HorizontalMenu7 = ({ itemsArray }) => {
  const history = useHistory();
  const pathname = window.location.pathname;

  function TabsList({ items }) {
    return items.map((item) => (
      <button
        key={item.id}
        className={`relative overflow-hidden w-full rounded-6px flex items-end p-px filter hover:brightness-110`}
        style={{
          height: "78px",
          background:
            pathname === item.path
              ? "linear-gradient( to top, #4f3a7a 0, #a05bf6 50%, #cb78e6 100%)"
              : "linear-gradient( to top, #4f3a7a 0, #a05bf6 50%, #f0d3ff 100%)",
          boxShadow: "0 2px 2px 0px rgba(0,0,0,0.4)",
        }}
        onClick={() => {
          history.push(item.path);
        }}
      >
        <div
          style={{
            background:
              pathname === item.path
                ? "linear-gradient( to top, #491f9c 0%, #9e3cbc 100%)"
                : "linear-gradient( to top, #ccc4ff 0%, #ffd9f5 100%)",
          }}
          className={`w-full rounded-6px flex flex-col justify-end items-center h-76px relative hover:filter pb-4px`}
        >
          <img className="mt-8px ml-2px object-none" src={item.icon} alt="" />
          <span
            style={{
              color: pathname === item.path ? "#ffffff" : "#2d2834",
              letterSpacing: "-0.1em",
            }}
            className={` text-14px tracking-tight  flex items-center mt-6px font-semibold`}
          >
            {item.text}
          </span>
        </div>
      </button>
    ));
  }

  return (
    <div className="flex w-full h-80px space-x-3px  pl-4px pr-3px">
      <TabsList items={itemsArray} />
    </div>
  );
};

export default HorizontalMenu7;
