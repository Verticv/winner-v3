import React, { useEffect, useState } from "react";
import icon from "../../../images/nonLivePage/Search/search2.png";
import icon1 from "../../../images/nonLivePage/Search/Icon.png";
import icon2 from "../../../images/nonLivePage/LeftAccordion/content/Icon.png";
import icon3 from "../../../images/nonLivePage/Tabs/Icon5.png";
import "./style.css";

const Search = () => {
  const [value, setValue] = React.useState("");
  const [showSearchContent, setShowSearchContent] = useState("");

  useEffect(() => {
    if (showSearchContent.length === 0) {
      setShowSearchContent("");
    }
  }, [showSearchContent, setShowSearchContent]);

  return (
    <div className="relative">
      <div className="items-start mr-10px ml-10px mt-10px">
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
                onChange={(e) => {
                  setValue(e.target.value);
                  setShowSearchContent(e.target.value);
                }}
                className="bg-white w-full rounded-lg pl-9px pt-2px text-13 font-malgun "
                type="text"
                value={value}
              />
            </div>
            <div
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
                <div
                  style={{
                    background: "#ffffff",
                    borderRadius: "4px",
                    width: "259px",
                  }}
                  className="flex items-center mx-4px h-35px mb-4px"
                >
                  <img className="ml-6px mt-7px mb-6px" src={icon2} alt="img" />
                  <p
                    style={{
                      color: "#444444",
                      letterSpacing: "-0.031em",
                      fontFamily: "MalgunGothicRegular",
                    }}
                    className="text-12px mt-10px mb-13px ml-5px"
                  >
                    축구
                  </p>
                </div>

                <div
                  style={{
                    borderColor: "#cfcfcf",
                    background: "#eeeeee",
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                    width: "259px",
                  }}
                  className="flex items-center mx-4px h-38px border-b"
                >
                  <p
                    style={{
                      background: "444444",
                      letterSpacing: "-0.031em",
                    }}
                    className="ml-13px mt-13px mb-16px text-12px font-malgun"
                  >
                    호주 - 노던 테리토리 프리미어 리그
                  </p>
                </div>
                <div
                  style={{
                    borderColor: "#cfcfcf",
                    background: "#eeeeee",
                    width: "259px",
                  }}
                  className="flex items-center mx-4px h-38px border-b"
                >
                  <p
                    style={{
                      background: "444444",
                      letterSpacing: "-0.031em",
                    }}
                    className="ml-13px mt-13px mb-16px text-12px font-malgun"
                  >
                    이집트 - 프리미어 리그
                  </p>
                </div>
                <div
                  style={{
                    borderColor: "#cfcfcf",
                    background: "#eeeeee",
                    width: "259px",
                  }}
                  className="flex items-center mx-4px h-38px border-b"
                >
                  <p
                    style={{
                      background: "444444",
                      letterSpacing: "-0.031em",
                    }}
                    className="ml-13px mt-13px mb-16px text-12px font-malgun"
                  >
                    아일랜드 프리미어 디비전
                  </p>
                </div>
                <div
                  style={{
                    borderColor: "#cfcfcf",
                    background: "#eeeeee",
                    width: "259px",
                  }}
                  className="flex items-center mx-4px h-38px border-b"
                >
                  <p
                    style={{
                      background: "444444",
                      letterSpacing: "-0.031em",
                    }}
                    className="ml-13px mt-13px mb-16px text-12px font-malgun"
                  >
                    카자흐스탄 - 프리미어 리그
                  </p>
                </div>
                <div
                  style={{
                    borderColor: "#cfcfcf",
                    background: "#eeeeee",
                    borderBottomLeftRadius: "4px",
                    borderBottomRightRadius: "4px",
                    width: "259px",
                  }}
                  className="flex items-center mx-4px h-38px border-b mb-4px"
                >
                  <p
                    style={{
                      background: "444444",
                      letterSpacing: "-0.031em",
                    }}
                    className="ml-13px mt-13px mb-16px text-12px font-malgun"
                  >
                    잉글랜드 - 프리미어 리그
                  </p>
                </div>

                <div
                  style={{
                    background: "#ffffff",
                    borderRadius: "4px",
                    width: "259px",
                  }}
                  className="flex items-center mx-4px h-35px mb-4px"
                >
                  <img className="ml-6px mt-7px mb-6px" src={icon3} alt="img" />
                  <p
                    style={{
                      color: "#444444",
                      letterSpacing: "-0.031em",
                      fontFamily: "MalgunGothicRegular",
                    }}
                    className="text-12px mt-10px mb-13px ml-5px"
                  >
                    배구
                  </p>
                </div>

                <div
                  style={{
                    borderColor: "#cfcfcf",
                    background: "#eeeeee",
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                    width: "259px",
                  }}
                  className="flex items-center mx-4px h-38px border-b"
                >
                  <p
                    style={{
                      background: "444444",
                      letterSpacing: "-0.031em",
                    }}
                    className="ml-13px mt-13px mb-16px text-12px font-malgun"
                  >
                    축구 / 잉글랜드 - 프리미어리그
                  </p>
                </div>
                <div
                  style={{
                    borderColor: "#cfcfcf",
                    background: "#eeeeee",
                    width: "259px",
                  }}
                  className="flex items-center mx-4px h-38px border-b"
                >
                  <p
                    style={{
                      background: "444444",
                      letterSpacing: "-0.031em",
                    }}
                    className="ml-13px mt-13px mb-16px text-12px font-malgun"
                  >
                    축구 / 스페인 - 라리가
                  </p>
                </div>
                <div
                  style={{
                    borderColor: "#cfcfcf",
                    background: "#eeeeee",
                    width: "259px",
                  }}
                  className="flex items-center mx-4px h-38px border-b"
                >
                  <p
                    style={{
                      background: "444444",
                      letterSpacing: "-0.031em",
                    }}
                    className="ml-13px mt-13px mb-16px text-12px font-malgun"
                  >
                    축구 / 독일 - 분데스리가
                  </p>
                </div>
                <div
                  style={{
                    borderColor: "#cfcfcf",
                    background: "#eeeeee",
                    borderBottomLeftRadius: "4px",
                    borderBottomRightRadius: "4px",
                    width: "259px",
                  }}
                  className="flex items-center mx-4px h-38px border-b mb-4px"
                >
                  <p
                    style={{
                      background: "444444",
                      letterSpacing: "-0.031em",
                    }}
                    className="ml-13px mt-13px mb-16px text-12px font-malgun"
                  >
                    잉글랜드 - 프리미어리그
                  </p>
                </div>

                <div
                  style={{
                    background: "#ffffff",
                    borderRadius: "4px",
                    width: "259px",
                  }}
                  className="flex items-center mx-4px h-35px mb-4px"
                >
                  <img className="ml-6px mt-7px mb-6px" src={icon3} alt="img" />
                  <p
                    style={{
                      color: "#444444",
                      letterSpacing: "-0.031em",
                      fontFamily: "MalgunGothicRegular",
                    }}
                    className="text-12px mt-10px mb-13px ml-5px"
                  >
                    배구
                  </p>
                </div>

                <div
                  style={{
                    borderColor: "#cfcfcf",
                    background: "#eeeeee",
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                    width: "259px",
                  }}
                  className="flex items-center mx-4px h-38px border-b"
                >
                  <p
                    style={{
                      background: "444444",
                      letterSpacing: "-0.031em",
                    }}
                    className="ml-13px mt-13px mb-16px text-12px font-malgun"
                  >
                    축구 / 잉글랜드 - 프리미어리그
                  </p>
                </div>
                <div
                  style={{
                    borderColor: "#cfcfcf",
                    background: "#eeeeee",
                    width: "259px",
                  }}
                  className="flex items-center mx-4px h-38px border-b"
                >
                  <p
                    style={{
                      background: "444444",
                      letterSpacing: "-0.031em",
                    }}
                    className="ml-13px mt-13px mb-16px text-12px font-malgun"
                  >
                    축구 / 스페인 - 라리가
                  </p>
                </div>
                <div
                  style={{
                    borderColor: "#cfcfcf",
                    background: "#eeeeee",
                    width: "259px",
                  }}
                  className="flex items-center mx-4px h-38px border-b"
                >
                  <p
                    style={{
                      background: "444444",
                      letterSpacing: "-0.031em",
                    }}
                    className="ml-13px mt-13px mb-16px text-12px font-malgun"
                  >
                    축구 / 독일 - 분데스리가
                  </p>
                </div>
                <div
                  style={{
                    borderColor: "#cfcfcf",
                    background: "#eeeeee",
                    borderBottomLeftRadius: "4px",
                    borderBottomRightRadius: "4px",
                    width: "259px",
                  }}
                  className="flex items-center mx-4px h-38px border-b mb-4px"
                >
                  <p
                    style={{
                      background: "444444",
                      letterSpacing: "-0.031em",
                    }}
                    className="ml-13px mt-13px mb-16px text-12px font-malgun "
                  >
                    잉글랜드 - 프리미어리그
                  </p>
                </div>

                <div
                  style={{
                    background: "#ffffff",
                    borderRadius: "4px",
                    width: "259px",
                  }}
                  className="flex items-center mx-4px h-35px mb-4px"
                >
                  <img className="ml-6px mt-7px mb-6px" src={icon3} alt="img" />
                  <p
                    style={{
                      color: "#444444",
                      letterSpacing: "-0.031em",
                      fontFamily: "MalgunGothicRegular",
                    }}
                    className="text-12px mt-10px mb-13px ml-5px"
                  >
                    배구
                  </p>
                </div>

                <div
                  style={{
                    borderColor: "#cfcfcf",
                    background: "#eeeeee",
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                    width: "259px",
                  }}
                  className="flex items-center mx-4px h-38px border-b"
                >
                  <p
                    style={{
                      background: "444444",
                      letterSpacing: "-0.031em",
                    }}
                    className="ml-13px mt-13px mb-16px text-12px font-malgun"
                  >
                    축구 / 잉글랜드 - 프리미어리그
                  </p>
                </div>
                <div
                  style={{
                    borderColor: "#cfcfcf",
                    background: "#eeeeee",
                    width: "259px",
                  }}
                  className="flex items-center mx-4px h-38px border-b"
                >
                  <p
                    style={{
                      background: "444444",
                      letterSpacing: "-0.031em",
                    }}
                    className="ml-13px mt-13px mb-16px text-12px font-malgun"
                  >
                    축구 / 스페인 - 라리가
                  </p>
                </div>
                <div
                  style={{
                    borderColor: "#cfcfcf",
                    background: "#eeeeee",
                    width: "259px",
                  }}
                  className="flex items-center mx-4px h-38px border-b"
                >
                  <p
                    style={{
                      background: "444444",
                      letterSpacing: "-0.031em",
                    }}
                    className="ml-13px mt-13px mb-16px text-12px font-malgun"
                  >
                    축구 / 독일 - 분데스리가
                  </p>
                </div>
                <div
                  style={{
                    borderColor: "#cfcfcf",
                    background: "#eeeeee",
                    borderBottomLeftRadius: "4px",
                    borderBottomRightRadius: "4px",
                    width: "259px",
                  }}
                  className="flex items-center mx-4px h-38px border-b"
                >
                  <p
                    style={{
                      background: "444444",
                      letterSpacing: "-0.031em",
                    }}
                    className="ml-13px mt-13px mb-16px text-12px font-malgun"
                  >
                    잉글랜드 - 프리미어리그
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
