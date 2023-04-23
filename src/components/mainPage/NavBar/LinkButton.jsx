import React from 'react';

const LinkButton = ({ buttonText, ButtonIcon }) => {
  const myMenuButton = (
    <div
      style={{
        color: '#2d2834',
        height: '81px',
        marginTop: '-1px',
      }}
      className={`w-83px flex-shrink-0 text-r2d2834 hover:text-white relative flex flex-col items-center justify-center cursor-pointer`}
    >
      <div className='relative flex justify-center w-48px h-48px'>
        <div
          className='absolute flex items-center justify-center h-19px top-0 -right-4px text-white font-roboto text-12px bg-rf04281 rounded-9px'
          style={{
            padding: '0 6.7px',
          }}
        >
          5
        </div>
        <img className='object-none' src={ButtonIcon} alt='my menu' />
      </div>
      <span
        style={{ marginBottom: '0px' }}
        className='cursor-pointer font-spoqaMedium text-15px tracking-tighter'
      >
        {buttonText}
      </span>
    </div>
  );

  return (
    <>
      <div
        style={{ height: '82px' }}
        className='relative flex justify-between flex-row flex-shrink-0'
      >
        <div className='flex items-center flex-shrink-0'>{myMenuButton}</div>
      </div>
    </>
  );
};

export default LinkButton;
