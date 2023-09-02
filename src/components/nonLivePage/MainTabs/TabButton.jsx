import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const TabButton = ({ item, setActiveTab }) => {
  const history = useHistory();
  const location = useLocation();
  return (
    <div
      style={{
        borderBottom: location.pathname === item.path ? "3px solid #ffc900" : "",
        width: `${item.width}}`,
      }}
      className={`flex items-start z-10 mr-5px ${
        location.pathname === item.path ? "opacity-100" : "opacity-70 hover:opacity-100"
      } `}
      onClick={() => {
        setActiveTab(item.id);
        history.push(item.path);
      }}
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
          marginTop: "7px",
        }}
        className="mb-14px text-14px tracking-tight text-white"
      >
        {item.text}
      </p>
    </div>
  );
};

export default TabButton;
