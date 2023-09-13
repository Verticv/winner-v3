import MyPageTitle from "components/myPage/MyPageTitle";
import React from "react";
import { useHistory } from "react-router";
import WinnerLogo from "../../images/freeBoard/winner_logo_v4.png";

const AnnouncementView = () => {
  const TitleText = "농구[쿼터] / 배구[세트] 스페셜 규정";
  const SubtitleText =
    "스페셜 - 1쿼터 및 3쿼터 실시간 (3쿼터는 2쿼터 종료 후 업데이트됩니다.)  1,3쿼터 [핸디캡] 양 팀의 ";
  const BodyText1 =
    "1,3쿼터 [핸디캡] \n 양 팀의 1,3쿼터 승패를 맞추는 게임입니다. \n 1,3쿼터 [오버/언더] \n 1,3쿼터 양 팀 득점 총합의 언더/오버를 맞추는 게임입니다. \n 1쿼터 핸디 + 언더/오버 + 첫2 + 첫3 + 첫자 크로스 베팅 가능";
  const BodyText2 =
    "1쿼터/3쿼터 핸디캡[1Q], 1쿼터 언더/오버[1Q 언더/오버] 종목 대상경기의 1쿼터 경기기록만을 기준점에 따라 핸디캡과 언더/오버 규칙에 \n 적용하는 방식입니다. 기준점 오류 및 배당 오류로 잘못 업데이트된 경기는 적중특례 처리 되니 이점 참고 바랍니다. \n 모든 결과값은 공식 홈페이지 기준으로 결과 처리됩니다. \n https://www.nba.com \n https://www.kbl.or.kr \n https://www.wkbl.or.kr/main/index.asp";
  const BodyText3 =
    "[첫 블로킹 득점] \n 처음으로 블로킹 득점을 기록한 팀을 맞추는 게임 입니다.   블로킹으로 점수를 획득한 팀으로 마감 처리됩니다.";
  const BodyText4 =
    "[첫 서브 득점] \n 처음으로 서브 득점을 기록한 팀을 맞추는 게임 입니다.   서브로 점수를 획득한 팀으로 마감 처리됩니다. \n 세트 핸디캡 및 오버/언더 [세트] 종목은 대상경기의 [세트] 양 팀의 총 득점의 합산으로 경기결과가 적용됩니다. \n WINNER 크로스베팅의 경우 세트별 오버/언더로 업데이트 되지만, [세트]의 경우 양팀 합산 [세트] 점수로 결과값이  적용된다는점 참고 바랍니다.";
  const BodyText5 =
    "[세트] 핸디 + 오버/언더 크로스베팅 가능 \n [세트 핸디 및 오버/언더]  + [첫 서브 득점] +  [첫 블로킹 득점] 크로스베팅 가능 \n 1세트 / 2세트 / 3세트 /4세트 실시간 업데이트 진행 기준점 오류 및 배당 오류로 잘못 업데이트된 경기는 적중특례 처리 되니 이점 참고 바랍니다.";
  const BodyText6 = "모든 결과값은 공식 홈페이지 기준으로 결과 처리됩니다.";
  const BodyText7 = "https://www.kovo.co.kr/main.asp";

  const history = useHistory();
  const NewLabel = (
    <div
      className="bg-rf04281 w-20px h-19px text-white flex items-center justify-center text-12px pb-px pr-px"
      style={{ borderRadius: "100%" }}
    >
      N
    </div>
  );

  return (
    <div>
      <MyPageTitle title="공지사항" />

      <div
        className="w-full overflow-hidden rounded-10px p-px mt-10px"
        style={{
          background: "linear-gradient(to top, #ededeb, #cb78e6)",
          boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.5)",
          letterSpacing: "0",
        }}
      >
        <div style={{ backgroundColor: "#ffffff" }} className="w-full bg-gray-323232 rounded-9px overflow-hidden">
          {/* TITLE */}
          <div
            style={{ backgroundColor: "#f7f7f7", borderColor: "#dddddd" }}
            className="bg-gray-2e2e2e border-b border-gray-252525 flex items-start px-19px py-15px space-x-10px"
          >
            <p
              className="text-14px font-semibold flex flex-shrink-0 mt-3px"
              style={{ color: "rgb(114,20,143)" }}
            >
              스포츠북
            </p>
            <div className="text-15px font-bold text-r444444 mt-2px">
              <h1 className="align-top">
                {TitleText} <span className="inline-block align-top ml-6px pt-2px font-normal">{NewLabel}</span>
              </h1>
            </div>
          </div>
          {/* SENDER */}
          <div
            style={{ backgroundColor: "#f7f7f7", borderColor: "#dddddd" }}
            className="bg-gray-2e2e2e h-56px border-b border-gray-252525 flex items-center px-19px space-x-10px"
          >
            <img className="mb-2px h-17px w-72px object-contain" src={WinnerLogo} alt="" />
            <div className="w-px h-10px ml-8px mt-px" style={{ background: "#ccc" }} />
            <div className="font-spoqaMedium text-14px text-r444444 mt-px">2021.06.29</div>
          </div>
          <div className="w-full bg-gray-323232 flex flex-col px-19px border-b border-gray-252525 py-18px">
            <p className="font-spoqaMedium text-16px text-r444444 ">{SubtitleText}</p>
            <p className="font-spoqaMedium text-14px text-r444444 space-y-10px mt-39px">
              {BodyText1.split("\n").map((item, i) => (
                <p key={i} className="flex items-center">
                  {item}
                </p>
              ))}
            </p>
            <p className="font-spoqaMedium text-14px text-r444444 space-y-10px mt-39px">
              {BodyText2.split("\n").map((item, i) => (
                <p key={i} className="flex items-center">
                  {item}
                </p>
              ))}
            </p>
            <p className="font-spoqaMedium text-14px text-r444444 space-y-10px mt-39px">
              {BodyText3.split("\n").map((item, i) => (
                <p key={i} className="flex items-center">
                  {item}
                </p>
              ))}
            </p>
            <p className="font-spoqaMedium text-14px text-r444444 space-y-10px mt-39px">
              {BodyText4.split("\n").map((item, i) => (
                <p key={i} className="flex items-center">
                  {item}
                </p>
              ))}
            </p>
            <p className="font-spoqaMedium text-14px text-r444444 space-y-10px mt-39px">
              {BodyText5.split("\n").map((item, i) => (
                <p key={i} className="flex items-center">
                  {item}
                </p>
              ))}
            </p>
            <p className="font-spoqaMedium text-14px text-r444444 space-y-10px mt-39px">
              {BodyText6.split("\n").map((item, i) => (
                <p key={i} className="flex items-center">
                  {item}
                </p>
              ))}
            </p>
            <p className="font-spoqaMedium text-14px text-r444444 space-y-10px mt-39px">
              {BodyText7.split("\n").map((item, i) => (
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
            <span className="font-spoqaMedium tracking-tight text-13px text-shadow-5 text-white">이전</span>
          </div>
        </button>

        <button
          className="flex items-center justify-center h-52px p-px rounded-6px hover:filter hover:brightness-125"
          style={{
            background: "linear-gradient(to right, #15cfee, #3197e5)",
            width: "192px",
            boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
          }}
          onClick={() => history.push("/cscenter/announcement/all")}
        >
          <div className="flex items-center justify-center cursor-pointer">
            <span className="font-bold tracking-tight text-16px text-shadow-5 text-white">목록보기</span>
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
            <span className="font-spoqaMedium tracking-tight text-13px text-shadow-5 text-white">다음</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AnnouncementView;
