import React from 'react';
import Top from '../images/sideMenu/top.png';

const TopButton = ({ scrollPosition }) => {
  return (
    <div
      style={{
        height: '69px',
        width: '69px',
        backgroundColor: '#d7d1ea',
        boxShadow: '0px 3px 5px 0px rgba(0, 0, 0, 0.5)',
      }}
      className={`rounded-6px flex flex-col items-center cursor-pointer hover:brightness-125 filter ${
        scrollPosition > 0 ? 'opacity-100' : 'opacity-0'
      } transition duration-200`}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
    >
      <img src={Top} alt='' className='mt-17px' />
      <p className='font-spoqaMedium text-14px text-black tracking-tight mt-px cursor-pointer'>
        TOP
      </p>
    </div>
  );
};

export default TopButton;
