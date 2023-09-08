import React from "react";
import PowerballIcon from "../../images/gameResults/minigame/powerball_icon.png";

const PowerballResults = () => {
  const ExampleArray = [
    { id: 0, result: "파워볼 홀/짝 (홀)", percentage: "1.95" },
    { id: 1, result: "파워볼 숫자 (2)", percentage: "9.00" },
    { id: 2, result: "파워볼 구간 A (0~2)", percentage: "3.15" },
    { id: 3, result: "파워볼 언오버 (짝 언더)", percentage: "3.15" },
    { id: 4, result: "일반볼 홀/짝 (짝)", percentage: "1.95" },
    { id: 5, result: "일반볼 구간 (중)", percentage: "2.90" },
  ];

  function Cells({ items, count }) {
    return items.map((item) => (
      <div
        key={item.id}
        style={{
          backgroundColor: item.id % 2 === 0 ? "#fff" : "#f7f7f7",
          borderColor: "#dddddd",
        }}
        className="flex items-center text-14px tracking-tight text-r444444 h-55px w-full border-b font-roboto last:border-b-0 pt-px"
      >
        <div style={{ marginLeft: "0", width: "216px" }} className="flex justify-center pl-2px">
          2021-06-29 15:45
        </div>
        <div style={{ marginLeft: "0", width: "296px" }} className="flex justify-center">
          {count}
        </div>
        <div style={{ marginLeft: "0", width: "255px", color: "#0072bc" }} className=" flex justify-center font-semibold">
          {item.result}
        </div>
        <div style={{ marginLeft: "42px", width: "211px" }} className="flex justify-center font-semibold">
          {item.percentage}
        </div>
      </div>
    ));
  }

  const Table = ({ count }) => (
    <div style={{ borderColor: "#6852a7" }} className="flex flex-col rounded-4px shadow-panel border-2 overflow-hidden">
      <div
        style={{
          background: "#6852a7",
        }}
        className="h-54px flex items-center"
      >
        <img src={PowerballIcon} alt="" className="ml-16px" />
        <span className="text-white  text-16px font-medium ml-4px truncate" style={{ maxWidth: "950px" }}>
          파워볼
        </span>
      </div>
      <Cells items={ExampleArray} count={count} />
    </div>
  );

  return (
    <div
      style={{ background: "linear-gradient(to top, #ededeb, #cb78e6)" }}
      className="rounded-10px shadow-table overflow-hidden p-px"
    >
      <div className="w-full rounded-10px bg-white overflow-hidden ">
        <div
          style={{
            height: "54px",
            background: "linear-gradient(to right, #9d3bbb, #5423a0)",
          }}
          className="w-full flex items-center text-14px font-spoqaMedium tracking-tight text-eeeeee px-9px font-semibold"
        >
          <div className="text-center pl-2px" style={{ width: "216px" }}>
            경기일시
          </div>
          <div className="text-center" style={{ width: "296px" }}>
            회차
          </div>
          <div className="text-center" style={{ width: "255px" }}>
            결과
          </div>
          <div className="text-center" style={{ marginLeft: "42px", width: "211px" }}>
            배당률
          </div>
        </div>
        <div className="px-9px space-y-10px pb-12px mt-8px">
          <Table count="211" />
          <Table count="212" />
        </div>
      </div>
    </div>
  );
};

export default PowerballResults;
