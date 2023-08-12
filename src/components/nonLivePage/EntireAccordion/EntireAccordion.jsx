import React, { useState } from "react";
import star from "../../../images/nonLivePage/EntireAccordion/star.png";
import star1 from "../../../images/nonLivePage/EntireAccordion/star1.png";
import EntireAccordionButton from "./EntireAccordionButton";
import EntireAccordionButton1 from "./EntireAccordionButton1";
import EntireAccordionButton2 from "./EntireAccordionButton2";
import EntireAccordionButton3 from "./EntireAccordionButton3";
import EntireAccordionButton0 from "./EntireAccordionButton0";
import EntireAccordionButton11 from "./EntireAccordionButton_1";
import "./style.css";

const EntireAccordion = () => {
  const [activeId, setActiveId] = useState(1);

  const [isZoomedOut, setIsZoomedOut] = useState(false);
  const [isZoomedOut1, setIsZoomedOut1] = useState(false);
  const [isZoomedOut2, setIsZoomedOut2] = useState(false);
  const [isZoomedOut3, setIsZoomedOut3] = useState(false);
  const [isZoomedOut4, setIsZoomedOut4] = useState(false);
  const [isZoomedOut5, setIsZoomedOut5] = useState(false);

  const handleZoomClick = () => {
    setIsZoomedOut(!isZoomedOut);
  };

  const handleZoomClick1 = () => {
    setIsZoomedOut1(!isZoomedOut1);
  };

  const handleZoomClick2 = () => {
    setIsZoomedOut2(!isZoomedOut2);
  };
  const handleZoomClick3 = () => {
    setIsZoomedOut3(!isZoomedOut3);
  };
  const handleZoomClick4 = () => {
    setIsZoomedOut4(!isZoomedOut4);
  };
  const handleZoomClick5 = () => {
    setIsZoomedOut5(!isZoomedOut5);
  };

  const card1 = [
    {
      text: "아스널",
      text1: "1.98",
      text2: "무승부",
      text3: "4.20",
      text4: "리버플",
      text5: "3.31",
    },
  ];
  const card2 = [
    {
      text: "1팀승 또는 무승부",
      text1: "1.32",
      text2: "1팀승 또는 2팀승",
      text3: "1.23",
      text4: "무승부 또는 2팀승",
      text5: "1.77",
    },
  ];
  const card3 = [
    {
      text: "아스널 (리저브)",
      text1: "1.52",
      text2: "리버플 (리저브)",
      text3: "2.53",
    },
  ];
  const card4 = [
    {
      id: 0,
      text: "오버 (0.5)",
      text1: "1.05",
      text2: "언더 (0.5)",
      text3: "12.80",
      marginBottom: "2px",
    },
    {
      id: 1,
      text: "오버 (1)",
      text1: "1.06",
      text2: "언더 (1)",
      text3: "11.50",
      marginBottom: "2px",
    },
    {
      id: 2,
      text: "오버 (1.5)",
      text1: "1.27",
      text2: "언더 (1.5)",
      text3: "4.12",
      marginBottom: "3px",
    },
  ];
  const card5 = [
    {
      text: "(-1.75)",
      text1: "2.75",
      text2: "(+1.75)",
      text3: "1.45",
    },
    {
      text: "(-1.25)",
      text1: "2.09",
      text2: "(+1.25)",
      text3: "1.75",
    },
    {
      text: "(-0.75)",
      text1: "1.67",
      text2: "(+0.75)",
      text3: "2.20",
    },
    {
      text: "(-0.25)",
      text1: "1.40",
      text2: "(+0.25)",
      text3: "2.95",
    },
  ];
  const card6 = [
    {
      id: 0,
      text: "(-2)",
      text1: "4.30",
      text2: "(+2)",
      text3: "4.50",
      text4: "(+2)",
      text5: "1.56",
    },
    {
      id: 1,
      text: "(-1)",
      text1: "2.29",
      text2: "(+1)",
      text3: "4.00",
      text4: "(+1)",
      text5: "2.41",
    },
  ];

  const buttonContent = [
    {
      id: 1,
      text: "전체",
      width: "54px",
    },
    {
      id: 2,
      text: "매치",
      width: "54px",
    },
    {
      id: 3,
      text: "오버/언더",
      width: "84px",
    },
    {
      id: 4,
      text: "핸디캡",
      width: "67px",
    },
    {
      id: 5,
      text: "조합",
      width: "54px",
    },
    {
      id: 6,
      text: "분",
      width: "54px",
    },
    {
      id: 7,
      text: "전/후반",
      width: "67px",
    },
    {
      id: 8,
      text: "코너킥",
      width: "67px",
    },
  ];
  return (
    <>
      <div
        style={{
          background: "#2e0450",
          width: "640px",
          // height: "686px",
          borderRadius: "6px",
          boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.8)",
          marginLeft: "4px",
        }}
        className="flex items-center p-px"
      >
        <div
          style={{
            background: "#420572",
            width: "638px",
            borderRadius: "4px",
          }}
          className="items-center "
        >
          <div
            className="scroll-div1 flex items-center ml-4px mt-4px pb-5px"
            // mb-5px
            style={{
              overflowX: "auto",
              overflowY: "hidden",
              // whiteSpace: "nowrap",
            }}
          >
            <div
              style={{
                borderRadius: "4px",
                flexShrink: 0,
                background: activeId === 0 ? "#762ead" : "#f3cbff",
                borderBottom:
                  activeId === 0 ? "3px solid #ffc900" : "3px solid #f3cbff",
              }}
              className="flex w-54px h-36px items-center cursor-pointer relative"
              onClick={() => setActiveId(0)}
            >
              <img
                className={`ml-15px mt-2px object-none ${
                  isZoomedOut ? "zoom-out" : ""
                }
                   ${isZoomedOut1 ? "zoom-out1" : ""}
                    ${isZoomedOut2 ? "zoom-out2" : ""} 
                    ${isZoomedOut3 ? "zoom-out3" : ""} 
                    ${isZoomedOut4 ? "zoom-out4" : ""} 
                    ${isZoomedOut5 ? "zoom-out5" : ""}`}
                src={star}
                alt="icon"
              />
              <div
                style={{
                  height: "19px",
                  background: "#f04281",
                  borderRadius: "9px",
                  zIndex: 10,
                }}
                className="flex items-center justify-center absolute ml-31px mb-15px pl-6px pr-7px"
              >
                <p className="text-13px tracking-tight font-MalgunGothicBold text-white ">
                  25
                </p>
              </div>
            </div>
            {buttonContent.map((content) => (
              <div
                style={{
                  background: activeId === content.id ? "#762ead" : "#f3cbff",
                  borderRadius: "4px",
                  flexShrink: 0,
                  width: content.width,
                  borderBottom:
                    activeId === content.id
                      ? "3px solid #ffc900"
                      : "3px solid #f3cbff",
                }}
                className="flex ml-3px w-54px h-36px items-center justify-center align-center cursor-pointer"
                onClick={() => setActiveId(content.id)}
              >
                <p
                  style={{
                    color: activeId === content.id ? "#ffffff" : "#5e399a",
                  }}
                  className="text-13px tracking-tight font-MalgunGothicBold"
                >
                  {content.text}
                </p>
              </div>
            ))}
          </div>
          {activeId === 0 ? (
            <div className="">
              <EntireAccordionButton
                title="승무패 [정규시간]"
                icon={star1}
                card={card1}
                handleZoomClick={handleZoomClick}
              />
              <EntireAccordionButton0
                title="더블찬스 [정규시간]"
                icon={star1}
                card={card2}
                handleZoomClick1={handleZoomClick1}
              />
              <EntireAccordionButton1
                title="승패(무X) [정규시간]"
                icon={star1}
                card={card3}
                handleZoomClick2={handleZoomClick2}
              />
              <EntireAccordionButton11
                title="오버/언더 [정규시간]"
                icon={star1}
                card={card4}
                handleZoomClick3={handleZoomClick3}
              />
              <EntireAccordionButton2
                title="아시안 핸디캡 [정규시간]"
                icon={star1}
                card={card5}
                handleZoomClick4={handleZoomClick4}
              />
              <EntireAccordionButton3
                title="핸디캡 승무패 [정규시간]"
                icon={star1}
                card={card6}
                handleZoomClick5={handleZoomClick5}
              />
            </div>
          ) : activeId === 1 ? (
            <div className="">
              <EntireAccordionButton
                title="승무패 [정규시간]"
                icon={star1}
                card={card1}
                handleZoomClick={handleZoomClick}
              />
              <EntireAccordionButton0
                title="더블찬스 [정규시간]"
                icon={star1}
                card={card2}
                handleZoomClick1={handleZoomClick1}
              />
              <EntireAccordionButton1
                title="승패(무X) [정규시간]"
                icon={star1}
                card={card3}
                handleZoomClick2={handleZoomClick2}
              />
              <EntireAccordionButton11
                title="오버/언더 [정규시간]"
                icon={star1}
                card={card4}
                handleZoomClick3={handleZoomClick3}
              />
              <EntireAccordionButton2
                title="아시안 핸디캡 [정규시간]"
                icon={star1}
                card={card5}
                handleZoomClick4={handleZoomClick4}
              />
              <EntireAccordionButton3
                title="핸디캡 승무패 [정규시간]"
                icon={star1}
                card={card6}
                handleZoomClick5={handleZoomClick5}
              />
            </div>
          ) : (
            <div className="">
              <EntireAccordionButton
                title="승무패 [정규시간]"
                icon={star1}
                card={card1}
                handleZoomClick={handleZoomClick}
              />
              <EntireAccordionButton0
                title="더블찬스 [정규시간]"
                icon={star1}
                card={card2}
                handleZoomClick1={handleZoomClick1}
              />
              <EntireAccordionButton1
                title="승패(무X) [정규시간]"
                icon={star1}
                card={card3}
                handleZoomClick2={handleZoomClick2}
              />
              <EntireAccordionButton11
                title="오버/언더 [정규시간]"
                icon={star1}
                card={card4}
                handleZoomClick3={handleZoomClick3}
              />
              <EntireAccordionButton2
                title="아시안 핸디캡 [정규시간]"
                icon={star1}
                card={card5}
                handleZoomClick4={handleZoomClick4}
              />
              <EntireAccordionButton3
                title="핸디캡 승무패 [정규시간]"
                icon={star1}
                card={card6}
                handleZoomClick5={handleZoomClick5}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );

  // return (
  //   <>
  // <div
  //   style={{
  //     background: "#2e0450",
  //     width: "640px",
  //     // height: "686px",
  //     borderRadius: "6px",
  //   }}
  //   className="flex items-center p-px"
  // >
  //       <div
  //         style={{ background: "#420572", width: "638px", borderRadius: "4px" }}
  //         className="items-center "
  //       >
  //         <div className="flex items-center ml-4px mt-4px mb-5px">
  //           <div
  //             style={{ background: "#f3cbff", borderRadius: "4px" }}
  //             className="flex w-54px h-36px items-center "
  //           >
  //             <img className="ml-15px object-none" src={star} alt="icon" />
  //             <div
  //               style={{
  //                 width: "28px",
  //                 height: "19px",
  //                 background: "#f04281",
  //                 borderRadius: "9px",
  //               }}
  //               className="flex items-center justify-center absolute ml-29px mb-34px"
  //             >
  //               <p className="text-13px tracking-tight font-MalgunGothicBold text-white ">
  //                 25
  //               </p>
  //             </div>
  //           </div>
  //           <div
  //             style={{
  //               background: "#762ead",
  //               borderBottom: "3px solid #ffc900",
  //               borderRadius: "4px",
  //             }}
  //             className="flex ml-3px w-54px h-36px items-center"
  //           >
  //             <p
  //               style={{ color: "#ffffff" }}
  //               className="ml-14px mt-px text-13px tracking-tight font-MalgunGothicBold"
  //             >
  //               전체
  //             </p>
  //           </div>
  // <div
  //   style={{ background: "#f3cbff", borderRadius: "4px" }}
  //   className="flex ml-3px w-54px h-36px items-center"
  // >
  //   <p
  //     style={{ color: "#5e399a" }}
  //     className="ml-14px text-13px -mt-2px tracking-tight font-MalgunGothicBold"
  //   >
  //     매치
  //   </p>
  // </div>
  //           <div
  //             style={{ background: "#f3cbff", borderRadius: "4px" }}
  //             className="flex ml-3px w-84px h-36px items-center "
  //           >
  //             <p
  //               style={{ color: "#5e399a" }}
  //               className="ml-14px text-13px tracking-tight font-MalgunGothicBold"
  //             >
  //               오버/언더
  //             </p>
  //           </div>
  //           <div
  //             style={{ background: "#f3cbff", borderRadius: "4px" }}
  //             className="flex ml-3px w-67px h-36px items-center "
  //           >
  //             <p
  //               style={{ color: "#5e399a" }}
  //               className="ml-15px text-13px -mt-2px tracking-tight font-MalgunGothicBold"
  //             >
  //               핸디캡
  //             </p>
  //           </div>
  //           <div
  //             style={{ background: "#f3cbff", borderRadius: "4px" }}
  //             className="flex ml-3px w-54px h-36px items-center "
  //           >
  //             <p
  //               style={{ color: "#5e399a" }}
  //               className="ml-14px text-13px -mt-2px tracking-tight font-MalgunGothicBold"
  //             >
  //               조합
  //             </p>
  //           </div>
  //           <div
  //             style={{ background: "#f3cbff", borderRadius: "4px" }}
  //             className="flex ml-3px w-54px h-36px items-center "
  //           >
  //             <p
  //               style={{ color: "#5e399a" }}
  //               className="ml-21px text-13px -mt-2px tracking-tight font-MalgunGothicBold"
  //             >
  //               분
  //             </p>
  //           </div>
  //           <div
  //             style={{ background: "#f3cbff", borderRadius: "4px" }}
  //             className="flex ml-3px w-67px h-36px items-center "
  //           >
  //             <p
  //               style={{ color: "#5e399a" }}
  //               className="ml-12px text-13px  tracking-tight font-MalgunGothicBold"
  //             >
  //               전/후반
  //             </p>
  //           </div>
  //           <div
  //             style={{ background: "#f3cbff", borderRadius: "4px" }}
  //             className="flex ml-3px w-67px h-36px items-center "
  //           >
  //             <p
  //               style={{ color: "#5e399a" }}
  //               className="ml-15px text-13px -mt-2px tracking-tight font-MalgunGothicBold"
  //             >
  //               코너킥
  //             </p>
  //           </div>
  //         </div>
  // <div className="">
  //   <EntireAccordionButton
  //     title="승무패 [정규시간]"
  //     icon={star1}
  //     card={card1}
  //   />
  //   <EntireAccordionButton0
  //     title="더블찬스 [정규시간]"
  //     icon={star1}
  //     card={card2}
  //   />
  //   <EntireAccordionButton1
  //     title="승패(무X) [정규시간]"
  //     icon={star1}
  //     card={card3}
  //   />
  //   <EntireAccordionButton11
  //     title="오버/언더 [정규시간]"
  //     icon={star1}
  //     card={card4}
  //   />
  //   <EntireAccordionButton2
  //     title="아시안 핸디캡 [정규시간]"
  //     icon={star1}
  //     card={card5}
  //   />
  //   <EntireAccordionButton3
  //     title="핸디캡 승무패 [정규시간]"
  //     icon={star1}
  //     card={card6}
  //   />
  // </div>
  //       </div>
  //     </div>
  //   </>
  // );
};

export default EntireAccordion;
