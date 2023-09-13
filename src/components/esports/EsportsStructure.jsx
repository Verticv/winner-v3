import React from "react";
import Image1 from "../../images/esports/1.png";
import Image2 from "../../images/esports/2.png";
import Dot from "../../images/esports/dot.png";
import TitleIcon from "../../images/title-icon1.png";

const EsportsStructure = () => {
  const TitleText = ({ number = "01" }) => (
    <div className="flex items-center">
      <img className="z-10 object-none" src={TitleIcon} alt="" />
      <span
        style={{ color: "#444444" }}
        className="text-18px font-bold tracking-tight text-gray-ccc2b6 ml-10px h-22px flex items-center"
      >
        화면구성
      </span>
      <div
        style={{
          background: "linear-gradient(to right, #f4ecd0, #f2eace)",
          borderRadius: "50%",
        }}
        className="w-35px h-33px p-px flex items-center justify-center ml-5px"
      >
        <div
          style={{ backgroundColor: "#682aa7", borderRadius: "50%" }}
          className="w-33px h-31px flex items-center justify-center text-gray-ccc2b6 text-18px text-white font-roboto pb-2px"
        >
          {number}
        </div>
      </div>
    </div>
  );

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
      <div className="flex text-16px tracking-tight font-bold space-x-2px  h-18px items-center mb-10px">
        <span style={{ color: "#682aa7" }} className="text-golden-gradLight">
          {number}
        </span>
        <span style={{ color: "#444444" }} className="text-gray-ccc2b6">
          {title}
        </span>
      </div>
      <span style={{ color: "#828282" }} className={`flex h-16px items-center text-14px tracking-tight mt-px`}>
        {text}{" "}
        <p style={{ color: "#0072bc" }} className="ml-2px text-blue-2980b9">
          {color1}
        </p>
        <p style={{ color: "#f04281" }} className="mr-2px">
          {color2}
        </p>
        <p>{color3}</p>
      </span>
      {text2 && (
        <span style={{ color: "#828282" }} className="flex h-16px items-center text-14px tracking-tight">
          {text2}
        </span>
      )}
      {text3 && (
        <span style={{ color: "#828282" }} className="flex h-16px items-center text-14px tracking-tight">
          {text3}
        </span>
      )}
    </div>
  );

  const LongItem = ({
    number = "4.",
    title = "메뉴",
    text = "결과 : 경기결과 확인 가능",
    text2 = "팀 : 팀 순위 확인 가능",
    text3 = "T&C : 베팅규정 확인 가능",
    text4 = "공지 : 게임 공지 확인 가능",
  }) => (
    <div className="flex flex-col space-y-4px">
      <div className="text-16px tracking-tight font-bold space-x-2px flex h-18px items-center mb-10px">
        <span style={{ color: "#682aa7" }} className="text-golden-gradLight">
          {number}
        </span>
        <span style={{ color: "#444444" }} className="text-gray-ccc2b6">
          {title}
        </span>
      </div>
      <div className="flex mt-px">
        <img src={Dot} className="object-none mr-4px" alt="" />
        <span style={{ color: "#828282" }} className="flex h-16px items-center text-14px tracking-tight ">
          {text}
        </span>
      </div>
      <div className="flex mt-px">
        <img src={Dot} className="object-none mr-4px" alt="" />
        <span style={{ color: "#828282" }} className="flex h-16px items-center text-14px tracking-tight ">
          {text2}
        </span>
      </div>
      <div className="flex mt-px">
        <img src={Dot} className="object-none mr-4px" alt="" />
        <span style={{ color: "#828282" }} className="flex h-16px items-center text-14px tracking-tight ">
          {text3}
        </span>
      </div>
      <div className="flex mt-px">
        <img src={Dot} className="object-none mr-4px" alt="" />
        <span style={{ color: "#828282" }} className="flex h-16px items-center text-14px tracking-tight ">
          {text4}
        </span>
      </div>
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
              height: "585px",
            }}
          >
            <div style={{ backgroundColor: "#ffffff", height: "583px" }} className="w-full h-full rounded-xl p-20px">
              <TitleText />

              <div className="mt-19px w-full h-px bg-gray-dddddd" style={{ background: "#cccccc" }}></div>
              <div className="pt-20px space-y-23px">
                <Item />
                <Item number="2." title="게임종류선택" text="다양한 게임을 선택할 수 있습니다." />
                <Item number="3." title="경기리스트" text="경기리스트를 확인할 수 있습니다." />
                <LongItem />
                <Item number="5." title="내 베팅" text="상세한 베팅내역 확인 가능" />
                <Item number="6." title="팔레이" text="팔레이(다폴더) 리스트 확인 가능" />
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gray-494745 mt-29px" style={{ background: "#aaaaaa" }} />

        <div className="flex space-x-20px items-start">
          <img className="object-none" src={Image2} alt="" />
          <div
            className="w-full rounded-xl p-px -mt-px"
            style={{
              backgroundColor: "#cccccc",
              height: "698px",
            }}
          >
            <div style={{ backgroundColor: "#ffffff", height: "696px" }} className="w-full h-full rounded-xl p-20px">
              <TitleText number="02" />

              <div className="mt-20px w-full h-px bg-gray-dddddd" style={{ background: "#cccccc" }}></div>

              <div className="pt-20px space-y-23px">
                <Item title="메인(초기)화면" text="메인화면으로 이동됩니다." />
                <Item number="2." title="베팅타입 정렬" text="베팅타입 별로 배당판이 정렬됩니다." />
                <Item
                  number="3."
                  title="라이브 배당률"
                  text="경기가 시작되면 라이브 배당률을 확인할 수"
                  text2="있습니다."
                />
                <Item number="4." title="배당판" text="다양한 배당정보가 표시됩니다." />
                <Item
                  number="5."
                  title="+버튼"
                  text="각 팀의 좌/우 가장자리에 있는"
                  color1="[+]"
                  color2="[+]"
                  color3="버튼을"
                  text2="누르면 선택한 경기가 팔레이(다폴더) 리스트에"
                  text3="추가됩니다."
                />
                <Item
                  number="6."
                  title="경기영상"
                  text="라이브경기는 실시간으로 경기영상을 제공하며"
                  text2="대기중인 경기는 경기정보가 표시됩니다."
                />
                <Item
                  number="7."
                  title="경기상세정보"
                  text="경기플레이어, 게임통계, 팀순위 등 다양한"
                  text2="경기정보를 제공합니다."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EsportsStructure;
