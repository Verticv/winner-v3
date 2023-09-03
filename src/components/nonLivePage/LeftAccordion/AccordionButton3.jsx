import React, { useState } from "react";

import flag1 from "../../../images/nonLivePage/LeftAccordion/Card/Flag1.png";
import flag2 from "../../../images/nonLivePage/LeftAccordion/Card/Flag2.png";
import flag3 from "../../../images/nonLivePage/LeftAccordion/Card/Flag3.png";
import Arrow from "../../../images/nonLivePage/CenterAccordion/Arrow2.png";

import icon2 from "../../../images/nonLivePage/Tabs/Icon2.png";
import icon3 from "../../../images/nonLivePage/Tabs/Icon3.png";
import icon4 from "../../../images/nonLivePage/Tabs/Icon4.png";
import icon5 from "../../../images/nonLivePage/Tabs/Icon5.png";
import icon6 from "../../../images/nonLivePage/Tabs/Icon6.png";
import icon7 from "../../../images/nonLivePage/Tabs/Icon7.png";
import icon8 from "../../../images/nonLivePage/Tabs/Icon8.png";
import icon9 from "../../../images/nonLivePage/Tabs/Icon9.png";
import icon10 from "../../../images/nonLivePage/Tabs/Icon10.png";

const AccordionButton3 = ({ icon, title }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [showCard, setShowCard] = useState(false);
  const [showCard1, setShowCard1] = useState(false);
  const [hover, setHover] = useState(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const Cell = ({ title, count, image }) => (
    <div
      style={{
        background: hover === count ? "#946cf0" : "#ffffff",
        borderRadius: "4px",
      }}
      className="flex items-center ml-2px mb-2px mr-2px h-37px justify-between cursor-pointer"
      onMouseEnter={() => setHover(count)}
      onMouseLeave={() => setHover(null)}
    >
      <div className="flex items-center">
        <img
          style={{ filter: hover === count && "brightness(0) invert(1)" }}
          className="ml-6px"
          src={image}
          alt="img"
        />
        <p
          style={{
            color: hover === count ? "#ffffff" : "#444444",
            letterSpacing: "-0.031em",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            maxWidth: "190px",
          }}
          className="text-13px ml-5px mt-13px mb-14px font-malgun"
        >
          {title}
        </p>
      </div>
      <div
        style={{
          background: "#6b22ff",
          // width: "29px",
          height: "19px",
          marginRight: "6px",
          borderRadius: "4px",
        }}
        className="flex items-center justify-center px-5px"
      >
        <p style={{ color: "#eeeeee", letterSpacing: "-0.031em" }} className="text-12px  font-malgun mb-px">
          100
        </p>
      </div>
    </div>
  );

  return (
    <div
      style={{
        background: "linear-gradient(to top, #4f3a7a, #e597ff)",
        width: "280px",
        borderRadius: "6px",
        boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.8)",
      }}
      className="p-px mb-5px"
    >
      <div
        style={{
          background: "linear-gradient(to top, #6b22ff, #df52ff)",
          width: "278px",
          height: "44px",
          borderRadius: "5px",
          borderBottomRightRadius: `${isOpen ? "0px" : "5px"}`,
          borderBottomLeftRadius: `${isOpen ? "0px" : "5px"}`,
        }}
        className={`flex items-center justify-between ${isOpen ? "rounded-t-lg" : "rounded-lg"} cursor-pointer`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center">
          <img
            className="-ml-4px mb-11px"
            src={icon}
            alt="icon"
            style={{
              marginTop: "3px",
            }}
          />
          <p
            style={{
              letterSpacing: "-0.031em",
            }}
            className="text-14px text-white ml-5px mt-13px mb-15px font-malgun font-bold"
          >
            {title}
          </p>
        </div>

        <div className="flex items-center">
          <div
            style={{
              background: "#5423a0",
              // width: "39px",
              height: "19px",
              // marginLeft: "111px",
              borderRadius: "4px",
            }}
            className="flex items-center justify-center mr-6px px-5px"
          >
            <p className="text-13px mb-px text-white tracking-tight font-malgun ">1000</p>
          </div>
          <img
            src={Arrow}
            alt=""
            className={`object-none text-white mr-10px mt-17px mb-18px ${isOpen ? "transform rotate-180" : ""}`}
          />
        </div>
      </div>
      {isOpen && (
        <div
          style={{
            background: "#420572",
            borderBottomRightRadius: "5px",
            borderBottomLeftRadius: "5px",
            paddingBottom: "0.1px",
          }}
          className="pt-2px"
        >
          <div
            onClick={() => setShowCard((prev) => !prev)}
            style={{
              background: hover === 1 ? "#946cf0" : "#ffffff",
              borderRadius: "4px",
            }}
            className="flex items-center ml-2px mb-2px mr-2px h-37px cursor-pointer justify-between"
            onMouseEnter={() => setHover(1)}
            onMouseLeave={() => setHover(null)}
          >
            <div className="flex items-center">
              <img
                style={{ filter: hover === 1 && "brightness(0) invert(1)" }}
                className="ml-6px mt-8px mb-8px"
                src={icon2}
                alt="img"
              />
              <p
                style={{
                  color: hover === 1 ? "#ffffff" : "#444444",
                  letterSpacing: "-0.031em",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  maxWidth: "190px",
                }}
                className="text-13px ml-5px mt-12px mb-13px font-malgun"
              >
                축구
              </p>
            </div>
            <div
              style={{
                background: "#6b22ff",
                // width: "36px",
                height: "19px",
                marginRight: "6px",
                borderRadius: "4px",
              }}
              className="flex items-center justify-center px-5px"
            >
              <p style={{ color: "#eeeeee", letterSpacing: "-0.031em" }} className="text-12px font-malgun mb-px">
                1000
              </p>
            </div>
          </div>
          {showCard && (
            <>
              <div
                style={{
                  background: hover === 2 ? "#946cf0" : "#eeeeee",
                  borderRadius: "4px",
                }}
                className="items-center ml-2px mb-2px mr-2px"
              >
                <div
                  onClick={() => setShowCard1((prev) => !prev)}
                  onMouseEnter={() => setHover(2)}
                  onMouseLeave={() => setHover(null)}
                  className="flex items-center h-37px cursor-pointer justify-between"
                >
                  <div className="flex items-center">
                    <p
                      style={{ color: "#444444", letterSpacing: "-0.031em" }}
                      className="ml-9px mt-14px mb-14px text-13px"
                    >
                      └
                    </p>
                    <img className="ml-8px" src={flag1} alt="img" />
                    <p
                      style={{
                        background: "444444",
                        letterSpacing: "-0.031em",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        maxWidth: "160px",
                        color: hover === 2 ? "#ffffff" : "#000000",
                      }}
                      className="ml-4px mt-13px mb-14px text-13px font-malgun"
                    >
                      잉글랜드
                    </p>
                  </div>

                  <div
                    style={{
                      background: "#666666",
                      // width: "36px",
                      height: "19px",
                      marginRight: "6px",
                      borderRadius: "4px",
                    }}
                    className="flex items-center justify-center px-5px"
                  >
                    <p style={{ color: "#eeeeee", letterSpacing: "-0.031em" }} className="text-12px font-malgun mb-px">
                      1000
                    </p>
                  </div>
                </div>
                {showCard1 && (
                  <>
                    <div
                      style={{ borderColor: "#cccccc", background: hover === 3 ? "#946cf0" : "#dddddd" }}
                      className="flex items-center h-38px border-t justify-between cursor-pointer"
                      onMouseEnter={() => setHover(3)}
                      onMouseLeave={() => setHover(null)}
                    >
                      <div className="flex items-center">
                        <p
                          style={{
                            color: "#444444",
                            letterSpacing: "-0.031em",
                            marginLeft: "40px",
                          }}
                          className="mt-9px mb-14px text-13px"
                        >
                          └
                        </p>
                        <p
                          style={{
                            background: "444444",
                            letterSpacing: "-0.031em",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            maxWidth: "160px",

                            color: hover === 3 ? "#ffffff" : "#000000",
                          }}
                          className="ml-11px mt-13px mb-16px text-12px font-malgun"
                        >
                          프리미어리그
                        </p>
                      </div>

                      <div
                        style={{
                          background: "#666666",
                          // width: "16px",
                          height: "19px",
                          marginRight: "6px",
                          borderRadius: "4px",
                        }}
                        className="flex items-center justify-center px-5px"
                      >
                        <p
                          style={{
                            color: "#eeeeee",
                            letterSpacing: "-0.031em",
                          }}
                          className="text-12px  font-malgun mb-px"
                        >
                          5
                        </p>
                      </div>
                    </div>
                    <div
                      style={{ borderColor: "#cccccc", background: hover === 4 ? "#946cf0" : "#dddddd" }}
                      className="flex items-center h-38px border-t justify-between cursor-pointer"
                      onMouseEnter={() => setHover(4)}
                      onMouseLeave={() => setHover(null)}
                    >
                      <div className="flex items-center">
                        <p
                          style={{
                            color: "#444444",
                            letterSpacing: "-0.031em",
                            marginLeft: "40px",
                          }}
                          className="mt-9px mb-14px text-13px"
                        >
                          └
                        </p>
                        <p
                          style={{
                            background: "444444",
                            letterSpacing: "-0.031em",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            maxWidth: "160px",
                            color: hover === 4 ? "#ffffff" : "#000000",
                          }}
                          className="ml-11px mt-13px mb-16px text-12px font-malgun"
                        >
                          챔피언쉽
                        </p>
                      </div>
                      <div
                        style={{
                          background: "#666666",
                          // width: "16px",
                          height: "19px",
                          marginRight: "6px",
                          borderRadius: "4px",
                        }}
                        className="flex items-center justify-center px-5px"
                      >
                        <p
                          style={{
                            color: "#eeeeee",
                            letterSpacing: "-0.031em",
                          }}
                          className="text-12px  font-malgun mr-px mb-px"
                        >
                          0
                        </p>
                      </div>
                    </div>
                  </>
                )}
                <div
                  style={{ borderColor: "#cccccc", background: hover === 5 ? "#946cf0" : "#eeeeee" }}
                  className="flex items-center h-38px border-t justify-between cursor-pointer"
                  onMouseEnter={() => setHover(5)}
                  onMouseLeave={() => setHover(null)}
                >
                  <div className="flex items-center">
                    <img className="ml-31px" src={flag2} alt="img" />
                    <p
                      style={{
                        background: "444444",
                        letterSpacing: "-0.031em",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        maxWidth: "160px",
                        color: hover === 5 ? "#ffffff" : "",
                      }}
                      className="ml-4px mt-14px mb-15px text-13px font-malgun"
                    >
                      이탈리아
                    </p>
                  </div>
                  <div
                    style={{
                      background: "#666666",
                      // width: "29px",
                      height: "19px",
                      marginRight: "6px",
                      borderRadius: "4px",
                    }}
                    className="flex items-center justify-center px-5px"
                  >
                    <p style={{ color: "#eeeeee", letterSpacing: "-0.031em" }} className="text-12px  font-malgun mb-px">
                      100
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    borderColor: "#dddddd",
                    background: hover === 6 ? "#946cf0" : "#eeeeee",
                    borderBottomRightRadius: "4px",
                    borderBottomLeftRadius: "4px",
                  }}
                  className="flex items-center h-38px border-t justify-between cursor-pointer"
                  onMouseEnter={() => setHover(6)}
                  onMouseLeave={() => setHover(null)}
                >
                  <div className="flex items-center">
                    <img className="ml-31px" src={flag3} alt="img" />
                    <p
                      style={{
                        background: "444444",
                        letterSpacing: "-0.031em",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        maxWidth: "160px",
                        color: hover === 6 && "#ffffff",
                      }}
                      className="ml-4px mt-14px mb-15px text-13px font-malgun"
                    >
                      스페인
                    </p>
                  </div>
                  <div
                    style={{
                      background: "#666666",
                      // width: "29px",
                      height: "19px",
                      marginRight: "6px",
                      borderRadius: "4px",
                    }}
                    className="flex items-center justify-center px-5px"
                  >
                    <p style={{ color: "#eeeeee", letterSpacing: "-0.031em" }} className="text-12px  font-malgun mb-px">
                      100
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
          <Cell title="농구" count={7} image={icon3} />
          <Cell title="야구" count={8} image={icon4} />
          <Cell title="배구" count={9} image={icon5} />
          <Cell title="테니스" count={10} image={icon6} />
          <Cell title="배드민턴" count={11} image={icon7} />
          <Cell title="하키" count={12} image={icon8} />
          <Cell title="미식축구" count={13} image={icon9} />
          <Cell title="격투기" count={14} image={icon10} />
        </div>
      )}
    </div>
  );
};

export default AccordionButton3;
