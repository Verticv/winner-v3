import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import goldCardImg from "../../images/slotCarousel/test.png";
import Slot1 from "../../images/slotCarousel/1.png";
import Slot6 from "../../images/slotCarousel/6.jpg";
import slotInternalCardBackground from "../../images/slot_internal_card_background.png";
import slotCardBackground from "../../images/slot_card_background.png";
import slotTitleLeftIcon from "../../images/slot_title_left_icon.png";
import slotTitleReftIcon from "../../images/slot_title_right_icon.png";

const Card = ({ icon, name, game }) => (
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
      className="flex-shrink-0"
    >
      <img style={{ borderRadius: "3px" }} src={icon} alt="" className="object-cover w-full h-full" />
    </div>

    <div style={{ color: "#6f6f6f" }} className="ml-8px text-14px tracking-tight pt-px pl-2px">
      <p
        style={{
          color: "#a5eefe",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
          lineHeight: "26px",
          width: "190px",
          fontSize: "22px",
        }}
        className="font-bold tracking-tight ml-2px text-left -mt-3px"
      >
        {game.length > 16 ? `${game.slice(0, 16)}...` : game}
      </p>
      <p
        style={{
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
          color: "#dcd5d3",
          lineHeight: "26px",
          width: "90px",
        }}
        className="text-14px font-spoqa text-left tracking-tight mt-px ml-px"
      >
        {name.length > 5 ? `${name.slice(0, 5)}***` : name}
      </p>
      <p
        style={{ color: "#f5e074", lineHeight: "26px" }}
        className="font-spoqaBold text-22px flex items-center tracking-tight -mt-4px ml-px"
      >
        ₩123,456,789
      </p>
    </div>
  </button>
);

const SlideWithAnimation = ({ count }) => {
  return (
    <div
      style={{
        width: "295px",
        minHeight: "98px",
      }}
      className="h-full flex-shrink-0"
    >
      <Card
        icon={count % 3 === 0 ? goldCardImg : count % 3 === 1 ? Slot1 : Slot6}
        name="마이프로틴마이프로틴"
        game={count % 3 === 0 ? "Crown of Valor" : count % 3 === 1 ? "Titan Thunder Wrath of Hades" : "Sun of Egypt"}
      />
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
        height: "147px",
      }}
      className="rounded-8px pt-2px"
    >
      <div className="flex text-white h-36px w-full justify-center items-center">
        <img src={slotTitleLeftIcon} alt="slot title icon" />
        <p className="text-16px font-spoqaMedium tracking-tight pl-5px pr-3px mt-px -ml-px">슬롯 실시간 우승</p>
        <img src={slotTitleReftIcon} alt="slot title icon" />
      </div>
      {/* Start Carousel */}
      <div className="container mx-auto">
        <div className="vertical_carousel slot_vertical_carousel flex items-center justify-center w-full h-full p-9px pt-0">
          <CarouselProvider
            visibleSlides={1}
            totalSlides={999}
            step={1}
            interval={5000}
            naturalSlideWidth={294}
            naturalSlideHeight={100}
            // Note: there is a min-width style applied to the carousel based on the vertical_carousel class in tha App.css file
            isPlaying
            dragEnabled={false}
          >
            <Slider classNameTrayWrap="carousel_tray_wrapper_horizontal" className="card_animation">
              {Array(999)
                .fill(undefined)
                .map((_, index) => (
                  <Slide key={index} className="card_animation_slide_horizontal" index={index}>
                    <SlideWithAnimation count={index} />
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
