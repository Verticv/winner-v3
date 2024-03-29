import HorizontalMenu from "components/horizontalMenus/HorizontalMenu";
import DropDownControls from "components/dropdowns/DropDownControls";
import MyPageTitle from "components/myPage/MyPageTitle";
import Pagination from "components/myPage/Pagination";
import React, { useState } from "react";
import DownArrowIcon from "../../images/arrows/arrow1.png";
import SearchIcon from "../../images/myPage/search.png";
import AnnouncementTable from "./tables/AnnouncementTable";
import Icon1 from "../../images/myPage/betHistory/icon_1.png";
import Icon2 from "../../images/myPage/betHistory/icon_2.png";
import Icon3 from "../../images/myPage/betHistory/icon_3.png";
import Icon4 from "../../images/myPage/betHistory/icon_4.png";
import Icon5 from "../../images/myPage/betHistory/icon_5.png";
import Icon6 from "../../images/myPage/betHistory/icon_7.png";
import Icon7 from "../../images/myPage/betHistory/icon_8.png";
import Icon8 from "../../images/myPage/betHistory/icon_9.png";
import Icon9 from "../../images/myPage/betHistory/icon_10.png";
import Icon10 from "../../images/cscenter/ico_10.png";
import Icon11 from "../../images/cscenter/ico_11.png";
import Icon13 from "../../images/cscenter/ico_13.png";
import Icon14 from "../../images/myPage/betHistory/icon_12.png";
import Icon15 from "../../images/myPage/betHistory/icon_6.png";
import Icon16 from "../../images/cscenter/ico_14.png";
import IconHighlight1 from "../../images/myPage/betHistory/Icon1_On.png";
import IconHighlight2 from "../../images/myPage/betHistory/Icon2_On.png";
import IconHighlight3 from "../../images/myPage/betHistory/Icon3_On.png";
import IconHighlight4 from "../../images/myPage/betHistory/Icon4_On.png";
import IconHighlight5 from "../../images/myPage/betHistory/Icon5_On.png";
import IconHighlight6 from "../../images/myPage/betHistory/Icon7_On.png";
import IconHighlight7 from "../../images/myPage/betHistory/Icon8_On.png";
import IconHighlight8 from "../../images/myPage/betHistory/Icon9_On.png";
import IconHighlight9 from "../../images/myPage/betHistory/Icon10_On.png";
import IconHighlight10 from "../../images/myPage/betHistory/Icon11_On.png";
import IconHighlight11 from "../../images/cscenter/Icon11_On.png";
import IconHighlight13 from "../../images/cscenter/Icon13_On.png";
import IconHighlight14 from "../../images/myPage/betHistory/Icon12_On.png";
import IconHighlight15 from "../../images/myPage/betHistory/Icon6_On.png";
import IconHighlight16 from "../../images/cscenter/Icon14_On.png";

