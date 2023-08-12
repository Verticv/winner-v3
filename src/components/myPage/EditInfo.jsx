import React, { useState } from "react";
import MyPageTitle from "./MyPageTitle";

const EditInfo = ({ name = "Louie3Louie3Louie3Louie3Louie3Louie3Louie3" }) => {
  const [selectedInput, setSelectedInput] = useState();

  const Title = ({ text }) => (
    <div style={{ width: '140px', background: '#9b6bd4' }}
      className="space-y-14px flex-shrink-0 h-44px pl-10px flex items-center rounded-4px">
      <label className="text-white text-16px tracking-Stightest">
        {text}
      </label>
    </div>
  );

  return (
    <div>
      <MyPageTitle title="회원정보수정" />

      <div className="mt-7px">
        <div className="flex flex-col items-center justify-center text-20px space-y-5px text-white tracking-tighter">
          <div className="flex items-center h-19px">
            <span className="text-golden-aa9264 font-bold mr-4px truncate" style={{color:'#ffd98b'}}>
              {name.length > 20 ? name.substring(0, 20) : name}{" "}
              {name.length > 20 && (
                <span className="-mt-5px inline-block">...</span>
              )}
            </span>

            <span>님의 회원정보를 수정합니다.</span>
          </div>
          <div className="flex items-center h-19px">
            아이디와 비밀번호 보안에 신경써주십시오.
          </div>
        </div>

        <div
          className="w-full rounded-10px mt-32px p-px overflow-hidden"
          style={{
            height: "752px",
            background: "linear-gradient(to top, #ededeb, #cb78e6)",
            boxShadow:'0px 0px 8px 0px rgba(0, 0, 0, 0.5)'
          }}
        >
          <div style={{paddingLeft:'175px', paddingRight:'175px',background:'#dfdbfa'}} className="h-full w-full pt-40px rounded-10px">
            <div className="w-full flex flex-col space-y-8px">
              <div className="flex space-x-10px w-full">
                <Title text="아이디" />
                <div
                  className="h-44px space-y-2 flex items-center flex-shrink-0 rounded-4px overflow-hidden"
                  style={{
                    width: "540px",
                    background: "#ffffff",
                    boxShadow: "inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)",
                    color:"#7a7a7a"
                  }}
                >
                  <label style={{width: "540px"}} className="text-16px pl-10px pr-5px mt-px">
                    louie3
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col space-y-5px mt-39px">
              <div className="flex space-x-10px w-full">
                <Title text="비밀번호" />
                <div
                  className={`w-full h-44px overflow-hidden rounded-4px relative py-4px pl-px`}
                  style={{
                    boxShadow: "inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)",
                    backgroundColor: "#fff",
                    }}
                >
                  <input
                    className="bg-white w-full text-16px outline-none pl-9px placeholder-gray-c8c8c8 h-42px rounded-4px pt-px"
                    onFocus={(e) => setSelectedInput(0)}
                    onBlur={(e) => setSelectedInput(false)}
                    type="password"
                  />
                  <div
                    style={{
                      backgroundColor:
                        selectedInput === 0 ? "#732dab" : "#ffffff00",
                    }}
                    className={`absolute bottom-0 w-full h-3px`}
                  />
                </div>
              </div>
              <div style={{marginLeft:'150px',color:'#828282'}} className="h-13px flex items-center text-14px tracking-minus05">
               최소 6~16자 내외로 입력해주세요. (알파벳 소문자 + 특수문자 포함)
              </div>
            </div>
            {/* BREAK */}
            <div className="w-full flex flex-col space-y-10px mt-21px">
              <div className="flex space-x-10px w-full">
                <Title text="비밀번호 확인" />
                <div
                  className={` w-full h-44px overflow-hidden rounded-4px relative py-4px pl-px`}
                  style={{
                    boxShadow: "inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)",
                    backgroundColor: "#fff",
                    }}
                >
                  <input
                    className="bg-white w-full text-16px outline-none pl-9px placeholder-gray-c8c8c8 h-42px rounded-4px pt-px"
                    onFocus={(e) => setSelectedInput(1)}
                    onBlur={(e) => setSelectedInput(false)}
                    type="password"
                  />
                  <div
                    style={{
                      backgroundColor:
                        selectedInput === 1 ? "#732dab" : "#ffffff00",
                    }}
                    className={`absolute bottom-0 w-full h-2px`}
                  />
                </div>
              </div>
            </div>
            {/* BREAK */}
            <div className="w-full flex flex-col space-y-5px mt-39px">
              <div className="flex space-x-10px w-full overflow-hidden rounded-4px">
                <Title text="환전 비밀번호" />
                <div
                  className={`w-full h-44px overflow-hidden rounded-4px relative py-4px pl-px`}
                   style={{
                    boxShadow: "inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)",
                    backgroundColor: "#fff",
                    }}
                >
                  <input
                   className="bg-white w-full text-16px outline-none pl-9px placeholder-gray-c8c8c8 h-42px rounded-4px pt-px"
                    onFocus={(e) => setSelectedInput(2)}
                    onBlur={(e) => setSelectedInput(false)}
                    type="password"
                  />
                  <div
                    style={{
                      backgroundColor:
                        selectedInput === 2 ? "#732dab" : "#ffffff00",
                    }}
                    className={`absolute bottom-0 w-full h-3px`}
                  />
                </div>
              </div>
              <div style={{marginLeft:'150px',color:'#828282',lineHeight:'1'}} className="flex items-center text-14px  tracking-minus05">
                영문 및 숫자를 1자 이상 반드시 포함하여 4~8자 내외로 입력해주세요.
                <br/>
              (특수문자 사용불가)
              </div>
            </div>
            {/* BREAK */}
            <div className="w-full flex flex-col space-y-5px mt-6px">
              <div className="flex space-x-10px w-full">
                <Title text="환전 비밀번호 확인" />
                <div
                  className={`w-full h-44px overflow-hidden rounded-4px relative py-4px pl-px`}
                  style={{
                    boxShadow: "inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)",
                    backgroundColor: "#fff",
                    }}
                >
                  <input
                     className="bg-white w-full text-16px outline-none pl-9px placeholder-gray-c8c8c8 h-42px rounded-4px pt-px"
                    onFocus={(e) => setSelectedInput(3)}
                    onBlur={(e) => setSelectedInput(false)}
                    type="password"
                  />
                  <div
                    style={{
                      backgroundColor:
                        selectedInput === 3 ? "#732dab" : "#ffffff00",
                    }}
                    className={`absolute bottom-0 w-full h-3px`}
                  />
                </div>
              </div>
            </div>

            <div className="w-full space-y-9px mt-39px ">
              <div className="w-full flex flex-col space-y-9px">
                <div className="flex space-x-10px w-full">
                  <Title text="레벨" />
                  <div
                    className="h-44px space-y-2 flex items-center flex-shrink-0 rounded-4px"
                    style={{
                      width: "540px",
                      background: "#ffffff",
                      boxShadow: "inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)",
                      color:"#7a7a7a"
                    }}
                  >
                    <label className="text-16px pl-10px mt-px" >
                      레벨 LV.1 (점수 : 0) / 다음레벨 LV.2 (점수 : 20)
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col space-y-9px">
                <div className="flex space-x-10px w-full">
                  <Title text="스포츠" />
                  <div
                    className="h-44px space-y-2 flex items-center flex-shrink-0  rounded-4px"
                    style={{
                      width: "540px",
                      background: "#ffffff",
                      boxShadow: "inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)",
                      color:"#7a7a7a"
                    }}
                  >
                    <label className="text-16px pl-10px mt-px">
                      Bronze
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col space-y-9px">
                <div className="flex space-x-10px w-full">
                  <Title text="카지노" />
                  <div
                    className="h-44px space-y-2 flex items-center flex-shrink-0  rounded-4px"
                    style={{
                      width: "540px",
                      background: "#ffffff",
                      boxShadow: "inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)",
                      color:"#7a7a7a"
                    }}
                  >
                    <label className="text-16px pl-10px mt-px ">
                      Bronze
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col space-y-9px">
                <div className="flex space-x-10px w-full">
                  <Title text="슬롯" />
                  <div
                    className="h-44px space-y-2 flex items-center flex-shrink-0 rounded-4px"
                    style={{
                      width: "540px",
                      background: "#fff",
                      boxShadow: "inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)",
                      color:"#7a7a7a"
                    }}
                  >
                    <label className=" text-16px pl-10px mt-px">
                      Bronze
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col space-y-9px">
                <div className="flex space-x-10px w-full">
                  <Title text="미니게임" />
                  <div
                    className="h-44px space-y-2 flex items-center flex-shrink-0 rounded-4px"
                    style={{
                      width: "540px",
                      background: "#fff",
                      boxShadow: "inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)",
                      color:"#7a7a7a"
                    }}
                  >
                    <label className=" text-16px pl-10px mt-px">
                      Bronze
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20px w-full flex items-center justify-center mb-60px">
          <button
            style={{
              width: '212px',
              background: "linear-gradient(to right, #ff7760, #f14a53)",
            }} className="flex items-center justify-center h-52px rounded-6px hover:filter hover:brightness-125 panelBtn cursor-pointer">
            <span className="tracking-tight text-16px text-shadow-5 text-white">
              수정하기
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditInfo;

