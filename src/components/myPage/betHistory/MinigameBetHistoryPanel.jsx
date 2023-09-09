import React from "react";
import "../RadioButton.css";
import ClockIcon from "../../../images/myPage/betHistory/clock.png";
import UpIcon from "../../../images/myPage/betHistory/UP.png";
import DownIcon from "../../../images/myPage/betHistory/DOWN.png";
import Example1 from "../../../images/myPage/betHistory/minigame/example1.png";
import Sub3 from "../../../images/myPage/betHistory/minigame/sub3.png";
import Sub4 from "../../../images/myPage/betHistory/minigame/sub4.png";

const MinigameBetHistoryPanel = ({
  id = 0,
  time = "2021-06-29 15:45:05",
  amount = "5,000원",
  ratio = "4.34",
  predictedPrice = "21,715원",
  winAmount = "0",
  ticketNumber = "1891241599",
  checkedState = null,
  setCheckedState = null,
  setPopupOpen = null,
  isPopup = false,
  isAttached = false,
  setAttachedArray = null,
  attachedArray = null,
  team1 = "홀 [200회]",
  team2 = "[200회] 짝",
  choice = "even",
  result = "lose",
  game = "파워사다리",
}) => {
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) => (index === position ? !item : item));
    setCheckedState(updatedCheckedState);
  };

  const addEntryClick = () => {
    setAttachedArray((oldArray) => [...oldArray, id]);
  };

  const handleRemoveItem = (id) => {
    setAttachedArray(attachedArray.filter((item) => item !== id));
  };

  const CardContent = ({ bet, result, choice, team1, team2, stat1, stat2, stat3, hasUp = false, hasDown = false }) => (
    <div className="flex items-center w-full h-54px" style={{ background: "#fff", letterSpacing: "-0.015em" }}>
      <div
        style={{
          width: isAttached ? "127px" : "120px",
          marginLeft: isAttached ? "16px" : "0px",
        }}
        className="-space-y-4px flex items-center justify-center h-54px  text-14px text-r444444 flex-shrink-0"
      >
        <span>200</span>
      </div>
      <div className="flex space-x-4px flex-shrink-0">
        <button
          style={{
            width: isAttached ? "365px" : "285px",
            textShadow: bet === "left" ? "1px 1px 1px #00000070" : "",
            borderColor: bet === "left" ? "#5523a0" : "#bbbbbb",
            background: bet === "left" ? "linear-gradient(to top, #5423a0, #9d3bbb )" : "#fff",
            boxShadow: "0 1px 1px rgba(0,0,0,0.5)",
          }}
          className="flex items-center justify-center h-36px rounded-4px shadow-btn p-px border"
        >
          <div
            style={{
              width: isAttached ? "363px" : "283px",
            }}
            className={`${
              bet === "left" ? "text-white" : "text-r444444"
            } flex items-center justify-between h-34px rounded-3px cursor-pointer px-10px pt-px`}
          >
            <span style={{ width: "231px" }} className="truncate text-left text-14px overflow-ellipsis">
              {team1}
            </span>
            <div className="flex items-center space-x-5px">
              {hasUp && <img className="object-none" src={UpIcon} alt="" />}
              <span className="text-14px">{stat1}</span>
            </div>
          </div>
        </button>

        <button
          style={{
            textShadow: bet === "middle" ? "1px 1px 1px #00000070" : "",
            background: bet === "middle" ? "linear-gradient(to top, #5423a0, #9d3bbb )" : "#ffff",
            borderColor: bet === "middle" ? "#5523a0" : "#bbbbbb",
            boxShadow: "0 1px 1px rgba(0,0,0,0.5)",
          }}
          className={`${
            bet === "middle" ? "text-white" : "text-r444444"
          } border flex group items-center justify-center w-81px h-36px rounded-4px  shadow-btn p-px `}
        >
          <div
            style={{ width: "79px" }}
            className={`${bet === "middle" ? "text-white " : "bg-dark-252525 text-gray-c8c8c8"}
                    pt-px flex items-center justify-center h-34px rounded-3px cursor-pointer`}
          >
            <span className="text-14px">{stat2}</span>
          </div>
        </button>

        <button
          style={{
            width: isAttached ? "365px" : "285px",
            borderColor: bet === "right" ? "#5523a0" : "#bbbbbb",
            background: bet === "right" ? "linear-gradient(to top, #5423a0, #9d3bbb )" : "#fff",
            textShadow: bet === "right" ? "1px 1px 1px #00000070" : "",
            boxShadow: "0 1px 1px rgba(0,0,0,0.5)",
          }}
          className={`flex group items-center justify-center h-36px rounded-4px p-px shadow-btn border`}
        >
          <div
            style={{
              width: isAttached ? "363px" : "283px",
            }}
            className={` ${bet === "right" ? "text-white" : "text-r444444"}  
                      pt-px flex items-center justify-between h-34px rounded-3px  cursor-pointer px-10px`}
          >
            <div className="flex items-center space-x-5px">
              <span className="font-roboto text-14px">{stat3}</span>
              {hasDown && <img className="object-none" src={DownIcon} alt="" />}
            </div>
            <span style={{ width: "231px" }} className="truncate text-14px text-right overflow-ellipsis">
              {team2}
            </span>
          </div>
        </button>
      </div>

      <div className="flex ml-10px text-14px text-center">
        <div style={{ width: isPopup ? "120px" : "130px" }} className="text-r444444">
          {choice === "even" ? "짝" : "우"}
        </div>
        <div
          style={{
            width: isPopup ? "116px" : "108px",
            color: result === "win" ? "#f04281" : result === "lose" ? "" : result === "cancel" ? "#33a1e9" : "",
          }}
        >
          {result === "win" ? "승" : result === "lose" ? "패" : result === "cancel" ? "취소" : "결과없음"}
        </div>
      </div>
    </div>
  );

  const Card = ({ team1, team2, choice, result }) => (
    <div
      className="w-full rounded-4px overflow-hidden shadow-panel border-2 mt-8px"
      style={{ borderColor: "#6852a7", letterSpacing: "-0.015em" }}
    >
      <div
        className="flex items-center justify-between h-54px w-full pl-17px pr-19px"
        style={{ background: "#6852a7" }}
      >
        <div className="flex items-center -mt-3px">
          {game === "파워사다리" ? (
            <img src={Example1} alt="" />
          ) : game === "스피드키노" ? (
            <img style={{ zoom: "0.8", marginLeft: "5px" }} className="object-contain" src={Sub3} alt="" />
          ) : (
            <img style={{ zoom: "0.8", marginLeft: "5px" }} className="object-contain" src={Sub4} alt="" />
          )}

          {game === "파워사다리" ? (
            <span className="ml-4px text-16px font-medium text-white">파워사다리</span>
          ) : game === "스피드키노" ? (
            <span className="ml-6px text-16px font-medium text-white">스피드키노</span>
          ) : (
            <span className="ml-6px text-16px font-medium text-white">키노사다리</span>
          )}
        </div>
        <div className="flex items-center -mt-3px">
          <img src={ClockIcon} alt="" />
          <span className="ml-5px text-16px text-white pt-px">2021-06-29 15:45</span>
        </div>
      </div>
      <div className="flex flex-col w-full border-gray-dddddd" style={{ background: "#fff" }}>
        <CardContent
          bet="right"
          result={result}
          choice={choice}
          team1={team1}
          team2={team2}
          stat1="1.95"
          stat2="VS"
          stat3="1.95"
        />
      </div>
    </div>
  );

  return (
    <div
      className="w-full shadow-table p-px rounded-4px"
      style={{ background: "linear-gradient(to top, #ededeb, #cb78e6)" }}
    >
      <div className="w-full bg-white rounded-6px pb-10px overflow-hidden">
        <div
          className="flex h-54px w-full  text-14px tracking-tight text-eeeeee font-semibold"
          style={{ background: "linear-gradient(to right, #9d3bbb, #5423a0)", letterSpacing: "-0.015em" }}
        >
          <div
            style={{
              width: isAttached === true ? "162px" : "120px",
              marginLeft: isAttached === true ? "0" : "8px",
            }}
            className="h-full flex items-center justify-center ml-10px"
          >
            회차
          </div>
          <div
            style={{ width: isAttached === true ? "315px" : isPopup ? "285px" : "285px" }}
            className="h-full flex items-center justify-center"
          >
            승(홈)
          </div>
          <div
            style={{ width: isAttached === true ? "139px" : isPopup ? "90px" : "89px" }}
            className="h-full flex items-center justify-center"
          >
            VS
          </div>
          <div
            style={{ width: isAttached === true ? "317px" : isPopup ? "282px" : "285px" }}
            className="h-full flex items-center justify-center"
          >
            패(원정)
          </div>
          <div
            style={{ width: isAttached === true ? "66px" : isPopup ? "152px" : "150px" }}
            className="h-full flex items-center justify-center"
          >
            선택
          </div>
          <div
            style={{
              width: isAttached === true ? "58px" : "89px",
              marginRight: isAttached === true ? "25px" : "10px",
            }}
            className="h-full flex items-center justify-center"
          >
            결과
          </div>
        </div>

        <div className="w-full px-8px space-y-10px">
          <Card team1={team1} team2={team2} choice={choice} result={result} />
        </div>

        <div
          className={`flex w-full px-8px ${isPopup ? "mt-11px" : "mt-10px"} space-x-10px`}
          style={{ letterSpacing: "-0.015em" }}
        >
          <table>
            <div
              style={{ backgroundColor: "#eeeeee" }}
              className={`flex w-auto h-36px rounded-4px  text-14px text-r444444 ${isPopup && "pt-px"}`}
            >
              {isAttached === false && (
                <div style={{ width: "45px" }} className="h-full flex items-center justify-center">
                  선택
                </div>
              )}
              {isAttached === false && isPopup === false && (
                <div
                  style={{ width: "116px" }}
                  className="h-full flex items-center justify-center border-l border-white"
                >
                  베팅번호
                </div>
              )}
              <div
                style={{
                  width: isAttached === true ? "212px" : isPopup === false ? "151px" : "178px",
                }}
                className="h-full flex items-center justify-center border-l border-white"
              >
                베팅시간
              </div>
              <div
                style={{
                  width: isAttached === true ? "212px" : isPopup === false ? "131px" : "145px",
                }}
                className="h-full flex items-center justify-center border-l border-white"
              >
                베팅금액
              </div>
              <div
                style={{
                  width: isAttached === true ? "212px" : isPopup === false ? "78px" : "178px",
                }}
                className="h-full flex items-center justify-center border-l border-white"
              >
                배당률
              </div>
              <div
                style={{
                  width: isAttached === true ? "212px" : isPopup === false ? "131px" : "165px",
                }}
                className="h-full flex items-center justify-center border-l border-white"
              >
                예상적중금액
              </div>
              <div
                style={{
                  width: isAttached === true ? "212px" : isPopup === false ? "131px" : "178px",
                }}
                className="h-full flex items-center justify-center border-l border-white"
              >
                당첨금
              </div>
            </div>
            <div
              className={`flex w-auto h-36px font-spoqa text-14px text-r444444 ${isPopup && "pt-2px"}`}
            >
              {isAttached === false && checkedState && (
                <div style={{ width: "45px" }} className="h-full flex items-center justify-center">
                  <input
                    className="radio"
                    type="checkbox"
                    name="radio"
                    checked={checkedState[id]}
                    onChange={() => handleOnChange(id)}
                  />
                </div>
              )}
              {isAttached === false && isPopup === false && (
                <div
                  style={{ width: "116px" }}
                  className="h-full flex items-center justify-center border-l border-gray-2b2b2a"
                >
                  {ticketNumber}
                </div>
              )}
              <div
                style={{
                  width: isAttached === true ? "212px" : isPopup === false ? "151px" : "178px",
                }}
                className="h-full flex items-center justify-center border-l border-gray-2b2b2a"
              >
                {time}
              </div>
              <div
                style={{
                  width: isAttached === true ? "212px" : isPopup === false ? "131px" : "145px",
                }}
                className="h-full flex items-center justify-end border-l border-gray-2b2b2a pr-5px"
              >
                {amount}
              </div>
              <div
                style={{
                  width: isAttached === true ? "212px" : isPopup === false ? "78px" : "178px",
                }}
                className="h-full flex items-center justify-center border-l border-gray-2b2b2a"
              >
                {ratio}
              </div>
              <div
                style={{
                  width: isAttached === true ? "212px" : isPopup === false ? "131px" : "165px",
                }}
                className="h-full flex items-center justify-end border-l border-gray-2b2b2a pr-5px"
              >
                {predictedPrice}
              </div>
              <div
                style={{
                  width: isAttached === true ? "212px" : isPopup === false ? "131px" : "178px",
                }}
                className="h-full flex items-center justify-end border-l border-gray-2b2b2a pr-5px"
              >
                <p className={`${winAmount.includes("+") && "text-red-500"}`}>{winAmount}</p>원
              </div>
            </div>
          </table>

          <div className="flex space-x-6px pr-3px">
            {isAttached === false && (
              <button
                onClick={() => {
                  setPopupOpen && setPopupOpen(false);
                  setAttachedArray && addEntryClick();
                }}
                style={{ width: "110px", background: "#8458cd" }}
                className="flex items-center justify-center h-73px rounded-8px  hover:filter hover:brightness-125 shadow-panelBtn"
              >
                <div
                  style={{ width: "110px", height: "71px" }}
                  className="pt-px flex items-center justify-center rounded-8px cursor-pointer"
                >
                  <span className="text-14px text-white text-shadow-5">내역올리기</span>
                </div>
              </button>
            )}

            {isPopup === false && (
              <button
                onClick={() => setAttachedArray && handleRemoveItem(id)}
                style={{ width: "110px", background: "#646eb6" }}
                className="flex items-center justify-center h-73px rounded-8px  hover:filter hover:brightness-125 shadow-panelBtn"
              >
                <div
                  style={{ width: "110px", height: "71px" }}
                  className="pt-px flex items-center justify-center rounded-8px cursor-pointer"
                >
                  <span className="text-14px text-white text-shadow-5">내역삭제</span>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinigameBetHistoryPanel;
