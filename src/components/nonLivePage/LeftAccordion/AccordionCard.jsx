import React, { useState } from "react";
import icon from "../../../images/nonLivePage/LeftAccordion/Card/star.png";
import Arrow from "../../../images/nonLivePage/LeftAccordion/Card/Arrow.png";
import "./style.css";
import {
  deleteFavoritePreMatchCardById,
  deleteFavoriteLaLigaCardById,
  deleteFavoriteBundesligaCardById,
} from "reducers/nonLive-reducer";
import { useDispatch } from "react-redux";

const AccordionCard = ({
  id,
  team1,
  time,
  team2,
  dateAndTime,
  t1,
  t2,
  t3,
  t4,
  t5,
  t6,
  type,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const hoverStyle = {
    background: "#936cee",
    color: "#ffffff",
    borderBottomLeftRadius: "4px",
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
        background: "#ffffff",
        width: "274px",
        borderRadius: "4px",
      }}
      className="items-center justify-between mx-2px mb-2px pb-px "
      // className="items-center justify-between px-3px rounded-lg mb-2px h-85px"
    >
      <div className="flex ml-10px justify-between items-center mr-11px">
        <p
          style={{
            color: "#444444",
            letterSpacing: "-0.031em",
            fontFamily: "MalgunGothicRegular",
          }}
          className="text-12px mt-6px -mb-px"
        >
          {team1}
        </p>
        <p
          style={{
            color: "#f04281",
            letterSpacing: "-0.031em",
            fontFamily: "MalgunGothicRegular",
          }}
          className="text-12px font-malgun mt-px -mb-6px"
        >
          {time}
        </p>
      </div>
      <div className="ml-10px ">
        <p
          style={{ color: "#444444", letterSpacing: "-0.031em" }}
          className="text-12px font-malgun mt-px"
        >
          {team2}
        </p>
      </div>
      <div className="flex justify-between ml-10px -mt-px">
        <div className="mt-19px mb-6px">
          <p
            style={{ color: "#0072bc", letterSpacing: "-0.031em" }}
            className="text-12px font-malgun"
          >
            {dateAndTime}
          </p>
        </div>
        <div className="flex">
          <div className="tooltip mt-8px items-center justify-center">
            <img
              id={id}
              className="mt-12px ml-px object-none cursor-pointer"
              src={icon}
              alt="img"
              onClick={() => {
                deleteFromFavorite({
                  type,
                  id,
                });
              }}
            />
            <span className="tooltiptext items-center justify-center text-10px font-malgun tracking-tight text-white">
              즐겨찾기에서 제거
            </span>
          </div>
          <img
            src={Arrow}
            alt=""
            onClick={toggleAccordion}
            style={{ color: "#444444" }}
            className={`object-none mr-11px ml-29px mt-15px ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
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
          className="flex border-t border-solid h-31px items-center "
        >
          <div
            style={{
              width: "91px",
              height: "30px",
              ...(isHovered ? hoverStyle : null),
            }}
            className="flex items-center justify-between"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <p
              style={{
                color: isHovered ? "#ffffff" : "#444444",
                letterSpacing: "-0.031em",
              }}
              className="ml-6px mt-9px mb-11px text-12px font-malgun"
            >
              {t1 || "1"}
            </p>
            <p
              style={{
                color: isHovered ? "#ffffff" : "#682aa7",
                letterSpacing: "-0.031em",
              }}
              className="mr-7px text-12px font-malgun mb-2px"
            >
              {t2 === "icon" ? "" : t2 || "2.12"}
            </p>
          </div>
          <div
            style={{
              borderColor: "#cccccc",
              width: "93px",
              height: "30px",
              ...(isHovered1 ? hoverStyle1 : null),
            }}
            className="flex items-center justify-between  border-l border-r border-solid"
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          >
            <p
              style={{
                color: isHovered1 ? "#ffffff" : "#444444",
                letterSpacing: "-0.031em",
              }}
              className="ml-7px text-12px font-malgun mb-4px"
            >
              {t3 || "무"}
            </p>
            <p
              style={{
                color: isHovered1 ? "#ffffff" : "#682aa7",
                letterSpacing: "-0.031em",
              }}
              className="mr-7px text-12px font-malgun mb-2px"
            >
              {t4 || "3.59"}
            </p>
          </div>
          <div
            style={{
              width: "90px",
              height: "30px",
              ...(isHovered2 ? hoverStyle2 : null),
            }}
            className="flex items-center justify-between"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            <p
              style={{
                color: isHovered2 ? "#ffffff" : "#444444",
                letterSpacing: "-0.031em",
              }}
              className="ml-8px mt-10px mb-12px text-12px font-malgun"
            >
              {t5 || "2"}
            </p>
            <p
              style={{
                color: isHovered2 ? "#ffffff" : "#682aa7",
                letterSpacing: "-0.031em",
              }}
              className="mr-7px mt-8px mb-10px text-12px"
            >
              {t6 || "3.62"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionCard;
