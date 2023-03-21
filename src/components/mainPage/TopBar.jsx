import React, { useState } from 'react';
import LogoutIcon from '../../images/logout.png';
import PopupControls from '../popups/PopupControls';
import LoginPopup from '../popups/LoginPopup';
import Nav13 from '../../images/navBar/1_3.png';
import Nav2 from '../../images/navBar/2.png';
import Nav3 from '../../images/navBar/3.png';
import Nav4 from '../../images/navBar/4.png';
import Nav5 from '../../images/navBar/5.png';
import SignupPopup from '../popups/SignupPopup';
import { useHistory } from 'react-router-dom';

import TopLogo from '../../images/top_logo.png';
import PointsApplyPopup from 'components/popups/PointsApplyPopup';

const TopBar = ({ isAuthenticated, setAuth }) => {
  const history = useHistory();

  const [isPopupOpen, setPopupOpen] = useState(true);
  const [isPointPopupOpen, setPointPopupOpen] = useState(true);

  const LoginButton = (
    <button
      style={{
        width: '104px',
        height: '28px',
        borderRadius: '2px',
        background: 'linear-gradient(to bottom, #a67c52, #826140)',
        textShadow: '0px 0px 6px #000000',
        color: '#ffdfbd',
      }}
      className='flex items-center justify-center text-white text-14px font-spoqaMedium pt-px hover:brightness-125 filter'
    >
      로그인
    </button>
  );

  const SignUpButton = (
    <button
      style={{
        width: '104px',
        height: '28px',
        borderRadius: '2px',
        background: 'linear-gradient(to bottom, #a67c52, #826140)',
        textShadow: '0px 0px 6px #000000',
        color: '#ffdfbd',
      }}
      className='flex items-center justify-center text-white text-14px font-spoqaMedium pt-px hover:brightness-125 filter'
    >
      회원가입
    </button>
  );

  const LinkButton = () => {
    return (
      <a href='/distributor-page' target='_blank'>
        <button
          style={{
            width: '104px',
            height: '28px',
            borderRadius: '2px',
            background: 'linear-gradient(to bottom, #a67c52, #826140)',
            textShadow: '0px 0px 6px #000000',
            color: '#ffdfbd',
          }}
          className='flex items-center justify-center text-white text-14px font-spoqaMedium filter hover:brightness-125 mr-5px'
        >
          총판페이지
        </button>
      </a>
    );
  };

  const username = '마이프로틴화이팅예시길이추가닉네임';
  const LoggedInComponent = () => (
    <div className='space-x-5px flex'>
      <button
        className='flex items-center h-12px flex-shrink-0'
        onClick={() => history.push('/mypage/bet-history')}
      >
        <img src={Nav13} alt='' className='mr-3px object-none' />
        <p
          style={{ color: '#ad9e8c', WebkitTextStroke: '0.2px' }}
          className='text-13px h-12px flex items-center tracking-tighter font-spoqaMedium'
        >
          <p style={{ marginRight: '2px' }}>Lv3</p>
          <p
            style={{
              maxWidth: '144px',
              textOverflow: 'unset',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
          >
            {username.length > 12 ? `${username.slice(0, 12)}...` : username}
          </p>
          <p>님</p>
        </p>
      </button>
      <div style={{ backgroundColor: '#36322c' }} className='w-px h-12px' />
      <button
        className='flex items-center h-12px flex-shrink-0'
        onClick={() => history.push('/money/charge')}
      >
        <img src={Nav2} alt='' className=' object-none' />
        <p
          style={{ color: '#ad9e8c', WebkitTextStroke: '0.2px' }}
          className='text-13px h-12px flex items-center tracking-tighter font-spoqaMedium'
        >
          10,000,000원
        </p>
      </button>
      <div style={{ backgroundColor: '#36322c' }} className='w-px h-12px' />

      <PopupControls
        buttonChild={
          <button className='flex items-center h-12px flex-shrink-0'>
            <img src={Nav3} alt='' className=' object-none' />
            <p
              style={{ color: '#ad9e8c', WebkitTextStroke: '0.2px' }}
              className='text-13px h-12px flex items-center tracking-tighter font-spoqaMedium'
            >
              12,500P
            </p>
          </button>
        }
        isPopupOpen={isPointPopupOpen}
        setPopupOpen={setPointPopupOpen}
      >
        <PointsApplyPopup setPopupOpen={setPointPopupOpen} />
      </PopupControls>

      <div style={{ backgroundColor: '#36322c' }} className='w-px h-12px' />
      <button
        className='flex items-center h-12px flex-shrink-0'
        onClick={() => history.push('/mypage/inbox')}
      >
        <img src={Nav4} alt='' className=' object-none' />
        <p
          style={{ color: '#ad9e8c', WebkitTextStroke: '0.2px' }}
          className='text-13px h-12px flex items-center tracking-tighter font-spoqaMedium'
        >
          쪽지 2
        </p>
      </button>
      <div style={{ backgroundColor: '#36322c' }} className='w-px h-12px' />
      <button
        className='flex items-center h-12px flex-shrink-0'
        onClick={() => history.push('/mypage/coupon/coupon-usage')}
      >
        <img src={Nav5} alt='' className=' object-none' />
        <p
          style={{ color: '#ad9e8c', WebkitTextStroke: '0.2px' }}
          className='text-13px h-12px flex items-center tracking-tighter font-spoqaMedium'
        >
          쿠폰 3
        </p>
      </button>
      <LinkButton />
      <LinkButton />
      <LinkButton />
      <button onClick={() => setAuth(false)}>
        <img
          src={LogoutIcon}
          alt=''
          className='object-none ml-11px mr-4px cursor-pointer'
        />
      </button>
    </div>
  );

  return (
    <div
      style={{ borderBottomWidth: '1px', borderBottomColor: '#414141' }}
      className='relative w-full z-50 bg-black bg-opacity-85 flex flex-col items-start limit:items-center limit1920:items-center'
    >
      <div className='w-full h-full absolute'></div>
      <div style={{ width: '1260px' }} className='z-50 w-full'>
        <div className=''>
          <div
            style={{ height: '44px' }}
            className='relative flex justify-between flex-row flex-shrink-0 -mt-px'
          >
            <div className='flex items-center flex-shrink-0'>
              <img
                style={{ margin: 'auto' }}
                className='cursor-pointer object-none'
                src={TopLogo}
                alt='logo'
                onClick={() => history.push('/')}
              />
            </div>

            <div className='flex justify-end flex-shrink-0'>
              {isAuthenticated ? (
                <div className='mt-16px mr-5px'>
                  <LoggedInComponent />
                </div>
              ) : (
                <div className='flex space-x-10px flex-shrink-0 mt-8px'>
                  <PopupControls
                    buttonChild={LoginButton}
                    isPopupOpen={isPopupOpen}
                    setPopupOpen={setPopupOpen}
                  >
                    <LoginPopup setAuth={setAuth} setPopupOpen={setPopupOpen} />
                  </PopupControls>
                  <PopupControls
                    buttonChild={SignUpButton}
                    isPopupOpen={isPopupOpen}
                    setPopupOpen={setPopupOpen}
                  >
                    <SignupPopup
                      setAuth={setAuth}
                      setPopupOpen={setPopupOpen}
                    />
                  </PopupControls>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
