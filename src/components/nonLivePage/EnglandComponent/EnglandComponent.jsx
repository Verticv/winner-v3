import React from "react";
import icon from "../../../images/nonLivePage/EnglandComponent/Icon.png";
import flag from "../../../images/nonLivePage/EnglandComponent/Flag.png";
import img from "../../../images/nonLivePage/EnglandComponent/Img.png";
import img2 from "../../../images/nonLivePage/EnglandComponent/img2.png";

const EnglandComponent = () => {
  return (
    <>
      <div
        style={{
          background: "#ebabff",
          width: "640px",
        }}
        className="rounded-lg p-2px mb-10px mt-10px ml-10px"
      >
        <div
          style={{ background: "linear-gradient(to right, #9d3bbb, #5423a0)" }}
          className="flex items-center justify-between rounded-lg"
        >
          <div className="ml-14px items-center">
            <div className="flex items-center">
              <img src={icon} alt="icon" />
              <img className="ml-5px" src={flag} alt="icon" />
              <p
                style={{ color: "#eeeeee" }}
                className="ml-4px mt-13px text-12px"
              >
                잉글랜드 - 프리미어리그
              </p>
            </div>
            <div className="flex items-center mb-13px">
              <p style={{ color: "#dddddd" }} className="text-12px">
                2023-03-22 13:00
              </p>
              <div
                style={{ color: "#cb78e6" }}
                className="ml-10px w-px h-10px"
              ></div>
              <p style={{ color: "#dddddd" }} className="ml-9px text-12px">
                아스널
              </p>
              <p style={{ color: "#ffc900" }} className="ml-8px text-12px">
                VS
              </p>
              <p style={{ color: "#dddddd" }} className="ml-8px text-12px">
                리버풀
              </p>
            </div>
          </div>
          <div className="mr-15px mt-4px">
            <img src={img} alt="icon" />
          </div>
        </div>
      </div>
      <div className="ml-10px mb-10px">
        <img src={img2} alt="icon" />
      </div>
    </>
  );
};

export default EnglandComponent;
