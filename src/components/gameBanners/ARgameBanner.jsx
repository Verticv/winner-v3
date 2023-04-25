import React from 'react'
import VirtualBanner from '../../images/gameBanner/virtual_game_banner.png'
import './GameBanners.css'

const ARgameBanner = () => {

    return (
        <div style={{ height: '387px' }} className="angled-gradient relative group flex w-full border border-gray-afafaf justify-end rounded-lg shadow-plain1 transition cursor-pointer overflow-hidden" >
            <img className="z-20 object-none" src={VirtualBanner} alt="game_banner" />
            <div style={{width:'242px', height:'74px'}} className={`absolute left-0 bottom-0 ml-80px mb-36px rounded-full flex items-center justify-center text-white font-spoqaBold text-30px bg-green-r7bd26a group-hover:shadow-plain3`}>게임시작</div>
        </div>
    )
}

export default ARgameBanner
