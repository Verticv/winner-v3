import React from "react";

const HorizontalMenu8 = ({
  itemsArray,
  selectedTab = 0,
  setSelectedTab,
  setSelectedSubTab,
}) => {
  // const [isHover, setHover] = useState(null);

  function TabsList({ items }) {
    return items.map((item) => (
      <div className="relative">
        <button
          key={item.id}
          style={{
            height: "78px",
            width: "111px",
            background:
              selectedTab === item.id
                ? "linear-gradient( to top, #4f3a7a, #cb78e6)"
                : "linear-gradient( to top, #4f3a7a, #f0d3ff)",
            boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.6)",
          }}
          className={`relative overflow-hidden rounded-6px flex items-end pl-px`}
          onClick={() => {
            setSelectedTab(item.id);
            setSelectedSubTab(0);
          }}
          // onMouseOver={() => setHover(item.id)}
          // onMouseLeave={() => setHover(null)}
        >
          <div
            style={{
              height: "76px",
              width: "109px",
              background:
                selectedTab === item.id
                  ? "linear-gradient(to top, #491f9c, #9e3cbc)"
                  : "linear-gradient(to top, #ccc4ff, #ffd9f5)",
            }}
            className={`w-full flex absolute top-0 rounded-6px mt-px`}
          >
            <div
              style={{
                height: "76px",
                background:
                  selectedTab === item.id
                    ? "linear-gradient(to top, #491f9c, #9e3cbc)"
                    : // : isHover === item.id
                      // ? "#54544f"
                      "linear-gradient(to top, #ccc4ff, #ffd9f5)",
              }}
              className={` w-full rounded-6px flex flex-col justify-end items-center relative hover:filter hover:brightness-90`}
            >
              <img
                className=" object-none"
                src={selectedTab === item.id ? item.iconHighlight : item.icon}
                alt=""
              />
              <span
                className={`${
                  selectedTab === item.id ? "text-white" : "text-golden-ccc2b6"
                } 
                          text-14px font-spoqaMedium tracking-tight -mt-2px mb-5px`}
              >
                {item.text}
              </span>
            </div>
          </div>
        </button>
        {selectedTab !== 2 &&
          selectedTab !== 4 &&
          selectedTab !== 8 &&
          selectedTab === item.id && (
            <div
              className={`absolute bottom-0 left-46px w-20px -mb-12px overflow-hidden inline-block `}
            >
              <div
                style={{
                  background: "#2b2b2a",
                }}
                className="h-15px w-15px bg-gradient-to-br from-gray-d2dfea via-gray-eff3f6 to-gray-eff3f6 rotate-45 transform origin-bottom-left"
              ></div>
            </div>
          )}
      </div>
    ));
  }

  return (
    <div
      style={{ backgroundColor: "#c2acef", height: "98px", width: "1040px" }}
      className="flex space-x-3px px-9px pt-10px rounded-6px ml-px"
    >
      <TabsList items={itemsArray} />
    </div>
  );
};

export default HorizontalMenu8;
