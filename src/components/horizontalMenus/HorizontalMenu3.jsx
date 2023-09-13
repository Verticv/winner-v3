import React from "react";
import { useHistory } from "react-router";
import ClockIcon from "../../images/minigames/clock_icon.png";
import ClockIconGray from "../../images/minigames/clock_gray.png";

const HorizontalMenu3 = ({ itemsArray, selectedTab = "", setSelectedTab, setSelectedTab1, setSelectedOption }) => {
  const history = useHistory();
  // const [isHover, setHover] = useState(null)

  function TabsList({ items }) {
    return items.map((item) => (
      <button
        key={item.id}
        style={{
          width: item.id === 0 || item.id === 1 ? "313px" : "314px",
          height: "59px",
          background:
            selectedTab === item.path
              ? "linear-gradient( to top, #4f3a7a 0%, #a05bf6 50%, #cb78e6 100%)"
              : "linear-gradient( to top, #4f3a7a 0%, #a05bf6 50%, #f0d3ff 100%)",
          boxShadow: "0 2px 5px rgba(0,0,0,0.6)",
        }}
        className={`relative overflow-hidden h-59px w-full flex items-end p-px rounded-6px hover:filter hover:brightness-110`}
        onClick={() => {
          setSelectedTab(item.path);
          setSelectedTab1(0);
          history.push(item.path);
          setSelectedOption([
            {
              type: "",
              name: "",
              selection: "",
              buttonType: "",
              subtitle: null,
            },
          ]);
        }}
        // onMouseOver={() => setHover(item.path)}
        // onMouseLeave={() => setHover(null)}
      >
        <div
          style={{
            height: "57px",
            background:
              selectedTab === item.path
                ? "linear-gradient(to top, #491f9c 0%, #9e3cbc 100%)"
                : "linear-gradient( to top, #ccc4ff 0%, #ffd9f5 100%)",
          }}
          className={` ${
            selectedTab === item.path ? "pr-21px" : "pr-20px"
          } w-full rounded-6px flex items-center justify-between relative`}
        >
          <div className={`flex items-center`}>
            <img
              className={`
                  mt-px
                  ${item.id === 0 ? "ml-15px" : item.id === 1 ? "ml-13px" : item.id === 2 ? "ml-19px" : "ml-21px"}`}
              src={item.img}
              alt=""
            />

            <span
              style={{ color: selectedTab === item.path ? "#ffffff" : "#5e399a", letterSpacing: "-0.05em" }}
              className={`-mt-2px
                  ${
                    item.id === 0 ? "ml-4px" : item.id === 1 ? "ml-6px" : item.id === 2 ? "ml-8px" : "ml-7px"
                  } text-17px font-bold`}
            >
              {item.text}
            </span>
          </div>

          <div className="flex items-center pt-px">
            <img
              className={` mr-4px object-none mb-4px mt-px`}
              src={selectedTab === item.path ? ClockIconGray : ClockIcon}
              alt=""
            />
            <div
              style={{ color: selectedTab === item.path ? "#ffffff" : "#5e399a" }}
              className="text-24px tracking-tight font-swagger flex h-24px items-center mt-px"
            >
              {item.time}
            </div>
          </div>
        </div>
      </button>
    ));
  }

  return (
    <div className="flex w-full h-59px space-x-2px">
      <TabsList items={itemsArray} />
    </div>
  );
};

export default HorizontalMenu3;
