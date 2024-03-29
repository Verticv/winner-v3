import React, { useState } from "react";
import icon from "../../../images/nonLivePage/LeftAccordion/Card/star.png";
import Arrow from "../../../images/nonLivePage/LeftAccordion/Card/Arrow.png";
import "./style.css";
import {
  deleteFavoritePreMatchCardById,
  deleteFavoriteLaLigaCardById,
  deleteFavoriteBundesligaCardById,
  setBetSlipData,
} from "reducers/nonLive-reducer";
import { useDispatch } from "react-redux";

const AccordionCard = ({ id, team1, time, team2, dateAndTime, t1, score1, t3, t4, t5, score3, type, card }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [isHovered] = useState(false);
  const [cardSelected] = useState(false);

  const [leftActive, setLeftActive] = useState(false);
  const [centerActive, setCenterActive] = useState(false);
  const [rightActive, setRightActive] = useState(false);

  

  

  const [isHovered1] = useState(false);

  
 



  

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
        background: cardSelected ? "#946cf0" : "#ffffff",
        width: "274px",
        borderRadius: "4px",
      }}
      className="items-center justify-between mx-2px mb-2px overflow-hidden"

      // className="items-center justify-between px-3px rounded-lg mb-2px h-85px"
    >
      <div
        // onClick={() => setCardSelected((prev) => !prev)}
        className="cursor-pointer  accordion can-hover"
      >
        <div className="flex ml-10px justify-between items-center mr-11px">
          <p
            style={{
              color: cardSelected ? "#ffffff" : "#444444",
              letterSpacing: "-0.031em",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              maxWidth: "220px",
            }}
            className="hover text-12px mt-6px -mb-px"
          >
            {team1}
          </p>
          <p
            style={{
              color:  cardSelected ? "#ffffff" : "#f04281",
              letterSpacing: "-0.031em",
            }}
            className="hover text-12px font-malgun mt-px -mb-6px"
          >
            {time}
          </p>
        </div>
        <div className="ml-10px ">
          <p
            style={{
              color: cardSelected ? "#ffffff" : "#444444",
              letterSpacing: "-0.031em",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              maxWidth: "220px",
            }}
            className="hover text-12px font-malgun mt-px"
          >
            {team2}
          </p>
        </div>
        <div className="flex justify-between ml-10px -mt-px">
          <div className="mt-19px mb-6px">
            <p
              style={{
                color: cardSelected ? "#ffffff" : "#0072bc",
                letterSpacing: "-0.031em",
              }}
              className="hover text-12px font-malgun"
            >
              {dateAndTime}
            </p>
          </div>
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
                filter: (cardSelected) && "brightness(0) invert(1)",
                color: "#444444",
              }}
              className={`hover object-none mr-11px ml-29px mt-15px cursor-pointer filter hover:opacity-75 ${
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
            borderColor: "#cccccc"
          }}
          className="flex border-t border-solid h-30px items-center overflow-hidden cursor-pointer"
        >
          <div
            style={{
              width: "91px",
              height: "30px",
              background: leftActive ? "#936cee" : ""
            }}
            className="flex items-center justify-between card-btn"
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
              className="ml-6px mt-9px mb-11px text-12px font-malgun"
            >
              {t1 || "1"}
            </p>
            <p
              style={{
                color: isHovered || leftActive ? "#ffffff" : "#682aa7",
                letterSpacing: "-0.031em",
              }}
              className="mr-7px text-12px font-malgun mb-2px font-semibold"
            >
              {score1 === "icon" ? "" : score1 || "2.12"}
            </p>
          </div>
          <div
            style={{
              borderColor: "#cccccc",
              width: "93px",
              height: "30px",
              background: centerActive ? "#936cee" : ""
            }}
            className="flex items-center justify-between  border-l border-r border-solid card-btn"
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
              className="ml-7px text-12px font-malgun mb-4px"
            >
              {t3 || "무"}
            </p>
            <p
              style={{
                color: isHovered1 || centerActive ? "#ffffff" : "#682aa7",
                letterSpacing: "-0.031em",
              }}
              className="mr-7px text-12px font-malgun mb-2px font-semibold"
            >
              {t4 || "3.59"}
            </p>
          </div>
          <div
            style={{
              width: "90px",
              height: "30px",
              background: rightActive ? "#936cee" : ""
            }}
            className="flex items-center justify-between card-btn"
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
                color:  rightActive ? "#ffffff" : "#444444",
                letterSpacing: "-0.031em",
              }}
              className="ml-8px mt-10px mb-12px text-12px font-malgun"
            >
              {t5 || "2"}
            </p>
            <p
              style={{
                color:  rightActive ? "#ffffff" : "#682aa7",
                letterSpacing: "-0.031em",
              }}
              className="mr-7px mt-8px mb-10px text-12px font-semibold"
            >
              {score3 || "3.62"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionCard;
