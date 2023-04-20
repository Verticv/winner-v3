import React, { useState } from 'react';
import Koreaflag from '../../images/korea_flag.png';
import UKflag from '../../images/uk_flag.png';
import DropDownControls from '../dropdowns/DropDownControls';
import CountryDropDown from '../dropdowns/CountryDropDown';
import NavbarHover from '../hovers/NavbarHover';

import { useHistory } from 'react-router-dom';
import ArrowDown from '../../images/arrows/arrow_dn.png';
import TopBar from './TopBar';

const Navbar = ({ isAuthenticated, setAuth }) => {
  const history = useHistory();

  const [selectedTab, setSelectedTab] = useState();
  const [hoveredTab, setHoveredTab] = useState();
  const [country, setCountry] = useState('KR');
  const [isCountryOpen, setCountryOpen] = useState();

  const tabClass =
    'flex-shrink-0 text-yellow-ad9e8c hover:text-white relative flex flex-col items-center justify-center h-45px px-9px cursor-pointer';
  const selectedTabClass =
    'flex-shrink-0 relative flex flex-col items-center justify-center px-9px cursor-pointer h-45px text-white cursor-pointer';
  const lineClass = 'absolute bottom-0 h-2px w-full bg-clear';
  const selectedLineClass = 'absolute bottom-0 h-2px w-full bg-white';

  const tabsArray = [
    { text: '라이브카지노', id: 0 },
    { text: '슬롯게임', id: 1 },
    { text: '스포츠', id: 2 },
    { text: '호텔카지노', id: 3 },
    { text: 'e-스포츠', id: 4 },
    { text: '미니게임', id: 5 },
    { text: '키론가상게임', id: 6 },
    { text: '피싱게임', id: 7 },
    { text: '티비벳', id: 8 },
  ];

  function TabsList({ items }) {
    return items.map((item) => (
      <button
        key={item.id}
        style={{ color: selectedTab === item.id ? '#fcd6a8' : '#ad9e8c' }}
        className={selectedTab === item.id ? selectedTabClass : tabClass}
        onClick={() => {
          setSelectedTab(item.id);
          history.push(item.path);
        }}
        onMouseOver={() => {
          setHoveredTab(item.id);
          setSelectedTab(item.id);
        }}
      >
        <div className='h-20px w-20px bg-gray-400'></div>
        <span
          style={{ marginBottom: '0px' }}
          className='cursor-pointer font-spoqaMedium text-15px tracking-tighter'
        >
          {item.text}
        </span>
        <div
          style={{ backgroundColor: selectedTab === item.id ? '#fcd6a8' : '' }}
          className={selectedTab === item.id ? selectedLineClass : lineClass}
        ></div>
      </button>
    ));
  }

  const CountryButton = (
    <div
      style={{ height: '22px', color: '#ffdfbd' }}
      className='flex items-center px-6px hover:brightness-110 filter text-12px text-yellow-ad9e8c cursor-pointer -mt-px'
    >
      <img
        className='object-none mr-7px'
        src={country === 'KR' ? Koreaflag : UKflag}
        alt='flag'
      ></img>
      <label className='font-spoqaBold cursor-pointer'>{country}</label>
      <img className='object-none ml-2px' src={ArrowDown} alt='flag'></img>
    </div>
  );

  return (
    <>
      <TopBar isAuthenticated={isAuthenticated} setAuth={setAuth} />
      <div
        style={{ borderBottomWidth: '1px', borderBottomColor: '#414141' }}
        className='relative w-full z-50 bg-black bg-opacity-85 flex flex-col items-start limit:items-center limit1920:items-center'
      >
        <div
          onMouseMove={() => setHoveredTab(null)}
          className='w-full h-full absolute'
        ></div>
        <div style={{ width: '1260px' }} className='z-50 w-full'>
          <div className=''>
            <div className='flex justify-between w-full'>
              <div
                style={{ height: '44px' }}
                className='relative flex justify-between flex-row flex-shrink-0 -mt-px'
              >
                <div className='flex items-center flex-shrink-0 -ml-13px'>
                  <TabsList items={tabsArray} />
                </div>

                <div
                  onMouseMove={() => setHoveredTab(null)}
                  className='w-full h-full'
                ></div>
              </div>
              <div>
                <DropDownControls
                  buttonChild={CountryButton}
                  onClick={() => setCountryOpen(!isCountryOpen)}
                  onClose={() => setCountryOpen(false)}
                >
                  <div className='z-40'>
                    <CountryDropDown
                      setCountry={setCountry}
                      country={country}
                    />
                  </div>
                </DropDownControls>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-black bg-opacity-85 w-screen -mt-px'>
          <NavbarHover
            selection={hoveredTab}
            setHoveredTab={setHoveredTab}
            setSelectedTab={setSelectedTab}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
