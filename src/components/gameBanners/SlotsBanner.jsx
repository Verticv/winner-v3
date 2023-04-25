import React from 'react'
import SlotGameBanner from '../../images/gameBanner/slot_game_banner.png'
import './GameBanners.css'

const SlotsBanner = () => {

    return (
        <div style={{height:'387px'}} className="angled-gradient relative group flex w-full border border-gray-afafaf justify-end rounded-lg shadow-plain1 transition cursor-pointer border border-gray-afafaf overflow-hidden">
            <img className="object-none z-20" src={SlotGameBanner} alt="game_banner" />
            <div style={{width:'242px', height:'74px'}} className={`absolute left-0 bottom-0 ml-80px mb-36px rounded-full flex items-center justify-center text-white font-spoqaBold text-30px bg-green-r7bd26a group-hover:shadow-plain3`}>게임시작</div>
        </div>
    )
}

export default SlotsBanner
