import MyPageTitle from "components/myPage/MyPageTitle";
import React from "react";
import { useHistory } from "react-router";
import Rank1Icon from "../../images/cscenter/rank1.png";

const ContactView = () => {
  const BodyText1 = "안녕하세요. 혁신적인 완성형 베팅업체『WINNER 고객센터』입니다.";
  const BodyText2 =
    "추가적인 문의사항은 언제든지 전화 요청 또는 카카오톡, 텔레그램 고객센터로 \n 문의하시면 24시간 항상 친절하게 안내 도와드리겠습니다. \n 앞으로 많은 이용 부탁드립니다.";
  const BodyText3 = "감사합니다.";
  const BodyText4 = "24시 모바일 고객센터 카카오톡: WINN7777 텔레그램: WINN7777 \n 예비 도메인안내: 위너주소.com";
  const history = useHistory();

  return (
    <div>
      <MyPageTitle title="문의하기" />

      <div
        className="w-full overflow-hidden rounded-10px p-px mt-10px"
        style={{
          background: "linear-gradient(to top, #ededeb, #cb78e6)",
          boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div style={{ backgroundColor: "#ffffff" }} className="w-full bg-gray-323232 rounded-10px overflow-hidden">
          <div
            style={{ backgroundColor: "#f7f7f7", borderColor: "#dddddd" }}
            className="bg-gray-2e2e2e border-b border-gray-252525 flex items-center px-19px py-15px space-x-10px h-55px"
          >
            <div
              style={{
                maxWidth: "92px",
                backgroundColor: "#999999",
              }}
              className={`px-8px h-29px rounded-full text-white text-14px flex items-center justify-center cursor-pointer`}
            >
              <p
                style={{
                  maxWidth: "75px",
                  textOverflow: "unset",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
                className="-mt-px"
              >
                답변완료
              </p>
            </div>
            <div
              style={{
                maxWidth: "92px",
                backgroundColor: "#40915f",
              }}
              className={`px-8px h-29px rounded-full text-white text-14px flex items-center justify-center cursor-pointer`}
            >
              <p
                style={{
                  maxWidth: "75px",
                  textOverflow: "unset",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
                className="-mt-px"
              >
                스포츠
              </p>
            </div>

            <div className="text-15px font-spoqaMedium tracking-tight text-r666666 -ml-px mt-px">스포츠북 문의</div>
          </div>

          <div
            style={{ backgroundColor: "#f7f7f7", borderColor: "#dddddd" }}
            className="bg-gray-2e2e2e h-56px border-b border-gray-252525 flex items-center px-19px space-x-10px"
          >
            <img src={Rank1Icon} alt="" />
            <p className="ml-3px text-r666666 text-14px">마이마이프로틴화이팅</p>
            <div className="w-px h-10px ml-8px mt-px" style={{ background: "#ccc" }} />
            <div className="font-spoqaMedium text-14px tracking-tight text-r666666">2021.06.28 15:49</div>
          </div>

          <div className="w-full bg-gray-323232 py-22px px-16px">
            <div className="rounded-4px  py-15px  flex items-start px-21px font-spoqa text-14px tracking-tight text-r666666 bg-gray-252525">
              스포츠북 문의 입니다.
            </div>

            <div className="bg-gray-414141 rounded-4px pt-20px pb-17px  px-22px mt-21px font-spoqaMedium text-14px tracking-tight text-r666666 space-y-35px">
              <div className="space-y-10px">
                {BodyText1.split("\n").map((item, i) => (
                  <p key={i} className="flex items-center">
                    {item}
                  </p>
                ))}
              </div>
              <div className="space-y-10px">
                {BodyText2.split("\n").map((item, i) => (
                  <p key={i} className="flex items-center">
                    {item}
                  </p>
                ))}
              </div>
              <div className="space-y-10px">
                {BodyText3.split("\n").map((item, i) => (
                  <p key={i} className="flex items-center">
                    {item}
                  </p>
                ))}
              </div>
              <div className="space-y-10px">
                {BodyText4.split("\n").map((item, i) => (
                  <p key={i} className="flex items-center">
                    {item}
                  </p>
                ))}
              </div>
            </div>
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
          onClick={() => history.push("/cscenter/contact/all")}
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

export default ContactView;
