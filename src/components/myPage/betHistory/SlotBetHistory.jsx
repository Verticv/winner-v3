import React, { useState } from 'react'
import DateSearchBar from '../DateSearchBar'
import SubHorizontalMenu from './SubHorizontalMenu'
import LiveCasinoBetHistoryTable from '../tables/LiveCasinoBetHistoryTable'
import AllIcon from '../../../images/myPage/betHistory/all.png'
import Slot1 from '../../../images/myPage/betHistory/slotGame/slot1.png'
import Slot2 from '../../../images/myPage/betHistory/slotGame/slot2.png'
import Slot3 from '../../../images/myPage/betHistory/slotGame/slot3.png'
import Slot4 from '../../../images/myPage/betHistory/slotGame/slot4.png'
import Slot5 from '../../../images/myPage/betHistory/slotGame/slot5.png'
import Slot6 from '../../../images/myPage/betHistory/slotGame/slot6.png'
import Slot7 from '../../../images/myPage/betHistory/slotGame/slot7.png'
import Slot8 from '../../../images/myPage/betHistory/slotGame/slot8.png'
import Slot9 from '../../../images/myPage/betHistory/slotGame/slot9.png'
import Slot10 from '../../../images/myPage/betHistory/slotGame/slot10.png'
import Slot11 from '../../../images/myPage/betHistory/slotGame/slot11.png'
import Slot12 from '../../../images/myPage/betHistory/slotGame/slot12.png'
import Slot13 from '../../../images/myPage/betHistory/slotGame/slot13.png'
import Slot14 from '../../../images/myPage/betHistory/slotGame/slot14.png'
import Slot15 from '../../../images/myPage/betHistory/slotGame/slot15.png'
import Slot16 from '../../../images/myPage/betHistory/slotGame/slot16.png'
import Slot17 from '../../../images/myPage/betHistory/slotGame/slot17.png'
import Slot18 from '../../../images/myPage/betHistory/slotGame/slot18.png'
import Slot19 from '../../../images/myPage/betHistory/slotGame/slot19.png'
import Slot20 from '../../../images/myPage/betHistory/slotGame/slot20.png'
import Slot21 from '../../../images/myPage/betHistory/slotGame/slot21.png'
import Slot22 from '../../../images/myPage/betHistory/slotGame/slot22.png'
import Slot23 from '../../../images/myPage/betHistory/slotGame/slot23.png'
import Slot24 from '../../../images/myPage/betHistory/slotGame/slot24.png'
import Slot25 from '../../../images/myPage/betHistory/slotGame/slot25.png'
import Slot26 from '../../../images/myPage/betHistory/slotGame/slot26.png'
import Slot27 from '../../../images/myPage/betHistory/slotGame/slot27.png'
import Slot28 from '../../../images/myPage/betHistory/slotGame/slot28.png'

const subTabsArray = [
    { text: "전체", icon: AllIcon, id: 0 },
    { text: "프레그메틱플레이", icon: Slot1, id: 1 },
    { text: "히든버튼", icon: Slot26, id: 26 },
    { text: "씨큐나인", icon: Slot2, id: 2 },
    { text: "월드매치", icon: Slot3, id: 3 },
    { text: "하바네로", icon: Slot4, id: 4 },
    { text: "플레이앤고", icon: Slot5, id: 5 },
    { text: "스페이드", icon: Slot6, id: 6 },
    { text: "분고", icon: Slot7, id: 7 },
    { text: "레드타이거", icon: Slot8, id: 8 },
    { text: "엘리시움", icon: Slot9, id: 9 },
    { text: "빅타임게이밍", icon: Slot10, id: 10 },
    { text: "마이크로게이밍", icon: Slot11, id: 11 },
    { text: "YL게이밍", icon: Slot12, id: 12 },
    { text: "넷엔트", icon: Slot13, id: 13 },
    { text: "드라군소프트", icon: Slot14, id: 14 },
    { text: "YGG드라실", icon: Slot15, id: 15 },
    { text: "플레이슨", icon: Slot16, id: 16 },
    { text: "플레이텍", icon: Slot17, id: 17 },
    { text: "스카이윈드", icon: Slot18, id: 18 },
    { text: "와즈단", icon: Slot19, id: 19 },
    { text: "PG소프트", icon: Slot20, id: 20 },
    { text: "로얄슬롯게이밍", icon: Slot21, id: 21 },
    { text: "노리미트시티", icon: Slot22, id: 22 },
    { text: "CC88", icon: Slot23, id: 23 },
    { text: "패스트스핀", icon: Slot24, id: 24 },
    { text: "나가게임즈", icon: Slot25, id: 25 },
    { text: "넥스트스핀", icon: Slot27, id: 27 },
    { text: "스피닉스", icon: Slot28, id: 28 },
    
];

