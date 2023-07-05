import React, { useState } from "react";
import icon1 from "../../../images/nonLivePage/LeftAccordion/content/Icon.png";
import img1 from "../../../images/nonLivePage/LeftAccordion/content1/1.png";
import img3 from "../../../images/nonLivePage/LeftAccordion/content1/3.png";
import img4 from "../../../images/nonLivePage/LeftAccordion/content/lasticon.png";
import flag1 from "../../../images/nonLivePage/LeftAccordion/Card/Flag1.png";
import flag2 from "../../../images/nonLivePage/LeftAccordion/Card/Flag2.png";
import flag3 from "../../../images/nonLivePage/LeftAccordion/Card/Flag3.png";
import Arrow from "../../../images/nonLivePage/CenterAccordion/Arrow2.png";

// import AccordionContent from "./AccordionContent";

const AccordionButton3 = ({ icon, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        background: "linear-gradient(to top, #4f3a7a, #e597ff)",
        width: "280px",
        borderRadius: "6px",
        boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.8)",
      }}
      className="rounded-lg p-px mb-5px"
    >
      <div
        style={{
          background: "linear-gradient(to top, #6b22ff, #df52ff)",
          width: "278px",
          borderRadius: "5px",
          borderBottomRightRadius: `${isOpen ? "0px" : "5px"}`,
          borderBottomLeftRadius: `${isOpen ? "0px" : "5px"}`,
        }}
        className={`flex items-center justify-between ${
          isOpen ? "rounded-t-lg" : "rounded-lg"
        } cursor-pointer h-44px`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center">
          <img
            className="-ml-4px mb-10px"
            src={icon}
            alt="icon"
            style={{
              marginTop: 0,
              marginBottom: "8px",
            }}
          />
          <p
            style={{
              letterSpacing: "-0.031em",
              fontFamily: "MalgunGothicRegular",
            }}
            className="text-14px text-white ml-6px mt-12px mb-15px font-malgun "
          >
            {title}
          </p>
        </div>
        <div>
          <img
            src={Arrow}
            alt=""
            className={`object-none text-white mr-10px mt-17px mb-18px ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </div>
      </div>
      {isOpen && (
        <div
          style={{ background: "#420572" }}
          className="pt-2px rounded-b-lg pb-2px"
        >
          <div
            style={{
              background: "#ffffff",
            }}
            className="flex items-center ml-2px mb-2px mr-2px rounded-lg h-37px "
          >
            <img className="ml-6px mt-8px mb-8px" src={icon1} alt="img" />
            <p
              style={{ color: "#444444", letterSpacing: "-0.031em" }}
              className="text-13px ml-6px mt-12px mb-11px font-malgun"
            >
              축구
            </p>
          </div>
          <div
            style={{
              background: "#eeeeee",
            }}
            className="items-center ml-2px mb-2px mr-2px rounded-lg "
          >
            <div className="flex items-center h-37px">
              <p
                style={{ background: "444444", letterSpacing: "-0.031em" }}
                className="ml-15px mt-12px mb-17px text-13px"
              >
                L
              </p>
              <img className="ml-10px" src={flag1} alt="img" />
              <p
                style={{ background: "444444", letterSpacing: "-0.031em" }}
                className="ml-4px mt-13px mb-11px text-13px font-malgun"
              >
                잉글랜드
              </p>
            </div>
            <div
              style={{ borderColor: "#cccccc", background: "#dddddd" }}
              className="flex items-center h-38px border-t"
            >
              <p
                style={{ background: "444444", letterSpacing: "-0.031em" }}
                className="ml-44px mt-11px mb-18px text-13px"
              >
                L
              </p>
              <p
                style={{ background: "444444", letterSpacing: "-0.031em" }}
                className="ml-10px mt-13px mb-13px text-12px font-malgun"
              >
                프리미어리그
              </p>
            </div>
            <div
              style={{ borderColor: "#cccccc", background: "#dddddd" }}
              className="flex items-center h-38px border-t"
            >
              <p
                style={{ background: "444444", letterSpacing: "-0.031em" }}
                className="ml-44px mt-11px mb-18px text-13px"
              >
                L
              </p>
              <p
                style={{ background: "444444", letterSpacing: "-0.031em" }}
                className="ml-10px mt-13px mb-13px text-12px font-malgun"
              >
                챔피언쉽
              </p>
            </div>
            <div
              style={{ borderColor: "#cccccc", background: "#eeeeee" }}
              className="flex items-center h-38px border-t"
            >
              <img className="ml-31px" src={flag2} alt="img" />
              <p
                style={{ background: "444444", letterSpacing: "-0.031em" }}
                className="ml-4px mt-14px mb-11px text-13px font-malgun"
              >
                이탈리아
              </p>
            </div>
            <div
              style={{ borderColor: "#cccccc", background: "#eeeeee" }}
              className="flex items-center h-38px border-t"
            >
              <img className="ml-31px" src={flag3} alt="img" />
              <p
                style={{ background: "444444", letterSpacing: "-0.031em" }}
                className="ml-4px mt-14px mb-11px text-13px font-malgun"
              >
                스페인
              </p>
            </div>
          </div>
          <div
            style={{
              background: "#ffffff",
            }}
            className="flex items-center ml-2px mb-2px mr-2px rounded-lg h-37px"
          >
            <img className="ml-6px" src={img3} alt="img" />
            <p
              style={{ color: "#444444", letterSpacing: "-0.031em" }}
              className="text-13px ml-5px mt-13px mb-11px font-malgun"
            >
              농구
            </p>
          </div>
          <div
            style={{
              background: "#ffffff",
            }}
            className="flex items-center ml-2px mb-2px mr-2px rounded-lg h-37px"
          >
            <img className="ml-6px" src={img1} alt="img" />
            <p
              style={{ color: "#444444", letterSpacing: "-0.031em" }}
              className="text-13px ml-5px mt-13px mb-11px font-malgun"
            >
              야구
            </p>
          </div>
          <div
            style={{
              background: "#ffffff",
            }}
            className="flex items-center ml-2px mb-2px mr-2px rounded-lg h-37px"
          >
            <img className="ml-7px" src={img4} alt="img" />
            <p
              style={{ color: "#444444", letterSpacing: "-0.031em" }}
              className="text-13px ml-6px mt-13px mb-11px font-malgun"
            >
              격투기
            </p>
          </div>
        </div>
        // </div>
      )}
    </div>
  );
};

export default AccordionButton3;
