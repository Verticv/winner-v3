import React from 'react'
import CloseIcon from '../../../images/popups/close_icon.png'
import Sample1 from '../../../images/myPage/betHistory/sample1_v2.png'
import Sample2 from '../../../images/myPage/betHistory/sample2_v2.png'

const LiveCasinoHistoryDetailPopup = ({setPopupOpen}) => {

    const username = "WINlouie3" //"WINlouie3asdjakljsdasd"
  return (
      <div 
        style={{ height: "800px",width: "690px", borderRadius: "20px", background: "linear-gradient(to right, #b870cd, #9068bf)"}}
        className="overflow-hidden pt-2px shadow-popup relative"
        >
        <div 
           style={{
            borderRadius: "20px",
            background: "linear-gradient(to right, #9b3aba, #5925a2)",
          }}
          className="w-full h-full overflow-hidden"
        >
            <div className="h-68px flex items-center justify-center flex-shrink-0">
                <label className="font-bold tracking-Stightest text-24px text-white -mt-px">거래 상세 내역</label>
                <button
                    className="absolute  cursor-pointer z-20 filter hover:brightness-125"
                    style={{ top: "24px", right: "22px" }}
                    onClick={() => setPopupOpen(false)}>
                <img src={CloseIcon} alt="close_icon" />
                </button>
            </div>
            
            <div  style={{ backgroundColor: "#dfdbfa" }} className="h-full flex flex-col items-center ">
                <div 
                    className="text-20px text-white rounded-full flex h-42px pr-53px pl-54px items-center mt-17px mb-17px"
                    style={{background:'#6852a7'}}>
                    <p >플레이어 이름 :</p>
                    <p style={{maxWidth:'150px', textOverflow: 'unset', whiteSpace: 'nowrap', overflow:'hidden',color:'#ffcc00'}} className="ml-5px">{username.length > 12 ? `${username.slice(0,12)}...` : username}</p>
                </div>

              

                <div 
                    style={{width:"620px", height:"620px", border:'2px solid #905cc4',boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.5)'}} 
                    className="rounded-6px overflow-hidden"
                >
 
                    <div className="flex flex-col">
                        <div 
                            style={{backgroundColor:"#905cc4",height:"41px",borderColor:'#dddddd'}}
                            className="flex items-center justify-center text-16px  tracking-tight overflow-hidden text-white border-b-2 font-bold"
                        >
                            바카라 on 2021-08-09 17:26:30
                        </div>

                        <div className="flex">
                            <div 
                                style={{backgroundColor:"#fff",borderColor:'#dddddd'}} 
                                className="flex flex-col w-full border-r text-16px  tracking-tight text-r666666"
                            >
                                <div 
                                    style={{height:"41px",borderColor:'#dddddd'}} 
                                    className="border-b  flex items-center justify-center font-bold"
                                >
                                    게임
                                </div>
                                <div 
                                    style={{height:"41px",borderColor:'#dddddd'}} 
                                    className="border-b  flex items-center justify-center font-bold"
                                >
                                    테이블아이디
                                </div>
                                <div 
                                    style={{height:"41px",borderColor:'#dddddd'}} 
                                    className="border-b k flex items-center justify-center font-bold"
                                >
                                    게임상태
                                </div>
                                <div 
                                    style={{height:"41px",borderColor:'#dddddd'}} 
                                    className="flex items-center justify-center font-bold"
                                >
                                    종료시간
                                </div>

                                <div 
                                    style={{backgroundColor:"#905cc4"}}
                                    className="h-40px flex items-center justify-center text-16px  tracking-tight text-white font-bold"
                                >
                                    뱅커 핸드
                                </div>

                                <div 
                                    style={{height:"128px"}} 
                                    className="flex items-center justify-center bg-gray-2b2b2a"
                                >
                                    <img src={Sample1} alt="" />
                                </div>

                                <div style={{height:"40px"}} className="flex">
                                    <div 
                                        style={{backgroundColor:"#905cc4", width:"71px"}}
                                        className="flex items-center justify-center text-16px tracking-tight text-white border-r border-white font-bold"
                                    >
                                        베팅
                                    </div>
                                    <div 
                                        style={{backgroundColor:"#905cc4", width:"119px"}}
                                        className=" flex items-center justify-center text-16px tracking-tight text-white border-r border-white font-bold"
                                    >
                                        금액
                                    </div>
                                    <div 
                                        style={{backgroundColor:"#905cc4", width:"119px"}}
                                        className=" flex items-center justify-center text-16px tracking-tight text-white font-bold"
                                    >
                                        회원승패
                                    </div>
                                </div>

                                <div style={{height:"42px",borderColor:'#dddddd'}} className="flex font-robotoRegular text-r666666">
                                    <div 
                                        style={{ width:"71px"}}
                                        className=" flex items-center justify-center text-16px tracking-tight border-r"
                                    >
                                        player
                                    </div>
                                    <div 
                                        style={{ width:"119px"}}
                                        className=" flex items-center justify-center text-16px tracking-tight border-r"
                                    >
                                        50,000.00
                                    </div>
                                    <div 
                                        style={{ width:"119px"}}
                                        className=" flex items-center justify-center text-16px tracking-tight"
                                    >
                                        10,000.00
                                    </div>
                                </div>

                            </div>
                            
                            <div 
                                style={{backgroundColor:"#fff",borderColor:'#dddddd'}} 
                                className="flex flex-col w-full  text-16px font-robotoRegular tracking-tight text-r666666"
                            >
                                <div 
                                    style={{height:"41px",borderColor:'#dddddd'}} 
                                    className="h-41px border-b flex items-center justify-center"
                                >
                                    28
                                </div>
                                <div 
                                    style={{height:"41px",borderColor:'#dddddd'}} 
                                    className="h-41px border-b flex items-center justify-center"
                                >
                                    10103
                                </div>
                                <div 
                                    style={{height:"41px",borderColor:'#dddddd'}} 
                                    className="h-41px border-b  flex items-center justify-center "
                                >
                                    처리됨
                                </div>
                                <div 
                                    style={{height:"41px",borderColor:'#dddddd'}} 
                                    className="h-41px flex items-center justify-center"
                                >
                                    2021-08-09 18:26:47
                                </div>

                                <div 
                                    style={{backgroundColor:"#905cc4"}}
                                    className="h-40px flex items-center justify-center text-16px  tracking-tight text-white font-bold"
                                >
                                    플레이어 핸드
                                </div>

                                <div 
                                    style={{height:"128px"}} 
                                    className="flex items-center justify-center"
                                >
                                    <img src={Sample2} alt="" />
                                </div>

                                <div style={{height:"40px"}}  className="flex">
                                    <div 
                                        style={{backgroundColor:"#905cc4"}}
                                        className=" flex items-center justify-center text-16px  tracking-tight text-white w-full border-r border-white font-bold"
                                    >
                                        거래아이디
                                    </div>
                                    <div 
                                        style={{backgroundColor:"#905cc4"}}
                                        className=" flex items-center justify-center text-16px  tracking-tight text-white w-full font-bold"
                                    >
                                        베팅시간
                                    </div>
                                </div>


                                <div style={{height:"41px",borderColor:'#dddddd'}} className="flex font-robotoRegular text-r666666">
                                    <div 
                                        style={{}}
                                        className=" flex items-center justify-center text-16px tracking-tight border-r w-full "
                                    >
                                        85040508001
                                    </div>
                                    <div 
                                        style={{}}
                                        className="flex flex-col -space-y-6px items-center justify-center text-16px tracking-tight w-full "
                                    >
                                        <p>2021-08-09</p>
                                        <p>18:26:27</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div 
                            style={{backgroundColor:"#905cc4", height: "40px"}}
                            className="flex items-center justify-center text-16px  tracking-tight text-white font-bold"
                        >
                            게임요약
                        </div>
                        <div className="flex">
                            <div 
                                style={{backgroundColor:"#f7f7f7",borderColor:'#dddddd'}} 
                                className="flex flex-col w-full border-r text-16px  tracking-tight text-r666666"
                            >
                                <div 
                                    style={{height:"42px",borderColor:'#dddddd'}} 
                                    className="h-41px border-b flex items-center justify-center font-bold"
                                >
                                    총 베팅금액
                                </div>
                                <div 
                                    style={{height:"40px",borderColor:'#dddddd'}} 
                                    className="h-41px border-b flex items-center justify-center font-bold"
                                >
                                    총 지불금액
                                </div>
                                <div 
                                    style={{height:"39px"}} 
                                    className="flex items-center justify-center font-bold"
                                >
                                    총 회원승패
                                </div>
                            </div>
                            <div 
                                style={{backgroundColor:"#fff"}} 
                                className="flex flex-col w-full  text-16px font-robotoRegular tracking-tight text-r666666"
                            >
                                <div 
                                    style={{height:"42px",borderColor:'#dddddd'}} 
                                    className="h-41px border-b  flex items-center justify-end pr-15px"
                                >
                                    5,000.00
                                </div>
                                <div 
                                    style={{height:"40px",borderColor:'#dddddd'}} 
                                    className="h-41px border-b  flex items-center justify-end pr-15px"
                                >
                                    10,000.00
                                </div>
                                <div 
                                    style={{height:"40px"}} 
                                    className="flex items-center justify-end pr-15px"
                                >
                                    5,000.00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
}

export default LiveCasinoHistoryDetailPopup
