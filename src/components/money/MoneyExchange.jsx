import MyPageTitle from "components/myPage/MyPageTitle";
import Pagination from "components/myPage/Pagination";
import React, { useState } from "react";
import AlertIcon from "../../images/myPage/alert.png";
import BankTable from "./BankTable";
import MoneyExchangeTable from "./tables/MoneyExchangeTable";

const MoneyExchange = () => {
  const [page, setPage] = useState(0);
  const [inputValue, setInputValue] = useState(null);
  const [passwordValue, setPasswordValue] = useState("");
  const [inputClicked, setInputClicked] = useState(null);
  var nf = new Intl.NumberFormat();

  const Title = ({ text }) => (
    <div
      style={{ width: "201px", background: "#9b6bd4" }}
      className="space-y-2 flex-shrink-0 h-44px pl-9px flex items-center rounded-4px"
    >
      <div className=" text-white tracking-tight font-bold text-14px">{text}</div>
    </div>
  );

  return (
    <div className="flex flex-col items-center">
      <MyPageTitle title="보유머니 환전" />

      <div
        style={{ height: "157px", borderColor: "#cccccc" }}
        className="mt-11px w-full rounded-8px border bg-white px-19px pt-18px font-bold"
      >
        <div className="flex items-center h-26px space-x-9px">
          <img src={AlertIcon} alt="" />
          <span className="text-rf04281 font-spoqaMedium text-20px tracking-tight -mt-2px">확인 / 필독사항</span>
        </div>

        <div className="mt-12px flex flex-col space-y-16px text-r444444 tracking-tight  text-14px">
          <span className="h-14px space-y-4px">
            <span className="font-bold mr-3px mt-px">✓</span> 환전 신청 시 현재 보유머니에서 차감되며, 회원님의
            계좌번호로 입금됩니다.
          </span>
          <span className="h-14px space-y-4px">
            <span className="font-bold mr-3px mt-px">✓</span> 입금이 지연될 수 있으니 은행 점검 시간을 확인하신 후 점검
            시간을 피해 신청해 주시기 바랍니다.
          </span>
          <span className="h-14px space-y-4px">
            <span className="font-bold mr-3px mt-px">✓</span> 자세한 문의사항은 고객센터를 이용해 주시기 바랍니다.
          </span>
        </div>
      </div>

      <div
        style={{
          height: "474px",
          background: "linear-gradient(to top, #ededeb 0%, #cb78e6 100%)",
          boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.5)",
        }}
        className="rounded-6px  overflow-hidden p-px mt-20px w-full"
      >
        <div className="h-full w-full rounded-6px overflow-hidden bg-white p-9px">
          <div
            style={{
              height: "128px",
              borderColor: "#5e399a",
              background: "linear-gradient(to right, #9d3bbb 0%, #5423a0 100%)",
            }}
            className="w-full rounded-4px border"
          >
            <div className="text-20px tracking-tight text-white h-19px flex items-center mt-30px ml-55px font-bold">
              환전금액 입력
            </div>
            <div className="text-14px tracking-tight text-eeeeee h-14px flex items-center ml-55px mt-14px">
              환전 신청을 완료하게 되면 보유머니에서 신청한 금액만큼 차감되며
            </div>
            <div className="text-14px tracking-tight text-eeeeee h-14px flex items-center ml-55px mt-3px">
              고객님의 계좌번호로 입금됩니다.
            </div>
          </div>

          <div style={{ width: "906px" }} className="ml-57px mt-27px flex flex-col">
            <div className=" w-full flex space-x-8px ">
              <Title text="현재 보유머니" />
              <div className="w-full h-44px">
                <div
                  className="h-full text-16px pl-11px border-b"
                  style={{ background: "#fff", borderColor: "#e2e2e2", color: "#444444" }}
                >
                  <div className="h-full w-full flex items-center font-bold ml-2px">
                    <span className="text-rf04281">487,240</span>
                    <span>원</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-8px mt-35px">
              <Title text="환전금액 입력" />
              <div className="h-44px w-full overflow-hidden">
                <form autoComplete="off">
                  <input
                    style={{ background: "#fff", borderColor: "#e2e2e2", color: "#444444" }}
                    className="w-full text-14px outline-none pl-11px placeholder-gray-c8c8c8 h-42px border-b mt-2px font-semibold"
                    placeholder="직접 입력시 숫자만 입력해 주세요."
                    value={inputValue !== null ? nf.format(inputValue) : ""}
                    onChange={(e) => setInputValue(e.target.value.replace(/,/g, ""))}
                    onFocus={() => setInputClicked(0)}
                    onBlur={() => setInputClicked(null)}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  />
                </form>
              </div>
            </div>
          </div>

          <div
            style={{ marginLeft: "277px", paddingRight: "115px" }}
            className={`mt-21px flex space-x-5px w-full justify-start`}
          >
            <button
              style={{
                background: "linear-gradient(to top, #ada8a8, #d0d0d0)",
                boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.5)",
              }}
              className="flex items-center justify-center h-42px w-75px rounded-6px"
              onClick={() => setInputValue(inputValue + 10000)}
            >
              <div
                className="flex items-center justify-center h-40px w-73px  rounded-6px  cursor-pointer hover:brightness-125 filter"
                style={{ background: "linear-gradient(to top, #e5e5e5, #ffffff)" }}
              >
                <span className="tracking-tight text-14px text-r444444 -mt-px">1만원</span>
              </div>
            </button>

            <button
              style={{
                background: "linear-gradient(to top, #ada8a8, #d0d0d0)",
                boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.5)",
              }}
              className="flex items-center justify-center h-42px w-75px rounded-6px"
              onClick={() => setInputValue(inputValue + 30000)}
            >
              <div
                className="flex items-center justify-center h-40px w-73px  rounded-6px  cursor-pointer hover:brightness-125 filter"
                style={{ background: "linear-gradient(to top, #e5e5e5, #ffffff)" }}
              >
                <span className="tracking-tight text-14px text-r444444 -mt-px">3만원</span>
              </div>
            </button>

            <button
              style={{
                background: "linear-gradient(to top, #ada8a8, #d0d0d0)",
                boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.5)",
              }}
              className="flex items-center justify-center h-42px w-75px rounded-6px"
              onClick={() => setInputValue(inputValue + 50000)}
            >
              <div
                className="flex items-center justify-center h-40px w-73px  rounded-6px  cursor-pointer hover:brightness-125 filter"
                style={{ background: "linear-gradient(to top, #e5e5e5, #ffffff)" }}
              >
                <span className="tracking-tight text-14px text-r444444 -mt-px">5만원</span>
              </div>
            </button>

            <button
              style={{
                background: "linear-gradient(to top, #ada8a8, #d0d0d0)",
                boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.5)",
              }}
              className="flex items-center justify-center h-42px w-75px rounded-6px "
              onClick={() => setInputValue(inputValue + 100000)}
            >
              <div
                className="flex items-center justify-center h-40px w-73px  rounded-6px  cursor-pointer hover:brightness-125 filter"
                style={{ background: "linear-gradient(to top, #e5e5e5, #ffffff)" }}
              >
                <span className="tracking-tight text-14px text-r444444 -mt-px ">10만원</span>
              </div>
            </button>

            <button
              style={{
                background: "linear-gradient(to top, #ada8a8, #d0d0d0)",
                boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.5)",
              }}
              className="flex items-center justify-center h-42px w-75px rounded-6px "
              onClick={() => setInputValue(inputValue + 300000)}
            >
              <div
                className="flex items-center justify-center h-40px w-73px  rounded-6px  cursor-pointer hover:brightness-125 filter"
                style={{ background: "linear-gradient(to top, #e5e5e5, #ffffff)" }}
              >
                <span className="tracking-tight text-14px text-r444444 -mt-px">30만원</span>
              </div>
            </button>

            <button
              style={{
                background: "linear-gradient(to top, #ada8a8, #d0d0d0)",
                boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.5)",
              }}
              className="flex items-center justify-center h-42px w-75px rounded-6px "
              onClick={() => setInputValue(inputValue + 500000)}
            >
              <div
                className="flex items-center justify-center h-40px w-73px  rounded-6px  cursor-pointer hover:brightness-125 filter"
                style={{ background: "linear-gradient(to top, #e5e5e5, #ffffff)" }}
              >
                <span className="tracking-tight text-14px text-r444444 -mt-px">50만원</span>
              </div>
            </button>

            <button
              style={{
                background: "linear-gradient(to top, #ada8a8, #d0d0d0)",
                boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.5)",
              }}
              className="flex items-center justify-center h-42px w-75px rounded-6px"
              onClick={() => setInputValue(inputValue + 1000000)}
            >
              <div
                className="flex items-center justify-center h-40px w-73px  rounded-6px  cursor-pointer hover:brightness-125 filter"
                style={{ background: "linear-gradient(to top, #e5e5e5, #ffffff)" }}
              >
                <span className="tracking-tight text-14px text-r444444 -mt-px">100만원</span>
              </div>
            </button>

            <button
              style={{
                background: "linear-gradient(to top, #4f3a7a, #e597ff)",
                boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.5)",
              }}
              className="flex items-center justify-center h-42px w-75px rounded-6px "
              onClick={() => setInputValue(0)}
            >
              <div
                className="flex items-center justify-center h-40px w-73px  rounded-6px  cursor-pointer hover:brightness-125 filter"
                style={{ background: "linear-gradient(to top, #6b22ff, #df52ff)" }}
              >
                <span className="tracking-tight text-14px text-white -mt-px text-shadow-5">정정</span>
              </div>
            </button>
          </div>

          <div style={{ width: "906px" }} className="ml-57px mt-42px flex flex-col">
            <div className="flex space-x-8px">
              <Title text="출금 비밀번호" />
              <div className="h-44px w-full overflow-hidden">
                <input
                  style={{ background: "#fff", borderColor: "#e2e2e2", color: "#444444" }}
                  className="w-full text-14px outline-none pl-11px placeholder-gray-c8c8c8 h-42px border-b mt-2px"
                  placeholder="비밀번호를 입력하세요."
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                  onFocus={() => setInputClicked(1)}
                  onBlur={() => setInputClicked(null)}
                  type="password"
                />
                <div
                  style={{ backgroundColor: inputClicked === 1 ? "#a67c52" : "#191817" }}
                  className={`w-full h-3px`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        style={{
          width: "228px",
          background: "linear-gradient(to right, #15cfee, #3197e5)",
          boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
        }}
        className="flex items-center justify-center h-52px rounded-6px  mt-20px hover:brightness-125 filter cursor-pointer ml-3px"
      >
        <span className="tracking-tight text-16px font-bold text-white text-shadow-5">신청하기</span>
      </button>

      <div className="mt-40px w-full">
        <MoneyExchangeTable />
      </div>

      <div className="mt-19px mb-60px">
        <Pagination page={page} setPage={setPage} />
      </div>

      <BankTable />
    </div>
  );
};

export default MoneyExchange;
