import React from "react";

const TabButton = ({ item, isActiveTab, setActiveTab }) => {
  return (
    <div
      style={{
        borderBottom: isActiveTab === item.id ? "3px solid #ffc900" : "",
        width: `${item.width}}`,
      }}
      className={`flex items-start z-10 mr-5px ${isActiveTab === item.id ? "opacity-100" : "opacity-70 hover:opacity-100"} `}
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
          marginTop: '7px'
        }}
        className="mb-14px text-14px tracking-tight text-white"
      >
        {item.text}
      </p>
    </div>
  );
};

export default TabButton;
