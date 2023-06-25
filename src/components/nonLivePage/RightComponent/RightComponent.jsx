import React from "react";
import icon from "../../../images/nonLivePage/RightComponent/icon.png";
import icon1 from "../../../images/nonLivePage/RightComponent/Icon1.png";
import icon2 from "../../../images/nonLivePage/RightComponent/Icon2.png";
import icon3 from "../../../images/nonLivePage/RightComponent/Icon3.png";
import icon4 from "../../../images/nonLivePage/RightComponent/refresh-icon.png";
import icon5 from "../../../images/nonLivePage/RightComponent/Icon4.png";
// import img from "../../../images/nonLivePage/RightComponent/Icon6.png";
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
      className="rounded-lg p-px ml-5px mt-10px "
    >
      <div
        style={{ background: "linear-gradient(to right, #9d3bbb, #5423a0)" }}
        className="flex items-center justify-between h-39px rounded-t-lg"
      >
        <div>
          <p
            style={{ color: "#eeeeee" }}
            className="ml-8px mt-15px mb-13px text-13px font-malgun"
          >
            2021-08-02(월) 15:25:42
          </p>
        </div>
        <div
          style={{
            background: "linear-gradient(to top, #4f3a7a, #f0d3ff)",
            width: "30px",
          }}
          className="rounded-lg p-px mr-5px mt-5px mb-5px"
        >
          <div
            style={{
              background: "linear-gradient(to top, #ccc4ff, #ffd9f5)",
              height: "28px",
            }}
            className="rounded-lg flex items-center justify-center"
          >
            <img src={icon} alt="img" />
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
            <p className="ml-px text-14px text-white font-malgun tracking-tight">
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
                <p className="ml-5px mr-5px text-12px text-white font-malgun">
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
              className="ml-7px text-14px font-malgun tracking-tight"
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
                <p className="ml-6px mr-6px text-12px text-white font-malgun">
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
        }}
        className="rounded-b-lg p-px z-20 -ml-px -mt-px"
      >
        <div
          style={{ background: "#5e399a", height: "71px" }}
          className="flex items-center justify-center rounded-b-lg"
        >
          <p className="text-12px text-white mr-4px mt-35px mb-30px tracking-tight font-malgun">
            베팅내역이 없습니다.
          </p>
        </div>
      </div> */}
      {/* <CheckBoxComponent /> */}

      {/* <RightComponentCard1 /> */}

      <div
        style={{
          background: "#eeeeee",
          height: "39px",
          borderColor: "#dddddd",
        }}
        className="flex items-center justify-between border-b border-t "
      >
        <div
          style={{ background: "#aaaaaa", width: "88px", height: "29px" }}
          className="flex items-center justify-between rounded-lg p-px ml-4px mt-6px mb-5px"
        >
          <CustomDropdown />
        </div>
        <div className="flex items-center mr-11px">
          <img src={icon3} alt="icon" />
          <p style={{ color: "#666666" }} className="ml-3px text-12px">
            전체삭제
          </p>
        </div>
      </div>
      {/* card
      <div
        style={{ background: "#ffffff", width: "308px", height: "70px" }}
        className="flex items-center"
      >
        <div
          style={{
            background: "#5e399a",
            width: "304px",
          }}
          className="rounded-lg p-px ml-3px mt-3px mr-3px mb-3px"
        >
          <div
            style={{
              background: "linear-gradient(to right, #6b22ff, #df52ff)",
            }}
            className="items-center h-64px rounded-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center ml-7px">
                <img className="mt-12px" src={img} alt="icon" />
                <p className="text-12px text-white mt-15px ml-3px">
                  베팅이 수락되었습니다.
                </p>
              </div>
              <div className="flex mr-7px">
                <img src={icon7} alt="icon" />
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-12px text-white mb-16px ml-3px">티켓번호</p>
              <p
                style={{ color: "#ffd98b" }}
                className="text-12px mb-17px ml-6px"
              >
                4004791
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div
        style={{ background: "#5e399a" }}
        className="flex items-center h-70px "
      >
        <div className="items-center">
          <div className="mt-4px -mb-4px">
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
            className="ml-9px mt-px text-12px font-malgun tracking-tight"
          >
            보유금액
          </p>
          <p
            style={{ color: "#33a1e9" }}
            className="mr-10px text-13px font-malgun tracking-tight"
          >
            3,522,170
          </p>
        </div>
        <div
          style={{ height: "46px" }}
          className="flex items-center justify-between"
        >
          <div>
            <p style={{ color: "#444444" }} className="ml-9px text-12px">
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
              }}
              className="rounded-lg p-px mt-1px mb-1px ml-2px"
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
            <div
              style={{
                background: "#aaaaaa",
                width: "189px",
                height: "34px",
              }}
              className="rounded-lg p-px mt-6px mb-6px mr-10px"
            >
              <div
                style={{ background: "#ffffff", width: "187px" }}
                className="flex items-center justify-between rounded-lg h-32px"
              >
                <input
                  style={{
                    color: "#f04281",
                    marginLeft: "137px",
                  }}
                  className="bg-white w-full rounded-lg tracking-tight text-12 font-malgun "
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
          className="rounded-lg p-px mt-6px mb-6px ml-10px"
        >
          <div
            style={{
              background: "linear-gradient(to top, #ccc4ff, #ffd9f5)",
              width: "67px",
              height: "28px",
            }}
            className="flex items-center justify-center rounded-lg"
          >
            <p
              style={{ color: "#444444" }}
              className="text-12px tracking-tight font-malgun"
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
          className="rounded-lg p-px mt-6px mb-6px ml-4px"
        >
          <div
            style={{
              background: "linear-gradient(to top, #ccc4ff, #ffd9f5)",
              width: "67px",
              height: "28px",
            }}
            className="flex items-center justify-center rounded-lg"
          >
            <p
              style={{ color: "#444444" }}
              className="text-12px  tracking-tight font-malgun"
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
          className="rounded-lg p-px mt-6px mb-6px ml-4px"
        >
          <div
            style={{
              background: "linear-gradient(to top, #ccc4ff, #ffd9f5)",
              width: "67px",
              height: "28px",
            }}
            className="flex items-center justify-center rounded-lg"
          >
            <p
              style={{ color: "#444444" }}
              className="text-12px  tracking-tight font-malgun"
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
          className="rounded-lg p-px mt-6px mb-6px ml-4px mr-10px"
        >
          <div
            style={{
              background: "linear-gradient(to top, #5423a0, #9d3bbb)",
              width: "67px",
              height: "28px",
            }}
            className="flex items-center justify-center rounded-lg"
          >
            <p
              style={{ color: "#ffffff" }}
              className="text-12px text-white  tracking-tight font-malgun"
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
            className="ml-9px mt-16px text-12px font-malgun tracking-tight"
          >
            총 배당
          </p>
          <p
            style={{ color: "#e9441d" }}
            className="mr-11px mt-13px text-12px font-malgun tracking-tight"
          >
            1.00
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p
            style={{ color: "#444444" }}
            className="ml-9px mt-16px text-12px font-malgun tracking-tight"
          >
            총 베팅금액
          </p>
          <p
            style={{ color: "#f04281" }}
            className="mr-11px mt-12px text-12px font-malgun tracking-tight"
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
          className="ml-8px mt-18px mb-19px text-12px font-malgun tracking-tight"
        >
          당첨 예상금액
        </p>
        <p
          style={{ color: "#33a1e9" }}
          className="mr-10px mt-16px mb-18px text-12px font-malgun tracking-tight"
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
          className="ml-9px mt-11px mb-12px text-12px font-malgun tracking-tight"
        >
          최소 베팅금액
        </p>
        <p
          style={{ color: "#f04281" }}
          className="mr-10px mt-12px mb-11px text-12px font-malgun tracking-tight"
        >
          5,000
        </p>
      </div>
      <div
        style={{
          height: "35px",
          borderColor: "#cccccc",
          background: "#dddddd",
        }}
        className="flex items-center justify-between border-b "
      >
        <p
          style={{ color: "#666666" }}
          className="ml-9px mt-11px mb-12px text-12px font-malgun tracking-tight"
        >
          최대 베팅금액
        </p>
        <p
          style={{ color: "#666666" }}
          className="mr-10px mt-12px mb-11px text-12px font-malgun tracking-tight"
        >
          5,000,000
        </p>
      </div>
      <div
        style={{
          height: "35px",
          borderColor: "#cccccc",
          background: "#dddddd",
        }}
        className="flex items-center justify-between border-b"
      >
        <p
          style={{ color: "#666666" }}
          className="ml-9px mt-11px mb-12px text-12px font-malgun tracking-tight"
        >
          최대 당첨금액
        </p>
        <p
          style={{ color: "#666666" }}
          className="mr-10px mt-12px mb-11px text-12px font-malgun tracking-tight"
        >
          10,000,000
        </p>
      </div>
      <div
        style={{
          height: "35px",
          borderColor: "#cccccc",
          background: "#dddddd",
        }}
        className="flex items-center justify-between border-b"
      >
        <p
          style={{ color: "#666666" }}
          className="ml-9px mt-11px mb-12px text-12px font-malgun tracking-tight"
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
        style={{ background: "#ffffff", height: "67px" }}
        className="flex items-center justify-center rounded-b-lg "
      >
        <div
          style={{
            background: "linear-gradient(to top, #921d5c, #ff85b1)",
            width: "288px",
            height: "46px",
          }}
          className="rounded-lg p-px ml-11px mt-10px mr-11px mb-11px"
        >
          <div
            style={{
              background: "linear-gradient(to top, #911c5c, #f04281)",
              width: "286px",
              height: "44px",
            }}
            className="flex items-center justify-center rounded-lg"
          >
            <img className="mr-4px ml-px mt-3px" src={icon5} alt="icon" />
            <p
              style={{ color: "#ffffff" }}
              className="mt-4px font-malgun tracking-tight  text-15px"
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
