import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Slot1 from "../../images/slotCarousel/1.png";
import Slot1Bottom from "../../images/slotCarousel/1_bottom.jpg";
import Slot2 from "../../images/slotCarousel/2.png";
import Slot2Bottom from "../../images/slotCarousel/2_bottom.jpg";
import Slot3 from "../../images/slotCarousel/3.png";
import Slot3Bottom from "../../images/slotCarousel/3_bottom.jpg";
import Slot4 from "../../images/slotCarousel/4.png";
import Slot4Bottom from "../../images/slotCarousel/4_bottom.jpg";
import Slot5 from "../../images/slotCarousel/5.png";
import Slot5Bottom from "../../images/slotCarousel/5_bottom.jpg";
import Slot6 from "../../images/slotCarousel/6.jpg";
import Slot6Bottom from "../../images/slotCarousel/6_bottom.png";
import LeftArrow from "../../images/slotCarousel/left_arrow.png";
import RightArrow from "../../images/slotCarousel/right_arrow.png";
import RedBadge from "../../images/slotCarousel/badges/red.png";
import BlueBadge from "../../images/slotCarousel/badges/blue.png";
import GreenBadge from "../../images/slotCarousel/badges/green.png";
import slotTitleIcon from "../../images/slotCarousel/slot_title_icon.png";
import TabsComponent from "./TabsComponent";

const list = [
  {
    id: 0,
    row1: {
      game: "Titan Thunder Wrathhhhhhh",
      caption: "Quickspin",
      Img: Slot1,
      Badge: RedBadge,
      badgeText: "인기",
    },
    row2: {
      game: "Black Wolf",
      caption: "Netent",
      Img: Slot1Bottom,
      Badge: RedBadge,
      badgeText: "인기",
    },
  },
  {
    id: 1,
    row1: {
      game: "Space Man",
      caption: "Pragmatic",
      Img: Slot2,
      Badge: RedBadge,
      badgeText: "인기",
    },
    row2: {
      game: "Rio Gems",
      caption: "Yggdrasil",
      Img: Slot2Bottom,
      Badge: RedBadge,
      badgeText: "인기",
    },
  },
  {
    id: 2,
    row1: {
      game: "The Tweety House",
      caption: "Pragmatic",
      Img: Slot3,
      Badge: RedBadge,
      badgeText: "인기",
    },
    row2: {
      game: "Elvis Frog True Ways",
      caption: "Skywind",
      Img: Slot3Bottom,
      Badge: RedBadge,
      badgeText: "인기",
    },
  },
  {
    id: 3,
    row1: {
      game: "Crown of Valor",
      caption: "Quickspin",
      Img: Slot4,
      Badge: RedBadge,
      badgeText: "인기",
    },
    row2: {
      game: "Bozo Cats",
      caption: "Playtech",
      Img: Slot4Bottom,
      Badge: RedBadge,
      badgeText: "인기",
    },
  },
  {
    id: 4,
    row1: {
      game: "Wild West Gold",
      caption: "Pragmatic",
      Img: Slot5,
      Badge: BlueBadge,
      badgeText: "신규",
    },
    row2: {
      game: "Hot Fruits 20",
      caption: "Pragmatic",
      Img: Slot5Bottom,
      Badge: BlueBadge,
      badgeText: "신규",
    },
  },
  {
    id: 5,
    row1: {
      game: "Sun of Egypt",
      caption: "Booongo",
      Img: Slot6,
      Badge: GreenBadge,
      badgeText: "추천",
    },
    row2: {
      game: "Hit the Bank",
      caption: "Microgaming",
      Img: Slot6Bottom,
      Badge: GreenBadge,
      badgeText: "추천",
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
  const Card = ({ game, caption, Img, Badge, badgeText }) => (
    <div className="flex w-full justify-center flex-shrink-0">
      <div
        style={{
          background: "linear-gradient(to top, #ccc4ff, #ffd8f5)",
          boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.3),inset 0px 2px 0px 0px rgba(255, 255, 255, 0.3)",
          width: "202px",
          height: "232px",
        }}
        className="flex flex-shrink-0 relative w-full p-10px rounded-8px cursor-pointer hover:filter hover:brightness-125 transition"
      >
        <div style={{ height: "212px", width: "182px" }} className="rounded-6px">
          <img
            src={Img}
            style={{ aspectRatio: 1, width: "182px" }}
            alt=""
            className="object-cover rounded-t-6px object-center w-full"
          />
        </div>

        <img src={Badge} alt="badge" className="object-cover object-center absolute -top-2px left-12px z-20" />
        <p
          style={{ textShadow: "0px 0px 3px rgba(0, 0, 0, 0.4)" }}
          className="absolute top-9px left-22px font-spoqaBold text-white text-14px tracking-tighter z-30"
        >
          {badgeText}
        </p>

        <div
          style={{
            height: "20px",
            width: "182px",
            background: "linear-gradient(to top, #311c43, #311c4300)",
            bottom: "45px",
          }}
          className="w-full absolute z-20"
        ></div>
        <div
          style={{ height: "35px", width: "182px", background: "#311c43" }}
          className="w-full absolute bottom-10px rounded-b-5px flex flex-col justify-end pl-5px z-20"
        >
          <p
            style={{
              color: "#a5eefe",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
              width: "165px",
            }}
            className="font-spoqaBold text-white text-14px h-17px flex items-center tracking-tighter"
          >
            {game.length > 19 ? `${game.slice(0, 19)} ...` : game}
          </p>
          <p
            style={{ color: "#e6e2e1" }}
            className="font-spoqa text-white text-12px tracking-tighter h-12px flex items-center mb-5px"
          >
            {caption}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <Slide className="space-y-4" index={index}>
      <div className="mb-10px">
        <Card Badge={Row1Badge} badgeText={row1BadgeText} Img={Row1Img} game={row1Game} caption={row1Caption} />
      </div>
      <Card Badge={Row2Badge} badgeText={row2BadgeText} Img={Row2Img} game={row2Game} caption={row2Caption} />
    </Slide>
  );
};

export const CarouselBackButton = ({ className, style, onClick }) => {
  return (
    <ButtonBack
      onClick={onClick}
      role="button"
      aria-label="slide backward"
      style={{
        boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)",
        height: "76px",
        width: "30px",
        ...style,
      }}
      className={`hover:brightness-125 filter bg-white hover:opacity-100 opacity-80 rounded-6px absolute z-30 -left-35px cursor-pointer transition ${className}`}
      id="prev"
    >
      <img src={LeftArrow} alt="left" className="ml-7px object-none" />
    </ButtonBack>
  );
};

