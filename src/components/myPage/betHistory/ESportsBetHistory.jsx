import React from 'react'
import DateSearchBar from '../DateSearchBar'
import EsportsBetHistoryTable from '../tables/EsportsBetHistoryTable'

const ESportsBetHistory = ({showSub = true, isPopup = false}) => {
    return (
        <div className="w-full">
            {showSub === true && (
                <DateSearchBar isLeagueSearch={false} isPopup={isPopup}/>
            )}

            <div className="w-full h-full mt-20px">
                <EsportsBetHistoryTable />  
            </div>
        </div>
    )
}

export default ESportsBetHistory
