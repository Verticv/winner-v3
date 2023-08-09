import PopupControls from 'components/popups/PopupControls';
import React from 'react'
import LiveCasinoHistoryDetailPopup from '../popups/LiveCasinoHistoryDetailPopup';

const MinigameBetHistoryPowerballTable = ({array, checkedState, setCheckedState, isPopupOpen, setPopupOpen}) => {

    function Cells({ items }) {

        const detailButton = (
            <button 
                style={{height:"29px", width: "73px",background: '#5d659f',boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.6)',color:'#ededeb'}} 
                className="rounded-4px font-spoqaMedium text-14px tracking-tight pt-2px flex-shrink-0 hover:filter hover:brightness-125"
            >
                상세보기
            </button>
        ) 

        const handleOnChange = (position) => {
            const updatedCheckedState = checkedState.map((item, index) =>
              index === position ? !item : item
            );
            setCheckedState(updatedCheckedState);
        }; 

        return items.map((item,index) => (
            <div className={` r666666 font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px w-full  flex items-center border-b last:border-b-0`}
            style={{background: index%2===0? '#fff':'#f7f7f7',borderColor:"#dddddd"}}>
                <div style={{width: "51px"}} className="ml-20px text-center h-full flex justify-center items-center">
                    <input
                        type="checkbox"
                        checked={checkedState[item.id]}
                        onChange={() => handleOnChange(item.id)}
                    />
                </div>
                <div style={{width: "86px"}} className="font-robotoRegular text-center">{item.number}</div>
                <div style={{width: "160px"}} className="font-robotoRegular text-center">{item.time}</div>
                <div style={{width: "168px"}} className="text-center">{item.name}</div>
                <div style={{width: "84px"}} className="text-center">{item.history}</div>
                <div style={{width: "108px"}} className="font-robotoRegular text-right">{item.amount}</div>
                <div style={{width: "79px"}} className="text-center">{item.percentage}</div>
                <div style={{width: "123px",  WebkitTextStroke:"0.2px",color: item.profit.includes("+") ? "#e9441d" : "#666666"}} className="font-robotoRegular text-right">{item.profit}</div>
                <div style={{width: "80px",  WebkitTextStroke:"0.2px",color: item.status === "승" ? "#f04281" : "#666666"}} className="text-center">{item.status}</div>
                <div style={{width: "90px"}} className="text-center pr-18px">
                    <PopupControls buttonChild={detailButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                        <LiveCasinoHistoryDetailPopup setPopupOpen={setPopupOpen} />
                    </PopupControls> 
                </div>
            </div>
        ))
    }

    return (
      <div
        style={{ background: "linear-gradient(to top, #ededeb, #cb78e6)" }}
        className="rounded-10px shadow-table overflow-hidden p-px">
        <div className="rounded-10px overflow-hidden">
           <div style={{height:"55px",background: "linear-gradient(to right, #9d3bbb, #5423a0)" , color:"#eeeeee",borderColor:"#dddddd"}} className="font-spoqaMedium text-14px tracking-tight  flex items-center pt-px border-b">
                <div style={{width: "51px"}} className="ml-20px text-center">선택</div>
                <div style={{width: "86px"}} className="text-center">베팅번호</div>
                <div style={{width: "160px"}} className="text-center">베팅시간</div>
                <div style={{width: "168px"}} className="text-center">게임구분</div>
                <div style={{width: "84px"}} className="text-center">베팅내역</div>
                <div style={{width: "108px"}} className="text-center">베팅금액</div>
                <div style={{width: "79px"}} className="text-center">배당률</div>
                <div style={{width: "123px"}} className="text-center">적중/손실금액</div>
                <div style={{width: "80px"}} className="text-center">상태</div>
                <div style={{width: "90px"}} className="text-center pr-18px">보기</div>
            </div>
            <div className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <Cells items={array} />
            </div>
        </div>  
      </div>        
    )
}

export default MinigameBetHistoryPowerballTable
