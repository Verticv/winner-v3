import React from "react";
import icon6 from "../../../images/nonLivePage/RightComponent/Icon5.png";
import icon7 from "../../../images/nonLivePage/RightComponent/X.png";

const RightComponentCard1 = () => {
  return (
    <>
      <div
        style={{
          background: "#ac8acb",
          width: "304px",
        }}
        className="rounded-lg p-px ml-2px mt-2px mr-2px mb-2px"
      >
        <div
          style={{
            background: "linear-gradient(to right, #9d3bbb, #5423a0)",
            height: "40px",
          }}
          className="flex items-center justify-between rounded-t-lg"
        >
          <div className="flex items-center ml-6px">
            <p className="text-12px text-white mt-17px mb-15px font-malgun tracking-tight">
              아스널 VS 리버플
            </p>
          </div>
          <div className="flex items-center mr-7px">
            <img className="mt-13px mb-12px" src={icon6} alt="icon" />
            <img className="ml-10px mt-15px mb-14px" src={icon7} alt="icon" />
          </div>
        </div>
        <div
          style={{
            background: "linear-gradient(to right, #d4e8ff, #ffeaf5)",
            height: "56px",
          }}
          className="items-center justify-between rounded-b-lg"
        >
          <div className="flex items-center justify-between">
            <div className="ml-6px">
              <p style={{ color: "#666666" }} className="text-12px mt-px">
                승무패[정규시간]
              </p>
            </div>
            <div className="mr-7px">
              <p style={{ color: "#666666" }} className="text-12px mt-13px ">
                3.15
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="ml-6px">
              <p
                style={{ color: "#5e399a" }}
                className="text-12px mt-9px mb-13px"
              >
                리버풀
              </p>
            </div>
            <div className="mr-7px">
              <p
                style={{ color: "#0072bc" }}
                className="text-12px mt-12px mb-14px"
              >
                3.47
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "#ac8acb",
          width: "304px",
        }}
        className="rounded-lg p-px ml-2px mt-2px mr-2px mb-2px"
      >
        <div
          style={{
            background: "linear-gradient(to right, #9d3bbb, #5423a0)",
            height: "40px",
          }}
          className="flex items-center justify-between rounded-t-lg"
        >
          <div className="flex items-center ml-6px">
            <p className="text-12px text-white mt-17px mb-15px font-malgun tracking-tight">
              FC바르셀로나 VS 아틀레티코
            </p>
          </div>
          <div className="flex items-center mr-7px">
            <img className="mt-13px mb-12px" src={icon6} alt="icon" />
            <img className="ml-10px mt-15px mb-14px" src={icon7} alt="icon" />
          </div>
        </div>
        <div
          style={{
            background: "linear-gradient(to right, #d4e8ff, #ffeaf5)",
          }}
          className="items-center justify-between rounded-b-lg"
        >
          <div className="flex items-center justify-between">
            <div className="ml-6px">
              <p style={{ color: "#666666" }} className="text-12px mt-12px ">
                승무패[정규시간]
              </p>
            </div>
            <div className="mr-7px">
              <p style={{ color: "#666666" }} className="text-12px mt-13px ">
                2.55
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="ml-6px">
              <p
                style={{ color: "#5e399a" }}
                className="text-12px mt-9px mb-13px"
              >
                FC바르셀로나
              </p>
            </div>
            <div className="mr-7px">
              <p
                style={{ color: "#f04281" }}
                className="text-12px mt-12px mb-14px"
              >
                2.26
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightComponentCard1;
