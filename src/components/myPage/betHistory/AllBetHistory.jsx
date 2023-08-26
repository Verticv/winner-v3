import React, { useState } from 'react'
import DateSearchBar from '../DateSearchBar'
import AllHistoryTable from '../tables/AllHistoryTable'


const AllBetHistory = ({ isPopup = false}) => {

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
            <DateSearchBar isLeagueSearch={false} isPopup={isPopup}/>
            <div className="w-full h-full mt-10px">
                <AllHistoryTable 
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
                            className="flex items-center justify-center w-88px h-36px rounded-6px hover:filter hover:brightness-125"
                            onClick={() => allSelectButtonPressed()}
                        >
                        <span className="tracking-tight text-13px text-white text-shadow-5">{isAllSelected ? "선택해제" : "전체선택"}</span>
                           
                        </button>
                        <button 
                            style={{background:'#936cee',boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.3)'}}
                            className="flex items-center justify-center w-88px h-36px rounded-6px hover:filter hover:brightness-125"
                        >
                            
                                <span className="tracking-tight text-13px text-white text-shadow-5">선택삭제</span>
                         
                        </button>
                    </div>
                    <button style={{width:'158px',background:'linear-gradient(to right, #15cfee, #3197e5)',boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.3)'}} className="flex items-center justify-center h-36px rounded-6px p-px hover:filter hover:brightness-125 mr-px">
                      
                            <span className="tracking-tight text-13px text-white text-shadow-5">게시판에 내역올리기</span>
                       
                    </button>
                </div>
        </div>
    )
}

export default AllBetHistory
