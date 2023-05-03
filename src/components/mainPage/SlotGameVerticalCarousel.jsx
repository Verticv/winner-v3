import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import goldCardImg from "../../images/gold_card_img.png";
import slotInternalCardBackground from "../../images/slot_internal_card_background.png";
import slotCardBackground from "../../images/slot_card_background.png";
import slotTitleLeftIcon from "../../images/slot_title_left_icon.png";
import slotTitleReftIcon from "../../images/slot_title_right_icon.png";

const Card = ({ icon, game }) => (
  <button
    style={{
      width: "295px",
      height: "100px",
      // TODO: check if there is an external shadow?
      backgroundImage: `url(${slotInternalCardBackground})`,
      backgroundRepeat: "round",
    }}
    className="h-full flex items-center pl-9px flex-shrink-0 hover:brightness-125 rounded-6px"
  >
    <div
      style={{
        borderRadius: "4px",
        width: "82px",
        height: "82px",
        padding: "1px",
        background: "linear-gradient(to right, #49435b, #514e79)",
        overflow: "hidden",
      }}
    >
      <img src={icon} alt="" className="object-none w-full h-full" />
    </div>

    <div
      style={{
        color: "#6f6f6f",
      }}
      className="ml-8px text-14px font-spoqa tracking-tight pt-2px pl-2px"
    >
      <p
        style={{
          color: "#a5eefe",
          textOverflow: "unset",
          whiteSpace: "nowrap",
          overflow: "hidden",
          lineHeight: "26px",
        }}
        className="text-20px font-spoqaBold tracking-tight"
      >
        Wild West Gold
      </p>
      <p
        style={{
          textOverflow: "unset",
          whiteSpace: "nowrap",
          overflow: "hidden",
          color: "#dcd5d3",
          lineHeight: "26px",
        }}
        className="text-14px font-spoqa text-left tracking-tight"
      >
        {game.length > 19 ? `${game.slice(0, 19)}...` : game}
      </p>
      <p
        style={{ color: "#f5e074", lineHeight: "26px" }}
        className="font-spoqaBold text-22px flex items-center tracking-tight"
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
        width: "295px",
        minHeight: "98px",
      }}
      className="h-full flex-shrink-0"
    >
      <Card icon={goldCardImg} game="마이프로틴***" />
    </div>
  );
};

// Slider with animation
export default function SlotGameVerticalCarousel() {
  return (
    <div
      style={{
        backgroundImage: `url(${slotCardBackground})`,
        backgroundRepeat: "round",
        boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.4)",
      }}
      className="rounded-8px pt-3px"
    >
      <div className="flex text-white h-37px w-full justify-center items-center">
        <img src={slotTitleLeftIcon} alt="slot title icon" />
        <p className="text-16px font-spoqaMedium tracking-tight px-2px">슬롯 실시간 우승 </p>
        <img src={slotTitleReftIcon} alt="slot title icon" />
      </div>
      {/* Start Carousel */}
      <div className="container mx-auto">
        <div className="vertical_carousel slot_vertical_carousel flex items-center justify-center w-full h-full p-9px pt-0">
          <CarouselProvider
            visibleSlides={1}
            totalSlides={20}
            step={1}
            interval={5000}
            // orientation='vertical'
            naturalSlideWidth={294}
            naturalSlideHeight={100}
            // Note: there is a min-width style applied to the carousel based on the vertical_carousel class in tha App.css file
            isPlaying
          >
            <Slider classNameTrayWrap="carousel_tray_wrapper_horizontal" className="card_animation">
              {Array(20)
                .fill(undefined)
                .map((_, index) => (
                  <Slide key={index} className="card_animation_slide_horizontal" index={index}>
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
