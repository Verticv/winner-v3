import CouponGiftPopupTable from 'components/myPage/tables/CouponGiftPopupTable'
import React from 'react'
import CloseIcon from '../../images/popups/close_icon.png'
import Step1 from '../../images/popups/step1.png'
import Step2 from '../../images/popups/step2.png'




const CouponGiftPopup = ({setPopupOpen}) => {
  return (
    <div 
      style={{
          height: "796px",
          width: "609px",
          borderRadius: "20px",
          background: "linear-gradient(to right, #b574cc, #9198e5)",
          paddingTop: "2px",
        }}
        className="relative shadow-popup">
     
        <div
          style={{
            borderRadius: "20px",
            background: "linear-gradient(to right, #9b3aba, #5925a2)",
          }}
          className="w-full h-full overflow-hidden"
        >  
         <div style={{ height: "60px" }} className="w-full">
            <button
              style={{ top: "22px", right: "22px" }}
              className="absolute cursor-pointer z-20 filter hover:brightness-125"
              onClick={() => setPopupOpen(false)}
            >
              <img src={CloseIcon} alt="close_icon" />
            </button>

            <div className="w-full flex justify-center">
              <label
                style={{ color: "#ffffff", marginTop: "16px", marginLeft: "2px" }}
                className="font-bold text-24px h-24px flex items-center tracking-tighter"
              >
                쿠폰 선물하기
              </label>
            </div>
          </div>
              <div className="w-full h-full pl-33px pr-37px"
               style={{ height: "734px", backgroundColor: "#dfdbfa" }}>
                <div className="flex items-center h-19px pt-46px space-x-8px">
                    <img src={Step1} alt="" />
                    <span className="text-16px tracking-tighter text-r666666 pt-3px">선물로 보낼 쿠폰을 확인하세요.</span>
                </div>

                 <div className="mt-26px h-64px w-full rounded-8px flex items-center  text-14px tracking-Stightest" style={{background:'rgb(94, 57, 154)'}}>
                    <span style={{marginLeft:'76px'}} className="text-eeeeee leading-none">선물할 쿠폰</span>
                    <div style={{width:'311px',borderColor:'#a088d7'}} className="h-42px ml-13px bg-white border  rounded-6px flex items-center">
                      <span className="text-r666666 ml-11px leading-none">쿠폰테스트</span>
                    </div>
                </div>

                <div className="flex items-center h-19px mt-40px space-x-8px">
                    <img src={Step2} alt="" />
                    <span className=" text-16px tracking-tighter text-r666666 pt-3px">쿠폰받을 회원을 선택하세요.</span>
                </div>

                <div className="mt-17px h-64px w-full rounded-8px flex items-center  text-14px tracking-Stightest" style={{background:'rgb(94, 57, 154)'}}>
                <span style={{marginLeft:'63px'}} className="text-eeeeee leading-none">쿠폰받을 회원</span>
                <div style={{width:'311px',borderColor:'#682aa7'}} className="h-42px ml-14px bg-white border  rounded-6px flex items-center">
                    <span className=" ml-11px leading-none" style={{color:'#aaaaaa'}}>아이디를 입력해 주세요.</span>
                </div>
                </div>
                  
               <div style={{height:'337px', width:'550px'}} className="mt-7px items-center flex justify-center">
                    <CouponGiftPopupTable />
                </div>

                <div className="w-full flex items-center justify-center mt-16px">
                    <button 
                        style={{
                        boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)",
                        background: "linear-gradient(to right, #df52ff, #6c22ff)",
                        width: "232px",
                        borderRadius: '25px'
                        }} className="flex items-center justify-center h-52px filter hover:brightness-125">
                        
                        <span className="tracking-tight text-16px text-white pt-px text-shadow-5">쿠폰발송</span>
                    
                    </button>
                </div>
                 
            </div> 
        </div>
    </div>
    )
}

export default CouponGiftPopup
