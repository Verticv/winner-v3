import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Slot1 from '../../images/slotCarousel/1.png';
import Slot1Bottom from '../../images/slotCarousel/1_bottom.png';
import Slot2 from '../../images/slotCarousel/2.png';
import Slot2Bottom from '../../images/slotCarousel/2_bottom.png';
import Slot3 from '../../images/slotCarousel/3.png';
import Slot3Bottom from '../../images/slotCarousel/3_bottom.png';
import Slot4 from '../../images/slotCarousel/4.png';
import Slot4Bottom from '../../images/slotCarousel/4_bottom.png';
import Slot5 from '../../images/slotCarousel/5.png';
import Slot5Bottom from '../../images/slotCarousel/5_bottom.png';
import Slot6 from '../../images/slotCarousel/6.png';
import Slot6Bottom from '../../images/slotCarousel/6_bottom.png';
import LeftArrow from '../../images/slotCarousel/left_arrow.png';
import RightArrow from '../../images/slotCarousel/right_arrow.png';
import RedBadge from '../../images/slotCarousel/badges/red.png';
import BlueBadge from '../../images/slotCarousel/badges/blue.png';
import GreenBadge from '../../images/slotCarousel/badges/green.png';
import slotTitleIcon from '../../images/slotCarousel/slot_title_icon.png';
import TabsComponent from './TabsComponent';

const list = [
  {
    id: 0,
    row1: {
      game: 'Titan Thunder Wrathhhhhhh',
      caption: 'Quickspin',
      Img: Slot1,
      Badge: RedBadge,
      badgeText: '인기',
    },
    row2: {
      game: 'Black Wolf',
      caption: 'Netent',
      Img: Slot1Bottom,
      Badge: RedBadge,
      badgeText: '인기',
    },
  },
  {
    id: 1,
    row1: {
      game: 'Space Man',
      caption: 'Pragmatic',
      Img: Slot2,
      Badge: RedBadge,
      badgeText: '인기',
    },
    row2: {
      game: 'Rio Gems',
      caption: 'Yggdrasil',
      Img: Slot2Bottom,
      Badge: RedBadge,
      badgeText: '인기',
    },
  },
  {
    id: 2,
    row1: {
      game: 'The Tweety House',
      caption: 'Pragmatic',
      Img: Slot3,
      Badge: RedBadge,
      badgeText: '인기',
    },
    row2: {
      game: 'Elvis Frog True Ways',
      caption: 'Skywind',
      Img: Slot3Bottom,
      Badge: RedBadge,
      badgeText: '인기',
    },
  },
  {
    id: 3,
    row1: {
      game: 'Crown of Valor',
      caption: 'Quickspin',
      Img: Slot4,
      Badge: RedBadge,
      badgeText: '인기',
    },
    row2: {
      game: 'Bozo Cats',
      caption: 'Playtech',
      Img: Slot4Bottom,
      Badge: RedBadge,
      badgeText: '인기',
    },
  },
  {
    id: 4,
    row1: {
      game: 'Wild West Gold',
      caption: 'Pragmatic',
      Img: Slot5,
      Badge: BlueBadge,
      badgeText: '신규',
    },
    row2: {
      game: 'Hot Fruits 20',
      caption: 'Pragmatic',
      Img: Slot5Bottom,
      Badge: BlueBadge,
      badgeText: '신규',
    },
  },
  {
    id: 5,
    row1: {
      game: 'Sun of Egypt',
      caption: 'Booongo',
      Img: Slot6,
      Badge: GreenBadge,
      badgeText: '추천',
    },
    row2: {
      game: 'Hit the Bank',
      caption: 'Microgaming',
      Img: Slot6Bottom,
      Badge: GreenBadge,
      badgeText: '추천',
    },
  },
];

