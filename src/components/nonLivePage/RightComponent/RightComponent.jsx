import React, { useState } from "react";
import icon from "../../../images/nonLivePage/RightComponent/icon.png";
import icon1 from "../../../images/nonLivePage/RightComponent/Icon1.png";
import icon2 from "../../../images/nonLivePage/RightComponent/Icon2.png";
import icon3 from "../../../images/nonLivePage/RightComponent/Icon3.png";
import icon4 from "../../../images/nonLivePage/RightComponent/refresh-icon.png";
import icon5 from "../../../images/nonLivePage/RightComponent/Icon4.png";
import icon6 from "../../../images/nonLivePage/RightComponent/Icon5.png";
import icon7 from "../../../images/nonLivePage/RightComponent/X.png";
import img from "../../../images/nonLivePage/RightComponent/Icon6.png";
import CustomDropdown from "./CustomDropdown";

const RightComponent = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== value));
    }
  };
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #cb78e6, #ffffff)",
        width: "310px",
      }}
      className="rounded-lg p-px ml-10px mt-10px mr-10px"
    >
      <div
        style={{ background: "linear-gradient(to right, #9d3bbb, #5423a0)" }}
        className="flex items-center justify-between h-39px rounded-t-lg"
      >
        <div>
          <p style={{ color: "#eeeeee" }} className="ml-9px text-13px">
            2021-08-02(월) 15:25:42
          </p>
        </div>
        <div
          style={{
            background: "linear-gradient(to top, #4f3a7a, #f0d3ff)",
            width: "30px",
          }}
          className="rounded-lg p-px mr-6px mt-5px mb-5px"
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
          }}
          className="p-px"
        >
          <div className="flex items-center">
            <img className="ml-25px" src={icon1} alt="icon" />
            <p className="ml-6px text-14px text-white">베팅슬립</p>
            <div
              style={{ background: "#f4ecce", width: "20px", height: "20px" }}
              className="rounded-full p-px ml-5px mr-24px"
            >
              <div
                style={{ background: "#f04281", height: "18px" }}
                className="flex items-center rounded-full"
              >
                <p className="ml-5px mr-5px mt-4px mb-5px text-12px text-white">
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
          }}
          className="p-px"
        >
          <div className="flex items-center">
            <img className="ml-27px" src={icon2} alt="icon" />
            <p style={{ color: "#5e399a" }} className="ml-7px text-14px">
              베팅내역
            </p>
            <div
              style={{ background: "#f7efd1", width: "20px", height: "20px" }}
              className="rounded-full p-px ml-4px mr-25px"
            >
              <div
                style={{ background: "#682aa7", height: "18px" }}
                className="flex items-center rounded-full"
              >
                <p className="ml-5px mr-5px mt-4px mb-5px text-12px text-white">
                  2
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* card
      <div
        style={{ background: "#ffffff", width: "308px" }}
        className="flex items-center"
      >
        <div
          style={{
            background: "#bbbbbb",
            width: "302px",
          }}
          className="rounded-lg p-px ml-4px mt-4px mb-4px mr-4px"
        >
          <div
            style={{
              background: "linear-gradient(to right, #9d3bbb, #5423a0)",
            }}
            className="flex items-center justify-between h-40px rounded-t-lg"
          >
            <div className="flex items-center ml-6px">
              <p className="text-white text-12px">ID :</p>
              <p style={{ color: "#f2ea37" }} className="ml-4px text-12px">
                4004791
              </p>
              <div
                style={{
                  background: "#6b2539",
                  // width: "44px",
                }}
                className="rounded-lg p-px ml-7px mt-11px mb-10px"
              >
                <div
                  style={{
                    background: "#d60447",
                  }}
                  className="flex items-center h-19px rounded-lg"
                >
                  <p className="ml-5px mr-5px mt-4px mb-4px text-11px text-white">
                    대기중
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="mr-7px text-12px text-white">2021-06-29 16:00:30</p>
            </div>
          </div>

          <div
            style={{
              background: "linear-gradient(to right, #d4e8ff, #ffeaf5)",
              borderColor: "#bbbbbb",
            }}
            className="items-center border-b"
          >
            <p
              style={{ color: "#666666" }}
              className="ml-6px pt-12px text-12px"
            >
              아스널 VS 리버풀
            </p>
            <p
              style={{ color: "#666666" }}
              className="ml-6px mt-10px text-12px "
            >
              승무패[정규시간]
            </p>
            <div className="flex items-center justify-between mb-13px">
              <p
                style={{ color: "#5e399a" }}
                className="ml-6px mt-9px text-12px "
              >
                리버풀
              </p>
              <p style={{ color: "#0072bc" }} className="mr-7px text-12px ">
                3.47
              </p>
            </div>
          </div>

          <div
            style={{
              background: "linear-gradient(to right, #d4e8ff, #ffeaf5)",
              borderColor: "#bbbbbb",
            }}
            className="items-center border-b"
          >
            <p
              style={{ color: "#666666" }}
              className="ml-6px pt-12px text-12px"
            >
              FC바르셀로나 VS 아틀레티코
            </p>
            <p
              style={{ color: "#666666" }}
              className="ml-6px mt-10px text-12px "
            >
              승무패[정규시간]
            </p>
            <div className="flex items-center justify-between mb-13px">
              <p
                style={{ color: "#5e399a" }}
                className="ml-6px mt-9px text-12px "
              >
                FC바르셀로나
              </p>
              <p style={{ color: "#f04281" }} className="mr-7px text-12px ">
                2.26
              </p>
            </div>
          </div>

          <div
            style={{
              background: "#ffffff",
              borderColor: "#eeeeee",
            }}
            className="flex items-center justify-between border-b"
          >
            <p
              style={{ color: "#666666" }}
              className="ml-6px mt-12px mb-12px text-12px"
            >
              총 배당
            </p>
            <p
              style={{ color: "#e9441d" }}
              className="mr-7px mt-13px mb-13px text-12px"
            >
              10.00
            </p>
          </div>

          <div
            style={{
              background: "#ffffff",
              borderColor: "#eeeeee",
            }}
            className="flex items-center justify-between border-b"
          >
            <p
              style={{ color: "#666666" }}
              className="ml-6px mt-11px mb-12px text-12px"
            >
              총 베팅금액
            </p>
            <p
              style={{ color: "#666666" }}
              className="mr-7px mt-12px mb-11px text-12px"
            >
              5,000
            </p>
          </div>

          <div
            style={{
              background: "#ffffff",
              borderColor: "#eeeeee",
            }}
            className="flex items-center justify-between border-b"
          >
            <p
              style={{ color: "#666666" }}
              className="ml-6px mt-11px mb-12px text-12px"
            >
              당첨 예상금액
            </p>
            <p
              style={{ color: "#666666" }}
              className="mr-7px mt-12px mb-11px text-12px"
            >
              50,000
            </p>
          </div>

          <div
            style={{
              background: "#ffffff",
              borderColor: "#eeeeee",
            }}
            className="flex items-center justify-between border-b rounded-b-lg"
          >
            <p
              style={{ color: "#666666" }}
              className="ml-6px mt-10px mb-13px text-12px"
            >
              티켓번호
            </p>
            <p
              style={{ color: "#0072bc" }}
              className="mr-7px mt-11px mb-14px text-12px"
            >
              4004791
            </p>
          </div>
        </div>
      </div>

      <div
        style={{ background: "#ffffff", width: "308px" }}
        className="flex items-center"
      >
        <div
          style={{
            background: "#bbbbbb",
            width: "302px",
          }}
          className="rounded-lg p-px ml-4px mt-4px mb-4px mr-4px"
        >
          <div
            style={{
              background: "linear-gradient(to right, #9d3bbb, #5423a0)",
            }}
            className="flex items-center justify-between h-40px rounded-t-lg"
          >
            <div className="flex items-center ml-6px">
              <p className="text-white text-12px">ID :</p>
              <p style={{ color: "#f2ea37" }} className="ml-4px text-12px">
                4004998
              </p>
              <div
                style={{
                  background: "#2b1160",
                  // width: "44px",
                }}
                className="rounded-lg p-px ml-7px mt-11px mb-10px"
              >
                <div
                  style={{
                    background: "#461e96",
                  }}
                  className="flex items-center h-19px rounded-lg"
                >
                  <p className="ml-5px mr-5px mt-4px mb-4px text-11px text-white">
                    수락
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="mr-7px text-12px text-white">2021-06-29 16:00:20</p>
            </div>
          </div>

          <div
            style={{
              background: "linear-gradient(to right, #d4e8ff, #ffeaf5)",
              borderColor: "#bbbbbb",
            }}
            className="items-center border-b"
          >
            <p
              style={{ color: "#666666" }}
              className="ml-6px pt-12px text-12px"
            >
              FC바르셀로나 VS 아틀레티코
            </p>
            <p
              style={{ color: "#666666" }}
              className="ml-6px mt-10px text-12px "
            >
              승무패[정규시간]
            </p>
            <div className="flex items-center justify-between mb-13px">
              <p
                style={{ color: "#5e399a" }}
                className="ml-6px mt-9px text-12px "
              >
                FC바르셀로나
              </p>
              <p style={{ color: "#f04281" }} className="mr-7px text-12px ">
                2.26
              </p>
            </div>
          </div>

          <div
            style={{
              background: "#ffffff",
              borderColor: "#eeeeee",
            }}
            className="flex items-center justify-between border-b"
          >
            <p
              style={{ color: "#666666" }}
              className="ml-6px mt-12px mb-12px text-12px"
            >
              총 배당
            </p>
            <p
              style={{ color: "#e9441d" }}
              className="mr-7px mt-13px mb-13px text-12px"
            >
              2.26
            </p>
          </div>

          <div
            style={{
              background: "#ffffff",
              borderColor: "#eeeeee",
            }}
            className="flex items-center justify-between border-b"
          >
            <p
              style={{ color: "#666666" }}
              className="ml-6px mt-11px mb-12px text-12px"
            >
              총 베팅금액
            </p>
            <p
              style={{ color: "#666666" }}
              className="mr-7px mt-12px mb-11px text-12px"
            >
              5,000
            </p>
          </div>

          <div
            style={{
              background: "#ffffff",
              borderColor: "#eeeeee",
            }}
            className="flex items-center justify-between border-b"
          >
            <p
              style={{ color: "#666666" }}
              className="ml-6px mt-11px mb-12px text-12px"
            >
              당첨 예상금액
            </p>
            <p
              style={{ color: "#666666" }}
              className="mr-7px mt-12px mb-11px text-12px"
            >
              11,300
            </p>
          </div>

          <div
            style={{
              background: "#ffffff",
              borderColor: "#eeeeee",
            }}
            className="flex items-center justify-between border-b rounded-b-lg"
          >
            <p
              style={{ color: "#666666" }}
              className="ml-6px mt-10px mb-13px text-12px"
            >
              티켓번호
            </p>
            <p
              style={{ color: "#0072bc" }}
              className="mr-7px mt-11px mb-14px text-12px"
            >
              4004791
            </p>
          </div>
        </div>
      </div> */}

      {/* <div
        style={{
          background: "#7553ab",
          width: "310px",
        }}
        className="rounded-b-lg p-px z-20"
      >
        <div
          style={{ background: "#5e399a", height: "71px" }}
          className="flex items-center justify-center rounded-b-lg"
        >
          <p className="text-12px text-white mt-33px mb-30px">
            베팅내역이 없습니다.
          </p>
        </div>
      </div> */}

      {/* checkbox 
      <div
        style={{
          height: "35px",
          borderColor: "#cccccc",
          background: "#dddddd",
        }}
        className="flex items-center border-b border-t mt-px"
      >
        <p
          style={{ color: "#444444" }}
          className="ml-9px mt-11px mb-11px text-12px"
        >
          배당 및 변경사항을 자동승인 하겠습니까?
        </p>
      </div>

      <div
        style={{
          height: "35px",
          borderColor: "#cccccc",
          background: "#dddddd",
        }}
        className="flex items-center border-b "
      >
        <input
          type="checkbox"
          value="item1"
          checked={selectedItems.includes("item1")}
          onChange={handleCheckboxChange}
          className="ml-10px mt-9px mb-10px "
        />
        <p
          style={{ color: "#707070" }}
          className="ml-10px mt-11px mb-11px text-12px"
        >
          높은 배당만 수락
        </p>
      </div>

      <div
        style={{
          height: "35px",
          borderColor: "#cccccc",
          background: "#dddddd",
        }}
        className="flex items-center border-b "
      >
        <input
          type="checkbox"
          value="item2"
          checked={selectedItems.includes("item2")}
          onChange={handleCheckboxChange}
          className="ml-10px mt-9px mb-10px "
        />
        <p
          style={{ color: "#707070" }}
          className="ml-10px mt-11px mb-11px text-12px"
        >
          높은 배당만 수락
        </p>
      </div>

      <div
        style={{
          height: "35px",
          borderColor: "#cccccc",
          background: "#dddddd",
        }}
        className="flex items-center border-b "
      >
        <input
          type="checkbox"
          value="item3"
          checked={selectedItems.includes("item3")}
          onChange={handleCheckboxChange}
          className="ml-10px mt-9px mb-10px "
        />
        <p
          style={{ color: "#707070" }}
          className="ml-10px mt-11px mb-11px text-12px"
        >
          높은 배당만 수락
        </p>
      </div> */}

      {/* card
      <div
        style={{
          background: "#ac8acb",
          width: "304px",
        }}
        className="rounded-lg p-px ml-2px mt-3px mr-2px mb-4px"
      >
        <div
          style={{ background: "linear-gradient(to right, #9d3bbb, #5423a0)" }}
          className="flex items-center justify-between h-39px rounded-t-lg"
        >
          <div className="flex items-center ml-6px">
            <p className="text-12px text-white mt-15px mb-15px">
              아스널 VS 리버플
            </p>
          </div>
          <div className="flex items-center mr-7px">
            <img className="mt-13px mb-12px" src={icon6} alt="icon" />
            <img className="ml-10px mt-15px mb-14px" src={icon7} alt="icon" />
          </div>
        </div>
        <div
          style={{
            background: "linear-gradient(to right, #d4e8ff, #ffeaf5)",
          }}
          className="items-center justify-between rounded-b-lg"
        >
          <div className="flex items-center justify-between">
            <div className="ml-6px">
              <p style={{ color: "#666666" }} className="text-12px mt-12px ">
                승무패[정규시간]
              </p>
            </div>
            <div className="mr-7px">
              <p style={{ color: "#666666" }} className="text-12px mt-13px ">
                3.15
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="ml-6px">
              <p
                style={{ color: "#5e399a" }}
                className="text-12px mt-9px mb-13px"
              >
                리버풀
              </p>
            </div>
            <div className="mr-7px">
              <p
                style={{ color: "#0072bc" }}
                className="text-12px mt-12px mb-14px"
              >
                3.47
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: "#ac8acb",
          width: "304px",
        }}
        className="rounded-lg p-px ml-2px mt-3px mr-2px mb-4px"
      >
        <div
          style={{ background: "linear-gradient(to right, #9d3bbb, #5423a0)" }}
          className="flex items-center justify-between h-39px rounded-t-lg"
        >
          <div className="flex items-center ml-6px">
            <p className="text-12px text-white mt-15px mb-15px">
              FC바르셀로나 VS 아틀레티코
            </p>
          </div>
          <div className="flex items-center mr-7px">
            <img className="mt-13px mb-12px" src={icon6} alt="icon" />
            <img className="ml-10px mt-15px mb-14px" src={icon7} alt="icon" />
          </div>
        </div>
        <div
          style={{
            background: "linear-gradient(to right, #d4e8ff, #ffeaf5)",
          }}
          className="items-center justify-between rounded-b-lg"
        >
          <div className="flex items-center justify-between">
            <div className="ml-6px">
              <p style={{ color: "#666666" }} className="text-12px mt-12px ">
                승무패[정규시간]
              </p>
            </div>
            <div className="mr-7px">
              <p style={{ color: "#666666" }} className="text-12px mt-13px ">
                2.55
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="ml-6px">
              <p
                style={{ color: "#5e399a" }}
                className="text-12px mt-9px mb-13px"
              >
                FC바르셀로나
              </p>
            </div>
            <div className="mr-7px">
              <p
                style={{ color: "#f04281" }}
                className="text-12px mt-12px mb-14px"
              >
                2.26
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div
        style={{ background: "#eeeeee" }}
        className="flex items-center justify-between "
      >
        <div
          style={{ background: "#aaaaaa", width: "88px" }}
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
        <div className="mt-23px mb-22px items-center">
          <p
            style={{ color: "#ffffff", marginLeft: "89px" }}
            className="text-12px"
          >
            선택하신 경기가 없습니다.
          </p>
          <p style={{ color: "#ffffff" }} className="ml-61px text-12px">
            원하시는 경기의 배당을 선택주세요.
          </p>
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
          <p style={{ color: "#444444" }} className="ml-9px text-12px">
            보유금액
          </p>
          <p style={{ color: "#33a1e9" }} className="mr-10px text-13px">
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
          <div
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
          </div>
        </div>
      </div>

      <div
        style={{ borderColor: "#cccccc", background: "#dddddd" }}
        className="flex items-center justify-between border-b border-t"
      >
        <div
          style={{
            background: "linear-gradient(to top, #866bbe, #f0d3ff)",
            width: "69px",
          }}
          className="rounded-lg p-px mt-6px mb-6px ml-10px"
        >
          <div
            style={{
              background: "linear-gradient(to top, #ccc4ff, #ffd9f5)",
            }}
            className="flex items-center justify-center rounded-lg"
          >
            <p
              style={{ color: "#444444" }}
              className="ml-10px mb-8px mt-9px mr-13px text-12px"
            >
              +10,000
            </p>
          </div>
        </div>

        <div
          style={{
            background: "linear-gradient(to top, #866bbe, #f0d3ff)",
            width: "69px",
          }}
          className="rounded-lg p-px mt-6px mb-6px ml-4px"
        >
          <div
            style={{
              background: "linear-gradient(to top, #ccc4ff, #ffd9f5)",
            }}
            className="flex items-center justify-center rounded-lg"
          >
            <p
              style={{ color: "#444444" }}
              className="ml-10px mb-8px mt-9px mr-13px text-12px"
            >
              +50,000
            </p>
          </div>
        </div>

        <div
          style={{
            background: "linear-gradient(to top, #866bbe, #f0d3ff)",
            width: "69px",
          }}
          className="rounded-lg p-px mt-6px mb-6px ml-4px"
        >
          <div
            style={{
              background: "linear-gradient(to top, #ccc4ff, #ffd9f5)",
            }}
            className="flex items-center justify-center rounded-lg"
          >
            <p
              style={{ color: "#444444" }}
              className="ml-6px mb-8px mt-9px mr-9px text-12px"
            >
              +100,000
            </p>
          </div>
        </div>

        <div
          style={{
            background: "linear-gradient(to top, #3e1d6b, #c95fee)",
            width: "69px",
          }}
          className="rounded-lg p-px mt-6px mb-6px ml-4px mr-10px"
        >
          <div
            style={{
              background: "linear-gradient(to top, #5423a0, #9d3bbb)",
            }}
            className="flex items-center justify-center rounded-lg"
          >
            <p
              style={{ color: "#ffffff" }}
              className="ml-22px mb-8px mt-9px mr-21px text-12px"
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
        }}
        className="items-center justify-between border-b"
      >
        <div className="flex items-center justify-between">
          <p style={{ color: "#444444" }} className="ml-10px mt-19px text-12px">
            총 배당
          </p>
          <p style={{ color: "#e9441d" }} className="mr-11px mt-20px text-12px">
            1.00
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p
            style={{ color: "#444444" }}
            className="ml-10px mt-23px mb-19px text-12px"
          >
            총 베팅금액
          </p>
          <p
            style={{ color: "#f04281" }}
            className="mr-11px mt-25px mb-18px text-12px"
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
          className="ml-10px mt-17px mb-19px text-12px"
        >
          당첨 예상금액
        </p>
        <p
          style={{ color: "#33a1e9" }}
          className="mr-11px mt-18px mb-18px text-12px"
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
          className="ml-9px mt-11px mb-12px text-12px"
        >
          최소 베팅금액
        </p>
        <p
          style={{ color: "#f04281" }}
          className="mr-10px mt-12px mb-11px text-12px"
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
          className="ml-9px mt-11px mb-12px text-12px"
        >
          최대 베팅금액
        </p>
        <p
          style={{ color: "#666666" }}
          className="mr-10px mt-12px mb-11px text-12px"
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
          className="ml-9px mt-11px mb-12px text-12px"
        >
          최대 당첨금액
        </p>
        <p
          style={{ color: "#666666" }}
          className="mr-10px mt-12px mb-11px text-12px"
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
          className="ml-9px mt-11px mb-12px text-12px"
        >
          최대 베팅배당
        </p>
        <p
          style={{ color: "#666666" }}
          className="mr-10px mt-12px mb-13px text-12px"
        >
          300
        </p>
      </div>

      <div
        style={{ background: "#ffffff" }}
        className="flex items-center justify-center rounded-b-lg "
      >
        <div
          style={{
            background: "linear-gradient(to top, #921d5c, #ff85b1)",
            width: "288px",
          }}
          className="rounded-lg p-px ml-11px mt-10px mr-11px mb-11px"
        >
          <div
            style={{ background: "linear-gradient(to top, #911c5c, #f04281)" }}
            className="flex items-center justify-center rounded-lg"
          >
            <img className="ml-103px mt-15px mb-13px" src={icon5} alt="icon" />
            <p
              style={{ color: "#ffffff" }}
              className="ml-6px mt-17px mb-15px text-15px"
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
