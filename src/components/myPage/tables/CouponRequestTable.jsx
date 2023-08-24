import React from 'react'

const CouponRequestTable = () => {

    const ExampleArray = [
        {
            id: 0,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            state: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 1,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            state: "사용완료",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 2,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            state: "기간만료",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 3,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            state: "회수쿠폰",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 4,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            state: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 5,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            state: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 6,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            state: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 7,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            state: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 8,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            state: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 9,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            state: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
    ]

    function Cells({ items }) {
        return items.map((item,index) => (
            <tr 
                className={`text-14px tracking-tight text-r666666 h-56px border-b last:border-b-0`}
                style={{background: index%2===0? '#fff':'#f7f7f7',borderColor:"#dddddd"}} >
                <td className="w-full text-center" style={{maxWidth: '350px' }}>
                    <div className='w-full text-center truncate pl-20px pr-15px' style={{maxWidth: '350px' }}>{item.name}</div>
                </td>
                <td style={{width:'119px'}} className="text-right text-e9441d font-robotoRegular pr-20px">{item.amount}</td>
                <td style={{width:'140px'}} className="text-center"><div style={{width:'140px'}} className='truncate px-10px text-center'>{item.username}</div></td>
                <td 
                    style={{
                        width:'141px',
                        color: item.state === "사용가능" 
                        ? "#f04281"
                        : item.state ==="사용완료"
                        ? "#1c92df"
                        : item.state === "회수쿠폰"
                        ? "#00a651"
                        : "#999999"
                    }} 
                    className="text-center"
                >
                    {item.state}
                </td>
                <td  className="w-88px text-center font-robotoRegular">{item.date}</td>
                <td style={{width:'124px'}} className="text-center font-robotoRegular">{item.expireDate}</td>
            </tr>
        ));
    }

    return (
        <div
          style={{ background: "linear-gradient(to top, #ededeb, #cb78e6)" }}
          className="rounded-10px shadow-table overflow-hidden p-px">
            <table className="table-fixed rounded-10px overflow-hidden w-full">
            <thead className="text-14px tracking-tight text-r666666 h-54px border-b "
                style={{ background: "linear-gradient(to right, #9d3bbb, #5423a0)" , color:"#eeeeee",borderColor:"#dddddd"}}>
                <tr>
                  <td style={{width: "350px"}} className="text-center pl-20px pr-15px">쿠폰명</td>
                  <td style={{width: "163px"}} className="text-center">쿠폰금액</td>
                  <td style={{width: "135px"}} className="text-center">보낸회원아이디</td>
                  <td style={{width: "118px"}} className="text-center">처리상태</td>
                  <td style={{width: "135px"}} className="text-center">발급일</td>
                  <td style={{width: "121px"}} className="text-center">만료일</td>
                </tr>
              </thead>
            <tbody className="w-full text-r666666 text-14px tracking-tight">
                <Cells items={ExampleArray} />
            </tbody>
          </table> 
        </div>
    )
}

export default CouponRequestTable
