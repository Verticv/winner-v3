import React from "react";

const SportsGamePolicyTable2 = ({ array }) => {
  function Cells({ items }) {
    return items.map((item) => (
      <tr className=" text-13px tracking-tight h-56px w-full border-b border-dddddd pt-2px last:border-b-0 bg-white">
        <td style={{ width: "248px" }} className="h-54px text-center pl-20px flex justify-around items-center">
          <p style={{ color: item.color }}>{item.title}</p>
          {item.title2 && <p style={{ color: "#929292" }}>{item.title2}</p>}
        </td>
        <td style={{ width: "792px" }} className={`${item.text2 ? "-space-y-4px" : ""}  h-54px pl-20px`}>
          <p style={{ letterSpacing: "-0.04em" }}>{item.text}</p>
          <p style={{ letterSpacing: "-0.04em" }}>{item.text2}</p>
        </td>
      </tr>
    ));
  }

  return (
    <div
      className="shadow-table w-full overflow-hidden rounded-10px p-px"
      style={{ background: "linear-gradient(to top, #ededeb, #cb78e6)" }}
    >
      <table className="w-full bg-gray-323232 rounded-10px overflow-hidden">
        <thead
          className=" text-14px h-54px border-b  pt-px"
          style={{
            background: "linear-gradient(to right, #9d3bbb, #5423a0)",
            color: "#eeeeee",
            borderColor: "#dddddd",
            letterSpacing: "-0.015em",
          }}
        >
          <tr>
            <td style={{ width: "248px" }} className="text-center pl-20px font-semibold">
              타입 및 경기시간
            </td>
            <td style={{ width: "792px" }} className="text-center font-semibold">
              결과적용기준
            </td>
          </tr>
        </thead>
        <tbody className="w-full text-r444444 text-14px tracking-tight">
          <Cells items={array} />
        </tbody>
      </table>
    </div>
  );
};

export default SportsGamePolicyTable2;
