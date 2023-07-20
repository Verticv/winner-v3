import React, { useState } from "react";
import icon from "../../../images/nonLivePage/EntireAccordion/Icon.png";
import Up from "../../../images/nonLivePage/EntireAccordion/Up.png";
import Dn from "../../../images/nonLivePage/EntireAccordion/Dn.png";

const EntireAccordionContent2 = () => {
  const [leftActive, setLeftActive] = useState(false);
  const [leftActive1, setLeftActive1] = useState(false);
  const [rightActive, setRightActive] = useState(false);
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
            width: "307px",
            background: leftActive
              ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))"
              : "#ffffff",
            color: leftActive ? "#eeeeee" : "#444444",
          }}
          className="flex items-center justify-between border-r ml-9px  h-30px"
          onClick={() => setLeftActive((prev) => !prev)}
        >
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "-0.031em",
            }}
            className="font-malgun mb-2px"
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
            width: "307px",
            background: leftActive1
              ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))"
              : "#ffffff",
            color: leftActive1 ? "#eeeeee" : "#444444",
          }}
          className="flex items-center justify-between border-r ml-9px h-30px"
          onClick={() => setLeftActive1((prev) => !prev)}
        >
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "-0.031em",
            }}
            className="font-malgun mb-2px"
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
          style={{ borderColor: "#bbbbbb", width: "314px" }}
          className="flex items-center justify-between"
        >
          <p
            style={{
              fontSize: "12px",
              color: "#444444",
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
              color: "#0072bc",
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
          style={{ borderColor: "#bbbbbb", width: "307px" }}
          className="flex items-center justify-between border-r ml-9px h-30px"
        >
          <p
            style={{
              fontSize: "12px",
              color: "#444444",
              letterSpacing: "-0.031em",
            }}
            className="font-malgun mb-2px"
          >
            (-0.75)
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "#682aa7",
              letterSpacing: "-0.031em",
            }}
            className="mr-9px mb-2px font-malgun"
          >
            1.67
          </p>
        </div>
        <div
          style={{ borderColor: "#bbbbbb", width: "314px" }}
          className="flex items-center justify-between"
        >
          <p
            style={{
              fontSize: "12px",
              color: "#444444",
              letterSpacing: "-0.031em",
            }}
            className="font-malgun mb-2px ml-9px"
          >
            (+0.75)
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "#682aa7",
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
          style={{ borderColor: "#bbbbbb", width: "307px" }}
          className="flex items-center justify-between border-r ml-9px h-30px"
        >
          <p
            style={{
              fontSize: "12px",
              color: "#444444",
              letterSpacing: "-0.031em",
            }}
            className="font-malgun mb-2px"
          >
            (-0.25)
          </p>
          <img className="mr-10px mt-px object-none" src={icon} alt="img" />
        </div>
        <div
          style={{ borderColor: "#bbbbbb", width: "314px" }}
          className="flex items-center justify-between"
        >
          <p
            style={{
              fontSize: "12px",
              color: "#444444",
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
