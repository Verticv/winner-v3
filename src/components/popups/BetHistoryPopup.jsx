import React, { useEffect, useRef, useState } from "react";
import CloseIcon from "../../images/popups/close_icon.png";
import Icon2 from "../../images/myPage/betHistory/icon_2.png";
import Icon3 from "../../images/myPage/betHistory/icon_3.png";
import Icon4 from "../../images/myPage/betHistory/icon_4.png";
import Icon5 from "../../images/myPage/betHistory/icon_5.png";
import Icon6 from "../../images/myPage/betHistory/icon_6.png";
import Icon7 from "../../images/myPage/betHistory/icon_7.png";
import Icon8 from "../../images/myPage/betHistory/icon_8.png";
import Icon9 from "../../images/myPage/betHistory/icon_9.png";
import Icon10 from "../../images/myPage/betHistory/icon_10.png";
import Icon11 from "../../images/myPage/betHistory/icon_11.png";
import Icon12 from "../../images/myPage/betHistory/icon_12.png";
import IconHighlight2 from "../../images/myPage/betHistory/Icon2_On.png";
import IconHighlight3 from "../../images/myPage/betHistory/Icon3_On.png";
import IconHighlight4 from "../../images/myPage/betHistory/Icon4_On.png";
import IconHighlight5 from "../../images/myPage/betHistory/Icon5_On.png";
import IconHighlight6 from "../../images/myPage/betHistory/Icon6_On.png";
import IconHighlight7 from "../../images/myPage/betHistory/Icon7_On.png";
import IconHighlight8 from "../../images/myPage/betHistory/Icon8_On.png";
import IconHighlight9 from "../../images/myPage/betHistory/Icon9_On.png";
import IconHighlight10 from "../../images/myPage/betHistory/Icon10_On.png";
import IconHighlight11 from "../../images/myPage/betHistory/Icon11_On.png";
import IconHighlight12 from "../../images/myPage/betHistory/Icon12_On.png";
import SportsBetHistory from "components/myPage/betHistory/SportsBetHistory";
import SubHorizontalMenu from "components/myPage/betHistory/SubHorizontalMenu";

import Sub22 from "../../images/myPage/betHistory/minigame/sub1.png";
import Sub23 from "../../images/myPage/betHistory/minigame/sub2.png";
import Sub24 from "../../images/myPage/betHistory/minigame/sub3.png";
import Sub25 from "../../images/myPage/betHistory/minigame/sub4.png";

import HIcon1 from "../../images/myPage/betHistory/h_icon1.png";
import HIcon2 from "../../images/myPage/betHistory/h_icon2.png";
import HIcon3 from "../../images/myPage/betHistory/h_icon3.png";

import ARSub1 from "../../images/myPage/betHistory/ARGame/sub1_v2.png";
import ARSub2 from "../../images/myPage/betHistory/ARGame/sub2_v2.png";
import ARSub3 from "../../images/myPage/betHistory/ARGame/sub3_v2.png";
import ARSub4 from "../../images/myPage/betHistory/ARGame/sub4.png";
import ARSub5 from "../../images/myPage/betHistory/ARGame/sub5.png";
import ARSub6 from "../../images/myPage/betHistory/ARGame/sub6.png";
import ARSub7 from "../../images/myPage/betHistory/ARGame/sub7.png";
import ARSub8 from "../../images/myPage/betHistory/ARGame/sub8.png";
import ARSub9 from "../../images/myPage/betHistory/ARGame/sub9.png";
import ARSub10 from "../../images/myPage/betHistory/ARGame/sub10.png";
import ARSub11 from "../../images/myPage/betHistory/ARGame/sub11.png";

import LiveCasinoBetHistory from "components/myPage/betHistory/LiveCasinoBetHistory";
import SlotBetHistory from "components/myPage/betHistory/SlotBetHistory";
import MinigameBetHistory from "components/myPage/betHistory/MinigameBetHistory";
import ARGameBetHistory from "components/myPage/betHistory/ARGameBetHistory";
import ESportsBetHistory from "components/myPage/betHistory/ESportsBetHistory";
import Pagination from "components/myPage/Pagination";
import HotelCasinoBetHistory from "components/myPage/betHistory/HotelCasinoBetHistory";
import HorizontalMenu from "components/horizontalMenus/HorizontalMenu";
import { useHistory } from "react-router-dom";

