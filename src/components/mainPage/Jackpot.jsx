import React from "react";
import JackpotImage from "../../images/jackpot.png";
import JackpotGif from "../../images/jackpot.gif";

export default function Jackpot() {
  return (
    <div
      style={{
        width: "313px",
        height: "133px",
      }}
      className="mb-5px relative"
    >
      <img
        style={{ minWidth: "349px", height: "202px" }}
        src={JackpotImage}
        alt="jackpot"
        className="absolute -top-40px -left-18px"
      />
      <img
        style={{ minWidth: "349px", height: "202px", top:'-34px', left:'-17.5px' }}
        src={JackpotGif}
        alt="jackpot"
        className="absolute object-none"
      />
      <div
        style={{ width: "239px", height: "44px" }}
        className="absolute top-54px left-37px flex items-center justify-center rounded-10px"
      >
        <p
          style={{ lineHeight: "18px", color: "#fff568", textShadow: "#000000 1px 1px 4px" }}
          className="text-30px font-bold tracking-normal -mt-3px"
        >
          1,234,567,890
        </p>
      </div>
      {/* // TODO: add the number inside the image */}
    </div>
  );
}
