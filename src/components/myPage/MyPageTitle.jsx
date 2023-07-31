import React from 'react'

import TitleIcon from '../../images/title-icon.png'

const MyPageTitle = ({
    title, 
    couponCount = null,
    couponText ="사용 가능한 쿠폰 : ",
    pointsFor = null,
    inboxCount = null,
    isTransaction = false,
}) => {
    return (
        <div className="flex w-full justify-between">
            <div className="flex w-full">
                <img className="z-10 -ml-4px" src={TitleIcon} alt="" />
                <label className="font-bold text-22px ml-4px -mt-4px text-shadow-5 tracking-Stightest" style={{color:'#eeeeee'}} >{title}</label>
                {couponCount && (
                    <>
                        <div className="ml-20px h-21px flex items-center space-x-20px mt-2px">
                            <div style={{backgroundColor:"#4c4c4c"}} className="h-12px w-px bg-gray-r8c8c8c mb-px" />
                            <div className="font-medium tracking-Stightest text-gray-c8c8c8 space-x-2px">
                                <span>{couponText}</span>
                                <span style={{color: "#ed5454"}} className="font-bold">{couponCount}</span>
                                <span>장</span>
                            </div>
                        </div>
                    </>
                )}
                {pointsFor && (
                    <div className="ml-20px h-21px flex items-center space-x-20px mt-2px">
                        <div style={{backgroundColor:"#4c4c4c"}} className="h-12px w-px bg-gray-r8c8c8c mb-px" />
                        <div className="font-medium tracking-Stightest text-gray-c8c8c8 space-x-2px flex">
                            <span className="font-bold text-golden-aa9264 truncate" style={{maxWidth:'645px'}}>{pointsFor}</span>
                            <span>{isTransaction ? "님의 포인트전환 정보입니다." : "님의 포인트적립 정보입니다."}</span>
                        </div>
                    </div>
                )}
                {inboxCount && (
                    <div className="ml-18px h-21px flex items-center space-x-18px mt-2px">
                        <div style={{backgroundColor:"#4c4c4c"}} className="h-12px w-px mb-px" />
                        <div className="font-medium tracking-Stightest text-gray-c8c8c8">
                            <span className="">전체 받은 쪽지 : </span>
                            <span className="font-bold text-red-e65454 ml-3px">{inboxCount}</span>
                            <span className="">건</span>
                        </div>
                    </div>
                )}
            </div>
            {inboxCount && (
                <div className="ml-20px h-21px flex items-center space-x-20px flex-shrink-0 mt-2px">
                    <div className="font-medium tracking-Stightest text-gray-c8c8c8">
                        <span className="">쪽지 보관은 최장</span>
                        <span className="font-bold text-blue-4c98ff ml-3px">14</span>
                        <span className="">일</span>
                        <span className="ml-2px">최대</span>
                        <span className="font-bold text-blue-4c98ff ml-3px">20</span>
                        <span className="">개입니다.</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MyPageTitle