const CustomSlide = ({
  index,
  row1Game,
  row1Caption,
  Row1Img,
  Row1Badge,
  row1BadgeText,
  row2Game,
  row2Caption,
  Row2Img,
  Row2Badge,
  row2BadgeText,
}) => {
  const alt = 'image';

  const Card = ({ game, caption, Img, Badge, badgeText }) => (
    <div
      style={{
        background: 'linear-gradient(to top, #ccc4ff, #ffd8f5)',
        boxShadow:
          '0px 5px 10px 0px rgba(0, 0, 0, 0.3),inset 0px 2px 0px 0px rgba(255, 255, 255, 0.3)',
      }}
      className='flex flex-shrink-0 relative w-full p-10px rounded-8px'
    >
      <img
        src={Img}
        alt={alt}
        className='object-cover object-center w-full rounded-6px'
      />
      <img
        src={Badge}
        alt='badge'
        className='object-cover object-center absolute -top-2px left-12px'
      />
      <p className='absolute top-9px left-22px font-spoqaBold text-white text-14px tracking-tighter'>
        {badgeText}
      </p>
      <div className='absolute bottom-12px ml-5px'>
        <p
          style={{ color: '#a5eefe' }}
          className='font-spoqaBold text-white text-14px tracking-tighter'
        >
          {game.length > 19 ? `${game.slice(0, 19)} ...` : game}
        </p>
        <p
          style={{ color: '#e6e2e1' }}
          className='font-spoqa text-white text-12px tracking-tighter -mt-8px'
        >
          {caption}
        </p>
      </div>
    </div>
  );

  return (
    <Slide className='space-y-4' index={index}>
      <div className='mb-10px'>
        <Card
          Badge={Row1Badge}
          badgeText={row1BadgeText}
          Img={Row1Img}
          game={row1Game}
          caption={row1Caption}
        />
      </div>
      <Card
        Badge={Row2Badge}
        badgeText={row2BadgeText}
        Img={Row2Img}
        game={row2Game}
        caption={row2Caption}
      />
    </Slide>
  );
};

export const CarouselBackButton = ({ className, style, onClick }) => {
  return (
    <ButtonBack
      onClick={onClick}
      role='button'
      aria-label='slide backward'
      style={{
        boxShadow: '0px 3px 5px 0px rgba(0, 0, 0, 0.5)',
        ...style,
      }}
      className={`hover:opacity-50 w-30px h-76px bg-white opacity-80 rounded-6px absolute flex items-center justify-center z-30 -left-35px cursor-pointer ${className}`}
      id='prev'
    >
      <img src={LeftArrow} alt='left' className='' />
    </ButtonBack>
  );
};

export const CarouselNextButton = ({ className, style, onClick }) => {
  return (
    <ButtonNext
      onClick={onClick}
      role='button'
      aria-label='slide forward'
      style={{
        ...style,
      }}
      className={`hover:opacity-50 w-30px h-76px bg-white opacity-80 rounded-6px absolute flex items-center justify-center z-30 -right-35px cursor-pointer ${className}`}
      id='next'
    >
      <img src={RightArrow} alt='left' className='' />
    </ButtonNext>
  );
};

export default function SlotGameHorizontalCarousel() {
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
      <div className='container mx-auto'>
        <div className='animated_carousel-multiple flex items-center justify-center w-full h-full'>
          <CarouselProvider
            className=''
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={12}
            visibleSlides={6}
            step={1}
            infinite={false}
          >
            <div className='w-full relative flex items-center justify-center'>
              <CarouselBackButton />
              <div className='w-full h-auto mx-auto overflow-x-hidden overflow-y-hidden'>
                <Slider classNameTrayWrap='carousel_tray_wrapper'>
                  <div
                    id='slider'
                    // TODO: remove this card_animation
                    className='card_animation flex gap-10px items-center justify-start transition ease-out duration-700'
                  >
                    {[...list, ...list].map((item, index) => (
                      <CustomSlide
                        Row1Badge={item.row1.Badge}
                        row1BadgeText={item.row1.badgeText}
                        Row1Img={item.row1.Img}
                        row1Caption={item.row1.caption}
                        row1Game={item.row1.game}
                        Row2Badge={item.row2.Badge}
                        row2BadgeText={item.row2.badgeText}
                        Row2Img={item.row2.Img}
                        row2Caption={item.row2.caption}
                        row2Game={item.row2.game}
                        key={index}
                        index={index}
                      />
                    ))}
                  </div>
                </Slider>
              </div>
              <CarouselNextButton />
            </div>
          </CarouselProvider>
        </div>
      </div>
      {/* End Carousel */}
    </>
  );
}
