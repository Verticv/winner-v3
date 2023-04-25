import React from 'react'

const PointsTransactionTable = () => {
    return (
        <div
        style={{ background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}
          className="rounded-4px shadow-table overflow-hidden p-px">
            <table className="rounded-3px overflow-hidden">
              <thead className="font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6 h-56px  border-b border-dark-252525 bg-dark-2e2e2e ">
                <tr>
                    <td style={{width:'196px'}} className="text-center">신청일시</td>
                    <td style={{width:'235px'}} className="text-center">사용구분</td>
                    <td style={{width:'215px'}} className="text-center">신청포인트</td>
                    <td style={{width:'242px'}} className="text-center">처리일시</td>
                    <td style={{width:'212px'}} className="text-center">처리상태</td>
                </tr>
              </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px  border-b border-dark-252525 bg-dark-323232">
                    <td style={{width:'196px'}} className="text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{width:'235px'}} className="text-center">보유머니전환</td>
                    <td style={{width:'215px'}} className="text-right pr-40px font-robotoRegular">100,000,000</td>
                    <td style={{width:'242px'}} className="text-center font-robotoRegular">2021-06-29 15:48:47</td>
                    <td style={{width:'212px'}} className="text-center text-blue-4c98ff" >완료</td>
                </tr>
                <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px  border-b border-dark-252525 bg-dark-2e2e2e">
                    <td style={{width:'196px'}} className="text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{width:'235px'}} className="text-center">보유머니전환</td>
                    <td style={{width:'215px'}} className="text-right pr-40px font-robotoRegular">100,000,000</td>
                    <td style={{width:'242px'}} className="text-center font-robotoRegular">2021-06-29 15:48:47</td>
                    <td style={{width:'212px'}} className="text-center">취소</td>
                </tr>
                <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px bg-dark-323232">
                    <td style={{width:'196px'}} className="text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{width:'235px'}} className="text-center">보유머니전환</td>
                    <td style={{width:'215px'}} className="text-right pr-40px font-robotoRegular">50,000</td>
                    <td style={{width:'242px'}} className="text-center font-robotoRegular">2021-06-29 15:48:47</td>
                    <td style={{width:'212px'}} className="text-center text-blue-4c98ff" >완료</td>
                </tr>
            </tbody>
        </table> 
        </div>
    )
}

export default PointsTransactionTable
