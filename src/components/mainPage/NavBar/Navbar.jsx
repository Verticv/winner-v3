import React, { useState } from "react";
import NavbarHover from "../../hovers/NavbarHover";
import Item1 from "../../../images/navBar/item_1.png";
import Item2 from "../../../images/navBar/item_2.png";
import Item3 from "../../../images/navBar/item_3.png";
import Item4 from "../../../images/navBar/item_4.png";
import Item5 from "../../../images/navBar/item_5.png";
import Item6 from "../../../images/navBar/item_6.png";
import Item7 from "../../../images/navBar/item_7.png";
import Item8 from "../../../images/navBar/item_8.png";
import Item9 from "../../../images/navBar/item_9.png";
import Item10 from "../../../images/navBar/item_10.png";
import Item11 from "../../../images/navBar/item_11.png";

import Item1Active from "../../../images/navBar/item_1_active.png";
import Item2Active from "../../../images/navBar/item_2_active.png";
import Item3Active from "../../../images/navBar/item_3_active.png";
import Item4Active from "../../../images/navBar/item_4_active.png";
import Item5Active from "../../../images/navBar/item_5_active.png";
import Item6Active from "../../../images/navBar/item_6_active.png";
import Item7Active from "../../../images/navBar/item_7_active.png";
import Item8Active from "../../../images/navBar/item_8_active.png";
import Item9Active from "../../../images/navBar/item_9_active.png";
import Item10Active from "../../../images/navBar/item_10_active.png";
import Item11Active from "../../../images/navBar/item_11_active.png";

import MyMenuIcon from "../../../images/navBar/managment/my_menu.png";
import MyMenuActiveIcon from "../../../images/navBar/managment/my_menu_active.png";
import ContactIcon from "../../../images/navBar/managment/contact.png";
import ContactActiveIcon from "../../../images/navBar/managment/contact_active.png";
import MessageIconOn from "../../../images/navBar/managment/message_on.png";
import MessageIcon from "../../../images/navBar/managment/message.png";
import CouponIcon from "../../../images/navBar/managment/coupon.png";
import CouponIconOn from "../../../images/navBar/managment/coupon_on.png";

import { useHistory } from "react-router-dom";
import TopBar from "../TopBar";
import DropdownButton from "./DropdownButton";
import LinkButton from "./LinkButton";
import NoticeBanner from "../NoticeBanner";

