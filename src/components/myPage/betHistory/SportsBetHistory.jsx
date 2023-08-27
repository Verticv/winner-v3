import React, { useState } from "react";
import DateSearchBar from "../DateSearchBar";
import SportsBetHistoryPanel from "./SportsBetHistoryPanel";

const SportsBetHistory = ({
  checkedState,
  setCheckedState,
  showSub = true,
  attachedArray,
  setAttachedArray,
  setPopupOpen,
  isPopup = false,
}) => {
  const [isAllSelected, setAllSelected] = useState(false);

  const AllSelectButtonPressed = () => {
    if (isAllSelected === false) {
      setAllSelected(true);
      setCheckedState(Array(3).fill(true));
    } else {
      setAllSelected(false);
      setCheckedState(Array(3).fill(false));
    }
  };

  return (
    <div className="w-full">
      <DateSearchBar isGameResultsSearch={true} isPopup={isPopup} isSports={true} />

      <div
        style={{
          width: isPopup ? "1041px" : "1040px",
          marginLeft: isPopup && "2px",
          marginTop: isPopup ? "10px" : "20px",
        }}
        className="h-full mt-20px rounded-4px"
      >
        <div className="space-y-15px">
          <SportsBetHistoryPanel
            isPopup={!showSub}
            type={0}
            checkedState={checkedState}
            setCheckedState={setCheckedState}
            attachedArray={attachedArray}
            setAttachedArray={setAttachedArray}
            setPopupOpen={setPopupOpen}
          />
          <SportsBetHistoryPanel
            isPopup={!showSub}
            type={1}
            winAmount="+900,000,000"
            checkedState={checkedState}
            setCheckedState={setCheckedState}
            attachedArray={attachedArray}
            setAttachedArray={setAttachedArray}
            setPopupOpen={setPopupOpen}
          />
          <SportsBetHistoryPanel
            isPopup={!showSub}
            type={2}
            checkedState={checkedState}
            setCheckedState={setCheckedState}
            attachedArray={attachedArray}
            setAttachedArray={setAttachedArray}
            setPopupOpen={setPopupOpen}
          />
        </div>
        <div className="mt-20px h-36px w-full flex items-center justify-between">
          <div className="flex space-x-4px ml-px">
            <button
              style={{
                background: "#936cee",
                boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
              }}
              className="flex items-center justify-center w-88px h-36px rounded-6px  hover:filter hover:brightness-125"
              onClick={() => AllSelectButtonPressed()}
            >
              <span className="tracking-tight text-13px text-white text-shadow-5">
                {isAllSelected ? "선택해제" : "전체선택"}
              </span>
            </button>
            <button
              style={{
                background: "#936cee",
                boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
              }}
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
            className="flex items-center justify-center h-36px rounded-6px  p-px hover:filter hover:brightness-125 mr-px"
          >
            <span className="tracking-tight text-13px text-white text-shadow-5">게시판에 내역올리기</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SportsBetHistory;
