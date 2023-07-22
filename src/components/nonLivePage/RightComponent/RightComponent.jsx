import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import PoupUpComponent from "components/nonLivePage/PoupUpComponent/PoupUpComponent";
import icon from "../../../images/nonLivePage/RightComponent/icon.png";
import icon1 from "../../../images/nonLivePage/RightComponent/Icon1.png";
import icon2 from "../../../images/nonLivePage/RightComponent/Icon2.png";
import icon2Active from "../../../images/nonLivePage/RightComponent/icon2-active.png";
import icon3 from "../../../images/nonLivePage/RightComponent/Icon3.png";
import icon4 from "../../../images/nonLivePage/RightComponent/refresh-icon.png";
import icon5 from "../../../images/nonLivePage/RightComponent/Icon4.png";
import img from "../../../images/nonLivePage/RightComponent/Icon6.png";
import icon7 from "../../../images/nonLivePage/RightComponent/X.png";
import CustomDropdown from "./CustomDropdown";
import PopupControls from "components/popups/PopupControls";
import { useDispatch, useSelector } from "react-redux";
import RightComponentCard from "./RightComponentCard";
import CheckBoxComponent from "./CheckBoxComponent";
import RightComponentCard1 from "./RightComponentCard1";
import { deleteAllBetSlipCards } from "reducers/nonLive-reducer";

