import React from 'react'

const MoneyExchangeTable = () => {
  return (
      <div
         style={{ background: "linear-gradient(to top, #ededeb, #cb78e6)" }}
        className="rounded-10px shadow-table overflow-hidden p-px">
        <table  className="rounded-10px overflow-hidden">
              <thead className="text-14px tracking-tight text-white h-55px border-b "
              style={{ background: "linear-gradient(to right, #9d3bbb, #5423a0)" , color:"#eeeeee",borderColor:"#dddddd"}}>
                <tr>
                    <td style={{width: "258px"}} className="text-center flex-shrink-0">신청일시</td>
                    <td style={{width: "284px"}} className="text-center">환전금액</td>
                    <td style={{width: "247px"}} className="text-center">처리일시</td>
                    <td style={{width: "204px"}} className="text-center">처리상태</td>
                </tr>
            </thead>
            <tbody className="w-full text-r666666 text-14px tracking-tight">
                <tr className="bg-white text-14px tracking-tight h-56px w-full border-b border-dddddd">
                    <td style={{width: "258px"}} className="font-robotoRegular h-56px text-center flex-shrink-0">2021-06-29 15:45:41</td>
                    <td style={{width: "284px"}} className="h-56px text-right pr-100px font-robotoRegular">12,000</td>
                    <td style={{width: "247px"}} className="h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{width: "204px",color:'#33a1e9'}} className="h-56px text-center ">완료</td>
                </tr>
               <tr className="bg-gray-2e2e2e text-14px tracking-tight  h-56px w-full border-b border-dddddd" style={{ background: '#f7f7f7'}}>
                    <td style={{width: "258px"}} className="font-robotoRegular h-56px text-center flex-shrink-0">2021-06-29 15:45:41</td>
                    <td style={{width: "284px"}} className="h-56px text-right pr-100px font-robotoRegular">100,000</td>
                    <td style={{width: "247px"}} className="h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{width: "204px"}} className="h-56px text-center">취소</td>
                </tr>
                <tr className="bg-white text-14px tracking-tight h-56px w-full border-b border-dddddd">
                    <td style={{width: "258px"}} className="font-robotoRegular h-56px text-center flex-shrink-0">2021-06-29 15:45:41</td>
                    <td style={{width: "284px"}} className="h-56px text-right pr-100px font-robotoRegular">50,000</td>
                    <td style={{width: "247px"}} className="h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{width: "204px",color:'#33a1e9'}} className="h-56px text-center ">완료</td>
                </tr>
            
            </tbody>
      </table>
      </div>
    )
}

export default MoneyExchangeTable
