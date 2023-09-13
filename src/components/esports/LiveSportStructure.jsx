import React from "react";
import Image1 from "../../images/liveSport/ls1_g01.png";
import Image2 from "../../images/liveSport/ls1_g02.png";
import Image3 from "../../images/liveSport/ls1_g03.png";
import Image4 from "../../images/liveSport/ls1_g04.png";
import Image5 from "../../images/liveSport/ls1_g05.png";
import Dot from "../../images/esports/dot.png";
import TitleIcon from "../../images/title-icon1.png";

const LiveSportStructure = () => {
  const TitleText = ({ number = "01", title = "싱글뷰 화면구성" }) => (
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
    title = "싱글뷰 및 멀티뷰",
    text = "싱글화면과 멀티화면 선택 가능",
    text2 = null,
    text3 = null,
    other = null,
    color1 = null,
    color2 = null,
    color3 = null,
  }) => (
    <div style={{ letterSpacing: "-0.025em" }} className="flex flex-col space-y-4px">
      <div className="flex text-16px tracking-tight font-bold space-x-2px  h-18px items-center mb-10px">
        <span style={{ color: "#682aa7" }} className="text-golden-gradLight">
          {number}
        </span>
        <span style={{ color: "#444444" }} className="text-gray-ccc2b6">
          {title}
        </span>
      </div>
      <span
        style={{
          color: "#828282",
          letterSpacing: "-0.025em",
        }}
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
      {text2 && (
        <span
          style={{ color: "#828282" }}
          className="flex h-16px items-center tracking-tight font-spoqaMedium text-14px"
        >
          {text2}
        </span>
      )}
      {text3 && (
        <span
          style={{ color: "#828282" }}
          className="flex h-16px items-center tracking-tight font-spoqaMedium text-14px"
        >
          {text3}
        </span>
      )}
      {other && (
        <div className="flex mt-px pt-20px text-14px">
          <span style={{ color: "#828282" }} className="flex h-16px items-center tracking-tight font-spoqaMedium">
            {other}
          </span>
        </div>
      )}
    </div>
  );

  const LongItem = ({
    number = "4.",
    title = "메뉴",
    text = "결과 : 경기결과 확인 가능",
    text2 = "팀 : 팀 순위 확인 가능",
    text2_2 = null,
    text3 = null,
    text4 = null,
    text5 = null,
    other = null,
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
      <div className="flex mt-px text-14px tracking-tight">
        <img src={Dot} className="object-none mr-4px" alt="" />
        <span
          style={{
            color: "#828282",
            letterSpacing: "-0.025em",
          }}
          className="flex h-16px items-center font-spoqaMedium "
        >
          {text}
        </span>
      </div>
      <div className="flex mt-px text-14px tracking-tight">
        <img src={Dot} className="object-none mr-4px" alt="" />
        <span style={{ color: "#828282" }} className="flex h-16px items-center font-spoqaMedium ">
          {text2}
        </span>
      </div>
      {text2_2 && (
        <div className="flex mt-px pl-10px pb-20px text-14px tracking-tight">
          <span style={{ color: "#828282" }} className="flex h-16px items-center font-spoqaMedium ">
            {text2_2}
          </span>
        </div>
      )}

      {text3 && (
        <div className="flex mt-px text-14px tracking-tight">
          <img src={Dot} className="object-none mr-4px" alt="" />
          <span style={{ color: "#828282" }} className="flex h-16px items-center font-spoqaMedium ">
            {text3}
          </span>
        </div>
      )}
      {text4 && (
        <div className="flex mt-px text-14px tracking-tight">
          <img src={Dot} className="object-none mr-4px" alt="" />
          <span style={{ color: "#828282" }} className="flex h-16px items-center font-spoqaMedium ">
            {text4}
          </span>
        </div>
      )}
      {text5 && (
        <div className="flex mt-px text-14px tracking-tight">
          <img src={Dot} className="object-none mr-4px" alt="" />
          <span style={{ color: "#828282" }} className="flex h-16px items-center font-spoqaMedium ">
            {text5}
          </span>
        </div>
      )}
      {other && (
        <div className="flex mt-px pt-20px text-14px tracking-tight">
          <span style={{ color: "#828282" }} className="flex h-16px items-center font-spoqaMedium ">
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
              height: "665px",
            }}
          >
            <div style={{ backgroundColor: "#ffffff", height: "663px" }} className="w-full h-full rounded-xl p-20px">
              <TitleText />

              <div className="mt-19px w-full h-px bg-gray-dddddd" style={{ background: "#cccccc" }}></div>
              <div className="pt-20px space-y-23px">
                <Item />
                <Item number="2." title="경기종목" text="즐겨찾기 및 다양한 경기종목 선택 가능" />
                <LongItem
                  number="3."
                  title="경기리스트"
                  text="다양한 실시간 경기정보 제공"
                  text2="배당, 영상, 통계 등 다양한 정보 제공"
                />
                <LongItem
                  number="4."
                  title="경기영상 및 통계 표시"
                  text="실시간으로 경기영상 표시"
                  text2="매치, 통계 등 다양한 경기정보 표시"
                />
                <Item number="5." title="상세배당" text="다양한 상세 배당 제공 및 선택 가능" />
                <LongItem
                  number="6."
                  title="베팅슬립"
                  text="선택한 베팅정보 확인 및 삭제 가능"
                  text2="싱글과 멀티베팅 선택 가능"
                  text2_2="- 싱글 선택 시 베팅금액 개별 입력 가능"
                  text3="베팅금액 입력 가능"
                  text4="[베팅하기] 버튼을 누르면 베팅완료"
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
              height: "638px",
            }}
          >
            <div style={{ backgroundColor: "#ffffff", height: "636px" }} className="w-full h-full rounded-xl p-20px">
              <TitleText number="02" />

              <div className="mt-20px w-full h-px bg-gray-dddddd" style={{ background: "#cccccc" }}></div>

              <div className="pt-20px space-y-23px">
                <LongItem
                  number="1."
                  title="버튼"
                  text="진행중경기 : 라이브경기 정렬 가능"
                  text2="예정경기 : 예정경기 정렬 가능"
                />
                <LongItem
                  number="2."
                  title="버튼"
                  text="리그선택 : 선택한 리그별 정렬 가능"
                  text2="시간순보기 : 시간순 경기 정렬 가능"
                  text3="리그순보기 : 리그순 경기 정렬 가능"
                  text4="경기상태 : 진행중과 예정경기 정렬 가능"
                  text5="새로고침 : 배당률 새로고침 가능"
                />
                <LongItem
                  number="3."
                  title="상태표시"
                  text="실시간 경기영상 제공상태 표시(ON/OFF)"
                  text2="통계 및 경기정보 제공상태 표시(ON/OFF)"
                  other="※ 각 아이콘을 누르면 ⑥ 화면에서 확인 가능"
                />
                <Item
                  number="4."
                  title="상세 배당 개수"
                  text="배당항목 개수가 표시되며 해당 버튼을"
                  text2="누르면 상세 배당 확인 및 선택 가능"
                />
                <Item number="5." title="배당률 업데이트" text="배당률 변경(업/다운) 시 화살표 아이콘 표시" />
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gray-494745 mt-29px" style={{ background: "#aaaaaa" }} />

        <div className="flex space-x-20px items-start">
          <img className="object-none" src={Image3} alt="" />
          <div
            className="w-full rounded-xl p-px -mt-px"
            style={{
              backgroundColor: "#cccccc",
              height: "478px",
            }}
          >
            <div style={{ backgroundColor: "#ffffff", height: "476px" }} className="w-full h-full rounded-xl p-20px">
              <TitleText number="03" />

              <div className="mt-20px w-full h-px bg-gray-dddddd" style={{ background: "#cccccc" }}></div>

              <div className="pt-20px space-y-23px">
                <Item number="1." title="경기 즐겨찾기" text="클릭 시 해당 경기 즐겨찾기 추가 및 확인 가능" />
                <Item number="2." title="배당 즐겨찾기" text="클릭 시 해당 배당 즐겨찾기 추가 및 확인 가능" />
                <Item number="3." title="배당 숨김 및 보기" text="클릭 시 해당 배당항목 숨김 및 보기 가능" />
                <LongItem
                  number="4."
                  title="베팅내역"
                  text="나의 베팅내역 확인 가능"
                  text2="수락 및 대기중 등 베팅상태 확인 가능"
                />
                <Item number="5." title="전체보기" text="베팅내역 및 베팅결과 등 확인 가능" />
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gray-494745 mt-29px" style={{ background: "#aaaaaa" }} />

        <div className="flex space-x-20px items-start">
          <img className="object-none" src={Image4} alt="" />
          <div
            className="w-full rounded-xl p-px -mt-px"
            style={{
              backgroundColor: "#cccccc",
              height: "394px",
            }}
          >
            <div style={{ backgroundColor: "#ffffff", height: "392px" }} className="w-full h-full rounded-xl p-20px">
              <TitleText number="01" title="멀티뷰 화면구성" />

              <div className="mt-20px w-full h-px bg-gray-dddddd" style={{ background: "#cccccc" }}></div>

              <div className="pt-20px space-y-23px">
                <Item number="1." title="경기리스트" text="다양한 실시간 경기정보 제공" />
                <Item
                  number="2."
                  title="멀티화면"
                  text="총 9개의 멀티화면을 제공하며"
                  text2="상단에 있는 ① 경기를 더블 클릭하거나"
                  text3="해당 멀티화면으로 드래그하면 경기 추가 가능"
                />
                <LongItem
                  number="3."
                  title="버튼"
                  text="전체추가 : 화면에 전체 경기 추가(최대 9개)"
                  text2="전체삭제 : 화면에 있는 경기 전체 삭제"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gray-494745 mt-29px" style={{ background: "#aaaaaa" }} />

        <div className="flex space-x-20px items-start">
          <img className="object-none" src={Image5} alt="" />
          <div
            className="w-full rounded-xl p-px -mt-px"
            style={{
              backgroundColor: "#cccccc",
              height: "454px",
            }}
          >
            <div style={{ backgroundColor: "#ffffff", height: "452px" }} className="w-full h-full rounded-xl p-20px">
              <TitleText number="02" title="멀티뷰 화면구성" />

              <div className="mt-20px w-full h-px bg-gray-dddddd" style={{ background: "#cccccc" }}></div>

              <div className="pt-20px space-y-23px">
                <LongItem
                  number="1."
                  title="상태표시"
                  text="실시간 경기영상 제공상태 표시(ON/OFF)"
                  text2="통계 및 경기정보 제공상태 표시(ON/OFF)"
                  text3="해당 멀티화면의 경기 삭제 가능"
                />
                <Item
                  number="2."
                  title="상세배당"
                  text="다양한 배당정보가 표시되며"
                  text2="상/하 스크롤하여 배당정보 확인 가능"
                />
                <Item
                  number="3."
                  title="버튼"
                  text="버튼을 누르면 해당 경기는 싱글뷰 화면으로"
                  text2="이동되며 라이브 영상 및 통계 정보와"
                  text3="상세 배당화면 등 싱글뷰 화면으로 이용 가능"
                  other="※ 이외 동일한 기능은 싱글뷰 가이드 참조"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveSportStructure;
