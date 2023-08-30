import React from "react";
import Image3 from "../../images/esports/3-v3.png";
import Image4 from "../../images/esports/4-v3.png";
import Image5 from "../../images/esports/5-v3.png";
import Image6 from "../../images/esports/6-v3.png";
import Image7 from "../../images/esports/7-v3.png";

const LiveSport = () => {
  const Item = ({
    number = "1.",
    title = "보유머니",
    text = "본인의 보유머니가 표시됩니다.",
    text2 = null,
    text3 = null,
    color1 = null,
    color2 = null,
    color3 = null,
  }) => (
    <div className="flex flex-col space-y-4px">
      <div className="flex text-18px tracking-tight font-bold space-x-2px h-18px items-center">
        <span style={{ color: "#682aa7" }} className="text-golden-gradLight">
          {number}
        </span>
        <span style={{ color: "#444444" }} className="text-gray-ccc2b6">
          {title}
        </span>
      </div>
      <span
        style={{ color: "#828282", letterSpacing: "-0.091em" }}
        className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium mt-px"
      >
        {text}
      </span>
      {text2 && (
        <span
          style={{ color: "#828282" }}
          className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium "
        >
          {text2}
          <p className="ml-2px text-blue-r0056a6">{color1}</p>
          <p style={{ color: "#ff1237" }} className="mr-2px">
            {color2}
          </p>
          <p>{color3}</p>
        </span>
      )}
      {text3 && (
        <span
          style={{ color: "#828282" }}
          className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium "
        >
          {text3}
        </span>
      )}
    </div>
  );

  return (
    // <div style={{borderRadius:"1em"}} className="w-full bg-gray-fafafa border border-gray-dddddd p-30px space-y-30px">
    <>
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
          <div className="flex space-x-20px items-start">
            <img className="object-none" src={Image3} alt="" />
            <div
              className="w-full rounded-xl p-px "
              style={{
                backgroundColor: "#cccccc",
                height: "395px",
              }}
            >
              <div style={{ backgroundColor: "#ffffff", height: "393px" }} className="w-full h-full rounded-xl p-20px">
                <Item
                  number="1."
                  title="종목선택"
                  text="원하는 종목을 선택합니다."
                  text2="예)"
                  color2="축구"
                  color3="선택"
                />
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gray-dddddd" style={{ background: "#aaaaaa" }} />

          <div className="flex space-x-20px items-start">
            <img className="object-none" src={Image4} alt="" />
            <div
              className="w-full rounded-xl p-px "
              style={{
                backgroundColor: "#cccccc",
                height: "395px",
              }}
            >
              <div style={{ backgroundColor: "#ffffff", height: "393px" }} className="w-full h-full rounded-xl p-20px">
                <Item
                  number="2."
                  title="베팅항목선택"
                  text="원하는 ① ② 배당을 선택합니다."
                  text2="예)"
                  color2="승무패[정규시간] 혼카"
                  color3="배당 선택"
                />
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gray-dddddd" style={{ background: "#aaaaaa" }} />

          <div className="flex space-x-20px items-start">
            <img className="object-none" src={Image5} alt="" />
            <div
              className="w-full rounded-xl p-px "
              style={{
                backgroundColor: "#cccccc",
                height: "394px",
              }}
            >
              <div style={{ backgroundColor: "#ffffff", height: "392px" }} className="w-full h-full rounded-xl p-20px">
                <Item
                  number="3."
                  title="베팅금액입력"
                  text="원하는 ① 베팅금액을 입력한 후"
                  text2="② [베팅하기] 버튼을 눌러주세요."
                />
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gray-dddddd" style={{ background: "#aaaaaa" }} />

          <div className="flex space-x-20px items-start">
            <img className="object-none" src={Image6} alt="" />
            <div
              className="w-full rounded-xl p-px "
              style={{
                backgroundColor: "#cccccc",
                height: "394px",
              }}
            >
              <div style={{ backgroundColor: "#ffffff", height: "392px" }} className="w-full h-full rounded-xl p-20px">
                <Item number="4." title="베팅완료" text="[확인] 버튼을 누르면 베팅이 완료됩니다." />
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gray-dddddd" style={{ background: "#aaaaaa" }} />

          <div className="flex space-x-20px items-start">
            <img className="object-none" src={Image7} alt="" />
            <div
              className="w-full rounded-xl p-px "
              style={{
                backgroundColor: "#cccccc",
                height: "394px",
              }}
            >
              <div style={{ backgroundColor: "#ffffff", height: "392px" }} className="w-full h-full rounded-xl p-20px">
                <Item
                  number="5."
                  title="베팅내역확인"
                  text="베팅내역 화면에서 베팅진행 상태 및"
                  text2="내역을 확인 할 수 있습니다."
                  // text3="※ [전체보기]를 누르면 전체 내역 확인 가능"
                />
                <div className="flex items-center">
                  <span
                    style={{ color: "#8c8c8c" }}
                    className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium mt-24px"
                  >
                    ※ [전체보기]를 누르면 전체 내역 확인 가능
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveSport;
