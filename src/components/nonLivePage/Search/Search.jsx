import React from "react";
import icon from "../../../images/nonLivePage/Search/search2.png";
import icon1 from "../../../images/nonLivePage/Search/Icon.png";

const Search = () => {
  const [value, setValue] = React.useState("");
  return (
    <div className="h-full items-start mr-10px ml-10px mt-10px">
      <div
        style={{
          background: "#aea9cc",
          width: "280px",
          borderRadius: "6px",
        }}
        className="rounded-lg p-px"
      >
        <div
          style={{
            background: "#fee8ff",
            width: "278px",
            borderRadius: "5px",
          }}
          className="flex items-center justify-end h-44px px-4px py-5px rounded-lg cursor-pointer relative"
        >
          <div
            style={{
              background: "#acacac",
              borderRadius: "5px",
            }}
            className="rounded-lg p-px w-full"
          >
            <input
              style={{
                color: "#444444",
                letterSpacing: "-0.031em",
                height: "34px",
                borderRadius: "4px",
                fontFamily: "MalgunGothicRegular",
                paddingTop: 0,
                paddingBottom: "1px",
                fontSize: "13px",
                outline: "0px",
              }}
              placeholder="검색 (팀명/리그)"
              onChange={(e) => setValue(e.target.value)}
              className="bg-white w-full rounded-lg pl-9px pt-2px text-13 font-malgun "
              type="text"
              value={value}
            />
          </div>
          <div
            onClick={() => (value ? setValue("") : {})}
            style={{
              position: "absolute",
              background: value ? "#f04281" : "#936cee",
              width: "28px",
              height: "28px",
              borderRadius: "3px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="mr-4px mt-3px mb-3px rounded-lg cursor-pointer"
          >
            <img src={!value ? icon : icon1} alt="" />
          </div>
          {/* <div
            style={{
              position: "absolute",
              background: "#f04281",
              width: "28px",
              height: "28px",
              borderRadius: "3px",
            }}
            className="flex items-center justify-center mr-4px mt-3px mb-3px"
          >
            <img src={icon1} alt="icon" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Search;
