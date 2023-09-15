import React from "react";
import Image1 from "../../images/liveSport/ls2_g01.png";
import Image2 from "../../images/liveSport/ls2_g02.png";
import Image3 from "../../images/liveSport/ls2_g03.png";
import Image4 from "../../images/liveSport/ls2_g04.png";
import Image5 from "../../images/liveSport/ls2_g05.png";
import Image6 from "../../images/liveSport/ls2_g06.png";

const LiveSportSingle = () => {
  const Item = ({
    number = "1.",
    title = "싱글뷰 및 멀티뷰",
    text = "싱글화면과 멀티화면 선택 가능",
    text1_1 = null,
    text2 = null,
    text3 = null,
    other = null,
    color1 = null,
    color2 = null,
    color3 = null,
  }) => (
    <div className="flex flex-col space-y-4px">
      <div className="flex text-16px tracking-tight font-bold space-x-2px  h-18px items-center mb-10px">
        <span style={{ color: "#682aa7" }} className="text-golden-gradLight">
          {number}
        </span>
        <span style={{ color: "#444444" }} className="text-gray-ccc2b6">
          {title}
        </span>
      </div>
      <span
        style={{ color: "#666" }}
        className={`flex h-16px items-center text-14px tracking-tight font-spoqaMedium mt-px`}
      >
        {text}{" "}
        <p style={{ color: "#0072bc" }} className="ml-2px text-blue-2980b9">
          {color1}
        </p>
        <p style={{ color: "#f04281" }} className="mr-2px">
          {color2}
        </p>
        <p>{color3}</p>
      </span>
      {text1_1 && (
        <div className="flex mt-px pl-15px pb-20px">
          <span
            style={{ color: "#666" }}
            className="flex h-16px items-center text-14px tracking-tight font-spoqaMedium "
          >
            {text1_1}
          </span>
        </div>
      )}
      {text2 && (
        <span
          style={{ color: "#666" }}
          className="flex h-16px items-center text-14px tracking-tight font-spoqaMedium"
        >
          {text2}
        </span>
      )}
      {text3 && (
        <span
          style={{ color: "#666" }}
          className="flex h-16px items-center text-14px tracking-tight font-spoqaMedium"
        >
          {text3}
        </span>
      )}
      {other && (
        <div className="flex mt-px py-20px">
          <span
            style={{ color: "#666" }}
            className="flex h-16px items-center text-14px tracking-tight font-spoqaMedium "
          >
            {other}
          </span>
        </div>
      )}
    </div>
  );

  return (
    // <div style={{borderRadius:"1em"}} className="w-full bg-gray-fafafa border border-gray-dddddd p-30px space-y-30px">
    <div
      className="w-full overflow-hidden rounded-10px p-px"
      style={{
        background: "linear-gradient(to top, #4f3a7a, #f0d3ff)",
        boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        style={{ backgroundColor: "#dfdbfa" }}
        className="w-full bg-gray-323232 rounded-10px overflow-hidden p-30px space-y-30px"
      >
        <div className="flex space-x-20px items-start -mt-px">
          <img className="object-none mt-px" src={Image1} alt="" />
          <div
            className="w-full rounded-xl p-px "
            style={{
              backgroundColor: "#cccccc",
              height: "394px",
            }}
          >
            <div style={{ backgroundColor: "#ffffff", height: "392px" }} className="w-full h-full rounded-xl p-20px">
              <div className="space-y-23px">
                <Item
                  number="1."
                  title="종목 및 경기선택"
                  text="① 싱글뷰를 선택합니다."
                  text2="② 종목을 선택합니다."
                  text3="③ 경기를 선택합니다."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gray-494745 mt-29px" style={{ background: "#aaaaaa" }} />

        <div className="flex space-x-20px items-start -mt-px">
          <img className="object-none mt-px" src={Image2} alt="" />
          <div
            className="w-full rounded-xl p-px "
            style={{
              backgroundColor: "#cccccc",
              height: "394px",
            }}
          >
            <div style={{ backgroundColor: "#ffffff", height: "392px" }} className="w-full h-full rounded-xl p-20px">
              <div className="space-y-23px">
                <Item
                  number="2."
                  title="베팅항목선택"
                  text="원하는 ① ② 배당을 선택합니다."
                  text1_1="- 다양한 ② 배당 제공 및 선택 가능"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-gray-494745 mt-29px" style={{ background: "#aaaaaa" }} />

        <div className="flex space-x-20px items-start -mt-px">
          <img className="object-none mt-px" src={Image3} alt="" />
          <div
            className="w-full rounded-xl p-px "
            style={{
              backgroundColor: "#cccccc",
              height: "394px",
            }}
          >
            <div style={{ backgroundColor: "#ffffff", height: "392px" }} className="w-full h-full rounded-xl p-20px">
              <div className="space-y-23px">
                <Item
                  number="3."
                  title="베팅금액입력"
                  text="① 싱글과 멀티베팅 선택이 가능합니다."
                  text1_1="- 싱글 선택 시 베팅금액 개별 입력 가능"
                  text2="② 원하는 베팅금액을 입력합니다."
                  text3="③ [베팅하기] 버튼을 누릅니다."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gray-494745 mt-29px" style={{ background: "#aaaaaa" }} />

        <div className="flex space-x-20px items-start -mt-px">
          <img className="object-none mt-px" src={Image4} alt="" />
          <div
            className="w-full rounded-xl p-px "
            style={{
              backgroundColor: "#cccccc",
              height: "394px",
            }}
          >
            <div style={{ backgroundColor: "#ffffff", height: "392px" }} className="w-full h-full rounded-xl p-20px">
              <div className="space-y-23px">
                <Item number="4." title="베팅완료" text="[확인] 버튼을 누르면 베팅이 완료됩니다." />
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gray-494745 mt-29px" style={{ background: "#aaaaaa" }} />

        <div className="flex space-x-20px items-start -mt-px">
          <img className="object-none mt-px" src={Image5} alt="" />
          <div
            className="w-full rounded-xl p-px "
            style={{
              backgroundColor: "#cccccc",
              height: "394px",
            }}
          >
            <div style={{ backgroundColor: "#ffffff", height: "392px" }} className="w-full h-full rounded-xl p-20px">
              <div className="space-y-23px">
                <Item
                  number="5."
                  title="베팅내역확인"
                  text="① 나의 베팅내역을 확인합니다."
                  text2="② 수락 및 대기중 등 베팅상태를 확인합니다."
                  text3="③ 베팅내역 및 결과를 확인할 수 있습니다."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gray-494745 mt-29px" style={{ background: "#aaaaaa" }} />

        <div className="flex space-x-20px items-start -mt-px">
          <img className="object-none mt-px" src={Image6} alt="" />
          <div
            className="w-full rounded-xl p-px "
            style={{
              backgroundColor: "#cccccc",
              height: "394px",
            }}
          >
            <div style={{ backgroundColor: "#ffffff", height: "392px" }} className="w-full h-full rounded-xl p-20px">
              <div className="space-y-23px">
                <Item
                  number="6."
                  title="베팅결과확인"
                  text="① 리그, 팀명, 기간 등 검색 가능합니다."
                  text2="② 경기결과 및 베팅결과 등 확인 가능합니다."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveSportSingle;
