import Footer from 'components/mainPage/Footer';
import MoneyCharge from 'components/money/MoneyCharge';
import MoneyExchange from 'components/money/MoneyExchange';
import DirectoryComponent from 'components/myPage/DirectoryComponent';
import LeftMenu from 'components/myPage/LeftMenu';
import Navbar from '../components/mainPage/NavBar';
import QuickMenu from 'components/QuickMenu';
import React, { useState } from 'react';
import { Route, useLocation } from 'react-router';
import MoneyChargeBanner from '../images/money/money_charge.png';
import MoneyExchangeBanner from '../images/money/money_exchange.png';
import Icon1 from '../images/money/leftMenu/icon_1.png';
import Icon2 from '../images/money/leftMenu/icon_2.png';
import Icon1_on from '../images/money/leftMenu/icon_1_on.png';
import Icon2_on from '../images/money/leftMenu/icon_2_on.png';
const MoneyPage = ({ isAuthenticated, setAuthenticated }) => {
  const LeftMenuArray = [
    {
      text: '보유머니 충전',
      icon: Icon1,
      iconHighlight: Icon1_on,
      id: 0,
      path: '/money/charge',
      mainPath: '/money/charge',
    },
    {
      text: '보유머니 환전',
      icon: Icon2,
      iconHighlight: Icon2_on,
      id: 1,
      path: '/money/exchange',
      mainPath: '/money/exchange',
    },
  ];

  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(location.pathname);
  

 
  return (
    <div className='relative  flex flex-col justify-center items-center limit1920:overflow-x-hidden'
      style={{
        background: "linear-gradient(to right, #b644c4, #351894)"
      }}>
      
      <div className='fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center'>
        <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
      </div>

      
      <div style={{marginTop:'154px'}} className='flex flex-col items-start limit:items-center w-full h-full'>
        <Route path='/money/charge'>
          <DirectoryComponent
            branch1='충전/환전'
            branch2='보유머니 충전'
            mainPath='/money/charge'
            setSelectedTab={setSelectedTab}
          />
        </Route>
        <Route path='/money/exchange'>
          <DirectoryComponent
            branch1='충전/환전'
            branch2='보유머니 환전'
            mainPath='/money/charge'
            setSelectedTab={setSelectedTab}
          />
        </Route>

        <Route path='/money/charge'>
          <div style={{height:'136px'}} className='relative'>
            <img className='z-10' src={MoneyChargeBanner} alt='' />
           
            <div className="font-bold z-20 absolute top-0 text-24px w-full h-full flex     items-center justify-center">
              <span style={{ textShadow: '0 0 4px rgba(0, 0, 0, 0.6)' }} className="leading-none text-white -mt-2px" >보유머니 충전</span>
            </div>
          </div>
        </Route>
        <Route path='/money/exchange'>
          <div style={{height:'136px'}} className='relative'>
            <img className='z-10' src={MoneyExchangeBanner} alt='' />
            <div className="font-bold z-20 absolute top-0 text-24px w-full h-full flex     items-center justify-center">
              <span style={{ textShadow: '0 0 4px rgba(0, 0, 0, 0.6)' }} className="leading-none text-white -mt-2px" >보유머니 환전</span>
            </div>
          </div>
        </Route>

        <div className='flex mt-18px w-default z-30'>
          <div>
            <LeftMenu
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              array={LeftMenuArray}
              isBig={true}
            />
          </div>

          <div style={{width:'1040px'}} className='ml-20px'>
            <Route path='/money/charge'>
              <MoneyCharge />
            </Route>
            <Route path='/money/exchange'>
              <MoneyExchange />
            </Route>
            <Route path='*'></Route>
          </div>
        </div>

        <div>
          <Footer />
        </div>
        <div>
          <QuickMenu />
        </div>
      </div>
    </div>
  );
};

export default MoneyPage;
