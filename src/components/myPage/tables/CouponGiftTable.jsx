import React from 'react'
import '../RadioButton.css'

const CouponGiftTable = () => {

    const RadioButton = (
        <input 
            className="radio" 
            type="checkbox" 
            name="radio" 
            // checked={isChecked === row}
            // onClick={() => setChecked(row)}
        />
    )

  return (
      <div
        style={{ background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}
        className="rounded-4px shadow-table overflow-hidden p-px">
        <table className="rounded-3px overflow-hidden">
            <thead className="font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6 h-56px  border-b border-dark-252525 bg-dark-2e2e2e ">
                <tr>
                    <td style={{width: '79px'}} className="text-center">선택</td>
                    <td style={{width: '340px'}} className="text-center">쿠폰명</td>
                    <td style={{width: '143px'}} className="text-center">쿠폰금액</td>
                    <td style={{width: '135px'}} className="text-center">보낸회원아이디</td>
                    <td style={{width: '94px'}} className="text-center">처리상태</td>
                    <td style={{width: '132px'}} className="text-center">발급일</td>
                    <td style={{width: '119px'}} className="text-center pr-12px">만료일</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px  border-b border-dark-252525 bg-dark-323232">
                    <td style={{width: '79px'}} className="text-center pt-7px">{RadioButton}</td>
                    <td style={{width: '340px'}} className="text-center"><div style={{width: '340px'}} className='truncate px-5px'>테스트쿠폰</div></td>
                    <td style={{width: '143px'}} className="text-right text-red-e9441d pr-13px font-robotoRegular">10,000</td>
                    <td style={{width: '135px'}} className="text-center"><div style={{width: '135px'}} className='truncate px-5px'>eric123</div></td>
                    <td style={{width: '94px'}} className="text-center  text-red-e65454">사용가능</td>
                    <td style={{width: '132px'}} className="text-center font-robotoRegular">2021-06-29</td>
                    <td style={{width: '119px'}} className="text-center font-robotoRegular pr-9px">2021-07-29</td>
                </tr> 
                <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px  border-b border-dark-252525 bg-dark-2e2e2e">
                    <td style={{width: '79px'}} className="text-center pt-7px">{RadioButton}</td>
                    <td style={{width: '340px'}} className="text-center"><div style={{width: '340px'}} className='truncate px-5px'>테스트쿠폰</div></td>
                    <td style={{width: '143px'}} className="text-right text-red-e9441d pr-13px font-robotoRegular">10,000</td>
                    <td style={{width: '135px'}} className="text-center"><div style={{width: '135px'}} className='truncate px-5px'>eric123</div></td>
                    <td style={{width: '94px'}} className="text-center  text-red-e65454">사용가능</td>
                    <td style={{width: '132px'}} className="text-center font-robotoRegular">2021-06-29</td>
                    <td style={{width: '119px'}} className="text-center font-robotoRegular pr-9px">2021-07-29</td>
                </tr>
                <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px  border-b border-dark-252525 bg-dark-323232">
                    <td style={{width: '79px'}} className="text-center pt-7px">{RadioButton}</td>
                    <td style={{width: '340px'}} className="text-center"><div style={{width: '340px'}} className='truncate px-5px'>테스트쿠폰</div></td>
                    <td style={{width: '143px'}} className="text-right text-red-e9441d pr-13px font-robotoRegular">10,000</td>
                    <td style={{width: '135px'}} className="text-center"><div style={{width: '135px'}} className='truncate px-5px'>eric123</div></td>
                    <td style={{width: '94px'}} className="text-center  text-red-e65454">사용가능</td>
                    <td style={{width: '132px'}} className="text-center font-robotoRegular">2021-06-29</td>
                    <td style={{width: '119px'}} className="text-center font-robotoRegular pr-9px">2021-07-29</td>
                </tr> 
                <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px  border-b border-dark-252525 bg-dark-2e2e2e">
                    <td style={{width: '79px'}} className="text-center pt-7px">{RadioButton}</td>
                    <td style={{width: '340px'}} className="text-center"><div style={{width: '340px'}} className='truncate px-5px'>테스트쿠폰</div></td>
                    <td style={{width: '143px'}} className="text-right text-red-e9441d pr-13px font-robotoRegular">10,000</td>
                    <td style={{width: '135px'}} className="text-center"><div style={{width: '135px'}} className='truncate px-5px'>eric123</div></td>
                    <td style={{width: '94px'}} className="text-center  text-red-e65454">사용가능</td>
                    <td style={{width: '132px'}} className="text-center font-robotoRegular">2021-06-29</td>
                    <td style={{width: '119px'}} className="text-center font-robotoRegular pr-9px">2021-07-29</td>
                </tr> 
                <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px  border-b border-dark-252525 bg-dark-323232">
                    <td style={{width: '79px'}} className="text-center pt-7px">{RadioButton}</td>
                    <td style={{width: '340px'}} className="text-center"><div style={{width: '340px'}} className='truncate px-5px'>테스트쿠폰</div></td>
                    <td style={{width: '143px'}} className="text-right text-red-e9441d pr-13px font-robotoRegular">10,000</td>
                    <td style={{width: '135px'}} className="text-center"><div style={{width: '135px'}} className='truncate px-5px'>eric123</div></td>
                    <td style={{width: '94px'}} className="text-center  text-red-e65454">사용가능</td>
                    <td style={{width: '132px'}} className="text-center font-robotoRegular">2021-06-29</td>
                    <td style={{width: '119px'}} className="text-center font-robotoRegular pr-9px">2021-07-29</td>
                </tr> 
                <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px  border-b border-dark-252525 bg-dark-2e2e2e">
                    <td style={{width: '79px'}} className="text-center pt-7px">{RadioButton}</td>
                    <td style={{width: '340px'}} className="text-center"><div style={{width: '340px'}} className='truncate px-5px'>테스트쿠폰</div></td>
                    <td style={{width: '143px'}} className="text-right text-red-e9441d pr-13px font-robotoRegular">10,000</td>
                    <td style={{width: '135px'}} className="text-center"><div style={{width: '135px'}} className='truncate px-5px'>eric123</div></td>
                    <td style={{width: '94px'}} className="text-center  text-red-e65454">사용가능</td>
                    <td style={{width: '132px'}} className="text-center font-robotoRegular">2021-06-29</td>
                    <td style={{width: '119px'}} className="text-center font-robotoRegular pr-9px">2021-07-29</td>
                </tr> 
                <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px  border-b border-dark-252525 bg-dark-323232">
                    <td style={{width: '79px'}} className="text-center pt-7px">{RadioButton}</td>
                    <td style={{width: '340px'}} className="text-center"><div style={{width: '340px'}} className='truncate px-5px'>테스트쿠폰</div></td>
                    <td style={{width: '143px'}} className="text-right text-red-e9441d pr-13px font-robotoRegular">10,000</td>
                    <td style={{width: '135px'}} className="text-center"><div style={{width: '135px'}} className='truncate px-5px'>eric123</div></td>
                    <td style={{width: '94px'}} className="text-center  text-red-e65454">사용가능</td>
                    <td style={{width: '132px'}} className="text-center font-robotoRegular">2021-06-29</td>
                    <td style={{width: '119px'}} className="text-center font-robotoRegular pr-9px">2021-07-29</td>
                </tr> 
                <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px  border-b border-dark-252525 bg-dark-2e2e2e">
                    <td style={{width: '79px'}} className="text-center pt-7px">{RadioButton}</td>
                    <td style={{width: '340px'}} className="text-center"><div style={{width: '340px'}} className='truncate px-5px'>테스트쿠폰</div></td>
                    <td style={{width: '143px'}} className="text-right text-red-e9441d pr-13px font-robotoRegular">10,000</td>
                    <td style={{width: '135px'}} className="text-center"><div style={{width: '135px'}} className='truncate px-5px'>eric123</div></td>
                    <td style={{width: '94px'}} className="text-center  text-red-e65454">사용가능</td>
                    <td style={{width: '132px'}} className="text-center font-robotoRegular">2021-06-29</td>
                    <td style={{width: '119px'}} className="text-center font-robotoRegular pr-9px">2021-07-29</td>
                </tr> 
                <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px  border-b border-dark-252525 bg-dark-323232">
                    <td style={{width: '79px'}} className="text-center pt-7px">{RadioButton}</td>
                    <td style={{width: '340px'}} className="text-center"><div style={{width: '340px'}} className='truncate px-5px'>테스트쿠폰</div></td>
                    <td style={{width: '143px'}} className="text-right text-red-e9441d pr-13px font-robotoRegular">10,000</td>
                    <td style={{width: '135px'}} className="text-center"><div style={{width: '135px'}} className='truncate px-5px'>eric123</div></td>
                    <td style={{width: '94px'}} className="text-center  text-red-e65454">사용가능</td>
                    <td style={{width: '132px'}} className="text-center font-robotoRegular">2021-06-29</td>
                    <td style={{width: '119px'}} className="text-center font-robotoRegular pr-9px">2021-07-29</td>
                </tr> 
                <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px bg-dark-2e2e2e">
                    <td style={{width: '79px'}} className="text-center pt-7px">{RadioButton}</td>
                    <td style={{width: '340px'}} className="text-center"><div style={{width: '340px'}} className='truncate px-5px'>테스트쿠폰</div></td>
                    <td style={{width: '143px'}} className="text-right text-red-e9441d pr-13px font-robotoRegular">10,000</td>
                    <td style={{width: '135px'}} className="text-center"><div style={{width: '135px'}} className='truncate px-5px'>eric123</div></td>
                    <td style={{width: '94px'}} className="text-center  text-red-e65454">사용가능</td>
                    <td style={{width: '132px'}} className="text-center font-robotoRegular">2021-06-29</td>
                    <td style={{width: '119px'}} className="text-center font-robotoRegular pr-9px">2021-07-29</td>
                </tr> 
            </tbody>
      </table> 
      </div>
    )
}

export default CouponGiftTable