const RightComponent = () => {
  const dispatch = useDispatch();
  const [time, setTime] = useState(Date.now());
  const [isBetSlipActive, setIsBetSlipActive] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showCards, setShowCards] = useState(0);
  const [active, setActive] = useState(false);

  const betSlipData = useSelector((state) => state?.nonLive?.betSlip?.data);
  console.log("RightComponent state :>> ", betSlipData);

  console.log("isPopupOpen :>> ", isPopupOpen);

  console.log("isBetSlipActive :>> ", isBetSlipActive);

  const dateFormat = "yyyy-MM-dd";
  const dateFormat1 = "H:mm:ss";

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // TODO: add the active icons

  const increaseCounterButton = (number) => {
    setInputValue((prev) => {
      const newValue = prev?.replaceAll(",", "");
      const formattedValue = Number(Number(newValue) + number).toLocaleString(
        undefined,
        {
          minimumFractionDigits: 0,
        }
      );
      return formattedValue;
    });
  };

  const onChangeHandler = (e) => {
    const newValue = e.target.value.replaceAll(",", "");
    const formattedValue = Number(newValue).toLocaleString(undefined, {
      minimumFractionDigits: 0,
    });
    setInputValue(formattedValue);
  };

  const BetSlipButton = () => {
    return (
      <div
        onClick={() => setIsBetSlipActive(true)}
        style={{
          cursor: "pointer",
          background: isBetSlipActive
            ? "linear-gradient(to top, #7452aa, #e597ff)"
            : "linear-gradient(to top, #a281cf, #f0d3ff)",
          width: "156px",
          height: "46px",
        }}
        className="p-px -ml-px"
      >
        <div
          onClick={() => setShowCards(0)}
          style={{
            background: isBetSlipActive
              ? "linear-gradient(to top, #6b22ff, #df52ff)"
              : "linear-gradient(to top, #ccc4ff, #ffd9f5)",
            width: "154px",
            height: "44px",
          }}
          className="flex items-center"
        >
          <img
            className="ml-21px"
            src={isBetSlipActive ? icon1 : icon1}
            alt="icon"
          />
          <p
            style={{ color: isBetSlipActive ? "white" : "#5e399a" }}
            className="ml-1px -mt-3px text-14px font-MalgunGothicBold tracking-tight"
          >
            베팅슬립
          </p>
          <div
            style={{
              background: isBetSlipActive ? "#f4ecce" : "#f7efd1",
              width: "20px",
              height: "20px",
              boxShadow: "1px 1.732px 3px 0px rgba(0, 0, 0, 0.4)",
            }}
            className="rounded-full p-px ml-4px "
          >
            <div
              style={{
                background: isBetSlipActive ? "#f04281" : "#682aa7",
                height: "18px",
              }}
              className="flex items-center justify-center rounded-full"
            >
              <p className="ml-6px -mt-2px mr-5px text-12px text-white font-MalgunGothicBold">
                2
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const BettingHistoryButton = () => {
    return (
      <div
        onClick={() => setIsBetSlipActive(false)}
        style={{
          cursor: "pointer",
          background: isBetSlipActive
            ? "linear-gradient(to top, #7452aa, #e597ff)"
            : "linear-gradient(to top, #a281cf, #f0d3ff)",
          width: "155px",
          height: "46px",
        }}
        className="p-px -ml-px z-10"
      >
        <div
          onClick={() => setShowCards(1)}
          style={{
            background: isBetSlipActive
              ? "linear-gradient(to top, #ccc4ff, #ffd9f5)"
              : "linear-gradient(to top, #6b22ff, #df52ff)",
            width: "153px",
            height: "44px",
          }}
          className="flex items-center"
        >
          <img
            className={`${isBetSlipActive ? "ml-26px" : "ml-22px"}`}
            // "ml-26px"
            // "ml-22px"
            src={isBetSlipActive ? icon2 : icon2Active}
            alt="icon"
          />
          <p
            style={{ color: isBetSlipActive ? "#5e399a" : "white" }}
            className="ml-7px -mt-3px text-14px font-MalgunGothicBold tracking-tight"
          >
            베팅내역
          </p>
          <div
            style={{
              background: isBetSlipActive ? "#f4ecce" : "#f7efd1",
              width: "20px",
              height: "20px",
              boxShadow: "1px 1.732px 3px 0px rgba(0, 0, 0, 0.4)",
            }}
            className="rounded-full p-px ml-3px mr-21px"
          >
            <div
              style={{
                background: isBetSlipActive ? "#682aa7" : "#f04281",
                height: "18px",
              }}
              className="flex items-center rounded-full"
            >
              <p className="ml-6px -mt-2px mr-6px text-12px text-white font-MalgunGothicBold">
                2
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const placeBetButton = (
    <button
      // onClick={() => setIsPopupOpen(true)}
      style={{
        background: "linear-gradient(to top, #911c5c, #f04281)",
        width: "286px",
        height: "44px",
        borderRadius: "5px",
      }}
      className="flex items-center justify-center "
    >
      <img
        style={{ textShadow: "1px 1.732px 3px 0px rgba(0, 0, 0, 0.4)" }}
        className="mr-4px mt-4px"
        src={icon5}
        alt="icon"
      />
      <p
        style={{
          color: "#ffffff",
          textShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
        }}
        className="mb-2px mr-1px mt-4px font-MalgunGothicBold tracking-tight  text-15px"
      >
        베팅하기
      </p>
    </button>
  );
  return (
    <>
      <div
        style={{
          background: "linear-gradient(to bottom, #cb78e6, #ffffff)",
          width: "310px",
          boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.8)",
        }}
        className="rounded-md p-px mt-10px "
      >
        <div
          style={{
            background: "linear-gradient(to right, #9d3bbb, #5423a0)",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
          className="flex items-center justify-between h-39px "
        >
          <div>
            <p
              style={{ color: "#eeeeee" }}
              className="ml-8px mt-15px mb-14px text-13px font-malgun"
            >
              {format(time, dateFormat, { locale: ko })}(월){" "}
              {format(time, dateFormat1, { locale: ko })}
            </p>
          </div>
          <div
            style={{
              background:
                "linear-gradient(to top, #4f3a7a, #a05bf6 50%, #f0d3ff)",
              width: "30px",
              borderRadius: "4px",
              boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.6)",
            }}
            className="p-px mr-5px mt-4px mb-5px"
          >
            <div
              onClick={() => setShowSettings((prev) => !prev)}
              style={{
                cursor: "pointer",
                background: "linear-gradient(to top, #ccc4ff, #ffd9f5)",
                height: "28px",
                borderRadius: "3px",
              }}
              className="flex items-center justify-center"
            >
              <img className="mb-px" src={icon} alt="img" />
            </div>
          </div>
        </div>
        <div className="flex">
          <BetSlipButton />
          <BettingHistoryButton />
        </div>
        {/* {showCards && <RightComponentCard />} */}
        {/* <div
        style={{
          background: "#7553ab",
          width: "310px",
          height: "73px",
          borderBottomLeftRadius: "4px",
          borderBottomRightRadius: "4px",
        }}
        className="p-px z-20 -ml-px -mt-px"
      >
        <div
          style={{
            background: "#5e399a",
            height: "71px",
            borderBottomLeftRadius: "4px",
            borderBottomRightRadius: "4px",
          }}
          className="flex items-center justify-center"
        >
          <p className="text-12px text-white mr-3px mt-31px mb-30px tracking-tight font-malgun">
            베팅내역이 없습니다.
          </p>
        </div>
      </div> */}

        {showSettings && <CheckBoxComponent />}
        {showCards === 0 ? (
          <>
            <div
              style={{
                background: "#eeeeee",
                height: "39px",
                borderColor: "#dddddd",
              }}
              className="flex items-center justify-between border-b border-t "
            >
              <div
                style={{
                  background: "#aaaaaa",
                  width: "88px",
                  height: "29px",
                  borderRadius: "4px",
                }}
                className="flex items-center justify-between p-px ml-4px mt-5px mb-5px"
              >
                <CustomDropdown />
              </div>
              <div
                onClick={() => {
                  dispatch(deleteAllBetSlipCards());
                }}
                className="cursor-pointer flex items-center mr-11px"
              >
                <img className="mr-px" src={icon3} alt="icon" />
                <p
                  style={{ color: "#666666", letterSpacing: "-0.031em" }}
                  className="ml-2px -mt-px -mr-px text-12px font-MalgunGothicBold"
                >
                  전체삭제
                </p>
              </div>
            </div>
            {betSlipData.length > 0 && (
              <div
                style={{
                  background: "#ffffff",
                  width: "308px",
                  height: "auto",
                }}
                className=" pt-2px"
              >
                {betSlipData.map((data, index) => (
                  <RightComponentCard1 teamsData={data} />
                ))}
              </div>
            )}

            {active && (
              <>
                <div
                  style={{
                    background: "#ffffff",
                    width: "308px",
                    height: "70px",
                  }}
                  className="flex items-center"
                >
                  <div
                    style={{
                      background: "#5e399a",
                      width: "304px",
                      borderRadius: "4px",
                    }}
                    className="p-px ml-2px mt-2px mr-2px mb-2px"
                  >
                    <div
                      style={{
                        background:
                          "linear-gradient(to right, #df52ff, #6b22ff)",
                        borderRadius: "4px",
                      }}
                      className="items-center h-64px"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center ml-7px">
                          <img className="mt-11px" src={img} alt="icon" />
                          <p className="text-12px text-white mt-10px ml-3px font-MalgunGothicBold tracking-tight">
                            베팅이 수락되었습니다.
                          </p>
                        </div>
                        <div className="flex mr-7px -mt-4px">
                          <img
                            onClick={() => setActive(false)}
                            className="cursor-pointer"
                            src={icon7}
                            alt="icon"
                          />
                        </div>
                      </div>
                      <div className="flex items-center">
                        <p className="text-12px text-white mr-px mb-10px ml-6px font-MalgunGothicBold tracking-tight">
                          티켓번호
                        </p>
                        <p
                          style={{ color: "#ffd98b" }}
                          className="text-12px mb-14px mt-6px ml-4px font-MalgunGothicBold tracking-tight"
                        >
                          4004791
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div
              style={{ background: "#5e399a" }}
              className="flex items-center h-70px "
            >
              <div className="items-center mb-4px">
                <div className="mt-2px -mb-4px">
                  <p
                    style={{ color: "#ffffff", marginLeft: "88px" }}
                    className="text-12px tracking-tight font-malgun"
                  >
                    선택하신 경기가 없습니다.
                  </p>
                </div>
                <div>
                  <p
                    style={{ color: "#ffffff" }}
                    className="ml-61px tracking-tight text-12px font-malgun"
                  >
                    원하시는 경기의 배당을 선택주세요.
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{ background: "#eeeeee", height: "94px" }}
              className="items-center"
            >
              <div
                style={{ height: "48px", borderColor: "#dddddd" }}
                className="flex items-center justify-between border-b border-t"
              >
                <p
                  style={{ color: "#444444" }}
                  className="ml-9px -mt-2px text-12px font-MalgunGothicBold tracking-tight"
                >
                  보유금액
                </p>
                <p
                  style={{ color: "#33a1e9" }}
                  className="mr-11px text-13px font-MalgunGothicBold tracking-tight"
                >
                  3,522,170
                </p>
              </div>
              <div
                style={{ height: "46px" }}
                className="flex items-center justify-between"
              >
                <div>
                  <p
                    style={{ color: "#444444" }}
                    className="ml-9px -mt-2px text-12px font-MalgunGothicBold tracking-tight"
                  >
                    베팅금액
                  </p>
                </div>
                <div className="flex items-center">
                  <div
                    style={{
                      background:
                        "linear-gradient(to top, #4f3a7a, #a05bf6 50%, #f0d3ff)",
                      width: "30px",
                      height: "30px",
                      position: "absolute",
                      borderRadius: "4px",
                    }}
                    className="p-px mt-1px mb-1px ml-2px"
                  >
                    {/* // changed from div to button, check the design */}
                    <div
                      onClick={() =>
                        setInputValue(
                          Number(0).toLocaleString(undefined, {
                            minimumFractionDigits: 0,
                          })
                        )
                      }
                      style={{
                        background: "linear-gradient(to top, #ccc4ff, #ffd9f5)",
                        borderRadius: "4px",
                      }}
                      className="flex items-center justify-center "
                    >
                      <img
                        className="ml-5px mr-5px mt-4px mb-5px"
                        src={icon4}
                        alt="icon"
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#aaaaaa",
                      width: "189px",
                      height: "34px",
                      borderRadius: "4px",
                    }}
                    className="p-px mt-6px mb-6px mr-10px"
                  >
                    <div
                      style={{
                        background: "#ffffff",
                        width: "187px",
                        borderRadius: "4px",
                      }}
                      className="flex items-center justify-between h-32px"
                    >
                      <input
                        style={{
                          color: "#f04281",
                          textAlign: "right",
                          // TODO: add padding right
                          borderRadius: "4px",
                          fontSize: "12px",
                          outline: "0px",
                        }}
                        className="bg-white w-full tracking-tight font-MalgunGothicBold -mt-2px pr-8px"
                        type="text"
                        onChange={onChangeHandler}
                        value={inputValue}
                      />
                    </div>
                  </div>
                </div>
                {/* <div
            style={{
              background: "#aaaaaa",
              width: "189px",
            }}
            className="rounded-lg p-px mt-6px mb-6px mr-10px"
          >
            <div
              style={{ background: "#ffffff" }}
              className="flex items-center justify-between rounded-lg h-32px"
            >
              <div
                style={{
                  background: "linear-gradient(to top, #4f3a7a, #f0d3ff)",
                  width: "30px",
                }}
                className="rounded-lg p-px mt-1px mb-1px ml-1px"
              >
                <div
                  style={{
                    background: "linear-gradient(to top, #ccc4ff, #ffd9f5)",
                  }}
                  className="flex items-center justify-center rounded-lg"
                >
                  <img
                    className="ml-5px mr-5px mt-4px mb-5px"
                    src={icon4}
                    alt="icon"
                  />
                </div>
              </div>
              <p style={{ color: "#f04281" }} className="mr-8px text-12px">
                10,000
              </p>
            </div>
          </div> */}
              </div>
            </div>
            <div
              style={{
                borderColor: "#cccccc",
                background: "#dddddd",
                height: "44px",
              }}
              className="flex items-center justify-between border-b border-t"
            >
              <div
                style={{
                  background: "linear-gradient(to top, #866bbe, #f0d3ff)",
                  width: "69px",
                  height: "30px",
                  boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.4)",
                }}
                className="rounded-md p-px mt-6px mb-6px ml-10px"
              >
                {/* Changed from div to button, check the design */}
                <button
                  style={{
                    background: "linear-gradient(to top, #ccc4ff, #ffd9f5)",
                    width: "67px",
                    height: "28px",
                    borderRadius: "0.3rem",
                  }}
                  className="flex items-center justify-center rounded-md"
                  onClick={() => increaseCounterButton(10000)}
                >
                  <p
                    style={{ color: "#444444" }}
                    className="-ml-1px mr-3px mb-2px text-12px tracking-tight font-MalgunGothicBold"
                  >
                    +10,000
                  </p>
                </button>
              </div>

              <div
                style={{
                  background: "linear-gradient(to top, #866bbe, #f0d3ff)",
                  width: "69px",
                  height: "30px",
                  boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.4)",
                }}
                className="rounded-md p-px mt-6px mb-6px ml-4px"
              >
                {/* Changed from div to button, check the design */}
                <button
                  style={{
                    background: "linear-gradient(to top, #ccc4ff, #ffd9f5)",
                    width: "67px",
                    height: "28px",
                    borderRadius: "0.3rem",
                  }}
                  className="flex items-center justify-center rounded-md"
                  onClick={() => increaseCounterButton(50000)}
                >
                  <p
                    style={{ color: "#444444" }}
                    className="-ml-1px mr-3px mb-2px text-12px  tracking-tight font-MalgunGothicBold"
                  >
                    +50,000
                  </p>
                </button>
              </div>

              <div
                style={{
                  background: "linear-gradient(to top, #866bbe, #f0d3ff)",
                  width: "69px",
                  height: "30px",
                  boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.4)",
                }}
                className="rounded-md p-px mt-6px mb-6px ml-4px"
              >
                {/* Changed from div to button, check the design */}
                <button
                  style={{
                    background: "linear-gradient(to top, #ccc4ff, #ffd9f5)",
                    width: "67px",
                    height: "28px",
                    borderRadius: "0.3rem",
                  }}
                  className="flex items-center justify-center rounded-md"
                  onClick={() => increaseCounterButton(100000)}
                >
                  <p
                    style={{ color: "#444444" }}
                    className="-ml-1px mr-3px mb-2px text-12px  tracking-tight font-MalgunGothicBold"
                  >
                    +100,000
                  </p>
                </button>
              </div>

              <div
                style={{
                  background: "linear-gradient(to top, #3e1d6b, #c95fee)",
                  width: "69px",
                  height: "30px",
                  boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.4)",
                }}
                className="rounded-md p-px mt-6px mb-6px ml-4px mr-10px"
              >
                {/* Changed from div to button, check the design */}
                <button
                  style={{
                    background: "linear-gradient(to top, #5423a0, #9d3bbb)",
                    width: "67px",
                    height: "28px",
                    borderRadius: "0.3rem",
                  }}
                  className="flex items-center justify-center rounded-md"
                  onClick={() => console.log("maximum")}
                >
                  <p
                    style={{
                      color: "#ffffff",
                      textShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
                    }}
                    className="mb-2px ml-px text-12px text-white  tracking-tight font-MalgunGothicBold"
                  >
                    최대
                  </p>
                </button>
              </div>
            </div>
            <div
              style={{
                borderColor: "#eeeeee",
                background: "#ffffff",
                height: "83px",
              }}
              className="items-center justify-between border-b"
            >
              <div className="flex items-center justify-between">
                <p
                  style={{ color: "#444444" }}
                  className="ml-9px mt-13px text-12px font-MalgunGothicBold tracking-tight"
                >
                  총 배당
                </p>
                <p
                  style={{ color: "#e9441d" }}
                  className="mr-10px mt-15px text-12px font-MalgunGothicBold tracking-tight"
                >
                  1.00
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p
                  style={{ color: "#444444" }}
                  className="ml-9px mt-15px text-12px font-MalgunGothicBold tracking-tight"
                >
                  총 베팅금액
                </p>
                <p
                  style={{ color: "#f04281" }}
                  className="mr-10px -mb-6px mt-10px text-12px font-MalgunGothicBold tracking-tight"
                >
                  10,000
                </p>
              </div>
            </div>
            <div
              style={{ height: "46px", background: "#ffffff" }}
              className="flex items-center justify-between "
            >
              <p
                style={{ color: "#5e399a" }}
                className="ml-9px mt-18px mb-22px text-12px font-MalgunGothicBold tracking-tight"
              >
                당첨 예상금액
              </p>
              <p
                style={{ color: "#33a1e9" }}
                className="mr-10px mt-16px mb-18px text-12px font-MalgunGothicBold tracking-tight"
              >
                11,000
              </p>
            </div>
            <div
              style={{
                height: "35px",
                borderColor: "#cccccc",
                background: "#dddddd",
              }}
              className="flex items-center justify-between border-b border-t"
            >
              <p
                style={{ color: "#666666" }}
                className="ml-9px mt-12px mb-15px text-12px font-malgun tracking-tight"
              >
                최소 베팅금액
              </p>
              <p
                style={{ color: "#f04281" }}
                className="mr-10px mt-12px mb-13px text-12px font-malgun tracking-tight"
              >
                5,000
              </p>
            </div>
            <div
              style={{
                height: "34px",
                borderColor: "#cccccc",
                background: "#dddddd",
              }}
              className="flex items-center justify-between border-b "
            >
              <p
                style={{ color: "#666666" }}
                className="ml-9px mt-12px mb-15px text-12px font-malgun tracking-tight"
              >
                최대 베팅금액
              </p>
              <p
                style={{ color: "#666666" }}
                className="mr-10px mt-12px mb-13px text-12px font-malgun tracking-tight"
              >
                5,000,000
              </p>
            </div>
            <div
              style={{
                height: "34px",
                borderColor: "#cccccc",
                background: "#dddddd",
              }}
              className="flex items-center justify-between border-b"
            >
              <p
                style={{ color: "#666666" }}
                className="ml-9px mt-12px mb-15px text-12px font-malgun tracking-tight"
              >
                최대 당첨금액
              </p>
              <p
                style={{ color: "#666666" }}
                className="mr-10px mt-12px mb-13px text-12px font-malgun tracking-tight"
              >
                10,000,000
              </p>
            </div>
            <div
              style={{
                height: "34px",
                borderColor: "#cccccc",
                background: "#dddddd",
              }}
              className="flex items-center justify-between border-b"
            >
              <p
                style={{ color: "#666666" }}
                className="ml-9px mt-12px mb-15px text-12px font-malgun tracking-tight"
              >
                최대 베팅배당
              </p>
              <p
                style={{ color: "#666666" }}
                className="mr-10px mt-12px mb-13px text-12px font-malgun tracking-tight"
              >
                300
              </p>
            </div>
            <div
              style={{ background: "#ffffff", height: "66px" }}
              className="flex items-center justify-center rounded-b-md "
            >
              <div
                style={{
                  background: "linear-gradient(to top, #921d5c, #ff85b1)",
                  width: "288px",
                  height: "46px",
                  borderRadius: "6px",
                  boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.4)",
                }}
                className=" p-px ml-11px mt-10px mr-11px mb-11px"
              >
                <PopupControls
                  buttonChild={placeBetButton}
                  isPopupOpen={isPopupOpen}
                  setPopupOpen={setIsPopupOpen}
                  onClick={() => setIsPopupOpen(true)}
                >
                  <PoupUpComponent
                    setIsPopupOpen={setIsPopupOpen}
                    active={active}
                    setActive={setActive}
                  />
                </PopupControls>
              </div>
            </div>
          </>
        ) : (
          <>
            <RightComponentCard />
          </>
        )}
      </div>
    </>
  );
};

export default RightComponent;
