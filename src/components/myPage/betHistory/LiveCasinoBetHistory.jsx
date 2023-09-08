import React, { useState } from "react";
import DateSearchBar from "../DateSearchBar";
import SubHorizontalMenu from "./SubHorizontalMenu";
import LiveCasinoBetHistoryTable from "../tables/LiveCasinoBetHistoryTable";
import AllIcon from "../../../images/myPage/betHistory/all.png";
import bet1 from "../../../images/myPage/betHistory/liveCasino/bet1.png";
import bet2 from "../../../images/myPage/betHistory/liveCasino/bet2.png";
import bet3 from "../../../images/myPage/betHistory/liveCasino/bet3.png";
import bet4 from "../../../images/myPage/betHistory/liveCasino/bet4.png";
import bet5 from "../../../images/myPage/betHistory/liveCasino/bet5.png";
import bet6 from "../../../images/myPage/betHistory/liveCasino/bet6.png";
import bet7 from "../../../images/myPage/betHistory/liveCasino/bet7.png";
import bet8 from "../../../images/myPage/betHistory/liveCasino/bet8.png";
import bet9 from "../../../images/myPage/betHistory/liveCasino/bet9.png";
import bet10 from "../../../images/myPage/betHistory/liveCasino/bet10.png";
import bet11 from "../../../images/myPage/betHistory/liveCasino/bet11.png";
import bet12 from "../../../images/myPage/betHistory/liveCasino/bet12.png";
import bet13 from "../../../images/myPage/betHistory/liveCasino/bet13.png";
import bet14 from "../../../images/myPage/betHistory/liveCasino/bet14.png";
import { useLocation } from "react-router-dom";

const subTabsArray = [
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

const LiveCasinoBetHistory = ({ isState, setState, showSub = true, isPopup = false }) => {
  const [checkedState, setCheckedState] = useState(new Array(3).fill(false));
  const [isAllSelected, setAllSelected] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(true);
  const location = useLocation();
  const tableArray = [
    {
      id: 0,
      number: 7193915,
      time: "2021-06-29 15:46:13",
      type: location.pathname.includes("hold'em-game") ? "홀덤" : "에볼루션",
      name: location.pathname.includes("hold'em-game") ? "6-Table" : "바카라",
      amount: "12,000",
      profit: "-12,000",
      status: "패",
    },
    {
      id: 1,
      number: 7193914,
      time: "2021-06-29 15:45:41",
      type: location.pathname.includes("hold'em-game") ? "홀덤" : "에볼루션",
      name: location.pathname.includes("hold'em-game") ? "9-Table" : "바카라",
      amount: "900,000,000",
      profit: "+900,000,000",
      status: "승",
    },
    {
      id: 2,
      number: 7193913,
      time: "2021-06-29 15:45:41",
      type: location.pathname.includes("hold'em-game") ? "토너먼트" : "프레그메틱플레이",
      name: location.pathname.includes("hold'em-game") ? "프리롤" : "블랙잭",
      amount: "800,000",
      profit: "-800,000",
      status: "패",
    },
  ];

  function allSelectButtonPressed() {
    if (isAllSelected) {
      setCheckedState(Array(3).fill(false));
    } else {
      setCheckedState(Array(3).fill(true));
    }
    setAllSelected(!isAllSelected);
  }

  return (
    <div className="w-full">
      {showSub === true && (
        <>
          <div
            style={{
              height: "170px",
              background: "rgba(52, 34, 103, 0.6)",
            }}
            className="mt-10px w-full px-3px py-3px rounded-6px"
          >
            <SubHorizontalMenu itemsArray={subTabsArray} isState={isState} setState={setState} />
          </div>
        </>
      )}

      <DateSearchBar isLeagueSearch={false} isPopup={isPopup} />

      <div className="w-full h-full mt-10px">
        <LiveCasinoBetHistoryTable
          array={tableArray}
          checkedState={checkedState}
          setCheckedState={setCheckedState}
          isPopupOpen={isPopupOpen}
          setPopupOpen={setPopupOpen}
        />
      </div>

      <div className="mt-20px h-36px w-full flex items-center justify-between">
        <div className="flex space-x-4px ml-px">
          <button
            style={{ background: "#936cee", boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)" }}
            className="flex items-center justify-center w-88px h-36px rounded-6px  hover:filter hover:brightness-125"
            onClick={() => allSelectButtonPressed()}
          >
            <span className="tracking-tight text-13px text-white text-shadow-5">
              {isAllSelected ? "선택해제" : "전체선택"}
            </span>
          </button>
          <button
            style={{ background: "#936cee", boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)" }}
            className="flex items-center justify-center w-88px h-36px rounded-6px  hover:filter hover:brightness-125"
          >
            <span className="tracking-tight text-13px text-white text-shadow-5">선택삭제</span>
          </button>
        </div>
        <button
          style={{
            width: "158px",
            background: "linear-gradient(to right, #15cfee, #3197e5)",
            boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
          }}
          className="flex items-center justify-center h-36px rounded-6px hover:filter hover:brightness-125  p-px"
        >
          <span className="tracking-tight text-13px text-white text-shadow-5">게시판에 내역올리기</span>
        </button>
      </div>
    </div>
  );
};

export default LiveCasinoBetHistory;
