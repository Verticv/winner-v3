import React, { useState } from 'react'
import DateSearchBar from '../DateSearchBar';
import SportsBetHistoryPanel from './SportsBetHistoryPanel'

const SportsBetHistory = ({checkedState, setCheckedState , showSub = true, attachedArray, setAttachedArray, setPopupOpen, isPopup = false}) => {

    const [isAllSelected, setAllSelected] = useState(false)

    const AllSelectButtonPressed = () => {

        if (isAllSelected === false) {
            setAllSelected(true)
            setCheckedState(Array(3).fill(true))
        } else {
            setAllSelected(false)
            setCheckedState(Array(3).fill(false))
        }
    };

    return (
        <div className="w-full">

            <DateSearchBar isGameResultsSearch={true}  isPopup={isPopup}/>


        <div className="w-full h-full mt-20px rounded-4px">
          <div className="space-y-15px">
            <SportsBetHistoryPanel isPopup={!showSub} type={0} checkedState={checkedState} setCheckedState={setCheckedState} attachedArray={attachedArray} setAttachedArray={setAttachedArray} setPopupOpen={setPopupOpen}/>
            <SportsBetHistoryPanel isPopup={!showSub} type={1} winAmount="+900,000,000" checkedState={checkedState} setCheckedState={setCheckedState} attachedArray={attachedArray} setAttachedArray={setAttachedArray} setPopupOpen={setPopupOpen}/>
            <SportsBetHistoryPanel isPopup={!showSub} type={2} checkedState={checkedState} setCheckedState={setCheckedState} attachedArray={attachedArray} setAttachedArray={setAttachedArray} setPopupOpen={setPopupOpen}/>
          </div>
          <div className="mt-40px h-36px w-full flex items-center justify-between">
              <div className="flex space-x-2px">
                  <button 
                      style={{background:'#936cee'}}
                      className="flex items-center justify-center w-90px h-36px rounded-6px  hover:filter hover:brightness-125 shadow-link"
                      onClick={() => AllSelectButtonPressed()}
                  >
                     
                    <span className="font-spoqaMedium tracking-tight text-14px text-white pt-px ">{isAllSelected ? "선택해제" : "전체선택"}</span>
                     
                  </button>
                  <button 
                         style={{background:'#936cee'}}
                      className="flex items-center justify-center w-90px h-36px rounded-6px  hover:filter hover:brightness-125 shadow-link"
                  >
                      
                          <span className="font-spoqaMedium tracking-tight text-14px text-white pt-px ">선택삭제</span>
                    
                  </button>
              </div>
              <button style={{width:'159px',background:'linear-gradient(to right, #15cfee, #3197e5)'}} className="flex items-center justify-center h-36px rounded-6px  p-px hover:filter hover:brightness-125 shadow-link">
                 
                      <span className="font-spoqaMedium tracking-tight text-14px text-white pt-px ">게시판에 내역올리기</span>
            
              </button>
          </div>
      </div>
            
        </div>
    )
}

export default SportsBetHistory
