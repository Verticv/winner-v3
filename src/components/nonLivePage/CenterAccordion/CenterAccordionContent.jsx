import React, { useEffect, useState } from "react";
import icon from "../../../images/nonLivePage/CenterAccordion/star2.png";
import Up from "../../../images/nonLivePage/LeftAccordion/Card/Up.png";
import Dn from "../../../images/nonLivePage/LeftAccordion/Card/Dn.png";
import icon1 from "../../../images/nonLivePage/CenterAccordion/Icon1.png";
import activeStarIcon from "../../../images/nonLivePage/CenterAccordion/star_on2.png";
import "./style.css";

import { useDispatch, useSelector } from "react-redux";
import {
  setBetSlipData,
  setLiveGameData,
  addToPreMatchPremierLeague,
  addToFavoriteLaLiga,
  addToBundesliga,
  deleteFavoritePreMatchCardById,
  deleteFavoriteLaLigaCardById,
  deleteFavoriteBundesligaCardById,
} from "reducers/nonLive-reducer";
import arrowActive from "../../../images/nonLivePage/CenterAccordion/ArrowActive.png";

const CenterAccordionContent = ({ card, lastObject, setEnglandActive, lastItemActive, setLastItemActive }) => {
  const dispatch = useDispatch();
  const [leftActive, setLeftActive] = useState(false);
  const [centerActive, setCenterActive] = useState(false);
  const [rightActive, setRightActive] = useState(false);
  const [activeStar, setActiveStar] = useState(false);
  const [hoverStar, setHoverStar] = useState(null);


  const favoritePreMatch = useSelector((state) => state?.nonLive?.favoritePreMatch);

  const favoriteLaLiga = useSelector((state) => state?.nonLive?.favoriteLaLiga);

  const bundesliga = useSelector((state) => state?.nonLive?.bundesliga);

  useEffect(() => {
    if (card.type === "프리미어리그") {
      let card_index = favoritePreMatch.findIndex((el) => +el.id === card.id);
      if (card_index === -1) {
        setActiveStar(false);
      }
    }
  }, [favoritePreMatch, setActiveStar, card.id, card.type]);

  useEffect(() => {
    if (card.type === "라리가") {
      let card_index = favoriteLaLiga.findIndex((el) => +el.id === card.id);
      if (card_index === -1) {
        setActiveStar(false);
      }
    }
  }, [favoriteLaLiga, setActiveStar, card.id, card.type]);

  useEffect(() => {
    if (card.type === "분데스리가") {
      let card_index = bundesliga.findIndex((el) => +el.id === card.id);
      if (card_index === -1) {
        setActiveStar(false);
      }
    }
  }, [bundesliga, setActiveStar, card.id, card.type]);

  const addFavoriteForPreMatch = (title, items) => {
    if (title === "프리미어리그") {
      return dispatch(
        addToPreMatchPremierLeague({
          payload: {
            title,
            items,
          },
        })
      );
    } else if (title === "라리가") {
      return dispatch(
        addToFavoriteLaLiga({
          payload: {
            title,
            items,
          },
        })
      );
    } else if (title === "분데스리가") {
      return dispatch(
        addToBundesliga({
          payload: {
            title,
            items,
          },
        })
      );
    }
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
    <>
      <button
        style={{
          borderColor: "#cccccc",
        }}
        //   className={`flex items-center
        //    ${
        //     lastObject.text == "첼시" ? "" : "border-b"
        //   }
        //    h-31px  `}
        // >
        className={`flex items-center ${lastObject.id !== card.id ? "border-b h-31px" : "h-30px"}
        `}
      >
        <div className="items-center ml-6px mt-6px mb-8px" style={{ width: "23px" }}>
          <img
            id={card.id}
            src={activeStar || hoverStar ? activeStarIcon : icon}
            alt="icon"
            style={{
              marginTop: "1px",
              marginLeft: activeStar || hoverStar ? "-1px" : "",
            }}
            onClick={(e) => {
              e.stopPropagation();
              setActiveStar((prev) => !prev);
              if (!activeStar) {
                addFavoriteForPreMatch(card.type, {
                  id: e.target.id,
                  team1: card.team1,
                  time: "18:30",
                  team2: card.team2,
                  dateAndTime: "2023-05-14 18:30",
                  type: card.type,
                  score1: card.score1,
                  t4: card.score2,
                  score3: card.score3,
                  score1ArrowDown: card?.score1ArrowDown,
                  score1ArrowUp: card?.score1ArrowUp,
                  score2ArrowDown: card?.score2ArrowDown,
                  score2ArrowUp: card?.score2ArrowUp,
                  score3ArrowDown: card?.score3ArrowDown,
                  score3ArrowUp: card?.score3ArrowUp,
                });
              } else {
                deleteFromFavorite({
                  type: card.type,
                  id: e.target.id,
                });
              }
            }}
            onMouseOver={() => setHoverStar(true)}
            onMouseLeave={() => setHoverStar(false)}
          />
        </div>
        <div
          onClick={() => {
            card.score1 &&
              dispatch(
                setBetSlipData({
                  data: card,
                })
              );
            card.score1 && setLeftActive((prev) => !prev);
          }}
          style={{
            borderColor: leftActive ? "#6227a5" : "#cccccc",
            width: "252px",
            height: "30px",
            background: leftActive ? `linear-gradient(to top, #5423a0, #9d3bbb)` : "",
            color: leftActive ? "#fff" : "#111111"
          }}
          className={`flex items-center justify-between border-l border-r hover-style can-hover ${card.score1?'':'lock-cell'}`}
        >
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "-0.031em",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "190px",
            }}
            className="ml-9px mt-10px mb-12px"
          >
            {card.team1}
          </p>

          <p
            style={{
              fontSize: "12px",
              color:
                leftActive 
                  ? "#ffffff"
                  : card.score1ArrowUp
                  ? "#f04281"
                  : card.score1ArrowDown
                  ? "#0072bc"
                  : "#111111",

              letterSpacing: "-0.031em",
            }}
            className="flex items-center mr-9px mt-10px mb-12px flex-shrink-0"
          >
            <span>
              {card.score1ArrowUp ? (
                <img
                  src={Up}
                  alt="Up"
                  className="blink_style mr-2px"
                  // className="ml-50px mt-11px mb-12px"
                />
              ) : card.score1ArrowDown ? (
                <img
                  src={Dn}
                  alt="Dn"
                  className="blink_style mr-2px"
                  // className="ml-50px mt-11px mb-12px"
                />
              ) : (
                ""
              )}
            </span>
            {card.score1 ? (
              <p style={{ width: "28px" }} className="text-right flex justify-end font-semibold">
                {card.score1}
              </p>
            ) : (
              <img
                src={icon1}
                alt="icon1"
                style={{ filter: (leftActive ) && "brightness(0) invert(1)" }}
                className="mr-5px mt-2px"
              />
            )}
          </p>
        </div>
        <div
          onClick={() => {
            card.score2 &&
              dispatch(
                setBetSlipData({
                  data: card,
                })
              );
            card.score2 && setCenterActive((prev) => !prev);
          }}
          style={{
            height: "100%",
            background: centerActive ? `linear-gradient(to top, #5423a0, #9d3bbb)` : "",
            color: centerActive ? "#ffffff" : "#444444"
          }}
          className={`flex items-center relative w-68px justify-center hover-style can-hover  ${card.score2 ? '' : 'lock-cell'}`}
        >
          {card.score2ArrowUp ? (
            <img
              src={Up}
              alt="Up"
              className="blink_style -mr-6px mb-px absolute"
              style={{ right: "56px" }}
              //  className="ml-10px mt-11px mb-12px"
            />
          ) : card.score2ArrowDown ? (
            <img
              src={Dn}
              alt="Dn"
              className="blink_style -mr-6px mb-px absolute"
              style={{ right: "56px" }}
              //  className="ml-10px mt-11px mb-12px"
            />
          ) : (
            ""
          )}
          <p
            style={{
              fontSize: "12px",
              color:
                centerActive 
                  ? "#ffffff"
                  : card.score1ArrowUp
                  ? "#f04281"
                  : card.score1ArrowDown
                  ? "#0072bc"
                  : "#111111",
              letterSpacing: "-0.031em",
              width: "100%",
              textAlign: "center",
            }}
            className="mb-2px font-semibold"
          >
            {card.score2 ? (
              card.score2
            ) : (
              <span className="flex justify-center">
                <img
                  src={icon1}
                  alt="icon1"
                  style={{ filter: (centerActive ) && "brightness(0) invert(1)" }}
                  className="mt-2px"
                />
              </span>
            )}
          </p>
        </div>
        <div
          onClick={() => {
            card.score3 &&
              dispatch(
                setBetSlipData({
                  data: card,
                })
              );
            card.score3 && setRightActive((prev) => !prev);
          }}
          style={{
            borderColor: rightActive ? "#6227a5" : "#cccccc",
            width: "252px",
            height: "30px",
            background: rightActive ? `linear-gradient(to top, #5423a0, #9d3bbb)` : "",
            color: rightActive ? "#ffffff" : "#444444"
          }}
          className={`flex items-center justify-between border-l border-r hover-style can-hover  ${card.score3?'':'lock-cell'}`}
        >
          <p
            style={{
              fontSize: "12px",
              color:
                rightActive 
                  ? "#ffffff"
                  : card.score1ArrowUp
                  ? "#0072bc"
                  : card.score1ArrowDown
                  ? "#f04281"
                  : "#111111",
              letterSpacing: "-0.031em",
            }}
            className="flex items-center ml-9px mt-10px mb-12px flex-shrink-0"
          >
            {card.score3 ? (
              <p style={{ width: "28px" }} className="text-left font-semibold">
                {card.score3}
              </p>
            ) : (
              <img
                src={icon1}
                alt="icon1"
                style={{ filter: (rightActive ) && "brightness(0) invert(1)" }}
                className="ml-5px mt-2px"
              />
            )}
            <span>
              {card.score3ArrowUp ? (
                <img
                  src={Up}
                  alt="Up"
                  className=" blink_style ml-2px"
                  //  className="mr-104px mt-11px mb-12px"
                />
              ) : card.score3ArrowDown ? (
                <img
                  src={Dn}
                  alt="Dn"
                  className="blink_style ml-2px"
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
              letterSpacing: "-0.031em",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "185px",
            }}
            className=" mr-9px mt-8px mb-10px"
          >
            {card.team2}
          </p>
        </div>
        <div
          style={{
            width: "39px",
            height: "100%",
            borderRight: lastItemActive === card ? "1px solid #6227a5" : "",
            background: lastItemActive === card ? `linear-gradient(to top, #5423a0, #9d3bbb)` : "",
            color: lastItemActive === card ? "#ffffff" : "#444444",
            borderBottomRightRadius: `${lastObject.id !== card.id ? "0px" : "4px"}`
          }}
         
          className={`flex items-center justify-end pr-3px ${
            lastItemActive === card ? "justify-end" : "justify-center"
          } hover-style can-hover`}
          onClick={() => {
            dispatch(setLiveGameData(card));
            setLastItemActive(card);
            setEnglandActive(false);
          }}
        >
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "-0.031em",
              marginBottom: "2px",
            }}
          >
            {card.difference}
          </p>
          {lastItemActive === card ? <img className=" object-none ml-3px" src={arrowActive} alt="" /> : ""}
        </div>
      </button>
    </>
  );
};

export default CenterAccordionContent;
