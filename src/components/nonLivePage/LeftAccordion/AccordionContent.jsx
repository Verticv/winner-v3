import React from "react";
import iconStar from "../../../images/nonLivePage/LeftAccordion/Card/star.png";
import img1 from "../../../images/nonLivePage/LeftAccordion/content1/1.png";
import icon from "../../../images/nonLivePage/LeftAccordion/content/Icon.png";
import AccordionCard from "./AccordionCard";
import AccordionCard1 from "./AccordionCard1";

const AccordionContent = ({ card }) => {
  return (
    <div className="ml-3px mb-2px mr-3px pt-2px">
      <div
        style={{
          background: "#361550",
        }}
        className="rounded-lg p-px mb-5px"
      >
        <div
          style={{
            background: "#936cee",
          }}
          className="flex items-center justify-center px-3px rounded-lg h-34px"
        >
          <p className="text-13px text-white">모두지우기</p>
        </div>
      </div>
      <div className="ml-8px mt-7px mb-7px">
        <p className="text-10px text-white">프리매치경기</p>
      </div>
      {/* <div
        style={{
          background: "#bbbbbb",
        }}
        className="rounded-lg p-px mb-5px"
      > */}
      <div
        style={{
          background: "#ffffff",
        }}
        className="flex items-center px-3px rounded-lg h-35px mb-2px"
      >
        <img className="ml-6px" src={icon} alt="img" />
        <p style={{ color: "#444444" }} className="text-12px ml-5px">
          프리미어리그
        </p>
      </div>
      {/* </div> */}
      <div>
        {card.map((item) => (
          <AccordionCard key={item.id} card={item} />
        ))}
      </div>
      {/* <div
        style={{
          background: "#bbbbbb",
        }}
        className="rounded-lg p-px mb-5px"
      > */}
      <div
        style={{
          background: "#ffffff",
        }}
        className="flex items-center px-3px rounded-lg h-35px mb-2px"
      >
        <img className="ml-6px" src={icon} alt="img" />
        <p style={{ color: "#444444" }} className="text-12px ml-5px">
          라리가
        </p>
      </div>
      {/* </div> */}
      <div>
        <AccordionCard1 />
      </div>
      <div className="ml-8px mt-7px mb-7px">
        <p className="text-10px text-white">리그</p>
      </div>
      <div
        style={{
          background: "#ffffff",
        }}
        className="flex items-center justify-between px-3px rounded-lg h-35px mb-2px"
      >
        <div className="flex items-center">
          <img className="ml-6px" src={icon} alt="img" />
          <p style={{ color: "#444444" }} className="text-12px ml-5px">
            프리미어리그
          </p>
        </div>
        <div>
          <img className="mr-7px" src={iconStar} alt="img" />
        </div>
      </div>
      <div
        style={{
          background: "#ffffff",
        }}
        className="flex items-center justify-between px-3px rounded-lg h-35px mb-2px"
      >
        <div className="flex items-center">
          <img className="ml-6px" src={img1} alt="img" />
          <p style={{ color: "#444444" }} className="text-12px ml-5px">
            메이저리그 (MLB)
          </p>
        </div>
        <div>
          <img className="mr-7px" src={iconStar} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default AccordionContent;
