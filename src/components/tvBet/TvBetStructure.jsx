import React from "react";
import Image1 from "../../images/tvBet/1.png";
import Image2 from "../../images/tvBet/2.png";
import Dot from "../../images/esports/dot.png";
import TitleIcon from "../../images/title-icon1.png";

const TvBetStructure = () => {
  const TitleText = ({ number = "01", title }) => (
    <div className="flex items-center">
      <img className="z-10 object-none" src={TitleIcon} alt="" />
      <span
        style={{ color: "#444444" }}
        className="text-18px font-bold tracking-tight text-gray-ccc2b6 ml-10px h-22px flex items-center"
      >
        {title}
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
    text4 = null,
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
      <span style={{ color: "#666" }} className="flex h-16px items-center text-14px tracking-tight mt-px">
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
        <span style={{ color: "#666" }} className="flex h-16px items-center text-14px tracking-tight">
          {text2}
        </span>
      )}
      {text3 && (
        <span style={{ color: "#666" }} className={`flex h-16px items-center text-14px tracking-tight`}>
          {text3}
        </span>
      )}
      {text4 && (
        <span style={{ color: "#666" }} className="flex h-16px items-center text-14px tracking-tight">
          {text4}
        </span>
      )}
    </div>
  );
  const LongItem = ({
    no3rd = false,
    no4th = false,
    no5th = false,
    number = "4.",
    title = "메뉴",
    text = "결과 : 경기결과 확인 가능",
    text2 = "팀 : 팀 순위 확인 가능",
    text3 = "T&C : 베팅규정 확인 가능",
    text4 = "공지 : 게임 공지 확인 가능",
    text5 = "",
    text11 = null,
    text22 = null,
    text33 = null,
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
        <span style={{ color: "#666" }} className="flex h-16px items-center text-14px tracking-tight ">
          {text}
        </span>
      </div>
      {text11 && (
        <div className="flex mt-px">
          <img src={Dot} className="object-none mr-4px opacity-0" alt="" />
          <span style={{ color: "#666" }} className="flex h-16px items-center text-14px tracking-tight ">
            {text11}
          </span>
        </div>
      )}

      <div className="flex mt-px">
        <img src={Dot} className="object-none mr-4px" alt="" />
        <span style={{ color: "#666" }} className="flex h-16px items-center text-14px tracking-tight ">
          {text2}
        </span>
      </div>
      {text22 && (
        <div className="flex mt-px">
          <img src={Dot} className="object-none mr-4px opacity-0" alt="" />
          <span style={{ color: "#666" }} className="flex h-16px items-center text-14px tracking-tight ">
            {text22}
          </span>
        </div>
      )}
      {!no3rd && (
        <div className="flex mt-px">
          <img src={Dot} className="object-none mr-4px" alt="" />
          <span style={{ color: "#666" }} className="flex h-16px items-center text-14px tracking-tight ">
            {text3}
          </span>
        </div>
      )}
      {text33 && (
        <div className="flex mt-px">
          <img src={Dot} className="object-none mr-4px opacity-0" alt="" />
          <span style={{ color: "#666" }} className="flex h-16px items-center text-14px tracking-tight ">
            {text33}
          </span>
        </div>
      )}
      {!no4th && (
        <div className="flex mt-px">
          <img src={Dot} className="object-none mr-4px" alt="" />
          <span style={{ color: "#666" }} className="flex h-16px items-center text-14px tracking-tight ">
            {text4}
          </span>
        </div>
      )}
      {!no5th && (
        <div className="flex mt-px">
          <img src={Dot} className="object-none mr-4px" alt="" />
          <span style={{ color: "#666" }} className="flex h-16px items-center text-14px tracking-tight ">
            {text5}
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
              height: "745px",
            }}
          >
            <div style={{ backgroundColor: "#ffffff", height: "743px" }} className="w-full h-full rounded-xl p-20px">
              <TitleText number="01" title="화면구성" />
              <div className="mt-19px w-full h-px bg-gray-dddddd" style={{ background: "#cccccc" }}></div>
              <div className="pt-20px space-y-23px">
                <LongItem
                  title="메뉴"
                  number="1."
                  text="로비 : 전체 게임리스트 확인 및 게임선택 가능"
                  text2="플레이방법 : 게임별 이용방법 및 규정"
                  text22={"확인 가능"}
                  text3="게임 : 딜러영상 및 배당판을 제공하며"
                  text33="실제 베팅 가능"
                  text4="베팅기록 : 상세 베팅내역 확인 가능"
                  text5="결과 : 상세 경기결과 확인 가능"
                />
                <Item number="2." title="보유머니" text="본인의 보유머니가 표시됩니다." />
                <Item number="3." title="게임종류선택" text="다양한 게임을 선택할 수 있습니다." />
                <Item
                  number="4."
                  title="최근게임결과"
                  text="최근 게임 결과정보 및 최근 게임 우승자의"
                  text2="승리금액을 확인할 수 있습니다."
                />
                <Item number="5." title="베팅기록" text="진행중인 베팅 및 베팅 결과를" text2="확인할 수 있습니다." />
                <Item
                  number="6."
                  title="이벤트정보"
                  text="현재 라이브 중인 게임과 예정된"
                  text2="게임이벤트를 확인할 수 있습니다."
                  text3={"원하는 이벤트를 선택하면 배당판이 활성화되며"}
                  text4="배당을 선택하면 베팅이 가능합니다."
                />
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
              height: "578px",
            }}
          >
            <div style={{ backgroundColor: "#ffffff", height: "576px" }} className="w-full h-full rounded-xl p-20px">
              <TitleText number="02" title="화면구성" />

              <div className="mt-20px w-full h-px bg-gray-dddddd" style={{ background: "#cccccc" }}></div>

              <div className="pt-20px space-y-23px">
                <Item title="라이브영상" text="각 게임별 라이브영상을 제공합니다." />
                <Item
                  number="2."
                  title="배당버튼"
                  text="카드 아래에 표시되는 각 배당 버튼을"
                  text2="누르면 베팅이 가능합니다."
                />
                <Item
                  number="3."
                  title="다양한 베팅종류 제공"
                  text="다양한 베팅 종류가 표시되며"
                  text2={"배당 선택 시 베팅이 가능합니다."}
                />
                <LongItem
                  no4th
                  no5th
                  title="베팅슬립"
                  number="4."
                  text="선택한 베팅정보 확인 및 삭제 가능"
                  text2="베팅금액 입력 가능"
                  text3="[베팅하기] 버튼을 누르면 베팅완료"
                />
                <Item
                  number="5."
                  title="설정"
                  text="영상 내에 표시되는 배당정보설정, 음향설정,"
                  text2="전체/기본화면설정, 영상화질설정,"
                  text3="영상위치설정, 영상 새창띄우기 등 제공합니다."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvBetStructure;
