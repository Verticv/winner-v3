import React from 'react';
import clsx from 'clsx'; // TODO: remove this

export default function TabsComponent() {
  const [app, setApp] = React.useState('인기게임');
  return (
    <div
      style={{ width: '536px', color: '#5e399a' }}
      className='flex h-28px mx-2 mt-2 bg-white relative tabs mb-20px rounded-13px'
    >
      <button
        className={clsx(
          'tabs-item relative z-10 text-center rounded-md w-full text-sm cursor-pointer select-none focus:outline-none',
          {
            'active-tab': app === '인기게임',
            'text-white': app === '인기게임',
          }
        )}
        onClick={() => {
          setApp('인기게임');
        }}
      >
        인기게임
      </button>
      <button
        className={clsx(
          'tabs-item w-full relative z-10 text-center rounded-md  text-sm cursor-pointer select-none focus:outline-none',
          {
            'active-tab': app === '추천게임',
            'text-white': app === '추천게임',
          }
        )}
        onClick={() => {
          setApp('추천게임');
        }}
      >
        추천게임
      </button>
      <button
        className={clsx(
          'tabs-item w-full relative z-10 text-center rounded-md text-sm cursor-pointer select-none focus:outline-none',
          {
            'active-tab': app === '신규게임',
            'text-white': app === '신규게임',
          }
        )}
        onClick={() => {
          setApp('신규게임');
        }}
      >
        신규게임
      </button>
      <span
        style={{
          background: 'linear-gradient(to right, #df52ff, #6b22ff)',
        }}
        className={clsx(
          'tab-item-animate text-white text-14px font-spoqaMedium rounded-12px',
          {
            'active-tab': app === '신규게임',
          }
        )}
      ></span>
    </div>
  );
}
