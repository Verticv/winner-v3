import React from "react";
import Provider from "../../images/footer/provider.png";
import Etc from "../../images/footer/etc.png";
import Logo from "../../images/footer/info/logo.png";

import ContactImg1 from "../../images/footer/contact/1.png";
import ContactImg2 from "../../images/footer/contact/2.png";
import ContactImg3 from "../../images/footer/contact/3.png";

import { useHistory } from "react-router-dom";
// import PopupControls from 'components/popups/PopupControls';
// import ReauthenticatePopup from 'components/popups/ReauthenticatePopup';

const Footer = ({ fullWidth = false }) => {
  const history = useHistory();

  const menuLists = [
    {
      title: "라이브카지노",
      items: [
        {
          text: "프레그메틱플레이",
          link: "/live-casino/pragmatic-play",
        },
        {
          text: "에볼루션",
          link: "/live-casino/pragmatic-play",
        },
        {
          text: "로얄지",
          link: "/live-casino/pragmatic-play",
        },
        {
          text: "아시아게이밍",
          link: "/live-casino/pragmatic-play",
        },
        {
          text: "드림게이밍",
          link: "/live-casino/pragmatic-play",
        },
      ],
    },
    {
      title: "스포츠",
      items: [
        {
          text: "조합베팅",
          link: "/live-casino/pragmatic-play",
        },
        {
          text: "스페셜베팅",
          link: "/live-casino/pragmatic-play",
        },
        {
          text: "실시간스포츠",
          link: "/live-casino/pragmatic-play",
        },
      ],
    },
    {
      title: "슬롯게임",
      items: [
        {
          text: "케이플레이슬롯",
          link: "/live-casino/pragmatic-play",
        },
      ],
    },
    {
      title: "호텔카지노",
      items: [
        {
          text: "두윈카지노",
          link: "/live-casino/pragmatic-play",
        },
        {
          text: "보타카지노",
          link: "/live-casino/pragmatic-play",
        },
      ],
    },
    {
      title: "기타게임",
      items: [
        {
          text: "e-스포츠",
          link: "/live-casino/pragmatic-play",
        },
        {
          text: "미니게임",
          link: "/live-casino/pragmatic-play",
        },
        {
          text: "키론가상게임",
          link: "/live-casino/pragmatic-play",
        },
        {
          text: "피싱게임",
          link: "/live-casino/pragmatic-play",
        },
        {
          text: "티비벳",
          link: "/live-casino/pragmatic-play",
        },
      ],
    },
    {
      title: "고객센터",
      items: [
        {
          text: "문의하기",
          link: "/live-casino/pragmatic-play",
        },
        {
          text: "공지사항",
          link: "/live-casino/pragmatic-play",
        },
        {
          text: "자주묻는질문",
          link: "/live-casino/pragmatic-play",
        },
        {
          text: "베팅규정",
          link: "/live-casino/pragmatic-play",
        },
      ],
    },
  ];

  const MenuList = ({ menuLists }) => {
    return (
      <>
        {menuLists.map((menu, index) => (
          <div
            key={`menu-${index}`}
            style={{
              width: "207px",
              paddingLeft:
                index === 0
                  ? "0px"
                  : index === 1
                  ? "10px"
                  : index === 2
                  ? "10px"
                  : index === 3
                  ? "10px"
                  : index === 4
                  ? "10px"
                  : "10px",
            }}
            className="flex-shrink-0"
          >
            <p
              style={{ color: "#7f7d9c" }}
              className="font-spoqaMedium text-14px h-14px tracking-tigther flex items-center text-white mb-20px"
            >
              {menu.title}
            </p>
            {menu.items.map((item, index) => (
              <p
                key={`menu-item-${index}`}
                onClick={() => history.push(item.link)}
                style={{ color: "#c8c8c8" }}
                className="font-spoqa text-13px h-12px flex items-center mb-12px tracking-tigther hover:filter hover:brightness-125 cursor-pointer"
              >
                {item.text}
              </p>
            ))}
          </div>
        ))}
      </>
    );
  };

  return (
    <footer
      style={{ height: "637px", backgroundColor: "#19162e" }}
      className={`flex flex-col items-center flex-shrink-0 ${
        fullWidth ? "w-1836px limit1836:w-screen" : "w-1260px limit:w-screen"
      }`}
    >
      {/* // Logos section */}
      <div style={{ paddingTop: "30px", paddingLeft: "20px", height: "239px" }} className="w-default flex-shrink-0">
        <img src={Provider} className="object-none" draggable={false} alt="logo" />
      </div>
      {/* // second section */}
      <div
        style={{ background: "#221e3f", height: "201px" }}
        className={`flex justify-center ${fullWidth ? "w-1836px limit1836:w-screen" : "w-1260px limit:w-screen"}`}
      >
        <div
          style={{
            maxWidth: "1260px",
            paddingLeft: "10px",
            paddingRight: "136px",
            paddingTop: "29px",
          }}
          className="flex justify-between w-1260px"
        >
          <MenuList menuLists={menuLists} />
        </div>
      </div>

      <div className="flex flex-col w-default flex-shrink-0 px-10px">
        <div style={{ height: "135px", paddingTop: "34px" }} className="flex items-start justify-between">
          <div>
            <img src={Logo} className="object-none" draggable={false} alt="" />
            <div className="w-full flex items-start mt-8px flex-shrink-0 ml-px">
              <div className="flex items-center">
                <img src={ContactImg1} draggable={false} className="object-none" alt="" />
                <p className="text-white text-14px h-14px flex items-center font-spoqa ml-5px -mt-px">고객센터</p>
              </div>
              <div className="flex items-center ml-14px -mb-2px">
                <img src={ContactImg2} draggable={false} className="object-none mt-2px -ml-px" alt="" />
                <p className="text-white text-14px h-14px flex items-center font-spoqa ml-2px mb-2px">test1234</p>
              </div>
              <div className="flex items-center ml-8px -mb-2px">
                <img src={ContactImg3} draggable={false} className="object-none mt-2px -ml-px" alt="" />
                <p className="text-white text-14px h-14px flex items-center font-spoqa ml-2px mb-2px">test1234</p>
              </div>
            </div>
          </div>

          <img src={Etc} style={{marginRight:'29px'}} className="object-none -mt-3px" draggable={false} alt="" />
        </div>
        <div style={{ borderColor: "#42404e", height: "62px" }} className="flex justify-center border-t">
          <p
            style={{ color: "#7f7d9c", marginTop: "18px" }}
            className="text-14px h-14px flex items-center font-spoqaMedium tracking-tight text-gray-r828282"
          >
            Copyright © WINNER. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
