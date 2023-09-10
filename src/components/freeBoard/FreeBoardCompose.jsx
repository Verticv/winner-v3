import SportsBetHistory from "components/myPage/betHistory/SportsBetHistoryPanel";
import BetHistoryPopup from "components/popups/BetHistoryPopup";
import PopupControls from "components/popups/PopupControls";
import React, { useState } from "react";
import { useHistory } from "react-router";

const FreeBoardCompose = () => {
  const history = useHistory();
  const [isPopupOpen, setPopupOpen] = useState(true);
  const [attachedArray, setAttachedArray] = useState([]);
  const AttachButton = (
    <button
      style={{
        width: "115px",
        height: "36px",
        backgroundColor: "#5d659f",
        boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
      }}
      className="flex items-center justify-center rounded-6px text-golden-highLight text-13px tracking-tight font-spoqaMedium pt-px hover:brightness-125 filter text-white"
    >
      베팅내역첨부
    </button>
  );

  return (
    <div>
      <div
        className="w-full overflow-hidden rounded-10px p-px mt-5px"
        style={{
          background: "linear-gradient(to top, #ededeb, #cb78e6)",
          boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="w-full bg-gray-323232 rounded-10px overflow-hidden">
          <div
            style={{ borderColor: "#dddddd" }}
            className="h-55px w-full bg-gray-2e2e2e border-b border-gray-252525"
          >
            <input
              style={{ backgroundColor: "#f7f7f7" }}
              className="bg-gray-2e2e2e outline-none w-full h-full px-19px text-14px font-spoqa tracking-tight placeholder-gray-c8c8c8 text-gray-c8c8c8 text-r444444"
              placeholder="제목을 입력하세요."
            />
          </div>

          <div
            style={{ backgroundColor: "#f7f7f7", borderColor: "#dddddd" }}
            className="h-56px w-full bg-gray-2e2e2e border-b border-gray-252525 px-19px flex items-center"
          >
            <PopupControls
              buttonChild={AttachButton}
              isPopupOpen={isPopupOpen}
              setPopupOpen={setPopupOpen}
            >
              <BetHistoryPopup
                setPopupOpen={setPopupOpen}
                attachedArray={attachedArray}
                setAttachedArray={setAttachedArray}
              />
            </PopupControls>
          </div>

          {attachedArray.map((id) => (
            <div className="py-20px border-b border-gray-252525 px-30px space-y-28px bg-white">
              <SportsBetHistory
                type={id}
                id={id}
                isAttached={true}
                attachedArray={attachedArray}
                setAttachedArray={setAttachedArray}
                isFullPage={true}
              />
            </div>
          ))}

          <div
            style={{ height: "401px", backgroundColor: "#ffffff" }}
            className="w-full bg-gray-323232"
          >
            <textarea
              style={{ resize: "none", backgroundColor: "#ffffff" }}
              className="scroll-div2 bg-gray-323232 outline-none w-full h-full  px-19px pb-19px pt-16px text-14px font-spoqa tracking-tight placeholder-gray-c8c8c8 text-r444444"
              placeholder="욕설, 상대방 비방글, 타사이트 언급, 홍보 등은 경고없이 삭제되며 사이트 이용에 제한을 받을 수 있습니다."
            />
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center space-x-5px mb-67px mt-20px">
        <button
          style={{
            width: "192px",
            boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
          }}
          onClick={() => history.push("/freeboard")}
          className="flex items-center justify-center h-52px rounded-6px bg-gradient-to-t from-blue-3d4a8d to-blue-88d9e8 hover:filter hover:brightness-125 shadow-link"
        >
          <div
            style={{
              width: "192px",
              background: "linear-gradient(to right,  #15cfee, #3197e5)",
            }}
            className="flex items-center justify-center h-52px bg-black rounded-6px bg-gradient-to-b from-blue-528ccd to-blue-396084 cursor-pointer pt-2px"
          >
            <span
              style={{ textShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)" }}
              className="font-bold tracking-tight text-16px text-blue-d6f3ff text-white mb-2px"
            >
              작성하기
            </span>
          </div>
        </button>
        <button
          onClick={() => history.push("/freeboard")}
          className="flex items-center justify-center h-52px rounded-6px  shadow-link hover:filter hover:brightness-125"
          style={{
            // background: "linear-gradient(to top, #4b3b09, #e8b888)",
            width: "192px",
            boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div
            className="flex items-center justify-center h-52px rounded-6px cursor-pointer"
            style={{
              background: "linear-gradient(to right,  #ff7760, #f14a53)",
              width: "192px",
            }}
          >
            <span
              style={{ textShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)" }}
              className="font-bold tracking-tight text-16px text-golden-highLight pt-px text-white mb-px"
            >
              취소하기
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FreeBoardCompose;
