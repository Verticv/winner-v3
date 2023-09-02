import HorizontalMenu from "components/horizontalMenus/HorizontalMenu";
import MyPageTitle from "components/myPage/MyPageTitle";
import React, { useState } from "react";
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

import ContactTable from "./tables/ContactTable";
import Pagination from "components/myPage/Pagination";
import DropDownControls from "components/dropdowns/DropDownControls";
// import DownArrowIcon from '../../images/down_arrow_icon.png'
import DownArrowIcon from "../../images/arrows/arrow_down_gray.png";
import SearchIcon from "../../images/myPage/search.png";
import { useHistory } from "react-router";

const Contact = () => {
  const tabsArray = [
    { text: "전체", icon: Icon1, iconHighlight: IconHighlight1, id: 0, path: "/cscenter/contact/all" },
    {
      text: "라이브카지노",
      icon: Icon2,
      iconHighlight: IconHighlight2,
      id: 1,
      path: "/cscenter/contact/all/live-casino",
    },
    { text: "스포츠", icon: Icon3, iconHighlight: IconHighlight3, id: 2, path: "/cscenter/contact/all/slot" },
    {
      text: "실시간스포츠",
      icon: Icon14,
      iconHighlight: IconHighlight14,
      id: 14,
      path: "/cscenter/contact/all/live-sport",
    },
    { text: "슬롯게임", icon: Icon4, iconHighlight: IconHighlight4, id: 3, path: "/cscenter/contact/all/sports" },
    {
      text: "호텔카지노",
      icon: Icon5,
      iconHighlight: IconHighlight5,
      id: 4,
      path: "/cscenter/contact/all/hotel-casino",
    },
    { text: "홀덤게임", icon: Icon15, iconHighlight: IconHighlight15, id: 15, path: "/cscenter/contact/all/holdem" },
    { text: "e-스포츠", icon: Icon6, iconHighlight: IconHighlight6, id: 5, path: "/cscenter/contact/all/e-sports" },
    { text: "미니게임", icon: Icon7, iconHighlight: IconHighlight7, id: 6, path: "/cscenter/contact/all/minigame" },
    { text: "키론가상게임", icon: Icon8, iconHighlight: IconHighlight8, id: 7, path: "/cscenter/contact/all/ar-game" },
    {
      text: "피싱게임",
      icon: Icon9,
      iconHighlight: IconHighlight9,
      id: 8,
      path: "/cscenter/contact/all/phishing-game",
    },
    { text: "티비벳", icon: Icon10, iconHighlight: IconHighlight10, id: 9, path: "/cscenter/contact/all/bet" },
    {
      text: "충전/환전",
      icon: Icon11,
      iconHighlight: IconHighlight11,
      id: 10,
      path: "/cscenter/contact/all/transaction",
    },
    {
      text: "베팅관련",
      icon: Icon16,
      iconHighlight: IconHighlight16,
      id: 11,
      path: "/cscenter/contact/all/about-betting",
    },
    { text: "기타", icon: Icon13, iconHighlight: IconHighlight13, id: 12, path: "/cscenter/contact/all/other" },
  ];

  const inboxArray = [
    {
      id: 0,
      text: "은행계좌정보",
      isRead: false,
      time: "2021.06.29 07:35",
      category: "계좌문의",
      isClicked: true,
      path: "/cscenter/contact/view/1",
    },
    {
      id: 1,
      text: "스포츠북 문의",
      isRead: true,
      time: "2021.06.29 07:35",
      category: "스포츠북",
      path: "/cscenter/contact/view/2",
    },
    {
      id: 2,
      text: "카지노 문의",
      isRead: true,
      time: "2021.06.29 07:35",
      category: "카지노",
      path: "/cscenter/contact/view/3",
    },
    {
      id: 3,
      text: "키론가상게임 문의",
      isRead: true,
      time: "2021.06.29 07:35",
      category: "키론가상게임",
      path: "/cscenter/contact/view/4",
    },
    {
      id: 4,
      text: "미니게임 문의",
      isRead: true,
      time: "2021.06.29 07:35",
      category: "미니게임",
      path: "/cscenter/contact/view/5",
    },
    {
      id: 5,
      text: "슬롯 문의",
      isRead: true,
      time: "2021.06.29 07:35",
      category: "슬롯",
      path: "/cscenter/contact/view/6",
    },
    {
      id: 6,
      text: "충전환전 문의",
      isRead: false,
      time: "2021.06.29 07:35",
      category: "충전환전",
      path: "/cscenter/contact/view/7",
    },
    {
      id: 7,
      text: "베팅관련 문의",
      isRead: true,
      time: "2021.06.29 07:35",
      category: "베팅관련",
      path: "/cscenter/contact/view/8",
    },
    {
      id: 8,
      text: "문의드립니다",
      isRead: true,
      time: "2021.06.29 07:35",
      category: "기타",
      path: "/cscenter/contact/view/9",
    },
    {
      id: 9,
      text: "문의드립니다",
      isRead: false,
      time: "2021.06.29 07:35",
      category: "기타",
      path: "/cscenter/contact/view/10",
    },
  ];

  const [, setSelectedTab] = useState(0);
  const [page, setPage] = useState(0);
  const [selectedCarrier, setSelectedCarrier] = useState("제목");
  const [isDropdownOpen, setDropdownOpen] = useState(true);
  const [hoveredOption, setHoveredOption] = useState("");
  const history = useHistory();

  const dropDownCellClass = "flex w-full h-30px py-2px items-center px-12px";

  const searchDropdown = (
    <div
      style={{ width: "120px" }}
      className="mt-4px flex flex-col items-center justify-center overflow-hidden   rounded-2px border border-gray-404040 shadow-plain5 text-gray-ccc2b6  text-14px tracking-tight bg-white"
    >
      <div className="w-full p-px h-full overflow-x-hidden border-gray-2c2c2c">
        <button
          className={dropDownCellClass}
          style={{
            background: hoveredOption === "제목" ? "linear-gradient(to right, #9d3bbb, #5423a0)" : "",
            color: hoveredOption === "제목" ? "white" : "#666666",
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
            color: hoveredOption === "본문" ? "white" : "#666666",
          }}
          onClick={() => {
            setSelectedCarrier("제목");
            setDropdownOpen(false);
          }}
          onMouseOver={() => setHoveredOption("본문")}
          onMouseLeave={() => setHoveredOption("")}
        >
          본문
        </button>
        <button
          className={dropDownCellClass}
          style={{
            background: hoveredOption === "작성자" ? "linear-gradient(to right, #9d3bbb, #5423a0)" : "",
            color: hoveredOption === "작성자" ? "white" : "#666666",
          }}
          onClick={() => {
            setSelectedCarrier("작성자");
            setDropdownOpen(false);
          }}
          onMouseOver={() => setHoveredOption("작성자")}
          OnMouseLeave={() => setHoveredOption("")}
        >
          작성자
        </button>
      </div>
    </div>
  );

  const dropdownButton = (
    <div
      style={{ width: "120px" }}
      className="flex h-42px bg-dark-1a1a1a rounded-6px border border-p682aa7 text-r666666 bg-white mb-px"
    >
      <input className="w-0 text-16px" />
      <div className="flex w-full text-gray-ccc2b6 font-spoqaMedium text-14px outline-none h-full justify-between items-center tracking-tight">
        <label className="ml-14px cursor-pointer group-hover:text-gray-r8c8c8c">{selectedCarrier}</label>
        <img className="w-10px h-6px object-contain mr-10px" src={DownArrowIcon} alt="arrow" />
      </div>
    </div>
  );

  const InboxSearch = (
    <div
      className="h-62px w-full rounded-6px flex items-center justify-center space-x-10px"
      style={{ background: "rgba(52, 34, 103, 0.6)" }}
    >
      <DropDownControls buttonChild={dropdownButton} isDropdownOpen={isDropdownOpen} setDropdownOpen={setDropdownOpen}>
        {searchDropdown}
      </DropDownControls>

      <div style={{ width: "381px" }} className="flex h-42px  rounded-6px border border-p682aa7 relative">
        <input
          style={{ color: "#444" }}
          className="pl-11px placeholder-r666666 pb-2px w-full text-14px outline-none h-full justify-between items-center tracking-tight bg-dark-1a1a1a rounded-6px"
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
      <MyPageTitle title="문의하기" />

      <div className="relative w-full mt-12px">
        <HorizontalMenu
          itemsArray={tabsArray}
          hasRows={true}
          setSelectedTab={setSelectedTab}
          showSub={false}
          h_space={2}
          v_space={3}
        />

        <div className="mt-20px"></div>

        <ContactTable array={inboxArray} />

        <div className="mt-20px h-36px w-full flex items-center justify-end space-x-4px">
          <button
            className="flex items-center justify-center w-88px h-36px  rounded-6px  hover:filter hover:brightness-125 cursor-pointer"
            style={{
              background: "linear-gradient(to right, #ff7760, #f14a53)",
              boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
            }}
          >
            <span className=" tracking-tight text-14px text-white text-shadow-5 -mt-px">계좌문의</span>
          </button>
          <button
            className="flex items-center justify-center h-36px w-88px rounded-6px  p-px hover:filter hover:brightness-125 cursor-pointer"
            onClick={() => history.push("/cscenter/contact/compose")}
            style={{
              background: "linear-gradient(to right, #15cfee, #3197e5)",
              boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
              marginRight: "1px",
            }}
          >
            <span className="tracking-tight text-14px text-white text-shadow-5 -mt-px">문의작성</span>
          </button>
        </div>

        <div className="flex w-full justify-center mt-4px mb-60px">
          <Pagination page={page} setPage={setPage} />
        </div>

        <div className="-mt-29px mb-60px">{InboxSearch}</div>
      </div>
    </div>
  );
};

export default Contact;
