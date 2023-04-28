import React, { useState } from 'react';
import Powerball from '../../images/navbarHover/6_1.png';
import PowerballLogo from '../../images/navbarHover/6_1_logo.png';
import PowerLadder from '../../images/navbarHover/6_2.png';
import Speedkino from '../../images/navbarHover/6_3.png';
import KinoLadder from '../../images/navbarHover/6_4.png';
import Expand from 'react-expand-animated';
import { useHistory } from 'react-router-dom';
import useNavButtonPosition from 'hooks/useNavButtonPosition';

const MinigamesHover = ({ selection }) => {
  const [isHover, setHover] = useState(null);
  const history = useHistory();

  const hoverMenuPosition = useNavButtonPosition(
    'menu-wrapper',
    'navbar-5-button'
  );

  const gamesArray = [
    {
      id: 0,
      background: Powerball,
      logo: PowerballLogo,
      imgText: 'e-스포츠',
    },
    {
      id: 1,
      background: PowerLadder,
      logo: PowerballLogo,
      imgText: '단폴더베팅방법',
      path: '/esports/structure',
    },
    {
      id: 2,
      background: Speedkino,
      logo: PowerballLogo,
      imgText: '화면구성설명',
      path: '/esports/single',
    },
    {
      id: 3,
      background: KinoLadder,
      logo: PowerballLogo,
      imgText: '다폴더베팅방법',
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
        {isHover === item.id && (
          <div className='w-full h-full bg-black opacity-60 z-10 rounded-6px'></div>
        )}
        <img
          className={`absolute bottom-0 object-none h-auto z-50`}
          src={item.background}
          alt='game_image'
        />
        <div
          style={{ width: '132px' }}
          className='absolute flex flex-col justify-start items-center h-full right-0 top-0 z-0'
        >
          <img src={item.logo} alt='game_image_logo' />
          <p className='text-white text-12px -mb-8px tracking-tighter font-spoqa'>
            {item.imgText}
          </p>
        </div>
      </div>
    ));
  }
  return (
    <Expand
      open={selection === 5}
      duration={200}
      styles={{
        open: { left: hoverMenuPosition },
        close: { left: hoverMenuPosition },
      }}
      className='rounded-8px absolute w-auto m-auto h-262px bg-white'
    >
      <div
        onMouseLeave={() => setHover(null)}
        style={{ minHeight: '176px' }}
        className='h-full w-auto flex justify-center'
      >
        <div
          style={{ width: '460px' }}
          className='p-15px grid gap-10px grid-cols-2 limit:grid-cols-2'
        >
          <GamesList items={gamesArray} />
        </div>
      </div>
    </Expand>
  );
};

export default MinigamesHover;