import AllIcon from "../../images/myPage/betHistory/all.png";
import bet1 from "../../images/myPage/betHistory/liveCasino/bet1.png";
import bet2 from "../../images/myPage/betHistory/liveCasino/bet2.png";
import bet3 from "../../images/myPage/betHistory/liveCasino/bet3.png";
import bet4 from "../../images/myPage/betHistory/liveCasino/bet4.png";
import bet5 from "../../images/myPage/betHistory/liveCasino/bet5.png";
import bet6 from "../../images/myPage/betHistory/liveCasino/bet6.png";
import bet7 from "../../images/myPage/betHistory/liveCasino/bet7.png";
import bet8 from "../../images/myPage/betHistory/liveCasino/bet8.png";
import bet9 from "../../images/myPage/betHistory/liveCasino/bet9.png";
import bet10 from "../../images/myPage/betHistory/liveCasino/bet10.png";
import bet11 from "../../images/myPage/betHistory/liveCasino/bet11.png";
import bet12 from "../../images/myPage/betHistory/liveCasino/bet12.png";
import bet13 from "../../images/myPage/betHistory/liveCasino/bet13.png";
import bet14 from "../../images/myPage/betHistory/liveCasino/bet14.png";

import Slot1 from "../../images/myPage/betHistory/slotGame/slot1.png";
import Slot2 from "../../images/myPage/betHistory/slotGame/slot2.png";
import Slot3 from "../../images/myPage/betHistory/slotGame/slot3.png";
import Slot4 from "../../images/myPage/betHistory/slotGame/slot4.png";
import Slot5 from "../../images/myPage/betHistory/slotGame/slot5.png";
import Slot6 from "../../images/myPage/betHistory/slotGame/slot6.png";
import Slot7 from "../../images/myPage/betHistory/slotGame/slot7.png";
import Slot8 from "../../images/myPage/betHistory/slotGame/slot8.png";
import Slot9 from "../../images/myPage/betHistory/slotGame/slot9.png";
import Slot10 from "../../images/myPage/betHistory/slotGame/slot10.png";
import Slot11 from "../../images/myPage/betHistory/slotGame/slot11.png";
import Slot12 from "../../images/myPage/betHistory/slotGame/slot12.png";
import Slot13 from "../../images/myPage/betHistory/slotGame/slot13.png";
import Slot14 from "../../images/myPage/betHistory/slotGame/slot14.png";
import Slot15 from "../../images/myPage/betHistory/slotGame/slot15.png";
import Slot16 from "../../images/myPage/betHistory/slotGame/slot16.png";
import Slot17 from "../../images/myPage/betHistory/slotGame/slot17.png";
import Slot18 from "../../images/myPage/betHistory/slotGame/slot18.png";
import Slot19 from "../../images/myPage/betHistory/slotGame/slot19.png";
import Slot20 from "../../images/myPage/betHistory/slotGame/slot20.png";
import Slot21 from "../../images/myPage/betHistory/slotGame/slot21.png";
import Slot22 from "../../images/myPage/betHistory/slotGame/slot22.png";
import Slot23 from "../../images/myPage/betHistory/slotGame/slot23.png";
import Slot24 from "../../images/myPage/betHistory/slotGame/slot24.png";
import Slot25 from "../../images/myPage/betHistory/slotGame/slot25.png";

