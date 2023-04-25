import React from 'react'
import FishingBanner from '../../images/gameBanner/fishing_game_banner.png'
import './GameBanners.css'

const FishingGameBanner = () => {

    return (
        <div style={{ height: '387px' }} className="angled-gradient relative group flex w-full border border-gray-afafaf justify-end rounded-lg shadow-plain1 transition cursor-pointer overflow-hidden" >
            <img className="z-20 object-none" src={FishingBanner} alt="game_banner" />
            <div style={{width:'242px', height:'74px'}} className={`absolute left-0 bottom-0 ml-80px mb-36px rounded-full flex items-center justify-center text-white font-spoqaBold text-30px bg-blue-r3384ca group-hover:shadow-plain3`}>게임시작</div>
        </div>
    )
}

export default FishingGameBanner
