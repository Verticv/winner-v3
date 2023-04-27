import React from 'react';
// import Telegram from '../../images/telegram.png';
// import Kakao from '../../images/kakao.png';
// import Plus18 from '../../images/18.png';
import Footer1 from '../../images/footer/1.png';
import Footer2 from '../../images/footer/2.png';
import Footer3 from '../../images/footer/3.png';
import Footer4 from '../../images/footer/4.png';
import Footer5 from '../../images/footer/5.png';
import Footer6 from '../../images/footer/6.png';
import Footer7 from '../../images/footer/7.png';
import Footer8 from '../../images/footer/8.png';
import Footer9 from '../../images/footer/9.png';
import Footer10 from '../../images/footer/10.png';
import Footer11 from '../../images/footer/11.png';
import Footer12 from '../../images/footer/12.png';
import Footer13 from '../../images/footer/13.png';
import Footer14 from '../../images/footer/14.png';
import Footer15 from '../../images/footer/15.png';
import Footer16 from '../../images/footer/16.png';
import Footer17 from '../../images/footer/17.png';
import Footer18 from '../../images/footer/18.png';
import Footer19 from '../../images/footer/19.png';
import Footer20 from '../../images/footer/20.png';
import Footer21 from '../../images/footer/21.png';
import Footer22 from '../../images/footer/22.png';
import Footer23 from '../../images/footer/23.png';
import Footer24 from '../../images/footer/24.png';
import Footer25 from '../../images/footer/25.png';
import Footer26 from '../../images/footer/26.png';
import Footer27 from '../../images/footer/27.png';
import Logo from '../../images/footer/info/logo.png';
import image1 from '../../images/footer/info/1.png';
import image2 from '../../images/footer/info/2.png';
import image3 from '../../images/footer/info/3.png';
import image4 from '../../images/footer/info/4.png';
import image5 from '../../images/footer/info/5.png';
import image6 from '../../images/footer/info/6.png';
import image7 from '../../images/footer/info/7.png';
import image8 from '../../images/footer/info/8.png';
import image9 from '../../images/footer/info/9.png';

import ContactImg1 from '../../images/footer/contact/1.png';
import ContactImg2 from '../../images/footer/contact/2.png';
import ContactImg3 from '../../images/footer/contact/3.png';

import { useHistory } from 'react-router-dom';
// import PopupControls from 'components/popups/PopupControls';
// import ReauthenticatePopup from 'components/popups/ReauthenticatePopup';

