import React from "react";

const TabButton = ({ item }) => {
  return (
    <div
      style={{
        borderBottom: item.active ? "2px solid #ffc900" : "",
        width: `${item.width}}`,
      }}
      className="flex items-start z-10 mr-5px "
    >
      <img className="ml-15px" src={item.icon} alt="icon" />
      <p
        style={{
          marginLeft: `${item.marginLeft}`,
          marginRight: `${item.marginRight}`,
        }}
        className="mt-10px mb-12px text-14px tracking-tight text-white font-malgun"
      >
        {item.text}
      </p>
    </div>
  );
};

export default TabButton;
