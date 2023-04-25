import React from 'react'

const PointsAccumulateTable = () => {
    return (
        <div
        style={{ background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}
          className="rounded-4px shadow-table overflow-hidden p-px">
            <table className="rounded-3px overflow-hidden">
                <thead className="font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6 h-56px  border-b border-dark-252525 bg-dark-2e2e2e ">
                <tr>
                    <td style={{width:'152px'}} className="text-center">적립일</td>
                    <td style={{width:'133px'}} className="text-center">제목</td>
                    <td style={{width:'129px'}} className="text-center">아이디</td>
                    <td style={{width:'136px'}} className="text-center">종류</td>
                    <td style={{width:'141px'}} className="text-center">베팅금액</td>
                    <td style={{width:'116px'}} className="text-center">퍼센트</td>
                    <td style={{width:'102px'}} className="text-center">보너스퍼센트</td>
                    <td style={{width:'133px'}} className="text-center pr-15px">적립포인트</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px  border-b border-dark-252525 bg-dark-323232">
                    <td style={{width:'152px'}} className="text-center font-robotoRegular">2021-06-30</td>
                    <td style={{width:'133px'}} className="text-center"><div style={{width:'133px'}} className='truncate'>Rolling Bonus</div></td>
                    <td style={{width:'129px'}} className="text-center"><div style={{width:'129px'}} className='truncate'>louie3</div></td>
                    <td style={{width:'136px'}} className="text-center">스포츠</td>
                    <td style={{width:'141px'}} className="text-right pr-14px font-robotoRegular">5,000</td>
                    <td style={{width:'116px'}} className="text-center font-robotoRegular">1.00%</td>
                    <td style={{width:'102px'}} className="text-center font-robotoRegular">100%</td>
                    <td style={{width:'133px'}} className="text-center font-robotoRegular text-blue-4c98ff pr-15px">50P</td>
                </tr>
                <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px  border-b border-dark-252525 bg-dark-2e2e2e">
                    <td style={{width:'152px'}} className="text-center font-robotoRegular">2021-06-30</td>
                    <td style={{width:'133px'}} className="text-center"><div style={{width:'133px'}} className='truncate'>Rolling Bonus</div></td>
                    <td style={{width:'129px'}} className="text-center"><div style={{width:'129px'}} className='truncate'>louie3</div></td>
                    <td style={{width:'136px'}} className="text-center">스포츠</td>
                    <td style={{width:'141px'}} className="text-right pr-14px font-robotoRegular">5,000</td>
                    <td style={{width:'116px'}} className="text-center font-robotoRegular">1.00%</td>
                    <td style={{width:'102px'}} className="text-center font-robotoRegular">100%</td>
                    <td style={{width:'133px'}} className="text-center font-robotoRegular text-blue-4c98ff pr-15px">50P</td>
                </tr>
                <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px bg-dark-323232">
                    <td style={{width:'152px'}} className="text-center font-robotoRegular">2021-06-30</td>
                    <td style={{width:'133px'}} className="text-center"><div style={{width:'133px'}} className='truncate'>Rolling Bonus</div></td>
                    <td style={{width:'129px'}} className="text-center"><div style={{width:'129px'}} className='truncate'>louie3</div></td>
                    <td style={{width:'136px'}} className="text-center">스포츠</td>
                    <td style={{width:'141px'}} className="text-right pr-14px font-robotoRegular">5,000</td>
                    <td style={{width:'116px'}} className="text-center font-robotoRegular">1.00%</td>
                    <td style={{width:'102px'}} className="text-center font-robotoRegular">100%</td>
                    <td style={{width:'133px'}} className="text-center font-robotoRegular text-blue-4c98ff pr-15px">50P</td>
                </tr>
            </tbody>
        </table> 
        </div>
    )
}

export default PointsAccumulateTable
