import React, { useState } from "react";

const HorizontalMenu1 = ({ itemsArray, isState = 0, setState }) => {
  const [, setHover] = useState(null);

  function TabsList({ items }) {
    return items.map((item) => (
      <button
        key={item.id}
        style={{
          background:
            isState === item.id
              ? "linear-gradient( to top, #4f3a7a 0%, #a05bf6 50%, #cb78e6 100%)"
              : "linear-gradient( to top, #4f3a7a 0%, #a05bf6 50%, #f0d3ff 100%)",
          boxShadow: "0 2px 5px 0px rgba(0,0,0,0.6)",
          height: "99px",
        }}
        className="w-full flex items-end  relative overflow-hidden rounded-6px p-px filter hover:brightness-110"
        onClick={() => setState(item.id)}
        onMouseOver={() => setHover(item.id)}
        onMouseLeave={() => setHover(null)}
      >
        <div
          style={{
            height: "97px",
            background:
              isState === item.id
                ? "linear-gradient(to top, #491f9c, #9e3cbc)"
                : "linear-gradient( to top, #ccc4ff, #ffd9f5 100%)",
          }}
          className={`w-full rounded-6px flex flex-col items-center`}
        >
          <img className="ml-px object-none mt-4px" src={isState === item.id ? item.iconHighlight : item.icon} alt="" />

          <div
            style={{ color: isState === item.id ? "#fff" : "32d2834" }}
            className={` 
                            text-14px tracking-tight h-14px flex items-center -mt-3px`}
          >
            {item.text}
          </div>
          <div
            style={{
              backgroundColor: isState === item.id ? "#281d45" : "#69637f",
              minWidth: "38px",
            }}
            className={`text-white text-12px font-roboto tracking-tight px-9px mt-9px h-17px rounded-full flex items-center justify-center`}
          >
            <p className="-mt-px">{item.number}</p>
          </div>
        </div>
      </button>
    ));
  }

  return (
    <div style={{ height: "98px" }} className="flex w-full space-x-3px px-3px ">
      <TabsList items={itemsArray} />
    </div>
  );
};

export default HorizontalMenu1;
