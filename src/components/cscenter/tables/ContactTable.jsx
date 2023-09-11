import React from "react";
import { useHistory } from "react-router";
import MailIcon from "../../../images/myPage/mail.png";
import MailOpenedIcon from "../../../images/myPage/mail_opened.png";

const ContactTable = ({ array }) => {
  const history = useHistory();

  function InboxList({ items }) {
    return items.map((item) => (
      <div
        key={item.id}
        style={{
          background: item.isRead === false ? "#ecd7fa" : item.id % 2 === 0 ? "#ffffff" : "#f7f7f7",
          color: item.isRead === false ? "#444444" : "#666666",
        }}
        className={`text-14px h-56px w-full group border-b border-dddddd`}
      >
        <div className="flex items-center  text-14px  h-56px  px-54px">
          <div
            className="w-54px flex justify-center cursor-pointer h-full items-center"
            onClick={() => history.push(item.path)}
          >
            <img
              className={`object-none ${item.isRead === true ? "-mt-5px" : ""}`}
              src={item.isRead === true ? MailOpenedIcon : MailIcon}
              alt=""
            />
          </div>

          <div
            style={{ width: "102px" }}
            className="flex justify-center cursor-pointer h-full items-center -mt-px ml-px"
            onClick={() => history.push(item.path)}
          >
            <div
              style={{
                maxWidth: "92px",
                backgroundColor: item.isRead === true ? "#999999" : "#702caa",
              }}
              className={`px-8px h-29px rounded-full text-white text-14px flex items-center justify-center cursor-pointer`}
            >
              <p
                style={{
                  maxWidth: "75px",
                  textOverflow: "unset",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
                className="-mt-px"
              >
                {item.isRead === true ? "답변완료" : "답변대기"}
              </p>
            </div>
          </div>

          <div
            className={`${
              item.isRead === false && "font-bold"
            }  w-120px  flex justify-center cursor-pointer h-full items-center tracking-none `}
            onClick={() => history.push(item.path)}
            style={{ color: item.isRead === true ? "#666666" : "#444444" }}
          >
            {item.category}
          </div>

          <div
            style={{
              width: "420px",
              color: item.isRead === true ? "#666666" : "#444444",
            }}
            className={` ${
              item.text.length > 30 ? "" : "space-x-11px"
            }  flex items-center cursor-pointer h-full ml-23px group-hover:opacity-60`}
            onClick={() => history.push(item.path)}
          >
            <p
              style={{ maxWidth: "370px" }}
              className={`${item.isRead === false && "font-bold"} truncate tracking-none `}
            >
              {item.text}
            </p>
            {item.isRead === false && (
              <div className="w-20px h-19px bg-rf04281 rounded-full text-12px text-white flex items-center justify-center font-roboto flex-shrink-0 ml-px">
                <p className="flex items-center text-white ">N</p>
              </div>
            )}
          </div>

          <div
            className={`${
              item.isRead === false && "font-bold"
            } flex justify-center text-center cursor-pointer h-full items-center pr-5px`}
            style={{ color: item.isRead === true ? "#666666" : "#444444", width: "138px" }}
            onClick={() => history.push(item.path)}
          >
            {item.time}
          </div>
          <div className="ml-33px w-70px flex items-center justify-center">
            <button
              className={` w-49px h-30px flex justify-center rounded-4px text-white  items-center pt-px filter hover:brightness-125 shadow-plain10`}
              style={{ background: "#8458cd", boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)" }}
            >
              삭제
            </button>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div
      className="shadow-table w-full overflow-hidden rounded-10px p-px"
      style={{ background: "linear-gradient(to top, #ededeb, #cb78e6)" }}
    >
      <div className="w-full rounded-10px overflow-hidden">
        <div
          className="flex items-center  text-14px h-55px border-b px-52px font-semibold"
          style={{
            background: "linear-gradient(to right, #9d3bbb, #5423a0)",
            color: "#eeeeee",
            borderColor: "#dddddd",
            letterSpacing: "-0.015em",
          }}
        >
          <div style={{ width: "57px" }} className="flex justify-center -mt-px">
            확인
          </div>
          <div style={{ width: "92px" }} className="flex justify-center -mt-px">
            상태
          </div>
          <div style={{ width: "124px" }} className="flex justify-center -mt-px">
            구분
          </div>
          <div style={{ width: "416px" }} className="flex justify-center -mt-px">
            제목
          </div>
          <div style={{ width: "142px" }} className="flex justify-center ml-5px -mt-px">
            등록일시
          </div>
          <div className="ml-33px w-70px flex justify-center -mt-px">삭제</div>
        </div>

        <InboxList items={array} />
      </div>
    </div>
  );
};

export default ContactTable;
