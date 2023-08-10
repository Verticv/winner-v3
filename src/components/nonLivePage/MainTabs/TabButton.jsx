import React from "react";

const TabButton = ({ item, isActiveTab, setActiveTab }) => {
  return (
    <div
      style={{
        borderBottom: isActiveTab === item.id ? "3px solid #ffc900" : "",
        width: `${item.width}}`,
      }}
      className="flex items-start z-10 mr-5px "
      onClick={() => setActiveTab(item.id)}
    >
      <img
        style={{
          marginLeft: `${item.marginLeft1}`,
        }}
        className="mt-px"
        src={item.icon}
        alt="icon"
      />
      <p
        style={{
          marginLeft: `${item.marginLeft}`,
          marginRight: `${item.marginRight}`,
        }}
        className="mt-6px mb-14px text-14px tracking-tight text-white font-malgun"
      >
        {item.text}
      </p>
    </div>
  );
};

export default TabButton;
