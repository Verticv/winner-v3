import React, { useState } from 'react'
import DateSearchBar from './DateSearchBar'
import MyPageTitle from './MyPageTitle'
import Pagination from './Pagination'
import ExchangeHistoryTable from './tables/ExchangeHistoryTable'

const ExchangeHistory = () => {

    const [page, setPage] = useState(0)
    const [checkedState, setCheckedState] = useState(
        new Array(3).fill(false)
    );
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
        <div className="flex flex-col w-full items-center">
            <MyPageTitle title="환전내역" />
            <DateSearchBar has3MonthSearch={true} />

            <div className="w-full h-full mt-10px">
                <ExchangeHistoryTable checkedState={checkedState} setCheckedState={setCheckedState} />
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

export default ExchangeHistory
