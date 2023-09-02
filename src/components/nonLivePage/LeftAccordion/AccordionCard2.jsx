import React, { useState } from "react";
import icon from "../../../images/nonLivePage/LeftAccordion/Card/star.png";
import Arrow from "../../../images/nonLivePage/LeftAccordion/Card/Arrow.png";
import Up from "../../../images/nonLivePage/LeftAccordion/Card/Up.png";
import Dn from "../../../images/nonLivePage/LeftAccordion/Card/Dn.png";
import "./style.css";
import {
  deleteFavoritePreMatchCardById,
  deleteFavoriteLaLigaCardById,
  deleteFavoriteBundesligaCardById,
  setBetSlipData,
} from "reducers/nonLive-reducer";
import { useDispatch } from "react-redux";

const AccordionCard2 = ({
  id,
  team1,
  time,
  team2,
  dateAndTime,
  t1,
  score1,
  t3,
  t4,
  t5,
  score3,
  score1ArrowUp,
  score2ArrowUp,
  score3ArrowUp,
  score1ArrowDown,
  card,
  type,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [cardHovered, setCardHovered] = useState(false);
  const [cardSelected] = useState(false);

  const [leftActive, setLeftActive] = useState(false);
  const [centerActive, setCenterActive] = useState(false);
  const [rightActive, setRightActive] = useState(false);

  const hoverStyle = {
    background: "#936cee",
    color: "#ffffff",
    // borderBottomLeftRadius: "4px",
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [isHovered1, setIsHovered1] = useState(false);

  const hoverStyle1 = {
    background: "#936cee",
    color: "#ffffff",
  };

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const [isHovered2, setIsHovered2] = useState(false);

  const hoverStyle2 = {
    background: "#936cee",
    color: "#ffffff",
    borderBottomRightRadius: "4px",
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const deleteFromFavorite = ({ type, id }) => {
    if (type === "프리미어리그") {
      dispatch(
        deleteFavoritePreMatchCardById({
          id,
        })
      );
    } else if (type === "라리가") {
      dispatch(
        deleteFavoriteLaLigaCardById({
          id,
        })
      );
    } else if (type === "분데스리가") {
      dispatch(
        deleteFavoriteBundesligaCardById({
          id,
        })
      );
    }
  };
  return (
    <div
      style={{
        background: cardHovered || cardSelected ? "#946cf0" : "#ffffff",
        width: "274px",
        borderRadius: "4px",
      }}
      className="items-center justify-between mx-2px mb-2px "
      // className="items-center justify-between px-3px rounded-lg mb-2px h-85px"
    >
      <div
        onMouseEnter={() => setCardHovered(true)}
        onMouseLeave={() => setCardHovered(false)}
        // onClick={() => setCardSelected((prev) => !prev)}
        className="cursor-pointer"
      >
        <div className="flex ml-10px justify-between items-center mr-11px">
          <p
            style={{
              color: cardHovered || cardSelected ? "#ffffff" : "#444444",
              letterSpacing: "-0.031em",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              maxWidth: "220px",
            }}
            className="text-12px mt-6px -mb-px"
          >
            {team1}
          </p>
          <p
            style={{
              color: cardHovered || cardSelected ? "#ffffff" : "#f04281",
              letterSpacing: "-0.031em",
            }}
            className="text-12px font-malgun mt-px -mb-6px"
          >
            {time}
          </p>
        </div>
        <div className="ml-10px ">
          <p
            style={{
              color: cardHovered || cardSelected ? "#ffffff" : "#444444",
              letterSpacing: "-0.031em",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              maxWidth: "220px",
            }}
            className="text-12px font-malgun mt-px"
          >
            {team2}
          </p>
        </div>
        <div className="flex justify-between ml-10px -mt-px">
          <div className="mt-19px mb-6px">
            <p
              style={{
                color: cardHovered || cardSelected ? "#ffffff" : "#0072bc",
                letterSpacing: "-0.031em",
              }}
              className="text-12px font-malgun"
            >
              {dateAndTime}
            </p>
          </div>
          {/* <div className="flex">
          <img className="mt-12px object-none" src={icon} alt="img" />
          <img
            src={Arrow}
            alt="img"
            onClick={toggleAccordion}
            style={{ color: "#444444" }}
            className={`object-none mr-11px ml-9px mt-14px ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </div> */}
          <div className="flex">
            <div className="tooltip mt-8px items-center justify-center">
              <img
                id={id}
                className="mt-12px ml-px object-none cursor-pointer filter hover:brightness-110"
                src={icon}
                alt="img"
                onClick={() => {
                  deleteFromFavorite({
                    type,
                    id,
                  });
                }}
              />
              <span
                style={{ boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.5)" }}
                className="tooltiptext items-center justify-center text-10px font-malgun tracking-tight text-white"
              >
                즐겨찾기에서 제거
              </span>
            </div>
            <img
              src={Arrow}
              alt=""
              onClick={toggleAccordion}
              style={{
                filter: (cardHovered || cardSelected) && "brightness(0) invert(1)",
                color: "#444444",
              }}
              className={`object-none mr-11px ml-29px mt-15px cursor-pointer filter hover:opacity-75 ${
                isOpen ? "transform rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          style={{
            background: "#eeeeee",
            borderColor: "#cccccc",
            borderBottomLeftRadius: "4px",
            borderBottomRightRadius: "4px",
          }}
          className="flex border-t border-solid h-31px items-center overflow-hidden cursor-pointer"
        >
          <div
            style={{
              width: "91px",
              height: "30px",
              background: leftActive ? "#936cee" : "",
              ...(isHovered ? hoverStyle : null),
            }}
            className="flex items-center justify-between"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              dispatch(
                setBetSlipData({
                  data: card,
                })
              );
              setLeftActive((prev) => !prev);
            }}
          >
            <p
              style={{
                color: isHovered || leftActive ? "#ffffff" : "#444444",
                letterSpacing: "-0.031em",
              }}
              className=" ml-6px mt-9px mb-11px text-12px font-malgun"
            >
              {t1 || "1"}
            </p>
            <div className="flex items-center">
              <img className="blink_style mr-2px object-none mt-12px mb-13px" src={score1ArrowUp ? Up : Dn} alt="img" />
              <p
                style={{
                  color: isHovered || leftActive ? "#ffffff" : score1ArrowUp ? "#f04281" : "#0072bc",
                  letterSpacing: "-0.031em",
                  width: "28px",
                }}
                className="mr-8px text-12px mb-2px text-right flex justify-end font-semibold"
              >
                {score1 === "icon" ? "" : score1 || "2.12"}
              </p>
            </div>
          </div>
          <div
            style={{
              borderColor: "#cccccc",
              width: "93px",
              height: "30px",
              background: centerActive ? "#936cee" : "",
              ...(isHovered1 ? hoverStyle1 : null),
            }}
            className="flex items-center border-l border-r border-solid justify-between h-30px"
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
            onClick={() => {
              dispatch(
                setBetSlipData({
                  data: card,
                })
              );
              setCenterActive((prev) => !prev);
            }}
          >
            <p
              style={{
                color: isHovered1 || centerActive ? "#ffffff" : "#444444",
                letterSpacing: "-0.031em",
                marginBottom: t3 ? "4px" : "2px",
              }}
              className="ml-7px mr-27px text-12px font-malgun mb-4px"
            >
              {t3 || "무"}
            </p>
            <div className="flex items-center">
              <img className="blink_style mr-2px object-none mt-12px mb-13px" src={score2ArrowUp ? Up : Dn} alt="img" />
              <p
                style={{
                  color: isHovered1 || centerActive ? "#ffffff" : score2ArrowUp ? "#f04281" : "#0072bc",
                  letterSpacing: "-0.031em",
                  width: "28px",
                }}
                className="mr-7px text-12px text-right flex justify-end mb-2px font-semibold"
              >
                {t4 || "3.59"}
              </p>
            </div>
          </div>
          <div
            style={{
              width: "90px",
              height: "30px",
              background: rightActive ? "#936cee" : "",
              ...(isHovered2 ? hoverStyle2 : null),
            }}
            className="flex items-center justify-between"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            onClick={() => {
              dispatch(
                setBetSlipData({
                  data: card,
                })
              );
              setRightActive((prev) => !prev);
            }}
          >
            <p
              style={{
                color: isHovered2 || rightActive ? "#ffffff" : "#444444",
                letterSpacing: "-0.031em",
              }}
              className="ml-7px mt-10px mb-12px text-12px font-malgun"
            >
              {t5 || "2"}
            </p>
            <div className="flex items-center">
              <img className="blink_style mr-2px object-none mt-12px mb-13px" src={score3ArrowUp ? Up : Dn} alt="img" />
              <p
                style={{
                  color: isHovered2 || rightActive ? "#ffffff" : score3ArrowUp ? "#f04281" : "#0072bc",
                  letterSpacing: "-0.031em",
                  width: "28px",
                }}
                className="mr-8px mt-8px mb-10px text-12px text-right flex justify-end font-semibold"
              >
                {score3 || "3.62"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionCard2;
