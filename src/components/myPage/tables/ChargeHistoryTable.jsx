import React from 'react'
import '../RadioButton.css'

const ChargeHistoryTable = ({
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
        style={{ background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}
        className="rounded-4px shadow-table overflow-hidden p-px">
        <table className="rounded-3px overflow-hidden">
          <thead className="font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6 h-56px border-b border-dark-252525 bg-dark-2e2e2e">
              <tr>
                  <td style={{width:'132px'}} className="text-center flex-shrink-0">선택</td>
                  <td style={{width:'181px'}} className="text-center">신청일시</td>
                  <td style={{width:'188px'}} className="text-center">충전금액</td>
                  <td style={{width:'205px'}} className="text-center">보너스금액</td>
                  <td style={{width:'180px'}} className="text-center">처리일시</td>
                  <td style={{width:'157px'}} className="text-center">처리상태</td>
              </tr>
          </thead>
          <tbody className="w-full text-585858 text-14px tracking-tight font-spoqa">
            <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px w-full border-b border-dark-252525 bg-dark-323232">
              <td style={{width:'132px'}} className="font-robotoRegular h-56px text-center flex-shrink-0 pt-7px"><RadioButton id={0}/></td>
              <td style={{width:'181px'}} className="h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
              <td style={{width:'188px'}} className="h-56px text-right pr-34px font-robotoRegular">12,000</td>
              <td style={{width:'205px'}} className="h-56px text-right pr-34px text-red-e65454 font-robotoRegular">+1,000</td>
              <td style={{width:'180px'}} className="h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
              <td style={{width:'157px'}} className="h-56px text-center text-blue-4c98ff">완료</td>
            </tr>
            <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px border-b border-dark-252525 bg-dark-2e2e2e">
              <td style={{width:'132px'}} className="font-robotoRegular h-56px text-center flex-shrink-0 pt-7px"><RadioButton id={1}/></td>
              <td style={{width:'181px'}} className="h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
              <td style={{width:'188px'}} className="h-56px text-right pr-34px font-robotoRegular">100,000</td>
              <td style={{width:'205px'}} className="h-56px text-right pr-34px text-red-e65454 font-robotoRegular">+1,000</td>
              <td style={{width:'180px'}} className="h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
              <td style={{width:'157px'}} className="h-56px text-center">취소</td>
            </tr>
            <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px w-full bg-dark-323232">
              <td style={{width:'132px'}} className="font-robotoRegular h-56px text-center flex-shrink-0 pt-7px"><RadioButton id={2}/></td>
              <td style={{width:'181px'}} className="h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
              <td style={{width:'188px'}} className="h-56px text-right pr-34px font-robotoRegular">50,000</td>
              <td style={{width:'205px'}} className="h-56px text-right pr-34px text-red-e65454 font-robotoRegular">+1,000</td>
              <td style={{width:'180px'}} className="h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
              <td style={{width:'157px'}} className="h-56px text-center text-blue-4c98ff">완료</td>
            </tr>
          </tbody>
      </table>
      
      </div>
    )
}

export default ChargeHistoryTable
