import React from "react";
import icon from "../../../images/nonLivePage/CenterComponent/Icon.png";
import icon1 from "../../../images/nonLivePage/CenterComponent/star.png";
import icon2 from "../../../images/nonLivePage/CenterComponent/Icon2.png";
import icon3 from "../../../images/nonLivePage/CenterComponent/Icon3.png";
import icon4 from "../../../images/nonLivePage/CenterComponent/Icon4.png";

const CenterComponent = () => {
  return (
    <>
      <div
        style={{
          //   height: "78px",
          width: "640px",
          background: "linear-gradient(to right, #622e8a, #4f2783)",
        }}
        className="items-center pt-7px ml-10px mt-61px pb-7px rounded-lg"
      >
        <div
          style={{
            background: "linear-gradient(to right, #f67700, #f100ff)",
            width: "339px",
            height: "25px",
          }}
          className="flex items-center rounded-full mt-7px ml-7px "
        >
          <img className="ml-2px" src={icon} alt="img" />
          <p
            style={{ color: "#eeeeee", fontFamily: "Spoqa Han Sans Neo" }}
            className="ml-6px text-13px "
          >
            다폴더 보너스 추가 배당
          </p>
          <p style={{ color: "#ffd98b" }} className="ml-5px mr-18px text-12px">
            (3, 6, 9) 폴더 이상 조합시 지급
          </p>
        </div>
        <div className="flex mt-5px ml-7px mr-7px mb-7px">
          <div
            style={{
              background: "linear-gradient(to top, #4f3a7a, #e597ff)",
              width: "207px",
            }}
            className="rounded-lg p-px mr-2px"
          >
            <div
              style={{
                background: "linear-gradient(to top, #6b22ff, #df52ff)",
              }}
              className="flex items-center justify-between rounded-lg h-34px"
            >
              <div className="flex ml-11px">
                <img className="object-none" src={icon1} alt="img" />
                <p style={{ color: "#eeeeee" }} className=" ml-2px text-13px">
                  3폴더 이상
                </p>
              </div>
              <div className="mr-13px">
                <p style={{ color: "#eeeeee" }} className="text-13px">
                  1.03
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              background: "linear-gradient(to top, #4f3a7a, #e597ff)",
              width: "207px",
            }}
            className="rounded-lg p-px mr-2px"
          >
            <div
              style={{
                background: "linear-gradient(to top, #6b22ff, #df52ff)",
              }}
              className="flex items-center justify-between rounded-lg h-34px"
            >
              <div className="flex ml-12px">
                <img className="object-none" src={icon1} alt="img" />
                <p style={{ color: "#eeeeee" }} className="ml-2px text-13px">
                  6폴더 이상
                </p>
              </div>
              <div className="mr-11px">
                <p style={{ color: "#eeeeee" }} className="text-13px">
                  1.06
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              background: "linear-gradient(to top, #652347, #ff85b1)",
              width: "207px",
            }}
            className="rounded-lg p-px mr-7px"
          >
            <div
              style={{
                background: "linear-gradient(to top, #911c5c, #f04281)",
              }}
              className="flex items-center justify-between rounded-lg h-34px"
            >
              <div className="flex ml-14px">
                <img className="object-none" src={icon1} alt="img" />
                <p style={{ color: "#eeeeee" }} className="ml-2px text-13px">
                  9폴더 이상
                </p>
              </div>
              <div className="mr-10px">
                <p style={{ color: "#eeeeee" }} className="text-13px">
                  1.09
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "linear-gradient(to right, #622e8a, #4f2783)",
          height: "33px",
          width: "640px",
        }}
        className=" flex items-center ml-10px mt-5px rounded-lg"
      >
        <p style={{ color: "#eeeeee" }} className="ml-10px text-12px">
          ※ 스포츠 베팅규정은 ‘베팅규정안내’를 열람하시면 확인이 가능합니다.
        </p>
      </div>

      <div
        style={{
          background: "linear-gradient(to right, #622e8a, #4f2783)",
          height: "43px",
          width: "640px",
        }}
        className=" flex items-center justify-between ml-10px mt-5px rounded-lg"
      >
        <div className="flex ml-7px">
          <div
            style={{
              background: "linear-gradient(to top, #6b22ff, #df52ff)",
              width: "88px",
              height: "27px",
            }}
            className="flex items-center rounded-full mr-5px"
          >
            <img className="object-none" src={icon2} alt="img" />
            <p style={{ color: "#ffffff" }} className="text-12px">
              시간순
            </p>
          </div>
          <div
            style={{ background: "#936cee", width: "88px", height: "27px" }}
            className="flex items-center rounded-full mr-6px"
          >
            <img className="object-none ml-17px" src={icon3} alt="img" />
            <p style={{ color: "#ffffff" }} className="ml-2px text-12px">
              인기순
            </p>
          </div>
          <div
            style={{ background: "#936cee", width: "88px", height: "27px" }}
            className="flex items-center rounded-full"
          >
            <img className="object-none ml-17px" src={icon4} alt="img" />
            <p style={{ color: "#ffffff" }} className="ml-2px text-12px">
              리그순
            </p>
          </div>
        </div>
        <div>
          <p></p>
        </div>
      </div>

      {/* <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            Options
            <svg
              className="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div> */}

      {/* <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
            >
              Account settings
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-1"
            >
              Support
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-2"
            >
              License
            </a>
            <form method="POST" action="#" role="none">
              <button
                type="submit"
                className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-3"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default CenterComponent;
