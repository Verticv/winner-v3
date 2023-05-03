import React, { useEffect, useState } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import activeImage1 from "../../images/otherGames/1_active.png";
import activeImage2 from "../../images/otherGames/2_active.png";
import activeImage3 from "../../images/otherGames/3_active.png";
import activeImage4 from "../../images/otherGames/4_active.png";
import activeImage5 from "../../images/otherGames/5_active.png";

import logo1 from "../../images/otherGames/1_logo.png";
import logo2 from "../../images/otherGames/2_logo.png";
import logo3 from "../../images/otherGames/3_logo.png";
import logo4 from "../../images/otherGames/4_logo.png";
import logo5 from "../../images/otherGames/5_logo.png";

import center1 from "../../images/otherGames/1_center.png";
import center2 from "../../images/otherGames/2_center.png";
import center3 from "../../images/otherGames/3_center.png";
import center4 from "../../images/otherGames/4_center.png";
import center5 from "../../images/otherGames/5_center.png";

import left from "../../images/otherGames/left_corner.png";
import right from "../../images/otherGames/right_corner.png";

import { CarouselBackButton, CarouselNextButton } from "./SlotGameHorizontalCarousel";

const sampleArray = [
  {
    id: 0,
    activeIcon: activeImage1,
    logo: logo1,
    center: center1,
    title: "e-스포츠",
  },
  {
    id: 1,
    activeIcon: activeImage2,
    logo: logo2,
    center: center2,
    title: "미니게임",
  },
  {
    id: 2,
    activeIcon: activeImage3,
    logo: logo3,
    center: center3,
    title: "키론가상게임",
  },
  {
    id: 3,
    activeIcon: activeImage4,
    logo: logo4,
    center: center4,
    title: "피싱게임",
  },
  {
    id: 4,
    activeIcon: activeImage5,
    logo: logo5,
    center: center5,
    title: "티비벳",
  },
  {
    id: 5,
    activeIcon: activeImage1,
    logo: logo1,
    center: center1,
    title: "e-스포츠",
  },
  {
    id: 6,
    activeIcon: activeImage2,
    logo: logo2,
    center: center2,
    title: "미니게임",
  },
  {
    id: 7,
    activeIcon: activeImage3,
    logo: logo3,
    center: center3,
    title: "키론가상게임",
  },
  {
    id: 8,
    activeIcon: activeImage4,
    logo: logo4,
    center: center4,
    title: "피싱게임",
  },
  {
    id: 9,
    activeIcon: activeImage5,
    logo: logo5,
    center: center5,
    title: "티비벳",
  },
  {
    id: 10,
    activeIcon: activeImage1,
    logo: logo1,
    center: center1,
    title: "e-스포츠",
  },
  {
    id: 11,
    activeIcon: activeImage2,
    logo: logo2,
    center: center2,
    title: "미니게임",
  },
  {
    id: 12,
    activeIcon: activeImage3,
    logo: logo3,
    center: center3,
    title: "키론가상게임",
  },
  {
    id: 13,
    activeIcon: activeImage4,
    logo: logo4,
    center: center4,
    title: "피싱게임",
  },
  {
    id: 14,
    activeIcon: activeImage5,
    logo: logo5,
    center: center5,
    title: "티비벳",
  },
  {
    id: 15,
    activeIcon: activeImage1,
    logo: logo1,
    center: center1,
    title: "e-스포츠",
  },
  {
    id: 16,
    activeIcon: activeImage2,
    logo: logo2,
    center: center2,
    title: "미니게임",
  },
  {
    id: 17,
    activeIcon: activeImage3,
    logo: logo3,
    center: center3,
    title: "키론가상게임",
  },
  {
    id: 18,
    activeIcon: activeImage4,
    logo: logo4,
    center: center4,
    title: "피싱게임",
  },
  {
    id: 19,
    activeIcon: activeImage5,
    logo: logo5,
    center: center5,
    title: "티비벳",
  },
];

// Slider with animation
export default function AnimatedCarousel() {
  const [hoveredTab, setHoveredTab] = useState(0);

  const SlideWithAnimation = ({ item, index }) => {
    const isHover = hoveredTab === index;
    const [showText, setShowText] = useState(false);
    useEffect(() => {
      if (isHover) {
        setTimeout(() => {
          setShowText(true);
        }, 200);
      }

      return () => {
        setShowText(false);
      };
    }, [isHover]);

    return (
      <div
        style={{
          height: "316px",
          padding: "1px",
          background: "linear-gradient(to bottom, #e398d4, #311c43)",
          borderRadius: "6px",
        }}
      >
        <div
          style={{
            height: "316px",
            backgroundImage: `url(${item.activeIcon})`,
            // backgroundPosition: "center",
            backgroundPositionX: "center",
            // backgroundColor: 'green',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "6px",
            overflow: "hidden",
            // boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.3)', // TODO: there is a problem with exporting this style from the Photoshop
          }}
          className="h-full rounded-6px"
          onMouseOver={() => {
            setHoveredTab(index);
          }}
        >
          {isHover && showText && (
            <button
              className="absolute z-30 top-143px right-176px flex items-center justify-center h-30px w-134px text-white rounded-15px cursor-pointer font-spoqaMedium text-14px tracking-tight"
              style={{
                boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)",
                background: "linear-gradient(to right, rgb(223,82,255), rgb(107,34,255))",
              }}
            >
              게임시작
            </button>
          )}
          {isHover && <div className="absolute w-full h-full bg-black opacity-60 z-20 rounded-6px -mt-px -ml-px"></div>}
          <div className="absolute top-px left-px rounded-6px overflow-hidden">
            <img src={left} alt="" />
          </div>
          <div className="absolute bottom-36px right-px rounded-6px overflow-hidden">
            <img src={right} alt="" />
          </div>
          {!isHover && (
            <div className="absolute w-full h-full items-center flex justify-center">
              <img src={item.center} alt="" />
            </div>
          )}
          <div className="absolute bottom-32px w-full flex justify-center">
            <img src={item.logo} alt="" />
          </div>
          <div
            style={{
              height: "36px",
              backgroundColor: "#311c43",
              color: "#eeeeee",
              borderBottomLeftRadius: "6px",
              borderBottomRightRadius: "6px",
            }}
            className="w-full bg-red-100 absolute bottom-0 font-spoqaMedium text-16px tracking-tight flex justify-center items-center pt-px -ml-px"
          >
            {item.title}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto">
      <div className="relative flex items-center justify-center w-full h-full px-4 pb-23px pt-5px">
        <CarouselProvider
          visibleSlides={81.5}
          totalSlides={100.29} // the total slid is not an integer because of the animation. if the slides number changed, this number (0.29) should be changed too
          step={1}
          naturalSlideWidth={184}
          naturalSlideHeight={316}
          isIntrinsicHeight
        >
          <CarouselBackButton style={{ left: "-35px", top: "125px" }} />
          <Slider
            style={{
              maxWidth: "1260px",
            }}
            classNameTrayWrap="animated_carousel_tray_wrapper"
            className="card_animation"
          >
            {[...sampleArray, ...sampleArray, ...sampleArray, ...sampleArray].map((item, index) => (
              <Slide
                key={index}
                className={`card_animation_slide ${hoveredTab === index ? "animated-card" : ""}`}
                index={index}
              >
                <SlideWithAnimation item={item} index={index} />
              </Slide>
            ))}
          </Slider>
          <CarouselNextButton style={{ right: "-35px", top: "125px" }} />
        </CarouselProvider>
      </div>
    </div>
  );
}
