import React, { useState } from "react";
import icon from "../../../images/nonLivePage/EntireAccordion/Icon.png";
import Up from "../../../images/nonLivePage/EntireAccordion/Up.png";
import Dn from "../../../images/nonLivePage/EntireAccordion/Dn.png";
import { setBetSlipData } from "reducers/nonLive-reducer";
import { useDispatch } from "react-redux";
import "./style.css";

const EntireAccordionContent2 = ({ card }) => {
  const dispatch = useDispatch();
  const [leftActive, setLeftActive] = useState(false);
  const [leftActive1, setLeftActive1] = useState(false);
  const [rightActive, setRightActive] = useState(false);
  const [rightActive1, setRightActive1] = useState(false);
  const [leftActive2, setLeftActive2] = useState(false);
  const [rightActive2, setRightActive2] = useState(false);
  const [leftActive3, setLeftActive3] = useState(false);
  const [rightActive3, setRightActive3] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);

  const hoverStyle = {
    background: "linear-gradient(to top, #5423a0, #9d3bbb)",
    color: "#fff",
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };
  const handleMouseEnter4 = () => {
    setIsHovered4(true);
  };

  const handleMouseLeave4 = () => {
    setIsHovered4(false);
  };

  const handleMouseEnter5 = () => {
    setIsHovered5(true);
  };

  const handleMouseLeave5 = () => {
    setIsHovered5(false);
  };

  const handleMouseEnter6 = () => {
    setIsHovered6(true);
  };

  const handleMouseLeave6 = () => {
    setIsHovered6(false);
  };

  const handleMouseEnter7 = () => {
    setIsHovered7(true);
  };

  const handleMouseLeave7 = () => {
    setIsHovered7(false);
  };
  return (
    <>
      <div
        style={{
          background: "#ffffff",
          borderColor: "#cccccc",
          width: "630px",
        }}
        className="flex items-center h-31px border-t"
      >
        <div
          style={{
            borderColor: leftActive ? "#6227a5" : "#cccccc",
            width: "316px",
            background: leftActive ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))" : "#ffffff",
            color: leftActive ? "#fff" : "#444444",
            ...(isHovered ? hoverStyle : null),
          }}
          className="flex items-center justify-between border-r h-30px cursor-pointer"
          onClick={() => {
            dispatch(
              setBetSlipData({
                data: card,
              })
            );
            setLeftActive((prev) => !prev);
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "-0.031em",
            }}
            className="font-malgun mb-2px ml-9px"
          >
            {card.team1}
          </p>
          <div className="flex items-center">
            <img src={Up} alt="icon" className="blink_style1 mb-px mr-2px object-none" />
            <p
              style={{
                fontSize: "12px",
                color: leftActive || isHovered ? "#fff" : "#f04281",
                letterSpacing: "-0.031em",
                width: "28px",
              }}
              className="mr-9px mb-2px text-right font-semibold"
            >
              {card.score1}
            </p>
          </div>
        </div>
        <div
          style={{
            borderColor: rightActive ? "#6227a5" : "#cccccc",
            width: "314px",
            height: "100%",
            background: rightActive ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))" : "#ffffff",
            color: rightActive ? "#fff" : "#444444",
            ...(isHovered1 ? hoverStyle : null),
          }}
          className="flex items-center justify-between cursor-pointer"
          onClick={() => {
            dispatch(
              setBetSlipData({
                data: card,
              })
            );
            setRightActive((prev) => !prev);
          }}
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        >
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "-0.031em",
            }}
            className="font-malgun mb-2px ml-9px"
          >
            {card.team2}
          </p>
          <div className="flex items-center">
            <img src={Dn} alt="icon" className="blink_style1 mb-px mr-2px" />
            <p
              style={{
                fontSize: "12px",
                color: rightActive || isHovered1 ? "#fff" : "#0072bc",
                letterSpacing: "-0.031em",
                width: "28px",
              }}
              className="font-malgun mb-2px mr-9px text-right font-semibold"
            >
              {card.score3}
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          background: "#ffffff",
          borderColor: "#cccccc",
          width: "630px",
        }}
        className="flex items-center h-31px border-t"
      >
        <div
          style={{
            borderColor: leftActive1 ? "#6227a5" : "#cccccc",
            width: "316px",
            background: leftActive1 ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))" : "#ffffff",
            color: leftActive1 ? "#fff" : "#444444",
            ...(isHovered2 ? hoverStyle : null),
          }}
          className="flex items-center justify-between border-r h-30px cursor-pointer"
          onClick={() => {
            dispatch(
              setBetSlipData({
                data: card,
              })
            );
            setLeftActive1((prev) => !prev);
          }}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "-0.031em",
            }}
            className="mb-2px ml-9px"
          >
            {card.team3}
          </p>
          <div className="flex items-center">
            <img src={Up} alt="icon" className="blink_style1 mb-px mr-2px" />
            <p
              style={{
                fontSize: "12px",
                color: leftActive1 || isHovered2 ? "#fff" : "#f04281",
                letterSpacing: "-0.031em",
                width: "28px",
              }}
              className="mr-9px mb-2px text-right font-semibold"
            >
              {card.score2}
            </p>
          </div>
        </div>
        <div
          style={{
            borderColor: rightActive1 ? "#6227a5" : "#cccccc",
            width: "314px",
            height: "100%",
            background: rightActive1 ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))" : "#ffffff",
            color: rightActive1 ? "#fff" : "#444444",
            ...(isHovered3 ? hoverStyle : null),
          }}
          className="flex items-center justify-between cursor-pointer"
          onClick={() => {
            dispatch(
              setBetSlipData({
                data: card,
              })
            );
            setRightActive1((prev) => !prev);
          }}
          onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3}
        >
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "-0.031em",
            }}
            className="font-malgun mb-2px ml-9px"
          >
            {card.team4}
          </p>
          <div className="flex items-center">
            <img style={{ marginLeft: "214px" }} src={Dn} alt="icon" className="blink_style1 mb-px mr-2px" />
            <p
              style={{
                fontSize: "12px",
                color: rightActive1 || isHovered3 ? "#fff" : "#0072bc",
                letterSpacing: "-0.031em",
                width: "28px",
              }}
              className="text-right mb-2px mr-9px font-semibold"
            >
              {card.score4}
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          background: "#ffffff",
          borderColor: "#cccccc",
          width: "630px",
        }}
        className="flex items-center h-31px border-t"
      >
        <div
          style={{
            borderColor: leftActive2 ? "#6227a5" : "#cccccc",
            width: "316px",
            background: leftActive2 ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))" : "#ffffff",
            color: leftActive2 ? "#fff" : "#444444",
            ...(isHovered4 ? hoverStyle : null),
          }}
          className="flex items-center justify-between border-r h-30px cursor-pointer"
          onClick={() => {
            dispatch(
              setBetSlipData({
                data: card,
              })
            );
            setLeftActive2((prev) => !prev);
          }}
          onMouseEnter={handleMouseEnter4}
          onMouseLeave={handleMouseLeave4}
        >
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "-0.031em",
            }}
            className="font-malgun mb-2px ml-9px"
          >
            {card.team5}
          </p>
          <p
            style={{
              fontSize: "12px",
              color: leftActive2 || isHovered4 ? "#fff" : "#111111",
              letterSpacing: "-0.031em",
            }}
            className="mr-9px mb-2px font-malgun font-semibold"
          >
            {card.score5}
          </p>
        </div>
        <div
          style={{
            borderColor: rightActive2 ? "#6227a5" : "#cccccc",
            width: "314px",
            height: "100%",
            background: rightActive2 ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))" : "#ffffff",
            color: rightActive2 ? "#fff" : "#444444",
            ...(isHovered5 ? hoverStyle : null),
          }}
          className="flex items-center justify-between cursor-pointer"
          onClick={() => {
            dispatch(
              setBetSlipData({
                data: card,
              })
            );
            setRightActive2((prev) => !prev);
          }}
          onMouseEnter={handleMouseEnter5}
          onMouseLeave={handleMouseLeave5}
        >
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "-0.031em",
            }}
            className="font-malgun mb-2px ml-9px"
          >
            {card.team6}
          </p>
          <p
            style={{
              fontSize: "12px",
              color: rightActive2 || isHovered5 ? "#fff" : "#111111",
              letterSpacing: "-0.031em",
            }}
            className="font-malgun mb-2px mr-9px font-semibold"
          >
            {card.score6}
          </p>
        </div>
      </div>

      <div
        style={{
          background: "#ffffff",
          borderColor: "#cccccc",
          width: "630px",
          borderBottomLeftRadius: "4px",
          borderBottomRightRadius: "4px",
        }}
        className="flex items-center h-31px border-t "
      >
        <div
          style={{
            borderColor: leftActive3 ? "#6227a5" : "#cccccc",
            width: "316px",
            background: leftActive3 ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))" : "#ffffff",
            color: leftActive3 ? "#fff" : "#444444",
            ...(isHovered6 ? hoverStyle : null),
            borderBottomLeftRadius: "3px",
          }}
          className="flex items-center justify-between border-r h-30px cursor-pointer"
          onClick={() => {
            dispatch(
              setBetSlipData({
                data: card,
              })
            );
            setLeftActive3((prev) => !prev);
          }}
          onMouseEnter={handleMouseEnter6}
          onMouseLeave={handleMouseLeave6}
        >
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "-0.031em",
            }}
            className="font-malgun mb-2px  ml-9px"
          >
            {card.team7}
          </p>
          <img className="mr-10px mt-px object-none" src={icon} alt="img" />
        </div>
        <div
          style={{
            borderColor: rightActive3 ? "#6227a5" : "#cccccc",
            width: "314px",
            height: "100%",
            background: rightActive3 ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))" : "#ffffff",
            color: rightActive3 ? "#fff" : "#444444",
            ...(isHovered7 ? hoverStyle : null),
            borderBottomRightRadius: "3px",
          }}
          className="flex items-center justify-between cursor-pointer"
          onClick={() => {
            dispatch(
              setBetSlipData({
                data: card,
              })
            );
            setRightActive3((prev) => !prev);
          }}
          onMouseEnter={handleMouseEnter7}
          onMouseLeave={handleMouseLeave7}
        >
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "-0.031em",
            }}
            className="font-malgun mb-2px ml-9px"
          >
            {card.team8}
          </p>
          <img className="mr-10px mt-px object-none" src={icon} alt="img" />
        </div>
      </div>
    </>
  );
};

export default EntireAccordionContent2;
