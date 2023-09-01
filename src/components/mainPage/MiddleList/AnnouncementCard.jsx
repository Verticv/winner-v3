import React from "react";
import Card from "./Card";
import Announcement from "../../../images/middleList/announcement.png";
import announcementItems from "../../../images/middleList/announcement_item.png";
import { Link } from "react-router-dom";

const Item = ({ text }) => (
  <Link to="/cscenter/announcement/view">
    <div className="flex h-14px items-center hover:filter hover:brightness-125 cursor-pointer transition">
      <img className="ml-15px mr-9px object-none" src={announcementItems} alt="" />
      <p
        style={{
          display: "block",
          color: "#666666",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          width: "308px",
        }}
        className="text-13px flex items-center font-spoqaMedium tracking-tight cursor-pointer mt-px"
      >
        {text}
      </p>
    </div>
  </Link>
);

const AnnouncementCard = () => {
  return (
    <Card HeaderIcon={Announcement} headerText="공지사항" headerActionText="더보기 >">
      <div className="flex flex-col mt-12px space-y-12px">
        <Item text="농구[쿼터] / 배구[세트] 스페셜 규정 스페셜 규정 스페셜 규정" />
        <Item text="농구[쿼터] / 배구[세트] 스페셜 규정 스페셜 규정 스페..." />
        <Item text="농구[쿼터] / 배구[세트] 스페셜 규정 스페셜 규정 스페..." />
        <Item text="농구[쿼터] / 배구[세트] 스페셜 규정 스페셜 규정 스페..." />
        <Item text="농구[쿼터] / 배구[세트] 스페셜 규정 스페셜 규정 스페..." />
      </div>
    </Card>
  );
};

export default AnnouncementCard;
