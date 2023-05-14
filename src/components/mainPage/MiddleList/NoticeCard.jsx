import React from "react";
import Card from "./Card";
import Notice from "../../../images/middleList/notice.png";
import announcementItems from "../../../images/middleList/announcement_item.png";
import noticeItem from "../../../images/middleList/notice_item.png";

const Item = ({ text }) => (
  <div className="flex h-14px items-center hover:filter hover:brightness-125 cursor-pointer transition">
    <img className="ml-15px mr-9px object-none" src={announcementItems} alt="" />
    <p
      style={{
        display: "block",
        color: "#666666",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
      className="text-14px flex items-center font-spoqaMedium tracking-tight w-full -ml-px"
    >
      {text}
    </p>
    <RightItem text="신풍사우나" />
  </div>
);

const RightItem = ({ text }) => (
  <div className="flex flex-shrink-0 mr-16px">
    <img className="mr-4px mb-px object-none" src={noticeItem} alt="" />
    <p style={{ color: "#666666" }} className="text-13px font-spoqaMedium tracking-tight mt-px">
      {text}
    </p>
  </div>
);

const NoticeCard = () => {
  return (
    <Card HeaderIcon={Notice} headerText="게시판" headerActionText="더보기 >">
      <div className="flex flex-col mt-12px space-y-12px">
        <Item text="이벤트 신청합니다. asdhasioduhasuidhasuidhaiduh" />
        <Item text="이벤트 신청합니다." />
        <Item text="이벤트 신청합니다." />
        <Item text="이벤트 신청합니다." />
        <Item text="이벤트 신청합니다." />
      </div>
    </Card>
  );
};

export default NoticeCard;
