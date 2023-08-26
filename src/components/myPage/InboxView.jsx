import React from "react";
import MyPageTitle from "./MyPageTitle";
import { useHistory } from "react-router";
import WinnerSmall from "../../images/freeBoard/winner_logo_v4.png";

const InboxView = () => {
  const TitleText = "서버 점검 안내";
  const PostedTime = "2021.06.28 15:49";
  const SubtitleText = "정기 점검 안내";
  const BodyText =
    "안녕하세요. 혁신적인 완성형 베팅업체『WINNER 고객센터』입니다. \n 금일 정기 점검이예정되어 안내드리오니 참고 후 이용 부탁드립니다. \n 점검 내용 : 정기 점검 \n 시작 시간 : 2021년 05월 10일 14:00 \n 종료 시간 : 2021년 05년 10일 17:00 \n 점검은 상황에 따라 조기 종료 혹은 지연 될 수 있습니다. \n 최대한 빠른 정상화를 위해 노력하겠습니다.\n 추가적인 문의사항은 언제든지 전화 요청 또는 카카오톡, 텔레그램 고객센터로 \n 몬의하시면 24시간 항상 친절하게 안내 도움드리겠습니다/ \n 앞으로 많은 이용 부탁드립니다. \n 감사합니다.";
  const FooterText = "24시 모바일 고객센터 카카오톡: WINN7777 텔레그램: WINN7777 \n 예비 도메인안내: 위너주소.com";

  const history = useHistory();

  const NewLabel = (
    <div
      className="bg-rf04281 w-20px h-19px text-white flex items-center justify-center text-12px pb-px pr-px"
      style={{ borderRadius: "100%", letterSpacing: "-0.1em" }}
    >
      N
    </div>
  );

  return (
    <div>
      <MyPageTitle title="쪽지관리" />

      <div
        className="w-full overflow-hidden rounded-10px p-px mt-10px"
        style={{
          background: "linear-gradient(to top, #ededeb, #cb78e6)",
          boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div style={{ backgroundColor: "#ffffff" }} className="w-full bg-gray-323232 rounded-9px overflow-hidden">
          {/* TITLE */}
          <div
            style={{ backgroundColor: "#f7f7f7", borderColor: "#dddddd" }}
            className="bg-gray-2e2e2e border-b border-gray-252525 flex items-start px-19px py-15px space-x-10px"
          >
            <div className="text-15px font-spoqaMedium tracking-tight text-r666666 mt-2px">
              <h1 className="align-top">
                {TitleText} <span className="inline-block align-top ml-10px pt-2px">{NewLabel}</span>
              </h1>
            </div>
          </div>
          {/* SENDER */}
          <div
            style={{ backgroundColor: "#f7f7f7", borderColor: "#dddddd" }}
            className="bg-gray-2e2e2e h-56px border-b border-gray-252525 flex items-center px-19px space-x-10px"
          >
            <img className="mb-2px h-17px w-72px object-contain" src={WinnerSmall} alt="" />
            <div className="w-px h-10px ml-8px mt-px" style={{ background: "#ccc" }} />
            <div className="font-spoqaMedium text-14px tracking-tight text-r666666 mt-px">{PostedTime}</div>
          </div>
          <div className="w-full bg-gray-323232 flex flex-col px-19px border-b border-gray-252525 py-18px ">
            <p className="font-spoqaMedium text-15px tracking-tight text-r666666">{SubtitleText}</p>
            <p className="font-spoqaMedium text-14px tracking-tight text-r666666 space-y-34px mt-39px">
              {BodyText.split("\n").map((item, i) => (
                <p key={i} className="flex items-center">
                  {item}
                </p>
              ))}
            </p>
            <p className="font-spoqaMedium text-14px tracking-tight text-r666666 mt-34px space-y-11px">
              {FooterText.split("\n").map((item, i) => (
                <p key={i} className="flex items-center">
                  {item}
                </p>
              ))}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20px mb-60px flex items-start justify-between">
        <button
          className="flex items-center justify-center h-36px w-90px p-px rounded-6px hover:filter hover:brightness-125"
          style={{
            background: "#936cee",
            boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div className="flex items-center justify-center cursor-pointer">
            <span
              style={{ textShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)" }}
              className="font-spoqaMedium tracking-tight text-14px text-golden-highLight pt-px text-white"
            >
              이전
            </span>
          </div>
        </button>

        <button
          className="flex items-center justify-center h-52px p-px rounded-6px hover:filter hover:brightness-125"
          style={{
            background: "linear-gradient(to right, #15cfee, #3197e5)",
            width: "192px",
            boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
          }}
          onClick={() => history.push("/mypage/inbox")}
        >
          <div className="flex items-center justify-center cursor-pointer">
            <span
              style={{ textShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)" }}
              className="font-spoqaMedium tracking-tight text-16px text-golden-highLight pt-px text-white"
            >
              목록보기
            </span>
          </div>
        </button>

        <button
          className="flex items-center justify-center h-36px w-90px p-px rounded-6px hover:filter hover:brightness-125"
          style={{
            background: "#936cee",
            boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div className="flex items-center justify-center cursor-pointer">
            <span
              style={{ textShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)" }}
              className="font-spoqaMedium tracking-tight text-14px text-golden-highLight pt-px text-white"
            >
              다음
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default InboxView;
