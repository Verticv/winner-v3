import PopupControls from 'components/popups/PopupControls';
import React from 'react'
import LiveCasinoHistoryDetailPopup from '../popups/LiveCasinoHistoryDetailPopup';

const AllHistoryTable = ({array, checkedState, setCheckedState, isPopupOpen, setPopupOpen}) => {

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
            <div className={`font-spoqa text-14px tracking-tight text-r666666 h-56px w-full flex items-center border-b last:border-b-0`} style={{background: index%2===0? '#fff':'#f7f7f7',borderColor:"#dddddd"}}>
                <div style={{width: "92px"}} className="text-center flex justify-center items-center">
                    <input
                        type="checkbox"
                        checked={checkedState[item.id]}
                        onChange={() => handleOnChange(item.id)}
                    />
                </div>
                <div style={{width: "72px"}} className="font-robotoRegular text-center">{item.number}</div>
                <div style={{width: "185px"}} className="font-robotoRegular text-center">{item.time}</div>
                <div style={{width: "140px"}} className="text-center truncate px-10px">{item.type}</div>
                <div style={{width: "118px"}} className="text-center truncate">{item.name}</div>
                <div style={{width: "135px"}} className="font-robotoRegular text-right">{item.amount}</div>
                <div style={{width: "135px", color: item.profit.includes("+") ? "#e9441d" : "#666666"}} className="font-robotoRegular text-right">{item.profit}</div>
                <div style={{width: "51px", color: item.status === "승" ? "#f04281" : "#666666"}} className="text-center">{item.status}</div>
                <div style={{width: "110px"}} className="text-center">
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
            <div className="font-spoqaMedium text-14px tracking-tight h-55px flex items-center border-b "
            style={{ background: "linear-gradient(to right, #9d3bbb, #5423a0)" , color:"#eeeeee",borderColor:"#dddddd"}}>
                {/* <tr className='h-full'> */}
                    <div style={{width: "92px"}} className="text-center">선택</div>
                    <div style={{width: "72px"}} className="text-center">베팅번호</div>
                    <div style={{width: "185px"}} className="text-center">베팅시간</div>
                    <div style={{width: "140px"}} className="text-center">게임종류</div>
                    <div style={{width: "118px"}} className="text-center">게임구분</div>
                    <div style={{width: "135px"}} className="text-center">베팅금액</div>
                    <div style={{width: "135px"}} className="text-center">적중/손실금액</div>
                    <div style={{width: "51px"}} className="text-center">상태</div>
                    <div style={{width: "110px"}} className="text-center">보기</div>
                {/* </tr> */}
            </div>
            <div className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <Cells items={array} />
            </div>
      </div>  
    </div>      
    )
}

export default AllHistoryTable
