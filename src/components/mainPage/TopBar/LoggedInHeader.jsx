import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import PopupControls from "components/popups/PopupControls";
import PointsApplyPopup from "components/popups/PointsApplyPopup";
import LinkButton from "./LinkButton";

import Nav2 from "../../../images/navBar/2.png";
import Nav3 from "../../../images/navBar/3.png";
import Nav13 from "../../../images/navBar/1_3.png";
import LogoutIcon from "../../../images/logout.png";
import CountryButton from "./CountryButton";

const LoggedInHeader = ({ setAuth }) => {
  const history = useHistory();
  const [isPointPopupOpen, setPointPopupOpen] = useState(true);

  return (
    <div className="flex h-full">
      <div className="flex items-center">
        <button
          className="flex items-center h-13px mr-8px flex-shrink-0"
          onClick={() => history.push("/mypage/bet-history")}
        >
          <img src={Nav13} alt="" className="mr-4px object-none" />
          <div className="text-white text-14px h-13px flex items-center font-spoqa">
            <p className="tracking-tight font-spoqa" style={{ marginRight: "2px", lineHeight: "18px" }}>
              Lv.3
            </p>
            <p
              style={{
                maxWidth: "120px",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                lineHeight: "18px",
              }}
              className="font-spoqa tracking-tight"
            >
              마이프로틴
            </p>
            <p
              style={{
                maxWidth: "120px",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                lineHeight: "18px",
              }}
              className="font-spoqa tracking-tight"
            >
              님
            </p>
          </div>
        </button>
        <button
          className="flex items-center h-13px mr-11px flex-shrink-0"
          onClick={() => history.push("/money/charge")}
        >
          <img src={Nav2} alt="" className=" object-none mr-3px" />
          <p
            style={{ lineHeight: "18px" }}
            className="text-white text-14px h-13px flex items-center font-spoqa tracking-tight"
          >
            보유머니 10,000,000원
          </p>
        </button>
        <PopupControls
          buttonChild={
            <button className="flex items-center h-13px mr-9px flex-shrink-0">
              <img src={Nav3} alt="" className=" object-none mr-2px" />
              <p
                style={{ lineHeight: "18px" }}
                className="text-white text-14px h-13px flex items-center font-spoqa tracking-tight"
              >
                포인트 125,000P
              </p>
            </button>
          }
          isPopupOpen={isPointPopupOpen}
          setPopupOpen={setPointPopupOpen}
        >
          <PointsApplyPopup setPopupOpen={setPointPopupOpen} />
        </PopupControls>
      </div>

      <div className="space-x-5px flex items-center">
        <LinkButton
          buttonText="충전신청"
          path="/money/charge"
          buttonProps={{
            style: {
              background: "linear-gradient(to right, #ff7760, #f14a53)",
            },
          }}
        />
        <LinkButton
          buttonText="환전신청"
          path="/money/exchange"
          buttonProps={{
            style: {
              background: "linear-gradient(to right, #14c9e7, #3197e5)",
            },
          }}
        />
        <LinkButton
          buttonText="포인트전환"
          path="/mypage/points/points-apply"
          buttonProps={{
            style: {
              background: "linear-gradient(to right, #f5c665, #fab072)",
            },
          }}
        />
      </div>
      <div className="flex items-center ml-10px mr-5px">
        <CountryButton />
      </div>
      <button style={{ marginRight: "-4px" }} className="mt-4px" onClick={() => setAuth?.(false)}>
        <img src={LogoutIcon} alt="" className="object-none cursor-pointer" />
      </button>
    </div>
  );
};

export default LoggedInHeader;
