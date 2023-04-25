import React from 'react';
import whiteFootball from '../../images/sport/white_football.png';
import world from '../../images/sport/world.png';
import england from '../../images/sport/england.png';
import liverpool from '../../images/sport/liverpool.png';
import manchester_united from '../../images/sport/manchester_united.png';
import tottenham from '../../images/sport/tottenham.png';
import slotTitleIcon from '../../images/slotCarousel/slot_title_icon.png';
import villarreal from '../../images/sport/villarreal.png';

import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import {
  CarouselBackButton,
  CarouselNextButton,
} from './SlotGameHorizontalCarousel';
import TabsComponent from './TabsComponent';

const Button = ({ number }) => {
  return (
    <button
      className='w-61px h-31px filter hover:brightness-125 rounded-6px'
      style={{
        boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.6)',
        background: 'linear-gradient(to top, rgb(73,31,156), rgb(158,60,188))',
      }}
    >
      <p className='text-white font-spoqaMedium text-14px tracking-tight'>
        {number}
      </p>
    </button>
  );
};

const Paragraph = ({ text }) => {
  return (
    <p className='w-61px h-31px text-center text-r666666 font-spoqaMedium text-12px tracking-tight'>
      {text}
    </p>
  );
};

const Club = ({ text, Icon }) => {
  return (
    <div className='flex items-center'>
      <div
        style={{ background: '#b8afcd' }}
        className='w-28px h-28px flex items-center justify-center rounded-full'
      >
        <img className='object-contain' src={Icon} alt={text} />
      </div>
      <p className='text-r666666 font-spoqaBold text-15px tracking-tight'>
        {text}
      </p>
    </div>
  );
};

const Card = () => {
  return (
    <div
      // style={{
      //   boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.4)',
      // }}
      // TODO: add the correct shadow
      // TODO: add dynamic data
      className='flex flex-col justify-between w-403px h-139px p-5px bg-white rounded-6px'
    >
      <div
        style={{
          background: 'linear-gradient(to right, #9d3bbb, #5423a0)',
        }}
        className='flex flex-col w-full h-44px pl-5px rounded-4px justify-center'
      >
        <div className='flex'>
          <img
            className='object-contain'
            src={whiteFootball}
            alt='white football'
          />
          <img className='object-contain' src={world} alt='white football' />
          <p className='text-white font-spoqaBold text-14px tracking-tight'>
            UEFA Champions League
          </p>
        </div>
        <p
          style={{ color: '#ebabff' }}
          className='font-spoqa text-12px tracking-tight'
        >
          2022-08-25 / 15:45
        </p>
      </div>
      <div className='flex flex-col'>
        <div className='flex w-full items-center justify-between'>
          <Club text='리버플' Icon={liverpool} />
          <div className='flex space-x-4px'>
            <Paragraph text='W1' />
            <Paragraph text='X' />
            <Paragraph text='W2' />
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <Club text='비야레알' Icon={villarreal} />
          <div className='space-x-4px'>
            <Button number='1.93' />
            <Button number='4.83' />
            <Button number='3.14' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function SportHorizontalCarousel() {
  return (
    <>
      <div className='w-full flex items-center justify-between'>
        <div className='flex items-center'>
          <img src={slotTitleIcon} alt='' />
          <p className='text-white text-22px font-spoqaBold tracking-tight'>
            슬롯게임
          </p>
        </div>
        <div className='flex items-center justify-end'>
          <TabsComponent />
          <button
            style={{
              background: '#936cee',
              textShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.3)',
            }}
            className='w-83px h-28px ml-5px flex items-center justify-center text-white text-14px font-spoqaMedium filter hover:brightness-125 rounded-13px'
          >
            더보기
          </button>
        </div>
      </div>
      {/* Start Carousel */}
      <div
        className='relative rounded-8px p-10px'
        style={{
          background:
            'linear-gradient(to top, rgb(67,42,123), rgb(125,23,196))',
          boxShadow:
            '0px 5px 10px 0px rgba(0, 0, 0, 0.3),inset 0px 2px 0px 0px rgba(255, 255, 255, 0.3)',
        }}
      >
        <CarouselProvider
          visibleSlides={3}
          totalSlides={4}
          step={1}
          naturalSlideWidth={400}
          naturalSlideHeight={500}
          isIntrinsicHeight
        >
          <CarouselBackButton className='top-47px' />
          <Slider
            style={{
              maxWidth: '1229px',
              // ,background: 'green'
            }}
            classNameTrayWrap='sport_carousel__slider-tray'
          >
            <Slide index={0}>
              <Card />
            </Slide>
            <Slide index={1}>
              <Card />
            </Slide>
            <Slide index={2}>
              <Card />
            </Slide>
            <Slide index={2}>
              <Card />
            </Slide>
          </Slider>
          <CarouselNextButton className='top-47px' />
        </CarouselProvider>
      </div>

      {/* End Carousel */}
    </>
  );
}
