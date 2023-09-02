import React from "react";
import icon6 from "../../../images/nonLivePage/RightComponent/Icon5.png";
import icon7 from "../../../images/nonLivePage/RightComponent/X.png";
import img from "../../../images/nonLivePage/RightComponent/Icon8.png";
import "./style.css";
import { useDispatch } from "react-redux";
import { deleteBetSlipCardById } from "reducers/nonLive-reducer";

const RightComponentCard1 = ({ teamsData }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        style={{
          background: "#ac8acb",
          width: "304px",
          borderRadius: "4px",
        }}
        className="p-px ml-2px mr-2px mb-2px"
      >
        <div
          style={{
            background: "linear-gradient(to right, #9d3bbb, #5423a0)",
            minHeight: "40px",
            borderTopLeftRadius: "4px",
            borderTopRightRadius: "4px",
          }}
          className="flex items-center justify-between"
        >
          <div style={{ maxWidth: "240px" }} className="flex items-center ml-6px">
            <p className="text-12px text-white mt-11px mb-11px font-bold tracking-tight">
              {teamsData?.team1} VS {teamsData?.team2}
            </p>
          </div>
          <div className="flex items-center mr-7px">
            <div className="tooltip1">
              <img className="mt-13px mb-12px" src={icon6} alt="icon" />
              <div style={{ boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.5)" }} className="tooltiptext1 w-full">
                <div
                  style={{ minWidth: "170px", height: "40px" }}
                  className="flex items-center justify-start ml-10px pb-13px w-full"
                >
                  <img className="object-none -mt-2px" src={img} alt="icon" />
                  <span className="ml-5px -mt-3px text-12px font-bold tracking-tight text-white">
                    {/* {teamsData?.team1} */}
                    축구
                  </span>
                </div>
                <div
                  style={{
                    minWidth: "170px",
                    height: "59px",
                    background: "#ffffff",
                    borderBottomLeftRadius: "4px",
                    borderBottomRightRadius: "4px",
                    boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.5)",
                  }}
                  className="-mt-10px items-center px-10px w-full"
                >
                  <p style={{ color: "#666666" }} className="pt-5px text-10px font-bold tracking-tight">
                    프리미어리그
                  </p>
                  <p style={{ color: "#666666", marginTop: "2px" }} className="text-10px font-bold tracking-tight">
                    시작되지 않음
                  </p>
                  <p
                    style={{ color: "#666666", marginTop: "1px", whiteSpace: "nowrap" }}
                    className=" text-10px font-bold tracking-tight"
                  >
                    {teamsData?.team1} VS {teamsData?.team2}
                  </p>
                </div>
              </div>
            </div>
            <img
              onClick={() => {
                dispatch(
                  deleteBetSlipCardById({
                    id: teamsData?.id,
                  })
                );
              }}
              className="cursor-pointer ml-10px mt-15px mb-14px"
              src={icon7}
              alt="icon"
            />
          </div>
        </div>
        <div
          style={{
            background: "linear-gradient(to right, #ffeaf5, #d4e8ff)",
            minHeight: "56px",
            borderBottomLeftRadius: "4px",
            borderBottomRightRadius: "4px",
          }}
          className="items-center justify-between pb-9px"
        >
          <div className="flex items-center justify-between">
            <div className="ml-6px mb-2px">
              <p
                style={{ color: "#666666", maxWidth: "240px" }}
                className="text-12px mt-8px font-malgun tracking-tight"
              >
                승무패
              </p>
            </div>
            <div className="mr-7px mt-4px">
              <del style={{ color: "#666666" }} className="text-12px mt-7px font-bold tracking-tight">
                {teamsData?.score3 > teamsData?.score1 ? teamsData?.score1 : teamsData?.score3}
              </del>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="ml-6px -mt-px">
              <p style={{ color: "#5e399a", maxWidth: "240px" }} className="text-12px mt-2px font-bold tracking-tight">
                {teamsData?.team1 === "아스널" ||
                    teamsData?.team1 === "리버풀" ||
                    teamsData?.team1 === "첼시" ||
                    teamsData?.team1 === "토트넘" ? "FC바르셀로나" :
                    "리버풀"}
              </p>
            </div>
            <div className="mr-7px -mt-px">
              <p
                style={{
                  color:
                    teamsData?.team1 === "아스널" ||
                    teamsData?.team1 === "리버풀" ||
                    teamsData?.team1 === "첼시" ||
                    teamsData?.team1 === "토트넘"
                      ? "#f04281"
                      : "#0072bc",
                  maxWidth: "240px",
                }}
                className="text-12px mt-2px font-bold tracking-tight "
              >
                {teamsData?.score3 > teamsData?.score1 ? teamsData?.score3 : teamsData?.score1}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div
          style={{
            background: "#ac8acb",
            width: "304px",
            borderRadius: "4px",
          }}
          className="p-px ml-2px mt-2px mr-2px mb-2px"
        >
          <div
            style={{
              background: "linear-gradient(to right, #9d3bbb, #5423a0)",
              height: "40px",
              borderTopLeftRadius: "4px",
              borderTopRightRadius: "4px",
            }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center ml-6px">
              <p className="text-12px text-white mt-13px mb-15px tracking-tight">
                FC바르셀로나 VS 아틀레티코
              </p>
            </div>
            <div className="flex items-center mr-7px">
              <div className="tooltip1">
                <img className="mt-13px mb-12px" src={icon6} alt="icon" />
                <div className="tooltiptext1">
                  <div
                    style={{ width: "170px", height: "40px" }}
                    className="flex items-center justify-start ml-10px pb-13px"
                  >
                    <img className="object-none -mt-2px" src={img} alt="icon" />
                    <span className="ml-5px -mt-3px text-12px tracking-tight text-white">
                      축구
                    </span>
                  </div>
                  <div
                    style={{
                      width: "170px",
                      height: "59px",
                      background: "#ffffff",
                      borderBottomLeftRadius: "4px",
                      borderBottomRightRadius: "4px",
                    }}
                    className="-mt-10px items-center"
                  >
                    <p
                      style={{ color: "#666666" }}
                      className="ml-10px pt-5px text-10px tracking-tight"
                    >
                      프리미어리그
                    </p>
                    <p
                      style={{ color: "#666666", marginTop: "2px" }}
                      className="ml-10px text-10px tracking-tight"
                    >
                      시작되지 않음
                    </p>
                    <p
                      style={{ color: "#666666", marginTop: "1px" }}
                      className="ml-10px  text-10px tracking-tight"
                    >
                      아스날 VS 리버풀
                    </p>
                  </div>
                </div>
              </div>
              <img className="ml-10px mt-15px mb-14px" src={icon7} alt="icon" />
            </div>
          </div>
          <div
            style={{
              background: "linear-gradient(to right, #ffeaf5, #d4e8ff)",
              height: "56px",
              borderBottomLeftRadius: "4px",
              borderBottomRightRadius: "4px",
            }}
            className="items-center justify-between"
          >
            <div className="flex items-center justify-between">
              <div className="ml-6px mb-2px">
                <p
                  style={{ color: "#666666" }}
                  className="text-12px mt-8px font-malgun tracking-tight"
                >
                  승무패[정규시간]
                </p>
              </div>
              <div className="mr-7px mt-4px">
                <del
                  style={{ color: "#666666" }}
                  className="text-12px mt-7px tracking-tight"
                >
                  2.55
                </del>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="ml-6px -mt-px">
                <p
                  style={{ color: "#5e399a" }}
                  className="text-12px mt-1px tracking-tight"
                >
                  FC바르셀로나
                </p>
              </div>
              <div className="mr-7px -mt-px">
                <p
                  style={{ color: "#f04281" }}
                  className="text-12px mt-2px tracking-tight"
                >
                  2.26
                </p>
              </div>
            </div>
          </div>
        </div> */}
    </>
  );
};

export default RightComponentCard1;
