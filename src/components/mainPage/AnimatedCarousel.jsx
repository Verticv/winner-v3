import React, { useState } from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import image1 from '../../images/otherGames/1.png';
import image3 from '../../images/otherGames/3.png';
import image4 from '../../images/otherGames/4.png';
import image5 from '../../images/otherGames/5.png';

import activeImage from '../../images/otherGames/2_active.png';
import {
  CarouselBackButton,
  CarouselNextButton,
} from './SlotGameHorizontalCarousel';

const sampleArray = [
  {
    id: 0,
    icon: image1,
    activeIcon: activeImage,
    title: 'e-스포츠',
  },
  {
    id: 1,
    icon: image1,
    activeIcon: activeImage,
    title: '미니게임',
  },
  {
    id: 2,
    icon: image3,
    activeIcon: activeImage,
    title: '키론가상게임',
  },
  {
    id: 3,
    icon: image4,
    activeIcon: activeImage,
    title: '피싱게임',
  },
  {
    id: 4,
    icon: image5,
    activeIcon: activeImage,
    title: '티비벳',
  },
  {
    id: 5,
    icon: image1,
    activeIcon: activeImage,
    title: 'e-스포츠',
  },
  {
    id: 6,
    icon: image1,
    activeIcon: activeImage,
    title: '미니게임',
  },
  {
    id: 7,
    icon: image3,
    activeIcon: activeImage,
    title: '키론가상게임',
  },
  {
    id: 8,
    icon: image4,
    activeIcon: activeImage,
    title: '피싱게임',
  },
];
// Slider with animation
export default function AnimatedCarousel() {
  const [hoveredTab, setHoveredTab] = useState(1);

  const SlideWithAnimation = ({ item }) => {
    const isHover = hoveredTab === item.id;
    return (
      <div
        style={{
          height: '316px',
          backgroundImage: `url(${isHover ? item.activeIcon : item.icon})`,
          // backgroundColor: 'green',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          // boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.3)', // TODO: there is a problem with exporting this style from the Photoshop
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
            className='absolute z-30 top-143px right-176px flex items-center justify-center h-30px w-134px text-white rounded-15px cursor-pointer font-spoqaMedium text-14px tracking-tight'
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
          className={`absolute bottom-6px left-0 w-full text-center font-spoqaMedium text-16px tracking-tight`}
        >
          {item.title}
        </p>
      </div>
    );
  };

  return (
    <div className='container mx-auto'>
      <div className='relative animated_carousel flex items-center justify-center w-full h-full px-4 pb-23px pt-5px'>
        <CarouselProvider
          visibleSlides={6}
          totalSlides={8.29} // the total slid is not an integer because of the animation. if the slides number changed, this number (0.29) should be changed too
          step={1}
          naturalSlideWidth={184}
          naturalSlideHeight={316}
          isIntrinsicHeight
        >
          <CarouselBackButton style={{ left: '-35px', top: '125px' }} />
          <Slider
            style={{
              maxWidth: '1260px',
            }}
            classNameTrayWrap='animated_carousel_tray_wrapper'
            className='card_animation'
          >
            {sampleArray.map((item, index) => (
              <Slide
                key={index}
                className={`card_animation_slide ${
                  hoveredTab === index ? 'animated-card' : ''
                }`}
                index={index}
              >
                <SlideWithAnimation item={item} />
              </Slide>
            ))}
          </Slider>
          <CarouselNextButton style={{ right: '-35px', top: '125px' }} />
        </CarouselProvider>
      </div>
    </div>
  );
}
