import React, { useEffect } from "react";
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
import icon_1 from "../../../images/nonLivePage/LeftAccordion/content1/icon11.png";
import icon_2 from "../../../images/nonLivePage/LeftAccordion/content1/icon21.png";
import icon_3 from "../../../images/nonLivePage/LeftAccordion/content1/icon31.png";
import icon_4 from "../../../images/nonLivePage/LeftAccordion/content1/icon41.png";
import icon_5 from "../../../images/nonLivePage/LeftAccordion/content1/icon51.png";
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
    style: "mt-16px mb-15px ml-4px",
  },
  {
    icon: img2,
    icon2: icon_2,
    text: "프리미어리그",
    num: "2",
    style: "mb-4px ml-4px",
  },
  {
    icon: img3,
    icon2: icon_3,
    text: "NBA",
    num: "3",
    style: "ml-5px",
  },
  {
    icon: img4,
    icon2: icon_4,
    text: "EFL챔피언십",
    num: "4",
    style: "mb-px ml-5px",
  },
  {
    icon: img5,
    icon2: icon_5,
    text: "KBO",
    num: "5",
    style: "mb-px ml-4px",
  },
];


const LeftAccordion = () => {
  
  const pauseHover = () => {
    let timer 
    clearTimeout(timer);
    const allWithClass = Array.from(
      document.getElementsByClassName('accordion')
    );
    allWithClass.forEach(element => {
      let list = element.classList
      list.remove("can-hover");
    })
    
  }

  useEffect(() => {
    const element = document.querySelector("div#scroll-box");
    if (element) {
      element.addEventListener("scroll", (event) => {
        pauseHover()
      });
    }
    element.addEventListener("scrollend", (event) => {
      let timer 
      clearTimeout(timer);
      const allWithClass = Array.from(
        document.getElementsByClassName('accordion')
      );
      setTimeout(() => {
       allWithClass.forEach(element => {
          let list = element.classList
          list.add("can-hover");
       })
      }, 500);
    });
 }, []);
  return (
    <div className="h-full items-start mr-4px mt-5px mx-auto relative" >
      <AccordionButton icon={icon1} title="즐겨찾기" />
      <AccordionButton1 icon={icon2} title="인기경기" card={card2} />
      <AccordionButton2 icon={icon3} title="인기리그" card={card3} />
      <AccordionButton3 icon={icon4} title="모든경기" /> 
    
    </div>
  );
};

export default LeftAccordion;
