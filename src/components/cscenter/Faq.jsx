import MyPageTitle from 'components/myPage/MyPageTitle'
import React, { useState } from 'react'
import Icon1 from '../../images/myPage/betHistory/icon_1.png'
import Icon2 from '../../images/myPage/betHistory/icon_2.png'
import Icon3 from '../../images/myPage/betHistory/icon_3.png'
import Icon4 from '../../images/myPage/betHistory/icon_4.png'
import Icon5 from '../../images/myPage/betHistory/icon_5.png'
import Icon6 from '../../images/myPage/betHistory/icon_7.png'
import Icon7 from '../../images/myPage/betHistory/icon_8.png'
import Icon8 from '../../images/myPage/betHistory/icon_9.png'
import Icon9 from '../../images/myPage/betHistory/icon_10.png'
import Icon10 from '../../images/cscenter/ico_10.png'
import Icon11 from '../../images/cscenter/ico_11.png'
import Icon13 from '../../images/cscenter/ico_13.png'
import Icon14 from '../../images/myPage/betHistory/icon_12.png'
import Icon15 from '../../images/myPage/betHistory/icon_6.png'
import Icon16 from '../../images/cscenter/ico_14.png'
import IconHighlight1 from '../../images/myPage/betHistory/Icon1_On.png'
import IconHighlight2 from '../../images/myPage/betHistory/Icon2_On.png'
import IconHighlight3 from '../../images/myPage/betHistory/Icon3_On.png'
import IconHighlight4 from '../../images/myPage/betHistory/Icon4_On.png'
import IconHighlight5 from '../../images/myPage/betHistory/Icon5_On.png'
import IconHighlight6 from '../../images/myPage/betHistory/Icon7_On.png'
import IconHighlight7 from '../../images/myPage/betHistory/Icon8_On.png'
import IconHighlight8 from '../../images/myPage/betHistory/Icon9_On.png'
import IconHighlight9 from '../../images/myPage/betHistory/Icon10_On.png'
import IconHighlight10 from '../../images/myPage/betHistory/Icon11_On.png'
import IconHighlight11 from '../../images/cscenter/Icon11_On.png'
import IconHighlight13 from '../../images/cscenter/Icon13_On.png'
import IconHighlight14 from '../../images/myPage/betHistory/Icon12_On.png'
import IconHighlight15 from '../../images/myPage/betHistory/Icon6_On.png'
import IconHighlight16 from '../../images/cscenter/Icon14_On.png'
import HorizontalMenu from 'components/horizontalMenus/HorizontalMenu'
import ArrowDown from '../../images/myPage/leftMenu/arr_down.png'
import QIcon from '../../images/cscenter/q.png'
import AIcon from '../../images/cscenter/a.png'

