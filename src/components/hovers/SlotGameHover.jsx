import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Expand from 'react-expand-animated';
import KslotBanner from '../../images/navbarHover/2_1.png';
import KslotBannerLogo from '../../images/navbarHover/2_1_logo.png';
import KslotBanner1 from '../../images/navbarHover/2_2.png';
import KslotBanner1Logo from '../../images/navbarHover/2_2_logo.png';
import useNavButtonPosition from 'hooks/useNavButtonPosition';

const SlotGameHover = ({ selection }) => {
  const [isHover, setHover] = useState(null);
  const history = useHistory();

  const hoverMenuPosition = useNavButtonPosition(
    'menu-wrapper',
    'navbar-1-button'
  );

  const gamesArray = [
    {
      id: 0,
      background: KslotBanner,
      logo: KslotBannerLogo,
      imgText: '조합베팅',
    },
    {
      id: 1,
      background: KslotBanner1,
      logo: KslotBanner1Logo,
      imgText: '스페셜베팅',
      path: '/esports/structure',
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
      open={selection === 1}
      duration={200}
      styles={{
        open: { left: hoverMenuPosition },
        close: { left: hoverMenuPosition },
      }}
      className='rounded-8px absolute w-auto m-auto h-176px bg-white'
    >
      <div
        onMouseLeave={() => setHover(null)}
        style={{ minHeight: '176px' }}
        className='h-full w-auto flex justify-center'
      >
        <div
          style={{ width: '240px' }}
          className='p-15px grid gap-10px grid-cols-1 limit:grid-cols-1'
        >
          <GamesList items={gamesArray} />
        </div>
      </div>
    </Expand>
  );
};

export default SlotGameHover;
