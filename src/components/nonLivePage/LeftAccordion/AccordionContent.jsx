import React, { useEffect, useState } from "react";
import iconStar from "../../../images/nonLivePage/LeftAccordion/Card/star.png";
import img1 from "../../../images/nonLivePage/LeftAccordion/content1/1.png";
import icon from "../../../images/nonLivePage/LeftAccordion/content/Icon.png";
import AccordionCard from "./AccordionCard";
import Arrow from "../../../images/nonLivePage/LeftAccordion/Card/Arrow.png";
// import AccordionCard1 from "./AccordionCard1";
// import AccordionCard2 from "./AccordionCard2";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteAllFavoriteCards,
  deleteFavoriteLeagueById,
} from "reducers/nonLive-reducer";

const AccordionContent = () => {
  const [showCard, setShowCard] = useState(true);
  const [showCard1, setShowCard1] = useState(true);
  const [showCard2, setShowCard2] = useState(true);
  const [isDeleted, setIsDeleted] = useState(true);
  const dispatch = useDispatch();

  const favoritePreMatch = useSelector(
    (state) => state?.nonLive?.favoritePreMatch
  );
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
    if (
      bundesliga[0]?.items?.length !== 0 ||
      favoriteLaLiga[0]?.items?.length !== 0 ||
      favoritePreMatch[0]?.items?.length !== 0
    ) {
      setIsDeleted(false);
    }
  }, [favoritePreMatch, favoriteLaLiga, bundesliga]);

  useEffect(() => {
    setShowCard(true);
  }, [favoritePreMatch]);

  useEffect(() => {
    setShowCard1(true);
  }, [favoriteLaLiga]);

  useEffect(() => {
    console.log(
      "bundesliga[0]?.items?.length !== 0",
      bundesliga[0]?.items?.length !== 0,
      favoriteLaLiga[0]?.items?.length !== 0,
      favoritePreMatch[0]?.items?.length !== 0,
      " result =>",
      bundesliga[0]?.items?.length !== 0 ||
        favoriteLaLiga[0]?.items?.length !== 0 ||
        favoritePreMatch[0]?.items?.length !== 0
    );
    setShowCard2(true);
  }, [bundesliga]);
  return (
    <>
      {/* // <div className="ml-3px mb-2px mr-3px pt-2px"> */}
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
          }}
        >
          <p
            className="mb-3px text-13px text-white tracking-tight"
            style={{ fontFamily: "MalgunGothicBold" }}
          >
            모두지우기
          </p>
        </div>
      </div>
      <div className="ml-7px mt-3px mb-6px">
        <p
          style={{
            letterSpacing: "-0.031em",
            fontFamily: "MalgunGothicRegular",
          }}
          className="text-10px text-white"
        >
          프리매치경기
        </p>
      </div>
      {!isDeleted && (
        <>
          <div
            style={{
              background: "#ffffff",
              borderRadius: "4px",
            }}
            className="flex items-center mx-2px h-35px mb-2px"
          >
            <img className="ml-6px mt-7px mb-6px" src={icon} alt="img" />
            <p
              style={{
                color: "#444444",
                letterSpacing: "-0.031em",
                fontFamily: "MalgunGothicRegular",
              }}
              className="text-12px mt-10px mb-13px ml-5px"
            >
              프리미어리그
            </p>
            <img
              src={Arrow}
              alt=""
              onClick={() => {
                setShowCard((prev) => !prev);
              }}
              style={{ color: "#444444" }}
              className={`object-none ml-150px cursor-pointer ${
                showCard ? "transform rotate-180" : ""
              }`}
            />
          </div>
          {showCard && favoritePreMatch[0]?.items?.length !== 0 && (
            <>
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
              <div>{/* <AccordionCard2 /> */}</div>
            </>
          )}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "4px",
            }}
            className="flex items-center mx-2px rounded-lg h-35px mb-2px"
          >
            <img className="ml-6px" src={icon} alt="img" />
            <p style={{ color: "#444444" }} className="text-12px ml-5px">
              라리가
            </p>
            <img
              src={Arrow}
              alt=""
              onClick={() => setShowCard1((prev) => !prev)}
              style={{ color: "#444444" }}
              className={`object-none ml-184px cursor-pointer ${
                showCard1 ? "transform rotate-180" : ""
              }`}
            />
          </div>
        </>
      )}

      {/* </div> */}
      {!isDeleted && <></>}
      {showCard1 && favoriteLaLiga[0]?.items?.length !== 0 && (
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
      {bundesliga[0]?.items?.length !== 0 && (
        <>
          <div
            style={{
              background: "#ffffff",
              borderRadius: "4px",
            }}
            className="flex items-center mx-2px h-35px mb-2px"
          >
            <img className="ml-6px mt-7px mb-6px" src={icon} alt="img" />
            <p
              style={{
                color: "#444444",
                letterSpacing: "-0.031em",
                fontFamily: "MalgunGothicRegular",
              }}
              className="text-12px mt-10px mb-13px ml-5px"
            >
              분데스리가
            </p>
            <img
              src={Arrow}
              alt=""
              onClick={() => setShowCard2((prev) => !prev)}
              style={{ color: "#444444" }}
              className={`object-none ml-162px cursor-pointer ${
                showCard2 ? "transform rotate-180" : ""
              }`}
            />
          </div>
          {showCard2 && bundesliga[0]?.items?.length !== 0 && (
            <>
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
            </>
          )}
        </>
      )}
      <div className="ml-7px mt-5px mb-4px">
        <p className="text-10px text-white">리그</p>
      </div>
      {League.length !== 0 &&
        League?.map((el) => (
          <div
            style={{
              background: "#ffffff",
              borderRadius: "4px",
            }}
            className="flex items-center justify-between mx-2px rounded-lg h-33px mb-2px"
          >
            <div className="flex items-center">
              <img className="ml-6px" src={icon} alt="img" />
              <p
                style={{ color: "#444444", marginBottom: "2px" }}
                className="text-12px ml-5px"
              >
                {el.title}
              </p>
            </div>
            <div>
              <img
                className="mr-6px"
                src={iconStar}
                alt="img"
                onClick={() => {
                  console.log("action.payload.id-el", el.id);
                  deleteFromFavorite({
                    id: el.id,
                  });
                }}
              />
            </div>
          </div>
        ))}
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
