import React from "react";
import icon from "../../../images/nonLivePage/CenterComponent/Icon.png";
import icon1 from "../../../images/nonLivePage/CenterComponent/star.png";
import icon2 from "../../../images/nonLivePage/CenterComponent/Icon2.png";
import icon3 from "../../../images/nonLivePage/CenterComponent/Icon3.png";
import icon4 from "../../../images/nonLivePage/CenterComponent/Icon4.png";
import CustomDropdown1 from "./CustomDropdown1";

const CenterComponent = () => {
  return (
    <>
      <div
        style={{
          height: "78px",
          width: "640px",
          background: "linear-gradient(to right, #622e8a, #4f2783)",
          borderRadius: "6px",

        }}
        className="items-center mt-3px pt-7px rounded-lg"
      >
        <div
          style={{
            background: "linear-gradient(to right, #f67700, #f100ff)",
            width: "315px",
            height: "25px",
          }}
          className="flex items-center rounded-full ml-7px "
        >
          <img className="ml-2px" src={icon} alt="img" />
          <p
            style={{ color: "#eeeeee", letterSpacing: "-0.031em" }}
            className="ml-5px text-13px mt-8px mb-6px font-spoqaBold"
          >
            다폴더 보너스 추가 배당
          </p>
          <p
            style={{ color: "#ffd98b", letterSpacing: "-0.031em" }}
            className="ml-5px text-12px font-spoqa"
          >
            (3, 6, 9) 폴더 이상 조합시 지급
          </p>
        </div>
        <div className="flex mt-5px ml-7px mr-7px mb-7px">
          <div
            style={{
              background: "linear-gradient(to top, #4f3a7a, #e597ff)",
              width: "208px",
              height: "34px",
              borderRadius: "5px",
              boxShadow: "rgba(0, 0, 0, 0.8) 0px 0px 4px 0px",
            }}
            className="rounded-lg p-px mr-2px"
          >
            <div
              style={{
                background: "linear-gradient(to top, #6b22ff, #df52ff)",
                width: "206px",
                borderRadius: "4px",
                textShadow: "1px 0.866px 0px rgba(0, 0, 0, 0.5)",
              }}
              className="flex items-center justify-between rounded-lg h-32px"
            >
              <div className="flex ml-9px">
                <img className="object-none mr-2px" src={icon1} alt="img" />
                <p
                  style={{ color: "#eeeeee", letterSpacing: "-0.031em" }}
                  className="mt-12px mb-11px text-13px font-spoqaMedium"
                >
                  3폴더 이상
                </p>
              </div>
              <div className="mr-12px">
                <p
                  style={{
                    color: "#eeeeee",
                    letterSpacing: "-0.031em",
                    fontFamily: "MalgunGothicRegular",
                  }}
                  className="mt-15px mb-13px text-13px font-malgun"
                >
                  1.03
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              background: "linear-gradient(to top, #4f3a7a, #e597ff)",
              width: "207px",
              height: "34px",
              borderRadius: "5px",
              boxShadow: "rgba(0, 0, 0, 0.8) 0px 0px 4px 0px",
            }}
            className="rounded-lg p-px mr-2px"
          >
            <div
              style={{
                background: "linear-gradient(to top, #6b22ff, #df52ff)",
                width: "205px",
                borderRadius: "4px",
                textShadow: "1px 0.866px 0px rgba(0, 0, 0, 0.5)",
              }}
              className="flex items-center justify-between rounded-lg h-32px"
            >
              <div className="flex ml-10px">
                <img className="object-none" src={icon1} alt="img" />
                <p
                  style={{ color: "#eeeeee", letterSpacing: "-0.031em" }}
                  className="ml-2px mt-12px mb-11px text-13px font-spoqaMedium"
                >
                  6폴더 이상
                </p>
              </div>
              <div className="mr-10px">
                <p
                  style={{
                    color: "#eeeeee",
                    letterSpacing: "-0.031em",
                    fontFamily: "MalgunGothicRegular",
                  }}
                  className="mt-15px mb-13px text-13px font-malgun"
                >
                  1.06
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              background: "linear-gradient(to top, #652347, #ff85b1)",
              width: "207px",
              height: "34px",
              borderRadius: "5px",
              boxShadow: "rgba(0, 0, 0, 0.8) 0px 0px 4px 0px",
            }}
            className="rounded-lg p-px mr-7px"
          >
            <div
              style={{
                background: "linear-gradient(to top, #911c5c, #f04281)",
                width: "205px",
                borderRadius: "4px",
                textShadow: "1px 0.866px 0px rgba(0, 0, 0, 0.5)",
              }}
              className="flex items-center justify-between rounded-lg h-32px"
            >
              <div className="flex ml-12px">
                <img className="object-none" src={icon1} alt="img" />
                <p
                  style={{ color: "#eeeeee", letterSpacing: "-0.031em" }}
                  className="ml-2px mt-12px mb-11px text-13px font-spoqaMedium"
                >
                  9폴더 이상
                </p>
              </div>
              <div className="mr-9px">
                <p
                  style={{
                    color: "#eeeeee",
                    letterSpacing: "-0.031em",
                    fontFamily: "MalgunGothicRegular",
                  }}
                  className="mt-15px mb-13px text-13px font-malgun"
                >
                  1.09
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "linear-gradient(to right, #622e8a, #4f2783)",
          height: "33px",
          width: "640px",
          borderRadius: "6px",
        }}
        className=" flex items-center mt-5px rounded-lg"
      >
        <p
          style={{
            color: "#eeeeee",
            letterSpacing: "-0.031em",
            fontFamily: "MalgunGothicRegular",
          }}
          className="ml-10px mt-11px mb-13px text-12px font-malgun"
        >
          ※ 스포츠 베팅규정은{" "}
          <span style={{ color: "#a5eefe", borderBottom: "1px solid #a5eefe" }}>
            ‘베팅규정안내’
          </span>
          를 열람하시면 확인이 가능합니다.
        </p>
      </div>

      <div
        style={{
          background: "linear-gradient(to right, #622e8a, #4f2783)",
          height: "43px",
          width: "640px",
          borderRadius: "6px",
        }}
        className=" flex items-center justify-between mt-5px rounded-lg"
      >
        <div className="flex ml-7px">
          <div
            style={{
              background: "linear-gradient(to top, #6b22ff, #df52ff)",
              width: "88px",
              height: "27px",
              boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.6)",
              fontFamily: "MalgunGothicRegular",
            }}
            className="flex items-center rounded-full mr-5px"
          >
            <img className="ml-8px object-none" src={icon2} alt="img" />
            <p
              style={{ color: "#ffffff" }}
              className="-ml-7px mt-5px mb-9px tracking-tight text-12px"
            >
              시간순
            </p>
          </div>
          <div
            style={{
              background: "#936cee",
              width: "88px",
              height: "27px",
              fontFamily: "MalgunGothicRegular",
            }}
            className="flex items-center rounded-full mr-6px"
          >
            <img className="object-none ml-17px" src={icon3} alt="img" />
            <p
              style={{ color: "#ffffff" }}
              className="ml-2px mt-5px mb-9px tracking-tight text-12px"
            >
              인기순
            </p>
          </div>
          <div
            style={{
              background: "#936cee",
              width: "88px",
              height: "27px",
              fontFamily: "MalgunGothicRegular",
            }}
            className="flex items-center rounded-full"
          >
            <img className="object-none ml-17px" src={icon4} alt="img" />
            <p
              style={{ color: "#ffffff", fontFamily: "MalgunGothicRegular" }}
              className="ml-2px mt-5px mb-9px tracking-tight text-12px"
            >
              리그순
            </p>
          </div>
        </div>
        <div
          style={{
            background: "#666666",
            width: "79px",
            height: "29px",
            borderRadius: "5px",
          }}
          className="flex items-center justify-between rounded-lg p-px mr-7px mt-8px mb-8px"
        >
          <CustomDropdown1 />
        </div>
      </div>
    </>
  );
};

export default CenterComponent;
