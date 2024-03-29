import SportsBetHistoryPanel from "components/myPage/betHistory/SportsBetHistoryPanel";
import React from "react";
import { useHistory } from "react-router";
import Rank1 from "../../images/freeBoard/1_v3.png";
import Rank2 from "../../images/freeBoard/2_v3.png";
import Rank3 from "../../images/freeBoard/3_v3.png";
import Rank4 from "../../images/freeBoard/4_v3.png";
import Rank5 from "../../images/freeBoard/5_v3.png";
import ReplyArrow from "../../images/freeBoard/reply_v3.png";

const FreeBoardView2 = () => {
  const history = useHistory();

  const ReplyCell = ({ text = "이벤트 참여 감사합니다.", rank = 1, username = "쇼유", isEdit = false, tag = null }) => (
    <div style={{ letterSpacing: 0 }} className="w-full pr-19px">
      <div className="py-10px ml-22px flex items-center justify-between">
        <div className="self-start pt-6px flex items-start pr-10px">
          <img className="object-none mt-5px" src={ReplyArrow} alt="" />
          <img
            className="pl-14px mt-px"
            src={rank === 1 ? Rank1 : rank === 2 ? Rank2 : rank === 3 ? Rank3 : rank === 4 ? Rank4 : Rank5}
            alt=""
          />
          <p className="ml-5px mt-px text-15px font-semibold text-r444444">{username}</p>
        </div>
        {isEdit === true ? (
          <div className="flex self-start items-start space-x-4px justify-end">
            <button
              style={{
                background: "linear-gradient(to right, #15cfee, #3197e5)",
                boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
              }}
              className="flex items-center justify-center w-90px h-36px rounded-6px hover:filter hover:brightness-125"
            >
              <div className="flex items-center justify-center cursor-pointer">
                <span className="font-spoqaMedium tracking-tight text-13px text-red-ffd2d2 pt-px text-white text-shadow-5">
                  수정하기
                </span>
              </div>
            </button>
            <button
              className="flex items-center justify-center w-90px h-36px p-px rounded-6px hover:filter hover:brightness-125"
              style={{
                background: "linear-gradient(to right, #ff7760, #f14a53)",
                boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="flex items-center justify-center cursor-pointer">
                <span className="font-spoqaMedium tracking-tight text-13px text-golden-highLight pt-px text-white text-shadow-5">
                  삭제하기
                </span>
              </div>
            </button>
          </div>
        ) : (
          <button
            style={{
              background: "#5d659f",
              boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
            }}
            className="self-start flex items-center justify-center h-36px w-90px rounded-6px p-px hover:filter hover:brightness-125"
          >
            <div className="flex items-center justify-center cursor-pointer">
              <span className="font-spoqaMedium tracking-tight text-13px text-blue-d6f3ff ml-2px text-white text-shadow-5">
                답글달기
              </span>
            </div>
          </button>
        )}
      </div>
      <div style={{ letterSpacing: 0 }} className="pl-48px -mt-px">
        <div
          style={{ borderColor: "#bbbbbb", backgroundColor: "#ffffff" }}
          className="w-full border rounded-4px bg-gray-252525 flex items-start px-20px  pt-17px pb-16px justify-between text-r444444 mt-px"
        >
          <div className="text-14px font-spoqa -mt-2px">
            {tag && (
              <span style={{ color: "#2980b9" }} className={`mr-10px font-semibold`}>
                @{tag.length > 8 ? tag.substring(0, 8) : tag}{" "}
                {tag.length > 8 && <span className="-mt-5px inline-block">...</span>}
              </span>
            )}
            <span className=" text-r444444 -ml-px">{text}</span>
          </div>
          <p className="text-r444444 font-spoqa text-14px flex flex-shrink-0 ml-7px -mt-2px">2021.06.28 15:36</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full mt-5px">
      <div
        className="w-full overflow-hidden rounded-10px p-px"
        style={{
          background: "linear-gradient(to top, #ededeb, #cb78e6)",
          boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div style={{ backgroundColor: "#ffffff" }} className="w-full bg-gray-323232 rounded-10px overflow-hidden">
          <div
            style={{ backgroundColor: "#f7f7f7", borderColor: "#dddddd" }}
            className="bg-gray-2e2e2e border-b border-gray-252525 flex items-start px-19px py-15px space-x-10px h-55px"
          >
            <div
              style={{ fontSize: "15px", letterSpacing: 0 }}
              className="text-15px text-r444444 -ml-px mt-px font-bold"
            >
              이벤트 신청합니다.
            </div>
          </div>

          <div
            style={{ backgroundColor: "#f7f7f7", borderColor: "#dddddd", letterSpacing: 0 }}
            className="py-16px pb-17px w-full border-b border-gray-252525 px-19px flex items-start text-14px font-spoqaMedium text-r444444"
          >
            <img className="mt-px ml-px" src={Rank1} alt="" />
            <p className="ml-4px mt-px text-14px">
              하이도1207
              <div className="inline-block">
                <div className="inline-block w-px h-10px mx-10px mt-px" style={{ background: "#ccc" }} />

                <p className="inline-block text-14px">2021.06.28 15:49</p>
                <div className="inline-block w-px h-10px mx-10px mt-px" style={{ background: "#ccc" }} />

                <div className="inline-block font-spoqaMedium text-14px text-r444444 mr-3px">댓글</div>
                <div
                  style={{ backgroundColor: "#f04281" }}
                  className="inline-block pl-7px pr-7px h-20px rounded-full text-white text-12px font-roboto items-center justify-center bg-red-e9441d pt-px"
                >
                  <p className="mb-px">2</p>
                </div>
              </div>
            </p>
          </div>

          <div
            style={{ borderColor: "#dddddd" }}
            className="pt-23px pb-24px border-b border-gray-252525 px-30px space-y-28px bg-white"
          >
            <SportsBetHistoryPanel
              type={1}
              winAmount="+900,000,000"
              isAttached={true}
              noButtons={true}
              width={"full"}
            />
            <SportsBetHistoryPanel type={2} isAttached={true} noButtons={true} width={"full"} />
          </div>

          <div
            style={{ minHeight: "443px", letterSpacing: 0 }}
            className="p-20px bg-gray-323232 text-14px font-spoqa text-r444444 pt-16px -ml-2px"
          >
            베팅기록 올려봅니다.
          </div>
        </div>
      </div>
      <div className="flex space-x-4px mb-20px mt-19px justify-end">
        <button
          style={{
            background: "linear-gradient(to right, #15cfee, #3197e5)",
            boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
          }}
          className="flex items-center justify-center w-90px h-36px rounded-6px hover:filter hover:brightness-125"
        >
          <div className="flex items-center justify-center cursor-pointer">
            <span className="font-spoqaMedium tracking-tight text-13px text-red-ffd2d2 text-white text-shadow-5">
              수정하기
            </span>
          </div>
        </button>
        <button
          className="flex items-center justify-center w-90px h-36px rounded-6px hover:filter hover:brightness-125"
          style={{
            background: "linear-gradient(to right, #ff7760, #f14a53)",
            boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div className="flex items-center justify-center cursor-pointer">
            <span className="font-spoqaMedium tracking-tight text-13px text-golden-highLight pt-px text-white text-shadow-5">
              삭제하기
            </span>
          </div>
        </button>
      </div>

      <div
        className="w-full overflow-hidden rounded-10px p-px"
        style={{
          background: "linear-gradient(to top, #4f3a7a, #f0d3ff)",
          boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.5)",
          letterSpacing: 0,
        }}
      >
        <div
          style={{ backgroundColor: "#dfdbfa" }}
          className="w-full bg-gray-323232 rounded-10px pl-18px pr-19px pb-21px"
        >
          <div className="pt-16px pb-18px flex items-start space-x-5px">
            <p className="text-15px font-spoqaMedium text-r444444 -ml-px font-bold">댓글 작성하기</p>
            <div
              style={{ backgroundColor: "#f04281" }}
              className="w-20px h-19px bg-red-e9441d rounded-full text-12px text-white flex items-center justify-center font-roboto flex-shrink-0 mt-2px"
            >
              <p className="flex items-center h-12px mb-px">2</p>
            </div>
          </div>
          <div style={{ height: "93px" }} className="relative flex w-full rounded-6px bg-gray-252525 -mt-px">
            <div
              style={{
                height: "93px",
                width: "1110px",
                boxShadow: "inset 0px 1px 1px 0px rgba(0, 0, 0, 0.5), inset 1px 0px 1px 0px rgba(0, 0, 0, 0.5)",
              }}
              className="h-full bg-white rounded-l-6px"
            >
              <textarea
                style={{
                  width: "1095px",
                  resize: "none",
                  overflowY: "auto",
                  letterSpacing: 0,
                  // boxShadow: "inset 0px 1px 1px 0px rgba(0, 0, 0, 0.5), inset 1px 0px 1px 0px rgba(0, 0, 0, 0.5)",
                }}
                className="scroll-div4 outline-none w-full px-19px pb-17px pt-16px text-14px font-spoqa bg-transparent placeholder-gray-c8c8c8 bg-gray-252525 rounded-l-6px text-r444444 h-full"
                placeholder="욕설, 상대방 비방글, 타사이트 언급, 홍보 등은 경고없이 삭제되며 사이트 이용에 제한을 받을 수 있습니다."
              />
            </div>

            <button
              className="rounded-6px right-0 absolute flex items-center justify-center w-120px p-px hover:filter hover:brightness-125"
              style={{
                background: "#5d659f",
                height: "93px",
                boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="flex items-center justify-center cursor-pointer">
                <span className="tracking-tight text-14px text-white text-shadow-5">댓글작성</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div
        className="w-full overflow-hidden rounded-10px p-px mt-20px"
        style={{
          background: "linear-gradient(to top, #4f3a7a, #f0d3ff)",
          boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.5)",
          letterSpacing: 0,
        }}
      >
        <div style={{ backgroundColor: "#dfdbfa" }} className="w-full bg-gray-323232 rounded-10px pb-21px">
          <div style={{ borderColor: "#b5afdd" }} className="border-b border-gray-252525 pl-20px pr-19px">
            <div className="py-9px w-full flex items-center justify-between">
              <div className="self-start pt-6px flex items-start space-x-5px mt-px">
                <img src={Rank2} alt="" className="mt-2px ml-px" />
                <p className="text-15px font-semibold text-r444444">신풍사우나</p>
              </div>
              <div className="self-start flex space-x-4px items-start justify-end">
                <button
                  style={{
                    background: "linear-gradient(to right, #15cfee, #3197e5)",
                    boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
                  }}
                  className="flex items-center justify-center w-90px h-36px rounded-6px hover:filter hover:brightness-125"
                >
                  <div className="flex items-center justify-center cursor-pointer">
                    <span className="font-spoqaMedium tracking-tight text-13px text-red-ffd2d2 pt-px text-white text-shadow-5">
                      수정하기
                    </span>
                  </div>
                </button>
                <button
                  className="flex items-center justify-center w-90px h-36px p-px rounded-6px hover:filter hover:brightness-125"
                  style={{
                    background: "linear-gradient(to right, #ff7760, #f14a53)",
                    boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <div className="flex items-center justify-center cursor-pointer">
                    <span className="font-spoqaMedium tracking-tight text-13px text-golden-highLight pt-px text-white text-shadow-5">
                      삭제하기
                    </span>
                  </div>
                </button>
              </div>
            </div>

            <div
              style={{ borderColor: "#bbbbbb", backgroundColor: "#ffffff" }}
              className="rounded-6px border border-solid bg-gray-252525 w-full flex items-start px-19px pt-17px pb-14px justify-between text-r444444 mb-10px mt-px"
            >
              <p className="text-15px font-spoqa pr-7px -ml-px -mt-2px">두개의 이벤트 모두 참여하였습니다</p>
              <p className="text-14px font-spoqa flex-shrink-0 -mt-2px">2021.06.28 15:36</p>
            </div>
          </div>

          <ReplyCell rank={5} />
          <ReplyCell
            rank={2}
            username="신풍사우나"
            isEdit={true}
            text="오전에 발행되나요?"
            tag="소유소유소유소유소유소유소유소유"
          />
        </div>
      </div>

      <div
        className="w-full overflow-hidden rounded-10px p-px mt-20px"
        style={{
          background: "linear-gradient(to top, #4f3a7a, #f0d3ff)",
          boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.5)",
          letterSpacing: 0,
        }}
      >
        <div style={{ backgroundColor: "#dfdbfa" }} className=" bg-gray-323232 rounded-10px ">
          <div style={{ borderColor: "#b8b4d8" }} className="border-b border-gray-252525 px-19px">
            <div className="py-9px w-full flex items-center  justify-between">
              <div className="self-start pt-6px flex items-start space-x-5px mt-px">
                <img src={Rank2} alt="" className="mt-px ml-2px" />
                <p className="text-15px font-semibold text-r444444 -mt-px">신풍사우나</p>
              </div>
              <div className="self-start flex space-x-4px justify-end">
                <button
                  style={{
                    background: "linear-gradient(to right, #15cfee, #3197e5)",
                    boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
                  }}
                  className="flex items-center justify-center w-90px h-36px rounded-6px  hover:filter hover:brightness-125"
                >
                  <div className="flex items-center justify-center cursor-pointer">
                    <span className="font-spoqaMedium tracking-tight text-13px text-red-ffd2d2 text-white text-shadow-5">
                      수정하기
                    </span>
                  </div>
                </button>
                <button
                  className="flex items-center justify-center w-90px h-36px p-px rounded-6px hover:filter hover:brightness-125"
                  style={{
                    background: "linear-gradient(to right, #ff7760, #f14a53)",
                    boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <div className="flex items-center justify-center cursor-pointer">
                    <span className="font-spoqaMedium tracking-tight text-13px text-golden-highLight pt-px text-white text-shadow-5">
                      삭제하기
                    </span>
                  </div>
                </button>
              </div>
            </div>

            <div
              style={{
                borderColor: "#bbbbbb",
                backgroundColor: "#ffffff",
                minHeight: "54px",
              }}
              className="rounded-6px border border-solid bg-gray-252525  w-full  flex items-start px-19px pt-17px pb-14px justify-between text-r444444 mb-10px mt-px"
            >
              <p className="text-15px font-spoqa pr-7px -mt-2px -ml-px">두개의 이벤트 모두 참여하였습니다</p>
              <p className="text-14px font-spoqa flex-shrink-0 -mt-2px">2021.06.28 15:36</p>
            </div>
          </div>
          <div style={{ height: "114px" }} className="px-20px pb-10px pt-10px">
            <div style={{ height: "93px" }} className="rounded-4px bg-gray-252525 relative flex w-full">
              <div
                style={{
                  height: "93px",
                  width: "1110px",
                  boxShadow: "inset 0px 1px 1px 0px rgba(0, 0, 0, 0.5), inset 1px 0px 1px 0px rgba(0, 0, 0, 0.5)",
                }}
                className="h-full bg-white rounded-l-6px"
              >
                <textarea
                  style={{
                    width: "1095px",
                    resize: "none",
                    overflowY: "auto",
                    // boxShadow: "inset 0px 1px 1px 0px rgba(0, 0, 0, 0.5), inset 1px 0px 1px 0px rgba(0, 0, 0, 0.5)",
                    letterSpacing: 0,
                  }}
                  className="scroll-div4 outline-none w-full h-full bg-transparent px-19px pb-18px pt-16px text-14px font-spoqa placeholder-gray-c8c8c8 bg-gray-252525 rounded-6px text-r444444"
                  placeholder="두개의 이벤트 모두 참여하였습니다."
                />
              </div>
              <button
                className="rounded-6px right-0 absolute flex items-center justify-center w-120px p-px hover:filter hover:brightness-125 -mr-px"
                style={{
                  background: "#5d659f",
                  height: "93px",
                  boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div className="flex items-center justify-center cursor-pointer">
                  <span className="tracking-tight text-14px text-white text-shadow-5">댓글수정</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full overflow-hidden rounded-10px p-px mt-22px"
        style={{
          background: "linear-gradient(to top, #4f3a7a, #f0d3ff)",
          boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.5)",
          letterSpacing: 0,
        }}
      >
        <div style={{ backgroundColor: "#dfdbfa" }} className="w-full bg-gray-323232 rounded-10px">
          <div style={{ borderColor: "#b8b4d8" }} className="border-b border-gray-252525 px-19px">
            <div className="py-9px w-full flex items-center  justify-between">
              <div className="self-start pt-6px flex items-start space-x-5px mt-px">
                <img src={Rank2} alt="" className="mt-px ml-2px" />
                <p className="text-15px font-semibold text-r444444 -mt-px">신풍사우나</p>
              </div>
              <button
                style={{
                  background: "#5d659f",
                  boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
                }}
                className="self-start flex items-center justify-center h-36px w-90px rounded-6px p-px hover:filter hover:brightness-125"
              >
                <div className="flex items-center justify-center cursor-pointer">
                  <span className="font-spoqaMedium tracking-tight text-13px text-blue-d6f3ff ml-2px text-white text-shadow-5">
                    답글달기
                  </span>
                </div>
              </button>
            </div>

            <div
              style={{
                borderColor: "#bbbbbb",
                backgroundColor: "#ffffff",
                minHeight: "54px",
              }}
              className="rounded-6px border w-full  flex items-start px-19px pt-17px pb-14px justify-between text-r444444 mb-10px mt-px"
            >
              <p className="text-15px font-spoqa pr-7px -ml-px -mt-2px">두개의 이벤트 모두 참여하였습니다</p>
              <p className="text-14px font-spoqa flex-shrink-0  -mt-2px">2021.06.28 15:36</p>
            </div>
          </div>
          <div style={{ height: "114px" }} className="px-20px pb-11px pt-10px">
            <div style={{ height: "93px" }} className="relative flex w-full rounded-4px">
              <div
                style={{
                  height: "93px",
                  width: "1110px",
                  boxShadow: "inset 0px 1px 1px 0px rgba(0, 0, 0, 0.5), inset 1px 0px 1px 0px rgba(0, 0, 0, 0.5)",
                }}
                className="h-full bg-white rounded-l-6px"
              >
                <textarea
                  style={{
                    width: "1095px",
                    resize: "none",
                    overflowY: "auto",
                    letterSpacing: 0,
                  }}
                  className="scroll-div4 outline-none w-full h-full bg-transparent px-19px pb-18px pt-16px text-14px font-spoqa placeholder-gray-c8c8c8 bg-gray-252525 rounded-6px text-r444444"
                  placeholder="욕설, 상대방 비방글, 타사이트 언급, 홍보 등은 경고없이 삭제되며 사이트 이용에 제한을 받을 수 있습니다."
                />
              </div>

              <button
                className="-mr-px rounded-6px right-0 absolute flex items-center justify-center w-120px p-px hover:filter hover:brightness-125"
                style={{
                  background: "#5d659f",
                  height: "93px",
                  boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div className="flex items-center justify-center cursor-pointer">
                  <span className="tracking-tight text-14px text-white text-shadow-5">답글작성</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-22px mb-65px flex items-start justify-between">
        <button
          className="flex items-center justify-center h-36px w-90px p-px rounded-6px hover:filter hover:brightness-125"
          style={{
            background: "#936cee",
            boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
          }}
          onClick={() => history.push("/freeboard/view/0")}
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
          onClick={() => history.push("/freeboard/main")}
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

export default FreeBoardView2;
