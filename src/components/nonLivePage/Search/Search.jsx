import React from "react";
import icon from "../../../images/nonLivePage/Search/search.png";
// import icon1 from "../../../images/nonLivePage/Search/Icon.png";

const Search = () => {
  return (
    <>
      <div className="h-full items-start mr-10px ml-10px mt-10px">
        <div
          style={{
            background: "#aea9cc",
            width: "280px",
          }}
          className="rounded-lg p-px"
        >
          <div
            style={{
              background: "#fee8ff",
              width: "278px",
            }}
            className="flex items-center justify-end h-44px px-4px py-5px rounded-lg cursor-pointer relative"
          >
            <div
              style={{
                background: "#acacac",
              }}
              className="rounded-lg p-px w-full"
            >
              <input
                style={{
                  color: "#444444",
                  letterSpacing: "-0.031em",
                  height: "34px",
                }}
                className="bg-white w-full rounded-lg pl-8px pt-2px text-13 font-malgun "
                type="text"
                value="검색 (팀명/리그)"
              />
            </div>
            <div
              style={{
                position: "absolute",
                background: "#936cee",
                width: "28px",
                height: "28px",
              }}
              className="mr-4px mt-3px mb-3px rounded-lg"
            >
              <img src={icon} alt="" />
            </div>

            {/* <div
            style={{
              position: "absolute",
              background: "#f04281",
              width: "28px",
              height: "28px",
            }}
            className="flex items-center justify-center mr-4px mt-3px mb-3px rounded-lg"
          >
            <img src={icon1} alt="icon" />
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
