import React, { useEffect, useState } from "react";
import icon from "../../../images/nonLivePage/Search/search2.png";
import icon1 from "../../../images/nonLivePage/Search/Icon.png";
import icon2 from "../../../images/nonLivePage/LeftAccordion/content/Icon.png";
import icon3 from "../../../images/nonLivePage/Tabs/Icon5.png";
import "./style.css";

const Search = () => {
  const [value, setValue] = React.useState("");
  const [showSearchContent, setShowSearchContent] = useState("");
  const [hover, setHover] = useState(null);

  useEffect(() => {
    if (showSearchContent.length === 0) {
      setShowSearchContent("");
    }
  }, [showSearchContent, setShowSearchContent]);

  const Title = ({ title, icon }) => (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "4px",
        width: "259px",
      }}
      className="flex items-center mx-4px h-35px mb-4px pr-10px"
    >
      <img className="ml-6px mt-7px mb-6px" src={icon} alt="img" />
      <p
        style={{
          color: "#444444",
          letterSpacing: "-0.031em",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
        className="text-12px mt-10px mb-13px ml-5px"
      >
        {title}
      </p>
    </div>
  );

  const Content = ({ id, title, first, last }) => (
    <div
      style={{
        borderColor: "#cfcfcf",
        background: hover === id ? "#946cf0" : "#eeeeee",
        color: hover === id ? "#fff" : "#444444",
        borderTopLeftRadius: first && "4px",
        borderTopRightRadius: first && "4px",
        borderBottomLeftRadius: last && "4px",
        borderBottomRightRadius: last && "4px",
        width: "259px",
        marginBottom: last && "4px",
      }}
      className={`${
        !last && "border-b"
      } flex items-center mx-4px h-38px pr-10px`}
      onMouseEnter={() => setHover(id)}
      onMouseLeave={() => setHover(null)}
    >
      <p
        style={{
          background: "444444",
          letterSpacing: "-0.031em",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
        className="ml-13px mt-13px mb-16px text-12px font-malgun"
      >
        {title}
      </p>
    </div>
  );

  return (
    <div className="relative">
      <div className="items-start mr-4px ml-10px mt-10px">
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
            className="flex items-center justify-end h-44px px-4px py-5px rounded-lg relative"
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
                  paddingTop: 0,
                  paddingBottom: "1px",
                  fontSize: "13px",
                  outline: "0px",
                }}
                placeholder="검색 (팀명/리그)"
                onChange={(e) => {
                  setValue(e.target.value);
                  setShowSearchContent(e.target.value);
                }}
                className="bg-white w-full rounded-lg pl-9px pt-2px text-13"
                type="text"
                value={value}
              />
            </div>
            <button
              onClick={() => {
                if (value) {
                  setValue("");
                  setShowSearchContent("");
                }
              }}
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
              className="mr-4px mt-3px mb-3px hover:brightness-110 filter"
            >
              <img src={!value ? icon : icon1} alt="" />
            </button>
          </div>
        </div>
      </div>
      {showSearchContent && (
        <div className="items-start mr-10px ml-8px absolute z-10">
          <div
            style={{
              background: "#956bde",
              width: "284px",
              borderRadius: "6px",
              boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.8)",
            }}
            className="p-4px mt-4px"
          >
            <div
              style={{
                background: "#5932a7",
                width: "276px",
                borderRadius: "5px",
              }}
              className="items-center py-3px cursor-pointer"
            >
              <div
                style={{
                  background: "#5932a7",
                  width: "273px",
                  borderRadius: "5px",
                  height: "289px",
                  overflowY: "auto",
                  overflowX: "hidden",
                }}
                className="scroll-div items-center cursor-pointer relative"
              >
                <Title title={"축구"} icon={icon2} />
                <Content
                  id={0}
                  first
                  title="호주 - 노던 테리토리 프리미어 리그"
                />
                <Content id={1} title="이집트 - 프리미어 리그" />
                <Content id={2} title="아일랜드 프리미어 디비전" />
                <Content id={3} title="카자흐스탄 - 프리미어 리그" />
                <Content id={4} last title="잉글랜드 - 프리미어 리그" />

                <Title title={"배구"} icon={icon3} />
                <Content id={5} first title="축구 / 잉글랜드 - 프리미어리그" />
                <Content id={6} title="축구 / 스페인 - 라리가" />
                <Content id={7} title="축구 / 독일 - 분데스리가" />
                <Content id={8} last title="잉글랜드 - 프리미어리그" />

                <Title title={"배구"} icon={icon3} />
                <Content id={9} first title="축구 / 잉글랜드 - 프리미어리그" />
                <Content id={10} title="축구 / 스페인 - 라리가" />
                <Content id={11} title="축구 / 독일 - 분데스리가" />
                <Content id={12} last title="잉글랜드 - 프리미어리그" />

                <Title title={"배구"} icon={icon3} />
                <Content id={13} first title="축구 / 잉글랜드 - 프리미어리그" />
                <Content id={14} title="축구 / 스페인 - 라리가" />
                <Content id={15} title="축구 / 독일 - 분데스리가" />
                <Content id={16} last title="잉글랜드 - 프리미어리그" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
