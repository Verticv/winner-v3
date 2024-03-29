import React from "react";

const PointsTransactionTable = () => {
  return (
    <div
      style={{ background: "linear-gradient(to top, #ededeb, #cb78e6)" }}
      className="rounded-10px shadow-table overflow-hidden p-px"
    >
      <table className="rounded-10px overflow-hidden">
        <thead
          className="text-14px tracking-slight text-gray-ccc2b6 h-54px  border-b font-semibold"
          style={{
            background: "linear-gradient(to right, #9d3bbb, #5423a0)",
            color: "#eeeeee",
            borderColor: "#dddddd",
          }}
        >
          <tr>
            <td style={{ width: "196px" }} className="text-center mt-px">
              신청일시
            </td>
            <td style={{ width: "235px" }} className="text-center mt-px">
              사용구분
            </td>
            <td style={{ width: "215px" }} className="text-center mt-px">
              신청포인트
            </td>
            <td style={{ width: "242px" }} className="text-center mt-px">
              처리일시
            </td>
            <td style={{ width: "212px" }} className="text-center mt-px">
              처리상태
            </td>
          </tr>
        </thead>
        <tbody className="w-full text-14px tracking-slight">
          <tr className="text-14px tracking-slight text-r444444 h-56px border-b border-gray-dddddd bg-white">
            <td style={{ width: "196px" }} className="text-center mt-px font-robotoRegular">
              2021-06-29 15:45:41
            </td>
            <td style={{ width: "235px" }} className="text-center mt-px">
              보유머니전환
            </td>
            <td style={{ width: "215px" }} className="text-right pr-40px font-robotoRegular mt-px">
              100,000,000
            </td>
            <td style={{ width: "242px" }} className="text-center mt-px font-robotoRegular">
              2021-06-29 15:48:47
            </td>
            <td style={{ width: "212px", color: "#1c92df" }} className="text-center mt-px">
              완료
            </td>
          </tr>
          <tr
            className="text-14px tracking-slight text-r444444 h-56px border-b border-gray-dddddd"
            style={{ background: "#f7f7f7" }}
          >
            <td style={{ width: "196px" }} className="text-center mt-px font-robotoRegular ">
              2021-06-29 15:45:41
            </td>
            <td style={{ width: "235px" }} className="text-center mt-px">
              보유머니전환
            </td>
            <td style={{ width: "215px" }} className="text-right pr-40px font-robotoRegular">
              100,000,000
            </td>
            <td style={{ width: "242px" }} className="text-center mt-px font-robotoRegular">
              2021-06-29 15:48:47
            </td>
            <td style={{ width: "212px" }} className="text-center mt-px">
              취소
            </td>
          </tr>
          <tr className="text-14px tracking-slight text-r444444 h-56px border-b border-gray-dddddd bg-white">
            <td style={{ width: "196px" }} className="text-center mt-px font-robotoRegular">
              2021-06-29 15:45:41
            </td>
            <td style={{ width: "235px" }} className="text-center mt-px">
              보유머니전환
            </td>
            <td style={{ width: "215px" }} className="text-right pr-40px font-robotoRegular mt-px">
              50,000
            </td>
            <td style={{ width: "242px" }} className="text-center mt-px font-robotoRegular">
              2021-06-29 15:48:47
            </td>
            <td style={{ width: "212px", color: "#1c92df" }} className="text-center mt-px">
              완료
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PointsTransactionTable;
