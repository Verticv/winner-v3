import React, { useState } from 'react';
import Expand from 'react-expand-animated';
import { useHistory } from 'react-router';

import Img1_1 from '../../images/navbarHover/1_1.png';
import Img1_2 from '../../images/navbarHover/1_2.png';
import Img1_3 from '../../images/navbarHover/1_3.png';
import Img1_4 from '../../images/navbarHover/1_4.png';
import Img1_5 from '../../images/navbarHover/1_5.png';
import Img1_6 from '../../images/navbarHover/1_6.png';
import Img1_7 from '../../images/navbarHover/1_7.png';
import Img1_8 from '../../images/navbarHover/1_8.png';
import Img1_9 from '../../images/navbarHover/1_9.png';
import Img1_10 from '../../images/navbarHover/1_10.png';
import Img1_11 from '../../images/navbarHover/1_11.png';

import Img1_1_logo from '../../images/navbarHover/1_1_logo.png';
import Img1_2_logo from '../../images/navbarHover/1_2_logo.png';
import Img1_3_logo from '../../images/navbarHover/1_3_logo.png';
import Img1_4_logo from '../../images/navbarHover/1_4_logo.png';
import Img1_5_logo from '../../images/navbarHover/1_5_logo.png';
import Img1_6_logo from '../../images/navbarHover/1_6_logo.png';
import Img1_7_logo from '../../images/navbarHover/1_7_logo.png';
import Img1_9_logo from '../../images/navbarHover/1_9_logo.png';
import Img1_10_logo from '../../images/navbarHover/1_10_logo.png';
import Img1_11_logo from '../../images/navbarHover/1_11_logo.png';

const LiveCasinoHover = ({ selection }) => {
  const [isHover, setHover] = useState(null);
  const history = useHistory();

  const gamesArray = [
    {
      id: 0,
      background: Img1_1,
      logo: Img1_1_logo,
      imgText: '프레그메틱플레이',
    },
    {
      id: 1,
      background: Img1_2,
      logo: Img1_2_logo,
      imgText: '아시아게이밍',
      path: '/esports/structure',
    },
    {
      id: 2,
      background: Img1_3,
      logo: Img1_3_logo,
      imgText: '빅게이밍',
      path: '/esports/single',
    },
    {
      id: 3,
      background: Img1_4,
      logo: Img1_4_logo,
      imgText: '마이크로게이밍',
      path: '/esports/multi',
    },
    {
      id: 4,
      background: Img1_5,
      logo: Img1_5_logo,
      imgText: '에볼루션',
      path: '/esports/multi',
    },
    {
      id: 5,
      background: Img1_6,
      logo: Img1_6_logo,

      imgText: '드림게이밍',
      path: '/esports/multi',
    },
    {
      id: 6,
      background: Img1_7,
      logo: Img1_7_logo,

      imgText: '오리엔탈게임',
      path: '/esports/multi',
    },
    {
      id: 7,
      background: Img1_8,
      imgText: '준비중',
      path: '/esports/multi',
    },
    {
      id: 8,
      background: Img1_9,
      logo: Img1_9_logo,
      imgText: '로얄지',
      path: '/esports/multi',
    },
    {
      id: 9,
      background: Img1_10,
      logo: Img1_10_logo,
      imgText: '섹시게이밍',
      path: '/esports/multi',
    },
    {
      id: 10,
      background: Img1_11,
      logo: Img1_11_logo,
      imgText: '이주기',
      path: '/esports/multi',
    },
    {
      id: 11,
      background: Img1_8,
      imgText: '준비중',
      path: '/esports/multi',
    },
  ];

  function GamesList({ items }) {
    return items.map((item) => (
      <div
        key={item.id}
        className={`relative group cursor-pointer flex items-center flex-shrink-0 h-68px rounded-6px`}
        style={{
          width: '210px',
          background: 'linear-gradient(to right, #9c3bbb, #411d99)',
        }}
        onMouseEnter={() => setHover(item.id)}
        onClick={() => history.push(item.path)}
      >
        {isHover === item.id && item.id !== 11 && (
          <button
            style={{
              boxShadow: '0px 3px 5px 0px rgba(0, 0, 0, 0.5)',
              background: 'linear-gradient(to right, #df52ff, #6c22ff)',
            }}
            className='absolute z-20 top-20px right-15px flex items-center justify-center w-102px h-28px text-white rounded-14px cursor-pointer font-spoqaMedium text-15px tracking-tighter'
          >
            게임시작
          </button>
        )}
        {item.id === 11 && (
          <button
            style={{
              boxShadow: '0px 3px 5px 0px rgba(0, 0, 0, 0.5)',
              background: 'linear-gradient(to right, #7e7e7e, #505050)',
            }}
            className='absolute z-20 top-20px right-54px flex items-center justify-center w-102px h-28px text-white rounded-14px cursor-pointer font-spoqaMedium text-15px tracking-tighter'
          >
            점검중
          </button>
        )}
        {(isHover === item.id || 11 === item.id) && (
          <div className='relative w-full h-full bg-black opacity-60 z-10 rounded-6px'></div>
        )}

        <img
          className={`absolute bottom-0 object-none h-auto ${
            11 === item.id ? 'z-0' : 'z-50'
          } `}
          src={item.background}
          alt='game_image'
        />
        <div className='absolute flex flex-col justify-center items-center h-full right-0 top-0 w-132px z-0'>
          {item.logo && <img src={item.logo} alt='game_image_logo' />}
          <p className='text-white text-12px -mb-8px tracking-tighter font-spoqa'>
            {item.imgText}
          </p>
        </div>
      </div>
    ));
  }
  return (
    <Expand
      open={selection === 0}
      duration={200}
      styles={{ open: { left: '326px' } }} // TODO: check the position!
      className='rounded-8px absolute w-auto m-auto h-262px border-b border-t bg-white'
    >
      <div
        onMouseLeave={() => setHover(null)}
        style={{ minHeight: '254px' }}
        className='h-full w-auto flex justify-center'
      >
        <div
          style={{ width: '900px' }}
          className='p-15px grid gap-10px grid-cols-4 limit:grid-cols-4'
        >
          <GamesList items={gamesArray} />
        </div>
      </div>
    </Expand>
  );
};

export default LiveCasinoHover;
