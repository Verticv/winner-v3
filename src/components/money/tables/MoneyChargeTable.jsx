import React from 'react'

const MoneyChargeTable = () => {
  return (
      <div
       style={{ background: "linear-gradient(to top, #ededeb, #cb78e6)" }}
        className="rounded-10px shadow-table overflow-hidden p-px">
        <table className="rounded-10px overflow-hidden">
              <thead className="text-14px tracking-slight text-white h-54px border-b font-semibold"
              style={{ background: "linear-gradient(to right, #9d3bbb, #5423a0)" , color:"#eeeeee",borderColor:"#dddddd"}}>
                <tr>
                    <td style={{width: "245px"}} className="text-center flex-shrink-0">신청일시</td>
                    <td style={{width: "183px"}} className="text-center">충전금액</td>
                    <td style={{width: "200px"}} className="text-center">보너스금액</td>
                    <td style={{width: "204px"}} className="text-center">처리일시</td>
                    <td style={{width: "210px"}} className="text-center">처리상태</td>
                </tr>
            </thead>
            <tbody className="w-full text-r444444 text-14px tracking-slight">
                <tr className="bg-white text-14px tracking-slight h-56px w-full border-b border-dddddd">
                    <td style={{width: "245px"}} className="font-robotoRegular h-56px text-center flex-shrink-0">2021-06-29 15:45:41</td>
                    <td style={{width: "183px"}} className="h-56px text-right pr-50px font-robotoRegular">12,000</td>
                    <td style={{width: "200px", color:"#e9441d"}} className="h-56px text-right pr-50px font-robotoRegular">+1,000</td>
                    <td style={{width: "204px"}} className="h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{width: "210px",color:'#33a1e9'}} className="h-56px text-center">완료</td>
                </tr>
                  <tr className="bg-gray-2e2e2e text-14px tracking-slight  h-56px w-full border-b border-dddddd" style={{ background: '#f7f7f7'}}>
                    <td style={{width: "245px"}} className="font-robotoRegular h-56px text-center flex-shrink-0">2021-06-29 15:45:41</td>
                    <td style={{width: "183px"}} className="h-56px text-right pr-50px font-robotoRegular">100,000</td>
                    <td style={{width: "200px", color:"#e9441d"}} className="h-56px text-right pr-50px font-robotoRegular">+10,000</td>
                    <td style={{width: "204px"}} className="h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{width: "210px"}} className="h-56px text-center">취소</td>
                </tr>
                <tr className="bg-white text-14px tracking-slight h-56px w-full">
                    <td style={{width: "245px"}} className="font-robotoRegular h-56px text-center flex-shrink-0">2021-06-29 15:45:41</td>
                    <td style={{width: "183px"}} className="h-56px text-right pr-50px font-robotoRegular">50,000</td>
                    <td style={{width: "200px", color:"#e9441d"}} className="h-56px text-right pr-50px font-robotoRegular">+5,000</td>
                    <td style={{width: "204px"}} className="h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{width: "210px",color:'#33a1e9'}} className="h-56px text-center">완료</td>
                </tr>
            </tbody>
  </table>
</div>
    )
}

export default MoneyChargeTable
