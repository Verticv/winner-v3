import React, { useState } from "react";
import SignupPopup from "./SignupPopup";
import LoginIcon from "../../images/popups/login_icon.png";
import CloseIcon from "../../images/popups/close_icon.png";
import Username from "../../images/popups/username.png";
import Password from "../../images/popups/password.png";

const LoginPopup = ({ setAuth, setPopupOpen }) => {
  const [toSignup, setToSignup] = useState(false);
  const [selectedInput, setSelectedInput] = useState();

  if (toSignup) return <SignupPopup setAuth={setAuth} setPopupOpen={setPopupOpen} />;
  else
    return (
      <div
        style={{
          height: "616px",
          width: "510px",
          borderRadius: "20px",
          background: "linear-gradient(to right, #b574cc, #9198e5)",
          paddingTop: "2px",
        }}
        className="relative shadow-popup"
      >
        <div
          style={{
            borderRadius: "20px",
            background: "linear-gradient(to right, #9b3aba, #5925a2)",
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
                className="font-bold text-24px h-24px flex items-center tracking-tight"
              >
                로그인
              </label>
            </div>
          </div>

          <div
            style={{ height: "546px", backgroundColor: "#dfdbfa" }}
            className="w-full h-full flex flex-col items-center"
          >
            <div style={{ marginTop: "37px" }} className="w-full flex justify-center object-none">
              <img src={LoginIcon} alt="login_icon" />
            </div>
            <div
              style={{
                width: "390px",
                height: "64px",
                backgroundColor: "#fff",
                borderRadius: "4px",
                boxShadow: "inset 1px 1px 0px 0px #00000060",
                marginTop: "37px",
              }}
              className="relative overflow-hidden flex items-center flex-shrink-0 py-4px"
            >
              <img src={Username} alt="" className="ml-19px" />
              <input
                style={{
                  color: "#444",
                  borderRadius: "4px",
                }}
                className="text-20px outline-none font-spoqaMedium w-full h-full px-18px placeholder-gray-c8c8c8 pt-3px text-center"
                placeholder={"아이디"}
                onFocus={(e) => {
                  e.target.placeholder = "";
                  setSelectedInput(0);
                }}
                onBlur={(e) => {
                  e.target.placeholder = "아이디";
                  setSelectedInput(false);
                }}
              />
              <img src={Username} alt="" className="mr-19px opacity-0" />

              <div
                style={{
                  backgroundColor: selectedInput === 0 ? "#732dab" : "#ffffff00",
                }}
                className={`absolute bottom-0 w-full h-3px`}
              />
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
                  color: "#444",
                  borderRadius: "4px",
                }}
                className="text-20px outline-none font-spoqaMedium w-full h-full px-18px placeholder-gray-c8c8c8 pt-3px text-center"
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
              className="text-20px tracking-tighter font-spoqaMedium text-white filter hover:brightness-125 mt-40px flex-shrink-0 rounded-full"
              onClick={() => setAuth(true)}
            >
              <p className="text-20px h-20px flex items-center justify-center mt-px font-semibold">로그인</p>
            </button>

            <div style={{ marginTop: "33px", color: "#5e399a", marginLeft: "-2px" }} className="text-16px">
              <span className="font-spoqa">아이디가 없으신가요?</span>
              <button className="filter hover:brightness-125 ml-8px" onClick={() => setToSignup(true)}>
                <p className="h-16px font-spoqaMedium">회원가입</p>
                <div
                  style={{
                    width: "60px",
                    height: "1px",
                    backgroundColor: "#5e399a",
                  }}
                  className="mt-3px"
                ></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LoginPopup;
