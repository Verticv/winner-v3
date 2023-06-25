import React from "react";
// import icon from "../../../images/nonLivePage/EnglandComponent/Icon.png";
// import flag from "../../../images/nonLivePage/EnglandComponent/Flag.png";
// import img from "../../../images/nonLivePage/EnglandComponent/Img.png";
// import img2 from "../../../images/nonLivePage/EnglandComponent/img2.png";
import img3 from "../../../images/nonLivePage/EnglandComponent/img3.png";
import img4 from "../../../images/nonLivePage/EnglandComponent/img4.png";
import img5 from "../../../images/nonLivePage/EnglandComponent/img5.png";

const EnglandComponent = () => {
  return (
    <>
      <div className="flex flex-shrink-0 items-center justify-center mt-6px -ml-4px mb-10px">
        <img src={img3} alt="icon" />
        <div className="absolute items-center justify-center">
          <p
            style={{
              color: "#ffffff",
              letterSpacing: "-0.031em",
            }}
            className="text-18px font-malgun mt-25px mb-25px"
          >
            스포츠 베팅규정 안내
          </p>
        </div>
      </div>

      <div
        style={{
          background: "#936cee",
          width: "640px",
          height: "614px",
        }}
        className="rounded-lg p-4px mb-4px"
      >
        <div
          style={{
            background: "#5e399a",
            width: "632px",
            height: "606px",
          }}
          className="flex "
        >
          <div className="items-start">
            <div className="flex">
              <img
                className="ml-20px mt-20px object-none"
                src={img4}
                alt="icon"
              />
              <p
                style={{ letterSpacing: "-0.094em" }}
                className="ml-6px mt-21px text-white text-13px font-malgun"
              >
                단폴/두폴/다폴 베팅규정 안내
              </p>
            </div>
            <p
              style={{ letterSpacing: "-0.094em" }}
              className="ml-17px mt-12px text-white text-13px font-malgun"
            >
              단폴 베팅 시에는 배당률 1.31 이상만 시스템에서 허용되며 다른
              규제는 없습니다.
            </p>
            <p
              style={{ letterSpacing: "-0.094em" }}
              className="ml-17px mt-4px text-white text-13px font-malgun"
            >
              두폴이상의 경우 배당률 1.31 이상의 한 폴더가 반드시 포함되어야
              하며 포함되지 않을 경우
            </p>
            <p
              style={{ letterSpacing: "-0.094em" }}
              className="ml-17px mt-4px text-white text-13px font-malgun"
            >
              해당 베팅은 시스템에서 허용되지 않습니다.
            </p>
            <p
              style={{ letterSpacing: "-0.094em" }}
              className="ml-17px mt-4px text-white text-13px font-malgun"
            >
              다폴 구성 시 1.31 이하 배당경기는 롤링 계산 시 폴더 수에 포함되지
              않습니다.
            </p>
            <div className="flex">
              <img
                className="ml-20px mt-14px object-none"
                src={img5}
                alt="icon"
              />
              <p
                style={{ color: "#e5bcf7", letterSpacing: "-0.094em" }}
                className="ml-4px mt-16px text-13px font-malgun"
              >
                강력 제재사항
              </p>
            </div>
            <p
              style={{ color: "#e5bcf7", letterSpacing: "-0.094em" }}
              className="ml-18px mt-11px text-13px font-malgun"
            >
              • 오즈포탈 등을 활용하여 배당률 하락경기에만 베팅하는 경우
            </p>
            <p
              style={{ color: "#e5bcf7", letterSpacing: "-0.094em" }}
              className="ml-18px mt-3px text-13px font-malgun"
            >
              • 스포츠 경기에서 보너스 엣지를 악용하여 양방 혹은 시간차 양방
              베팅하는 경우
            </p>
            <p
              style={{ color: "#e5bcf7", letterSpacing: "-0.094em" }}
              className="ml-18px mt-3px text-13px font-malgun"
            >
              • 실시간 스포츠 농구/배구 경기에서 언/오버 핸디캡을 악용한 걸치기,
              양방 베팅을 하는 경우
            </p>
            <p
              style={{ color: "#e5bcf7", letterSpacing: "-0.094em" }}
              className="ml-18px mt-3px text-13px font-malgun"
            >
              • 운영진의 실수 및 프로그램 오류로 인해 발생된 비정상적인 경기에
              베팅하는경우
            </p>
            <div
              style={{
                background: "#936cee",
                width: "620px",
                height: "1px",
              }}
              className="ml-5px mr-11px mt-15px"
            ></div>
            <div
              style={{
                background: "#7f5db5",
                width: "592px",
                height: "173px",
              }}
              className="rounded-lg p-2px mt-20px ml-20px"
            >
              <div
                style={{
                  background: "#5e399a",
                  width: "588px",
                  height: "169px",
                }}
                className="rounded-lg"
              >
                <p
                  style={{ letterSpacing: "-0.094em" }}
                  className="ml-19px pt-16px text-white text-13px font-malgun"
                >
                  야구, 배구 등 각종 경기의 경우 베팅한 시점으로 최대 1분 이내에
                </p>
                <p
                  style={{ letterSpacing: "-0.094em" }}
                  className="ml-19px text-white text-13px font-malgun"
                >
                  득점 발생시 적특처리 되실 수 있습니다
                </p>
                <p
                  style={{ color: "#fecf08", letterSpacing: "-0.094em" }}
                  className="ml-19px mt-21px text-13px font-malgun"
                >
                  1분 이내에 발생한 득점이 모든 경기가 적특처리 되는 것은
                  아니며,
                </p>
                <p
                  style={{ color: "#fecf08", letterSpacing: "-0.094em" }}
                  className="ml-19px text-13px font-malgun"
                >
                  실제 경기 상황과 베팅하신 피드의 시스템상 오차가 있는 경우에만
                  처리됩니다.
                </p>
                <p
                  style={{ letterSpacing: "-0.094em" }}
                  className="ml-19px mt-21px text-white text-13px font-malgun"
                >
                  데이터 송수신에 대한 시간차를 노려 라이브 베팅을 하는 경우
                  강력 제재 처리 됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        style={{
          background: "#ebabff",
          width: "640px",
        }}
        className="rounded-lg p-2px mb-10px mt-10px ml-10px"
      >
        <div
          style={{ background: "linear-gradient(to right, #9d3bbb, #5423a0)" }}
          className="flex items-center justify-between rounded-lg"
        >
          <div className="ml-14px items-center">
            <div className="flex items-center">
              <img src={icon} alt="icon" />
              <img className="ml-5px" src={flag} alt="icon" />
              <p
                style={{ color: "#eeeeee" }}
                className="ml-4px mt-13px text-12px"
              >
                잉글랜드 - 프리미어리그
              </p>
            </div>
            <div className="flex items-center mb-13px">
              <p style={{ color: "#dddddd" }} className="text-12px">
                2023-03-22 13:00
              </p>
              <div
                style={{ color: "#cb78e6" }}
                className="ml-10px w-px h-10px"
              ></div>
              <p style={{ color: "#dddddd" }} className="ml-9px text-12px">
                아스널
              </p>
              <p style={{ color: "#ffc900" }} className="ml-8px text-12px">
                VS
              </p>
              <p style={{ color: "#dddddd" }} className="ml-8px text-12px">
                리버풀
              </p>
            </div>
          </div>
          <div className="mr-15px mt-4px">
            <img src={img} alt="icon" />
          </div>
        </div>
      </div>
      <div className="ml-10px mb-10px">
        <img src={img2} alt="icon" />
      </div> */}
    </>
  );
};

export default EnglandComponent;
