import React, { useState } from "react";
import LeftIcon from "../../images/myPage/betHistory/left.png";
import RightIcon from "../../images/myPage/betHistory/right.png";
import DoubleLeftIcon from "../../images/myPage/betHistory/double_left.png";
import DoubleRightIcon from "../../images/myPage/betHistory/double_right.png";
import "./Pagination.css";

const Pagination = ({ page, setPage }) => {
  const path = window.location.pathname;
  const LeftArrow = () => (
    <button
      style={{ filter: path.includes("/freeboard/compose") && "brightness(1) invert(0.7)" }}
      className="flex items-center justify-center w-32px h-32px rounded-4px  hover:filter hover:brightness-125 mr-12px"
      onClick={() => selectedPage !== 1 && setSelectedPage(selectedPage - 1)}
    >
      <img src={LeftIcon} alt="arrow" />
    </button>
  );
  const RightArrow = () => (
    <button
      style={{ filter: path.includes("/freeboard/compose") && "brightness(1) invert(0.7)" }}
      className="flex items-center justify-center w-32px h-32px rounded-4px  hover:filter hover:brightness-125 ml-12px"
      onClick={() => selectedPage !== 5 && setSelectedPage(selectedPage + 1)}
    >
      <img src={RightIcon} alt="arrow" />
    </button>
  );

  const [selectedPage, setSelectedPage] = useState(1);

  return (
    <div className="relative flex h-32px items-center justify-center">
      <button
        style={{ filter: path.includes("/freeboard/compose") && "brightness(1) invert(0.7)" }}
        className="flex items-center justify-center w-32px h-32px rounded-4px  hover:filter hover:brightness-125 mr-px"
        onClick={() => setSelectedPage(1)}
      >
        <img className="cursor-pointer h-32px object-none hover:bg-blend-darken" src={DoubleLeftIcon} alt="" />
      </button>
      <LeftArrow />
      <div className="space-x-px flex items-center -ml-2px">
        <button
          style={{
            background: selectedPage === 1 && "linear-gradient(to top, #ada8a8, #d0d0d0)",
          }}
          className={`${
            selectedPage === 1 ? "shadow-link" : ""
          } flex items-center justify-center w-32px h-32px mt-px rounded-4px hover:filter hover:brightness-125`}
          onClick={() => setSelectedPage(1)}
        >
          <div
            style={{
              background: selectedPage === 1 && "linear-gradient(to top, #e5e5e5, #ffffff)",
            }}
            className={`flex items-center justify-center h-30px w-30px rounded-3px  cursor-pointer`}
          >
            <span
              className={`text-gray-activeText font-roboto tracking-tight text-12px font-semibold`}
              style={{
                color: selectedPage === 1 ? "#333" : path.includes("/freeboard/compose") ? "#444444" : "#eeeeee",
              }}
            >
              1
            </span>
          </div>
        </button>
        <button
          style={{
            background: selectedPage === 2 && "linear-gradient(to top, #ada8a8, #d0d0d0)",
          }}
          className={`${
            selectedPage === 2 ? "shadow-link" : ""
          } flex items-center justify-center w-32px h-32px rounded-4px hover:filter hover:brightness-125`}
          onClick={() => setSelectedPage(2)}
        >
          <div
            style={{
              background: selectedPage === 2 && "linear-gradient(to top, #e5e5e5, #ffffff)",
            }}
            className={`flex items-center justify-center h-30px w-30px rounded-3px  cursor-pointer`}
          >
            <span
              className={`text-gray-activeText font-roboto tracking-tight text-12px font-semibold`}
              style={{
                color: selectedPage === 2 ? "#333" : path.includes("/freeboard/compose") ? "#444444" : "#eeeeee",
              }}
            >
              2
            </span>
          </div>
        </button>
        <button
          style={{
            background: selectedPage === 3 && "linear-gradient(to top, #ada8a8, #d0d0d0)",
          }}
          className={`${
            selectedPage === 3 ? "shadow-link" : ""
          } flex items-center justify-center w-32px h-32px rounded-4px hover:filter hover:brightness-125`}
          onClick={() => setSelectedPage(3)}
        >
          <div
            style={{
              background: selectedPage === 3 && "linear-gradient(to top, #e5e5e5, #ffffff)",
            }}
            className={`flex items-center justify-center h-30px w-30px rounded-3px  cursor-pointer`}
          >
            <span
              className={`text-gray-activeText font-roboto tracking-tight text-12px font-semibold`}
              style={{
                color: selectedPage === 3 ? "#333" : path.includes("/freeboard/compose") ? "#444444" : "#eeeeee",
              }}
            >
              3
            </span>
          </div>
        </button>
        <button
          style={{
            background: selectedPage === 4 && "linear-gradient(to top, #ada8a8, #d0d0d0)",
          }}
          className={`${
            selectedPage === 4 ? "shadow-link" : ""
          } flex items-center justify-center w-32px h-32px rounded-4px hover:filter hover:brightness-125`}
          onClick={() => setSelectedPage(4)}
        >
          <div
            style={{
              background: selectedPage === 4 && "linear-gradient(to top, #e5e5e5, #ffffff)",
            }}
            className={`flex items-center justify-center h-30px w-30px rounded-3px  cursor-pointer`}
          >
            <span
              className={`text-gray-activeText font-roboto tracking-tight text-12px font-semibold`}
              style={{
                color: selectedPage === 4 ? "#333" : path.includes("/freeboard/compose") ? "#444444" : "#eeeeee",
              }}
            >
              4
            </span>
          </div>
        </button>

        <button
          style={{
            background: selectedPage === 5 && "linear-gradient(to top, #ada8a8, #d0d0d0)",
          }}
          className={`${
            selectedPage === 5 ? "shadow-link" : ""
          } flex items-center justify-center w-32px h-32px rounded-4px hover:filter hover:brightness-125`}
          onClick={() => setSelectedPage(5)}
        >
          <div
            style={{
              background: selectedPage === 5 && "linear-gradient(to top, #e5e5e5, #ffffff)",
            }}
            className={`flex items-center justify-center h-30px w-30px rounded-3px  cursor-pointer`}
          >
            <span
              className={`text-gray-activeText font-roboto tracking-tight text-12px font-semibold`}
              style={{
                color: selectedPage === 5 ? "#333" : path.includes("/freeboard/compose") ? "#444444" : "#eeeeee",
              }}
            >
              5
            </span>
          </div>
        </button>
      </div>

      <RightArrow />
      <button
        style={{ filter: path.includes("/freeboard/compose") && "brightness(1) invert(0.7)" }}
        className="flex items-center justify-center w-32px h-32px rounded-4px  hover:filter hover:brightness-125 ml-px"
        onClick={() => setSelectedPage(5)}
      >
        <img className="cursor-pointer h-32px object-none hover:bg-blend-darken" src={DoubleRightIcon} alt="" />
      </button>
    </div>
  );
};

export default Pagination;