const Footer = ({ fullWidth = false }) => {
  const history = useHistory();
  // const [isPopupOpen, setPopupOpen] = useState(true);

  //   const FirstRow = () => (
  //     <div className='flex items-center mr-36px'>
  //       <img src={Footer1} className='object-none' alt='' />
  //       <img src={Footer2} className='object-none ml-50px' alt='' />
  //       <img src={Footer3} className='object-none ml-43px' alt='' />
  //       <img
  //         style={{ marginLeft: '51px' }}
  //         src={Footer4}
  //         className='object-none'
  //         alt=''
  //       />
  //       <img src={Footer5} className='object-none ml-70px' alt='' />
  //     </div>
  //   );

  // const FirstRow = () => (
  //   <div className='flex items-center mr-36px'>
  //     <img src={Footer1} className='object-none' alt='' />
  //     <img src={Footer2} className='object-none' alt='' />
  //     <img src={Footer3} className='object-none' alt='' />
  //     <img src={Footer4} className='object-none' alt='' />
  //     <img src={Footer5} className='object-none' alt='' />
  //   </div>
  // );

  // const SecondRow = () => (
  //   <div className='flex items-center mr-26px mt-25px'>
  //     <img src={Footer6} className='object-none' alt='' />
  //     <img src={Footer7} className='object-none ml-40px' alt='' />
  //     <img src={Footer8} className='object-none ml-55px' alt='' />
  //     <img
  //       style={{ marginLeft: '74px' }}
  //       src={Footer9}
  //       className='object-none'
  //       alt=''
  //     />
  //     <img src={Footer10} className='object-none ml-57px' alt='' />
  //   </div>
  // );

  // const ThirdRow = () => (
  //   <div className='flex items-center mr-40px mt-27px'>
  //     <img src={Footer11} className='object-none' alt='' />
  //     <img src={Footer12} className='object-none ml-50px' alt='' />
  //     <img src={Footer13} className='object-none ml-19px' alt='' />
  //     <img
  //       style={{ marginLeft: '35px' }}
  //       src={Footer14}
  //       className='object-none'
  //       alt=''
  //     />
  //     <img
  //       style={{ marginLeft: '51px' }}
  //       src={Footer15}
  //       className='object-none'
  //       alt=''
  //     />
  //     <img
  //       style={{ marginLeft: '68px' }}
  //       src={Footer16}
  //       className='object-none'
  //       alt=''
  //     />
  //   </div>
  // );

  const images = [
    Footer1,
    Footer2,
    Footer3,
    Footer4,
    Footer5,
    Footer6,
    Footer7,
    Footer8,
    Footer9,
    Footer10,
    Footer11,
    Footer12,
    Footer13,
    Footer14,
    Footer15,
    Footer16,
    Footer17,
    Footer18,
    Footer19,
    Footer20,
    Footer21,
    Footer22,
    Footer23,
    Footer24,
    Footer25,
    Footer26,
    Footer27,
  ];

  const menuLists = [
    {
      title: '라이브카지노',
      items: [
        {
          text: '프레그메틱플레이',
          link: '/live-casino/pragmatic-play',
        },
        {
          text: '에볼루션',
          link: '/live-casino/pragmatic-play',
        },
        {
          text: '로얄지',
          link: '/live-casino/pragmatic-play',
        },
        {
          text: '아시아게이밍',
          link: '/live-casino/pragmatic-play',
        },
        {
          text: '드림게이밍',
          link: '/live-casino/pragmatic-play',
        },
      ],
    },
    {
      title: '스포츠',
      items: [
        {
          text: '조합베팅',
          link: '/live-casino/pragmatic-play',
        },
        {
          text: '스페셜베팅',
          link: '/live-casino/pragmatic-play',
        },
        {
          text: '실시간스포츠',
          link: '/live-casino/pragmatic-play',
        },
      ],
    },
    {
      title: '슬롯게임',
      items: [
        {
          text: '케이플레이슬롯',
          link: '/live-casino/pragmatic-play',
        },
      ],
    },
    {
      title: '호텔카지노',
      items: [
        {
          text: '두윈카지노',
          link: '/live-casino/pragmatic-play',
        },
        {
          text: '보타카지노',
          link: '/live-casino/pragmatic-play',
        },
      ],
    },
    {
      title: '기타게임',
      items: [
        {
          text: 'e-스포츠',
          link: '/live-casino/pragmatic-play',
        },
        {
          text: '미니게임',
          link: '/live-casino/pragmatic-play',
        },
        {
          text: '키론가상게임',
          link: '/live-casino/pragmatic-play',
        },
        {
          text: '피싱게임',
          link: '/live-casino/pragmatic-play',
        },
        {
          text: '티비벳',
          link: '/live-casino/pragmatic-play',
        },
      ],
    },
    {
      title: '고객센터',
      items: [
        {
          text: '문의하기',
          link: '/live-casino/pragmatic-play',
        },
        {
          text: '공지사항',
          link: '/live-casino/pragmatic-play',
        },
        {
          text: '자주묻는질문',
          link: '/live-casino/pragmatic-play',
        },
        {
          text: '베팅규정',
          link: '/live-casino/pragmatic-play',
        },
      ],
    },
  ];

  const MenuList = ({ menuLists }) => {
    return (
      <>
        {menuLists.map((menu, index) => (
          <div
            key={`menu-${index}`}
            // style={{ width: '221px', height: '158px' }}
            className='flex-shrink-0'
          >
            <p
              style={{ color: '#7f7d9c' }}
              className='font-spoqaMedium text-14px h-14px tracking-tigther text-white mb-15px'
            >
              {menu.title}
            </p>
            {menu.items.map((item, index) => (
              <p
                key={`menu-item-${index}`}
                onClick={() => history.push(item.link)}
                style={{ color: '#c8c8c8' }}
                className='font-spoqa text-13px h-14px mb-10px tracking-tigther hover:text-gray-300 cursor-pointer'
              >
                {item.text}
              </p>
            ))}
          </div>
        ))}
      </>
    );
  };

  return (
    <footer
      style={{ height: '637px', backgroundColor: '#19162e' }}
      className={`flex flex-col items-center flex-shrink-0 ${
        fullWidth ? 'w-1836px limit1836:w-screen' : 'w-1260px limit:w-screen'
      }`}
    >
      {/* // Logos section */}
      <div
        style={{ paddingTop: '30px' }}
        className='flex w-default flex-shrink-0'
      >
        <div className='w-full grid gap-10px grid-cols-9 limit:grid-cols-9'>
          {images.map((image, index) => (
            <img key={index} src={image} className='object-none' alt='logo' />
          ))}
          {/* <FirstRow /> */}
          {/* <SecondRow />
          <ThirdRow /> */}
        </div>
      </div>
      {/* // second section */}
      <div
        style={{ background: '#221e3f' }}
        className={`flex justify-center mt-30px ${
          fullWidth ? 'w-1836px limit1836:w-screen' : 'w-1260px limit:w-screen'
        }`}
      >
        <div
          style={{ maxWidth: '1260px' }}
          className='flex justify-between w-1260px pr-127px pt-29px pb-30px'
        >
          <MenuList menuLists={menuLists} />
        </div>
      </div>

      <div className='flex flex-col w-default flex-shrink-0'>
        <div className='flex flex-col items-center mt-34px'>
          <div className='w-full h-40px flex justify-between'>
            <div>
              <img src={Logo} className='object-none' alt='' />
            </div>
            <div className='flex space-x-18px items-center'>
              <img src={image1} className='object-none' alt='' />
              <img src={image2} className='object-none' alt='' />
              <img src={image3} className='object-none' alt='' />
              <img src={image4} className='object-none' alt='' />
              <img src={image5} className='object-none' alt='' />
            </div>
          </div>
          <div className='w-full flex justify-between'>
            <div className='flex items-center mb-9px'>
              <div className='flex items-center'>
                <img src={ContactImg1} className='object-none' alt='' />
                <p className='text-white text-14px font-spoqa ml-5px'>
                  고객센터
                </p>
              </div>
              <div className='flex items-center'>
                <img src={ContactImg2} className='object-none' alt='' />
                <p className='text-white text-14px font-spoqa ml-5px'>
                  test1234
                </p>
              </div>
              <div className='flex items-center'>
                <img src={ContactImg3} className='object-none' alt='' />
                <p className='text-white text-14px font-spoqa ml-5px'>
                  test1234
                </p>
              </div>
            </div>
            <div className='flex h-40px space-x-18px items-center'>
              <img src={image6} className='object-none' alt='' />
              <img src={image7} className='object-none' alt='' />
              <img src={image8} className='object-none' alt='' />
              <img src={image9} className='object-none' alt='' />
            </div>
          </div>
        </div>
        <div
          style={{ borderColor: '#42404e' }}
          className='flex justify-center items-center border-t text-center h-62px'
        >
          <p
            style={{ color: '#7f7d9c' }}
            className='text-14px font-spoqa text-gray-r828282'
          >
            Copyright © WINNER. All rights reserved.
          </p>
        </div>
      </div>

      {/* // third section */}
      {/* <div
        style={{ height: '91px' }}
        className='w-default flex justify-between flex-shrink-0 items-center'
      >
        <div className='flex items-center'>
          <img src={Plus18} className='object-none mr-20px' alt='' />
          <div
            style={{ backgroundColor: '#383838' }}
            className='h-25px w-px flex-shrink-0'
          ></div>
          <img src={Kakao} className='object-none ml-20px mr-5px' alt='' />
          <p className='text-14px font-spoqa text-gray-r828282'>test1234</p>
          <img src={Telegram} className='object-none ml-8px mr-5px' alt='' />
          <p className='text-14px font-spoqa text-gray-r828282'>test1234</p>
        </div>

        <p className='text-14px font-spoqa text-gray-r828282'>
          Copyright © WINNER. All rights reserved.
        </p>
      </div> */}
    </footer>
  );
};

export default Footer;
