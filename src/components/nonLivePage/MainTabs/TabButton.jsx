import React from "react";

const TabButton = ({ item }) => {
  return (
    <div
      style={{ borderBottom: item.active ? "2px solid #ffc900" : "" }}
      className="flex items-start z-10 mr-5px pr-15px pl-15px "
    >
      <img src={item.icon} alt="icon" />
      <p className="ml-5px mt-6px text-14px tracking-tight text-white">
        {item.text}
      </p>
    </div>
  );
};

export default TabButton;
