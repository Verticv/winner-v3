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
          }}
          className="flex items-center justify-between border-r h-30px"
          onClick={() => setLeftActive((prev) => !prev)}
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
              color: leftActive ? "#eeeeee" : "#f04281",
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
          }}
          className="flex items-center justify-between"
          onClick={() => setRightActive((prev) => !prev)}
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
              color: rightActive ? "#eeeeee" : "#0072bc",
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
          }}
          className="flex items-center justify-between border-r h-30px"
          onClick={() => setLeftActive1((prev) => !prev)}
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
              color: leftActive1 ? "#eeeeee" : "#f04281",
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
          }}
          className="flex items-center justify-between"
          onClick={() => setRightActive1((prev) => !prev)}
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
              color: rightActive1 ? "#eeeeee" : "#0072bc",
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
          }}
          className="flex items-center justify-between border-r h-30px"
          onClick={() => setLeftActive2((prev) => !prev)}
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
              color: leftActive2 ? "#eeeeee" : "#682aa7",
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
          }}
          className="flex items-center justify-between"
          onClick={() => setRightActive2((prev) => !prev)}
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
              color: rightActive2 ? "#eeeeee" : "#682aa7",
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
            borderBottomLeftRadius: "4px",
          }}
          className="flex items-center justify-between border-r h-30px"
          onClick={() => setLeftActive3((prev) => !prev)}
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
            borderBottomRightRadius: "4px",
          }}
          className="flex items-center justify-between"
          onClick={() => setRightActive3((prev) => !prev)}
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