const Navbar = ({ isAuthenticated, setAuth }) => {
  const history = useHistory();
  const location = window.location.pathname;

  const [selectedTab, setSelectedTab] = useState();
  const [hoveredTab, setHoveredTab] = useState();

  const tabClass =
    "flex-shrink-0 text-r2d2834 hover:text-white relative flex flex-col items-center justify-center cursor-pointer";
  const selectedTabClass =
    "flex-shrink-0 relative flex flex-col items-center justify-center cursor-pointer text-white cursor-pointer";

  const tabsArray = [
    { id: 0, text: "라이브카지노", icon: Item1, activeIcon: Item1Active },
    { id: 1, text: "스포츠", icon: Item2, activeIcon: Item2Active },
    { id: 2, text: "실시간스포츠", icon: Item3, activeIcon: Item3Active },
    { id: 3, text: "슬롯게임", icon: Item4, activeIcon: Item4Active },
    { id: 4, text: "호텔카지노", icon: Item5, activeIcon: Item5Active },
    { id: 5, text: "홀덤게임", icon: Item11, activeIcon: Item11Active },
    { id: 6, text: "e-스포츠", icon: Item6, activeIcon: Item6Active },
    { id: 7, text: "미니게임", icon: Item7, activeIcon: Item7Active },
    { id: 8, text: "키론가상게임", icon: Item8, activeIcon: Item8Active },
    { id: 9, text: "피싱게임", icon: Item9, activeIcon: Item9Active },
    { id: 10, text: "티비벳", icon: Item10, activeIcon: Item10Active },
  ];

  const myMenuOptionsArray = [
    { text: "마이페이지", id: 0, path: "/mypage/bet-history" },
    { text: "베팅내역", id: 1, path: "/mypage/bet-history" },
    { text: "충/환전내역", id: 2, path: "/mypage/transaction/charge-history" },
    { text: "총판페이지", id: 3, path: "/distributor-page" },
    { text: "회원정보수정", id: 4, path: location === "/" ? "/reauth" : `${location}/reauth` },
    { text: "출석부", id: 5, path: "/attendance" },
    { text: "로그아웃", id: 6, action: () => window.location.reload(), path: "#" },
  ];

  const contactOptionsArray = [
    { text: "문의하기", id: 0, path: "/cscenter/contact/all" },
    { text: "공지사항", id: 1, path: "/cscenter/announcement/all" },
    { text: "자주묻는질문", id: 2, path: "/cscenter/faq/all" },
    { text: "계좌문의", id: 3, path: "#" },
    { text: "베팅규정", id: 4, path: "/cscenter/policy/sportsgame/soccer" },
  ];

  function TabsList({ items }) {
    return items.map((item, index) => {
      const isSelectedTap = selectedTab === item.id;
      return (
        <button
          id={`navbar-${index}-button`}
          key={item.id}
          style={{
            color: isSelectedTap ? "#ffffff" : "#2d2834",
            background: isSelectedTap ? "#5323a0" : "none",
            width: `calc(922px / ${tabsArray.length})`,
          }}
          className={`h-full ${isSelectedTap ? selectedTabClass : tabClass} ${
            items.length - 2 === index ? "" : items.length - 1 === index ? "" : ""
          }`}
          onClick={() => {
            setSelectedTab(item.id);
            history.push(item.path);
          }}
          onMouseOver={() => {
            setHoveredTab(item.id);
            setSelectedTab(item.id);
          }}
        >
          <div className="flex justify-center w-48px h-48px -mt-3px flex-shrink-0">
            <img className="object-none" src={isSelectedTap ? item.activeIcon : item.icon} alt={item.text} />
          </div>
          <span
            style={{ marginBottom: "0px", fontSize: "13px" }}
            className="cursor-pointer font-bold tracking-tight -mt-3px flex-shrink-0"
          >
            {item.text}
          </span>
        </button>
      );
    });
  }

  return (
    <>
      <TopBar isAuthenticated={isAuthenticated} setAuth={setAuth} />
      <div
        // TODO: add a line in the bottom
        onMouseLeave={() => {
          setHoveredTab(null);
          setSelectedTab(null);
        }}
        style={{
          background: "linear-gradient(to bottom, #f0ecff, #cacdff)",
          boxShadow: "0px 2px 15px 0px rgba(0, 0, 0, 0.5)",
        }}
        className="relative w-full flex flex-col items-start limit:items-center limit1920:items-center z-40  bg-red-500"
      >
        <div className="w-full absolute h-px bottom-0 bg-r9688c7" />
        <div id="menu-wrapper" style={{ width: "1260px" }} className="w-full z-50">
          <div className="">
            <div className="flex justify-start w-full">
              <div
                style={{ height: "82px", width: "922px" }}
                className="relative flex justify-between flex-row flex-shrink-0"
              >
                <div className="flex items-center flex-shrink-0">
                  <TabsList items={tabsArray} />
                </div>
              </div>
              <div
                className="h-full flex items-center"
                style={{
                  marginLeft: "11px",
                  marginRight: "11px",
                  height: "82px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#aa9ed2",
                    width: "1px",
                    height: "48px",
                  }}
                />
              </div>
              <DropdownButton
                onMouseOver={() => {
                  setSelectedTab(null);
                  setHoveredTab(null);
                }}
                optionsArray={myMenuOptionsArray}
                buttonText="마이메뉴"
                ButtonIcon={MyMenuIcon}
                ButtonActiveIcon={MyMenuActiveIcon}
                DropdownHeight={"193px"}
              />
              <LinkButton ButtonIcon={MessageIcon} ButtonIconHighlight={MessageIconOn} buttonText="쪽지" count={25} isAuthenticated={isAuthenticated} />
              <LinkButton ButtonIcon={CouponIcon} ButtonIconHighlight={CouponIconOn} buttonText="쿠폰" count={5} isAuthenticated={isAuthenticated} />
              <DropdownButton
                onMouseOver={() => {
                  setSelectedTab(null);
                  setHoveredTab(null);
                }}
                optionsArray={contactOptionsArray}
                buttonText="고객센터"
                ButtonIcon={ContactIcon}
                ButtonActiveIcon={ContactActiveIcon}
                DropdownHeight={"141px"}
              />
            </div>
          </div>
        </div>
        <NavbarHover selection={hoveredTab} setHoveredTab={setHoveredTab} setSelectedTab={setSelectedTab} />
      </div>
      <div className="relative w-full flex flex-col items-start limit:items-center limit1920:items-center z-10">
        <NoticeBanner />
      </div>
    </>
  );
};

export default Navbar;
