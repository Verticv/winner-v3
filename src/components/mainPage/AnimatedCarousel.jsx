import React, { useState } from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import image1 from '../../images/otherGames/1.png';
import activeImage from '../../images/otherGames/2_active.png';
import {
  CarouselBackButton,
  CarouselNextButton,
} from './SlotGameHorizontalCarousel';

// Slider with animation
export default function AnimatedCarousel() {
  const [hoveredTab, setHoveredTab] = useState(1);

  // TODO: add dynamic data

  const SlideWithAnimation = ({ item }) => {
    const isHover = hoveredTab === item.id;
    return (
      <div
        style={{
          height: '316px',
          backgroundImage: `url(${isHover ? activeImage : image1})`,
          // backgroundColor: 'green',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className='h-full rounded-6px'
        onMouseOver={() => {
          setHoveredTab(item.id);
        }}
        // TODO: check if this is the needed behavior
        // onMouseLeave={() => {
        //   setHoveredTab(null);
        // }}
      >
        {isHover && (
          <button
            className='absolute z-30 top-143px right-176px flex items-center justify-center h-30px w-134px text-white rounded-14px cursor-pointer font-spoqaMedium text-14px tracking-tighter'
            style={{
              boxShadow: '0px 3px 5px 0px rgba(0, 0, 0, 0.5)',
              background:
                'linear-gradient(to right, rgb(223,82,255), rgb(107,34,255))',
            }}
          >
            게임시작
          </button>
        )}
        {isHover && (
          <div className='absolute w-full h-full bg-black opacity-60 z-20 rounded-6px'></div>
        )}
        <p
          style={{ color: '#eeeeee' }}
          className={`absolute bottom-6px ${
            isHover ? 'left-214px' : 'left-62px'
          } font-spoqaMedium text-16px tracking-tighter`}
        >
          e-스포츠
        </p>
      </div>
    );
  };

  return (
    <div className='container mx-auto'>
      <div className='relative animated_carousel flex items-center justify-center w-full h-full py-24 sm:py-8 px-4'>
        <CarouselProvider
          visibleSlides={6}
          totalSlides={9} // TODO: as the active slide will be doubled, we should handle that!
          step={1}
          naturalSlideWidth={184}
          naturalSlideHeight={316}
          isIntrinsicHeight
        >
          <CarouselBackButton style={{ left: '-35px', top: '153px' }} />
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
                <Slide
                  key={index}
                  className={`card_animation_slide ${
                    hoveredTab === index ? 'animated-card' : ''
                  }`}
                  index={index}
                >
                  <SlideWithAnimation item={{ id: index }} />
                </Slide>
              ))}
          </Slider>
          <CarouselNextButton style={{ right: '-35px', top: '153px' }} />
        </CarouselProvider>
      </div>
    </div>
  );
}
