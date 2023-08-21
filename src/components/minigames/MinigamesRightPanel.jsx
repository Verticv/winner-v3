import React, { useEffect, useState } from 'react'
import ClockIcon from '../../images/minigames/clock_gold.png'
import RefreshIcon from '../../images/minigames/refresh_icon.png'
import SelectionBg from '../../images/minigames/selection_bg.png'
import CheckIcon from '../../images/minigames/checkbox.png'
import BetIcon from '../../images/betCombination/bet_icon.png'
import LockIcon from '../../images/minigames/lock.png'
import BlueButton from '../../images/minigames/blue.png'
import RedButton from '../../images/minigames/red.png'
import YellowButton from '../../images/minigames/yellow_v2.png'
import GreenButton from '../../images/minigames/green_v2.png'
import BlueButtonSq from '../../images/minigames/blue_sq_v2.png'
import RedButtonSq from '../../images/minigames/red_sq_v2.png'
import { format } from 'date-fns'
import { ko } from "date-fns/locale"

const MinigamesRightPanel = ({
  selectedGame,
  selectedOption
}) => {

  const [inputValue, setInputValue] = useState(null)
  var nf = new Intl.NumberFormat();
  const [buttonClicked, setButtonClicked] = useState("")

  const BetAmountButton = ({amount}) => (
      <button 
          style={{
            width:"108px", 
            background: "linear-gradient(to top, #866bbe, #f0d3ff)",
            boxShadow:'0px 2px 3px 0px rgba(0, 0, 0, 0.6)'
          }} 
          className="flex items-center h-44px justify-center rounded-6px flex-shrink-0 p-px filter hover:brightness-125"
          onPointerDown={() => setButtonClicked(amount)}
          onPointerUp={() => {
              setInputValue(inputValue + amount)
              setButtonClicked(null)
          }}
          onPointerOut={() => setButtonClicked(null)}
      >
        <div 
          style={{
            width:"106px", 
            background:  buttonClicked === amount ? "linear-gradient(to top, #ccc4ff, #ffd9f5)" : "linear-gradient(to top, #ccc4ff, #ffd9f5)",
          }} 
            className="flex items-center justify-center h-42px rounded-6px cursor-pointer pt-px">
            <span className="font-roboto tracking-tight text-16px pt-px font-bold " style={{color:'#444444'}}>{nf.format(amount)}</span>
        </div>
      </button>
  )
  const BetFixedAmountButton = ({amount, text}) => (
      <button 
          style={{
              width:"108px",
              background: "linear-gradient(to top, #4f3a7a, #e597ff)",
              boxShadow:'0px 2px 3px 0px rgba(0, 0, 0, 0.6)'
          }} 
          className="flex items-center justify-center h-44px rounded-6px p-px flex-shrink-0   filter hover:brightness-125"
          onClick={() => setInputValue(amount)}
      >

          <div 
              style={{
                  width:"106px", 
                  background: "linear-gradient(to top, #6b22ff, #df52ff)",
              }} 
              className="flex items-center justify-center h-42px cursor-pointer rounded-6px pt-px">
              <span className="tracking-tight text-16px text-white font-bold">{text}</span>
          </div>
      </button>
  )

  const dateFormat = "MM월 dd일"
  const dateFormat1 = "H:mm:ss"

  const [time, setTime] = useState(Date.now());
    
  useEffect(() => {
      const interval = setInterval(() => setTime(Date.now()), 1000);
      return () => {
          clearInterval(interval);
      };
  }, []);

  return (
    <div 
        style={
        {
            width: "348px",
            height: "509px",
            background: "linear-gradient(to top, #4f3a7a, #cb78e6)",
            boxShadow: "0 0px 8px rgba(0, 0, 0, 0.5)"
        }}
        className="relative rounded-6px overflow-hidden p-px"
      >
      <div className="rounded-6px overflow-hidden flex flex-col bg-white">
        <div 
          style={{ height: "130px", background: '#eeeeee'}}
          className="border-b border-dddddd bg-eeeeee pb-5px space-y-8px"
        >
          <div 
            style={{
            background:'linear-gradient(to right, #9b3aba 0%, #8232b1 100%)'}} 
            className="h-51px w-full rounded-top-6px flex justify-between items-center p-px">
            <div className='h-full w-full rounded-4px flex justify-between items-center pr-6px'>
                <div className="flex flex-col pl-14px pr-5px space-y-5px mt-2px">
                    <div className="text-16px  tracking-tight text-eeeeee h-16px flex items-center">
                        {format(time, dateFormat, { locale : ko })} {format(time, dateFormat1, { locale : ko })} <p style={{color:"#ffd98b"}} className="ml-3px">[216회차]</p>
                    </div>
                    <div  className="flex space-x-4px text-18px font-bold tracking-tight h-18px items-center text-white">
                        <img className="object-none ml-px" src={ClockIcon} alt="" />
                        <p className='-mt-2px'>02:16</p>
                    </div>
                </div>
                <img src={RefreshIcon} alt="" className="mt-3px cursor-pointer hover:filter hover:brightness-125" />  
          </div>
        </div>

        <div style={{height: "62px"}} className="relative w-full rounded-sm flex justify-center items-center">
            <img className="absolute object-none z-10" src={SelectionBg} alt="" />
            <div style={{width:"122px"}} className="h-full z-20 flex items-center justify-start space-x-4px pt-1px pl-13px flex-shrink-0" >
              <img className="-mt-px" src={CheckIcon} alt="" />
              <p style={{color:"#5e399a"}} className="text-16px tracking-Stightest font-bold">게임선택</p>
            </div>
            <div style={{width:"107px"}} className=" flex h-full z-20 items-center justify-center pr-8px flex-col space-y-4px flex-shrink-0">
                {(selectedOption[0].type === "일반볼" || selectedOption[0].type === "파워볼") && (
                    <p  className="text-r666666 text-12px tracking-Stightest flex items-center h-12px">{selectedOption[0].type}</p>
                )}
                {(selectedOption[0].type === "일반볼" || selectedOption[0].type === "파워볼") ? (
                    <p style={{color:"#682aa7"}} className="text-14px tracking-Stightest font-bold flex items-center h-12px">{selectedOption[0].name}</p>
                ) :(
                    <p style={{color:"#682aa7"}} className="text-12px tracking-Stightest font-bold flex items-center h-12px">{selectedOption[0].name}</p>
                )}
            </div>
            <div style={{width:"97px"}} className="flex h-full z-20 items-center justify-center">
                {selectedOption[0].buttonType && (
                    <div 
                        style={{width:"59px", height:(selectedOption[0].buttonType === "blue_sq" || selectedOption[0].buttonType === "red_sq") ? "52px" : "52px"}} 
                        className="relative flex items-center justify-center cursor-pointer pt-2px pl-3px"
                    >
                        <img 
                            className={`${
                                (selectedOption[0].buttonType === "blue_sq" || selectedOption[0].buttonType === "red_sq") ? "h-59px" : "h-59px"
                            } w-full absolute object-none`} 
                            src={
                                selectedOption[0].buttonType === "blue" 
                                ? BlueButton
                                : selectedOption[0].buttonType === "red"
                                ? RedButton
                                : selectedOption[0].buttonType === "yellow"
                                ? YellowButton
                                : selectedOption[0].buttonType === "green"
                                ? GreenButton
                                : selectedOption[0].buttonType === "blue_sq"
                                ? BlueButtonSq
                                : RedButtonSq
                            } 
                            alt="" 
                        />
                        <div className="flex flex-col items-center -space-y-8px">
                            <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">{selectedOption[0].selection}</p>
                            {selectedOption[0].subtitle && (
                                <p style={{fontSize:"10px"}} className="z-20 font-spoqa text-white tracking-tight">
                                    {selectedOption[0].subtitle}
                                </p>
                            )}
                        </div> 
                        {selectedOption[0].tailSide && (
                            <div className={`${selectedOption[0].tailSide === "left" ? "left-0" : "right-0"} absolute w-22px h-22px rounded-full bg-black z-20 top-0 flex items-center justify-center`}>
                                <div className="text-white text-12px tracking-tight font-spoqaMedium">{selectedOption[0].tail}</div>
                            </div>
                        )}   
                    </div>
                )}
            </div>
        </div>

      </div>

        <div className="h-43px border-b border-dddddd flex items-center justify-between pl-14px pr-19px "
        style={{color:'#444444'}}>
            <p className="text-16px  tracking-tight pt-px font-bold">보유금액</p>
            <p className="text-16px font-bold tracking-tight"style={{color:'#33a1e9'}}>3,522,170</p>
        </div>
        <div className="h-43px border-b border-dddddd flex items-center justify-between pl-14px pr-19px"
        style={{color:'#444444'}}>
            <p className="text-16px  tracking-tight -mt-px font-bold">배당률</p>
            <p style={{color:"#e9441d"}} className="text-16px font-roboto tracking-tight font-bold">1.95</p>
        </div>
        <div className="h-43px border-b border-dddddd flex items-center justify-between pl-14px pr-13px"  style={{color:'#444444'}}>
            <p className="text-16px  tracking-tight -mt-px font-bold">베팅금액</p>

            <input 
                style={{color: "#f04281", width: "216px", height: "30px", backgroundColor: "#fff", borderColor:'#bbbbbb'}} 
                className="flex items-center justify-end px-5px border rounded-4px text-16px font-roboto tracking-tight text-right font-bold"
                placeholder="0"
                value={nf.format(inputValue)}
                onChange={e => setInputValue(e.target.value.replace(/,/g, ''))}
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                    }
                }}
            />
        </div>
        <div style={{height: "41px",color:'#444444'}}  className="h-41px border-b border-dddddd flex items-center justify-between pl-14px pr-19px" >
            <p className="text-16px f tracking-tight pt-px font-bold">적중금액</p>
            <p className="text-16px font-roboto tracking-tight font-bold" style={{color:'#33a1e9'}}>19,500</p>
        </div>
        
        <div style={{height:"208px",background: '#eeeeee'}} className="w-full p-7px pt-8px pl-8px">

            <div className="flex flex-col space-y-4px">
                <div className="flex space-x-4px">
                    <BetAmountButton amount={5000}/>
                    <BetAmountButton amount={10000}/>
                    <BetAmountButton amount={50000}/>
                </div>
                <div className="flex space-x-4px">
                    <BetAmountButton amount={100000}/>
                    <BetAmountButton amount={500000}/>
                    <BetAmountButton amount={1000000}/>
                </div>
                <div className="flex space-x-4px">
                    <BetFixedAmountButton amount={22170} text="잔돈" />
                    <BetFixedAmountButton amount={null} text="초기화" />
                    <BetFixedAmountButton amount={3522170} text="최대" />
                </div>
            </div>

            

            <button style={{width:"331px",background: "linear-gradient(to top, #921d5c, #ff85b1)",boxShadow:'0px 2px 3px 0px rgba(0, 0, 0, 0.6)'}} className="mt-6px flex items-center justify-center h-46px rounded-6px  p-px hover:filter hover:brightness-125">
                <div style={{width:"329px",background: "linear-gradient(to top, #911c5c, #f04281)",}} className="flex items-center justify-center h-44px rounded-6px cursor-pointer pt-px">
                    <img src={BetIcon} alt="" />
                    <span className="ml-2px tracking-tight text-16px text-white font-bold">베팅하기</span>
                </div>
            </button>

        </div>

        {(selectedGame === "/minigame/speedkino" || selectedGame === "/minigame/kinoladder") && (
            <div className="absolute w-full h-full bg-black bg-opacity-80 z-20 flex justify-center rounded-6px top-0 left-0" > 
                <div className="flex flex-col items-center justify-center">
                    <img className="object-none ml-3px" src={LockIcon} alt="" />
                    <div 
                        style={{textShadow: "2px 4px 4px #00000080"}} 
                        className="text-white  text-18px tracking-Stightest mt-20px"
                    >지금은 베팅할 수 없습니다.</div>
                </div>
            </div>
        )}
      </div>
    </div>
  )
}

export default MinigamesRightPanel
