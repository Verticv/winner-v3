import React, { useState } from "react";
import { useHistory } from "react-router";
// import Reflect from "../../images/esports/esports_reflect.png";

const HorizontalMenu9 = ({ itemsArray, setSelectedTab, setSelectedSubTab = null }) => {
  const history = useHistory();
  const pathname = window.location.pathname;
  const [isHover, setHover] = useState(null);
  console.log(isHover + "");

  console.log(pathname);

  function TabsList({ items }) {
    return items.map((item) => (
      <button
        key={item.id}
        style={{
          height: "57px",
          background:
            pathname === item.path
              ? "linear-gradient( to top, #4f3a7a, #cb78e6)"
              : "linear-gradient( to top, #4f3a7a, #f0d3ff)",
          boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.6)",
        }}
        className="relative overflow-hidden w-full flex p-px items-end rounded-6px hover:filter hover:brightness-110"
        onClick={() => {
          history.push(item.path);
          setSelectedTab(item.id);
          if (setSelectedSubTab !== null) {
            setSelectedSubTab(0);
          }
        }}
        onMouseOver={() => setHover(item.path)}
        onMouseLeave={() => setHover(null)}
      >
        <div
          style={{
            height: "55px",
            background:
              pathname === item.path
                ? "linear-gradient(to top, #491f9c, #9e3cbc)"
                : "linear-gradient(to top, #ccc4ff, #ffd9f5)",
          }}
          className="w-full flex rounded-6px"
        >
          <div
            // style={{
            //   background:
            //     pathname === item.path
            //       ? "linear-gradient(to top, #8d7752, #dabe82)"
            //       : isHover === item.path
            //       ? "#54544f"
            //       : "linear-gradient( to top, rgb(50,50,49) 0%, rgb(84,84,82) 100%)",
            // }}
            className={`w-full rounded-3px flex flex-col justify-start pt-14px items-center relative`}
          >
            {/* {pathname === item.path && (
              <img className="absolute top-0 left-0" src={Reflect} alt="" />
            )} */}
            <span
              style={{ color: pathname === item.path ? "#ffffff" : "#5e399a" }}
              className={`${pathname === item.path ? "text-gray-252525" : "text-golden-ccc2b6"}
                          text-20px font-bold tracking-tight`}
            >
              {item.text}
            </span>
          </div>
        </div>
      </button>
    ));
  }

  return (
    <div className="flex w-full space-x-4px pr-3px pl-px">
      <TabsList items={itemsArray} />
    </div>
  );
};

export default HorizontalMenu9;
