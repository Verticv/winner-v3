import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CloseIcon from "../../images/popups/close_icon.png";
import EditInfoIcon from "../../images/popups/edit_info_icon.png";
import Username from "../../images/popups/username.png";
import Password from "../../images/popups/password.png";

const ReauthenticatePopup = ({ setPopupOpen, setSelectedTab }) => {
  const history = useHistory();
  const [selectedInput, setSelectedInput] = useState();

  const username = "Louie3examplelength";
  return (
    <div
      style={{
        height: "616px",
        width: "510px",
        background: "linear-gradient(to right, #b870cd, #9068bf)",
        borderRadius: "20px",
      }}
      className="relative shadow-popup pt-2px"
    >
      <div
        style={{
          borderRadius: "20px",
          background: "linear-gradient(to right, #9d3bbb, #5423a0)",
        }}
        className="w-full h-full overflow-hidden"
      >
        <div style={{ height: "68px" }} className="w-full">
          <button
            style={{ top: "26px", right: "22px" }}
            className="absolute cursor-pointer z-20 filter hover:brightness-125"
            onClick={() => setPopupOpen(false)}
          >
            <img src={CloseIcon} alt="close_icon" />
          </button>

          <div className="w-full flex justify-center">
            <label
              style={{ color: "#ffffff", marginTop: "22px", marginLeft: "2px" }}
              className="font-bold text-24px h-24px flex items-center"
            >
              회원정보수정
            </label>
          </div>
        </div>

        <div
          style={{ height: "547px", backgroundColor: "#dfdbfa" }}
          className="w-full h-full flex flex-col items-center"
        >
          <div style={{ marginTop: "37px" }} className="w-full flex justify-center object-none">
            <img src={EditInfoIcon} alt="edit_info_icon" />
          </div>
          <div className="flex flex-col items-center justify-center text-18px space-y-5px mt-24px">
            <div className="flex items-center h-19px">
              <p
                style={{
                  maxWidth: "160px",
                  textOverflow: "unset",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  color: "#682aa7",
                }}
                className="font-bold"
              >
                {username.length > 12 ? `${username.slice(0, 12)}...` : username}
              </p>
              <span className="text-r666666">님의 회원정보를 수정합니다.</span>
            </div>

            <div className="flex items-center h-19px text-r666666">비밀번호를 다시 입력해 주세요.</div>
          </div>

          <div
            style={{
              width: "390px",
              height: "64px",
              backgroundColor: "#fff",
              borderRadius: "4px",
              boxShadow: "inset 1px 1px 0px 0px #00000060",
              marginTop: "20px",
            }}
            className="relative overflow-hidden flex items-center flex-shrink-0 py-4px"
          >
            <img src={Username} alt="" className="ml-19px" />
            <input
              style={{
                color: "#000",
                borderRadius: "4px",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
              className="text-20px outline-none w-full h-full pl-18px placeholder-r797979 pt-3px bg-white"
              disabled
              placeholder={"louie3"}
            />
            <img src={Username} alt="" className="mr-4px opacity-0" />
          </div>
          <div
            style={{
              width: "390px",
              height: "64px",
              backgroundColor: "#fff",
              borderRadius: "4px",
              boxShadow: "inset 1px 1px 0px 0px #00000060",
              marginTop: "20px",
            }}
            className="relative overflow-hidden flex items-center flex-shrink-0 py-4px"
          >
            <img src={Password} alt="" className="ml-21px" />
            <input
              style={{
                color: "#000",
                borderRadius: "4px",
              }}
              className="text-20px outline-none w-full h-full px-18px placeholder-r797979 pt-3px"
              placeholder={"비밀번호"}
              type="password"
              onFocus={(e) => {
                e.target.placeholder = "";
                setSelectedInput(1);
              }}
              onBlur={(e) => {
                e.target.placeholder = "비밀번호";
                setSelectedInput(false);
              }}
            />
            <img src={Password} alt="" className="ml-21px opacity-0" />

            <div
              style={{
                backgroundColor: selectedInput === 1 ? "#732dab" : "#ffffff00",
              }}
              className={`absolute bottom-0 w-full h-3px`}
            />
          </div>
          <button
            style={{
              height: "58px",
              width: "390px",
              boxShadow: "0 2px 6px #00000090",
              background: "linear-gradient(to right, #df52ff, #6f2afd)",
            }}
            className="text-20px tracking-tighter text-white filter hover:brightness-125 mt-40px flex-shrink-0 rounded-full"
            onClick={() => {
              history.push("/mypage/edit-info");
              setSelectedTab("/mypage/edit-info");
            }}
          >
            <p className="text-20px h-20px flex items-center justify-center mt-px">확인</p>
          </button>
        </div>

        {/* <div style={{paddingTop:'110px'}} className="w-full h-full flex flex-col items-center space-y-40px">

               

              
               
                <button
                    style={{ height: '58px', width: '390px', borderRadius: '2px', boxShadow: "0 2px 6px #00000090", textShadow: "0 0 6px #000000", color: '#ffdfbd', background: 'linear-gradient(to bottom, #a67c52, #80603f)' }}
                    className="text-20px tracking-tighter font-spoqaMedium text-white hover:opacity-75 mt-40px flex-shrink-0"
                    onClick={() => {
                        history.push("/mypage/edit-info")
                        setSelectedTab("/mypage/edit-info")
                    }}
                >
                    확인
                </button>
            </div> */}
      </div>
    </div>
  );
};

export default ReauthenticatePopup;
