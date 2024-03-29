import React from "react";

const PowerBallResults = ({ array }) => {
  function Cells({ items }) {
    return items.map((item) => (
      <tr
        style={{ height: "62px", backgroundColor: item.count % 2 === 0 ? "#ffffff" : "#f7f7f7", color: "#444" }}
        className="rounded-3xl  text-14px h-62px w-full border-b border-dddddd last:border-b-0 pr-4px"
      >
        <td style={{ width: "156px" }} className="text-center">
          {item.count}
        </td>
        <td style={{ width: "225px" }} className="text-center">
          {item.chosenNum}
        </td>
        <td style={{ width: "127px" }} className="text-center">
          {item.numberSum}
        </td>
        <td style={{ width: "173px", color: "#f04281" }} className="text-center">
          {item.odd ? "홀" : "짝"}
        </td>
        <td style={{ width: "110px" }} className="text-center">
          {item.powerball}
        </td>
        <td style={{ width: "172px", color: "#0072bc" }} className="text-center">
          {item.powerballOdd ? "홀" : "짝"}
        </td>
        <td style={{ width: "132px" }} className="text-center">
          {item.size}
        </td>
        <td style={{ width: "172px" }} className="text-left pl-60px">
          {item.range}
        </td>
      </tr>
    ));
  }

  return (
    <table>
      <thead
        className="rounded-10px text-14px text-eeeeee h-54px border-b border-dddddd font-semibold"
        style={{ background: "linear-gradient(to right, #9d3bbb, #5423a0)", letterSpacing: "-0.015em" }}
      >
        <tr>
          <td style={{ width: "156px" }} className="text-center">
            <p className="-mb-px">회차</p>
          </td>
          <td style={{ width: "225px" }} className="text-center">
            <p className="-mb-px">당첨번호결과</p>
          </td>
          <td style={{ width: "127px" }} className="text-center">
            <p className="-mb-px">숫자 합</p>
          </td>
          <td style={{ width: "173px" }} className="text-center">
            <p className="-mb-px">홀/짝</p>
          </td>
          <td style={{ width: "110px" }} className="text-center">
            <p className="-mb-px">파워볼</p>
          </td>
          <td style={{ width: "174px" }} className="text-center">
            <p className="-mb-px">파워볼 홀/짝</p>
          </td>
          <td style={{ width: "132px" }} className="text-center">
            <p className="-mb-px">대/중/소</p>
          </td>
          <td style={{ width: "172px" }} className="text-left pl-46px">
            <p className="-mb-px">파워볼 구간</p>
          </td>
        </tr>
      </thead>
      <tbody style={{ color: "#444", letterSpacing: "-0.015em" }} className="w-full text-14px">
        <Cells items={array} />
      </tbody>
    </table>
  );
};

export default PowerBallResults;
