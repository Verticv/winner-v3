import React, { useEffect, useState } from "react";
import iconStar from "../../../images/nonLivePage/LeftAccordion/Card/star.png";
import icon from "../../../images/nonLivePage/LeftAccordion/content/Icon.png";
import AccordionCard from "./AccordionCard";
import Arrow from "../../../images/nonLivePage/LeftAccordion/Card/Arrow.png";
import { useSelector, useDispatch } from "react-redux";
import { deleteAllFavoriteCards, deleteFavoriteLeagueById } from "reducers/nonLive-reducer";
import "./style.css";

const AccordionContent = ({ setIsOpen }) => {
  const [showCard, setShowCard] = useState(true);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isOpen3, setIsOpen3] = useState(true);
  const [isHovered, setHovered] = useState(null);

  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleAccordion3 = () => {
    setIsOpen3(!isOpen3);
  };
  const [showCard1, setShowCard1] = useState(true);
  const [showCard2, setShowCard2] = useState(true);
  const [isDeleted, setIsDeleted] = useState(true);
  const dispatch = useDispatch();

  const favoritePreMatch = useSelector((state) => state?.nonLive?.favoritePreMatch);
  const favoriteLaLiga = useSelector((state) => state?.nonLive?.favoriteLaLiga);
  const bundesliga = useSelector((state) => state?.nonLive?.bundesliga);
  const League = useSelector((state) => state?.nonLive?.League);

  const deleteFromFavorite = ({ id }) => {
    dispatch(
      deleteFavoriteLeagueById({
        id,
      })
    );
  };

  useEffect(() => {
    console.log("League.length !== 0", favoriteLaLiga);
  });

  useEffect(() => {
    if (
      bundesliga[0]?.items?.length !== 0 ||
      favoriteLaLiga[0]?.items?.length !== 0 ||
      favoritePreMatch[0]?.items?.length !== 0 ||
      League.length !== 0
    ) {
      setIsDeleted(false);
    }
  }, [favoritePreMatch, favoriteLaLiga, bundesliga, League.length]);

  useEffect(() => {
    setShowCard(true);
  }, [favoritePreMatch]);

  useEffect(() => {
    setShowCard1(true);
  }, [favoriteLaLiga]);

  useEffect(() => {
    setShowCard2(true);
  }, [bundesliga]);
  return (
    <>
      {/* {!isDeleted && ( */}

      {/* )} */}

      {!isDeleted && (
        <>
          {(favoritePreMatch[0]?.id ||
            favoriteLaLiga[0]?.id ||
            favoriteLaLiga[0]?.id ||
            bundesliga[0]?.id ||
            League.length !== 0) && (
            <div
              style={{
                background: "#361550",
                borderRadius: "6px",
              }}
              className="p-px mr-2px ml-2px "
            >
              <div
                style={{
                  background: "#936cee",
                  borderRadius: "5px",
                }}
                className="flex items-center justify-center h-34px cursor-pointer hover:filter hover:brightness-150"
                onClick={() => {
                  dispatch(deleteAllFavoriteCards());
                  setIsDeleted(true);
                  setIsOpen(false);
                }}
              >
                <p className="mb-px text-13px text-white tracking-tight" style={{ fontFamily: "MalgunGothicBold" }}>
                  모두지우기
                </p>
              </div>
            </div>
          )}
          {(favoritePreMatch[0]?.id || favoriteLaLiga[0]?.id || favoriteLaLiga[0]?.id || bundesliga[0]?.id) && (
            <>
              <div className="ml-7px mt-4px mb-5px">
                <p
                  style={{
                    letterSpacing: "-0.031em",
                  }}
                  className="text-10px text-white"
                >
                  프리매치경기
                </p>
              </div>
            </>
          )}

          {showCard && favoritePreMatch[0]?.id && (
            <>
              <div
                style={{
                  background: isHovered === 1 ? "#946cf0" : "#ffffff",
                  borderRadius: "4px",
                }}
                className="flex items-center justify-between mx-2px h-35px mb-2px cursor-pointer"
                onClick={toggleAccordion1}
                onMouseEnter={() => setHovered(1)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="flex items-center">
                  <img
                    style={{ filter: isHovered === 1 && "brightness(0) invert(1)" }}
                    className="ml-6px mt-6px mb-6px"
                    src={icon}
                    alt="img"
                  />
                  <p
                    style={{
                      color: isHovered === 1 ? "#fff" : "#444444",
                      letterSpacing: "-0.031em",
                      fontFamily: "MalgunGothicRegular",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "210px",
                    }}
                    className="text-12px mt-10px mb-12px ml-5px"
                  >
                    프리미어리그
                  </p>
                </div>

                <img
                  src={Arrow}
                  alt=""
                  style={{ color: "#444444", filter: isHovered === 1 && "brightness(0) invert(1)" }}
                  className={`object-none cursor-pointer mr-11px filter hover:opacity-75 ${
                    isOpen1 ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              {isOpen1 && (
                <div>
                  {favoritePreMatch?.map((el) => (
                    <AccordionCard
                      id={el?.id}
                      team1={el?.team1}
                      time={el?.time}
                      team2={el?.team2}
                      dateAndTime={el?.dateAndTime}
                      t1={el?.t1}
                      t2={el?.t2}
                      t3={el?.t3}
                      t4={el?.t4}
                      t5={el?.t5}
                      t6={el?.t6}
                      type={el?.type}
                    />
                  ))}
                </div>
              )}
              <div>{/* <AccordionCard2 /> */}</div>
            </>
          )}
        </>
      )}

      {/* </div> */}
      {!isDeleted && (
        <>
          {showCard1 && favoriteLaLiga[0]?.id && (
            <>
              <div
                style={{
                  background: isHovered === 2 ? "#946cf0" : "#ffffff",
                  borderRadius: "4px",
                }}
                className="flex items-center mx-2px rounded-lg h-35px mb-2px cursor-pointer justify-between"
                onClick={toggleAccordion2}
                onMouseEnter={() => setHovered(2)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="flex items-center">
                  <img
                    style={{ filter: isHovered === 2 && "brightness(0) invert(1)" }}
                    className="ml-6px"
                    src={icon}
                    alt="img"
                  />
                  <p
                    style={{
                      color: isHovered === 2 ? "#fff" : "#444444",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "210px",
                    }}
                    className="text-12px ml-5px"
                  >
                    라리가
                  </p>
                </div>

                <img
                  src={Arrow}
                  alt=""
                  // onClick={(e) => {
                  //   setShowCard1((prev) => !prev);
                  // }}
                  style={{ color: "#444444", filter: isHovered === 2 && "brightness(0) invert(1)" }}
                  className={`object-none mr-11px cursor-pointer ${isOpen2 ? "transform rotate-180" : ""}`}
                />
              </div>
              {isOpen2 && (
                <div>
                  {favoriteLaLiga?.map((el) => (
                    <AccordionCard
                      id={el?.id}
                      team1={el?.team1}
                      time={el?.time}
                      team2={el?.team2}
                      dateAndTime={el?.dateAndTime}
                      t1={el?.t1}
                      t2={el?.t2}
                      t3={el?.t3}
                      t4={el?.t4}
                      t5={el?.t5}
                      t6={el?.t6}
                      type={el?.type}
                    />
                  ))}
                </div>
              )}
            </>
          )}
          {bundesliga[0]?.id && (
            <>
              {showCard2 && bundesliga[0]?.items?.length !== 0 && (
                <>
                  <div
                    style={{
                      background: isHovered === 3 ? "#946cf0" : "#ffffff",
                      borderRadius: "4px",
                    }}
                    className="flex items-center mx-2px h-35px mb-2px cursor-pointer justify-between"
                    onClick={toggleAccordion3}
                    onMouseEnter={() => setHovered(3)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="flex items-center">
                      <img
                        style={{ filter: isHovered === 3 && "brightness(0) invert(1)" }}
                        className="ml-6px mt-7px mb-6px"
                        src={icon}
                        alt="img"
                      />
                      <p
                        style={{
                          color: isHovered === 3 ? "#fff" : "#444444",
                          letterSpacing: "-0.031em",
                          fontFamily: "MalgunGothicRegular",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          maxWidth: "210px",
                        }}
                        className="text-12px mt-10px mb-13px ml-5px"
                      >
                        분데스리가
                      </p>
                    </div>
                    <img
                      src={Arrow}
                      alt=""
                      // onClick={() => setShowCard2((prev) => !prev)}
                      style={{ color: "#444444", filter: isHovered === 3 && "brightness(0) invert(1)" }}
                      className={`object-none mr-11px cursor-pointer ${isOpen3 ? "transform rotate-180" : ""}`}
                    />
                  </div>
                  {isOpen3 && (
                    <div>
                      {bundesliga?.map((el) => (
                        <AccordionCard
                          id={el?.id}
                          team1={el?.team1}
                          time={el?.time}
                          team2={el?.team2}
                          dateAndTime={el?.dateAndTime}
                          t1={el?.t1}
                          t2={el?.t2}
                          t3={el?.t3}
                          t4={el?.t4}
                          t5={el?.t5}
                          t6={el?.t6}
                          type={el?.type}
                        />
                      ))}
                    </div>
                  )}
                </>
              )}
            </>
          )}

          {!isDeleted && League.length !== 0 && (
            <>
              <div className="ml-7px mt-5px mb-4px">
                <p className="text-10px text-white">리그</p>
              </div>
              {League?.map((el) => (
                <>
                  <div
                    style={{
                      background: "#ffffff",
                      borderRadius: "4px",
                    }}
                    className="flex items-center justify-between mx-2px rounded-lg h-33px mb-2px"
                  >
                    <div className="flex items-center">
                      <img className="ml-6px" src={icon} alt="img" />
                      <p style={{ color: "#444444", marginBottom: "2px" }} className="text-12px ml-5px">
                        {el.title.includes("프리미어리그")
                          ? "프리미어리그"
                          : el.title.includes("라리가")
                          ? "라리가"
                          : el.title.includes("분데스리가")
                          ? "분데스리가"
                          : ""}
                      </p>
                    </div>
                    <div className="tooltip2">
                      <img
                        className="mr-6px cursor-pointer filter hover:brightness-110"
                        src={iconStar}
                        alt="img"
                        onClick={() => {
                          deleteFromFavorite({
                            id: el.id,
                          });
                        }}
                      />
                      <span
                        style={{
                          boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.5)",
                        }}
                        className="tooltiptext2 items-center justify-center text-10px font-malgun tracking-tight text-white"
                      >
                        즐겨찾기에서 제거
                      </span>
                    </div>
                  </div>
                </>
              ))}
            </>
          )}
        </>
      )}

      {/* <div
        style={{
          background: "#ffffff",
          borderRadius: "4px",
        }}
        className="flex items-center justify-between mx-2px rounded-lg h-33px mb-1px"
      >
        <div className="flex items-center">
          <img className="ml-6px" src={img1} alt="img" />
          <p
            style={{ color: "#444444", marginBottom: "2px" }}
            className="text-12px ml-5px"
          >
            메이저리그 (MLB)
          </p>
        </div>
        <div>
          <img className="mr-6px" src={iconStar} alt="img" />
        </div>
      </div> */}
    </>
  );
};

export default AccordionContent;
