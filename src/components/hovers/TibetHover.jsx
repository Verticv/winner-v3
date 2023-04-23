import React, { useState } from 'react';
import Expand from 'react-expand-animated';
import { useHistory } from 'react-router-dom';
import img1 from '../../images/navbarHover/10_1.png';
import img1Logo from '../../images/navbarHover/10_1_logo.png';
import img2 from '../../images/navbarHover/10_3.png';
import img3 from '../../images/navbarHover/10_2.png';

const TibetHover = ({ selection }) => {
  const [isHover, setHover] = useState(null);
  const history = useHistory();

  const gamesArray = [
    {
      id: 0,
      background: img1,
      logo: img1Logo,
      imgText: '티비벳',
    },
    {
      id: 1,
      background: img2,
      logo: img1Logo,
      imgText: '화면구성설명',
    },
    {
      id: 2,
      background: img3,
      logo: img1Logo,
      imgText: '베팅방법',
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
        <div className='absolute flex flex-col justify-center items-center h-full right-0 top-0 w-132px z-0'>
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
      open={selection === 9}
      duration={200}
      styles={{ open: { left: '1159px' } }}
      className='rounded-8px absolute w-auto m-auto h-98px bg-white'
    >
      <div
        onMouseLeave={() => setHover(null)}
        style={{ minHeight: '254px' }}
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

export default TibetHover;
