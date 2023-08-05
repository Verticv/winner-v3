import React from 'react'
import '../RadioButton.css'
import FootballIcon from '../../../images/myPage/betHistory/football.png'
import USFlagIcon from '../../../images/myPage/betHistory/us_flag.png'
import UKFlagIcon from '../../../images/myPage/betHistory/uk_flag_rec.png'
import SpainFlagIcon from '../../../images/myPage/betHistory/spain_flag.png'
import ClockIcon from '../../../images/myPage/betHistory/clock.png'
import UpIcon from '../../../images/myPage/betHistory/UP.png'
import DownIcon from '../../../images/myPage/betHistory/DOWN.png'

const SportsBetHistoryPanel = ({
    id = 0,
    type = 0,
    time = "2021-06-29 15:45",
    amount = "5,000원",
    ratio = "4.34",
    predictedPrice = "21,715원",
    winAmount = "0",
    ticketNumber = "1891241599",
    checkedState = null,
    setCheckedState = null,
    setPopupOpen = null,
    isPopup = false,
    isAttached = false,
    setAttachedArray = null,
    attachedArray = null,
    noButtons = false,
    width = '',
    isFullPage = false
}) => {

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    }; 

    const addEntryClick = () => {
        setAttachedArray(oldArray => [...oldArray, id]);
    };

    const handleRemoveItem = (id) => {
        setAttachedArray(attachedArray.filter(item => item !== id));
    };
    
    const CardContent = ({
        bet, 
        result, 
        choice, 
        score, 
        team1, 
        team2, 
        stat1, 
        stat2, 
        stat3,
        hasUp = false,
        hasDown = false
    }) => (
        <div className="flex items-center w-full h-54px" style={{background:'#f7f7f7'}}>
        <div
          style={{ width: isAttached ? "127px" : "120px", marginLeft: isAttached ? "16px" : "0px",  letterSpacing:"-0.06rem" }}
          className="-space-y-4px flex flex-col items-center justify-center h-54px text-14px text-r666666 pr-2px">
          <span>승무패</span> 
          <span>(연장포함)</span>
        </div>
        <div className="flex space-x-2px -mr-3px mt-px">
          <button 
            style={{
              width: isAttached ? "365px" : "286px",
              textShadow: bet === "left" ? "1px 1px 1px #00000070" : "",
                borderColor: bet === "left" ? "#5523a0" : "#bbbbbb",
                        background: bet === "left" ? "linear-gradient(to top, #5423a0, #9d3bbb )" : "#fff",
            boxShadow: "0 1px 1px rgba(0,0,0,0.5)",
            borderRadius:'5px'
            }} 
              className="flex items-center justify-center h-36px p-px border"
            >
            <div 
              style={{width: isAttached ? "363px" : "283px"}}
                className={` 
                ${
                    bet === "left" 
                    ? "text-white" 
                    : "text-r666666"} 
                flex items-center justify-between h-34px rounded-3px cursor-pointer px-9px pt-px`
              }>
                <span style={{ width: isAttached ? '290px' : hasUp ? '210px' : '223px' }}
                    className={`truncate text-left tracking-tight text-14px overflow-ellipsis pb-px`}>{team1}</span>
                <div className="flex items-center space-x-5px">
                    {hasUp && <img className="object-none" src={UpIcon} alt="" /> }
                    <span className="font-roboto tracking-tight text-14px pb-px">{stat1}</span>
                </div>
            </div>
          </button>

            <button
                style={{textShadow: bet === "middle" ? "1px 1px 1px #00000070" : "",background: '#fff', borderColor: '#bbbbbb',boxShadow: "0 1px 1px rgba(0,0,0,0.5)", borderRadius:'5px'}} 
                className={`flex group items-center justify-center w-83px h-36px p-px border`}
            >
                <div style={{width:'81px'}} className={`${
                    bet === "middle" 
                    ? "text-r666666" 
                    : "text-r666666"}
                 pt-px flex items-center justify-center h-34px rounded-3px cursor-pointer`}
                >
                    <span className="font-roboto tracking-tight text-14px pb-px">{stat2}</span>
                </div>
            </button>

              <button style={{
                width: isAttached ? "365px" : "286px",
                    borderColor: bet === "right" ? "#5523a0" : "#bbbbbb",
                    background: bet === "right" ? "linear-gradient(to top, #5423a0, #9d3bbb )" : "#fff",
                    boxShadow: "0 1px 1px rgba(0,0,0,0.5)",
                 textShadow: bet === "right" ? "1px 1px 1px #00000070" : "",
                 borderRadius:'5px'
              }} className={`flex group items-center justify-between h-36px p-px border`}>
                <div
               
                className={`${
                    bet === "right" 
                    ? "text-white" 
                    : "text-r666666"} 
                    w-full pt-px flex items-center justify-between h-34px rounded-3px px-9px cursor-pointer`}
                >
                    <div className="flex items-center space-x-5px">
                      <span className="font-roboto tracking-tight text-14px pb-px">{stat3}</span>
                        {hasDown && <img className="object-none" src={DownIcon} alt="" /> }
                    </div>
                        <span style={{ width: isAttached ? '290px' : hasDown ? '210px' : '223px' }}
                            className={`truncate  tracking-tight text-14px text-right overflow-ellipsis pb-px`}>{team2}</span>
                </div>
            </button>
        </div>

        <div className="flex ml-10px  tracking-tight text-14px text-center">
            <div style={{width: isAttached ? "90px" : "99px"}} className="font-roboto text-r666666">{score}</div>
            <div style={{width: isAttached ? "59px" : '61px'}} className="text-r666666">{choice === "home" ? "홈팀 승" : "원정팀 승"}</div>
            <div 
            style={{marginRight:isAttached && "5px",WebkitTextStroke:"0.2px",color:result === "win"?'#f04281':result === "lose"?'#666666':result === "cancel"?'#33a1e9':'#666666'}}
            className={`
                
                ${
                    isPopup ? "w-63px" : "w-70px"
                }
                `}
            >{
                result === "win" 
                ? "승" 
                : result === "lose" 
                ? "패" 
                : result === "cancel" 
                ? "취소" 
                : "결과없음"}</div>
        </div> 
        </div>
    )


    const Cards0 = ({bet = "right"}) => (
        <div className="w-full rounded-4px overflow-hidden shadow-panel border-2" style={{borderColor:'#6852a7',overflow:'inherit'}}>
            <div className={`flex items-center justify-between h-54px w-full ${isFullPage ? 'px-20px' : ' pl-17px pr-18px'}`} style={{ background: '#6852a7' }}>
                <div className="flex items-center -mt-3px">
                    <img src={FootballIcon} alt="" className='ml-px'/>
                    <span className="ml-6px text-20px text-white truncate"
                        style={{
                            maxWidth: width === 'full' || isFullPage ? '910px' : '736px',
                            letterSpacing:"-0.11rem"
                        }}>축구 / 미국 - 메이저리그사커</span>
                </div>
                <div className="flex items-center -mt-3px">
                    <img src={ClockIcon} alt=""/>
                    <span className="ml-6px text-16px text-white" style={{letterSpacing:"0.02rem"}}>
                        2021-06-29 15:45
                    </span>
                    <img className="ml-10px" src={USFlagIcon} alt="" />
                </div>
            </div>
            <div className="flex flex-col w-full " style={{background:'#fff'}}>
                <CardContent 
                    bet={bet} 
                    result="cancel" 
                    choice="away" 
                    score="4 : 4"
                    team1="CF파추카"
                    team2="과달하라 차바스"
                    stat1="2.26"
                    stat2="2.96"
                    stat3="3.47"
                />
            </div>
        </div>
    )

    const Cards1 = ({hasUp = true, hasDown = true}) => (
        <div className="w-full rounded-4px overflow-hidden shadow-panel border-2" style={{borderColor:'#6852a7',overflow:'inherit'}}>
            <div className={`flex items-center justify-between h-54px w-full ${isFullPage ? 'px-20px' : ' pl-17px pr-18px'}`} style={{ background: '#6852a7' }}>
                <div className="flex items-center -mt-3px">
                    <img src={FootballIcon} alt="" className='ml-px'/>
                    
                    <span className="ml-6px  text-20px text-white truncate"
                        style={{ maxWidth: width === 'full' || isFullPage ? '910px' : '736px', letterSpacing:"-0.11rem"}}>축구 / 잉글랜드 - 프리미어리그</span>
                </div>
                <div className="flex items-center">
                    <img src={ClockIcon} alt="" className='-mt-2px'/>
                    <span className="ml-6px text-16px text-white" style={{letterSpacing:"0.02rem"}}>
                        2021-06-29 15:45
                    </span>
                    <img className="ml-10px" src={UKFlagIcon} alt="" />
                </div>
            </div>
            <div className="flex flex-col w-full bg-gray-fefefe border-gray-dddddd" style={{background:'#323231'}}>
                <CardContent 
                    bet="left" 
                    result="win" 
                    choice="home" 
                    score="5 : 2"
                    team1="맨유"
                    team2="첼시"
                    stat1="2.95"
                    stat2="4.62"
                    stat3="1.39"
          />
          <div className=" w-full  border-t border-gray-252525">
                <CardContent 
                    bet="right" 
                    result="win" 
                    choice="away"
                    score="0 : 3"
                    team1="아스널"
                    team2="맨시티"
                    stat1="2.95"
                    stat2="3.32"
                    stat3="2.50"
                    hasDown={hasDown}
                    hasUp={hasUp}
            />
            </div>

            </div>
        </div>
    )

    const Cards2 = () => (
        <div className="w-full rounded-4px overflow-hidden shadow-panel border-2" style={{borderColor:'#6852a7',overflow:'inherit'}}>
            <div className={`flex items-center justify-between h-54px w-full ${isFullPage ? 'px-20px' : ' pl-17px pr-18px'}`} style={{ background: '#6852a7' }}>
                <div className="flex items-center -mt-3px">
                    <img src={FootballIcon} alt="" className='ml-px'/>
                    <span className="ml-6px  text-20px  text-white truncate"
                        style={{ maxWidth: width === 'full' || isFullPage ? '910px' : '736px' ,letterSpacing:"-0.11rem"}}>축구 / 잉글랜드 - 프리미어리그</span>
                </div>
                <div className="flex items-center">
                    <img src={ClockIcon} alt=""  className='-mt-2px'/>
                    <span className="ml-6px text-16px text-white" style={{letterSpacing:"0.02rem"}}>
                        2021-06-29 15:45
                    </span>
                    <img className="ml-10px" src={UKFlagIcon} alt="" />
                </div>
            </div>
            <div className="flex flex-col w-full bg-gray-fefefe border-gray-dddddd">
                <CardContent 
                    bet="left" 
                    result="win" 
                    choice="home" 
                    score="5 : 2"
                    team1="맨유"
                    team2="첼시"
                    stat1="2.95"
                    stat2="4.62"
                    stat3="1.39"
                />
            </div>
        </div>
    )

    const Cards3 = () => (
        <div className="w-full rounded-4px overflow-hidden shadow-panel border-2" style={{borderColor:'#6852a7',overflow:'inherit'}}>
            <div className={`flex items-center justify-between h-54px w-full ${isFullPage ? 'px-20px' : ' pl-17px pr-18px'}`} style={{ background: '#6852a7' }}>
                <div className="flex items-center -mt-3px">
                    <img src={FootballIcon} alt="" className='ml-px'/>
                    <span className="ml-6px  text-20px text-white truncate"
                        style={{ maxWidth: width === 'full' || isFullPage ? '910px' : '736px', letterSpacing:"-0.11rem" }}>축구 / 스페인 - 라리가</span>
                </div>
                <div className="flex items-center">
                    <img src={ClockIcon} alt="" className='-mt-2px'/>
                    <span className="ml-6px text-16px text-white" style={{letterSpacing:"0.02rem"}}>
                        2021-06-29 15:45
                    </span>
                    <img className="ml-10px" src={SpainFlagIcon} alt="" />
                </div>
            </div>
            <div className="flex flex-col w-full bg-gray-fefefe border-gray-dddddd">
                <CardContent 
                    bet="left" 
                    result="lose" 
                    choice="away" 
                    score="1 : 2"
                    team1="바르셀로나"
                    team2="레알마드리드"
                    stat1="1.80"
                    stat2="3.32"
                    stat3="1.90"
                />
            </div>
        </div>
    )




  return (
    <div className="w-full shadow-table p-px rounded-10px"
      style={{ background: 'linear-gradient(to top, #ededeb, #cb78e6)' }}>
        <div className="w-full bg-white rounded-10px pb-10px overflow-hidden">
            <div className="flex h-54px w-full  text-14px text-white tracking-tighter"
            style={{ background: 'linear-gradient(to right, #9d3bbb, #5423a0)'}}>
                <div
                    style={{ width: isAttached === true ? isFullPage ? "160px" : "162px" : "120px", marginLeft: width === 'full' ? "" : isFullPage ? "0" : "8px" }}
                    className="h-full flex items-center justify-center mb-px tracking-tightest">
                      베팅구분
                </div>
                <div style={{width: isAttached === true ? isFullPage? "312px":"315px" : "286px"}} className="h-full flex items-center justify-center mb-px">승(홈)</div>
                <div style={{width: isAttached === true ? "139px" : "83px"}} className="h-full flex items-center justify-center mb-px pl-3px">무</div>
                <div style={{width: isAttached === true ? "317px" : "286px"}} className="h-full flex items-center justify-center mb-px pl-9px">패(원정)</div>
                <div style={{width: isAttached === true ? isFullPage? "90px":"85px" : "99px", paddingLeft:  isPopup ? '9px':!isAttached ? '7px':isFullPage?'4px':'5px' ,marginLeft:  isAttached === true ? isFullPage ?"32px":"40px" : "10px"}} className="h-full flex items-center justify-center mb-px">스코어</div>
                <div style={{width: isAttached === true ? "66px" : "61px"}} className="h-full flex items-center justify-center mb-px">선택</div>
                <div style={{width: isAttached === true ? "58px" : "70px", marginRight:  isAttached === true ? isFullPage ?"20px":"25px" : "6px"}} className="h-full flex items-center justify-center mb-px pl-5px">결과</div> 
            </div>

            <div className="w-full px-8px pr-10px space-y-10px mt-8px">
                {type === 0 
                ? <Cards0 />
                : type === 1 
                ? <Cards1 />
                : type === 2 
                ? <><Cards2 /><Cards3 /></>
                : type === 3
                ? <><Cards0 bet="middle" /><Cards1 hasDown={false} hasUp={false} /></>
                : type === 4 
                ? <Cards0 bet="middle" />
                : <></>
                }
                </div>
            
            <div className={`flex justify-between w-full px-8px ${isPopup ? 'mt-11px' : 'mt-10px'} space-x-10px`}>
                <table>
                    <div style={{backgroundColor: '#eeeeee'}} className={`${isPopup && "pt-px"} flex w-full h-36px rounded-4px bg-dark-252525 text-14px tracking-tightest text-r666666 overflow-hidden`}>
                        {(isAttached === false) && (
                            <div style={{backgroundColor: '#eeeeee', width:'45px'}} className="h-full flex items-center justify-center">선택</div>
                        )}
                        {(isAttached === false && isPopup === false) && (
                            <div style={{width:'116px'}} className="h-full flex items-center justify-center border-l border-white">베팅번호</div>
                        )}
                        <div style={{width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "131px" : "130px"}} className="h-full flex items-center justify-center border-l border-white">베팅시간</div>
                        <div style={{width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "131px" : "130px"}} className="h-full flex items-center justify-center border-l border-white">베팅금액</div>
                        <div style={{width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "98px" : "97px" }} className="h-full flex items-center justify-center border-l border-white">배당률</div>
                        <div style={{width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "131px" : "165px"}} className="h-full flex items-center justify-center border-l border-white">예상적중금액</div>
                        <div style={{width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "129px" : "179px"}} className="h-full flex items-center justify-center border-l border-white">당첨금</div>
                        
                    </div>
                    <div className={`flex w-auto h-36px  text-14px tracking-tight text-r666666 ${isPopup && "pt-2px"}`}>
                        {(isAttached === false) && checkedState && (
                            <div style={{width:'45px'}} className="h-full flex items-center justify-center">
                                <input 
                                    className="radio" 
                                    type="checkbox" 
                                    name="radio" 
                                    checked={checkedState[type]}
                                    onChange={() => handleOnChange(type)}
                                />
                            </div>
                        )}
                        {(isAttached === false && isPopup === false) && (
                            <div style={{width:'116px'}} className="h-full flex items-center justify-center ">{ticketNumber}</div>
                        )}
                        <div style={{width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "131px" : "151px"}} className="h-full flex items-center justify-center ">{time}</div>
                        <div style={{width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "131px" : "150px"}} className="h-full flex items-center justify-end  pr-5px">{amount}</div>
                        <div style={{width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "98px" : "178px"}} className="h-full flex items-center justify-center ">{ratio}</div>
                        <div style={{width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "131px" : "165px"}} className="h-full flex items-center justify-end  pr-5px">{predictedPrice}</div>
                        <div style={{WebkitTextStroke:winAmount.includes("+") &&"0.2px",width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "128px" : "200px"}} className="h-full flex items-center justify-end  pr-2px"><p style={{color: winAmount.includes("+") && "#f04281"}}>{winAmount}</p><p style={{WebkitTextStroke:"0px"}}>원</p></div>
                    </div>
                </table>
                
                <div className="flex space-x-6px pr-3px">
                    {isAttached === false && (
                        <button 
                            onClick={() => {
                                setPopupOpen && setPopupOpen(false)
                                setAttachedArray && addEntryClick()
                            }} 
                            style={{width:'110px',background:'#8458cd'}}
                            className="flex items-center justify-center h-73px rounded-8px hover:brightness-125 filter shadow-panelBtn" 
                        >
                            <div style={{width:'110px',height:'71px'}} className="pt-px flex items-center justify-center rounded-8px cursor-pointer">
                                <span className=" tracking-tightest text-14px text-white text-shadow-5">내역올리기</span>
                            </div>
                        </button>
                    )}
                    
                    {(isPopup === false && noButtons === false) && (
                        <button style={{width:'110px',background:'#646eb6'}} onClick={() => setAttachedArray && handleRemoveItem(id) } className="flex items-center justify-center h-73px rounded-8px bg-gradient-to-t  hover:brightness-125 filter shadow-panelBtn">
                            <div style={{width:'110px',height:'71px'}} className="pt-px flex items-center justify-center rounded-8px bg-gradient-to-b from-red-e06446  to-red-96341d cursor-pointer">
                                <span className="tracking-tightest text-14px text-white text-shadow-5">내역삭제</span>
                            </div>
                        </button>
                    )}
                </div>
            </div>
        </div>
    </div>
    )
}

export default SportsBetHistoryPanel

