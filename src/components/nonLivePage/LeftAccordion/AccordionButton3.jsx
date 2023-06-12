import React, { useState } from "react";
import icon1 from "../../../images/nonLivePage/LeftAccordion/content/Icon.png";
import img1 from "../../../images/nonLivePage/LeftAccordion/content1/1.png";
import img3 from "../../../images/nonLivePage/LeftAccordion/content1/3.png";
import img4 from "../../../images/nonLivePage/LeftAccordion/content/lasticon.png";
import flag1 from "../../../images/nonLivePage/LeftAccordion/Card/Flag1.png";
import flag2 from "../../../images/nonLivePage/LeftAccordion/Card/Flag2.png";
import flag3 from "../../../images/nonLivePage/LeftAccordion/Card/Flag3.png";
import Arrow from "../../../images/nonLivePage/CenterAccordion/Arrow.png";

import AccordionContent from "./AccordionContent";

const AccordionButton3 = ({ icon, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        background: "linear-gradient(to top, #4f3a7a, #e597ff)",
        width: "281px",
      }}
      className="rounded-lg p-px mb-5px"
    >
      <div
        style={{ background: "linear-gradient(to top, #6b22ff, #df52ff)" }}
        className={`flex items-center justify-between ${
          isOpen ? "rounded-t-lg" : "rounded-lg"
        } cursor-pointer h-46px`}
        onClick={toggleAccordion}
      >
        <div className="flex">
          <img className="ml-6px mt-15px mb-17px" src={icon} alt="icon" />
          <p className="text-lg text-14px text-white ml-7px mt-22px mb-17px ">
            {title}
          </p>
        </div>
        <div>
          <img
            src={Arrow}
            className={`w-6 h-6 text-white object-none mr-11px ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </div>
      </div>
      {isOpen && (
        <div style={{ background: "#420572" }}>
          <div className="ml-3px mb-2px mr-3px pt-2px">
            <div
              style={{
                background: "#ffffff",
              }}
              className="flex items-center px-3px rounded-lg h-35px mb-2px pt-2px"
            >
              <img className="ml-6px" src={icon1} alt="img" />
              <p style={{ color: "#444444" }} className="text-12px ml-6px">
                축구
              </p>
            </div>
            <div
              style={{
                background: "#eeeeee",
              }}
              className="items-center px-3px rounded-lg mb-2px pt-2px"
            >
              <div className="flex items-center h-37px">
                <p
                  style={{ background: "444444" }}
                  className="ml-15px text-13px"
                >
                  L
                </p>
                <img className="ml-7px" src={flag1} alt="img" />
                <p
                  style={{ background: "444444" }}
                  className="ml-5px text-13px"
                >
                  잉글랜드
                </p>
              </div>
              <div
                style={{ borderColor: "#cccccc", background: "#dddddd" }}
                className="flex items-center h-37px border-t"
              >
                <p
                  style={{ background: "444444", marginLeft: "45px" }}
                  className="ml-45px text-13px"
                >
                  L
                </p>
                <p
                  style={{ background: "444444" }}
                  className="ml-10px text-13px"
                >
                  프리미어리그
                </p>
              </div>
              <div
                style={{ borderColor: "#cccccc", background: "#dddddd" }}
                className="flex items-center h-37px border-t"
              >
                <p
                  style={{ background: "444444", marginLeft: "45px" }}
                  className="ml-45px text-13px"
                >
                  L
                </p>
                <p
                  style={{ background: "444444" }}
                  className="ml-10px text-13px"
                >
                  챔피언쉽
                </p>
              </div>
              <div className="flex items-center h-37px">
                <img className="ml-31px" src={flag2} alt="img" />
                <p
                  style={{ background: "444444" }}
                  className="ml-5px text-13px"
                >
                  이탈리아
                </p>
              </div>
              <div
                style={{ borderColor: "#cccccc" }}
                className="flex items-center h-37px border-t"
              >
                <img className="ml-31px" src={flag3} alt="img" />
                <p
                  style={{ background: "444444" }}
                  className="ml-5px text-13px"
                >
                  스페인
                </p>
              </div>
            </div>
            <div
              style={{
                background: "#ffffff",
              }}
              className="flex items-center px-3px rounded-lg h-35px mb-2px pt-2px"
            >
              <img className="ml-6px" src={img3} alt="img" />
              <p style={{ color: "#444444" }} className="text-12px ml-6px">
                농구
              </p>
            </div>
            <div
              style={{
                background: "#ffffff",
              }}
              className="flex items-center px-3px rounded-lg h-35px mb-2px pt-2px"
            >
              <img className="ml-6px" src={img1} alt="img" />
              <p style={{ color: "#444444" }} className="text-12px ml-6px">
                야구
              </p>
            </div>
            <div
              style={{
                background: "#ffffff",
              }}
              className="flex items-center px-3px rounded-lg h-35px mb-2px pt-2px"
            >
              <img className="ml-7px" src={img4} alt="img" />
              <p style={{ color: "#444444" }} className="text-12px ml-7px">
                격투기
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionButton3;
