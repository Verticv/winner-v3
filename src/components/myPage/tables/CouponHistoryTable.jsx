import React from 'react'

const CouponHistoryTable = () => {
    return (
        <div
         style={{ background: "linear-gradient(to top, #ededeb, #cb78e6)"}}
          className="rounded-10px shadow-table overflow-hidden p-px">
            <table className="table-fixed rounded-10px overflow-hidden w-full">
                <thead className="text-14px tracking-tight h-54px  border-b"
                 style={{ background: "linear-gradient(to right, #9d3bbb, #5423a0)" , color:"#eeeeee",borderColor:"#dddddd"}}>
                <tr>
                    <td style={{maxWidth:'292px'}} className="w-full text-center pl-10px pr-4px">쿠폰명</td>
                    <td style={{width:'119px'}} className="text-center">쿠폰금액</td>
                    <td style={{width:'140px'}} className="text-center">받는회원아이디</td>
                    <td style={{width:'137px'}} className="text-center">보낸일시</td>
                    <td style={{width:'141px'}} className="text-center">처리상태</td>
                    <td style={{width:'88px'}} className="text-center">발급일</td>
                    <td style={{width:'124px'}} className="text-center">만료일</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqa">
               <tr className="text-14px tracking-tight text-r666666 h-56px  border-b border-gray-dddddd bg-white">
                    <td style={{ maxWidth: '292px' }} className="w-full text-center">
                        <div style={{ maxWidth: '292px' }} className="w-full text-center truncate pl-10px pr-4px">테스트쿠폰</div>
                    </td>
                    <td style={{width:'119px'}} className="text-right text-e9441d font-robotoRegular pr-10px">10,000</td>
                    <td style={{width:'140px'}} className="text-center"><div style={{width:'140px'}} className='truncate px-10px'>eric123</div></td>
                    <td style={{width:'137px'}} className="text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{color:"#b14ce3", width:'141px'}} className="text-center">선물완료</td>
                    <td style={{width:'88px'}} className="text-center font-robotoRegular">2021-06-29</td>
                    <td style={{width:'124px'}} className="text-center font-robotoRegular">2021-07-29</td>
                </tr>
                <tr className="text-14px tracking-tight text-r666666 h-56px  border-b border-gray-dddddd" style={{background:'#f7f7f7'}}>
                    <td style={{ maxWidth: '292px' }} className="w-full text-center">
                        <div style={{ maxWidth: '292px' }} className="w-full text-center truncate pl-10px pr-4px">테스트쿠폰</div>
                    </td>
                    <td style={{width:'119px'}} className="text-right text-e9441d font-robotoRegular pr-10px">10,000</td>
                    <td style={{width:'140px'}} className="text-center"><div style={{width:'140px'}} className='truncate px-10px'>eric123</div></td>
                    <td style={{width:'137px'}} className="text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{color:"#b14ce3", width:'141px'}} className="text-center">선물완료</td>
                    <td style={{width:'88px'}} className="text-center font-robotoRegular">2021-06-29</td>
                    <td style={{width:'124px'}} className="text-center font-robotoRegular">2021-07-29</td>
                </tr>
                <tr className="text-14px tracking-tight text-r666666 h-56px  border-b border-gray-dddddd bg-white">
                    <td style={{ maxWidth: '292px' }} className="w-full text-center">
                        <div style={{ maxWidth: '292px' }} className="w-full text-center truncate pl-10px pr-4px">테스트쿠폰</div>
                    </td>
                    <td style={{width:'119px'}} className="text-right text-e9441d font-robotoRegular pr-10px">10,000</td>
                    <td style={{width:'140px'}} className="text-center"><div style={{width:'140px'}} className='truncate px-10px'>eric123</div></td>
                    <td style={{width:'137px'}} className="text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{color:"#b14ce3", width:'141px'}} className="text-center">선물완료</td>
                    <td style={{width:'88px'}} className="text-center font-robotoRegular">2021-06-29</td>
                    <td style={{width:'124px'}} className="text-center font-robotoRegular">2021-07-29</td>
                </tr>
            </tbody>
        </table>
      </div>        
    )
}

export default CouponHistoryTable
