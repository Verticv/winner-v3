import PopupControls from "components/popups/PopupControls";
import React from "react";
import LiveCasinoHistoryDetailPopup from "../popups/LiveCasinoHistoryDetailPopup";

const LiveCasinoBetHistoryTable = ({ array, checkedState, setCheckedState, isPopupOpen, setPopupOpen }) => {
  function Cells({ items }) {
    const detailButton = (
      <button
        style={{
          height: "30px",
          width: "72px",
          background: "#5d659f",
          boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
          color: "#ededeb",
        }}
        className="rounded-4px text-13px tracking-slight pt-2px flex-shrink-0 hover:filter hover:brightness-125"
      >
        상세보기
      </button>
    );

    const handleOnChange = (position) => {
      const updatedCheckedState = checkedState.map((item, index) => (index === position ? !item : item));
      setCheckedState(updatedCheckedState);
    };
    return items.map((item, index) => (
      <div
        className={` text-r444444 text-14px tracking-slight h-56px w-full  flex items-center border-b border-dark-252525 last:border-b-0 pr-14px`}
        style={{
          background: index % 2 === 0 ? "#fff" : "#f7f7f7",
          borderColor: "#dddddd",
          height: index === items.length - 1 ? "55px" : "56px",
        }}
      >
        <div style={{ width: "92px" }} className="flex items-center justify-center text-center">
          <input type="checkbox" checked={checkedState[item.id]} onChange={() => handleOnChange(item.id)} />
        </div>
        <div style={{ width: "72px" }} className="font-robotoRegular text-center">
          {item.number}
        </div>
        <div style={{ width: "185px" }} className="font-robotoRegular text-center">
          {item.time}
        </div>
        <div style={{ width: "140px" }} className="text-center truncate px-10px">
          {item.type}
        </div>
        <div style={{ width: "118px" }} className="text-center truncate">
          {item.name}
        </div>
        <div style={{ width: "126px" }} className="font-robotoRegular text-right pr-10px">
          {item.amount}
        </div>
        <div
          style={{ width: "128px", color: item.profit.includes("+") ? "#e9441d" : "" }}
          className="font-robotoRegular text-right"
        >
          {item.profit}
        </div>
        <div style={{ width: "88px", color: item.status === "승" ? "#f04281" : "" }} className="text-center">
          {item.status}
        </div>
        <div style={{ width: "72px" }} className="text-center ml-px">
          <PopupControls buttonChild={detailButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
            <LiveCasinoHistoryDetailPopup setPopupOpen={setPopupOpen} />
          </PopupControls>
        </div>
      </div>
    ));
  }

  return (
    <div
      style={{ background: "linear-gradient(to top, #ededeb, #cb78e6)" }}
      className="rounded-10px shadow-table overflow-hidden p-px"
    >
      <div className="rounded-10px overflow-hidden">
        <div
          className="text-14px tracking-slight text-gray-ccc2b6 h-55px flex items-center pt-px border-b pr-14px font-semibold"
          style={{
            background: "linear-gradient(to right, #9d3bbb, #5423a0)",
            color: "#eeeeee",
            borderColor: "#dddddd",
          }}
        >
          <div style={{ width: "92px" }} className="text-center">
            선택
          </div>
          <div style={{ width: "72px" }} className="text-center">
            베팅번호
          </div>
          <div style={{ width: "185px" }} className="text-center">
            베팅시간
          </div>
          <div style={{ width: "140px" }} className="text-center">
            게임종류
          </div>
          <div style={{ width: "118px" }} className="text-center">
            게임구분
          </div>
          <div style={{ width: "126px" }} className="text-center pr-22px">
            베팅금액
          </div>
          <div style={{ width: "128px" }} className="text-center">
            적중/손실금액
          </div>
          <div style={{ width: "88px" }} className="text-center">
            상태
          </div>
          <div style={{ width: "72px" }} className="text-center ml-px">
            보기
          </div>
        </div>
        <div className="w-full text-585858 text-14px tracking-slight">
          <Cells items={array} />
        </div>
      </div>
    </div>
  );
};

export default LiveCasinoBetHistoryTable;
