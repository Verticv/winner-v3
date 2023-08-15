import React, { useState } from 'react'
import MyPageTitle from './MyPageTitle'
import Pagination from './Pagination'
// import DownArrowIcon from '../../images/down_arrow_icon.png'
import SearchIcon from '../../images/myPage/search.png'
import DropDownControls from '../dropdowns/DropDownControls'
import InboxTable from './tables/InboxTable'
import ArrowDownGray from '../../images/arrows/arrow_down_gray.png'
const Inbox = () => {

    // === type [일반, 공지, 이벤트] === //
    const inboxArray = [
        { 
            id: 0,
            text: "서버 점검 안내", 
            isRead: false,
            time: "2021.06.29 07:35",
            type: "일반",
            isClicked: true,
            path: '/mypage/inbox/1'
        },
        { 
            id: 1,
            text: "정기 점검 안내", 
            isRead: true,
            time: "2021.06.29 07:35",
            type: "일반",
            path: '/mypage/inbox/2'
        },
        { 
            id: 2,
            text: "바이너리 서비스 종료 안내", 
            isRead: true,
            time: "2021.06.29 07:35",
            type: "일반",
            path: '/mypage/inbox/3'
        },
        { 
            id: 3,
            text: "미니게임 파워볼 동행복권 시스템 정기 점검", 
            isRead: true,
            time: "2021.06.29 07:35",
            type: "일반",
            path: '/mypage/inbox/4'
        },
        { 
            id: 4,
            text: "스포츠 & 미니게임 충전 보너스 (21.04.24 변경)", 
            isRead: true,
            time: "2021.06.29 07:35",
            type: "일반",
            path: '/mypage/inbox/5'
        },
        { 
            id: 5,
            text: "일시: 2021.4.27 화요일 14:00 부터 서버안정화를 위한 정기점검이 진행됩니다.", 
            isRead: true,
            time: "2021.06.29 07:35",
            type: "일반",
            path: '/mypage/inbox/6'
        },
        { 
            id: 6,
            text: "입금계좌변경안내", 
            isRead: false,
            time: "2021.06.29 07:35",
            type: "일반",
            path: '/mypage/inbox/7'
        },
        { 
            id: 7,
            text: "입금계좌변경안내", 
            isRead: true,
            time: "2021.06.29 07:35",
            type: "일반",
            path: '/mypage/inbox/8'
        },
        { 
            id: 8,
            text: "입금계좌변경안내", 
            isRead: true,
            time: "2021.06.29 07:35",
            type: "일반",
            path: '/mypage/inbox/9'
        },
        { 
            id: 9,
            text: "입금계좌변경안내", 
            isRead: false,
            time: "2021.06.29 07:35",
            type: "일반",
            path: '/mypage/inbox/10'
        },
        
    ];

    const [page, setPage] = useState(0)
    const [isDropdownOpen, setDropdownOpen] = useState(true)
    const [selectedCarrier, setSelectedCarrier] = useState("제목")
    const [hoveredOption, setHoveredOption] = useState("");
    const [checkedState, setCheckedState] = useState(
        new Array(inboxArray.length).fill(false)
    );
    const [isAllSelected, setAllSelected] = useState(false)

    const AllSelectButtonPressed = () => {

        if (isAllSelected === false) {
            setAllSelected(true)
            setCheckedState(Array(inboxArray.length).fill(true))
        } else {
            setAllSelected(false)
            setCheckedState(Array(inboxArray.length).fill(false))
        }
    };

    const dropDownCellClass = "flex w-full h-30px py-2px  items-center  px-12px"



  const searchDropdown = (
    
       <div className="w-120px h-full mt-4px flex flex-col items-center justify-center overflow-hidden rounded-2px border font-medium text-14px tracking-tight border-gray-404040 text-gray-ccc2b6 bg-white">
        <div className="w-full mt-2px h-full overflow-x-hidden border-gray-2c2c2c">
            <button className={dropDownCellClass}  
            style={{
                background: hoveredOption==="제목" ? "linear-gradient(to right, #9d3bbb, #5423a0)" : "",
                color: hoveredOption==="제목" ? "white" : "#666666",
            }}
            onClick={() => {
                setSelectedCarrier("제목")
                setDropdownOpen(false)
            }}
            onMouseOver={() => setHoveredOption('제목')}
            onMouseLeave={() => setHoveredOption("")}>
                제목
            </button>
            <button className={dropDownCellClass}
                style={{
                background: hoveredOption==="본문" ? "linear-gradient(to right, #9d3bbb, #5423a0)" : "",
                color: hoveredOption==="본문" ? "white" : "#666666",
                }}
                onClick={() => {
                    setSelectedCarrier("본문")
                    setDropdownOpen(false)
                }}
                onMouseOver={() => setHoveredOption('본문')}
                onMouseLeave={() => setHoveredOption("")}>
                본문
            </button>
      </div>
      </div>
    )

    const dropdownButton = (
        <div className="flex w-120px h-42px bg-dark-1a1a1a rounded-6px border group border-p682aa7 text-r666666 bg-white mb-px">
            <input  className="w-0 text-16px"/>
            <div className="flex w-full text-gray-ccc2b6 font-spoqaMedium text-14px outline-none h-full justify-between items-center tracking-tight " >
                <label className="ml-14px cursor-pointer group-hover:text-gray-r8c8c8c">{selectedCarrier}</label>
                <img className="w-10px h-6px object-contain mr-10px" src={ArrowDownGray} alt="arrow" /> 
            </div>
        </div>
    )
    
    const InboxSearch = (
        // <div className="h-64px w-full bg-gray-2e2e2e rounded-4px flex items-center justify-center space-x-10px"
        // >
        <div className={`h-62px w-full mt-10px flex items-center justify-center space-x-10px rounded-6px`}
        style={{background:'rgba(52, 34, 103, 0.6)'}}>
            <DropDownControls 
                buttonChild={dropdownButton} 
                isDropdownOpen={isDropdownOpen} 
                setDropdownOpen={setDropdownOpen}
            >
                {searchDropdown}
            </DropDownControls>

            <div style={{width:'381px'}} className="flex h-42px bg-dark-1a1a1a rounded-6px  border border-p682aa7 relative">
                <input 
                     className="w-full placeholder-r666666 flex-shrink-0 outline-none h-40px rounded-6px   px-10px font-medium text-14px tracking-tight  text-r666666 bg-dark-1a1a1a" 
                    placeholder="검색어를 입력해 주세요"
                />
                <button
                    style={{ background: "linear-gradient(to top, #4f3a7a, #e597ff)" }}
                    className="flex items-center justify-center w-42px h-42px rounded-6px flex-shrink-0  filter hover:brightness-125 shadow-btn absolute -right-px -top-px z-10">
                  <div className="flex items-center justify-center w-40px  h-40px rounded-6px " style={{background: 'linear-gradient(0deg, #6b22ff, #df52ff)'}}>
                    <img src={SearchIcon} alt="" />
                  </div>
                </button>
            </div>
        </div>
    )
    
    return (
        <div>
            <MyPageTitle title="쪽지관리" inboxCount="7"/>

            <div className="w-full mt-10px"></div>
            <InboxTable checkedState={checkedState} setCheckedState={setCheckedState} array={inboxArray}/>

            <div className="mt-20px h-36px w-full flex items-center justify-between">
                <div className="flex space-x-2px">
                    <button 
                    style={{background:'#936cee',boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.3)'}}
                    className="flex items-center justify-center w-88px h-36px rounded-6px hover:filter hover:brightness-125"
                    onClick={() => AllSelectButtonPressed()}
                    >
                       
                    <span className="tracking-tight text-13px text-white text-shadow-5">{isAllSelected ? "선택해제" : "전체선택"}</span>
                    </button>
                    
                    <button style={{background:'#936cee',boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.3)'}}
                    className="flex items-center justify-center w-88px h-36px rounded-6px hover:filter hover:brightness-125">
            
                     <span className="tracking-tight text-13px text-white text-shadow-5">선택삭제</span>
                      
                    </button>
                </div>
                <button style={{width:'158px',background:'linear-gradient(to right, #15cfee, #3197e5)',boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.3)'}} className="flex items-center justify-center h-36px rounded-6px p-px hover:filter hover:brightness-125 mr-px">
                    <span className="tracking-tight text-13px text-white text-shadow-5">전체읽음처리</span>
                 
                </button>
            </div>

            <div className="flex w-full justify-center mt-4px mb-60px">
                <Pagination page={page} setPage={setPage}/>   
            </div>

            <div className="-mt-30px mb-60px">
                {InboxSearch}
            </div>
        </div>
    )
}

export default Inbox
