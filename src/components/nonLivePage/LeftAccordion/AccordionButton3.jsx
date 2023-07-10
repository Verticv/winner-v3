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
      className="p-px mb-5px"
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
        } cursor-pointer h-43px`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center">
          <img
            className="-ml-4px mb-11px"
            src={icon}
            alt="icon"
            style={{
              marginTop: "3px",
            }}
          />
          <p
            style={{
              letterSpacing: "-0.031em",
              fontFamily: "MalgunGothicRegular",
            }}
            className="text-14px text-white ml-5px mt-13px mb-15px font-malgun "
          >
            {title}
          </p>
        </div>
        <div
          style={{
            background: "#5423a0",
            width: "39px",
            height: "19px",
            marginLeft: "111px",
            borderRadius: "4px",
          }}
          className="flex items-center justify-center"
        >
          <p className="text-13px mb-px text-white tracking-tight font-malgun ">
            1000
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
          style={{
            background: "#420572",
            borderBottomRightRadius: "5px",
            borderBottomLeftRadius: "5px",
          }}
          className="pt-2px  pb-2px"
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "4px",
            }}
            className="flex items-center ml-2px mb-2px mr-2px h-37px "
          >
            <img className="ml-6px mt-8px mb-8px" src={icon1} alt="img" />
            <p
              style={{ color: "#444444", letterSpacing: "-0.031em" }}
              className="text-13px ml-5px mt-12px mb-13px font-malgun"
            >
              축구
            </p>
            <div
              style={{
                background: "#6b22ff",
                width: "36px",
                height: "19px",
                marginLeft: "175px",
                borderRadius: "4px",
              }}
              className="flex items-center justify-center"
            >
              <p
                style={{ color: "#eeeeee", letterSpacing: "-0.031em" }}
                className="text-12px font-malgun mb-px"
              >
                1000
              </p>
            </div>
          </div>
          <div
            style={{
              background: "#eeeeee",
              borderRadius: "4px",
            }}
            className="items-center ml-2px mb-2px mr-2px "
          >
            <div className="flex items-center h-37px">
              <p
                style={{ background: "444444", letterSpacing: "-0.031em" }}
                className="ml-15px mt-12px mb-19px text-13px"
              >
                L
              </p>
              <img className="ml-10px" src={flag1} alt="img" />
              <p
                style={{ background: "444444", letterSpacing: "-0.031em" }}
                className="ml-4px mt-13px mb-14px text-13px font-malgun"
              >
                잉글랜드
              </p>
              <div
                style={{
                  background: "#666666",
                  width: "36px",
                  height: "19px",
                  marginLeft: "118px",
                  borderRadius: "4px",
                }}
                className="flex items-center justify-center "
              >
                <p
                  style={{ color: "#eeeeee", letterSpacing: "-0.031em" }}
                  className="text-12px font-malgun mb-px"
                >
                  1000
                </p>
              </div>
            </div>
            <div
              style={{ borderColor: "#cccccc", background: "#dddddd" }}
              className="flex items-center h-38px border-t"
            >
              <p
                style={{ background: "444444", letterSpacing: "-0.031em" }}
                className="ml-45px mt-11px mb-20px text-13px"
              >
                L
              </p>
              <p
                style={{ background: "444444", letterSpacing: "-0.031em" }}
                className="ml-13px mt-13px mb-16px text-12px font-malgun"
              >
                프리미어리그
              </p>
              <div
                style={{
                  background: "#666666",
                  width: "16px",
                  height: "19px",
                  marginLeft: "118px",
                  borderRadius: "4px",
                }}
                className="flex items-center justify-center "
              >
                <p
                  style={{ color: "#eeeeee", letterSpacing: "-0.031em" }}
                  className="text-12px  font-malgun mb-px"
                >
                  5
                </p>
              </div>
            </div>
            <div
              style={{ borderColor: "#cccccc", background: "#dddddd" }}
              className="flex items-center h-38px border-t"
            >
              <p
                style={{ background: "444444", letterSpacing: "-0.031em" }}
                className="ml-45px mt-11px mb-20px text-13px"
              >
                L
              </p>
              <p
                style={{ background: "444444", letterSpacing: "-0.031em" }}
                className="ml-13px mt-13px mb-16px text-12px font-malgun"
              >
                챔피언쉽
              </p>
              <div
                style={{
                  background: "#666666",
                  width: "16px",
                  height: "19px",
                  marginLeft: "142px",
                  borderRadius: "4px",
                }}
                className="flex items-center justify-center"
              >
                <p
                  style={{ color: "#eeeeee", letterSpacing: "-0.031em" }}
                  className="text-12px  font-malgun mr-px mb-px"
                >
                  0
                </p>
              </div>
            </div>
            <div
              style={{ borderColor: "#cccccc", background: "#eeeeee" }}
              className="flex items-center h-38px border-t"
            >
              <img className="ml-31px" src={flag2} alt="img" />
              <p
                style={{ background: "444444", letterSpacing: "-0.031em" }}
                className="ml-4px mt-14px mb-15px text-13px font-malgun"
              >
                이탈리아
              </p>
              <div
                style={{
                  background: "#666666",
                  width: "29px",
                  height: "19px",
                  marginLeft: "125px",
                  borderRadius: "4px",
                }}
                className="flex items-center justify-center"
              >
                <p
                  style={{ color: "#eeeeee", letterSpacing: "-0.031em" }}
                  className="text-12px  font-malgun mb-px"
                >
                  100
                </p>
              </div>
            </div>
            <div
              style={{
                borderColor: "#dddddd",
                background: "#eeeeee",
                borderBottomRightRadius: "4px",
                borderBottomLeftRadius: "4px",
              }}
              className="flex items-center h-38px border-t"
            >
              <img className="ml-31px" src={flag3} alt="img" />
              <p
                style={{ background: "444444", letterSpacing: "-0.031em" }}
                className="ml-4px mt-14px mb-15px text-13px font-malgun"
              >
                스페인
              </p>
              <div
                style={{
                  background: "#666666",
                  width: "29px",
                  height: "19px",
                  marginLeft: "137px",
                  borderRadius: "4px",
                }}
                className="flex items-center justify-center"
              >
                <p
                  style={{ color: "#eeeeee", letterSpacing: "-0.031em" }}
                  className="text-12px  font-malgun mb-px"
                >
                  100
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              background: "#ffffff",
              borderRadius: "4px",
            }}
            className="flex items-center ml-2px mb-2px mr-2px h-37px"
          >
            <img className="ml-6px" src={img3} alt="img" />
            <p
              style={{ color: "#444444", letterSpacing: "-0.031em" }}
              className="text-13px ml-5px mt-13px mb-14px font-malgun"
            >
              농구
            </p>
            <div
              style={{
                background: "#6b22ff",
                width: "29px",
                height: "19px",
                marginLeft: "183px",
                borderRadius: "4px",
              }}
              className="flex items-center justify-center"
            >
              <p
                style={{ color: "#eeeeee", letterSpacing: "-0.031em" }}
                className="text-12px  font-malgun mb-px"
              >
                100
              </p>
            </div>
          </div>
          <div
            style={{
              background: "#ffffff",
              borderRadius: "4px",
            }}
            className="flex items-center ml-2px mb-2px mr-2px h-37px"
          >
            <img className="ml-6px" src={img1} alt="img" />
            <p
              style={{ color: "#444444", letterSpacing: "-0.031em" }}
              className="text-13px ml-5px mt-13px mb-14px font-malgun"
            >
              야구
            </p>
            <div
              style={{
                background: "#6b22ff",
                width: "29px",
                height: "19px",
                marginLeft: "183px",
                borderRadius: "4px",
              }}
              className="flex items-center justify-center "
            >
              <p
                style={{ color: "#eeeeee", letterSpacing: "-0.031em" }}
                className="text-12px font-malgun mb-px"
              >
                100
              </p>
            </div>
          </div>
          <div
            style={{
              background: "#ffffff",
              borderRadius: "4px",
            }}
            className="flex items-center ml-2px mr-2px h-37px"
          >
            <img className="ml-7px" src={img4} alt="img" />
            <p
              style={{ color: "#444444", letterSpacing: "-0.031em" }}
              className="text-13px ml-6px mt-13px mb-14px font-malgun"
            >
              격투기
            </p>
            <div
              style={{
                background: "#6b22ff",
                width: "29px",
                height: "19px",
                marginLeft: "170px",
                borderRadius: "4px",
              }}
              className="flex items-center justify-center"
            >
              <p
                style={{ color: "#eeeeee", letterSpacing: "-0.031em" }}
                className="text-12px font-malgun mb-px"
              >
                100
              </p>
            </div>
          </div>
        </div>
        // </div>
      )}
    </div>
  );
};

export default AccordionButton3;