const Announcement = () => {
  const tabsArray = [
    { text: "전체", icon: Icon1, iconHighlight: IconHighlight1, id: 0, path: "/cscenter/announcement/all" },
    {
      text: "라이브카지노",
      icon: Icon2,
      iconHighlight: IconHighlight2,
      id: 1,
      path: "/cscenter/announcement/live-casino",
    },
    { text: "스포츠", icon: Icon3, iconHighlight: IconHighlight3, id: 2, path: "/cscenter/announcement/slot" },
    {
      text: "라이브스포츠",
      icon: Icon14,
      iconHighlight: IconHighlight14,
      id: 14,
      path: "/cscenter/announcement/live-sport",
    },
    { text: "슬롯게임", icon: Icon4, iconHighlight: IconHighlight4, id: 3, path: "/cscenter/announcement/sports" },
    {
      text: "호텔카지노",
      icon: Icon5,
      iconHighlight: IconHighlight5,
      id: 4,
      path: "/cscenter/announcement/hotel-casino",
    },
    {
      text: "홀덤게임",
      icon: Icon15,
      iconHighlight: IconHighlight15,
      id: 15,
      path: "/cscenter/announcement/holdem",
    },
    {
      text: "e-스포츠",
      icon: Icon6,
      iconHighlight: IconHighlight6,
      id: 5,
      path: "/cscenter/announcement/e-sports",
    },
    {
      text: "미니게임",
      icon: Icon7,
      iconHighlight: IconHighlight7,
      id: 6,
      path: "/cscenter/announcement/minigame",
    },
    {
      text: "키론가상게임",
      icon: Icon8,
      iconHighlight: IconHighlight8,
      id: 7,
      path: "/cscenter/announcement/ar-game",
    },
    {
      text: "피싱게임",
      icon: Icon9,
      iconHighlight: IconHighlight9,
      id: 8,
      path: "/cscenter/announcement/phishing-game",
    },
    { text: "티비벳", icon: Icon10, iconHighlight: IconHighlight10, id: 9, path: "/cscenter/announcement/bet" },
    {
      text: "충전/환전",
      icon: Icon11,
      iconHighlight: IconHighlight11,
      id: 10,
      path: "/cscenter/announcement/transaction",
    },
    {
      text: "베팅관련",
      icon: Icon16,
      iconHighlight: IconHighlight16,
      id: 11,
      path: "/cscenter/announcement/about-betting",
    },
    { text: "기타", icon: Icon13, iconHighlight: IconHighlight13, id: 12, path: "/cscenter/announcement/other" },
  ];

  const [page, setPage] = useState(0);
  const [isDropdownOpen, setDropdownOpen] = useState(true);
  const [selectedCarrier, setSelectedCarrier] = useState("제목");

  const dropDownCellClass = "flex w-full h-30px py-2px  items-center  px-12px";
  const [hoveredOption, setHoveredOption] = useState("");

  const searchDropdown = (
    <div
      style={{ width: "120px" }}
      className="mt-4px flex flex-col items-center justify-center overflow-hidden rounded-6px border p-px  text-14px tracking-slight border-gray-404040 text-gray-ccc2b6 bg-white "
    >
      <button
        className={dropDownCellClass}
        style={{
          background: hoveredOption === "제목" ? "linear-gradient(to right, #9d3bbb, #5423a0)" : "",
          color: hoveredOption === "제목" ? "white" : "#444444",
        }}
        onClick={() => {
          setSelectedCarrier("제목");
          setDropdownOpen(false);
        }}
        onMouseOver={() => setHoveredOption("제목")}
        onMouseLeave={() => setHoveredOption("")}
      >
        제목
      </button>
      <button
        className={dropDownCellClass}
        style={{
          background: hoveredOption === "본문" ? "linear-gradient(to right, #9d3bbb, #5423a0)" : "",
          color: hoveredOption === "본문" ? "white" : "#444444",
        }}
        onClick={() => {
          setSelectedCarrier("본문");
          setDropdownOpen(false);
        }}
        onMouseOver={() => setHoveredOption("본문")}
        onMouseLeave={() => setHoveredOption("")}
      >
        본문
      </button>
    </div>
  );

  const dropdownButton = (
    <div
      style={{ width: "120px" }}
      className="flex h-42px bg-dark-1a1a1a rounded-6px border border-p682aa7 text-r444444 bg-white mb-px group"
    >
      <input className="w-0 text-16px" />
      <div className="flex w-full text-gray-ccc2b6 font-spoqaMedium text-14px outline-none h-full justify-between items-center tracking-slight">
        <label className="ml-14px cursor-pointer group-hover:text-gray-r8c8c8c">{selectedCarrier}</label>
        <img className="object-none mr-9px" src={DownArrowIcon} alt="arrow" />
      </div>
    </div>
  );

  const InboxSearch = (
    <div
      className="h-62px w-full rounded-6px  flex items-center justify-center space-x-10px"
      style={{ background: "rgba(52, 34, 103, 0.6)" }}
    >
      <DropDownControls buttonChild={dropdownButton} isDropdownOpen={isDropdownOpen} setDropdownOpen={setDropdownOpen}>
        {searchDropdown}
      </DropDownControls>

      <div style={{ width: "381px" }} className="flex h-42px  rounded-6px border border-p682aa7 relative">
        <input
          style={{ color: "#444" }}
          className="pl-11px rounded-md pb-2px placeholder-gray-c8c8c8 w-full font-spoqaMedium text-14px outline-none h-full justify-between items-center tracking-slight"
          placeholder="검색어를 입력해 주세요"
        />
        <button
          style={{ background: "linear-gradient(to top, #4f3a7a, #e597ff)" }}
          className="flex items-center justify-center w-42px h-42px rounded-6px  flex-shrink-0  filter hover:brightness-125 shadow-btn absolute -right-px -top-px z-10"
        >
          <div
            className="flex items-center justify-center w-40px  h-40px rounded-6px "
            style={{ background: "linear-gradient(0deg, #6b22ff, #df52ff)" }}
          >
            <img src={SearchIcon} alt="" />
          </div>
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <MyPageTitle title="공지사항" />
      <div className="mt-12px"></div>
      <HorizontalMenu itemsArray={tabsArray} hasRows={true} showSub={false} h_space={2} v_space={3} />
      <div className="mt-20px" />
      <AnnouncementTable />

      <div className="flex w-full justify-center mt-60px mb-60px">
        <Pagination page={page} setPage={setPage} />
      </div>

      <div className="-mt-29px mb-60px">{InboxSearch}</div>
    </div>
  );
};

export default Announcement;
