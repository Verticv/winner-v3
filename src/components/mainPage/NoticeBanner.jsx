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
        borderRadius: '45% 45% 7% 6% / 0% 0% 100% 100%',
        background: '#362f2d',
      }}
      className='flex items-center h-28px w-full overflow-x-hidden rounded-full flex-shrink-0 wrap cursor-default'
      id="test"
    >
      <div
        style={{ background: '#362f2d', paddingLeft: '94px' }}
        className='z-20 pr-15px flex -mt-px'
      >
        <img className='object-none' src={SpeakerIcon} alt='speakerIcon' />
      </div>
      <span className='banner font-spoqa text-15px text-white z-10 mt-px cursor-default'>
        입금하시기전 계좌문의 후 입금해 주시기 바랍니다.
      </span>
    </div>
  );
};

export default NoticeBanner;
