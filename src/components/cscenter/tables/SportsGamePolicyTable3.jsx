import React from "react";

const SportsGamePolicyTable3 = ({ array }) => {
  function Cells({ items }) {
    return items.map((item) => (
      <tr className="text-13px tracking-tight h-full w-full border-b border-dddddd pt-2px last:border-b-0 bg-white">
        <td
          style={{
            width: "248px",
            height: item.title === "공통사항" ? "153px" : item.title === "축구" ? "173px" : "114px",
          }}
          className="h-full text-center pl-20px flex justify-around items-center"
        >
          <p style={{ color: item.color }}>{item.title}</p>
        </td>
        <td style={{ width: "792px", minHeight: "56px" }} className={`space-y-10px h-full pl-20px py-18px`}>
          <p style={{ letterSpacing: "-0.04em" }}>{item.text}</p>
          {item.text2 && (
            <div className={`${item.text2_2 ? "-space-y-4px" : ""}`}>
              <p style={{ letterSpacing: "-0.04em" }} className="break-keep">
                {item.text2}
              </p>
              <p style={{ letterSpacing: "-0.04em" }}>{item.text2_2}</p>
            </div>
          )}
          {item.text3 && (
            <div className={`${item.text2_2 ? "-space-y-4px" : ""}`}>
              <p style={{ letterSpacing: "-0.04em" }} className="break-keep">
                {item.text3}
              </p>
              <p style={{ letterSpacing: "-0.04em" }}>{item.text3_2}</p>
            </div>
          )}
          {item.text4 && (
            <div className={`${item.text2_2 ? "-space-y-4px" : ""}`}>
              <p style={{ letterSpacing: "-0.04em" }} className="break-keep">
                {item.text4}
              </p>
              <p style={{ letterSpacing: "-0.04em" }}>{item.text4_2}</p>
            </div>
          )}
          {item.text5 && (
            <div className={`${item.text2_2 ? "-space-y-4px" : ""}`}>
              <p style={{ letterSpacing: "-0.04em" }} className="break-keep">
                {item.text5}
              </p>
              <p style={{ letterSpacing: "-0.04em" }}>{item.text5_2}</p>
            </div>
          )}
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

export default SportsGamePolicyTable3;
