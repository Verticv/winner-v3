import React from 'react';

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

export default LinkButton;