export const CarouselNextButton = ({ className, style, onClick }) => {
  return (
    <ButtonNext
      onClick={onClick}
      role="button"
      aria-label="slide forward"
      style={{
        boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)",
        height: "76px",
        width: "30px",
        ...style,
      }}
      className={`hover:brightness-125 filter bg-white hover:opacity-100 opacity-80 rounded-6px absolute z-30 -right-35px cursor-pointer transition ${className}`}
      id="next"
    >
      <img src={RightArrow} alt="left" className="ml-10px object-none" />
    </ButtonNext>
  );
};

const Carousel = () => {
  return (
    <div className="container mx-auto">
      <div className="animated_carousel-multiple flex items-center justify-center w-full h-full">
        <CarouselProvider
          className=""
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={84}
          visibleSlides={6}
          step={1}
          currentSlide={42}
          infinite={false}
          dragEnabled={false}
        >
          <div className="w-full relative flex items-center justify-center">
            <CarouselBackButton style={{ marginTop: "-11px", marginLeft: "5px" }} />
            <div className="w-full h-auto mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider classNameTrayWrap="carousel_tray_wrapper">
                {/* <div
                  id="slider"
                  // TODO: remove this card_animation
                  // className="card_animation flex gap-10px items-center justify-center transition ease-out duration-700"
                > */}
                {[
                  ...list,
                  ...list,
                  ...list,
                  ...list,
                  ...list,
                  ...list,
                  ...list,
                  ...list,
                  ...list,
                  ...list,
                  ...list,
                  ...list,
                  ...list,
                  ...list,
                ].map((item, index) => (
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
                {/* </div> */}
              </Slider>
            </div>
            <CarouselNextButton style={{ marginTop: "-11px", marginRight: "5px" }} />
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default function SlotGameHorizontalCarousel() {
  const tabsData = [
    { id: 1, label: "인기게임" },
    { id: 2, label: "추천게임" },
    { id: 3, label: "신규게임" },
  ];

  const [selectedTab, setSelectedTab] = useState(tabsData[0].id);

  const tabsChildren = [<Carousel />, <Carousel />, <Carousel />];

  const HeaderLeftComponent = (
    <div className="flex items-center -ml-3px">
      <img src={slotTitleIcon} alt="" />
      <p
        style={{ textShadow: "0px 2px 5px rgba(0, 0, 0, 0.75)" }}
        className="text-white text-22px h-22px flex items-center font-spoqaBold tracking-tight -mt-4px"
      >
        슬롯게임
      </p>
    </div>
  );

  const HeaderRightComponent = (
    <button
      style={{
        background: "#936cee",
        boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
        height: "28px",
        width: "83px",
      }}
      className="ml-5px flex items-center justify-center text-white text-14px font-spoqaMedium filter hover:brightness-125 rounded-13px"
    >
      <p className="text-14px h-14px flex items-center mt-px">더보기</p>
    </button>
  );

  return (
    <TabsComponent
      selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
      tabsData={tabsData}
      tabsChildren={tabsChildren}
      headerLeftComponent={HeaderLeftComponent}
      headerRightComponent={HeaderRightComponent}
    />
  );
}
