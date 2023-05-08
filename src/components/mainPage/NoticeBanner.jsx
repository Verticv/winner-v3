import React from 'react';
import SpeakerIcon from '../../images/speaker.png';
import './NoticeBanner.css';

const NoticeBanner = () => {
  return (
    <div
      style={{
        width: '1450px',
        border: '1px solid rgb(91, 73, 141)',
        borderTop: 'none',
        boxShadow: '0px 2px 20px 0px rgba(0, 0, 0, 0.2)',
        borderRadius: '0% 0% 7% 7% / 0% 0% 100% 100%',
        background: '#2d2834',
      }}
      className='flex items-center h-28px w-full overflow-x-hidden rounded-full flex-shrink-0 wrap cursor-default'
      id="test"
    >
      <div
        style={{ background: '#2d2834', paddingLeft: '94px' }}
        className='z-20 pr-15px flex -mt-px'
      >
        <img className='object-none' src={SpeakerIcon} alt='speakerIcon' />
      </div>
      <span style={{color:'#eeeeee'}} className='banner font-spoqa text-14px z-10 mt-2px cursor-default'>
        입금하시기전 계좌문의 후 입금해 주시기 바랍니다.
      </span>
    </div>
  );
};

export default NoticeBanner;
