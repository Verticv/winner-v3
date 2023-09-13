import React, { useState } from "react";
import MyPageTitle from "./MyPageTitle";
import AlertIcon from "../../images/myPage/alert.png";
import PointsApplyPopup from "components/popups/PointsApplyPopup";
import PopupControls from "components/popups/PopupControls";
const PointsApply = () => {
  const [isPopupOpen, setPopupOpen] = useState(true);
  const [inputValue, setInputValue] = useState(null);
  // const [inputClicked, setInputClicked] = useState(false)
  // const [selectedInput, setSelectedInput] = useState()
  var nf = new Intl.NumberFormat();

  const Title = ({ text }) => (
    <div
      style={{ width: "140px", background: "#9b6bd4" }}
      className="space-y-14px flex-shrink-0  h-44px pl-10px flex items-center rounded-4px"
    >
      <div className=" text-white text-14px tracking-tight font-semibold">{text}</div>
    </div>
  );

  const PopupButton = (
    <button
      style={{ width: "212px", background: "linear-gradient(to right, #15cfee, #3197e5)" }}
      className="flex items-center justify-center h-52px rounded-6px p-px hover:filter hover:brightness-125 shadow-link"
    >
      <span className=" tracking-tight font-bold text-16px text-white text-shadow-5">신청하기</span>
    </button>
  );

  return (
    <div className="w-full flex flex-col items-center">
      <MyPageTitle title="포인트전환신청" />

      <div
        style={{ height: "157px", borderColor: "#cccccc" }}
        className="mt-11px w-full rounded-8px border bg-white px-19px pt-18px font-semibold"
      >
        <div className="flex items-center h-26px space-x-9px">
          <img src={AlertIcon} alt="" />
          <span className="text-rf04281 font-spoqaMedium text-20px tracking-tight -mt-2px">확인 / 필독사항</span>
        </div>

        <div className="mt-12px flex flex-col space-y-16px text-r444444 tracking-tight  text-14px">
          <span className="h-14px space-y-4px">
            <span className="font-semibold mr-3px mt-px">✓</span> 포인트 전환 시 보유머니로 충전됩니다.
          </span>
          <span className="h-14px space-y-4px">
            <span className="font-semibold mr-3px mt-px">✓</span> 최소 10,000P 이상 신청 가능합니다.
          </span>
          <span className="h-14px space-y-4px">
            <span className="font-semibold mr-3px mt-px">✓</span> 자세한 문의사항은 고객센터를 이용해 주시기 바랍니다.
          </span>
        </div>
      </div>

      <div
        className="mt-20px w-full shadow-table p-px rounded-6px"
        style={{ background: "linear-gradient(to top, #ededeb, #cb78e6)", height: "577px" }}
      >
        <div className="bg-white p-9px rounded-6px flex flex-col  w-full h-full">
          <div
            style={{
              height: "128px",
              background: "linear-gradient(to right, #9d3bbb, #5423a0)",
              borderColor: "#5e399a",
            }}
            className="w-full rounded-4px flex border"
          >
            <div style={{ marginLeft: "114px" }} className="pt-34px flex flex-col tracking-tight">
              <span className="text-20px h-19px text-white font-semibold">전환 포인트 입력</span>
              <span className="text-14px text-eeeeee mt-15px">
                <span>현재 포인트가 보유머니로 전환되며, 최소 </span>
                <span className="ml-2px font-semibold" style={{ color: "#fee300" }}>
                  10,000
                </span>
                P 부터 신청 가능합니다.
              </span>
            </div>
          </div>

          <div style={{ width: "785px", marginLeft: "117px" }} className="mt-37px flex flex-col space-y-39px">
            <div className="flex space-x-10px items-center">
              <Title text="현재 잔여 포인트" />
              <div className="w-full h-44px">
                <div
                  className="h-full text-16px pl-9px border-b"
                  style={{ background: "#fff", borderColor: "#e2e2e2", color: "#444444" }}
                >
                  <div className="h-full w-full flex items-center font-semibold">
                    <span className="text-rf04281">278</span>
                    <span>P</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-10px">
              <Title text="전환 예정 포인트" />
              <div className="h-44px w-full">
                <div
                  className="h-full text-16px  pl-9px border-b"
                  style={{ background: "#fff", borderColor: "#e2e2e2", color: "#444444" }}
                >
                  <div className="h-full w-full flex items-center font-semibold">
                    <span>0</span>
                    <span>P</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-10px">
              <Title text="전환 후 잔여 포인트" />
              <div className="h-44px  w-full">
                <div
                  className="h-full  text-16px pl-9px border-b"
                  style={{ background: "#fff", borderColor: "#e2e2e2", color: "#444444" }}
                >
                  <div className="h-full w-full flex items-center font-semibold">
                    <span>0</span>
                    <span>P</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-10px">
              <Title text="전환 포인트 입력" />
              <div className="h-44px w-full overflow-hidden">
                <input
                  style={{ background: "#fff", borderColor: "#e2e2e2", color: "#444444" }}
                  className={`w-full text-14px outline-none pl-9px placeholder-gray-c8c8c8 h-42px border-b mt-2px tracking-tight ${
                    inputValue !== null && "font-semibold"
                  }`}
                  placeholder="직접 입력시 숫자만 입력해 주세요."
                  value={inputValue !== null ? nf.format(inputValue) : ""}
                  onChange={(e) => setInputValue(e.target.value.replace(/,/g, ""))}
                  // onFocus={() => setInputClicked(true)}
                  // onBlur={() => setInputClicked(false)}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
              </div>
            </div>
          </div>

          <div style={{ paddingRight: "117px" }} className={`mt-20px flex space-x-5px w-full justify-end`}>
            <button
              className="flex items-center justify-center h-42px w-75px p-px  rounded-6px"
              style={{
                background: "linear-gradient(to top, #ada8a8, #d0d0d0)",
                boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.5)",
              }}
              onClick={() => setInputValue(inputValue + 1000)}
            >
              <div
                className="flex items-center justify-center h-40px w-73px  rounded-5px  cursor-pointer hover:filter hover:brightness-125"
                style={{ background: "linear-gradient(0deg, #e5e5e5, #ffffff)" }}
              >
                <span className="tracking-tight text-14px text-r444444 font-semibold">1천P</span>
              </div>
            </button>

            <button
              className="flex items-center justify-center h-42px w-75px p-px rounded-6px"
              style={{
                background: "linear-gradient(to top, #ada8a8, #d0d0d0)",
                boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.5)",
              }}
              onClick={() => setInputValue(inputValue + 5000)}
            >
              <div
                className="flex items-center justify-center h-40px w-73px  rounded-5px  cursor-pointer hover:filter hover:brightness-125"
                style={{ background: "linear-gradient(0deg, #e5e5e5, #ffffff)" }}
              >
                <span className="tracking-tight text-14px text-r444444 font-semibold">5천P</span>
              </div>
            </button>

            <button
              className="flex items-center justify-center h-42px w-75px p-px rounded-6px"
              style={{
                background: "linear-gradient(to top, #ada8a8, #d0d0d0)",
                boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.5)",
              }}
              onClick={() => setInputValue(inputValue + 10000)}
            >
              <div
                className="flex items-center justify-center h-40px w-73px  rounded-5px  cursor-pointer hover:filter hover:brightness-125"
                style={{ background: "linear-gradient(0deg, #e5e5e5, #ffffff)" }}
              >
                <span className="tracking-tight text-14px text-r444444 font-semibold">1만P</span>
              </div>
            </button>

            <button
              className="flex items-center justify-center h-42px w-75px p-px rounded-6px"
              style={{
                background: "linear-gradient(to top, #ada8a8, #d0d0d0)",
                boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.5)",
              }}
              onClick={() => setInputValue(inputValue + 50000)}
            >
              <div
                className="flex items-center justify-center h-40px w-73px  rounded-5px  cursor-pointer hover:filter hover:brightness-125"
                style={{ background: "linear-gradient(0deg, #e5e5e5, #ffffff)" }}
              >
                <span className="tracking-tight text-14px text-r444444 font-semibold">5만P</span>
              </div>
            </button>

            <button
              className="flex items-center justify-center h-42px w-75px p-px rounded-6px"
              style={{
                background: "linear-gradient(to top, #ada8a8, #d0d0d0)",
                boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.5)",
              }}
              onClick={() => setInputValue(inputValue + 100000)}
            >
              <div
                className="flex items-center justify-center h-40px w-73px  rounded-5px  cursor-pointer hover:filter hover:brightness-125"
                style={{ background: "linear-gradient(0deg, #e5e5e5, #ffffff)" }}
              >
                <span className="tracking-tight text-14px text-r444444 font-semibold">10만P</span>
              </div>
            </button>

            <button
              className="flex items-center justify-center h-42px w-75px p-px rounded-6px"
              style={{
                background: "linear-gradient(to top, #ada8a8, #d0d0d0)",
                boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.5)",
              }}
              onClick={() => setInputValue(inputValue + 500000)}
            >
              <div
                className="flex items-center justify-center h-40px w-73px  rounded-5px  cursor-pointer hover:filter hover:brightness-125"
                style={{ background: "linear-gradient(0deg, #e5e5e5, #ffffff)" }}
              >
                <span className="tracking-tight text-14px text-r444444 font-semibold">50만P</span>
              </div>
            </button>

            <button
              className="flex items-center justify-center h-42px w-75px p-px rounded-6px"
              style={{
                background: "linear-gradient(to top, #ada8a8, #d0d0d0)",
                boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.5)",
              }}
              onClick={() => setInputValue(inputValue + 1000000)}
            >
              <div
                className="flex items-center justify-center h-40px w-73px  rounded-5px  cursor-pointer hover:filter hover:brightness-125"
                style={{ background: "linear-gradient(0deg, #e5e5e5, #ffffff)" }}
              >
                <span className="tracking-tight text-14px text-r444444 font-semibold">100만P</span>
              </div>
            </button>

            <button
              className="flex items-center justify-center h-42px w-75px p-px rounded-6px"
              style={{
                background: "linear-gradient(to top, #4f3a7a, #e597ff)",
                boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.5)",
              }}
              onClick={() => setInputValue(null)}
            >
              <div
                className="flex items-center justify-center h-40px w-73px  rounded-5px cursor-pointer hover:filter hover:brightness-125 text-shadow-5"
                style={{ background: "linear-gradient(to top, #6b22ff, #df52ff)" }}
              >
                <span className="tracking-tight text-14px text-white font-semibold">정정</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-20px mb-60px">
        <PopupControls buttonChild={PopupButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
          <PointsApplyPopup setPopupOpen={setPopupOpen} />
        </PopupControls>
      </div>
    </div>
  );
};

export default PointsApply;
