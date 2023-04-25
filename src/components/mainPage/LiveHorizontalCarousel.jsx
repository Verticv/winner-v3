import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import image1 from '../../images/live/1.png';
import image1Bottom from '../../images/live/1_bottom.png';
import image2 from '../../images/live/2.png';
import image2Bottom from '../../images/live/2_bottom.png';
import image3 from '../../images/live/3.png';
import image3Bottom from '../../images/live/3_bottom.png';
import image4 from '../../images/live/4.png';
import image4Bottom from '../../images/live/4_bottom.png';
import Left from '../../images/live/left.png';
import slotTitleIcon from '../../images/slotCarousel/slot_title_icon.png';

import {
  CarouselBackButton,
  CarouselNextButton,
} from './SlotGameHorizontalCarousel';

const list = [
  {
    id: 0,
    row1: {
      game: '에볼루션',
      Img: image1,
    },
    row2: {
      game: '로얄지',
      Img: image1Bottom,
    },
  },
  {
    id: 1,
    row1: {
      game: '아시아게이밍',
      Img: image2,
    },
    row2: {
      game: '드림게이밍',
      Img: image2Bottom,
    },
  },
  {
    id: 2,
    row1: {
      game: '섹시게이밍',
      Img: image3,
    },
    row2: {
      game: '빅게이밍',
      caption: 'Skywind',
      Img: image3Bottom,
    },
  },
  {
    id: 3,
    row1: {
      game: '오리엔탈게임',
      Img: image4,
    },
    row2: {
      game: '이주기',
      Img: image4Bottom,
    },
  },
];

const CustomSlide = ({
  index,
  row1Game,
  row1Caption,
  Row1Img,
  row2Game,
  row2Caption,
  Row2Img,
}) => {
  const alt = 'image';

  const Card = ({ game, caption, Img }) => (
    <div
      style={{
        width: '148px',
        height: '200px',
      }}
      className='flex flex-shrink-0 relative w-full rounded-6px'
    >
      <img
        src={Img}
        alt={alt}
        className='object-cover object-center w-full rounded-6px'
      />
      <div className='absolute bottom-4px ml-10px'>
        <p
          style={{ color: '#eeeeee' }}
          className='font-spoqaMedium text-14px tracking-tighter'
        >
          {game.length > 19 ? `${game.slice(0, 19)} ...` : game}
        </p>
      </div>
    </div>
  );

  return (
    <Slide className='space-y-4' index={index}>
      <div className='mb-10px'>
        <Card Img={Row1Img} game={row1Game} caption={row1Caption} />
      </div>
      <Card Img={Row2Img} game={row2Game} caption={row2Caption} />
    </Slide>
  );
};

export default function LiveHorizontalCarousel() {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center'>
        <img src={slotTitleIcon} alt='' />
        <p className='text-white text-22px font-spoqaBold tracking-tight'>
          슬롯게임
        </p>
      </div>
      <div
        className='flex p-15px pr-5px rounded-8px'
        style={{
          width: '860px',
          height: '440px',
          boxShadow:
            '0px 5px 10px 0px rgba(0, 0, 0, 0.3),inset 0px 2px 0px 0px rgba(255, 255, 255, 0.3)',
          background:
            'linear-gradient(to top, rgb(204,196,255), rgb(255,216,245))',
        }}
      >
        <div
          style={{ minWidth: '193px' }}
          className='flex flex-shrink-0 relative rounded-6px w-193px h-410px'
        >
          <img
            src={Left}
            alt='left'
            // style={{ width: '193px', height: '410px' }}
            className='object-cover rounded-6px'
          />
          <div className='absolute bottom-4px ml-10px'>
            <p
              style={{ color: '#eeeeee' }}
              className='font-spoqaMedium text-14px tracking-tighter'
            >
              프레그메틱플레이
            </p>
          </div>
        </div>
        {/* Start Carousel */}
        <div className='container mx-auto'>
          <div className='animated_carousel-multiple flex items-center justify-center w-full h-full'>
            <CarouselProvider
              className=''
              naturalSlideWidth={148}
              naturalSlideHeight={410}
              isIntrinsicHeight={true}
              totalSlides={8}
              visibleSlides={4}
              step={1}
              infinite={false}
            >
              <div className='w-full relative flex items-center justify-center'>
                <CarouselBackButton
                  style={{ left: '-10px' }}
                  className='-left-10px'
                />
                <div className='w-full h-auto mx-auto overflow-x-hidden overflow-y-hidden'>
                  <Slider
                    style={{
                      maxWidth: '622px',
                    }}
                    classNameTrayWrap='live_carousel_tray_wrapper'
                  >
                    <div
                      id='slider'
                      // TODO: remove this card_animation
                      className='card_animation flex gap-10px items-center justify-start transition ease-out duration-700'
                    >
                      {[...list, ...list].map((item, index) => (
                        <CustomSlide
                          Row1Img={item.row1.Img}
                          row1Caption={item.row1.caption}
                          row1Game={item.row1.game}
                          Row2Img={item.row2.Img}
                          row2Caption={item.row2.caption}
                          row2Game={item.row2.game}
                          key={item.id}
                          index={index}
                        />
                      ))}
                    </div>
                  </Slider>
                </div>
                <CarouselNextButton style={{ right: '-10px' }} />
              </div>
            </CarouselProvider>
          </div>
        </div>
        {/* End Carousel */}
      </div>
    </div>
  );
}
