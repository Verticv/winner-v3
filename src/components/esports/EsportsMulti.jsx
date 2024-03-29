import React from "react";
import Image8 from "../../images/esports/8.png";
import Image9 from "../../images/esports/9.png";
import Image10 from "../../images/esports/10.png";
import Image11 from "../../images/esports/11.png";
import Image12 from "../../images/esports/12.png";
import Dot from "../../images/esports/dot.png";

const EsportsMulti = () => {
  const Item = ({
    number = "1.",
    title = "보유머니",
    text = "본인의 보유머니가 표시됩니다.",
    text2 = null,
    text3 = null,
    text4 = null,
    text5 = null,
    text6 = null,
    text7 = null,
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
        <span style={{ color: "#666" }} className="flex h-16px items-center text-14px tracking-tight">
          {text3}
        </span>
      )}
      {text4 && (
        <span style={{ color: "#666" }} className="flex h-16px items-center text-14px tracking-tight">
          {text4}
        </span>
      )}
      {text5 && (
        <span style={{ color: "#666" }} className="flex h-16px items-center text-14px tracking-tight">
          {text5}
        </span>
      )}
      {text6 && (
        <span style={{ color: "#666" }} className="flex h-16px items-center text-14px tracking-tight">
          {text6}
        </span>
      )}
      {text7 && (
        <span style={{ color: "#666" }} className="flex h-16px items-center text-14px tracking-tight">
          {text7}
        </span>
      )}
    </div>
  );

  return (
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
          <img className="object-none" src={Image8} alt="" />
          <div
            className="w-full rounded-xl p-px "
            style={{
              backgroundColor: "#cccccc",
              height: "370px",
            }}
          >
            <div style={{ backgroundColor: "#ffffff", height: "368px" }} className="w-full h-full rounded-xl p-20px">
              <Item
                number="1."
                title="종목 및 경기선택"
                text="가. ① 게임종류를 선택합니다."
                text2="나. ② 경기를 선택합니다."
              />
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gray-dddddd" style={{ background: "#aaaaaa" }} />

        <div className="flex space-x-20px items-start">
          <img className="object-none" src={Image9} alt="" />
          <div
            className="w-full rounded-xl p-px "
            style={{
              backgroundColor: "#cccccc",
              height: "419px",
            }}
          >
            <div style={{ backgroundColor: "#ffffff", height: "417px" }} className="w-full h-full rounded-xl p-20px">
              <Item
                number="2."
                title="배당항목선택"
                text="가. ①"
                color1="[+]"
                color2="[+]"
                color3="버튼을 눌러서 원하는 배당을"
                text2="선택합니다."
                text3="나. 선택한 경기(배당)가 ② 팔레이리스트에"
                text4="추가됩니다."
                text5="- 최소 2개 이상 각각 다른 경기를 추가하세요."
                text6="다. 2경기 이상 추가되면 ③ [확인] 버튼을"
                text7="누릅니다."
              />

              <div
                style={{
                  width: "97px",
                  height: "25px",
                  //   backgroundColor: "#f45400",
                  backgroundColor: "#f45400",
                }}
                className="text-white flex items-center justify-center font-bold text-18px tracking-tight pt-px mt-60px"
              >
                알아두세요!
              </div>
              <div className="flex items-center">
                <span style={{ color: "#666" }} className="flex h-16px items-center text-14px tracking-tight mt-5px">
                  ※ 각 팀의 좌/우 가장자리에 있는 ①
                  <p style={{ color: "#0072bc" }} className="ml-2px text-blue-2980b9">
                    [+]
                  </p>
                  <p style={{ color: "#f04281" }}>[+]</p>
                </span>
              </div>
              <div className="flex items-center">
                <span style={{ color: "#666" }} className="flex h-16px items-center text-14px tracking-tight mt-4px">
                  버튼을 누르면 선택한 경기(배당)가{" "}
                </span>
              </div>
              <div className="flex items-center">
                <span style={{ color: "#666" }} className="flex h-16px items-center text-14px tracking-tight mt-4px">
                  ② 팔레이리스트에 추가됩니다.
                </span>
              </div>
              <div className="flex items-center">
                <span style={{ color: "#666" }} className="flex h-16px items-center text-14px tracking-tight mt-4px">
                  ※ 팔레이베팅은 최소 2개 이상 각각{" "}
                </span>
              </div>
              <div className="flex items-center">
                <span style={{ color: "#666" }} className="flex h-16px items-center text-14px tracking-tight mt-4px">
                  다른 경기를 조합하여 베팅할 수 있습니다.
                </span>
              </div>
              <div className="flex items-center">
                <span style={{ color: "#666" }} className="flex h-16px items-center text-14px tracking-tight mt-4px">
                  (같은 게임 팔레이베팅 불가){" "}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gray-dddddd" style={{ background: "#aaaaaa" }} />

        <div className="flex space-x-20px items-start">
          <img className="object-none" src={Image10} alt="" />
          <div
            className="w-full rounded-xl p-px "
            style={{
              backgroundColor: "#cccccc",
              height: "370px",
            }}
          >
            <div style={{ backgroundColor: "#ffffff", height: "368px" }} className="w-full h-full rounded-xl p-20px">
              <Item
                number="3."
                title="베팅금액입력"
                text="가. ① 베팅금액을 입력합니다."
                text2="나. ② [베팅] 버튼을 누르면 베팅이 완료됩니다."
              />
              <div
                style={{
                  width: "97px",
                  height: "25px",
                  //   backgroundColor: "#f45400",
                  backgroundColor: "#f45400",
                }}
                className="text-white flex items-center justify-center font-bold text-18px tracking-tight pt-px mt-60px"
              >
                알아두세요!
              </div>
              <div className="flex items-center">
                <img src={Dot} className="object-contain mr-4px h-4px mt-6px" alt="" />
                <span style={{ color: "#666" }} className="flex h-16px items-center text-14px tracking-tight mt-7px">
                  1/8 최대 : 최대 한도금액을 8로 나눈 금액 베팅
                </span>
              </div>
              <div className="flex items-center">
                <img src={Dot} className="object-contain mr-4px h-4px mt-6px" alt="" />
                <span style={{ color: "#666" }} className="flex h-16px items-center text-14px tracking-tight mt-5px">
                  1/4 최대 : 최대 한도금액을 4로 나눈 금액 베팅
                </span>
              </div>
              <div className="flex items-center">
                <img src={Dot} className="object-contain mr-4px h-4px mt-6px" alt="" />
                <span style={{ color: "#666" }} className="flex h-16px items-center text-14px tracking-tight mt-5px">
                  1/2 최대 : 최대 한도금액을 2로 나눈 금액 베팅{" "}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gray-dddddd" style={{ background: "#aaaaaa" }} />

        <div className="flex space-x-20px items-start">
          <img className="object-none" src={Image11} alt="" />
          <div
            className="w-full rounded-xl p-px "
            style={{
              backgroundColor: "#cccccc",
              height: "370px",
            }}
          >
            <div style={{ backgroundColor: "#ffffff", height: "368px" }} className="w-full h-full rounded-xl p-20px">
              <Item
                number="4."
                title="베팅완료"
                text="베팅이 완료되면 ① 베팅내역 화면이 나타나며"
                text2="상세 베팅내역을 확인할 수 있습니다."
              />
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gray-dddddd" style={{ background: "#aaaaaa" }} />

        <div className="flex space-x-20px items-start">
          <img className="object-none" src={Image12} alt="" />
          <div
            className="w-full rounded-xl p-px "
            style={{
              backgroundColor: "#cccccc",
              height: "370px",
            }}
          >
            <div style={{ backgroundColor: "#ffffff", height: "368px" }} className="w-full h-full rounded-xl p-20px">
              <Item
                number="5."
                title="베팅내역확인"
                text="가. ① [내 베팅] 메뉴를 선택합니다."
                text2="나. ② 베팅내역을 확인할 수 있습니다."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EsportsMulti;
