import React from 'react'
import EsportsBannerImage from '../../images/gameBanner/esports_banner.png'
import './GameBanners.css'

const EsportsBanner = () => {

    return (
        <div style={{ height: '387px' }} className="angled-gradient relative group flex w-full border border-gray-afafaf justify-end rounded-lg shadow-plain1 transition bg-gradient-to-br from-white via-white to-gray-500 cursor-pointer border border-gray-afafaf overflow-hidden" >
            <img className="z-20 object-none" src={EsportsBannerImage} alt="game_banner" />
            <div style={{width:'242px', height:'74px'}} className="absolute left-0 bottom-0 ml-80px mb-36px rounded-full flex items-center justify-center text-white font-spoqaBold text-30px bg-purple-a898ee group-hover:shadow-plain3">게임시작</div>
        </div>
    )
}

export default EsportsBanner
