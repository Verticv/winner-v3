import React, { useEffect, useState } from "react";
import star from "../../../images/nonLivePage/EntireAccordion/star.png";
import star1 from "../../../images/nonLivePage/EntireAccordion/star1.png";
import EntireAccordionButton from "./EntireAccordionButton";
import EntireAccordionButton1 from "./EntireAccordionButton1";
import EntireAccordionButton2 from "./EntireAccordionButton2";
import EntireAccordionButton3 from "./EntireAccordionButton3";
import EntireAccordionButton0 from "./EntireAccordionButton0";
import EntireAccordionButton11 from "./EntireAccordionButton_1";
import "./style.css";
import { useSelector } from "react-redux";

const EntireAccordion = () => {
  const [activeId, setActiveId] = useState(1);
  const data1 = useSelector((state) => state?.nonLive?.data1);
  const data2 = useSelector((state) => state?.nonLive?.data2);
  const data3 = useSelector((state) => state?.nonLive?.data3);
  const data4 = useSelector((state) => state?.nonLive?.data4);
  const data5 = useSelector((state) => state?.nonLive?.data5);
  const data6 = useSelector((state) => state?.nonLive?.data6);

  const [zoomClass, setZoomClass] = useState("");

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

  useEffect(() => {
    console.log("zoomClass", zoomClass);
    setTimeout(() => {
      setZoomClass("");
    }, 500);
  }, [zoomClass, setZoomClass]);

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
              className="flex w-54px h-36px items-center cursor-pointer relative filter hover:brightness-110"
              onClick={() => setActiveId(0)}
            >
              <img
                className={`ml-15px mt-2px object-none ${
                  zoomClass ? zoomClass : ""
                }`}
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
                <p className="text-13px tracking-tight font-bold text-white ">
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
                  minWidth: content.width,
                  width:"max-content",
                  borderBottom:
                    activeId === content.id
                      ? "3px solid #ffc900"
                      : "3px solid #f3cbff",
                }}
                className="flex ml-3px w-54px h-36px items-center justify-center align-center cursor-pointer px-10px filter hover:brightness-110"
                onClick={() => setActiveId(content.id)}
              >
                <p
                  style={{
                    color: activeId === content.id ? "#ffffff" : "#5e399a",
                  }}
                  className="text-13px tracking-tight font-bold mt-2px"
                >
                  {content.text}
                </p>
              </div>
            ))}
          </div>
          {activeId === 0 ? (
            <div className="">
              {data1?.map((item, index) => {
                return (
                  <EntireAccordionButton
                    title="승무패 [정규시간]"
                    icon={star1}
                    cards={item.teams}
                    handleZoomClick={setZoomClass}
                  />
                );
              })}
              {data2?.map((item, index) => {
                return (
                  <EntireAccordionButton0
                    title="더블찬스 [정규시간]"
                    icon={star1}
                    cards={item.teams}
                    handleZoomClick={setZoomClass}
                  />
                );
              })}
              {data3?.map((item, index) => {
                return (
                  <EntireAccordionButton1
                    title="승패(무X) [정규시간]"
                    icon={star1}
                    cards={item.teams}
                    handleZoomClick={setZoomClass}
                  />
                );
              })}
              {data4?.map((item, index) => {
                return (
                  <EntireAccordionButton11
                    title="오버/언더 [정규시간]"
                    icon={star1}
                    cards={item.teams}
                    handleZoomClick={setZoomClass}
                  />
                );
              })}
              {data5?.map((item, index) => {
                return (
                  <EntireAccordionButton2
                    title="아시안 핸디캡 [정규시간]"
                    icon={star1}
                    cards={item.teams}
                    handleZoomClick={setZoomClass}
                  />
                );
              })}
              {data6?.map((item, index) => {
                return (
                  <EntireAccordionButton3
                    title="핸디캡 승무패 [정규시간]"
                    icon={star1}
                    cards={item.teams}
                    handleZoomClick={setZoomClass}
                  />
                );
              })}
            </div>
          ) : activeId === 1 ? (
            <div className="">
              {data1?.map((item, index) => {
                return (
                  <EntireAccordionButton
                    title="승무패 [정규시간]"
                    icon={star1}
                    cards={item.teams}
                    handleZoomClick={setZoomClass}
                  />
                );
              })}
              {data2?.map((item, index) => {
                return (
                  <EntireAccordionButton0
                    title="더블찬스 [정규시간]"
                    icon={star1}
                    cards={item.teams}
                    handleZoomClick={setZoomClass}
                  />
                );
              })}
              {data3?.map((item, index) => {
                return (
                  <EntireAccordionButton1
                    title="승패(무X) [정규시간]"
                    icon={star1}
                    cards={item.teams}
                    handleZoomClick={setZoomClass}
                  />
                );
              })}
              {data4?.map((item, index) => {
                return (
                  <EntireAccordionButton11
                    title="오버/언더 [정규시간]"
                    icon={star1}
                    cards={item.teams}
                    handleZoomClick={setZoomClass}
                  />
                );
              })}
              {data5?.map((item, index) => {
                return (
                  <EntireAccordionButton2
                    title="아시안 핸디캡 [정규시간]"
                    icon={star1}
                    cards={item.teams}
                    handleZoomClick={setZoomClass}
                  />
                );
              })}
              {data6?.map((item, index) => {
                return (
                  <EntireAccordionButton3
                    title="핸디캡 승무패 [정규시간]"
                    icon={star1}
                    cards={item.teams}
                    handleZoomClick={setZoomClass}
                  />
                );
              })}
            </div>
          ) : (
            <div className="">
              {data1?.map((item, index) => {
                return (
                  <EntireAccordionButton
                    title="승무패 [정규시간]"
                    icon={star1}
                    cards={item.teams}
                    handleZoomClick={setZoomClass}
                  />
                );
              })}
              {data2?.map((item, index) => {
                return (
                  <EntireAccordionButton0
                    title="더블찬스 [정규시간]"
                    icon={star1}
                    cards={item.teams}
                    handleZoomClick={setZoomClass}
                  />
                );
              })}
              {data3?.map((item, index) => {
                return (
                  <EntireAccordionButton1
                    title="승패(무X) [정규시간]"
                    icon={star1}
                    cards={item.teams}
                    handleZoomClick={setZoomClass}
                  />
                );
              })}
              {data4?.map((item, index) => {
                return (
                  <EntireAccordionButton11
                    title="오버/언더 [정규시간]"
                    icon={star1}
                    cards={item.teams}
                    handleZoomClick={setZoomClass}
                  />
                );
              })}
              {data5?.map((item, index) => {
                return (
                  <EntireAccordionButton2
                    title="아시안 핸디캡 [정규시간]"
                    icon={star1}
                    cards={item.teams}
                    handleZoomClick={setZoomClass}
                  />
                );
              })}
              {data6?.map((item, index) => {
                return (
                  <EntireAccordionButton3
                    title="핸디캡 승무패 [정규시간]"
                    icon={star1}
                    cards={item.teams}
                    handleZoomClick={setZoomClass}
                  />
                );
              })}
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
