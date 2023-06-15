import React from "react";
import icon1 from "../../../images/nonLivePage/LeftAccordion/1.png";
import icon2 from "../../../images/nonLivePage/LeftAccordion/2.png";
import icon3 from "../../../images/nonLivePage/LeftAccordion/3.png";
import icon4 from "../../../images/nonLivePage/LeftAccordion/4.png";
import AccordionButton1 from "./AccordionButton1";
import AccordionButton2 from "./AccordionButton2";
import img1 from "../../../images/nonLivePage/LeftAccordion/content1/1.png";
import img2 from "../../../images/nonLivePage/LeftAccordion/content1/2.png";
import img3 from "../../../images/nonLivePage/LeftAccordion/content1/3.png";
import img4 from "../../../images/nonLivePage/LeftAccordion/content1/4.png";
import img5 from "../../../images/nonLivePage/LeftAccordion/content1/5.png";
import icon_1 from "../../../images/nonLivePage/LeftAccordion/content1/icon1.png";
import icon_2 from "../../../images/nonLivePage/LeftAccordion/content1/icon2.png";
import icon_3 from "../../../images/nonLivePage/LeftAccordion/content1/icon3.png";
import icon_4 from "../../../images/nonLivePage/LeftAccordion/content1/icon4.png";
import icon_5 from "../../../images/nonLivePage/LeftAccordion/content1/icon5.png";
import AccordionButton from "./AccordionButton";
import AccordionButton3 from "./AccordionButton3";

const card2 = [
  {
    time: "18:30",
    text1: "맨체스터유나이티드",
    text2: "첼시",
    num: "1",
  },
  {
    time: "18:30",
    text1: "맨체스터유나이티드",
    text2: "첼시",
    num: "2",
  },
  {
    time: "18:30",
    text1: "맨체스터유나이티드",
    text2: "첼시",
    num: "3",
  },
  {
    time: "18:30",
    text1: "맨체스터유나이티드",
    text2: "첼시",
    num: "4",
  },
  {
    time: "18:30",
    text1: "맨체스터유나이티드",
    text2: "첼시",
    num: "5",
  },
];
const card3 = [
  {
    icon: img1,
    icon2: icon_1,
    text: "메이저리그 (MLB)",
    num: "1",
  },
  {
    icon: img2,
    icon2: icon_2,
    text: "프리미어리그",
    num: "2",
  },
  {
    icon: img3,
    icon2: icon_3,
    text: "NBA",
    num: "3",
  },
  {
    icon: img4,
    icon2: icon_4,
    text: "EFL챔피언십",
    num: "4",
  },
  {
    icon: img5,
    icon2: icon_5,
    text: "KBO",
    num: "5",
  },
];

const LeftAccordion = () => {
  return (
    <div className="h-full items-start mr-10px ml-10px mt-5px mx-auto">
      <AccordionButton icon={icon1} title="즐겨찾기" />
      <AccordionButton1 icon={icon2} title="인기경기" card={card2} />
      <AccordionButton2 icon={icon3} title="인기리그" card={card3} />
      <AccordionButton3 icon={icon4} title="모든경기" />
    </div>
  );
};

export default LeftAccordion;
