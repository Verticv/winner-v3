import React from 'react'

const PointsAccumulateTable = () => {
    return (
        <div
        style={{ background: "linear-gradient(to top, #ededeb, #cb78e6)"}}
          className="rounded-10px shadow-table overflow-hidden p-px">
            <table className="rounded-10px overflow-hidden">
                <thead className="text-14px tracking-slight text-gray-ccc2b6 h-54px  border-b font-semibold"
                style={{ background: "linear-gradient(to right, #9d3bbb, #5423a0)" , color:"#eeeeee",borderColor:"#dddddd"}}>
                <tr>
                    <td style={{width:'152px'}} className="text-center mt-px">적립일</td>
                    <td style={{width:'133px'}} className="text-center mt-px">제목</td>
                    <td style={{width:'129px'}} className="text-center mt-px">아이디</td>
                    <td style={{width:'136px'}} className="text-center mt-px">종류</td>
                    <td style={{width:'141px'}} className="text-center mt-px">베팅금액</td>
                    <td style={{width:'116px'}} className="text-center mt-px">퍼센트</td>
                    <td style={{width:'102px'}} className="text-center mt-px">보너스퍼센트</td>
                    <td style={{width:'133px'}} className="text-center pr-15px mt-px">적립포인트</td>
                </tr>
            </thead>
            <tbody className="w-full text-14px tracking-slight">
                <tr className="text-14px tracking-slight text-r444444 h-56px border-b border-gray-dddddd bg-white">
                    <td style={{width:'152px'}} className="text-center font-robotoRegular mt-px">2021-06-30</td>
                    <td style={{width:'133px'}} className="text-center mt-px"><div style={{width:'133px'}} className='truncate'>Rolling Bonus</div></td>
                    <td style={{width:'129px'}} className="text-center mt-px"><div style={{width:'129px'}} className='truncate'>louie3</div></td>
                    <td style={{width:'136px'}} className="text-center mt-px">스포츠</td>
                    <td style={{width:'141px'}} className="text-right pr-14px font-robotoRegular mt-px">5,000</td>
                    <td style={{width:'116px'}} className="text-center font-robotoRegular mt-px">1.00%</td>
                    <td style={{width:'102px'}} className="text-center font-robotoRegular mt-px">100%</td>
                    <td style={{ width: '133px' }} className="text-center font-robotoRegular pr-15px mt-px">
                        <span className='text-rf04281'>50</span>
                        P
                    </td>
                </tr>
                <tr className="text-14px tracking-slight text-r444444 h-56px border-b border-gray-dddddd" style={{background:'#f7f7f7'}}>
                    <td style={{width:'152px'}} className="text-center font-robotoRegular mt-px">2021-06-30</td>
                    <td style={{width:'133px'}} className="text-center mt-px"><div style={{width:'133px'}} className='truncate'>Rolling Bonus</div></td>
                    <td style={{width:'129px'}} className="text-center mt-px"><div style={{width:'129px'}} className='truncate'>louie3</div></td>
                    <td style={{width:'136px'}} className="text-center mt-px">스포츠</td>
                    <td style={{width:'141px'}} className="text-right pr-14px font-robotoRegular mt-px">5,000</td>
                    <td style={{width:'116px'}} className="text-center font-robotoRegular mt-px">1.00%</td>
                    <td style={{width:'102px'}} className="text-center font-robotoRegular mt-px">100%</td>
                    <td style={{ width: '133px' }} className="text-center font-robotoRegular pr-15px mt-px">
                        <span className='text-rf04281'>50</span>
                        P
                    </td>
                </tr>
                <tr className="text-14px tracking-slight text-r444444 h-56px border-gray-dddddd bg-white">
                    <td style={{width:'152px'}} className="text-center font-robotoRegular mt-px">2021-06-30</td>
                    <td style={{width:'133px'}} className="text-center mt-px"><div style={{width:'133px'}} className='truncate'>Rolling Bonus</div></td>
                    <td style={{width:'129px'}} className="text-center mt-px"><div style={{width:'129px'}} className='truncate'>louie3</div></td>
                    <td style={{width:'136px'}} className="text-center mt-px">스포츠</td>
                    <td style={{width:'141px'}} className="text-right pr-14px font-robotoRegular mt-px">5,000</td>
                    <td style={{width:'116px'}} className="text-center font-robotoRegular mt-px">1.00%</td>
                    <td style={{width:'102px'}} className="text-center font-robotoRegular mt-px">100%</td>
                    <td style={{ width: '133px' }} className="text-center font-robotoRegular pr-15px mt-px">
                        <span className='text-rf04281'>50</span>
                        P
                    </td>
                </tr>
            </tbody>
        </table> 
        </div>
    )
}

export default PointsAccumulateTable
