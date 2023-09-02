import React, { useEffect, useState } from "react";
import AccordionContent from "./AccordionContent";
import Arrow from "../../../images/nonLivePage/CenterAccordion/Arrow2.png";
import { useSelector } from "react-redux";

const AccordionButton = ({ icon, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const favoritePreMatch = useSelector((state) => state?.nonLive?.favoritePreMatch);
  const favoriteLaLiga = useSelector((state) => state?.nonLive?.favoriteLaLiga);
  const bundesliga = useSelector((state) => state?.nonLive?.bundesliga);
  const League = useSelector((state) => state?.nonLive?.League);

  useEffect(() => {
    if (favoritePreMatch[0]?.id || favoriteLaLiga[0]?.id || bundesliga[0]?.id || League[0]?.id) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [favoritePreMatch, favoriteLaLiga, bundesliga, League]);

  // const state = useSelector((state) => state);
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
          height: "44px",
          borderRadius: "5px",
          borderBottomRightRadius: `${
            isOpen && (favoritePreMatch[0]?.id || favoriteLaLiga[0]?.id || bundesliga[0]?.id || League[0]?.id)
              ? "0px"
              : "5px"
          }`,
          borderBottomLeftRadius: `${
            isOpen && (favoritePreMatch[0]?.id || favoriteLaLiga[0]?.id || bundesliga[0]?.id || League[0]?.id)
              ? "0px"
              : "5px"
          }`,
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
            }}
            className="text-14px text-white ml-5px mt-13px mb-16px font-bold"
          >
            {title}
          </p>
        </div>
        <div className="flex items-center">
          <div
            style={{ background: "#5423a0", borderRadius: "4px" }}
            className="flex items-center justify-center h-19px rounded-lg mt-11px mb-12px px-5px"
          >
            <p className="text-13px text-white pb-px">5</p>
          </div>
          <img
            src={Arrow}
            alt=""
            className={`object-none text-white mr-10px ml-9px mt-17px mb-18px ${isOpen ? "transform rotate-180" : ""}`}
          />
        </div>
      </div>
      {isOpen && (favoritePreMatch[0]?.id || favoriteLaLiga[0]?.id || bundesliga[0]?.id || League[0]?.id) && (
        <div style={{ background: "#420572", borderBottomLeftRadius:'6px', borderBottomRightRadius: '6px', paddingBottom:'0.1px' }} className="pt-2px rounded-b-lg">
          <AccordionContent setIsOpen={setIsOpen} />
        </div>
      )}
    </div>
  );
};

export default AccordionButton;
