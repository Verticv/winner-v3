import HorizontalMenu1 from 'components/horizontalMenus/HorizontalMenu1';
import DateSearchBar from 'components/myPage/DateSearchBar';
import MyPageTitle from 'components/myPage/MyPageTitle'
import Pagination from 'components/myPage/Pagination';
import React, { useState } from 'react'
import Icon1 from '../../images/gameResults/horizontalMenu/icon_1.png'
import Icon2 from '../../images/gameResults/horizontalMenu/icon_2.png'
import Icon3 from '../../images/gameResults/horizontalMenu/icon_3.png'
import Icon4 from '../../images/gameResults/horizontalMenu/icon_4.png'
import Icon5 from '../../images/gameResults/horizontalMenu/icon_5.png'
import Icon6 from '../../images/gameResults/horizontalMenu/icon_6.png'
import Icon7 from '../../images/gameResults/horizontalMenu/icon_7.png'
import Icon8 from '../../images/gameResults/horizontalMenu/icon_8.png'
import Icon9 from '../../images/gameResults/horizontalMenu/icon_9.png'
import Icon10 from '../../images/gameResults/horizontalMenu/icon_10.png'
import Icon1_on from '../../images/gameResults/horizontalMenu/icon_1_on.png'
import Icon2_on from '../../images/gameResults/horizontalMenu/icon_2_on.png'
import Icon3_on from '../../images/gameResults/horizontalMenu/icon_3_on.png'
import Icon4_on from '../../images/gameResults/horizontalMenu/icon_4_on.png'
import Icon5_on from '../../images/gameResults/horizontalMenu/icon_5_on.png'
import Icon6_on from '../../images/gameResults/horizontalMenu/icon_6_on.png'
import Icon7_on from '../../images/gameResults/horizontalMenu/icon_7_on.png'
import Icon9_on from '../../images/gameResults/horizontalMenu/icon_9_on.png'
import Icon8_on from '../../images/gameResults/horizontalMenu/icon_8_on.png'
import Icon10_on from '../../images/gameResults/horizontalMenu/icon_10_on.png'
import GameDetails from './GameDetails';

const WinDrawLose = ({pageTitle = "승무패"}) => {

    const tabsArray = [
        { text: "전체", icon: Icon1, iconHighlight: Icon1_on, id: 0, number: 854 },
        { text: "축구", icon: Icon2, iconHighlight: Icon2_on, id: 1, number: 567 },
        { text: "농구", icon: Icon3, iconHighlight: Icon3_on, id: 2, number: 227 },
        { text: "야구", icon: Icon4, iconHighlight: Icon4_on, id: 3, number: 407 },
        { text: "배구", icon: Icon5, iconHighlight: Icon5_on, id: 4, number: 0 },
        { text: "테니스", icon: Icon6, iconHighlight: Icon6_on, id: 5, number: 0 },
        { text: "배드민턴", icon: Icon7, iconHighlight: Icon7_on, id: 6, number: 0 },
        { text: "하키", icon: Icon8, iconHighlight: Icon8_on, id: 7, number: 0 },
        { text: "미식축구", icon: Icon9, iconHighlight: Icon9_on, id: 8, number: 0 },
        { text: "격투기", icon: Icon10, iconHighlight: Icon10_on, id: 9, number: 9 },
    ];

    const [selectedTab, setSelectedTab] = useState(0)
    const [page, setPage] = useState(0)

    return (
        <div>
            <MyPageTitle title={pageTitle} />
            <div className="relative w-full mt-11px">
                <HorizontalMenu1 itemsArray={tabsArray} isState={selectedTab} setState={setSelectedTab} />
            </div>
            <div className='mt-20px'>
                <DateSearchBar isGameResultsSearch={true} />
            </div>

            <div className="mt-20px"/>
            <GameDetails />

            <div className="flex w-full justify-center mt-54px mb-60px">
                <Pagination page={page} setPage={setPage}/>   
            </div>

        </div>
    )
}

export default WinDrawLose
