import React from "react";

const WinLoseTable = ({ checkedState, setCheckedState }) => {
  const ExampleArray = [
    {
      id: 0,
      number: 1,
      startDate: "2021-06-29",
      endDate: "2021-07-29",
      type: "스포츠",
      amount: "78,308",
      status: "진행중인 금액",
    },
    {
      id: 1,
      number: 2,
      startDate: "2021-06-29",
      endDate: "2021-07-29",
      type: "미니게임",
      amount: "+9,900",
      status: "정산완료",
    },
    {
      id: 2,
      number: 3,
      startDate: "2021-06-29",
      endDate: "2021-07-29",
      type: "스포츠",
      amount: "+32,510",
      status: "정산완료",
    },
    {
      id: 3,
      number: 4,
      startDate: "2021-06-29",
      endDate: "2021-07-29",
      type: "에볼루션",
      amount: "-560,500",
      status: "정산완료",
    },
    {
      id: 4,
      number: 5,
      startDate: "2021-06-29",
      endDate: "2021-07-29",
      type: "미니게임",
      amount: "+78,308",
      status: "정산완료",
    },
    {
      id: 5,
      number: 6,
      startDate: "2021-06-29",
      endDate: "2021-07-29",
      type: "스포츠",
      amount: "-78,308",
      status: "정산완료",
    },
    {
      id: 6,
      number: 7,
      startDate: "2021-06-29",
      endDate: "2021-07-29",
      type: "스포츠",
      amount: "+78,308",
      status: "정산완료",
    },
    {
      id: 7,
      number: 8,
      startDate: "2021-06-29",
      endDate: "2021-07-29",
      type: "스포츠",
      amount: "+78,308",
      status: "정산완료",
    },
    {
      id: 8,
      number: 9,
      startDate: "2021-06-29",
      endDate: "2021-07-29",
      type: "스포츠",
      amount: "+78,308",
      status: "정산완료",
    },
    {
      id: 9,
      number: 10,
      startDate: "2021-06-29",
      endDate: "2021-07-29",
      type: "스포츠",
      amount: "+78,308",
      status: "정산완료",
    },
  ];

  const RadioButton = ({ id }) => (
    <input
      className="radio"
      type="checkbox"
      name="radio"
      checked={checkedState[id]}
      onChange={() => handleOnChange(id)}
    />
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) => (index === position ? !item : item));
    setCheckedState(updatedCheckedState);
  };

  function Cells({ items }) {
    return items.map((item, index) => (
      <tr
        className={`text-14px tracking-slight text-r444444 h-55px border-b`}
        style={{ background: index % 2 === 0 ? "#fff" : "#f7f7f7", borderColor: "#dddddd" }}
      >
        <td className="font-robotoRegular h-55px text-center flex items-center justify-center pt-2px">
          <RadioButton id={item.id} />
        </td>
        <td className="h-55px text-center font-robotoRegular pt-2px">{item.number}</td>
        <td className="h-55px text-center font-robotoRegular pt-2px">{item.startDate}</td>
        <td className="h-55px text-center font-robotoRegular pt-2px">{item.endDate}</td>
        <td className="h-55px text-center pt-2px">{item.type}</td>
        <td
          style={{
            color: item.amount.includes("+") ? "#e9441d" : item.amount.includes("-") ? "#0072bc" : "#444444",
            paddingRight: "82px",
          }}
          className="h-55px text-right font-robotoRegular pt-2px"
        >
          {item.amount}
        </td>
        <td
          className={`h-55px text-center pt-2px ${
            item.status === "진행중인 금액" || item.status === "정산완료" ? "font-semibold" : ""
          }`}
          style={{ color: item.status === "진행중인 금액" && "rgb(223,68,29)" }}
        >
          {item.status}
        </td>
      </tr>
    ));
  }

  return (
    <div
      style={{ background: "linear-gradient(to top, #ededeb, #cb78e6)" }}
      className="rounded-10px shadow-table overflow-hidden p-px flex flex-col"
    >
      <table className="rounded-10px overflow-hidden rounded-b-none table-auto w-full">
        <thead
          className="text-14px tracking-slight h-54px border-b font-semibold"
          style={{
            background: "linear-gradient(to right, #9d3bbb, #5423a0)",
            color: "#eeeeee",
            borderColor: "#dddddd",
          }}
        >
          <tr>
            <td className="text-center pt-2px" style={{ width: "96px" }}>
              선택
            </td>
            <td className="text-center pt-2px" style={{ width: "67px" }}>
              번호
            </td>
            <td className="text-center pt-2px" style={{ width: "176px" }}>
              정산시작일
            </td>
            <td className="text-center pt-2px" style={{ width: "122px" }}>
              정산종료일
            </td>
            <td className="text-center pt-2px" style={{ width: "288px" }}>
              분류
            </td>
            <td className="text-left pt-2px pl-18px" style={{ width: "164px" }}>
              금액
            </td>
            <td className="text-center pt-2px" style={{ width: "125px" }}>
              처리상태
            </td>
          </tr>
        </thead>
        <tbody className="w-full text-r444444 text-14px tracking-slight">
          <Cells items={ExampleArray} />
        </tbody>
      </table>
      <div className="flex  text-14px tracking-slight text-r444444 h-55px rounded-b-3px">
        <div
          className="w-full  h-55px flex items-center justify-center text-16px tracking-slight border-r rounded-b-3px rounded-br-none font-bold"
          style={{ borderColor: "#dddddd", background: "#eaeaea" }}
        >
          합계
        </div>
        <div className="w-full h-55px bg-white text-center flex items-center justify-center font-roboto tracking-slight text-e9441d text-16px rounded-b-3px rounded-tl-none">
          <span className="flex ml-40px font-bold">+120,718</span>
        </div>
      </div>
    </div>
  );
};

export default WinLoseTable;