const Faq = () => {
    const tabsArray = [
        { text: "전체", icon: Icon1, iconHighlight: IconHighlight1, id: 0, path: "/cscenter/contact/all" },
        { text: "라이브카지노", icon: Icon2, iconHighlight: IconHighlight2, id: 1, path: "/cscenter/contact/all/live-casino" },
        { text: "스포츠", icon: Icon3, iconHighlight: IconHighlight3, id: 2, path: "/cscenter/contact/all/slot" },
        { text: "실시간스포츠", icon: Icon14, iconHighlight: IconHighlight14, id: 14, path: "/cscenter/contact/all/live-sport" },
        { text: "슬롯게임", icon: Icon4, iconHighlight: IconHighlight4, id: 3, path: "/cscenter/contact/all/sports" },
        { text: "호텔카지노", icon: Icon5, iconHighlight: IconHighlight5, id: 4, path: "/cscenter/contact/all/hotel-casino" },
        { text: "홀덤게임", icon: Icon15, iconHighlight: IconHighlight15, id: 15, path: "/cscenter/contact/all/holdem" },
        { text: "e-스포츠", icon: Icon6, iconHighlight: IconHighlight6, id: 5, path: "/cscenter/contact/all/e-sports" },
        { text: "미니게임", icon: Icon7, iconHighlight: IconHighlight7, id: 6, path: "/cscenter/contact/all/minigame" },
        { text: "키론가상게임", icon: Icon8, iconHighlight: IconHighlight8, id: 7, path: "/cscenter/contact/all/ar-game" },
        { text: "피싱게임", icon: Icon9, iconHighlight: IconHighlight9, id: 8, path: "/cscenter/contact/all/phishing-game" },
        { text: "티비벳", icon: Icon10, iconHighlight: IconHighlight10, id: 9, path: "/cscenter/contact/all/bet" },
        { text: "충전/환전", icon: Icon11, iconHighlight: IconHighlight11, id: 10, path: "/cscenter/contact/all/transaction" },
        { text: "베팅관련", icon: Icon16, iconHighlight: IconHighlight16, id: 11, path: "/cscenter/contact/all/about-betting" },
        { text: "기타", icon: Icon13, iconHighlight: IconHighlight13, id: 12, path: "/cscenter/contact/all/other" },
    ];


    const questionArray = [
        { id: 0, type: "충전/환전", text: "첫, 매충 10% 포인트를 받으면 롤링을 어떻게 해야 환전가능한가요?" },
        { id: 1, type: "충전/환전", text: "1,000원 단위도 충전/환전 신청이 가능한가요?" },
        { id: 2, type: "충전/환전", text: "충전시 은행 입금자명이 달라도 처리가 가능한가요?" },
        { id: 3, type: "충전/환전", text: "출금(환전)시 예금주 변경 및 타명의 사용이 가능한가요?" },
        { id: 4, type: "베팅관련", text: "최소 베팅금액, 최대 베팅금액, 최대 적중한도 금액은 얼마인가요?" },
        { id: 5, type: "충전/환전", text: "충전&환전 처리 시간은 어느 정도 소요되나요?" },
        { id: 6, type: "베팅관련", text: "베팅 취소는 가능한가요?" },
        { id: 7, type: "스포츠북", text: "스포츠북 라이브 베팅 목록 중, 경기 도중에 베팅한 경기가 사라지는 경우 베팅한 내역은 어떻게 처리되나요?" },
        { id: 8, type: "기타", text: "Winner 홈페이지에 접속이 잘 되지 않거나 사용도중 에러가 발생하는데 어떻게 해야 하나요?" },
        { id: 9, type: "기타", text: "이 사이트는 안전한가요?" },
        { id: 10, type: "기타", text: "중복 IP 또는 본인 아이디를 공유하여 사용이 가능한가요?" },
    ]

    const BodyText1 = '☞ 첫, 매충 10% 포인트를 받지 않을시 모든게임의 롤링은 단폴, 카지노 베팅 포함 100%만 해주시면 환전가능합니다. \n - 포인트 받지 않기를 원할시 : 충전 --> "보너스받기" 에서 "받지않기" 클릭하시고 충전신청해주시면 됩니다. \n ☞ 첫, 매충 10%포인트를 받았을시 각게임당 아래와 같이 롤링해 주시면 됩니다. '

    const [, setSelectedTab] = useState(0)
    const [openedCell, setOpenedCell] = useState(null)

    const QuestionCell = ({type, text, cellId}) => (
      <>
            <button 
                style={{zIndex: 2,background: "#ffffff",boxShadow: " 0px 2px 3px 0px rgba(0, 0, 0, 0.3)"}}
                className="relative rounded-10px  w-full  flex items-start p-px  mb-8px  z-20 group hover:shadow-table hover:brightness-125 filter" 

                onClick={() => {
                    if (openedCell === cellId) {
                        setOpenedCell(null) 
                    } else {
                        setOpenedCell(cellId)
                    }
                }}>
                <div  className="w-full bg-gray-2e2e2e rounded-4px overflow-hidden  flex items-start px-19px justify-between pt-11px pb-10px">
                  <img className="object-none relative top-3px" src={QIcon} alt="" />
                  <div className="w-full h-full px-17px flex items-start space-x-8px self-start"> 

                      <div 
                          style={{backgroundColor: "#702caa", minWidth: "89px"}} 
                          className="h-29px rounded-full flex items-center justify-center text-white text-14px  tracking-tight mt-2px px-6px flex-shrink-0"
                      > 
                        <p className='-mt-px' style={{letterSpacing:'-0.1em'}}>{type}</p>
                      </div>
                        <p className=" text-14px tracking-tight mt-6px text-left"
                        style={{color:'#444444',letterSpacing:'-0.07rem'}}>{text}</p>
                  </div>
                  <img className={`${openedCell === cellId && "transform rotate-180"} self-center  mr-px`} src={openedCell === cellId ? ArrowDown : ArrowDown} alt="" />
              </div>    
            </button>
            {openedCell === cellId && (
                <div 
                    style={{ zIndex: 1, backgroundColor: "#f6f6f6",boxShadow: " 0px 0px 4px 0px rgba(0, 0, 0, 0.5)" }} 
                    className="flex h-full items-start justify-start w-full rounded-10px -mt-60px z-0 mb-8px border  pb-32px pr-42px"
                >
                    <img 
                        style={{marginTop: "66px"}} 
                        className="ml-29px object-none" 
                        src={AIcon} 
                        alt="" 
                    />
                    <div className="w-full flex flex-col text-r666666" >
                        <div style={{marginTop: "76px",letterSpacing:'-0.07rem'}} className=" ml-15px  flex items-center text-16px">
                            <p style={{color: "#4a90f0 "}} className="self-start mr-3px" >
                                No.1
                            </p> 
                            그 이상.! 최고를 넘어선 『 Winner 』입니다.
                            {/* ☞ 첫, 매충 10% 포인트를 받지 않을시 모든게 */}
                        </div>

                        <div style={{letterSpacing:'-0.07rem'}} className="text-14px space-y-3px mt-27px ml-14px">
                            {BodyText1.split('\n').map((item, i) => 
                                <p key={i} className={`flex items-center`}>{item}</p>
                            )}
                        </div>
                        <div style={{letterSpacing:'-0.07rem'}} className="text-14px mt-3px flex items-center ml-14px">
                            - 스포츠 : <p style={{color: "#e65454"}} className="mx-3px">두폴더 이상 </p> 롤링 100% 최대 30만원 
                        </div>
                        <div style={{letterSpacing:'-0.07rem'}} className="text-14px  mt-3px flex items-center ml-14px">
                            - 스포츠단폴더, 가상게임, 미니게임, 카지노 : <p style={{color: "#e65454"}} className="mx-3px">이용불가</p>
                        </div>
                        <div style={{letterSpacing:'-0.07rem'}} className="text-14px mt-3px flex items-center ml-14px">
                            - 스포츠 2폴더 이상 100% 롤링 후 이용 가능 스포츠 단폴더, 타 게임 이용 가능하며, 스포츠 2폴더 100% 롤링 전 타게임 이용시 보유금 <p className="mx-3px">전액 몰수처리</p>
                        </div>
                           
                        <div style={{letterSpacing:'-0.07rem'}} className="text-14px mt-27px flex items-center ml-14px">
                            ※ 모든게임의 롤링적용시점은 게임이 끝나서 마감처리된 때입니다. 이후에 출금신청해주셔야 처리가능합니다.
                        </div>

                        <div style={{letterSpacing:'-0.07rem'}} className="text-14px mt-27px flex items-center ml-14px">
                            언제나 고객에게 최상의 서비스 제공을 할 수 있도록 노력하는 『 Winner 』가 되겠습니다.
                        </div>
                        <div style={{letterSpacing:'-0.07rem'}} className="text-14px mt-3px flex items-center ml-14px">
                            감사합니다.
                        </div>
                    </div>
                    
                </div>
            )}
        </>
    )

    function MenuList({ items }) {
        
        return items.map(item => (
            <QuestionCell type={item.type} text={item.text} cellId={item.id} />
        )
    )}

    return (
        <div>
            <MyPageTitle title="자주묻는질문" />

            <div className="relative w-full mt-12px">
                <HorizontalMenu itemsArray={tabsArray}  hasRows={true} setSelectedTab={setSelectedTab} showSub={false} h_space={2} v_space={3}/>
            </div>

            <div className="mt-20px mb-90px">
                <MenuList items={questionArray} />
            </div>

        </div>
    )
}

export default Faq
