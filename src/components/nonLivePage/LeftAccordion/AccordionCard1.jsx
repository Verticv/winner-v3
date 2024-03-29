import React, { useState } from "react";
import icon from "../../../images/nonLivePage/LeftAccordion/Card/star.png";
import Arrow from "../../../images/nonLivePage/LeftAccordion/Card/Arrow.png";
import icon1 from "../../../images/nonLivePage/LeftAccordion/Card/Icon.png";
import {
  deleteFavoritePreMatchCardById,
  deleteFavoriteLaLigaCardById,
  deleteFavoriteBundesligaCardById,
} from "reducers/nonLive-reducer";
import { useDispatch } from "react-redux";

const AccordionCard1 = ({ id, team1, time, team2, dateAndTime, t1, score1, t3, t4, t5, score3, card, type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [isHovered] = useState(false);
  const [cardHovered] = useState(false);
  const [cardSelected] = useState(false);

  const [leftActive] = useState(false);
  const [centerActive] = useState(false);
  const [rightActive] = useState(false);

 

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  const [isHovered1] = useState(false);

  

  // const handleMouseEnter1 = () => {
  //   setIsHovered1(true);
  // };

  // const handleMouseLeave1 = () => {
  //   setIsHovered1(false);
  // };

  const [isHovered2] = useState(false);

  const hoverStyle2 = {
    background: "#936cee",
    color: "#ffffff",
    borderBottomRightRadius: "4px",
  };

  // const handleMouseEnter2 = () => {
  //   setIsHovered2(true);
  // };

  // const handleMouseLeave2 = () => {
  //   setIsHovered2(false);
  // };

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
      className="items-center justify-between mx-2px rounded-lg mb-2px overflow-hidden "
      // className="items-center justify-between px-3px rounded-lg mb-2px h-85px"
    >
      <div
        // onClick={() => setCardSelected((prev) => !prev)}
        className="cursor-pointer accordion can-hover"
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
            className="hover text-12px mt-6px -mb-px"
          >
            {team1} 
          </p>
          <p
            style={{
              color: cardHovered || cardSelected ? "#ffffff" : "#f04281",
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
              color: cardHovered || cardSelected ? "#ffffff" : "#444444",
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
                color: cardHovered || cardSelected ? "#ffffff" : "#0072bc",
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
                className="mt-12px ml-px object-none filter hover:brightness-110"
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
                className="hover tooltiptext items-center justify-center text-10px font-malgun tracking-tight text-white"
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
            borderColor: "#cccccc",
            borderBottomLeftRadius: "4px",
            borderBottomRightRadius: "4px",
          }}
          className="flex border-t border-solid h-31px items-center cursor-pointer"
        >
          <div
            style={{
              width: "91px",
              height: "30px",
              background: leftActive ? "#936cee" : ""
            }} 
            className="flex items-center justify-between" 
            
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
            <img
              className="mr-8px mb-8px mt-7px object-none"
              style={{ filter: (isHovered || leftActive) && "brightness(0) invert(1)" }}
              src={icon1}
              alt="img"
            />
          </div>
          <div
            style={{
              borderColor: "#cccccc",
              width: "93px",
              height: "30px",
              background: centerActive ? "#936cee" : ""
            }}
            className="flex items-center justify-between border-l border-r border-solid h-30px "
            // onMouseEnter={handleMouseEnter1}
            // onMouseLeave={handleMouseLeave1}
            // onClick={() => {
            //   dispatch(
            //     setBetSlipData({
            //       data: card,
            //     })
            //   );
            //   setCenterActive((prev) => !prev);
            // }}
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
            <img
              className="mr-8px mb-8px mt-7px object-none"
              style={{ filter: (isHovered1 || centerActive) && "brightness(0) invert(1)" }}
              src={icon1}
              alt="img"
            />
          </div>
          <div
            style={{
              width: "90px",
              height: "30px",
              background: rightActive ? "#936cee" : "",
              ...(isHovered2 ? hoverStyle2 : null),
            }}
            className="flex items-center justify-between"
        
          >
            <p
              style={{
                color: isHovered2 || rightActive ? "#ffffff" : "#444444",
                letterSpacing: "-0.031em",
              }}
              className="ml-8px mt-10px mb-12px text-12px font-malgun"
            >
              {t5 || "2"}
            </p>
            <img
              className=" hover mr-8px mb-8px mt-7px object-none"
              style={{ filter: (isHovered2 || rightActive) && "brightness(0) invert(1)" }}
              src={icon1}
              alt="img"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionCard1;
