import React from "react";
import { Link } from "react-router-dom";

const Card = ({ children, HeaderIcon, headerText, headerActionText }) => {
  return (
    <div
      style={{
        boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.6)",
        backgroundColor: "white",
        width: "373px",
        height: "184px",
      }}
      className="rounded-16px p-5px"
    >
      <div
        style={{
          background: "linear-gradient(to right, #9d3bbb, #5423a0)",
          height: "36px",
          paddingLeft: "10px",
          paddingRight: "12px",
        }}
        className="w-full rounded-14px flex items-center justify-between z-20"
      >
        <div className={`${headerText === "금주의 환전 TOP" && "-ml-px"} flex items-center`}>
          <img
            src={HeaderIcon}
            alt=""
            draggable={false}
            className={`${headerText === "금주의 환전 TOP" ? "mr-5px" : "mr-4px"} `}
          />
          <p className="text-white text-14px h-14px flex items-center font-spoqaBold tracking-tight -mt-px font-bold">
            {headerText}
          </p>
        </div>
        {headerActionText && (
          <Link to={headerText === "게시판" ? "/freeboard/main" : "/cscenter/announcement/all"}>
            <div
              style={{ color: "#e1b8ff" }}
              className="flex items-center cursor-pointer font-spoqaMedium text-12px h-12px tracking-tighter hover:filter hover:brightness-125"
            >
              {headerActionText}
            </div>
          </Link>
        )}
      </div>
      {children}
    </div>
  );
};

export default Card;
