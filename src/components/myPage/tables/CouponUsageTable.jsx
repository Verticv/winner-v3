import React from "react";

const CouponUsageTable = () => {
  const ExampleArray = [
    {
      id: 0,
      name: "테스트쿠폰",
      amount: "10,000",
      username: "eric123",
      status: "사용가능",
      date: "2021-06-29",
      expireDate: "2021-07-29",
    },
    {
      id: 1,
      name: "테스트쿠폰",
      amount: "10,000",
      username: "eric123",
      status: "사용가능",
      date: "2021-06-29",
      expireDate: "2021-07-29",
    },
    {
      id: 2,
      name: "테스트쿠폰",
      amount: "10,000",
      username: "eric123",
      status: "사용가능",
      date: "2021-06-29",
      expireDate: "2021-07-29",
    },
    {
      id: 3,
      name: "테스트쿠폰",
      amount: "10,000",
      username: "eric123",
      status: "사용가능",
      date: "2021-06-29",
      expireDate: "2021-07-29",
    },
    {
      id: 4,
      name: "테스트쿠폰",
      amount: "10,000",
      username: "eric123",
      status: "사용가능",
      date: "2021-06-29",
      expireDate: "2021-07-29",
    },
    {
      id: 5,
      name: "테스트쿠폰",
      amount: "10,000",
      username: "eric123",
      status: "사용가능",
      date: "2021-06-29",
      expireDate: "2021-07-29",
    },
    {
      id: 6,
      name: "테스트쿠폰",
      amount: "10,000",
      username: "eric123",
      status: "사용가능",
      date: "2021-06-29",
      expireDate: "2021-07-29",
    },
    {
      id: 7,
      name: "테스트쿠폰",
      amount: "10,000",
      username: "eric123",
      status: "사용가능",
      date: "2021-06-29",
      expireDate: "2021-07-29",
    },
    {
      id: 8,
      name: "테스트쿠폰",
      amount: "10,000",
      username: "eric123",
      status: "사용가능",
      date: "2021-06-29",
      expireDate: "2021-07-29",
    },
    // {
    //   id: 9,
    //   name: "테스트쿠폰",
    //   amount: "10,000",
    //   username: "eric123",
    //   status: "사용가능",
    //   date: "2021-06-29",
    //   expireDate: "2021-07-29",
    // },
  ];

  const UseButton = () => (
    <button
      style={{
        height: "30px",
        width: "72px",
        background: "#5d659f",
        boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
        color: "#ededeb",
      }}
      className="rounded-4px font-medium text-13px tracking-slight flex-shrink-0 hover:filter hover:brightness-125"
    >
      사용하기
    </button>
  );

  function Cells({ items }) {
    return items.map((item, index) => (
      <tr
        className={`font-spoqa text-14px tracking-slight text-r444444 h-56px border-b last:border-0`}
        style={{
          background: index % 2 === 0 ? "#fff" : "#f7f7f7",
          height: `${item.id}` === `${items.length - 1}` ? "55px" : "56px",
          borderColor: "#dddddd",
        }}
      >
        <td style={{ width: "313px" }} className="text-center">
          <div style={{ width: "313px" }} className="truncate px-5px">
            {item.name}
          </div>
        </td>
        <td style={{ width: "172px" }} className="text-right text-e9441d pr-20px font-robotoRegular">
          {item.amount}
        </td>
        <td style={{ width: "111px" }} className="text-center">
          <div style={{ width: "111px" }} className="truncate px-5px">
            {item.username}
          </div>
        </td>
        <td style={{ width: "108px" }} className="text-center  text-rf04281">
          {item.status}
        </td>
        <td style={{ width: "122px" }} className="text-center font-robotoRegular">
          {item.date}
        </td>
        <td style={{ width: "111px" }} className="text-center font-robotoRegular">
          {item.expireDate}
        </td>
        <td style={{ width: "103px" }} className="pl-13px">
          <UseButton />
        </td>
      </tr>
    ));
  }

  return (
    <div
      style={{ background: "linear-gradient(to top, #ededeb, #cb78e6)" }}
      className="rounded-10px shadow-table overflow-hidden p-px"
    >
      <table className="rounded-10px overflow-hidden">
        <thead
          className="text-14px tracking-slight h-54px  border-b font-semibold"
          style={{
            background: "linear-gradient(to right, #9d3bbb, #5423a0)",
            color: "#eeeeee",
            borderColor: "#dddddd",
          }}
        >
          <tr>
            <td style={{ width: "313px" }} className="text-center">
              쿠폰명
            </td>
            <td style={{ width: "172px" }} className="text-center">
              쿠폰금액
            </td>
            <td style={{ width: "111px" }} className="text-center">
              보낸회원아이디
            </td>
            <td style={{ width: "108px" }} className="text-center">
              처리상태
            </td>
            <td style={{ width: "122px" }} className="text-center">
              발급일
            </td>
            <td style={{ width: "111px" }} className="text-center">
              만료일
            </td>
            <td style={{ width: "103px" }} className="text-center">
              쿠폰사용
            </td>
          </tr>
        </thead>
        <tbody className="w-full text-585858 text-14px tracking-slight font-spoqaMedium">
          <Cells items={ExampleArray} />
        </tbody>
      </table>
    </div>
  );
};

export default CouponUsageTable;
