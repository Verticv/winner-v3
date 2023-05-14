import React from "react";

// .Rounded_Rectangle {
//   border-radius: 9px;
//   background-color: rgb(240, 66, 129);
//   position: absolute;
//   left: 1479px;
//   top: 51px;
//   width: 20px;
//   height: 19px;
//   z-index: 752;
// }

// .Rounded_Rectangle {
//   border-radius: 9px;
//   background-color: rgb(240, 66, 129);
//   position: absolute;
//   left: 1394px;
//   top: 51px;
//   width: 30px;
//   height: 19px;
//   z-index: 745;
// }

const LinkButton = ({ buttonText, ButtonIcon, count, isAuthenticated }) => {
  const myMenuButton = (
    <div
      style={{
        color: "#2d2834",
        height: "81px",
        marginTop: "-3px",
      }}
      className={`w-80px flex-shrink-0 text-r2d2834 hover:text-white relative flex flex-col items-center justify-center cursor-pointer`}
    >
      <div className="relative flex justify-center w-48px h-48px -mt-px">
        {isAuthenticated && (
          <div
            className="absolute flex items-center justify-center px-8px h-19px top-0 -right-8px text-white font-roboto tracking-tight text-12px bg-rf04281 rounded-9px"
            // style={{
            //   padding: '0 8.5px',
            // }}
            style={{ minWidth: "20px" }}
          >
            <p className="flex items-center justify-center text-white font-roboto tracking-tight text-12px">{count}</p>
          </div>
        )}

        <img className="object-none" src={ButtonIcon} alt="my menu" />
      </div>
      {/* <span
        style={{ marginBottom: "0px", color: "#5e399a" }}
        className="cursor-pointer font-spoqaMedium text-14px tracking-tight -mt-4px"
      >
        {buttonText}
      </span>

      <div className="flex justify-center w-48px h-48px -mt-2px">
        <img className="object-none" src={ButtonIcon} alt="my menu" />
      </div> */}
      <span
        style={{ marginBottom: "0px", color: "#5e399a" }}
        className="cursor-pointer font-spoqaMedium text-14px tracking-tight -mt-2px"
      >
        {buttonText}
      </span>
    </div>
  );

  return (
    <>
      <div style={{ height: "82px" }} className="relative flex justify-between flex-row flex-shrink-0">
        <div className="flex items-center flex-shrink-0">{myMenuButton}</div>
      </div>
    </>
  );
};

export default LinkButton;
