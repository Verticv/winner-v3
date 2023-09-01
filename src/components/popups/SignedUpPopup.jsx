import React from "react";
import SignedUpIcon from "../../images/signedUp/signed_up_icon.png";
import img1 from "../../images/signedUp/signed_up_1.png";
import img2 from "../../images/signedUp/signed_up_2.png";
import img3 from "../../images/signedUp/signed_up_3.png";

const SignedUpPopup = ({ setToLogin }) => {
  return (
    <div
      style={{
        height: "749px",
        width: "770px",
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
          <div className="w-full flex justify-center">
            <label
              style={{ color: "#ffffff", marginTop: "22px" }}
              className="font-bold text-24px h-24px flex items-center"
            >
              회원가입완료
            </label>
          </div>
        </div>

        <div style={{ backgroundColor: "#dfdbfa" }} className="w-full h-full flex flex-col items-center">
          <div className="w-full flex justify-center mt-15px">
            <img src={SignedUpIcon} alt="login_icon" className="object-none" />
          </div>
          <label
            style={{
              marginTop: "14px",
              marginLeft: "2px",
              color: "#682aa7",
              letterSpacing: "-0.005em",
            }}
            className="text-30px h-30px flex items-center font-bold"
          >
            가입 신청이 완료 되었습니다.
          </label>
          <label
            style={{ color: "#666666", letterSpacing: "-0.005em", marginLeft: "12px" }}
            className="flex font-bold text-30px h-30px items-center mt-11px"
          >
            관리자{" "}
            <label style={{ color: "#ec1676" }} className="font-bold pl-7px pr-px">
              승인 대기중
            </label>{" "}
            입니다.
          </label>
          <div
            style={{ marginTop: "41px", color: "#666666", marginLeft: "-1px" }}
            className="text-20px font-spoqaMedium flex flex-col items-center justify-center tracking-tighter"
          >
            <span style={{ height: "20px" }} className="flex items-center">
              관리자 승인 후 로그인 하시면 정상적으로 서비스 이용이 가능합니다.
            </span>
            <span style={{ height: "20px", marginLeft: "-2px" }} className="flex items-center mt-4px">
              딩시 사이트는 깨끗하고 안전한 운영을 자랑합니다.
            </span>
          </div>
          {/* BREAK */}
          <div style={{ marginTop: "49px" }} className="flex space-x-5px">
            <div
              style={{
                height: "190px",
                width: "234px",
                backgroundColor: "#9b6bd4",
                borderRadius: "5px",
              }}
              className="flex flex-col items-center"
            >
              <img style={{ marginTop: "20px" }} src={img1} alt="" />
              <div style={{ color: "#fff", marginTop: "19px" }} className="flex flex-col items-center">
                <div className="font-spoqaMedium text-16px tracking-tight h-16px flex items-center">
                  회원님의 모든 데이터는
                </div>
                <div className="font-spoqaMedium text-16px tracking-tight h-16px flex items-center mt-3px">
                  암호화되어 안전하게{" "}
                </div>
                <div className="font-spoqaMedium text-16px tracking-tight h-16px flex items-center mt-3px">
                  보관됩니다.
                </div>
              </div>
            </div>
            <div
              style={{
                height: "190px",
                width: "234px",
                backgroundColor: "#9b6bd4",
                borderRadius: "5px",
              }}
              className="flex flex-col items-center"
            >
              <img style={{ marginTop: "20px" }} src={img2} alt="" />
              <div style={{ color: "#fff", marginTop: "19px" }} className="flex flex-col items-center">
                <div className="font-spoqaMedium text-16px tracking-tight h-16px flex items-center">
                  아이디/비밀번호를
                </div>
                <div className="font-spoqaMedium text-16px tracking-tight h-16px flex items-center mt-3px">
                  분실되지 않도록 보안에
                </div>
                <div className="font-spoqaMedium text-16px tracking-tight h-16px flex items-center mt-3px">
                  신경 써 주세요.
                </div>
              </div>
            </div>
            <div
              style={{
                height: "190px",
                width: "234px",
                backgroundColor: "#9b6bd4",
                borderRadius: "5px",
              }}
              className="flex flex-col items-center"
            >
              <img style={{ marginTop: "20px" }} src={img3} alt="" />
              <div style={{ color: "#fff", marginTop: "19px" }} className="flex flex-col items-center">
                <div className="font-spoqaMedium text-16px tracking-tight h-16px flex items-center">회원 탈퇴 후</div>
                <div className="font-spoqaMedium text-16px tracking-tight h-16px flex items-center mt-3px">
                  회원님의 정보는
                </div>
                <div className="font-spoqaMedium text-16px tracking-tight h-16px flex items-center mt-3px">
                  완전히 삭제됩니다.
                </div>
              </div>
            </div>
          </div>
          <button
            style={{
              height: "58px",
              width: "390px",
              boxShadow: "0 2px 6px #00000090",
              background: "linear-gradient(to right, #df52ff, #6f2afd)",
              marginTop: "30px",
            }}
            className="text-20px tracking-tighter font-spoqaMedium text-white filter hover:brightness-125 flex-shrink-0 rounded-full"
            onClick={() => setToLogin(true)}
          >
            <p className="text-20px h-20px flex items-center justify-center mt-2px -ml-px">로그인</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignedUpPopup;
