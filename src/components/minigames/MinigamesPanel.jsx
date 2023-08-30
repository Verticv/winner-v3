import HorizontalMenu4 from "components/horizontalMenus/HorizontalMenu4";
import React, { useState } from "react";
import KinoLadderPanel from "./KinoLadderPanel";
import PowerballPanel from "./PowerballPanel";
import PowerLadderPanel from "./PowerLadderPanel";
import SpeedKinoPanel from "./SpeedKinoPanel";
import { PowerballHistoryArray, PowerballResultsArray, PowerLadderResultsArray } from "./arrays";
import { Route, useHistory } from "react-router";

const MinigamesPanel = ({ selectedGame, setSelectedGame, selectedTab, setSelectedTab, setSelectedOption }) => {
  const [checkedState, setCheckedState] = useState(new Array(PowerballHistoryArray.length).fill(false));
  const [isAllSelected, setAllSelected] = useState(false);
  const history = useHistory();

  const MenuArray = [
    { id: 0, text: "게임하기" },
    { id: 1, text: "회차결과" },
    { id: 2, text: "베팅내역" },
  ];

  return (
    <div className="w-full">
      <div className="relative flex z-10 px-3px">
        <HorizontalMenu4 itemsArray={MenuArray} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>
      <div
        className="w-full rounded-10px p-px relative z-20 -mt-2px "
        style={{ background: "linear-gradient(to top, #ededeb, #cb78e6)", boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)" }}
      >
        <div className="w-full rounded-10px flex relative z-20 overflow-hidden" style={{ background: "#fff" }}>
          <Route path="/minigame/powerball">
            <PowerballPanel
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              historyArray={PowerballHistoryArray}
              resultsArray={PowerballResultsArray}
              checkedState={checkedState}
              setCheckedState={setCheckedState}
              setSelectedOption={setSelectedOption}
            />{" "}
          </Route>
          <Route path="/minigame/powerladder">
            <PowerLadderPanel
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              historyArray={PowerballHistoryArray}
              resultsArray={PowerLadderResultsArray}
              checkedState={checkedState}
              setCheckedState={setCheckedState}
              setSelectedOption={setSelectedOption}
            />
          </Route>
          <Route path="/minigame/speedkino">
            <SpeedKinoPanel
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              historyArray={PowerballHistoryArray}
              resultsArray={PowerLadderResultsArray}
              checkedState={checkedState}
              setCheckedState={setCheckedState}
              setSelectedOption={setSelectedOption}
            />
          </Route>
          <Route path="/minigame/kinoladder">
            <KinoLadderPanel
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              historyArray={PowerballHistoryArray}
              resultsArray={PowerLadderResultsArray}
              checkedState={checkedState}
              setCheckedState={setCheckedState}
              setSelectedOption={setSelectedOption}
            />
          </Route>
        </div>
      </div>

      {selectedTab === 2 && (
        <div className="mt-20px h-36px w-full flex items-center justify-between pl-px">
          <div className="flex space-x-4px">
            <button
              style={{ background: "#936cee", boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)" }}
              className="flex items-center justify-center w-88px h-36px rounded-6px hover:filter hover:brightness-125"
              onClick={() => {
                if (isAllSelected === true) {
                  setCheckedState(Array(PowerballHistoryArray.length).fill(false));
                } else {
                  setCheckedState(Array(PowerballHistoryArray.length).fill(true));
                }
                setAllSelected(!isAllSelected);
              }}
            >
              <span className="tracking-tight text-13px text-white text-shadow-5">
                {isAllSelected ? "선택해제" : "전체선택"}
              </span>
            </button>

            <button
              style={{ background: "#936cee", boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)" }}
              className="flex items-center justify-center w-88px h-36px rounded-6px hover:filter hover:brightness-125"
            >
              <span className="tracking-tight text-13px text-white text-shadow-5">선택삭제</span>
            </button>
          </div>
          <div
            style={{
              width: "128px",
              background: "linear-gradient(to right, #15cfee, #3197e5)",
              boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
            }}
            className="flex items-center justify-center h-36px rounded-6px p-px hover:filter hover:brightness-125 cursor-pointer"
            onClick={() => history.push("/mypage/bet-history/minigame")}
          >
            <span className="tracking-tight text-13px text-white text-shadow-5">전체베팅내역</span>
          </div>
        </div>

        // <div className="mt-20px h-36px w-full flex items-center justify-between pl-px pr-3px">
        //     <div className="flex space-x-2px">
        //         <button
        //             style={{background:'#936cee',boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.6)'}}
        //             className="flex items-center justify-center w-90px h-36px rounded-6px hover:filter hover:brightness-125"
        //             onClick={() => {
        //                 if (isAllSelected === true) {
        //                     setCheckedState(Array(PowerballHistoryArray.length).fill(false))
        //                 } else {
        //                     setCheckedState(Array(PowerballHistoryArray.length).fill(true))
        //                 }
        //                 setAllSelected(!isAllSelected)
        //             }}
        //         >
        //                 <span className=" tracking-tight text-13px text-white text-shadow-5">{isAllSelected ? "선택해제" : "전체선택"}</span>
        //         </button>
        //         <button style={{background:'#936cee',boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.6)'}}
        //             className="flex items-center justify-center w-90px h-36px rounded-6px hover:filter hover:brightness-125">

        //             <span className="tracking-tight text-13px text-white text-shadow-5">선택삭제</span>

        //         </button>
        //     </div>
        //     <button
        //         style={{width:'114px',background:'linear-gradient(to right, #15cfee, #3197e5)',boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.6)'}}
        //         className="flex items-center justify-center h-36px rounded-6px  p-px hover:filter hover:brightness-125"
        //         onClick={() => history.push('/mypage/bet-history/minigame')}
        //     >
        //             <span className=" tracking-tight text-13px text-white  text-shadow-5">전체베팅내역</span>

        //     </button>
        // </div>
      )}
    </div>
  );
};

export default MinigamesPanel;
