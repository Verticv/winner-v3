import React, { useEffect, useState } from "react";
import AccordionContent from "./AccordionContent";
import Arrow from "../../../images/nonLivePage/CenterAccordion/Arrow2.png";
import { useSelector } from "react-redux";

const AccordionButton = ({ icon, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const favoritePreMatch = useSelector(
    (state) => state?.nonLive?.favoritePreMatch
  );
  const favoriteLaLiga = useSelector((state) => state?.nonLive?.favoriteLaLiga);
  const bundesliga = useSelector((state) => state?.nonLive?.bundesliga);
  const League = useSelector((state) => state?.nonLive?.League);

  useEffect(() => {
    if (
      favoritePreMatch[0]?.id ||
      favoriteLaLiga[0]?.id ||
      bundesliga[0]?.id ||
      League[0]?.id
    ) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [favoritePreMatch, favoriteLaLiga, bundesliga, League]);

  const state = useSelector((state) => state);
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
          borderRadius: "5px",
          borderBottomRightRadius: `${isOpen ? "0px" : "5px"}`,
          borderBottomLeftRadius: `${isOpen ? "0px" : "5px"}`,
        }}
        className={`flex items-center justify-between 
          cursor-pointer h-43px`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center">
          <img
            className="-ml-3px mt-11px mb-16px object-none"
            src={icon}
            alt="icon"
            style={{
              marginTop: "1px",
              marginBottom: "8px",
            }}
          />
          <p
            style={{
              letterSpacing: "-0.031em",
              fontFamily: "MalgunGothicRegular",
            }}
            className="text-14px text-white ml-5px mt-12px mb-15px font-malgun "
          >
            {title}
          </p>
        </div>
        <div className="flex items-center">
          <div
            style={{ background: "#5423a0", borderRadius: "4px" }}
            className="flex items-center justify-center w-18px h-19px rounded-lg mt-11px mb-12px"
          >
            <p
              className="text-13px text-white font-malgun"
              style={{ fontFamily: "MalgunGothicRegular" }}
            >
              5
            </p>
          </div>
          <img
            src={Arrow}
            alt=""
            className={`object-none text-white mr-10px ml-9px mt-17px mb-18px ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </div>
      </div>
      {isOpen && (
        <div
          style={{ background: "#420572" }}
          className="pt-2px rounded-b-lg pb-2px"
        >
          <div>
            <AccordionContent setIsOpen={setIsOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionButton;
