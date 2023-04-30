import React from 'react';
import { useHistory } from 'react-router-dom';
import Quick1 from '../images/sideMenu/1.png';
import Quick2 from '../images/sideMenu/2.png';
import Quick3 from '../images/sideMenu/3.png';
import Quick4 from '../images/sideMenu/4.png';
import Quick5 from '../images/sideMenu/5.png';
import Quick6 from '../images/sideMenu/6.png';
import Quick7 from '../images/sideMenu/7.png';
import Quick8 from '../images/sideMenu/8.png';
import Quick9 from '../images/sideMenu/9.png';
import Quick10 from '../images/sideMenu/10.png';
import Telegram from '../images/sideMenu/telegram.png';
import Tiktok from '../images/sideMenu/tiktok.png';
import Contact from '../images/sideMenu/contact.png';

import ButtonBackground from '../images/sideMenu/button_background.png';
import LeftIcon from '../images/sideMenu/left.png';

const Button = ({ text, img }) => {
  const history = useHistory();
  return (
    <div
      onClick={() => history.push('#')}
      style={{
        boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.6)',
        backgroundImage: `url(${ButtonBackground})`,
        backgroundRepeat: 'round',
      }}
      className='flex flex-col items-center w-75px h-68px rounded-6px pt-7px cursor-pointer hover:filter hover:brightness-125'
    >
      <div className='w-32px h-32px'>
        <img src={img} alt={text} className='' />
      </div>
      <p className='text-white text-13px font-spoqa tracking-tight mt-6px'>
        {text}
      </p>
    </div>
  );
};

const QuickMenu = () => {
  const [isHover, setIsHover] = React.useState(false);

  return (
    <div
      style={{
        height: '641px',
        width: '236px',
      }}
      className={`fixed top-157px ${
        isHover ? 'right-0' : '-right-175px'
      } z-10 flex transition-all duration-300 ease-in-out`}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        style={{
          backgroundColor: '#dfdbfa',
          boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.4)',
          clipPath: 'inset(-20px 0px -20px -20px)',
        }}
        className='w-61px h-163px mt-50px rounded-8px rounded-r-none z-10 p-2px pr-0'
      >
        <div
          style={{
            background: 'linear-gradient(to right, #ad9cd3, #dfdbfa 50%)',
          }}
          className='flex flex-col items-center w-full h-full rounded-8px rounded-r-none pt-13px cursor-pointer'
          onMouseOver={() => setIsHover(true)}
        >
          <img src={LeftIcon} alt='' className='' />
          <div className='text-center'>
            <p
              style={{ color: '#5e399a' }}
              className='absolute left-18px font-semibold transform rotate-90 origin-bottom-left text-16px font-spoqa tracking-normal mt-3px'
            >
              메뉴열기
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: '#dfdbfa',
          boxShadow: isHover ? '0px 0px 20px 0px rgba(0, 0, 0, 0.4)' : '',
        }}
        className='w-175px h-full rounded-8px rounded-r-none p-10px'
      >
        <div
          style={{ height: '360px' }}
          className='grid gap-5px grid-cols-2 mb-10px'
        >
          <Button text='출석부' img={Quick1} />
          <Button text='게시판' img={Quick2} />
          <Button text='경기결과' img={Quick3} />
          <Button text='베팅규정' img={Quick4} />
          <Button text='문의하기' img={Quick5} />
          <Button text='계좌문의' img={Quick6} />
          <Button text='베팅내역' img={Quick7} />
          <Button text='충/환전내역' img={Quick8} />
          <Button text='라이브영상' img={Quick9} />
          <Button text='비번변경' img={Quick10} />
        </div>
        <div
          style={{ backgroundColor: '#b8aadd' }}
          className='h-px w-full mb-10px'
        />
        <div className='bg-white h-240px flex flex-col rounded-4px'>
          <div
            style={{
              background: 'linear-gradient(to right, #9d3bbb, #5423a0)',
            }}
            className='flex justify-center items-center h-32px w-full rounded-4px rounded-b-none'
          >
            <img src={Contact} alt='' className='mr-4px' />
            <p className='text-white text-14px font-spoqa tracking-tight'>
              고객센터
            </p>
          </div>
          <div className='flex flex-col justify-center items-center pt-15px'>
            <img src={Telegram} alt='' className='' />
            <p
              style={{ color: '#62438f' }}
              className='text-14px font-spoqa tracking-tight -mt-5px'
            >
              test1234
            </p>
            <img src={Tiktok} alt='' className='mt-5px' />
            <p
              style={{ color: '#62438f' }}
              className='text-14px font-spoqa tracking-tight -mt-5px'
            >
              test1234
            </p>
            <div
              style={{ backgroundColor: '#b8aadd', width: '145px' }}
              className='h-px mt-11px mx-5px'
            />
            <p
              style={{ color: '#62438f' }}
              className='text-13px font-spoqa tracking-tight mt-11px text-center'
            >
              24시간 운영중 <br />{' '}
              <span className='block -mt-4px'>언제든지 문의주세요.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickMenu;
