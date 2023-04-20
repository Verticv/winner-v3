import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import PopupControls from 'components/popups/PopupControls';
import PointsApplyPopup from 'components/popups/PointsApplyPopup';
import LinkButton from './LinkButton';

import Nav2 from '../../../images/navBar/2.png';
import Nav3 from '../../../images/navBar/3.png';
import Nav4 from '../../../images/navBar/4.png';
import Nav5 from '../../../images/navBar/5.png';
import Nav13 from '../../../images/navBar/1_3.png';
import LogoutIcon from '../../../images/logout.png';

const LoggedInHeader = ({ setAuth }) => {
  const history = useHistory();
  const [isPointPopupOpen, setPointPopupOpen] = useState(true);
  const username = '마이프로틴화이팅예시길이추가닉네임';

  return (
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
      <button onClick={() => setAuth?.(false)}>
        <img
          src={LogoutIcon}
          alt=''
          className='object-none ml-11px mr-4px cursor-pointer'
        />
      </button>
    </div>
  );
};

export default LoggedInHeader;
