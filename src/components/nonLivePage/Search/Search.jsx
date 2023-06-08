import React from "react";
import icon from "../../../images/nonLivePage/Search/search.png";

const Search = () => {
  return (
    <div className="h-full items-start mr-10px ml-10px mt-10px">
      <div
        style={{
          background: "#aea9cc",
          width: "281px",
        }}
        className="rounded-lg p-px"
      >
        <div
          style={{
            background: "linear-gradient(to top, #ccc4ff, #ffd9f5)",
            width: "280px",
          }}
          className="flex items-center justify-end h-46px px-6px py-6px rounded-lg cursor-pointer relative"
        >
          <div
            style={{
              background: "#acacac",
            }}
            className="rounded-lg p-px w-full"
          >
            <input
              className="bg-white w-full rounded-lg px-6px py-6px"
              type="text"
              placeholder="검색 (팀명/리그)"
            />
          </div>
          <div
            style={{
              position: "absolute",
              background: "#936cee",
            }}
            className="mr-3px mt-3px mb-3px rounded-lg"
          >
            <img src={icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
