import React, { useState } from "react";
import CloseIcon from "../../images/popups/close_icon.png";
import AlertIcon from "../../images/myPage/alert.png";
import { useHistory } from "react-router";

const PointsApplyPopup = ({ setPopupOpen, isQuickMenu = false }) => {
  const history = useHistory();
  var nf = new Intl.NumberFormat();
  const [inputValue, setInputValue] = useState(null);

  return (
    <div
      className="flex flex-col overflow-hidden shadow-popup relative"
      style={{
        width: "609px",
        height: "519px",
        borderRadius: "20px",
        background: "linear-gradient(to right, #b870cd, #9068bf)",
        paddingTop: "2px",
      }}
    >
      <div
        style={{
          borderRadius: "20px",
          background: "linear-gradient(to right, #9b3aba, #5925a2)",
        }}
        className="h-full w-full flex flex-col  overflow-hidden "
      >
        <div className="relative pt-20px pb-20px h-67px flex items-center justify-center flex-shrink-0 rounded-t-10px">
          <label className="font-bold text-white text-24px">포인트 전환 신청</label>
          <button className="absolute top-22px right-22px cursor-pointer z-20" onClick={() => setPopupOpen(false)}>
            <img src={CloseIcon} alt="close_icon" />
          </button>
        </div>
        <div className="w-full h-full pt-40px pl-34px pr-32px pb-38px bg-white" style={{ background: "#dfdbfa" }}>
          <div
            className="w-full rounded-8px border bg-white px-19px pt-19px pb-15px"
            style={{ borderColor: "#bbbbbb" }}
          >
            <div className="flex items-center h-26px space-x-9px">
              <img src={AlertIcon} alt="" />
              <span
                className="text-20px text-rf04281 tracking-tight mt-px font-bold"
                style={{ WebkitTextStroke: "0.2px", letterSpacing: "-0.1em" }}
              >
                확인 / 필독사항
              </span>
            </div>
            <div
              className="mt-14px flex flex-col space-y-6px text-r666666 tracking-tight  text-16px"
              style={{ letterSpacing: "-0.1em" }}
            >
              <span className="font-bold">
                <span className="font-bold mr-4px">✓</span> 포인트 전환 시 보유머니로 충전됩니다.
              </span>
              <span className="font-bold">
                <span className="font-bold mr-4px">✓</span> 최소 10,000P 이상 신청 가능합니다.
              </span>
              <span className="font-bold">
                <span className="font-bold mr-4px">✓</span> 자세한 문의사항은 고객센터를 이용해 주시기 바랍니다.
              </span>
            </div>
          </div>
          <div className="flex items-center text-16px tracking-tight mt-36px font-bold">
            <span style={{ color: "#444444" }}>사용 가능한 포인트 : </span>
            <span className="text-rf04281 ml-4px font-bold">278</span>
            <span style={{ color: "#444444" }}>P</span>
          </div>
          <div className="h-64px w-full rounded-8px mt-14px flex items-center" style={{ background: "#5e399a" }}>
            <span style={{ marginLeft: "65px" }} className="text-14px tracking-tight  text-eeeeee leading-none">
              전환포인트 입력
            </span>
            <input
              placeholder="0"
              style={{ width: "311px", borderColor: "#682aa7", color:'#666666' }}
              className="flex-shrink-0 outline-none h-42px rounded-6px border  px-10px  text-14px tracking-tight text-r666666  ml-9px"
              value={inputValue !== null ? nf.format(inputValue) : ""}
              onChange={(e) => setInputValue(e.target.value.replace(/,/g, ""))}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
          </div>
          <div className="flex w-full mt-20px space-x-10px">
            <button
              className="flex items-center justify-center h-52px rounded-full hover:filter hover:brightness-125 shadow-panelBtn cursor-pointer"
              style={{ background: "linear-gradient(to right, #df52ff, #6b22ff)", width: "268px" }}
            >
              <span className=" tracking-tight text-16px text-white text-shadow-5 pt-2px">포인트전환</span>
            </button>
            <button
              className="flex items-center justify-center h-52px rounded-full  hover:filter hover:brightness-125 shadow-panelBtn cursor-pointer"
              onClick={() =>
                isQuickMenu
                  ? history.push("/mypage/points/points-apply", setPopupOpen(false))
                  : history.push("/mypage/points/points-transaction-history", setPopupOpen(false))
              }
              style={{ background: "#9d3bbb", width: "268px" }}
            >
              <span className="tracking-tight text-16px text-white text-shadow-5 pt-2px">상세내역</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointsApplyPopup;
