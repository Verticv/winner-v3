import React, { useState } from 'react'
import DateSearchBar from '../DateSearchBar'
import SubHorizontalMenu from './SubHorizontalMenu'
import LiveCasinoBetHistoryTable from '../tables/LiveCasinoBetHistoryTable'
import AllIcon from '../../../images/myPage/betHistory/all_v2.png'
import Sub1 from '../../../images/myPage/betHistory/ARGame/sub1_v2.png'
import Sub2 from '../../../images/myPage/betHistory/ARGame/sub2_v2.png'
import Sub3 from '../../../images/myPage/betHistory/ARGame/sub3_v2.png'
import Sub4 from '../../../images/myPage/betHistory/ARGame/sub4.png'
import Sub5 from '../../../images/myPage/betHistory/ARGame/sub5.png'
import Sub6 from '../../../images/myPage/betHistory/ARGame/sub6.png'
import Sub7 from '../../../images/myPage/betHistory/ARGame/sub7.png'
import Sub8 from '../../../images/myPage/betHistory/ARGame/sub8.png'
import Sub9 from '../../../images/myPage/betHistory/ARGame/sub9.png'
import Sub10 from '../../../images/myPage/betHistory/ARGame/sub10.png'
import Sub11 from '../../../images/myPage/betHistory/ARGame/sub11.png'

const subTabsArray = [
    { text: "전체", icon: AllIcon, id: 0 },
    { text: "축구", icon: Sub1, id: 1 },
    { text: "경마", icon: Sub2, id: 2 },
    { text: "개경주", icon: Sub3, id: 3 },
    { text: "레이싱", icon: Sub4, id: 4 },
    { text: "탁구", icon: Sub5, id: 5 },
    { text: "배드민턴", icon: Sub6, id: 6 },
    { text: "양궁", icon: Sub7, id: 7 },
    { text: "마구", icon: Sub8, id: 8 },
    { text: "레이싱룰렛", icon: Sub9, id: 9 },
    { text: "농구", icon: Sub10, id: 10 },
    { text: "아이스하키", icon: Sub11, id: 11 },
];

const tableArray = [
    {
        id: 0,
        number: 7193915,
        time: "2021-06-29 15:46:13",
        type: "탁구",
        name: "승패",
        amount: "12,000",
        profit: "-12,000",
        status: "패"
    },
    {
        id: 1,
        number: 7193914,
        time: "2021-06-29 15:45:41",
        type: "개경주",
        name: "승리",
        amount: "900,000,000",
        profit: "+900,000,000",
        status: "승"
    },
    {
        id: 2,
        number: 7193913,
        time: "2021-06-29 15:45:41",
        type: "축구",
        name: "경기결과",
        amount: "800,000",
        profit: "-800,000",
        status: "패"
    },
];

const ARGameBetHistory = ({isState, setState, showSub = true, isPopup = false}) => {

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
                <div className="mt-10px w-full px-4px py-3px rounded-4px"
                style={{background:'rgba(52, 34, 103, 0.6)'}}>
                <SubHorizontalMenu itemsArray={subTabsArray} isState={isState} setState={setState} />
              </div>
            )}
            

            <DateSearchBar isGameResultsSearch={true} isPopup={isPopup} />

            <div className="w-full h-full mt-10px">
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
                        
                            <span className="tracking-tight text-14px text-white pt-px text-shadow-5">{isAllSelected ? "선택해제" : "전체선택"}</span>
                       
                    </button>
                    <button 
                        style={{background:'#936cee',boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.3)'}}
                        className="flex items-center justify-center w-88px h-36px rounded-6px hover:filter hover:brightness-125"
                    >
                       
                            <span className="tracking-tight text-14px text-white pt-px text-shadow-5">선택삭제</span>
                       
                    </button>
                </div>
                <button style={{width:'158px',background:'linear-gradient(to right, #15cfee, #3197e5)',boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.3)'}}  className="flex items-center justify-center h-36px rounded-6px p-px hover:filter hover:brightness-125 mr-px">
                   
                        <span className="tracking-tight text-14px text-white pt-px text-shadow-5">게시판에 내역올리기</span>
                  
                </button>
            </div>
        </div>
    )
}

export default ARGameBetHistory
