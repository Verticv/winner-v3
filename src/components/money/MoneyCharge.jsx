import MyPageTitle from 'components/myPage/MyPageTitle'
import Pagination from 'components/myPage/Pagination'
import React, { useState } from 'react'
import AlertIcon from '../../images/myPage/alert.png'
import Step1 from '../../images/money/STEP1.png'
import Step2 from '../../images/money/STEP2.png'
import Step3 from '../../images/money/STEP3.png'
import InfoIcon from '../../images/money/info_icon.png'
import MoneyChargeTable from './tables/MoneyChargeTable'
import BankTable from './BankTable'

const MoneyCharge = () => {

    const [page, setPage] = useState(0)
    const [inputValue, setInputValue] = useState(null)
    const [, setInputClicked] = useState(false)
    const [radioValue, setRadioValue] = useState("slot_game")
    var nf = new Intl.NumberFormat();

    const Title = ({text}) => (
        <div style={{ width: "201px", background: '#9b6bd4' }}
            className="space-y-2 flex-shrink-0 h-44px pl-10px flex items-center rounded-4px">
            <div className=" text-white tracking-Stightest font-bold text-16px mt-2px">{text}</div>
        </div>
    )
   
    return (
        <div className="flex flex-col items-center">
            
            <MyPageTitle title="보유머니 충전" />

            <div style={{height: "187px",borderColor:'#cccccc'}} className="mt-9px w-full rounded-8px border bg-white px-19px pt-20px">
                <div className="flex items-center h-26px space-x-9px">
                    <img src={AlertIcon} alt="" />
                    <span className="text-rf04281 text-20px tracking-tight -mt-2px" style={{WebkitTextStroke:"0.2px"}}>확인 / 필독사항</span>
                </div>
                <div className="mt-12px flex flex-col space-y-16px text-r666666 tracking-tight text-16px"
                style={{letterSpacing: '-0.09em'}}>
                    <span style={{color:"#f04281"}} className="h-14px space-y-4px"><span className="mr-3px font-bold">✓</span>  입금 시 반드시 회원님의 성함으로 입금 바랍니다.</span>
                    <span className="h-14px space-y-4px"><span className="mr-3px mt-px font-bold">✓</span>  입금이 지연될 수 있으니 은행 점검 시간을 확인하신 후 점검 시간을 피해 신청해 주시기 바랍니다.</span>
                    <span className="h-14px space-y-4px"><span className="mr-3px mt-px font-bold">✓</span>  입금계좌는 수시로 변경되오니 반드시 계좌번호 문의 신청을 통해 계좌번호를 확인 후 입금하여 주시기 바랍니다.</span>
                    <span className="h-14px space-y-4px"><span className="mr-3px mt-px font-bold">✓</span>  자세한 문의사항은 고객센터를 이용해 주시기 바랍니다.</span>
                </div>
            </div>

            <div
                style={{
                    height: "896px",
                    background: "linear-gradient(to top, #ededeb 0%, #cb78e6 100%)",
                    boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.5)",
                }}
                className="rounded-6px  overflow-hidden p-px mt-21px w-full ">
                <div className="h-full w-full rounded-6px overflow-hidden bg-white p-9px">
                    <div style={{
                        height: "290px",
                        borderColor: '#5e399a',
                        background: "linear-gradient(to right, #9d3bbb 0%, #5423a0 100%)"
                    }}
                    className="w-full rounded-4px border">
                        <div 
                            style={{marginTop: "31px", marginLeft: "54px"}}
                            className="text-20px font-bold tracking-tight text-white h-19px flex items-center"
                        >
                            입금 계좌 정보 확인
                        </div>
                        <div 
                            style={{marginTop: "14px", marginLeft: "54px"}}
                            className="text-16px tracking-tight text-eeeeee h-16px flex items-center"
                        >
                            입금 계좌번호는 쪽지로 발송되며, 발송된 계좌번호로 선입금 바랍니다.
                        </div>
                        <div style={{width: "905px", marginLeft: "56px", backgroundColor:'#ffffff'}} className="h-px w-full mt-19px opacity-50" />

                        <button 
                            style={{
                                width: "222px",
                                marginLeft: "76px",
                                background: "linear-gradient(to right, #15cfee, #3197e5)",
                                boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
                            }} 
                            className="flex items-center justify-center h-42px rounded-6px mt-20px hover:brightness-125 filter"
                        >
                            <div className="flex items-center justify-center h-40px rounded-6px  cursor-pointer">
                                <span className="tracking-tight text-16px text-white text-shadow-5 -mt-2px">계좌번호 신청</span>
                            </div>
                        </button>

                        <div style={{marginLeft: "76px", marginTop: "18px"}} className="space-y-11px">
                            <div className="h-19px flex items-center text-16px tracking-minus05 text-eeeeee">
                                <img src={Step1} alt="" />
                                <div className="mt-3px ml-8px flex">위 <p className="font-bold ml-3px" style={{color:'#fee300'}}>계좌번호 신청</p>버튼을 누르시면 계좌번호가 쪽지로 발송됩니다.</div>
                            </div>
                            <div className="h-19px flex items-center text-16px font-spoqaMedium tracking-minus05 text-eeeeee">
                                <img src={Step2} alt="" />
                                <div className="mt-3px ml-8px flex">안내받은 계좌번호로 선입금 해주세요.</div>
                            </div>
                            <div className="h-19px flex items-center text-16px font-spoqaMedium tracking-minus05 text-eeeeee">
                                <img src={Step3} alt="" />
                                <div className="mt-3px ml-8px flex">
                                    <p className="font-bold" style={{color:'#fee300'}}>충전금액 입력</p>
                                    란에 실제 입금하신 금액과 동일한 금액을 입력하고
                                    <p className="font-bold text-golden-highLight mx-3px">신청하기</p>
                                    버튼을 눌러주세요.
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div style={{width: "906px"}} className="ml-57px mt-27px flex flex-col">
                        <div className="flex space-x-10px">
                            <Title text="현재 보유머니" />
                            <div className="w-full h-44px">
                            <div
                                className="h-full text-16px pl-9px border-b"
                                style={{ background: "#fff", borderColor: "#e2e2e2", color: "#666666" }}
                                >
                                <div className="h-full w-full flex items-center font-bold">
                                    <span className="text-rf04281">487,240</span>
                                    <span>원</span>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-10px mt-38px">
                            <Title text="충전금액 입력" />
                            <div className="h-44px w-full overflow-hidden"
                            >
                                <input                    
                                   style={{ background: "#fff", borderColor: "#e2e2e2", color: "#444444" }}
                                   className="w-full text-16px outline-none pl-9px placeholder-aaaaaa h-42px border-b mt-2px"
                                    placeholder="직접 입력시 숫자만 입력해 주세요."
                                    value={inputValue !==null ? nf.format(inputValue) : ""}
                                    onChange={e => setInputValue(e.target.value.replace(/,/g, ''))}
                                    onFocus={() => setInputClicked(true)}
                                    onBlur={() => setInputClicked(false)}
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                    }}
                                    type = "tel"
                                    />
                               
                            </div>
                        </div>
                    </div>
                    <div style={{marginLeft: "268px", paddingRight:'115px'}} className={`mt-23px flex space-x-5px w-full justify-start`}>
                        <button 
                            style={{
                                background: 'linear-gradient(to top, #ada8a8, #d0d0d0)',
                                boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.5)",
                            }}
                            className="flex items-center justify-center h-42px w-75px rounded-6px  hover:brightness-125 filter"
                            onClick={() => setInputValue(inputValue + 10000)}
                        >
                        <div className="flex items-center justify-center h-40px w-73px  rounded-4px  cursor-pointer"
                        style={{background:'linear-gradient(to top, #e5e5e5, #ffffff)'}}>
                                <span className="tracking-tight text-14px text-r666666 ">1만원</span>
                            </div>
                        </button>

                        <button 
                            style={{
                                background: 'linear-gradient(to top, #ada8a8, #d0d0d0)',
                                boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.5)",
                            }}
                            className="flex items-center justify-center h-42px w-75px rounded-6px  hover:brightness-125 filter"
                            onClick={() => setInputValue(inputValue + 30000)}
                        >
                            <div className="flex items-center justify-center h-40px w-73px  rounded-6px  cursor-pointer"
                            style={{background:'linear-gradient(to top, #e5e5e5, #ffffff)'}}>
                                <span className="tracking-tight text-14px text-r666666 ">3만원</span>
                            </div>
                        </button>

                        <button 
                            style={{
                                background: 'linear-gradient(to top, #ada8a8, #d0d0d0)',
                                boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.5)",
                            }}
                            className="flex items-center justify-center h-42px w-75px rounded-6px  hover:brightness-125 filter"
                            onClick={() => setInputValue(inputValue + 50000)}
                        >
                        <div className="flex items-center justify-center h-40px w-73px  rounded-6px  cursor-pointer"
                        style={{background:'linear-gradient(to top, #e5e5e5, #ffffff)'}}>
                                <span className="tracking-tight text-14px text-r666666 ">5만원</span>
                            </div>
                        </button>

                    <button 
                        style={{
                                background: 'linear-gradient(to top, #ada8a8, #d0d0d0)',
                                boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.5)",
                            }}
                            className="flex items-center justify-center h-42px w-75px rounded-6px  hover:brightness-125 filter"
                            onClick={() => setInputValue(inputValue + 100000)}
                        >
                        <div className="flex items-center justify-center h-40px w-73px  rounded-6px cursor-pointer"
                            style={{background:'linear-gradient(to top, #e5e5e5, #ffffff)'}}>
                                <span className="tracking-tight text-14px text-r666666 ">10만원</span>
                            </div>
                        </button>

                <button 
                    style={{
                        background: 'linear-gradient(to top, #ada8a8, #d0d0d0)',
                        boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.5)",
                    }}
                    className="flex items-center justify-center h-42px w-75px rounded-6px  hover:brightness-125 filter"
                    onClick={() => setInputValue(inputValue + 300000)}
                        >
                   <div className="flex items-center justify-center h-40px w-73px  rounded-6px  cursor-pointer"
                        style={{background:'linear-gradient(to top, #e5e5e5, #ffffff)'}}>
                                <span className="tracking-tight text-14px text-r666666 ">30만원</span>
                    </div>
                </button>

                <button 
                    style={{
                        background: 'linear-gradient(to top, #ada8a8, #d0d0d0)',
                        boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.5)",
                    }}
                    className="flex items-center justify-center h-42px w-75px rounded-6px  hover:brightness-125 filter"
                            onClick={() => setInputValue(inputValue + 500000)}
                        >
                    <div className="flex items-center justify-center h-40px w-73px  rounded-6px  cursor-pointer"
                        style={{background:'linear-gradient(to top, #e5e5e5, #ffffff)'}}>
                                <span className="tracking-tight text-14px text-r666666 ">50만원</span>
                            </div>
                        </button>

                <button 
                    style={{
                        background: 'linear-gradient(to top, #ada8a8, #d0d0d0)',
                        boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.5)",
                    }}
                    className="flex items-center justify-center h-42px w-75px rounded-6px  hover:brightness-125 filter"
                        onClick={() => setInputValue(inputValue + 1000000)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px  rounded-6px  cursor-pointer"
                        style={{background:'linear-gradient(to top, #e5e5e5, #ffffff)'}}>
                                <span className="tracking-tight text-14px text-r666666 ">100만원</span>
                        </div>
                </button>

                <button 
                  style={{
                        background: 'linear-gradient(to top, #4f3a7a, #e597ff)',
                        boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.5)",
                    }}
                    className="flex items-center justify-center h-42px w-75px rounded-6px  hover:brightness-125 filter"
                    onClick={() => setInputValue(0)}
                >
                <div className="flex items-center justify-center h-40px w-73px  rounded-6px  cursor-pointer"
                        style={{background:'linear-gradient(to top, #6b22ff, #df52ff)'}}>
                        <span className="tracking-tight text-14px text-white ">정정</span>
                    </div>
                </button>
            </div>
                    
                    <div style={{width: "906px", marginTop:"23px"}} className="ml-57px flex flex-col">
                        <div className="flex space-x-10px">
                            <Title text="보너스 금액" />
                            <div className="w-full h-44px">
                            <div
                            className="h-full text-16px pl-9px border-b"
                            style={{ background: "#fff", borderColor: "#e2e2e2", color: "#444444" }}
                            >
                            <div className="h-full w-full flex items-center font-bold">
                                <span style={{ color:'#33a1e9'}}>100,000,000</span>
                                <span>원</span>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                        <div className='flex space-x-4px items-start mt-33px' style={{marginLeft:'211px'}}>
                            <img src={InfoIcon} alt='info' className='w-15px h-15px'/>
                            <div className='text-14px text-r666666 flex flex-col -mt-3px space-y-4px'>
                                <span className='h-15px'>첫 충전 보너스 머니를 받으실 경우 아래 버튼을 <span className='spoqaMedium' style={{color:'#33a1e9',WebkitTextStroke:"0.2px"}}>선택</span>해 주세요.</span>
                                <span className='h-15px'>보너스를 받지 않을경우 <span className='spoqaMedium' style={{color:'#f04281',WebkitTextStroke:"0.2px"}}>받지않기{" "}</span>버튼을 선택하세요.</span>
                            </div>
                        </div>
                        <div className="flex space-x-10px mt-14px h-44px items-center">
                            
                            <div >
                                <Title text="보너스 혜택" />
                            </div>
                            
                            <div className="flex space-x-5px w-full flex-col justify-center">
                                
                                <div className='flex space-x-5px items-center'>
                                    <button 
                                        style={{width: "135px",background:'#5d659f',boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",}} 
                                        className="flex items-center justify-center h-42px rounded-6px  hover:brightness-125 filter shadow-link  cursor-pointer" 
                                        onClick={() => setRadioValue("slot_game")}
                                    >
                                        <input type="radio" className="ml-11px" name="gender" checked={radioValue === "slot_game"} />
                                        <span className="tracking-tight text-14px text-white ml-30px">슬롯게임</span>
                                        
                                    </button>
                                    <button 
                                        style={{width: "135px",background:'#5d659f',boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",}} 
                                        className="flex items-center justify-center h-42px rounded-6px  hover:brightness-125 filter shadow-link  cursor-pointer" 
                                        onClick={() => setRadioValue("sports")}
                                    >
                                      
                                            <input type="radio" className="ml-11px" name="gender" checked={radioValue === "sports"} />
                                            <span className="tracking-tight text-14px text-white ml-33px">스포츠</span>
                                      
                                    </button>
                                    <button 
                                         style={{width: "135px",background:'#5d659f',boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",}} 
                                        className="flex items-center justify-center h-42px rounded-6px  hover:brightness-125 filter shadow-link  cursor-pointer"  
                                        onClick={() => setRadioValue("v_game")}
                                    >
                                      
                                            <input type="radio" className="ml-11px" name="gender" checked={radioValue === "v_game"} />
                                            <span className="tracking-tight text-14px text-white ml-16px">키론가상게임</span>
                                        
                                    </button>
                                    <button 
                                        style={{width: "135px",background:'#5d659f',boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",}} 
                                        className="flex items-center justify-center h-42px rounded-6px  hover:brightness-125 filter shadow-link  cursor-pointer"  
                                        onClick={() => setRadioValue("yes")}
                                    >
                                       
                                            <input type="radio" className="ml-11px" name="gender" checked={radioValue === "yes"} />
                                            <span className="tracking-tight text-14px text-white ml-28px">피싱게임</span>
                                        
                                    </button>
                                    <button 
                                      style={{width: "135px",background:'#c03a41',boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",}} 
                                        className="flex items-center justify-center h-42px rounded-6px  hover:brightness-125 filter shadow-link  cursor-pointer"  
                                        onClick={() => setRadioValue("no")}
                                    >
                                       
                                        <input type="radio" className="ml-11px" name="gender" checked={radioValue === "no"} />
                                        <span className="tracking-tight text-14px text-white ml-29px ">받지않기</span>
                                        
                                    </button>      
                                </div>    
                            </div>
                        </div>
                        <div style={{width: "906px",borderColor:'#cccccc',background:'#f7f7f7'}} className="w-full rounded-8px border mt-20px pt-17px pb-25px px-20px">
                            <div className="flex items-center h-26px space-x-9px mb-15px">
                            <img src={AlertIcon} alt="" />
                            <span className="text-rf04281 text-20px tracking-tight mt-px">알아두세요</span>
                            </div>   
                            <div className="mt-16px flex flex-col space-y-15px text-gray-ccc2b6 tracking-tight text0-r666666 text-16px"
                            style={{letterSpacing: '-0.09em'}}>
                                <span className="h-14px space-y-4px"><span className="mr-3px mt-px font-bold">✓</span> 첫충전을 받으신 경우 선택하신 게임에서 롤링을 먼저 충족하셔야 합니다.</span>
                                <span className="h-14px space-y-4px"><span className="mr-3px mt-px font-bold">✓</span> 타게임을 이용하시면서 첫충을 받으시는 경우 전액 몰수 될 수 있으니 주의 바랍니다.</span>
                            </div>    
                        </div>
                </div>
                </div>
          </div>

            <button
                style={{
                    width: "228px", background: 'linear-gradient(to right, #15cfee, #3197e5)',
                    boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)"}}
                className="flex items-center justify-center h-52px rounded-6px  mt-20px hover:brightness-125 filter cursor-pointer">
                
                    <span className="tracking-tight text-16px text-white ">신청하기</span>
              
            </button>

            <div className="mt-40px">
                <MoneyChargeTable />
            </div>

            <div className="mt-20px mb-60px">
                <Pagination page={page} setPage={setPage}/>   
            </div>
            <div className="-mt-20px w-full flex  items-center justify-center  mb-30px">
                <div style={{width: '332px' ,background:'linear-gradient(to right, #df52ff, #6b22ff)', boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)"}} className='rounded-full flex justify-center items-center h-42px  text-20px tracking-tight text-white'><span className='mt-3px'>은행점검시간</span>  </div>
            </div>                        
            <BankTable />

        </div>
    )
}


export default MoneyCharge
