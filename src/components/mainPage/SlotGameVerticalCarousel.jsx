import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import goldCardImg from '../../images/gold_card_img.png';
import slotInternalCardBackground from '../../images/slot_internal_card_background.png';
import slotCardBackground from '../../images/slot_card_background.png';
import slotTitleLeftIcon from '../../images/slot_title_left_icon.png';
import slotTitleReftIcon from '../../images/slot_title_right_icon.png';

const Card = ({ icon, game }) => (
  <button
    style={{
      width: '293px',
      height: '98px',
      // TODO: check if there is an external shadow?
      backgroundImage: `url(${slotInternalCardBackground})`,
      backgroundRepeat: 'round',
    }}
    className='h-full flex items-center pl-10px flex-shrink-0 hover:brightness-125 rounded-6px'
  >
    <div
      style={{
        borderRadius: '3px',
        borderWidth: '1px',
        borderColor: '#413d36',
      }}
      className='bg-gray-500'
    >
      {/* // TODO: fix the image left margin */}
      <img src={icon} alt='' className='object-cover' />
    </div>

    <div
      style={{
        color: '#6f6f6f',
      }}
      className='ml-8px text-14px font-spoqa tracking-tighter pt-2px'
    >
      <p
        style={{
          color: '#a5eefe',
          textOverflow: 'unset',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}
        className='text-20px font-spoqaBold'
      >
        Wild West Gold
      </p>
      <p
        style={{
          textOverflow: 'unset',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          color: '#dcd5d3',
        }}
        className='text-14px font-spoqa text-left'
      >
        {game.length > 19 ? `${game.slice(0, 19)}...` : game}
      </p>
      <p
        style={{ color: '#f5e074' }}
        className='font-spoqaBold text-22px flex items-center'
      >
        ₩123,456,789
      </p>
    </div>
  </button>
);

const SlideWithAnimation = () => {
  return (
    <div
      style={{
        width: '293px',
        minHeight: '98px',
      }}
      className='h-full'
    >
      <Card icon={goldCardImg} game='마이프로틴***' />
    </div>
  );
};

// Slider with animation
export default function SlotGameVerticalCarousel() {
  return (
    <div
      style={{
        backgroundImage: `url(${slotCardBackground})`,
        backgroundRepeat: 'round',
      }}
      className='rounded-8px'
    >
      <div className='flex text-white h-37px w-full justify-center items-center'>
        <img src={slotTitleLeftIcon} alt='slot title icon' />
        <p>슬롯 실시간 우승 </p>
        <img src={slotTitleReftIcon} alt='slot title icon' />
      </div>
      {/* Start Carousel */}
      <div className='container mx-auto'>
        <div className='vertical_carousel slot_vertical_carousel flex items-center justify-center w-full h-full p-10px pt-0'>
          <CarouselProvider
            visibleSlides={1}
            totalSlides={9}
            step={1}
            interval={5000}
            orientation='vertical'
            naturalSlideWidth={293}
            naturalSlideHeight={98}
            // Note: there is a min-width style applied to the carousel based on the vertical_carousel class in tha App.css file
            isPlaying
          >
            <Slider
              classNameTrayWrap='carousel_tray_wrapper'
              className='card_animation'
            >
              {Array(9)
                .fill(undefined)
                .map((_, index) => (
                  <Slide className='card_animation_slide' index={index}>
                    <SlideWithAnimation />
                  </Slide>
                ))}
            </Slider>
          </CarouselProvider>
        </div>
      </div>
      {/* End Carousel */}
    </div>
  );
}
