import React from "react";

const TabsComponent = ({
  tabsData,
  tabsChildren,
  selectedTab,
  setSelectedTab,
  headerLeftComponent,
  headerRightComponent,
}) => {
  const handleTabClick = (id) => {
    setSelectedTab(id);
  };

  const ContentComponent = tabsChildren?.[selectedTab - 1];

  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex justify-between items-end mb-6px">
        {headerLeftComponent}
        <div className="flex justify-end items-end">
          {/* Start TabsComponent */}
          <div
            style={{ width: "536px", height: "28px" }}
            className="relative overflow-hidden bg-white z-10 p-2px rounded-full flex"
          >
            <div
              className="absolute left-0 top-0 bottom-0 transition-all duration-500 rounded-12px m-2px"
              style={{
                width: "33.4%",
                zIndex: -1,
                background: "linear-gradient(to right, #df52ff, #6b22ff)",
                transform: `translateX(${
                  selectedTab === tabsData[0].id ? "0%" : selectedTab === tabsData[1].id ? "100%" : "197%"
                })`,
              }}
            />
            <button
              className="w-1/3 h-full text-white text-14px rounded-md font-spoqaMedium cursor-pointer transition-colors duration-500 flex items-center justify-center"
              onClick={() => handleTabClick(tabsData[0].id)}
              style={{
                color: selectedTab === tabsData[0].id ? "#fff" : "#5e399a",
              }}
            >
              <p className="text-14px h-14px flex items-center justify-center tracking-tight mt-px">{tabsData[0].label}</p>
            </button>
            <button
              className="w-1/3 h-full text-white text-14px rounded-md font-spoqaMedium cursor-pointer transition-colors duration-500 flex items-center justify-center"
              onClick={() => handleTabClick(tabsData[1].id)}
              style={{
                color: selectedTab === tabsData[1].id ? "#fff" : "#5e399a",
              }}
            >
              <p className="text-14px h-14px flex items-center justify-center tracking-tight mt-px">{tabsData[1].label}</p>
            </button>
            <button
              className="w-1/3 h-full text-white text-14px rounded-md font-spoqaMedium cursor-pointer transition-colors duration-500 flex items-center justify-center"
              onClick={() => handleTabClick(tabsData[2].id)}
              style={{
                color: selectedTab === tabsData[2].id ? "#fff" : "#5e399a",
              }}
            >
              <p className="text-14px h-14px flex items-center justify-center tracking-tight mt-px">{tabsData[2].label}</p>
            </button>
          </div>
          {/* End TabsComponent */}
          {headerRightComponent}
        </div>
      </div>
      {ContentComponent}
    </div>
  );
};

export default TabsComponent;
