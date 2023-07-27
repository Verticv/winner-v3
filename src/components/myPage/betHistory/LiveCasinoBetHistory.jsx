import React, { useState } from 'react'
import DateSearchBar from '../DateSearchBar'
import SubHorizontalMenu from './SubHorizontalMenu'
import LiveCasinoBetHistoryTable from '../tables/LiveCasinoBetHistoryTable'
import AllIcon from '../../../images/myPage/betHistory/all.png'
import EvoIcon from '../../../images/myPage/betHistory/evolution.png'
import AsiaIcon from '../../../images/myPage/betHistory/asia.png'
import PragIcon from '../../../images/myPage/betHistory/pragmatic.png'
import DgIcon from '../../../images/myPage/betHistory/dg.png'
import SexyIcon from '../../../images/myPage/betHistory/sexy.png'
import BigIcon from '../../../images/myPage/betHistory/big.png'
import RoyalIcon from '../../../images/myPage/betHistory/royal.png'
import OrientalIcon from '../../../images/myPage/betHistory/oriental.png'
import IzugiIcon from '../../../images/myPage/betHistory/izugi.png'
import Sub1 from '../../../images/myPage/betHistory/slotGame/sub1.png'

const subTabsArray = [
    { text: "전체", icon: AllIcon, id: 0 },
    { text: "프레그메틱플레이", icon: PragIcon, id: 3, custom: "mt-8px" },
    { text: "에볼루션", icon: EvoIcon, id: 1 },
    { text: "로얄지", icon: RoyalIcon, id: 4 },
    { text: "아시아게이밍", icon: AsiaIcon, id: 5 },
    { text: "드림게이밍", icon: DgIcon, id: 6 },
    { text: "섹시게이밍", icon: SexyIcon, id: 7 },
    { text: "빅게이밍", icon: BigIcon, id: 8 },
    { text: "오리엔탈게임", icon: OrientalIcon, id: 9 },
    { text: "이주기", icon: IzugiIcon, id: 10 },
    { text: "마이크로게이밍", icon: Sub1, id: 11 },
];

const tableArray = [
    {
        id: 0,
        number: 7193915,
        time: "2021-06-29 15:46:13",
        type: "에볼루션",
        name: "바카라",
        amount: "12,000",
        profit: "-12,000",
        status: "패"
    },
    {
        id: 1,
        number: 7193914,
        time: "2021-06-29 15:45:41",
        type: "에볼루션",
        name: "바카라",
        amount: "900,000,000",
        profit: "+900,000,000",
        status: "승"
    },
    {
        id: 2,
        number: 7193913,
        time: "2021-06-29 15:45:41",
        type: "프레그메틱플레이",
        name: "블랙잭",
        amount: "800,000",
        profit: "-800,000",
        status: "패"
    },
];

const LiveCasinoBetHistory = ({isState, setState, showSub = true, isPopup = false}) => {

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
                <div style={{height:'170px',background:'rgba(52, 34, 103, 0.6)'}} className="mt-10px h-88px w-full px-4px py-3px rounded-4px">
                  <SubHorizontalMenu itemsArray={subTabsArray} isState={isState} setState={setState} />
                </div>
              </>

            )}
            
            <DateSearchBar isLeagueSearch={false} isPopup={isPopup}/>


            <div className="w-full h-full mt-20px">
                <LiveCasinoBetHistoryTable 
                    array={tableArray} 
                    checkedState={checkedState} 
                    setCheckedState={setCheckedState}
                    isPopupOpen={isPopupOpen}
                    setPopupOpen={setPopupOpen}
                />   
            </div>

            <div className="mt-40px h-36px w-full flex items-center justify-between">
              <div className="flex space-x-2px">
                <button 
                     style={{background:'#936cee',boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.3)'}}
                    className="flex items-center justify-center w-90px h-36px rounded-6px  hover:filter hover:brightness-125" 
                    onClick={() => allSelectButtonPressed()}
                        >
                          
                        <span className="tracking-tight text-14px text-white pt-px">{isAllSelected ? "선택해제" : "전체선택"}</span>
                           
                        </button>
                        <button 
                             style={{background:'#936cee',boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.3)'}}
                            className="flex items-center justify-center w-90px h-36px rounded-6px  hover:filter hover:brightness-125"
                        >
                           
                                <span className="tracking-tight text-14px text-white pt-px ">선택삭제</span>
                        
                        </button>
                    </div>
                    <button style={{width:'159px',background:'linear-gradient(to right, #15cfee, #3197e5)',boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.3)'}} className="flex items-center justify-center h-36px rounded-6px hover:filter hover:brightness-125  p-px">
                        <div style={{width:'157px'}} className="flex items-center justify-center h-34px rounded-6px cursor-pointer">
                            <span className="tracking-tight text-14px text-white pt-px text-shadow-5">게시판에 내역올리기</span>
                        </div>
                    </button>
                </div>
        </div>
    )
}

export default LiveCasinoBetHistory
