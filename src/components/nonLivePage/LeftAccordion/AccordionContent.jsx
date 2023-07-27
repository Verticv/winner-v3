import React, { useState } from "react";
import iconStar from "../../../images/nonLivePage/LeftAccordion/Card/star.png";
import img1 from "../../../images/nonLivePage/LeftAccordion/content1/1.png";
import icon from "../../../images/nonLivePage/LeftAccordion/content/Icon.png";
import AccordionCard from "./AccordionCard";
import AccordionCard1 from "./AccordionCard1";
import AccordionCard2 from "./AccordionCard2";

const AccordionContent = ({ card }) => {
  const [showCard, setShowCard] = useState(true);
  const [showCard1, setShowCard1] = useState(true);
  return (
    <>
      {/* // <div className="ml-3px mb-2px mr-3px pt-2px"> */}
      <div
        style={{
          background: "#361550",
          borderRadius: "6px",
        }}
        className="p-px mr-2px ml-2px "
      >
        <div
          style={{
            background: "#936cee",
            borderRadius: "5px",
          }}
          className="flex items-center justify-center h-34px"
        >
          <p
            className="mb-3px text-13px text-white tracking-tight"
            style={{ fontFamily: "MalgunGothicBold" }}
          >
            모두지우기
          </p>
        </div>
      </div>
      <div className="ml-7px mt-3px mb-6px">
        <p
          style={{
            letterSpacing: "-0.031em",
            fontFamily: "MalgunGothicRegular",
          }}
          className="text-10px text-white"
        >
          프리매치경기
        </p>
      </div>

      <div
        onClick={() => setShowCard((prev) => !prev)}
        style={{
          background: "#ffffff",
          borderRadius: "4px",
        }}
        className="flex items-center mx-2px h-35px mb-2px cursor-pointer"
      >
        <img className="ml-6px mt-7px mb-6px" src={icon} alt="img" />
        <p
          style={{
            color: "#444444",
            letterSpacing: "-0.031em",
            fontFamily: "MalgunGothicRegular",
          }}
          className="text-12px mt-10px mb-13px ml-5px"
        >
          프리미어리그
        </p>
      </div>
      {showCard && (
        <>
          <div>
            <AccordionCard />
          </div>
          <div>
            <AccordionCard2 />
          </div>
        </>
      )}
      <div
        onClick={() => setShowCard1((prev) => !prev)}
        style={{
          background: "#ffffff",
          borderRadius: "4px",
        }}
        className="flex items-center mx-2px rounded-lg h-35px mb-2px cursor-pointer"
      >
        <img className="ml-6px" src={icon} alt="img" />
        <p style={{ color: "#444444" }} className="text-12px ml-5px">
          라리가
        </p>
      </div>
      {/* </div> */}
      {showCard1 && (
        <div>
          <AccordionCard1 />
        </div>
      )}
      <div className="ml-7px mt-5px mb-4px">
        <p className="text-10px text-white">리그</p>
      </div>
      <div
        style={{
          background: "#ffffff",
          borderRadius: "4px",
        }}
        className="flex items-center justify-between mx-2px rounded-lg h-33px mb-2px"
      >
        <div className="flex items-center">
          <img className="ml-6px" src={icon} alt="img" />
          <p
            style={{ color: "#444444", marginBottom: "2px" }}
            className="text-12px ml-5px"
          >
            프리미어리그
          </p>
        </div>
        <div>
          <img className="mr-6px" src={iconStar} alt="img" />
        </div>
      </div>
      <div
        style={{
          background: "#ffffff",
          borderRadius: "4px",
        }}
        className="flex items-center justify-between mx-2px rounded-lg h-33px mb-1px"
      >
        <div className="flex items-center">
          <img className="ml-6px" src={img1} alt="img" />
          <p
            style={{ color: "#444444", marginBottom: "2px" }}
            className="text-12px ml-5px"
          >
            메이저리그 (MLB)
          </p>
        </div>
        <div>
          <img className="mr-6px" src={iconStar} alt="img" />
        </div>
      </div>
    </>
  );
};

export default AccordionContent;
