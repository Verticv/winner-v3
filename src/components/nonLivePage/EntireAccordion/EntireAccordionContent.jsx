import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setBetSlipData } from "reducers/nonLive-reducer";

const EntireAccordionContent = ({ card }) => {
  const dispatch = useDispatch();
  const [leftActive, setLeftActive] = useState(false);
  const [centerActive, setCenterActive] = useState(false);
  const [rightActive, setRightActive] = useState(false);


  
  return (
    <div
      style={{
        background: "#ffffff",
        width: "630px",
        borderBottomLeftRadius: "4px",
        borderBottomRightRadius: "4px",
      }}
      className="flex items-center h-30px"
    >
      <div
        style={{
          // borderColor: "#cccccc",
          borderColor: leftActive ? "#6227a5" : "#cccccc",
          width: "211px",
          background: leftActive ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))" : "#ffffff",
          color: leftActive ? "#fff" : "#444444",
          borderBottomLeftRadius: "3px",
        }}
        className="flex items-center justify-between border-r  h-30px cursor-pointer hover-style can-hover"
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
            fontSize: "12px",
            letterSpacing: "-0.031em",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          className="font-malgun ml-8px"
        >
          {card.team1}
        </p>
        <p
          style={{
            fontSize: "12px",
            color: leftActive  ? "#fff" : "#111111",
            letterSpacing: "-0.031em",
          }}
          className="text-12 mr-9px font-malgun font-semibold"
        >
          {card.score1}
        </p>
      </div>
      <div
        style={{
          borderColor: centerActive ? "#6227a5" : "#cccccc",
          width: "210px",
          background: centerActive ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))" : "#ffffff",
          color: centerActive ? "#fff" : "#444444",
        }}
        className="flex items-center justify-between border-r h-30px cursor-pointer hover-style can-hover"
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
            fontSize: "12px",
            letterSpacing: "-0.031em",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          className="ml-10px -mt-2px font-malgun"
        >
          {card.team3}
        </p>
        <p
          style={{
            fontSize: "12px",
            color: centerActive  ? "#fff" : "#111111",
            letterSpacing: "-0.031em",
          }}
          className="text-12  mr-9px font-malgun font-semibold"
        >
          {card.score2}
        </p>
      </div>
      <div
        style={{
          width: "209px",
          height: "100%",
          background: rightActive ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))" : "#ffffff",
          color: rightActive ? "#fff" : "#444444",
          borderBottomRightRadius: "3px",
        }}
        className="flex items-center justify-between cursor-pointer hover-style can-hover"
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
            fontSize: "12px",
            letterSpacing: "-0.031em",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          className="ml-8px font-malgun "
        >
          {card.team2}
        </p>
        <p
          style={{
            fontSize: "12px",
            color: rightActive  ? "#fff" : "#111111",
            letterSpacing: "-0.031em",
          }}
          className="text-12 mr-9px font-malgun font-semibold"
        >
          {card.score3}
        </p>
      </div>
    </div>
  );
};

export default EntireAccordionContent;
