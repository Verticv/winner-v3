import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const BackButton = () => {
  return (
    <ButtonBack
      role='button'
      aria-label='slide backward'
      className='absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer'
      id='prev'
    >
      <svg
        width={8}
        height={14}
        viewBox='0 0 8 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M7 1L1 7L7 13'
          stroke='white'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </ButtonBack>
  );
};

const NextButton = () => {
  return (
    <ButtonNext
      role='button'
      aria-label='slide forward'
      className='absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400'
      id='next'
    >
      <svg
        width={8}
        height={14}
        viewBox='0 0 8 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1 1L7 7L1 13'
          stroke='white'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </ButtonNext>
  );
};

const SlideWithAnimation = () => {
  return (
    <div
      style={{
        height: '316px',
        backgroundColor: 'green',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className='bg-white border-2 border-slate-900 h-full'
    ></div>
  );
};

// Slider with animation
export default function AnimatedCarousel() {
  return (
    <div className='container mx-auto'>
      <div className='animated_carousel flex items-center justify-center w-full h-full py-24 sm:py-8 px-4'>
        <CarouselProvider
          visibleSlides={6}
          totalSlides={9}
          step={1}
          naturalSlideWidth={184}
          naturalSlideHeight={316}
          isIntrinsicHeight
        >
          <BackButton />
          <Slider
            style={{
              maxWidth: '1260px',
            }}
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
          <NextButton />
        </CarouselProvider>
      </div>
    </div>
  );
}
