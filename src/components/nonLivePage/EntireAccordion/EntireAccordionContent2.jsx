import React, { useState } from "react";
import icon from "../../../images/nonLivePage/EntireAccordion/Icon.png";
import Up from "../../../images/nonLivePage/EntireAccordion/Up.png";
import Dn from "../../../images/nonLivePage/EntireAccordion/Dn.png";

const EntireAccordionContent2 = () => {
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
    color: "#eeeeee",
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
          borderColor: "#bbbbbb",
          width: "630px",
        }}
        className="flex items-center h-31px border-t"
      >
        <div
          style={{
            borderColor: "#bbbbbb",
            width: "316px",
            background: leftActive
              ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))"
              : "#ffffff",
            color: leftActive ? "#eeeeee" : "#444444",
            ...(isHovered ? hoverStyle : null),
          }}
          className="flex items-center justify-between border-r h-30px cursor-pointer"
          onClick={() => setLeftActive((prev) => !prev)}
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
            (-1.75)
          </p>
          <img
            style={{ marginLeft: "225px" }}
            src={Up}
            alt="icon"
            className="mb-px"
          />
          <p
            style={{
              fontSize: "12px",
              color: leftActive || isHovered ? "#eeeeee" : "#f04281",
              letterSpacing: "-0.031em",
            }}
            className="mr-9px mb-2px font-malgun"
          >
            32.75
          </p>
        </div>
        <div
          style={{
            borderColor: "#bbbbbb",
            width: "314px",
            height: "100%",
            background: rightActive
              ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))"
              : "#ffffff",
            color: rightActive ? "#eeeeee" : "#444444",
            ...(isHovered1 ? hoverStyle : null),
          }}
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setRightActive((prev) => !prev)}
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
            (+1.75)
          </p>
          <img
            style={{ marginLeft: "220px" }}
            src={Dn}
            alt="icon"
            className="mb-px"
          />
          <p
            style={{
              fontSize: "12px",
              color: rightActive || isHovered1 ? "#eeeeee" : "#0072bc",
              letterSpacing: "-0.031em",
            }}
            className="font-malgun mb-2px mr-9px"
          >
            31.45
          </p>
        </div>
      </div>

      <div
        style={{
          background: "#ffffff",
          borderColor: "#bbbbbb",
          width: "630px",
        }}
        className="flex items-center h-31px border-t"
      >
        <div
          style={{
            borderColor: "#bbbbbb",
            width: "316px",
            background: leftActive1
              ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))"
              : "#ffffff",
            color: leftActive1 ? "#eeeeee" : "#444444",
            ...(isHovered2 ? hoverStyle : null),
          }}
          className="flex items-center justify-between border-r h-30px cursor-pointer"
          onClick={() => setLeftActive1((prev) => !prev)}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "-0.031em",
            }}
            className="font-malgun mb-2px ml-9px"
          >
            (-1.25)
          </p>
          <img
            style={{ marginLeft: "218px" }}
            src={Up}
            alt="icon"
            className="mb-px"
          />
          <p
            style={{
              fontSize: "12px",
              color: leftActive1 || isHovered2 ? "#eeeeee" : "#f04281",
              letterSpacing: "-0.031em",
            }}
            className="mr-9px mb-2px font-malgun "
          >
            2.09
          </p>
        </div>
        <div
          style={{
            borderColor: "#bbbbbb",
            width: "314px",
            height: "100%",
            background: rightActive1
              ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))"
              : "#ffffff",
            color: rightActive1 ? "#eeeeee" : "#444444",
            ...(isHovered3 ? hoverStyle : null),
          }}
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setRightActive1((prev) => !prev)}
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
            (+1.25)
          </p>
          <img
            style={{ marginLeft: "214px" }}
            src={Dn}
            alt="icon"
            className="mb-px"
          />
          <p
            style={{
              fontSize: "12px",
              color: rightActive1 || isHovered3 ? "#eeeeee" : "#0072bc",
              letterSpacing: "-0.031em",
            }}
            className="font-malgun mb-2px mr-9px"
          >
            1.75
          </p>
        </div>
      </div>

      <div
        style={{
          background: "#ffffff",
          borderColor: "#bbbbbb",
          width: "630px",
        }}
        className="flex items-center h-31px border-t"
      >
        <div
          style={{
            borderColor: "#bbbbbb",
            width: "316px",
            background: leftActive2
              ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))"
              : "#ffffff",
            color: leftActive2 ? "#eeeeee" : "#444444",
            ...(isHovered4 ? hoverStyle : null),
          }}
          className="flex items-center justify-between border-r h-30px cursor-pointer"
          onClick={() => setLeftActive2((prev) => !prev)}
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
            (-0.75)
          </p>
          <p
            style={{
              fontSize: "12px",
              color: leftActive2 || isHovered4 ? "#eeeeee" : "#682aa7",
              letterSpacing: "-0.031em",
            }}
            className="mr-9px mb-2px font-malgun"
          >
            1.67
          </p>
        </div>
        <div
          style={{
            borderColor: "#bbbbbb",
            width: "314px",
            height: "100%",
            background: rightActive2
              ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))"
              : "#ffffff",
            color: rightActive2 ? "#eeeeee" : "#444444",
            ...(isHovered5 ? hoverStyle : null),
          }}
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setRightActive2((prev) => !prev)}
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
            (+0.75)
          </p>
          <p
            style={{
              fontSize: "12px",
              color: rightActive2 || isHovered5 ? "#eeeeee" : "#682aa7",
              letterSpacing: "-0.031em",
            }}
            className="font-malgun mb-2px mr-9px"
          >
            2.20
          </p>
        </div>
      </div>

      <div
        style={{
          background: "#ffffff",
          borderColor: "#bbbbbb",
          width: "630px",
          borderBottomLeftRadius: "4px",
          borderBottomRightRadius: "4px",
        }}
        className="flex items-center h-31px border-t "
      >
        <div
          style={{
            borderColor: "#bbbbbb",
            width: "316px",
            background: leftActive3
              ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))"
              : "#ffffff",
            color: leftActive3 ? "#eeeeee" : "#444444",
            ...(isHovered6 ? hoverStyle : null),
            borderBottomLeftRadius: "4px",
          }}
          className="flex items-center justify-between border-r h-30px cursor-pointer"
          onClick={() => setLeftActive3((prev) => !prev)}
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
            (-0.25)
          </p>
          <img className="mr-10px mt-px object-none" src={icon} alt="img" />
        </div>
        <div
          style={{
            borderColor: "#bbbbbb",
            width: "314px",
            height: "100%",
            background: rightActive3
              ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))"
              : "#ffffff",
            color: rightActive3 ? "#eeeeee" : "#444444",
            ...(isHovered7 ? hoverStyle : null),
            borderBottomRightRadius: "4px",
          }}
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setRightActive3((prev) => !prev)}
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
            (+0.25)
          </p>
          <img className="mr-10px mt-px object-none" src={icon} alt="img" />
        </div>
      </div>
    </>
  );
};

export default EntireAccordionContent2;
