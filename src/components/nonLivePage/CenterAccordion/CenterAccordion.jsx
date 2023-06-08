import React from "react";
import icon from "../../../images/nonLivePage/CenterAccordion/Icon.png";
import icon1 from "../../../images/nonLivePage/CenterAccordion/star2.png";
import icon2 from "../../../images/nonLivePage/CenterAccordion/Flag.png";
import icon3 from "../../../images/nonLivePage/CenterAccordion/Flag1.png";
import icon4 from "../../../images/nonLivePage/CenterAccordion/Flag2.png";

import CenterAccordionButton from "./CenterAccordionButton";

const card1 = [
  {
    text: "아스널",
    text1: "1.25",
    text2: "3.15",
    text3: "1.16",
    text4: "리버풀",
    text5: "+123",
  },
  {
    text: "첼시",
    text1: "2.25",
    text2: "3.88",
    text3: "2.76",
    text4: "토트넘",
    text5: "+45",
  },
];
const card2 = [
  {
    text: "FC바르셀로나",
    text1: "2.21",
    text2: "2.99",
    text3: "3.86",
    text4: "아틀레티코",
    text5: "+24",
  },
  {
    text: "레알마드리드",
    text1: "1.77",
    text2: "3.87",
    text3: "3.76",
    text4: "레알베티스",
    text5: "+55",
  },
  {
    text: "비야레알",
    text1: "2.34",
    text2: "3.88",
    text3: "2.90",
    text4: "마요르카",
    text5: "+132",
  },
];
const card3 = [
  {
    text: "아인트라흐트프랑크푸르트",
    text1: "1.11",
    text2: "3.10",
    text3: "1.77",
    text4: "SC프라이부르크",
    text5: "+99",
  },
  {
    text: "바이어레버쿠젠",
    text1: "2.65",
    text2: "3.88",
    text3: "2.12",
    text4: "바이에른뮌헨",
    text5: "+44",
  },
  {
    text: "RB라이프치히",
    text1: "2.78",
    text2: "3.90",
    text3: "2.99",
    text4: "FC샬케04",
    text5: "+155",
  },
  {
    text: "보루시아도르트문트",
    text1: "2.25",
    text2: "4.15",
    text3: "2.22",
    text4: "FSV마인츠05",
    text5: "+99",
  },
];
const card4 = [
  {
    text: "세비야",
    text1: "1.67",
    text2: "3.12",
    text3: "1.64",
    text4: "지로나",
    text5: "+45",
  },
  {
    text: "레알소스에다드",
    text1: "2.10",
    text2: "3.79",
    text3: "3.87",
    text4: "카디스",
    text5: "+99",
  },
];

const CenterAccordion = () => {
  return (
    <>
      <div className="h-full items-start mr-10px ml-9px mt-5px mx-auto">
        <CenterAccordionButton
          icon={icon}
          title="잉글랜드 - 프리미어리그"
          date="2023-03-22 13:00"
          icon1={icon1}
          icon2={icon2}
          card={card1}
        />
        <CenterAccordionButton
          icon={icon}
          title="스페인 - 라리가"
          date="2023-03-22 15:00"
          icon1={icon1}
          icon2={icon3}
          card={card2}
        />
        <CenterAccordionButton
          icon={icon}
          title="독일 - 분데스리가"
          date="2023-03-22 17:00"
          icon1={icon1}
          icon2={icon4}
          card={card3}
        />
        <CenterAccordionButton
          icon={icon}
          title="스페인 - 라리가"
          date="2023-03-22 19:00"
          icon1={icon1}
          icon2={icon3}
          card={card4}
        />
        <CenterAccordionButton
          icon={icon}
          title="잉글랜드 - 프리미어리그"
          date="2023-03-22 13:00"
          icon1={icon1}
          icon2={icon2}
          card={card1}
        />
        <CenterAccordionButton
          icon={icon}
          title="스페인 - 라리가"
          date="2023-03-22 15:00"
          icon1={icon1}
          icon2={icon3}
          card={card2}
        />
        <CenterAccordionButton
          icon={icon}
          title="독일 - 분데스리가"
          date="2023-03-22 17:00"
          icon1={icon1}
          icon2={icon4}
          card={card3}
        />
        <CenterAccordionButton
          icon={icon}
          title="스페인 - 라리가"
          date="2023-03-22 19:00"
          icon1={icon1}
          icon2={icon3}
          card={card4}
        />
        <CenterAccordionButton
          icon={icon}
          title="잉글랜드 - 프리미어리그"
          date="2023-03-22 17:00"
          icon1={icon1}
          icon2={icon2}
          card={card1}
        />
        <CenterAccordionButton
          icon={icon}
          title="스페인 - 라리가"
          date="2023-03-22 19:00"
          icon1={icon1}
          icon2={icon3}
          card={card2}
        />
      </div>
    </>
  );
};

export default CenterAccordion;
