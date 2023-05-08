import React, { useState } from "react";
import whiteFootball from "../../images/sport/white_football.png";
import world from "../../images/sport/world.png";
import england from "../../images/sport/england.png";
import liverpool from "../../images/sport/liverpool.png";
import manchester_united from "../../images/sport/manchester_united.png";
import tottenham from "../../images/sport/tottenham.png";
import villarreal from "../../images/sport/villarreal.png";
import Ball from "../../images/slotCarousel/ball.png";

import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import { CarouselBackButton, CarouselNextButton } from "./SlotGameHorizontalCarousel";
import TabsComponent from "./TabsComponent";

const sampleArray = [
  {
    id: 0,
    icon: world,
    title: "UEFA Champions League",
    team1: { icon: liverpool, name: "리버풀" },
    team2: { icon: villarreal, name: "비야레알" },
  },
  {
    id: 1,
    icon: england,
    title: "Premier League",
    team1: { icon: manchester_united, name: "맨체스터유나이티드" },
    team2: { icon: tottenham, name: "토트넘" },
  },
  {
    id: 2,
    icon: world,
    title: "UEFA Champions League",
    team1: { icon: liverpool, name: "리버풀" },
    team2: { icon: villarreal, name: "비야레알" },
  },
];

const Button = ({ number }) => {
  return (
    <button
      className="w-61px h-31px filter hover:brightness-125 rounded-6px p-px transition"
      style={{
        boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.6)",
        background: "linear-gradient(to bottom, #edcfff, #553c84)",
      }}
    >
      <div
        className="w-full h-full rounded-6px flex items-center justify-center"
        style={{
          background: "linear-gradient(to top, rgb(73,31,156), rgb(158,60,188))",
        }}
      >
        <p className="text-white font-roboto text-14px tracking-tight h-14px flex items-center mt-px">{number}</p>
      </div>
    </button>
  );
};

const Paragraph = ({ text }) => {
  return (
    <p className="w-61px h-12px flex justify-center items-center text-center text-r666666 font-spoqaMedium text-12px tracking-tight">
      {text}
    </p>
  );
};

const Club = ({ text, Icon }) => {
  return (
    <div className="flex items-center">
      <div style={{ background: "#b8afcd" }} className="w-28px h-28px flex items-center justify-center rounded-full">
        <img className="object-contain" src={Icon} alt={text} />
      </div>
      <p className="text-r666666 font-spoqaBold text-15px tracking-tight ml-5px h-15px flex items-center mt-px">{text}</p>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div className="flex justify-center">
      <div
        style={{
          boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.4)",
          width: "403px",
          height: "139px",
          backgroundColor:'#eeeeee'
        }}
        // TODO: add the correct shadow
        className="flex flex-col p-5px rounded-6px"
      >
        <div
          style={{
            height: "44px",
            background: "linear-gradient(to right, #9d3bbb, #5423a0)",
          }}
          className="flex flex-col w-full pl-5px pb-5px pt-6px rounded-4px justify-center"
        >
          <div className="flex items-center">
            <img className="object-contain" src={whiteFootball} alt="white football" />
            <img className="object-contain ml-4px" src={item.icon} alt="white football" />
            <p className="text-white font-spoqaBold text-14px h-14px flex items-center tracking-tight ml-4px">
              {item.title}
            </p>
          </div>
          <p
            style={{ color: "#ebabff" }}
            className="font-robotoRegular text-12px tracking-tight h-12px flex items-center mt-4px"
          >
            2022-08-25 / 15:45
          </p>
        </div>
        <div className="flex mt-17px justify-between px-5px">
          <div className="space-y-4px">
            <Club text={item.team1.name} Icon={item.team1.icon} />
            <Club text={item.team2.name} Icon={item.team2.icon} />
          </div>

          <div className="flex flex-col items-center justify-between">
            <div className="flex space-x-4px mt-8px">
              <Paragraph text="W1" />
              <Paragraph text="X" />
              <Paragraph text="W2" />
            </div>
            <div className="space-x-4px -mb-px">
              <Button number="1.93" />
              <Button number="4.83" />
              <Button number="3.14" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Carousel = () => {
  return (
    <div
      className="relative rounded-8px px-10px"
      style={{
        background: "linear-gradient(to top, rgb(67,42,123), rgb(125,23,196))",
        boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.3),inset 0px 2px 0px 0px rgba(255, 255, 255, 0.3)",
      }}
    >
      <CarouselProvider
        visibleSlides={3}
        totalSlides={7}
        step={1}
        naturalSlideWidth={400}
        naturalSlideHeight={500}
        isIntrinsicHeight
      >
        <CarouselBackButton className="top-47px" />
        <Slider
          style={{
            maxWidth: "1258px",
          }}
          classNameTrayWrap="sport_carousel__slider-tray"
        >
          <Slide index={0}>
            <Card item={sampleArray[0]} />
          </Slide>
          <Slide index={1}>
            <Card item={sampleArray[1]} />
          </Slide>
          <Slide index={2}>
            <Card item={sampleArray[2]} />
          </Slide>
          <Slide index={3}>
            <Card item={sampleArray[0]} />
          </Slide>
          <Slide index={4}>
            <Card item={sampleArray[0]} />
          </Slide>
          <Slide index={5}>
            <Card item={sampleArray[0]} />
          </Slide>
          <Slide index={6}>
            <Card item={sampleArray[0]} />
          </Slide>
        </Slider>
        <CarouselNextButton className="top-47px" />
      </CarouselProvider>
    </div>
  );
};

export default function SportHorizontalCarousel() {
  const tabsData = [
    { id: 1, label: "조합베팅" },
    { id: 2, label: "스페셜베팅" },
    { id: 3, label: "실시간스포츠" },
  ];

  const [selectedTab, setSelectedTab] = useState(tabsData[0].id);

  const tabsChildren = [<Carousel />, <Carousel />, <Carousel />];

  const HeaderLeftComponent = (
    <div className="flex items-center -mt-3px -ml-3px">
      <img src={Ball} alt="" />
      <p
        style={{ textShadow: "0px 2px 5px rgba(0, 0, 0, 0.75)" }}
        className="text-white text-22px h-22px flex items-center font-spoqaBold tracking-tight -mt-2px"
      >
        스포츠
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
