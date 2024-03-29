import React from "react";
import icon from "../../../images/nonLivePage/PoupUpComponent/X.png";
import { deleteAllBetSlipCards } from "reducers/nonLive-reducer";
import { useDispatch } from "react-redux";
const PoupUpComponent = ({ setIsPopupOpen, active, setActive }) => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        width: "489px",
        background: "linear-gradient(to right, #b975cf, #8a66bd)",
        borderRadius: "20px",
        boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.6),inset 0px 2px 0px 0px rgba(255, 255, 255, 0.3)",
      }}
      className="pt-2px "
    >
      <div
        style={{
          height: "68px",
          width: "489px",
          background: "linear-gradient(to right, #9d3bbb, #5423a0)",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
        className="flex justify-between items-center"
      >
        <p
          style={{ color: "#eeeeee", marginLeft: "202px", fontSize: "24px", letterSpacing: "-0.025em" }}
          className=" font-bold -ml-10px mt-24px mb-24px"
        >
          베팅정보
        </p>
        <button onClick={() => setIsPopupOpen(false)}>
          <img className="object-none mr-22px mt-24px mb-26px" src={icon} alt="icon" />
        </button>
      </div>
      <div
        style={{
          height: "288px",
          width: "489px",
          background: "#dfdbfa",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
        className="justify-center items-center "
      >
        <div className="flex justify-center items-center">
          <div
            style={{
              height: "146px",
              width: "399px",
              background: "#bbbbbb",
              borderRadius: "10px",
            }}
            className="flex justify-center items-center p-px  mt-30px"
          >
            <div
              style={{
                height: "144px",
                width: "397px",
                background: "#ffffff",
                borderRadius: "10px",
                letterSpacing: "-0.015em",
              }}
              className="justify-center items-center pt-px"
            >
              <div className="flex justify-center items-center mt-49px">
                <p style={{ fontSize: "16px", color: "#444444" }} className="-mt-3px -ml-px">
                  베팅이 수락되었습니다.
                </p>
              </div>
              <div className="flex justify-center items-center ml-2px">
                <p style={{ fontSize: "14px", color: "#444444" }} className="-ml-5px mt-2px font-bold">
                  티켓번호
                </p>
                <p style={{ fontSize: "14px", color: "#0072bc" }} className="mt-2px ml-4px font-bold">
                  4004791
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            setActive(true);
            setIsPopupOpen(false);

            dispatch(deleteAllBetSlipCards());
          }}
          style={{
            height: "52px",
            borderRadius: "26px",
            width: "232px",
            marginLeft: "129px",
            background: "linear-gradient(to right, #df52ff, #6b22ff)",
            boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
          }}
          className="flex justify-center items-center mt-20px hover:filter hover:brightness-125"
        >
          <p
            style={{
              fontSize: "16px",
              color: "#ffffff",
              textShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
            }}
            className="mt-px tracking-tight font-spoqaMedium font-bold"
          >
            확인
          </p>
        </button>
      </div>
    </div>
  );
};

export default PoupUpComponent;
