import React, { useState } from "react";
import DateSearchBar from "../DateSearchBar";
import SubHorizontalMenu from "./SubHorizontalMenu";
import LiveCasinoBetHistoryTable from "../tables/LiveCasinoBetHistoryTable";
import AllIcon from "../../../images/myPage/betHistory/all.png";
import HIcon1 from "../../../images/myPage/betHistory/h_icon1.png";
import HIcon2 from "../../../images/myPage/betHistory/h_icon2.png";
import HIcon3 from "../../../images/myPage/betHistory/h_icon3.png";

const subTabsArray = [
  { text: "전체", icon: AllIcon, id: 0 },
  { text: "두윈카지노", icon: HIcon1, id: 3 },
  { text: "보타카지노", icon: HIcon2, id: 1 },
  { text: "준비중", icon: HIcon3, id: 4 },
];

const tableArray = [
  {
    id: 0,
    number: 7193915,
    time: "2021-06-29 15:46:13",
    type: "에볼루션",
    name: "바카라",
    amount: "12,000",
    profit: "-12,000",
    status: "패",
  },
  {
    id: 1,
    number: 7193914,
    time: "2021-06-29 15:45:41",
    type: "에볼루션",
    name: "바카라",
    amount: "900,000,000",
    profit: "+900,000,000",
    status: "승",
  },
  {
    id: 2,
    number: 7193913,
    time: "2021-06-29 15:45:41",
    type: "프레그메틱플레이",
    name: "블랙잭",
    amount: "800,000",
    profit: "-800,000",
    status: "패",
  },
];

const HotelCasinoBetHistory = ({ isState, setState, showSub = true, isPopup = false }) => {
  const [checkedState, setCheckedState] = useState(new Array(3).fill(false));
  const [isAllSelected, setAllSelected] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(true);

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
            className="mt-10px h-88px w-full px-3px py-3px rounded-6px"
            style={{ background: "rgba(52, 34, 103, 0.6)", height:'87px' }}
          >
            <SubHorizontalMenu itemsArray={subTabsArray} isState={isState} setState={setState} />
          </div>
          {/* <DateSearchBar isLeagueSearch={false} /> */}
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
          className="flex items-center justify-center h-36px rounded-6px hover:filter hover:brightness-125 p-px mr-px"
        >
          <span className="tracking-tight text-13px text-white text-shadow-5">게시판에 내역올리기</span>
        </button>
      </div>
    </div>
  );
};

export default HotelCasinoBetHistory;
