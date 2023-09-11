import React, { useState } from "react";
import DropDownControls from "components/dropdowns/DropDownControls";
import ArrowDownGray from "../../images/arrows/arrow_down_gray.png";

import CustomDatePicker from "components/CustomDatePicker";

const DateSearchBar = ({
  isLeagueSearch = false,
  hasIdSearch = false,
  has3MonthSearch = false,
  isGameResultsSearch = false,
  isPopup = false,
  isSports = false,
  fullWidth = false,
}) => {
  const LeagueExampleArray = [
    { id: 0, text: "League1" },
    { id: 1, text: "League2" },
    { id: 2, text: "League3" },
    { id: 3, text: "League4" },
    { id: 4, text: "League5" },
    { id: 5, text: "League6" },
    { id: 6, text: "League7" },
    { id: 7, text: "League8" },
    { id: 8, text: "League9" },
    { id: 9, text: "League10" },
  ];

  const pathname = window.location.pathname;

  // const [startDate, setStartDate] = useState(new Date())
  // const [endDate, setEndDate] = useState(new Date())
  const [isDropdownOpen, setDropdownOpen] = useState(true);
  const [selectedCarrier, setSelectedCarrier] = useState("리그선택");
  const [hoveredOption, setHoveredOption] = useState("");
  const dropDownCellClass = "flex w-full h-30px py-2px bg-gray-1f1f1e items-center hover:bg-brown-r3d3934 px-12px";

  const gameResultButton = (
    <div
      style={{ width: "138px", height: "42px", borderColor: "#a088d7" }}
      className="flex items-center justify-between  placeholder-gray-r8c8c8c outline-none rounded-6px border px-10px font-medium text-14px tracking-slight hover:text-gray-r8c8c8c border-p682aa7 text-r444444 bg-white mb-px"
    >
      <p className="">{selectedCarrier}</p>
      <img src={ArrowDownGray} alt="" className="pt-px" />
    </div>
  );

  function DropdownCells({ items }) {
    return items.map((item) => (
      <button
        className={dropDownCellClass}
        style={{
          background: hoveredOption === item.text ? "linear-gradient(to right, #9d3bbb, #5423a0)" : "",
          color: hoveredOption === item.text ? "white" : "#444444",
        }}
        onClick={() => {
          setSelectedCarrier(item.text);
          setDropdownOpen(false);
        }}
        onMouseOver={() => setHoveredOption(item.text)}
        onMouseLeave={() => setHoveredOption("")}
      >
        {item.text}
      </button>
    ));
  }

  const searchDropdown = (
    <div
      style={{ height: "249px", width: "138px" }}
      className="mt-4px flex flex-col items-center justify-center overflow-hidden rounded-2px border  font-medium text-14px tracking-slight border-gray-404040 text-gray-ccc2b6 bg-white"
    >
      <div className="w-full p-px h-full overflow-y-scroll overflow-x-hidden border-gray-2c2c2c scroll-div3">
        <DropdownCells items={LeagueExampleArray} />
      </div>
    </div>
  );

  const InboxSearch = (
    <DropDownControls buttonChild={gameResultButton} isDropdownOpen={isDropdownOpen} setDropdownOpen={setDropdownOpen}>
      {searchDropdown}
    </DropDownControls>
  );

  return (
    <div
      className={`h-62px ${
        !pathname.includes("/freeboard-compose") && "mt-10px"
      } flex items-center justify-center space-x-10px rounded-6px w-full`}
      style={{
        background: isPopup ? "#5e399a" : "rgba(52, 34, 103, 0.6)",
        maxWidth: !isSports && !fullWidth && "1041px",
        paddingRight: !isSports && "0.5px",
      }}
    >
      {isLeagueSearch === true && (
        <div className="space-x-5px">
          <input
            placeholder="리그선택"
            style={{ width: "138px" }}
            className="pt-px mt-px placeholder-gray-c8c8c8 flex-shrink-0 outline-none h-42px rounded-6px border  px-10px font-medium text-14px tracking-slight border-p682aa7 text-r444444 bg-dark-1a1a1a"
          />
          <input
            placeholder="팀명검색"
            style={{ width: "138px" }}
            className="pt-px mt-px placeholder-gray-c8c8c8 flex-shrink-0 outline-none h-42px rounded-6px border  px-10px font-medium text-14px tracking-slight border-p682aa7 text-r444444 bg-dark-1a1a1a"
          />
        </div>
      )}
      {isGameResultsSearch === true && (
        <div className="space-x-5px flex">
          <div className="pt-px">{InboxSearch}</div>
          <input
            placeholder="팀명검색"
            style={{ width: "138px" }}
            className="mt-px placeholder-gray-c8c8c8 flex-shrink-0 outline-none h-42px rounded-6px border  px-10px font-medium text-14px tracking-slight  border-p682aa7 text-r444444 pb-px"
          />
        </div>
      )}

      <div style={{ width: "304px" }} className="flex space-x-10px items-center h-full">
        <div className="relative">
          <CustomDatePicker
            classes={`flex-shrink-0 outline-none w-138px h-42px rounded-7px border border-p682aa7 px-10px font-medium text-14px tracking-slight text-r444444 focus:ml-10px pb-2px `}
          />
        </div>
        <div>
          <span className="font-medium text-14px text-white" style={{ letterSpacing: "-0.13rem", marginLeft: "-1px" }}>
            ~
          </span>
        </div>

        <div className="relative">
          <CustomDatePicker
            classes={`flex-shrink-0 outline-none w-138px h-42px rounded-7px border border-p682aa7 px-10px font-medium text-14px tracking-slight text-r444444 pb-2px`}
          />
        </div>
      </div>
      <div className="flex h-full space-x-5px items-center" style={{ marginLeft: "9px" }}>
        <div
          className="flex items-center justify-center h-42px w-75px rounded-6px p-px shadow-link hover:filter hover:brightness-125"
          style={{ background: "linear-gradient(to top, #ada8a8, #d0d0d0)" }}
        >
          <div
            className="flex items-center justify-center h-40px w-73px rounded-6px  cursor-pointer"
            style={{ background: "linear-gradient(0deg, #e5e5e5, #ffffff)" }}
          >
            <span className="font-medium tracking-slight text-14px  pt-px text-r444444">오늘</span>
          </div>
        </div>

        <div
          className="flex items-center justify-center h-42px w-75px rounded-6px p-px shadow-link hover:filter hover:brightness-125"
          style={{ background: "linear-gradient(to top, #ada8a8, #d0d0d0)" }}
        >
          <div
            className="flex items-center justify-center h-40px w-73px rounded-6px cursor-pointer"
            style={{ background: "linear-gradient(0deg, #e5e5e5, #ffffff)" }}
          >
            <span className="font-medium tracking-slight text-14px  pt-px text-r444444">1주일</span>
          </div>
        </div>

        <div
          className="flex items-center justify-center h-42px w-75px rounded-6px p-px shadow-link hover:filter hover:brightness-125"
          style={{ background: "linear-gradient(to top, #ada8a8, #d0d0d0)" }}
        >
          <div
            className="flex items-center justify-center h-40px w-73px rounded-6px cursor-pointer"
            style={{ background: "linear-gradient(0deg, #e5e5e5, #ffffff)" }}
          >
            <span className="font-medium tracking-slight text-14px  pt-px text-r444444">15일</span>
          </div>
        </div>

        <div
          className="flex items-center justify-center h-42px w-75px rounded-6px p-px shadow-link hover:filter hover:brightness-125"
          style={{ background: "linear-gradient(to top, #ada8a8, #d0d0d0)" }}
        >
          <div
            className="flex items-center justify-center h-40px w-73px rounded-6px cursor-pointer"
            style={{ background: "linear-gradient(0deg, #e5e5e5, #ffffff)" }}
          >
            <span className="font-medium tracking-slight text-14px  pt-px text-r444444">1개월</span>
          </div>
        </div>

        {has3MonthSearch && (
          <div
            className="flex items-center justify-center h-42px w-75px rounded-6px p-px shadow-link hover:filter hover:brightness-125"
            style={{ background: "linear-gradient(to top, #ada8a8, #d0d0d0)" }}
          >
            <div
              className="flex items-center justify-center h-40px w-73px  rounded-6px cursor-pointer"
              style={{ background: "linear-gradient(0deg, #e5e5e5, #ffffff)" }}
            >
              <span className="font-medium tracking-slight text-14px pt-px text-r444444"> 3개월</span>
            </div>
          </div>
        )}

        {window.location.pathname === "/mypage/points/points-accumulate-history" && (
          <div className="pl-5px">
            <input
              placeholder="아이디 입력"
              className={`bg-white flex-shrink-0 outline-none w-138px h-42px rounded-7px border border-p682aa7 px-10px font-medium text-14px tracking-slight text-r444444`}
            />
          </div>
        )}

        {!hasIdSearch ? (
          <div
            className="flex items-center justify-center h-42px w-75px rounded-6px shadow-link hover:filter hover:brightness-125"
            style={{ background: "linear-gradient(to top, #4f3a7a, #e597ff)" }}
          >
            <div
              className="flex items-center justify-center h-40px w-73px rounded-6px cursor-pointer"
              style={{ background: "linear-gradient(0deg, #6b22ff, #df52ff)" }}
            >
              <span className="font-medium tracking-slight text-14px  pt-px text-white text-shadow-5">검색</span>
            </div>
          </div>
        ) : (
          <div
            className="flex items-center justify-center h-42px w-75px rounded-6px shadow-link hover:filter hover:brightness-125"
            style={{ background: "linear-gradient(to top, #ada8a8, #d0d0d0)" }}
          >
            <div
              className="flex items-center justify-center h-40px w-73px  rounded-6px cursor-pointer"
              style={{ background: "linear-gradient(0deg, #e5e5e5, #ffffff)" }}
            >
              <span className="font-medium tracking-slight text-14px text-r444444 pt-px">3개월</span>
            </div>
          </div>
        )}
      </div>

      {hasIdSearch && (
        <div className="flex space-x-5px">
          <input
            className="w-138px h-42px rounded-6px border outline-none text-14px font-medium tracking-slight px-10px border-p682aa7 text-r444444 bg-dark-1a1a1a"
            placeholder="아이디 입력"
          />
          <div
            style={{
              width: "75px",
              height: "42px",
              background: "linear-gradient(to top, #4f3a7a, #e597ff)",
            }}
            className="flex items-center justify-center rounded-6px  hover:opacity-75 shadow-link hover:filter hover:brightness-125"
          >
            <div
              style={{
                width: "73px",
                height: "40px",
                background: "linear-gradient(0deg, #6b22ff, #df52ff)",
              }}
              className="flex items-center justify-center rounded-6px  cursor-pointer"
            >
              <span className="font-medium tracking-slight text-14px text-white text-shadow-5">검색</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateSearchBar;
