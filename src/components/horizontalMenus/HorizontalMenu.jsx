import React, { useState } from "react";
import { useHistory } from "react-router";
const HorizontalMenu = ({
  itemsArray,
  setSelectedSubTab = null,
  setSelectedTabPopup,
  showSub = true,
  hasRows = false,
  h_space = 3,
  v_space = 3,
}) => {
  const history = useHistory();
  const pathname = window.location.pathname;
  const [selectedTab, setSelectedTab] = useState(0);
  function TabsList({ items }) {
    return items.map((item) => (
      <div className={`relative w-full`}>
        <button
          key={item.id}
          style={{
            background:
              pathname === item.path
                ? "linear-gradient(to top, #4f3a7a, #a05bf6 50%, #cb78e6 100%)"
                : "linear-gradient(to top, #4f3a7a, #a05bf6 50%, #f0d3ff 100%)",
          }}
          className={`${
            pathname === item.path ? "flex-shrink" : "flex-shrink"
          } relative overflow-hidden h-78px w-full flex items-center rounded-6px p-px shadow-link`}
          onClick={() => {
            history.push(item.path);
            setSelectedTab(item.id);
            if (setSelectedTabPopup) {
              setSelectedTabPopup(item.path);
            }
            if (setSelectedSubTab !== null) {
              setSelectedSubTab(0);
            }
          }}
        >
          <div
            style={{
              background:
                pathname === item.path
                  ? "linear-gradient(to top, #491f9c, #9e3cbc)"
                  : "linear-gradient(to top, #ccc4ff, #ffd8f5)",
            }}
            className={`w-full rounded-6px flex flex-col justify-start items-center relative hover:filter hover:brightness-110 h-76px pt-5px pb-6px`}
          >
            <img
              className="object-none h-48px w-48px"
              src={pathname === item.path ? item.iconHighlight : item.icon}
              alt=""
            />

            <span
              className={`${pathname === item.path ? "text-black" : "text-golden-ccc2b6"} 
                  text-13px tracking-Stightest mt-px`}
              style={{
                color: pathname === item.path ? "#fff" : "#2d2834",
                lineHeight: "1.2",
              }}
            >
              {item.text}
            </span>
          </div>
        </button>
        {showSub &&
          selectedTab !== 0 &&
          selectedTab !== 2 &&
          selectedTab !== 5 &&
          selectedTab !== 9 &&
          selectedTab !== 11 &&
          selectedTab !== 10 &&
          selectedTab === item.id && (
            <div
              className={` absolute -bottom-10px left-39px`}
              style={{
                borderStyle: "solid",
                borderWidth: " 0 7px 9px 7px",
                borderColor: setSelectedTabPopup
                  ? "transparent transparent #5e399a transparent"
                  : selectedTab === 1
                  ? "transparent transparent #552986 transparent"
                  : selectedTab === 3
                  ? "transparent transparent #4f2783 transparent"
                  : selectedTab === 4
                  ? "transparent transparent #4c2682 transparent"
                  : selectedTab === 6
                  ? "transparent transparent #452480 transparent"
                  : selectedTab === 7
                  ? "transparent transparent #43237f transparent"
                  : selectedTab === 8
                  ? "transparent transparent #41227e transparent"
                  : "transparent  transparent  #562a86 transparent ",
                left: setSelectedTabPopup ? "41px" : "35px",
                marginBottom: setSelectedTabPopup && "-10px",
              }}
            >
              {/* <div style={{
              background:'#562a86'
            }} className="h-15px w-15px rotate-45 transform origin-bottom-left"></div> */}
            </div>
          )}
      </div>
    ));
  }

  return (
    <>
      {!hasRows ? (
        <div className={`flex justify-start w-full h-78px space-x-2px px-5px`}>
          <TabsList items={itemsArray} />
        </div>
      ) : (
        <div className={`grid grid-cols-10 gap-x-${h_space}px gap-y-${v_space}px justify-between w-full pl-3px pr-3px`}>
          <TabsList items={itemsArray} />
        </div>
      )}
    </>
  );
};

export default HorizontalMenu;
