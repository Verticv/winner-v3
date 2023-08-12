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
                        <div className="ml-21px h-21px flex items-center space-x-20px mt-px">
                            <div style={{backgroundColor:"#ebabff"}} className="h-11px w-px mt-px" />
                            <div className="font-medium tracking-tight text-eeeeee space-x-px" style={{letterSpacing:'-0.1em'}}>
                                <span>{couponText}</span>
                                <span style={{color: "#ff6ea3"}} className="font-bold">{couponCount}</span>
                                <span>장</span>
                            </div>
                        </div>
                    </>
                )}
                {pointsFor && (
                    <div className="ml-22px h-21px flex items-center space-x-20px mt-2px">
                        <div style={{backgroundColor:"#ebabff"}} className="h-11px  w-px mt-px" />
                        <div className="font-medium text-eeeeee space-x-2px flex">
                            <span className="font-bold truncate" style={{maxWidth:'645px',color:'#ffd98b'}}>{pointsFor}</span>
                            <span style={{letterSpacing:'-0.1em'}}>{isTransaction ? "님의 포인트전환 정보입니다." : "님의 포인트적립 정보입니다."}</span>
                        </div>
                    </div>
                )}
                {inboxCount && (
                    <div className="ml-21px h-21px flex items-center space-x-19px mt-2px">
                        <div style={{backgroundColor:"#ebabff"}} className="h-11px w-px mt-px" />
                        <div className=" text-eeeeee" style={{letterSpacing:'-0.1em'}}>
                            <span>전체 받은 쪽지 : </span>
                            <span
                                className="font-bold ml-3px"
                                style={{ color: '#ff6ea3' }}>
                                {inboxCount}
                            </span>
                            <span className="">건</span>
                        </div>
                    </div>
                )}
            </div>
            {inboxCount && (
                <div className="ml-20px h-21px flex items-center space-x-20px flex-shrink-0 mt-2px mr-px">
                    <div className=" text-eeeeee" style={{letterSpacing:'-0.1em'}}>
                        <span className="">쪽지 보관은 최장</span>
                        <span className="font-bold ml-4px" style={{color:'#ffd98b'}}>14</span>
                        <span className="">일</span>
                        <span className="ml-2px">최대</span>
                        <span className="font-bold ml-4px" style={{color:'#ffd98b'}}>20</span>
                        <span className="">개입니다.</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MyPageTitle
