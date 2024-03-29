import React, { useEffect, useState } from "react";
import CenterAccordionContent from "./CenterAccordionContent";
import Arrow from "../../../images/nonLivePage/CenterAccordion/Arrow.png";
import icon1 from "../../../images/nonLivePage/CenterAccordion/star2.png";
import activeStarIcon from "../../../images/nonLivePage/CenterAccordion/star_on.png";
import icon from "../../../images/nonLivePage/CenterAccordion/Icon.png";
import Collapsible from "../Collapsible/index";

import { useDispatch, useSelector } from "react-redux";
import {
  addToLeague,
  deleteFavoriteLeagueById,
} from "reducers/nonLive-reducer";

// import AccordionContent1 from "./AccordionContent1";

const CenterAccordionButton = ({
  id,
  title,
  date,
  icon2,
  cards,
  setEnglandActive,
  lastItemActive,
  setLastItemActive,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeStar, setActiveStar] = useState(false);
  const [hoverStar, setHoverStar] = useState(null);
  const dispatch = useDispatch();

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const lastIndex = cards.length - 1;
  const lastObject = cards[lastIndex];

  const League = useSelector((state) => state?.nonLive?.League);

  useEffect(() => {
    let card_index = League.findIndex((el) => +el.id === id);
    if (card_index === -1) {
      setActiveStar(false);
    }
  }, [League, setActiveStar, id]);

  const addFavoriteForLeague = (title, id) => {
    return dispatch(
      addToLeague({
        payload: {
          title,
          id,
        },
      })
    );
  };
  const deleteFromFavorite = ({ id }) => {
    dispatch(
      deleteFavoriteLeagueById({
        id,
      })
    );
  };
  return (
    <div
      style={{
        background: "#2e0450",
        width: "640px",
        boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.8)",
        borderRadius: "6px",
        marginLeft: "1px",
      }}
      className="rounded-lg py-px mb-4px"
    >
       <Collapsible
        open
        disableAnimationOnClose
        headerChild={
          <div
            style={{
              background: "#420572",
              width: "638px",
              borderRadius: "5px",
              borderBottomRightRadius: `${isOpen ? "0px" : "5px"}`,
              borderBottomLeftRadius: `${isOpen ? "0px" : "5px"}`,
            }}
            className={`flex items-center justify-between ${isOpen ? "rounded-t-lg" : "rounded-lg"
              } cursor-pointer h-30px ml-px`}
            onClick={toggleAccordion}
          >
            <div className="flex items-center">
              <img
                className="ml-5px mt-7px mb-8px object-none"
                src={icon}
                alt="icon"
              />
              <p
                style={{
                  color: "#eeeeee",
                  letterSpacing: "-0.031em",
                  marginBottom: "2px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "420px",
                }}
                className="text-12px ml-4px font-semibold"
              >
                {title}
              </p>
            </div>
            <div className="flex items-center">
              <div
                style={{ borderColor: "#533583", height: "30px" }}
                className="flex border-r"
              >
                <p
                  style={{
                    color: "#eeeeee",
                    letterSpacing: "-0.031em",
                    marginRight: activeStar || hoverStar ? "1.2px" : "",
                  }}
                  className="text-12px mt-5px"
                >
                  {date}
                </p>
                <img
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveStar((prev) => !prev);
                    if (!activeStar) {
                      addFavoriteForLeague({ title, id });
                    } else {
                      deleteFromFavorite({
                        id,
                      });
                    }
                  }}
                  onMouseEnter={() => setHoverStar(true)}
                  onMouseLeave={() => setHoverStar(false)}
                  style={{
                    marginTop: activeStar || hoverStar ? "1px" : "",
                  }}
                  className="-mr-13px -ml-px mb-2px object-none z-10"
                  src={activeStar || hoverStar ? activeStarIcon : icon1}
                  // TODO: add the active star icon
                  alt="icon1"
                />
                <img className="-mr-2px object-none" src={icon2} alt="icon1" />
              </div>
              <div
                style={{ width: "38px" }}
                className="justify-center items-center flex"
              >
                <img
                  src={Arrow}
                  alt=""
                  className={`object-none text-white ml-13px mt-10px mb-12px mr-14px ${isOpen ? "transform rotate-180" : ""
                    }`}
                />
              </div>
            </div>
          </div>
        }>
          <div
            style={{
              background: "#ffffff",
              width: "640px",
              borderBottomRightRadius: "5px",
              borderBottomLeftRadius: "5px",
            }}
            className=""
          >
            {cards.map((item) => (
              // @ts-ignore
              <CenterAccordionContent
                key={item.id}
                card={item}
                lastObject={lastObject}
                setEnglandActive={setEnglandActive}
                setLastItemActive={setLastItemActive}
                lastItemActive={lastItemActive}
              />
            ))}
          </div>
       </Collapsible>
    </div>
  );
};

export default CenterAccordionButton;
