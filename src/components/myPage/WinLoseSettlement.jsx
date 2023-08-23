import React, { useState } from 'react'
import DateSearchBar from './DateSearchBar'
import MyPageTitle from './MyPageTitle'
import Pagination from './Pagination'
import Diamond from '../../images/myPage/diamond.png'
import WinLoseTable from './tables/WinLoseTable'

const WinLoseSettlement = () => {

    const [page, setPage] = useState(0)
    const [checkedState, setCheckedState] = useState(
        new Array(10).fill(false)
    );
    const [isAllSelected, setAllSelected] = useState(false)

    const AllSelectButtonPressed = () => {

        if (isAllSelected === false) {
            setAllSelected(true)
            setCheckedState(Array(10).fill(true))
        } else {
            setAllSelected(false)
            setCheckedState(Array(10).fill(false))
        }
    };

    return (
        <div className="flex flex-col items-center w-full">
            <MyPageTitle title="윈루즈정산" />
            <DateSearchBar isLeagueSearch={false} has3MonthSearch={true} />

             <div className="flex h-48px w-full mt-20px space-x-12px">
                <div style={{ width: '255px', background:'#341d5a', borderColor:'#9361e5' }}
                    className="h-48px rounded-full border-2 flex items-center justify-center text-16px">
                    <img src={Diamond} alt="" />
                    <div className="flex items-center space-x-4px ml-8px font-bold">
                      <span className="text-white tracking-tight">진행중인 금액 :</span>
                      <span className="text-ffd200">78,308</span>
                    </div>
                </div>

                <div style={{ width: '255px', background:'#341d5a', borderColor: '#9361e5' }}
                    className="h-48px rounded-full border-2 flex items-center justify-center text-16px">
                    <img src={Diamond} alt="" />
                    <div className="flex items-center space-x-4px ml-10px font-bold">
                        <span className="text-white tracking-tight">정산 총 금액 :</span>
                        <span className="text-ffd200">24,393,246</span>
                    </div>
                </div>

            </div>

            <div className="mt-20px">
                <WinLoseTable checkedState={checkedState} setCheckedState={setCheckedState}/>
            </div>

            <div className="mt-20px h-36px w-full flex items-center justify-between">
                <div className="flex space-x-4px ml-px">
                     <button 
                        style={{background:'#936cee',boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.3)'}}
                        className="flex items-center justify-center w-88px h-36px rounded-6px hover:filter hover:brightness-125"
                        onClick={() => AllSelectButtonPressed()}
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
            </div>

            <div className="flex w-full justify-center mt-5px mb-60px">
                <Pagination page={page} setPage={setPage}/>   
            </div> 
            
        </div>
    )
}

export default WinLoseSettlement
