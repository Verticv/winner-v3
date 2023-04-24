import React from 'react';

const Card = ({ children, HeaderIcon, headerText, headerActionText }) => {
  return (
    <div
      style={{
        boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.6)',
        backgroundColor: 'rgb(237, 237, 235)',
      }}
      className='w-373px h-184px rounded-16px p-5px'
    >
      <div
        style={{
          background: 'linear-gradient(to right, #9d3bbb, #5423a0)',
        }}
        className='w-full h-37px rounded-14px px-10px flex items-center justify-between z-20'
      >
        <div className='flex items-center'>
          <img src={HeaderIcon} alt='' className='mr-5px' />
          <p className='text-white text-14px font-spoqaBold tracking-tighter'>
            {headerText}
          </p>
        </div>
        {headerActionText && (
          <div
            style={{ color: '#e1b8ff' }}
            className='flex items-center cursor-pointer font-spoqaMedium text-12px tracking-tighter'
          >
            {headerActionText}
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default Card;