const BetHistoryPopup = ({ setPopupOpen, setAttachedArray, attachedArray }) => {
  const history = useHistory();
  const scrollRef = useRef();

  useEffect(() => {
    return () => {
      history.push("/freeboard/compose/live-casino");
    };
  }, [history]);

  const subTabsArray1 = [
    { text: "전체", icon: AllIcon, id: 0 },
    { text: "프레그메틱플레이", icon: bet1, id: 1 },
    { text: "에볼루션", icon: bet2, id: 2 },
    { text: "로얄지", icon: bet3, id: 3 },
    { text: "아시아게이밍", icon: bet5, id: 4 },
    { text: "드림게이밍", icon: bet4, id: 5 },
    { text: "섹시게이밍", icon: bet6, id: 6 },
    { text: "빅게이밍", icon: bet7, id: 7 },
    { text: "오리엔탈게임", icon: bet8, id: 8 },
    { text: "이주기", icon: bet9, id: 9 },
    { text: "마이크로게이밍", icon: bet10, id: 10 },
    { text: "베가스라운지", icon: bet11, id: 11 },
    { text: "비터라이브", icon: bet12, id: 12 },
    { text: "타이산", icon: bet13, id: 13 },
    { text: "모티베이션", icon: bet14, id: 14 },
  ];

  const subTabsArray2 = [
    { text: "전체", icon: AllIcon, id: 0 },
    { text: "프레그메틱플레이", icon: Slot1, id: 1 },
    { text: "씨큐나인", icon: Slot2, id: 2 },
    { text: "월드매치", icon: Slot3, id: 3 },
    { text: "하바네로", icon: Slot4, id: 4 },
    { text: "플레이앤고", icon: Slot5, id: 5 },
    { text: "스페이드", icon: Slot6, id: 6 },
    { text: "분고", icon: Slot7, id: 7 },
    { text: "레드타이거", icon: Slot8, id: 8 },
    { text: "엘리시움", icon: Slot9, id: 9 },
    { text: "빅타임게이밍", icon: Slot10, id: 10 },
    { text: "마이크로게이밍", icon: Slot11, id: 11 },
    { text: "YL게이밍", icon: Slot12, id: 12 },
    { text: "넷엔트", icon: Slot13, id: 13 },
    { text: "드라군소프트", icon: Slot14, id: 14 },
    { text: "YGG드라실", icon: Slot15, id: 15 },
    { text: "플레이슨", icon: Slot16, id: 16 },
    { text: "플레이텍", icon: Slot17, id: 17 },
    { text: "스카이윈드", icon: Slot18, id: 18 },
    { text: "와즈단", icon: Slot19, id: 19 },
    { text: "PG소프트", icon: Slot20, id: 20 },
    { text: "로얄슬롯게이밍", icon: Slot21, id: 21 },
    { text: "노리미트시티", icon: Slot22, id: 22 },
    { text: "CC88", icon: Slot23, id: 23 },
    { text: "패스트스핀", icon: Slot24, id: 24 },
    { text: "나가게임즈", icon: Slot25, id: 25 },
  ];

  const subTabsArray3 = [
    { text: "전체", icon: AllIcon, id: 0 },
    { text: "파워볼", icon: Sub22, id: 1 },
    { text: "파워사다리", icon: Sub23, id: 2 },
    { text: "스피드키노", icon: Sub24, id: 3, custom: "mt-8px" },
    { text: "키노사다리", icon: Sub25, id: 4 },
  ];

  const subTabsArray4 = [
    { text: "전체", icon: AllIcon, id: 0 },
    { text: "축구", icon: ARSub1, id: 1 },
    { text: "경마", icon: ARSub2, id: 2 },
    { text: "개경주", icon: ARSub3, id: 3 },
    { text: "레이싱", icon: ARSub4, id: 4 },
    { text: "탁구", icon: ARSub5, id: 5 },
    { text: "배드민턴", icon: ARSub6, id: 6 },
    { text: "양궁", icon: ARSub7, id: 7 },
    { text: "마구", icon: ARSub8, id: 8 },
    { text: "레이싱룰렛", icon: ARSub9, id: 9 },
    { text: "농구", icon: ARSub10, id: 10 },
    { text: "아이스하키", icon: ARSub11, id: 11 },
  ];
  const subTabsArray5 = [
    { text: "전체", icon: AllIcon, id: 0 },
    { text: "두윈카지노", icon: HIcon1, id: 3 },
    { text: "보타카지노", icon: HIcon2, id: 1 },
    { text: "준비중", icon: HIcon3, id: 4 },
  ];
  const [selectedTab, setSelectedTab] = useState("/freeboard/compose/live-casino");
  const [selectedSubTab, setSelectedSubTab] = useState(0);
  const [page, setPage] = useState(0);

  const [checkedState, setCheckedState] = useState(new Array(3).fill(false));

  const tabsArray = [
    // { text: "전체", icon: Icon1, iconHighlight: IconHighlight1, id: 0, path: "/freeboard/compose/all" },
    {
      text: "라이브카지노",
      icon: Icon2,
      iconHighlight: IconHighlight2,
      id: 1,
      path: "/freeboard/compose/live-casino",
    },
    { text: "스포츠", icon: Icon3, iconHighlight: IconHighlight3, id: 2, path: "/freeboard/compose/slot-game" },
    {
      text: "실시간스포츠",
      icon: Icon12,
      iconHighlight: IconHighlight12,
      id: 11,
      path: "/freeboard/compose/live-sport",
    },
    { text: "슬롯게임", icon: Icon4, iconHighlight: IconHighlight4, id: 3, path: "/freeboard/compose/sports" },
    { text: "호텔카지노", icon: Icon5, iconHighlight: IconHighlight5, id: 4, path: "/freeboard/compose/hotel-casino" },
    { text: "홀덤게임", icon: Icon6, iconHighlight: IconHighlight6, id: 10, path: "/freeboard/compose/hold'em-game" },
    { text: "e-스포츠", icon: Icon7, iconHighlight: IconHighlight7, id: 5, path: "/freeboard/compose/e-sports" },
    { text: "미니게임", icon: Icon8, iconHighlight: IconHighlight8, id: 6, path: "/freeboard/compose/minigame" },
    { text: "키론가상게임", icon: Icon9, iconHighlight: IconHighlight9, id: 7, path: "/freeboard/compose/ar-game" },
    { text: "피싱게임", icon: Icon10, iconHighlight: IconHighlight10, id: 8, path: "/freeboard/compose/fishing-game" },
    { text: "티비벳", icon: Icon11, iconHighlight: IconHighlight11, id: 9, path: "/freeboard/compose/bet" },
  ];

  useEffect(() => {
    scrollRef.current.scroll({
      top: 0,
      behavior: "smooth",
    });

    return () => {};
  }, [selectedTab]);

  return (
    <div
      className="w-full overflow-hidden rounded-20px pt-2px"
      style={{
        height: "810px",
        width: "1110px",
        marginTop: "83px",
        background: "linear-gradient(to right,  #ba76d0, #8865bd)",
        boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.6),inset 0px 2px 0px 0px rgba(255, 255, 255, 0.3)",
      }}
    >
      <div className="w-full h-full flex flex-col rounded-20px overflow-hidden">
        <div
          style={{ background: "linear-gradient(to right,  #9d3bbb, #5423a0)" }}
          className="relative h-60px bg-gray-272726 flex items-center justify-center flex-shrink-0"
        >
          <label className="font-spoqaMedium text-yellow-ad9e8c tracking-tight text-24px text-white font-bold">
            베팅내역
          </label>
          <button className="absolute right-0 mr-22px cursor-pointer z-20 mb-2px" onClick={() => setPopupOpen(false)}>
            <img src={CloseIcon} alt="close_icon" />
          </button>
        </div>

        <div style={{ backgroundColor: "#dfdbfa" }} className="w-full h-full bg-gray-323231 pt-30px pb-40px">
          <div className="px-32px relative">
            <div
              style={{ backgroundColor: "#c2acef", height: "98px", width: "1041px" }}
              className="flex space-x-3px px-5px pt-10px rounded-6px"
            >
              <HorizontalMenu
                itemsArray={tabsArray}
                setSelectedSubTab={setSelectedSubTab}
                setSelectedTabPopup={setSelectedTab}
              />
            </div>

            {selectedTab !== "/freeboard/compose/all" &&
              selectedTab !== "/freeboard/compose/slot-game" &&
              selectedTab !== "/freeboard/compose/live-sport" &&
              selectedTab !== "/freeboard/compose/hold'em-game" &&
              selectedTab !== "/freeboard/compose/e-sports" &&
              selectedTab !== "/freeboard/compose/bet" && (
                <div
                  style={{
                    background: "#5e399a",
                    width: "1041px",
                    paddingBottom: selectedTab.includes("/hotel-casino") && "4px",
                  }}
                  className="mt-10px w-full px-3px py-3px rounded-6px"
                >
                  <SubHorizontalMenu
                    itemsArray={
                      selectedTab === "/freeboard/compose/live-casino"
                        ? subTabsArray1
                        : selectedTab === "/freeboard/compose/sports"
                        ? subTabsArray2
                        : selectedTab === "/freeboard/compose/hotel-casino"
                        ? subTabsArray5
                        : selectedTab === "/freeboard/compose/minigame"
                        ? subTabsArray3
                        : selectedTab === "/freeboard/compose/ar-game"
                        ? subTabsArray4
                        : selectedTab === "/freeboard/compose/fishing-game"
                        ? subTabsArray2
                        : subTabsArray2
                    }
                    isState={selectedSubTab}
                    setState={setSelectedSubTab}
                  />
                </div>
              )}
          </div>

          <div className={`w-full px-26px`}>
            <div
              ref={scrollRef}
              style={{
                height:
                  selectedTab.includes("/all") || selectedTab.includes("/live-casino")
                    ? "400px"
                    : selectedTab.includes("hold'em-game") || selectedTab.includes("/bet")
                    ? "580px"
                    : selectedTab.includes("/slot-game") || selectedTab.includes("/live-sport")
                    ? "580px"
                    : selectedTab.includes("/hotel-casino")
                    ? "480px"
                    : selectedTab.includes("/sports") || selectedTab.includes("/fishing-game")
                    ? "234px"
                    : "400px",
              }}
              className="scroll-div2 overflow-y-auto overflow-x-hidden px-6px mt-10px"
            >
              {selectedTab.includes("/all") ||
              selectedTab.includes("/live-casino") ||
              selectedTab.includes("hold'em-game") ||
              selectedTab.includes("/bet") ? (
                <div style={{ width: "1041px" }} className="pb-10px">
                  <LiveCasinoBetHistory
                    isState={selectedSubTab}
                    setState={setSelectedSubTab}
                    showSub={false}
                    isPopup={true}
                  />
                  <div className="mt-4px">
                    <Pagination page={page} setPage={setPage} />
                  </div>
                </div>
              ) : selectedTab.includes("/sports") ? (
                <div style={{ width: "1041px" }} className="pb-10px">
                  <SlotBetHistory
                    isState={selectedSubTab}
                    setState={setSelectedSubTab}
                    showSub={false}
                    isPopup={true}
                  />
                  <div className="mt-4px">
                    <Pagination page={page} setPage={setPage} />
                  </div>
                </div>
              ) : selectedTab.includes("/slot-game") || selectedTab.includes("/live-sport") ? (
                <div style={{ width: "1041px" }} className="pb-10px">
                  <SportsBetHistory
                    checkedState={checkedState}
                    setCheckedState={setCheckedState}
                    showSub={false}
                    attachedArray={attachedArray}
                    setAttachedArray={setAttachedArray}
                    setPopupOpen={setPopupOpen}
                    isPopup={true}
                  />
                  <div className="mt-4px">
                    <Pagination page={page} setPage={setPage} />
                  </div>
                </div>
              ) : selectedTab.includes("/hotel-casino") ? (
                <div style={{ width: "1041px" }} className="pb-10px">
                  <HotelCasinoBetHistory
                    isState={selectedSubTab}
                    setState={setSelectedSubTab}
                    showSub={false}
                    isPopup={true}
                  />
                  <div className="mt-4px">
                    <Pagination page={page} setPage={setPage} />
                  </div>
                </div>
              ) : selectedTab.includes("/e-sports") ? (
                <div style={{ width: "1041px" }} className="pb-10px">
                  <ESportsBetHistory isPopup={true} />
                </div>
              ) : selectedTab.includes("/minigame") ? (
                <div style={{ width: "1041px" }} className="pb-10px">
                  <MinigameBetHistory
                    isState={selectedSubTab}
                    setState={setSelectedSubTab}
                    showSub={false}
                    attachedArray={attachedArray}
                    setAttachedArray={setAttachedArray}
                    setPopupOpen1={setPopupOpen}
                    isPopup={true}
                  />
                  <div className="mt-4px">
                    <Pagination page={page} setPage={setPage} />
                  </div>
                </div>
              ) : selectedTab.includes("/ar-game") ? (
                <div style={{ width: "1041px" }} className="pb-10px">
                  <ARGameBetHistory
                    isState={selectedSubTab}
                    setState={setSelectedSubTab}
                    showSub={false}
                    isPopup={true}
                  />
                  <div className="mt-4px">
                    <Pagination page={page} setPage={setPage} />
                  </div>
                </div>
              ) : selectedTab.includes("/fishing-game") ? (
                <div style={{ width: "1041px" }} className="pb-10px">
                  <SlotBetHistory
                    isState={selectedSubTab}
                    setState={setSelectedSubTab}
                    showSub={false}
                    isPopup={true}
                  />
                  <div className="mt-4px">
                    <Pagination page={page} setPage={setPage} />
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetHistoryPopup;
