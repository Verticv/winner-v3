import React from "react";
import icon from "../../../images/nonLivePage/CenterAccordion/star2.png";
import Up from "../../../images/nonLivePage/LeftAccordion/Card/Up.png";
import Dn from "../../../images/nonLivePage/LeftAccordion/Card/Dn.png";
import icon1 from "../../../images/nonLivePage/CenterAccordion/Icon1.png";

const CenterAccordionContent = ({ card, lastObject }) => {
  return (
    <>
      <div
        style={{
          borderColor: "#cccccc",
        }}
        //   className={`flex items-center
        //    ${
        //     lastObject.text == "첼시" ? "" : "border-b"
        //   }
        //    h-31px  `}
        // >
        className={`flex items-center ${
          lastObject.id !== card.id ? "border-b h-31px" : "h-30px"
        }
        `}
      >
        <div className="items-center ml-6px mt-6px mb-8px">
          <img
            src={icon}
            alt="icon"
            style={{
              marginTop: "1px",
            }}
          />
        </div>
        <div
          style={{
            borderColor: "#cccccc",
            width: "252px",
            height: "30px",
            fontFamily: "MalgunGothicRegular",
          }}
          className="flex items-center justify-between border-l border-r ml-6px"
        >
          <p
            style={{
              fontSize: "12px",
              color: "#444444",
              letterSpacing: "-0.031em",
            }}
            className="ml-9px mt-10px mb-12px"
          >
            {card.team1}
          </p>

          <p
            style={{
              fontSize: "12px",
              color: card.score1ArrowUp
                ? "#f04281"
                : card.score1ArrowDown
                ? "#0072bc"
                : "#444444",
              letterSpacing: "-0.031em",
            }}
            className="flex items-center mr-10px mt-10px mb-12px"
          >
            <span>
              {card.score1ArrowUp ? (
                <img
                  src={Up}
                  alt="Up"
                  className="mr-9px"
                  // className="ml-50px mt-11px mb-12px"
                />
              ) : card.score1ArrowDown ? (
                <img
                  src={Dn}
                  alt="Dn"
                  className="mr-3px"
                  // className="ml-50px mt-11px mb-12px"
                />
              ) : (
                ""
              )}
            </span>
            {card.score1 ? (
              card.score1
            ) : (
              <img
                src={icon1}
                alt="icon1"
                // className="mr-14px"
              />
            )}
          </p>
        </div>
        <div className="flex items-center relative w-68px h-100% justify-center">
          {card.score2ArrowUp ? (
            <img
              src={Up}
              alt="Up"
              className="-mr-7px mb-px absolute"
              style={{ right: "56px" }}
              //  className="ml-10px mt-11px mb-12px"
            />
          ) : card.score2ArrowDown ? (
            <img
              src={Dn}
              alt="Dn"
              className="-mr-7px mb-px absolute"
              style={{ right: "56px" }}
              //  className="ml-10px mt-11px mb-12px"
            />
          ) : (
            ""
          )}
          <p
            style={{
              fontSize: "12px",
              color: card.score1ArrowUp
                ? "#f04281"
                : card.score1ArrowDown
                ? "#0072bc"
                : "#444444",
              letterSpacing: "-0.031em",
              width: "100%",
              textAlign: "center",
            }}
            className="mb-2px"
          >
            {card.score2 ? (
              card.score2
            ) : (
              <span className="flex justify-center">
                <img
                  src={icon1}
                  alt="icon1"
                  //  className="ml-28px"
                />
              </span>
            )}
          </p>
        </div>
        <div
          style={{ borderColor: "#cccccc", width: "252px", height: "30px" }}
          className="flex items-center justify-between border-l border-r"
        >
          <p
            style={{
              fontSize: "12px",
              color: card.score1ArrowUp
                ? "#0072bc"
                : card.score1ArrowDown
                ? "#f04281"
                : "#444444",
              letterSpacing: "-0.031em",
            }}
            className="flex items-center ml-10px mt-10px mb-12px"
          >
            {card.score3 ? (
              card.score3
            ) : (
              <img
                src={icon1}
                alt="icon1"
                // className="ml-14px"
              />
            )}
            <span>
              {card.score3ArrowUp ? (
                <img
                  src={Up}
                  alt="Up"
                  className="ml-3px"
                  //  className="mr-104px mt-11px mb-12px"
                />
              ) : card.score3ArrowDown ? (
                <img
                  src={Dn}
                  alt="Dn"
                  className="ml-8px"
                  // className="mr-104px mt-11px mb-12px"
                />
              ) : (
                ""
              )}
            </span>
          </p>

          <p
            style={{
              fontSize: "12px",
              color: "#444444",
              letterSpacing: "-0.031em",
            }}
            className=" mr-9px mt-10px mb-8px"
          >
            {card.team2}
          </p>
        </div>
        <div
          style={{ width: "39px" }}
          className="flex items-center justify-center"
        >
          <p
            style={{
              fontSize: "12px",
              color: "#444444",
              letterSpacing: "-0.031em",
              marginRight: "1px",
              marginBottom: "2px",
            }}
          >
            {card.difference}
          </p>
        </div>
      </div>
    </>
  );
};

export default CenterAccordionContent;
