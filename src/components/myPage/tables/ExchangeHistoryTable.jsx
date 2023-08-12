import React from 'react'
import '../RadioButton.css'

const ExchangeHistoryTable = ({
    checkedState,
    setCheckedState
}) => {

    const RadioButton =({id}) => (
        <input 
            className="radio" 
            type="checkbox" 
            name="radio" 
            checked={checkedState[id]}
            onChange={() => handleOnChange(id)}
        />
    )

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    }; 

  return (
      <div
       style={{ background: "linear-gradient(to top, #ededeb, #cb78e6)" }}
        className="rounded-10px shadow-table overflow-hidden p-px">
        <table className="rounded-10px overflow-hidden">
        <thead className="text-14px tracking-tight h-55px border-b"
          style={{ background: "linear-gradient(to right, #9d3bbb, #5423a0)" , color:"#eeeeee",borderColor:"#dddddd"}}>
            <tr>
              <td style={{width:"132px"}} className="text-center pl-3px">선택</td>
              <td style={{width:"242px"}} className="text-center">신청일시</td>
              <td style={{width:"268px"}} className="text-center">환전금액</td>
              <td style={{width:"170px"}} className="text-center">처리일시</td>
              <td style={{width:"170px"}} className="text-center pl-12px">처리상태</td>
            </tr>
          </thead>
            <tbody className="w-full text-r666666 text-14px tracking-tight">
              <tr  className="text-14px tracking-tight text-r666666 h-56px w-full border-b"
                style={{background:'#fff',borderColor:"#dddddd"}}>
                <td style={{width:"132px"}} className="font-robotoRegular h-56px text-center pl-2px pt-7px"><RadioButton id={0}/></td>
                <td style={{width:"242px"}} className="h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                <td style={{width:"268px"}} className="h-56px text-right pr-70px font-robotoRegular">12,000</td>
                <td style={{width:"242px"}} className="h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                <td style={{width:"157px",color:'#33a1e9'}} className="h-56px text-center  pl-12px">완료</td>
              </tr>
              <tr className="text-14px tracking-tight text-r666666 h-56px border-b"
          style={{background:'#f7f7f7',borderColor:"#dddddd"}}>
                <td style={{width:"132px"}} className="font-robotoRegular h-56px text-center pl-2px pt-7px"><RadioButton id={1}/></td>
                <td style={{width:"242px"}} className="h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                <td style={{width:"268px"}} className="h-56px text-right pr-70px font-robotoRegular">100,000</td>
                <td style={{width:"242px"}} className="h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                <td style={{width:"157px"}} className="h-56px text-center pl-12px">취소</td>
              </tr>
              <tr className="text-14px tracking-tight text-r666666 h-56px w-full"
                style={{background:'#fff'}}>
                <td style={{width:"132px"}} className="font-robotoRegular h-56px text-center pl-2px pt-7px"><RadioButton id={2}/></td>
                <td style={{width:"242px"}} className="h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                <td style={{width:"268px"}} className="h-56px text-right pr-70px font-robotoRegular">50,000</td>
                <td style={{width:"242px"}} className="h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                <td style={{width:"157px",color:'#33a1e9'}} className="h-56px text-center pl-12px">완료</td>
              </tr>
            </tbody>
        </table>
      </div>
    )
}

export default ExchangeHistoryTable
