import React from "react";
import { useHistory } from "react-router-dom";
import MailIcon from "../../../images/myPage/mail.png";
import MailOpenedIcon from "../../../images/myPage/mail_opened.png";

const InboxTable = ({ array, checkedState, setCheckedState }) => {
  const history = useHistory();

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) => (index === position ? !item : item));
    setCheckedState(updatedCheckedState);
  };

  function InboxList({ items }) {
    return items.map((item) => (
      <div
        key={item.id}
        className={` text-14px tracking-none h-56px w-full border-b hover:font-bold last:border-b-0`}
        style={{
          background: item.isRead === false ? "#ecd7fa" : item.id % 2 === 0 ? "#fff" : "#f7f7f7",
          borderColor: "#dddddd",
          color: item.isRead ? "#444444" : "#666666",
        }}
      >
        <div className="flex items-center text-14px tracking-none h-56px border-b px-52px last:border-b-0">
          <div className="w-26px flex justify-center">
            <input type="checkbox" checked={checkedState[item.id]} onChange={() => handleOnChange(item.id)} />
          </div>

          <div
            style={{ width: "107px", marginTop: item.isRead === true && "-3px" }}
            className="flex justify-center cursor-pointer ml-px"
            onClick={() => history.push(item.path)}
          >
            <img src={item.isRead === true ? MailOpenedIcon : MailIcon} alt="" />
          </div>

          <div
            style={{
              width: "569px",
              color: item.isRead === true ? "#666666" : "#444444",
            }}
            className={` group flex items-center cursor-pointer`}
            onClick={() => history.push(item.path)}
          >
            {item.type === "공지" ? (
              <div
                className="px-12px h-25px rounded-full bg-blue-0469a3 flex items-center justify-center text-white text-12px -mt-px  pt-px flex-shrink-0 "
                style={{ maxWidth: "92px" }}
              >
                공지
              </div>
            ) : item.type === "이벤트" ? (
              <div
                className="px-12px h-25px rounded-full bg-yellow-c08029 flex items-center justify-center text-white text-12px -mt-px pt-px flex-shrink-0"
                style={{ maxWidth: "92px" }}
              >
                이벤트
              </div>
            ) : (
              ""
            )}
            <p
              className={`group-hover:text-gray-f1e9e9 truncate -ml-2px mr-9px ${!item.isRead && "font-bold"}`}
              style={{
                letterSpacing: "0",
                maxWidth: item.type === "공지" || item.type === "이벤트" ? "487px" : "550px",
              }}
            >
              {item.text}
            </p>

            {item.isRead === false && (
              <div
                className="bg-rf04281 -mt-2px w-20px h-19px text-white flex items-center justify-center text-12px font-roboto"
                style={{ borderRadius: "100%", letterSpacing: "-0.1em" }}
              >
                N
              </div>
            )}
          </div>

          <div
            className={` flex justify-center text-center ${!item.isRead && "font-bold"}`}
            style={{
              width: "160px",
              color: item.isRead === true ? "#666666" : "#444444",
            }}
          >
            {item.time}
          </div>

          <button
            className="rounded-4px  text-14px tracking-none flex-shrink-0 hover:filter hover:brightness-125 ml-11px"
            style={{
              height: "30px",
              width: "49px",
              background: "#8458cd",
              boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
              color: "#ededeb",
            }}
          >
            삭제
          </button>
        </div>
      </div>
    ));
  }

  return (
    <div
      style={{ background: "linear-gradient(to top, #ededeb, #cb78e6)" }}
      className="rounded-10px shadow-table overflow-hidden p-px"
    >
      <div className="rounded-10px overflow-hidden">
        <div
          className="font-semibold text-14px tracking-slight h-55px flex items-center border-b px-52px"
          style={{
            background: "linear-gradient(to right, #9d3bbb, #5423a0)",
            color: "#eeeeee",
            borderColor: "#dddddd",
          }}
        >
          <div style={{ width: "28px" }} className="flex justify-center">
            선택
          </div>
          <div style={{ width: "107px" }} className="flex justify-center">
            확인
          </div>
          <div className="flex justify-center pr-34px" style={{ width: "569px" }}>
            제목
          </div>
          <div className="flex justify-center" style={{ width: "160px" }}>
            보낸시간
          </div>
          <div className="w-72px flex justify-center">삭제</div>
        </div>

        <InboxList items={array} />
      </div>
    </div>
  );
};

export default InboxTable;
