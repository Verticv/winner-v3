import React from "react";
import { useHistory } from "react-router";

const ExampleArray = [
  {
    id: 0,
    type: "스포츠북",
    title: "농구[쿼터] / 배구[세트] 스페셜 규정",
    isNew: true,
    time: "2021.06.29",
  },
  {
    id: 1,
    type: "스포츠북",
    title: "야구스포츠 스페셜 규정",
    isNew: false,
    time: "2021.06.29",
  },
  {
    id: 2,
    type: "스포츠북",
    title: "예비 도메인 안내",
    isNew: false,
    time: "2021.06.29",
  },
  {
    id: 3,
    type: "기타",
    title: "은행별 점검시간안내",
    isNew: false,
    time: "2021.06.29",
  },
  {
    id: 4,
    type: "기타",
    title: "스포츠 종목별 규정",
    isNew: false,
    time: "2021.06.29",
  },
  {
    id: 5,
    type: "스포츠북",
    title: "미니게임 통합규정",
    isNew: false,
    time: "2021.06.29",
  },
  {
    id: 6,
    type: "미니게임",
    title: "스포츠게임 관련규정",
    isNew: false,
    time: "2021.06.29",
  },
  {
    id: 7,
    type: "카지노",
    title: "에볼루션카지노 이용안내",
    isNew: false,
    time: "2021.06.29",
  },
  {
    id: 8,
    type: "스포츠북",
    title: "라이브 베팅 기본규정",
    isNew: false,
    time: "2021.06.29",
  },
  {
    id: 9,
    type: "스포츠북",
    title: "핸디캡의 이해",
    isNew: false,
    time: "2021.06.29",
  },
];

const AnnouncementTable = () => {
  const history = useHistory();

  function Cells({ items }) {
    return items.map((item) => (
      <tr
        style={{ backgroundColor: item.id % 2 === 0 ? "#ffffff" : "#f7f7f7" }}
        className="text-14px h-56px w-full border-b border-dddddd group  last:border-b-0"
      >
        <td style={{ width: "173px", color: "rgb(114,20,143)" }} className="h-55px text-center font-semibold">
          {item.type}
        </td>
        <td style={{ width: "710px" }} className="group w-full h-55px flex items-center space-x-10px">
          <p style={{ maxWidth: "700" }} className="text-r444444 truncate group-hover:opacity-60 tracking-none">
            {item.title}
          </p>
          {item.isNew && (
            <div className="w-17px h-17px bg-red-e9441d rounded-4px text-12px text-white flex items-center justify-center font-roboto pr-px flex-shrink-0">
              N
            </div>
          )}
        </td>
        <td style={{ width: "111px" }} className="w-full text-center pr-60px text-r444444">
          {item.time}
        </td>
      </tr>
    ));
  }

  return (
    <div
      className="shadow-table w-full overflow-hidden rounded-10px p-px"
      style={{ background: "linear-gradient(to top, #ededeb, #cb78e6)" }}
    >
      <table className="w-full rounded-10px overflow-hidden">
        <thead
          className=" text-14px tracking-tight h-54px border-b pt-px font-semibold"
          style={{
            background: "linear-gradient(to right, #9d3bbb, #5423a0)",
            color: "#eeeeee",
            borderColor: "#dddddd",
          }}
        >
          <tr>
            <td style={{ width: "173px" }} className="text-center">
              구분
            </td>
            <td style={{ width: "698px" }} className="w-full text-center pr-44px">
              제목
            </td>
            <td style={{ width: "111px" }} className="w-full text-center pr-60px">
              등록일
            </td>
          </tr>
        </thead>
        <tbody
          className="w-full text-r444444 text-14px tracking-tight cursor-pointer"
          onClick={() => history.push("/cscenter/announcement/view")}
        >
          <Cells items={ExampleArray} />
        </tbody>
      </table>
    </div>
  );
};

export default AnnouncementTable;
