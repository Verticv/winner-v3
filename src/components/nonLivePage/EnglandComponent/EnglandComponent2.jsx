import React from "react";
// import icon from "../../../images/nonLivePage/EnglandComponent/Icon.png";
// import flag from "../../../images/nonLivePage/EnglandComponent/Flag.png";
// import img from "../../../images/nonLivePage/EnglandComponent/Img.png";
// import img2 from "../../../images/nonLivePage/EnglandComponent/img2.png";
import img3 from "../../../images/nonLivePage/EnglandComponent/img3.png";
import img4 from "../../../images/nonLivePage/EnglandComponent/img4.png";
import img5 from "../../../images/nonLivePage/EnglandComponent/img5.png";
import group from "../../../images/nonLivePage/EnglandComponent/Group.png";
import logo from "../../../images/nonLivePage/EnglandComponent/Logo.png";
// import { useSelector } from "react-redux";

const EnglandComponent = ({ englandActive, setEnglandActive, setIsOpen, isOpen }) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const liveGameData = useSelector((state) => state.nonLive.liveGame.data);

  return (
    <>
      <div className="flex flex-shrink-0 items-center justify-center mt-5px mb-5px relative">
        <img
          src={img3}
          alt="icon"
          style={{
            width: "650px",
            flexShrink: 0,
          }}
        />
        <div className="absolute items-center justify-center">
          <p
            style={{
              color: "#ffffff",
              letterSpacing: "-0.031em",
              textShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
            }}
            className="text-18px mb-3px font-bold"
          >
            스포츠 베팅규정 안내
          </p>
        </div>
      </div>
      {!isOpen ? (
        <div
          style={{
            background: "#936cee",
            width: "640px",
            height: "614px",
            borderRadius: "6px",
            boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.8)",
          }}
          className="p-4px mb-4px ml-5px"
        >
          <div
            style={{
              background: "#5e399a",
              width: "632px",
              height: "100%",
              borderRadius: "1px",
            }}
            className="flex items-center justify-center"
          >
            <img className="mt-6px" src={group} alt="icon" />
            <div className="flex absolute">
              <img className="-mt-69px object-none" src={logo} alt="icon" />
            </div>
            <button
              style={{
                background: "linear-gradient(to right, #15cfee, #3197e5)",
                borderRadius: "6px",
                boxShadow: "1px 1.732px 5px 0px rgba(0, 0, 0, 0.6)",
              }}
              className="flex absolute items-center justify-center w-178px h-46px mt-180px rounded-lg"
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
            >
              <p
                style={{
                  letterSpacing: "-0.1em",
                  textShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
                }}
                className="text-16px text-white -ml-4px font-bold"
              >
                베팅규정 안내확인
              </p>
            </button>
          </div>
        </div>
      ) : (
        <div
          style={{
            background: "#936cee",
            width: "640px",
            minHeight: "614px",
            borderRadius: "6px",
            boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.8)",
          }}
          className="p-4px mb-4px ml-5px"
        >
          <div
            style={{
              background: "#5e399a",
              width: "632px",
              minHeight: "606px",
              borderRadius: "2px",
            }}
            className="flex "
          >
            <div className="items-start">
              <div className="flex">
                <img className="ml-20px mt-20px object-none" src={img4} alt="icon" />
                <p
                  style={{ letterSpacing: "-0.094em", marginTop: "19px" }}
                  className="ml-5px text-white text-13px font-malgun"
                >
                  단폴/두폴/다폴 베팅규정 안내
                </p>
              </div>
              <p
                style={{ letterSpacing: "-0.094em", marginTop: "11px" }}
                className="ml-19px mt-10px text-white text-13px font-malgun"
              >
                단폴 베팅 시에는 배당률 1.31 이상만 시스템에서 허용되며 다른 규제는 없습니다.
              </p>
              <p style={{ letterSpacing: "-0.094em" }} className="ml-19px mt-4px text-white text-13px font-malgun">
                두폴이상의 경우 배당률 1.31 이상의 한 폴더가 반드시 포함되어야 하며 포함되지 않을 경우
              </p>
              <p style={{ letterSpacing: "-0.094em" }} className="ml-19px mt-5px text-white text-13px font-malgun">
                해당 베팅은 시스템에서 허용되지 않습니다.
              </p>
              <p style={{ letterSpacing: "-0.094em" }} className="ml-19px mt-4px text-white text-13px font-malgun">
                다폴 구성 시 1.31 이하 배당경기는 롤링 계산 시 폴더 수에 포함되지 않습니다.
              </p>
              <div className="flex mt-px">
                <img className="ml-20px mt-17px object-none" src={img5} alt="icon" />
                <p
                  style={{
                    color: "#e5bcf7",
                    letterSpacing: "-0.094em",
                    marginTop: "16px",
                  }}
                  className="ml-3px text-13px font-malgun"
                >
                  강력 제재사항
                </p>
              </div>
              <p
                style={{ color: "#e5bcf7", letterSpacing: "-0.094em", marginTop: "10px" }}
                className="ml-19px text-13px font-malgun"
              >
                <span style={{ marginRight: "3px" }}>•</span> 오즈포탈 등을 활용하여 배당률 하락경기에만 베팅하는 경우
              </p>
              <p
                style={{ color: "#e5bcf7", letterSpacing: "-0.094em" }}
                className="ml-19px mt-4px text-13px font-malgun"
              >
                <span style={{ marginRight: "3px" }}>•</span> 스포츠 경기에서 보너스 엣지를 악용하여 양방 혹은 시간차
                양방 베팅하는 경우
              </p>
              <p
                style={{ color: "#e5bcf7", letterSpacing: "-0.094em" }}
                className="ml-19px mt-5px text-13px font-malgun"
              >
                <span style={{ marginRight: "3px" }}>•</span> 실시간 스포츠 농구/배구 경기에서 언/오버 핸디캡을 악용한
                걸치기, 양방 베팅을 하는 경우
              </p>
              <p
                style={{ color: "#e5bcf7", letterSpacing: "-0.094em" }}
                className="ml-19px mt-4px text-13px font-malgun"
              >
                <span style={{ marginRight: "3px" }}>•</span> 운영진의 실수 및 프로그램 오류로 인해 발생된 비정상적인
                경기에 베팅하는경우
              </p>
              <div
                style={{
                  background: "#936cee",
                  width: "620px",
                  height: "1px",
                }}
                className="ml-5px mr-11px mt-18px"
              ></div>
              <div
                style={{
                  background: "#7f5db5",
                  width: "592px",
                  height: "173px",
                  borderRadius: "4px",
                }}
                className=" p-2px mt-20px ml-20px"
              >
                <div
                  style={{
                    background: "#5e399a",
                    width: "588px",
                    height: "169px",
                    borderRadius: "2px",
                  }}
                  className="pt-px"
                >
                  <p style={{ letterSpacing: "-0.094em" }} className="ml-17px pt-13px text-white text-13px font-malgun">
                    야구, 배구 등 각종 경기의 경우 베팅한 시점으로 최대 1분 이내에
                  </p>
                  <p style={{ letterSpacing: "-0.094em" }} className="ml-17px  text-white text-13px font-malgun">
                    득점 발생시 적특처리 되실 수 있습니다
                  </p>
                  <p
                    style={{
                      color: "#fecf08",
                      letterSpacing: "-0.094em",
                    }}
                    className="ml-17px mt-21px text-13px font-malgun"
                  >
                    1분 이내에 발생한 득점이 모든 경기가 적특처리 되는 것은 아니며,
                  </p>
                  <p
                    style={{
                      color: "#fecf08",
                      letterSpacing: "-0.094em",
                    }}
                    className="ml-17px text-13px font-malgun"
                  >
                    실제 경기 상황과 베팅하신 피드의 시스템상 오차가 있는 경우에만 처리됩니다.
                  </p>
                  <p style={{ letterSpacing: "-0.094em" }} className="ml-17px mt-21px text-white text-13px font-malgun">
                    데이터 송수신에 대한 시간차를 노려 라이브 베팅을 하는 경우 강력 제재 처리 됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EnglandComponent;