const tableArray = [
    {
        id: 0,
        number: 7193915,
        time: "2021-06-29 15:46:13",
        type: "레드타이거",
        name: "Dragon's Luck",
        amount: "12,000",
        profit: "-12,000",
        status: "패"
    },
    {
        id: 1,
        number: 7193914,
        time: "2021-06-29 15:45:41",
        type: "레드타이거",
        name: "Dragon's Luck",
        amount: "900,000,000",
        profit: "+900,000,000",
        status: "승"
    },
    {
        id: 2,
        number: 7193913,
        time: "2021-06-29 15:45:41",
        type: "프레그메틱플레이",
        name: "Starz Megaways",
        amount: "800,000",
        profit: "-800,000",
        status: "패"
    },
];

const SlotBetHistory = ({isState, setState, showSub = true, isPopup = false}) => {

    const [checkedState, setCheckedState] = useState(new Array(3).fill(false))
    const [isAllSelected, setAllSelected] = useState(false)
    const [isPopupOpen, setPopupOpen] = useState(true)

    function allSelectButtonPressed() {
        if (isAllSelected) {
            setCheckedState(Array(3).fill(false))
        } else {
            setCheckedState(Array(3).fill(true))
        }
        setAllSelected(!isAllSelected)
    }

    return (
        <div className="w-full">
            {showSub === true && (
                <>
                    <div className="mt-10px w-full px-3px py-3px rounded-6px"
                    style={{background:'rgba(52, 34, 103, 0.6)'}}>
                      <SubHorizontalMenu itemsArray={subTabsArray} isState={isState} setState={setState} />
                  </div>
                </>
            )}
            <DateSearchBar isLeagueSearch={false} isPopup={isPopup} />


            <div className={`w-full h-full mt-10px`}>
                <LiveCasinoBetHistoryTable 
                    array={tableArray} 
                    checkedState={checkedState} 
                    setCheckedState={setCheckedState}
                    isPopupOpen={isPopupOpen}
                    setPopupOpen={setPopupOpen}
                />   
            </div>

            <div className="mt-20px h-36px w-full flex items-center justify-between">
                <div className="flex space-x-4px ml-px">
                    <button 
                        style={{background:'#936cee',boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.3)'}}
                        className="flex items-center justify-center w-88px h-36px rounded-6px  hover:filter hover:brightness-125" 
                        onClick={() => allSelectButtonPressed()}
                    >
                       
                    <span className="tracking-tight text-13px text-white text-shadow-5">{isAllSelected ? "선택해제" : "전체선택"}</span>
                      
                    </button>
                    <button 
                         style={{background:'#936cee',boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.3)'}}
                            className="flex items-center justify-center w-88px h-36px rounded-6px  hover:filter hover:brightness-125"
                    >
                        
                            <span className="tracking-tight text-13px text-white text-shadow-5">선택삭제</span>
                       </button>
                </div>
                <button style={{width:'158px',background:'linear-gradient(to right, #15cfee, #3197e5)',boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.3)'}} className="flex items-center justify-center h-36px rounded-6px p-px hover:filter hover:brightness-125 mr-px">
                        <span className="tracking-tight text-13px text-white text-shadow-5 ">게시판에 내역올리기</span>
                </button>
            </div>
        </div>
    )
}

export default SlotBetHistory
