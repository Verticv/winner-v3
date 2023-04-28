import React, { useState } from 'react';
import NavbarHover from '../../hovers/NavbarHover';
import Item1 from '../../../images/navBar/item_1.png';
import Item2 from '../../../images/navBar/item_2.png';
import Item3 from '../../../images/navBar/item_3.png';
import Item4 from '../../../images/navBar/item_4.png';
import Item5 from '../../../images/navBar/item_5.png';
import Item6 from '../../../images/navBar/item_6.png';
import Item7 from '../../../images/navBar/item_7.png';
import Item8 from '../../../images/navBar/item_8.png';
import Item9 from '../../../images/navBar/item_9.png';
import Item10 from '../../../images/navBar/item_10.png';

import Item1Active from '../../../images/navBar/item_1_active.png';
import Item2Active from '../../../images/navBar/item_2_active.png';
import Item3Active from '../../../images/navBar/item_3_active.png';
import Item4Active from '../../../images/navBar/item_4_active.png';
import Item5Active from '../../../images/navBar/item_5_active.png';
import Item6Active from '../../../images/navBar/item_6_active.png';
import Item7Active from '../../../images/navBar/item_7_active.png';
import Item8Active from '../../../images/navBar/item_8_active.png';
import Item9Active from '../../../images/navBar/item_9_active.png';
import Item10Active from '../../../images/navBar/item_10_active.png';
import MyMenuIcon from '../../../images/navBar/managment/my_menu.png';
import MyMenuActiveIcon from '../../../images/navBar/managment/my_menu_active.png';
import ContactIcon from '../../../images/navBar/managment/contact.png';
import ContactActiveIcon from '../../../images/navBar/managment/contact_active.png';
import MessageIcon from '../../../images/navBar/managment/message.png';
import CouponIcon from '../../../images/navBar/managment/coupon.png';

import { useHistory } from 'react-router-dom';
import TopBar from '../TopBar';
import DropdownButton from './DropdownButton';
import LinkButton from './LinkButton';

const Navbar = ({ isAuthenticated, setAuth }) => {
  const history = useHistory();

  const [selectedTab, setSelectedTab] = useState();
  const [hoveredTab, setHoveredTab] = useState();

  const tabClass =
    'flex-shrink-0 text-r2d2834 hover:text-white relative flex flex-col items-center justify-center cursor-pointer';
  const selectedTabClass =
    'flex-shrink-0 relative flex flex-col items-center justify-center cursor-pointer text-white cursor-pointer';

  const tabsArray = [
    { id: 0, text: '라이브카지노', icon: Item1, activeIcon: Item1Active },
    { id: 1, text: '스포츠', icon: Item2, activeIcon: Item2Active },
    { id: 2, text: '실시간스포츠', icon: Item3, activeIcon: Item3Active },
    { id: 3, text: '슬롯게임', icon: Item4, activeIcon: Item4Active },
    { id: 4, text: '호텔카지노', icon: Item5, activeIcon: Item5Active },
    { id: 5, text: 'e-스포츠', icon: Item6, activeIcon: Item6Active },
    { id: 6, text: '미니게임', icon: Item7, activeIcon: Item7Active },
    { id: 7, text: '키론가상게임', icon: Item8, activeIcon: Item8Active },
    { id: 8, text: '피싱게임', icon: Item9, activeIcon: Item9Active },
    { id: 9, text: '티비벳', icon: Item10, activeIcon: Item10Active },
  ];

  const myMenuOptionsArray = [
    { text: '마이페이지', id: 0 },
    { text: '베팅내역', id: 1 },
    { text: '충/환전내역', id: 2 },
    { text: '총판페이지', id: 3 },
    { text: '회원정보수정', id: 4 },
    { text: '출석부', id: 5 },
    { text: '로그아웃', id: 6 },
  ];

  const contactOptionsArray = [
    { text: '문의하기', id: 0 },
    { text: '공지사항', id: 1 },
    { text: '자주묻는질문', id: 2 },
    { text: '계좌문의', id: 3 },
    { text: '베팅규정', id: 4 },
  ];

  function TabsList({ items }) {
    return items.map((item, index) => {
      const isSelectedTap = selectedTab === item.id;
      return (
        <button
          id={`navbar-${index}-button`}
          key={item.id}
          style={{
            color: isSelectedTap ? '#ffffff' : '#2d2834',
            background: isSelectedTap ? '#5323a0' : 'none',
          }}
          className={`w-83px h-full ${
            isSelectedTap ? selectedTabClass : tabClass
          } ${
            items.length - 2 === index
              ? 'mr-10px'
              : items.length - 1 === index
              ? ''
              : 'mr-9px'
          }`}
          onClick={() => {
            setSelectedTab(item.id);
            history.push(item.path);
          }}
          onMouseOver={() => {
            setHoveredTab(item.id);
            setSelectedTab(item.id);
          }}
          // onMouseLeave={() => {
          //   setHoveredTab(null);
          //   setSelectedTab(null);
          //   // TODO: seems there is a bug here with the animation
          // }}
        >
          <div className='flex justify-center w-48px h-48px mt-2px'>
            <img
              className='object-none'
              src={isSelectedTap ? item.activeIcon : item.icon}
              alt={item.text}
            />
          </div>
          <span
            style={{ marginBottom: '0px' }}
            className='cursor-pointer font-spoqaMedium text-14px tracking-tight -mt-4px'
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
        style={{ background: 'linear-gradient(to bottom, #f0ecff, #cacdff)' }}
        className='relative w-full flex flex-col items-start limit:items-center limit1920:items-center'
      >
        <div className='w-full absolute h-px bottom-0 bg-r9688c7' />
        <div
          // onMouseMove={() => setHoveredTab(null)}
          className='w-full h-full absolute'
        ></div>
        <div id='menu-wrapper' style={{ width: '1260px' }} className='w-full'>
          <div className=''>
            <div className='flex justify-start w-full'>
              <div
                style={{ height: '82px' }}
                className='relative flex justify-between flex-row flex-shrink-0'
              >
                <div className='flex items-center flex-shrink-0'>
                  <TabsList items={tabsArray} />
                </div>

                <div
                  // onMouseMove={() => setHoveredTab(null)}
                  className='w-full h-full'
                ></div>
              </div>
              <div
                className='h-full flex items-center'
                style={{
                  marginLeft: '11px',
                  marginRight: '18px',
                  height: '82px',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#aa9ed2',
                    width: '1px',
                    height: '48px',
                  }}
                />
              </div>
              <DropdownButton
                onMouseOver={() => {
                  setSelectedTab(null);
                  setHoveredTab(null);
                }}
                optionsArray={myMenuOptionsArray}
                buttonText='마이메뉴'
                ButtonIcon={MyMenuIcon}
                ButtonActiveIcon={MyMenuActiveIcon}
              />
              <LinkButton
                ButtonIcon={MessageIcon}
                buttonText='쪽지'
                count={25}
              />
              <LinkButton ButtonIcon={CouponIcon} buttonText='쿠폰' count={5} />
              <DropdownButton
                onMouseOver={() => {
                  setSelectedTab(null);
                  setHoveredTab(null);
                }}
                optionsArray={contactOptionsArray}
                buttonText='고객센터'
                ButtonIcon={ContactIcon}
                ButtonActiveIcon={ContactActiveIcon}
              />
            </div>
          </div>
        </div>
        <NavbarHover
          selection={hoveredTab}
          setHoveredTab={setHoveredTab}
          setSelectedTab={setSelectedTab}
        />
      </div>
    </>
  );
};

export default Navbar;
