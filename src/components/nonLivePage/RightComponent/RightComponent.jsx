import React from "react";
import icon from "../../../images/nonLivePage/RightComponent/icon.png";
import icon1 from "../../../images/nonLivePage/RightComponent/Icon1.png";
import icon2 from "../../../images/nonLivePage/RightComponent/Icon2.png";
import icon3 from "../../../images/nonLivePage/RightComponent/Icon3.png";
import icon4 from "../../../images/nonLivePage/RightComponent/refresh-icon.png";
import icon5 from "../../../images/nonLivePage/RightComponent/Icon4.png";
// import img from "../../../images/nonLivePage/RightComponent/Icon6.png";
// import icon7 from "../../../images/nonLivePage/RightComponent/X.png";
import CustomDropdown from "./CustomDropdown";
// import RightComponentCard from "./RightComponentCard";
// import CheckBoxComponent from "./CheckBoxComponent";
// import RightComponentCard1 from "./RightComponentCard1";

const RightComponent = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #cb78e6, #ffffff)",
        width: "310px",
      }}
      className="rounded-md p-px ml-4px mt-10px "
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
            2021-08-02(월) 15:25:42
          </p>
        </div>
        <div
          style={{
            background: "linear-gradient(to top, #4f3a7a, #f0d3ff)",
            width: "30px",
            borderRadius: "4px",
          }}
          className="p-px mr-5px mt-4px mb-5px"
        >
          <div
            style={{
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
        <div
          style={{
            background: "linear-gradient(to top, #7452aa, #e597ff)",
            width: "156px",
            height: "46px",
          }}
          className="p-px -ml-px"
        >
          <div
            style={{
              background: "linear-gradient(to top, #6b22ff, #df52ff)",
              width: "154px",
              height: "44px",
            }}
            className="flex items-center"
          >
            <img className="ml-21px" src={icon1} alt="icon" />
            <p className="ml-px -mt-3px text-14px text-white font-MalgunGothicBold tracking-tight">
              베팅슬립
            </p>
            <div
              style={{ background: "#f4ecce", width: "20px", height: "20px" }}
              className="rounded-full p-px ml-4px mr-24px"
            >
              <div
                style={{ background: "#f04281", height: "18px" }}
                className="flex items-center justify-center rounded-full"
              >
                <p className="ml-6px -mt-2px mr-5px text-12px text-white font-MalgunGothicBold">
                  2
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            background: "linear-gradient(to top, #a281cf, #f0d3ff)",
            width: "155px",
            height: "46px",
          }}
          className="p-px -ml-px z-10"
        >
          <div
            style={{
              background: "linear-gradient(to top, #ccc4ff, #ffd9f5)",
              width: "153px",
              height: "44px",
            }}
            className="flex items-center"
          >
            <img className="ml-26px" src={icon2} alt="icon" />
            <p
              style={{ color: "#5e399a" }}
              className="ml-7px -mt-3px text-14px font-MalgunGothicBold tracking-tight"
            >
              베팅내역
            </p>
            <div
              style={{ background: "#f7efd1", width: "20px", height: "20px" }}
              className="rounded-full p-px ml-3px mr-21px"
            >
              <div
                style={{ background: "#682aa7", height: "18px" }}
                className="flex items-center rounded-full"
              >
                <p className="ml-6px -mt-2px mr-6px text-12px text-white font-MalgunGothicBold">
                  2
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <RightComponentCard /> */}
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

      {/* <CheckBoxComponent /> */}

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
        <div className="flex items-center mr-11px">
          <img className="mr-px" src={icon3} alt="icon" />
          <p
            style={{ color: "#666666", letterSpacing: "-0.031em" }}
            className="ml-2px -mt-px -mr-px text-12px font-MalgunGothicBold"
          >
            전체삭제
          </p>
        </div>
      </div>
      {/* <RightComponentCard1 /> */}
      {/* card
      <div
        style={{ background: "#ffffff", width: "308px", height: "70px" }}
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
              background: "linear-gradient(to right, #df52ff, #6b22ff)",
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
                <img src={icon7} alt="icon" />
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
      card */}
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
                background: "linear-gradient(to top, #4f3a7a, #f0d3ff)",
                width: "30px",
                height: "30px",
                position: "absolute",
                borderRadius: "4px",
              }}
              className="p-px mt-1px mb-1px ml-2px"
            >
              <div
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
                    marginLeft: "143px",
                    borderRadius: "4px",
                    fontSize: "12px",
                  }}
                  className="bg-white w-full tracking-tight font-MalgunGothicBold -mt-2px"
                  type="text"
                  value="10,000"
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
          }}
          className="rounded-md p-px mt-6px mb-6px ml-10px"
        >
          <div
            style={{
              background: "linear-gradient(to top, #ccc4ff, #ffd9f5)",
              width: "67px",
              height: "28px",
            }}
            className="flex items-center justify-center rounded-md"
          >
            <p
              style={{ color: "#444444" }}
              className="-ml-1px mr-px mb-2px text-12px tracking-tight font-MalgunGothicBold"
            >
              +10,000
            </p>
          </div>
        </div>

        <div
          style={{
            background: "linear-gradient(to top, #866bbe, #f0d3ff)",
            width: "69px",
            height: "30px",
          }}
          className="rounded-md p-px mt-6px mb-6px ml-4px"
        >
          <div
            style={{
              background: "linear-gradient(to top, #ccc4ff, #ffd9f5)",
              width: "67px",
              height: "28px",
            }}
            className="flex items-center justify-center rounded-md"
          >
            <p
              style={{ color: "#444444" }}
              className="-ml-1px mr-px mb-2px text-12px  tracking-tight font-MalgunGothicBold"
            >
              +50,000
            </p>
          </div>
        </div>

        <div
          style={{
            background: "linear-gradient(to top, #866bbe, #f0d3ff)",
            width: "69px",
            height: "30px",
          }}
          className="rounded-md p-px mt-6px mb-6px ml-4px"
        >
          <div
            style={{
              background: "linear-gradient(to top, #ccc4ff, #ffd9f5)",
              width: "67px",
              height: "28px",
            }}
            className="flex items-center justify-center rounded-md"
          >
            <p
              style={{ color: "#444444" }}
              className="-ml-1px mr-px mb-2px text-12px  tracking-tight font-MalgunGothicBold"
            >
              +100,000
            </p>
          </div>
        </div>

        <div
          style={{
            background: "linear-gradient(to top, #3e1d6b, #c95fee)",
            width: "69px",
            height: "30px",
          }}
          className="rounded-md p-px mt-6px mb-6px ml-4px mr-10px"
        >
          <div
            style={{
              background: "linear-gradient(to top, #5423a0, #9d3bbb)",
              width: "67px",
              height: "28px",
            }}
            className="flex items-center justify-center rounded-md"
          >
            <p
              style={{ color: "#ffffff" }}
              className="mb-2px text-12px text-white  tracking-tight font-MalgunGothicBold"
            >
              최대
            </p>
          </div>
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
        className="flex items-center justify-center rounded-b-lg "
      >
        <div
          style={{
            background: "linear-gradient(to top, #921d5c, #ff85b1)",
            width: "288px",
            height: "46px",
            borderRadius: "6px",
          }}
          className=" p-px ml-11px mt-10px mr-11px mb-11px"
        >
          <div
            style={{
              background: "linear-gradient(to top, #911c5c, #f04281)",
              width: "286px",
              height: "44px",
              borderRadius: "5px",
            }}
            className="flex items-center justify-center "
          >
            <img className="mr-4px mt-4px" src={icon5} alt="icon" />
            <p
              style={{ color: "#ffffff" }}
              className="mb-2px mr-1px mt-4px font-MalgunGothicBold tracking-tight  text-15px"
            >
              베팅하기
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightComponent;
