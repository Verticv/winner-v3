import React from "react";
import icon from "../../../images/nonLivePage/PoupUpComponent/X.png";
const PoupUpComponent = () => {
  return (
    <div
      style={{
        width: "489px",
        background: "linear-gradient(to right, #b975cf, #8a66bd)",
      }}
      className="rounded-lg pt-2px "
    >
      <div
        style={{
          height: "68px",
          width: "489px",
          background: "linear-gradient(to right, #9d3bbb, #5423a0)",
        }}
        className="flex justify-between items-center rounded-t-lg"
      >
        <p
          style={{ color: "#eeeeee", marginLeft: "202px", fontSize: "24px" }}
          className=" font-spoqaBold -ml-10px mt-25px mb-24px"
        >
          베팅정보
        </p>
        <img
          className="object-none mr-22px mt-26px mb-26px"
          src={icon}
          alt="icon"
        />
      </div>
      <div
        style={{
          height: "288px",
          width: "489px",
          background: "#dfdbfa",
        }}
        className="justify-center items-center rounded-b-lg "
      >
        <div className="flex justify-center items-center">
          <div
            style={{
              height: "146px",
              width: "399px",
              background: "#bbbbbb",
            }}
            className="flex justify-center items-center rounded-lg p-px  mt-30px"
          >
            <div
              style={{
                height: "144px",
                width: "397px",
                background: "#ffffff",
              }}
              className="justify-center items-center rounded-lg pt-px"
            >
              <div className="flex justify-center items-center mt-49px">
                <p
                  style={{ fontSize: "16px", color: "#666666" }}
                  className="tracking-tight font-malgun"
                >
                  베팅이 수락되었습니다.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <p
                  style={{ fontSize: "14px", color: "#666666" }}
                  className="tracking-tight font-malgun"
                >
                  티켓번호
                </p>
                <p
                  style={{ fontSize: "14px", color: "#0072bc" }}
                  className="tracking-tight font-malgun"
                >
                  4004791
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "52px",
            borderRadius: "1.5rem",
            width: "232px",
            marginLeft: "129px",
            background: "linear-gradient(to right, #df52ff, #6b22ff)",
          }}
          className="flex justify-center items-center mt-20px"
        >
          <p
            style={{ fontSize: "16px", color: "#ffffff" }}
            className="tracking-tight font-spoqaMedium"
          >
            확인
          </p>
        </div>
      </div>
    </div>
  );
};

export default PoupUpComponent;
