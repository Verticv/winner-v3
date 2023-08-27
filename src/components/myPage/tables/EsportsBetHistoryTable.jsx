import React from "react";

const EsportsBetHistoryTable = () => {
  return (
    <div
      style={{ background: "linear-gradient(to top, #ededeb, #cb78e6)" }}
      className="rounded-10px shadow-table overflow-hidden p-px"
    >
      <div className="rounded-10px overflow-hidden">
        <div
          className="text-14px tracking-tight text-gray-ccc2b6 h-55px flex items-center pt-px border-b pr-14px"
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
        <div className="w-full text-r666666 text-14px tracking-tight font-spoqa  items-center flex h-full justify-center bg-white">
          <div className="flex items-center justify-center h-56px">베팅내역이 없습니다.</div>
        </div>
      </div>
    </div>
  );
};

export default EsportsBetHistoryTable;
