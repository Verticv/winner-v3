import React, { useState } from 'react'
import ArrowDown from '../../images/myPage/leftMenu/arr_down.png'
import ArrowOn from '../../images/myPage/leftMenu/arrow_on.png'

import { useHistory } from 'react-router-dom'
import PopupControls from '../popups/PopupControls'
import ReauthenticatePopup from 'components/popups/ReauthenticatePopup'

const LeftMenu = ({
    selectedTab,
    setSelectedTab,
    selectedSubTab = null,
    setSelectedSubTab = null,
    array,
    isBig = false
}) => {
    const pathname = window.location.pathname
    const history = useHistory();
    const [isPopupOpen, setPopupOpen] = useState(true)
    const [isExpanded, setExpanded] = useState(window.location.pathname)
    const [isMouseHover, setMouseHover] = useState("")

    console.log(pathname)
    function buttonPressed(text, path) {
        if (text === "총판페이지") {
            window.open('/distributor-page');
        } else {
            history.push(path)
            setSelectedTab(path)
            if (setSelectedSubTab !== null) {
                setSelectedSubTab(path)
            }
            
            if (isExpanded === path) {
                setExpanded(path + "closed")
            } else {
                setExpanded(path)
            }
        }
    }

    function mouseHover(path) {
        setMouseHover(path)
    }

    function mouseLeave(path) {
        setMouseHover("")
    }
      
  const EditProfileButton = ({ path, text, icon, iconHighlight, selectedTab }) => (
    <div className='flex w-full items-center flex-col'>
        <button 
            className={`${
                pathname.includes(path)
                ? "shadow-btn" 
                : ""
                  } flex w-full items-center h-48px rounded-3px hover:bg-gray-4e4941 `} 
              style={{
                  background:
                      pathname.includes(path) ? 'linear-gradient(to right, #9d3bbb, #5423a0)' :
                      isMouseHover === path ?
                        'rgb(157,59,187,30%)' :
                        '', }}
             onClick={() => {
                buttonPressed(path)
                setPopupOpen(true)
            }}
        >
            <div 
                className={`
               w-42px flex items-center justify-center flex-shrink-0 ml-7px`} 
            >
                <img 
                    className="flex items-center justify-center object-contain" 
                    src={(pathname.includes(path)) ? iconHighlight : icon} 
                    alt="icon" />
            </div>
            <div className="w-full flex mr-18px ml-9px justify-between items-center">
              <div className="flex items-center">              
                <label className={`font-bold text-16px cursor-pointer tracking-Stightest -mt-3px`}
                style={{ color: pathname.includes(path)?'#fff':'#594e6a' }}>{text}</label>
              </div>
          </div>
        </button>
    </div>
    )

    function MenuList({ items }) {

        return items.map(item => (
            <div key={item.id}>
            {item.text === "회원정보수정" ? (
                <PopupControls 
                    buttonChild={(
                        <EditProfileButton 
                            path={item.path} 
                            text={item.text} 
                            icon={item.icon} 
                            iconHighlight={item.iconHighlight} 
                            selectedTab={selectedTab}
                        />
                    ) }
                    isPopupOpen={isPopupOpen} 
                    setPopupOpen={setPopupOpen}
                >
                    <ReauthenticatePopup setPopupOpen={setPopupOpen} setSelectedTab={setSelectedTab}/>
                </PopupControls>              
                ) : (
                    <div className='flex flex-col w-full items-center'>
                      <button 
                        className={`${
                        pathname.includes(item.mainPath)
                        ? "shadow-btn" 
                        :''
                        } flex w-full items-center h-48px rounded-3px hover:bg-gray-4e4941 z-30`} 
                        style={{
                            background:
                                pathname.includes(item.mainPath) ?
                                'linear-gradient(to right, #9d3bbb, #5423a0)' :
                                isMouseHover === item.path ?
                                'rgb(157,59,187,30%)' :
                                '',
                        }}
                        onClick={(e) => buttonPressed(item.text, item.path)}
                        onMouseEnter={() => mouseHover(item.path)}
                        onMouseLeave={() => mouseLeave(item.path)}
                      >
                        <div>
                          <div 
                            className={`w-42px flex items-center justify-center flex-shrink-0 ml-7px`} 
                          >
                            <img 
                                className={`${isBig ? '-mt-2px' : ''} flex items-center justify-start object-contain`} 
                              src={pathname.includes(item.mainPath) ? item.iconHighlight : item.icon} 
                                alt="icon" />
                          </div>
                        </div>
                        <div className="w-full flex mr-13px ml-9px justify-between items-center">
                          <div className="flex items-center">
                            <label
                              className={`${
                                  pathname.includes(item.mainPath)
                                  ? "text-white" 
                                  : isMouseHover === item.path
                                  ? 'text-golden-594e6a'
                                  : "text-golden-594e6a"
                                }  font-bold text-16px cursor-pointer tracking-Stightest -mt-3px`}
                                style={{ color: pathname.includes(item.mainPath)?'#fff':'#594e6a' }}
                            >
                              {item.text}
                            </label>
                            {item.inboxCount && (
                            <div className="bg-rf04281 -mt-2px h-19px text-white flex items-center justify-center text-12px font-roboto"
                            style={{padding:" 0 6.1px",borderRadius:'100px', marginLeft:'8px'}}>
                                {item.inboxCount} 
                              </div>
                            )}
                      </div>
                      
                      {item.sub1 && (
                        
                            <img 
                                 className={isExpanded !== item.path + "closed" && pathname.includes(item.mainPath) && "transform rotate-180"} 
                                src={
                                    pathname.includes(item.mainPath) 
                                    ? ArrowOn
                                    : ArrowDown
                                } 
                                alt="" 
                            />
                            )}
                        </div>
                      </button>
                            
                        <div className={`${
                            pathname.includes(item.mainPath) 
                            && isExpanded !== item.path + "closed" 
                            && isExpanded !== item.path2 + "closed"
                            && isExpanded !== item.path3 + "closed" 
                            ? item.sub1||item.sub2||item.sub3||item.sub4?'pb-px':'' : "hidden"
                            } w-full font-medium text-16px cursor-pointer tracking-Stightest rounded-b-4px overflow-hidden bg-white`} 
                           
                        >
                            {item.sub1 && (
                                <button 
                                    onClick={() => {
                                        setSelectedSubTab(item.path)
                                        history.push(item.path)
                                        }}
                                        style={{
                                            background:
                                            pathname === item.path || pathname === item.path_1 
                                            || pathname === item.path_2 || pathname === item.path_3 
                                            || pathname === item.path_4 || pathname === item.path_5 
                                            || pathname === item.path_6 || pathname === item.path_7 || pathname === item.path_8?
                                        'linear-gradient(to right, #df52ff, #6b22ff)':'#fff'
                                        }}
                                    className={`${
                                        pathname === item.path || pathname === item.path_1 
                                        || pathname === item.path_2 || pathname === item.path_3 
                                        || pathname === item.path_4 || pathname === item.path_5 
                                        || pathname === item.path_6 || pathname === item.path_7 || pathname === item.path_8 
                                        ? "text-white" 
                                        : "text-p594e6a hover:opacity-50"
                                    } flex items-center h-47px w-full pl-57px `}>
                                        {item.sub1}
                                </button>
                            )}
                            {item.sub2 && (
                                <button 
                                    onClick={() => {
                                        setSelectedSubTab(item.path2)
                                        setSelectedTab(item.path2)
                                        history.push(item.path2)
                                        }}
                                    style={{
                                        background:
                                        pathname === item.path2 || pathname === item.path2_1 || pathname === item.path2_2 || pathname === item.path2_3?
                                        'linear-gradient(to right, #df52ff, #6b22ff)':'#fff'
                                    }}
                                    className={`${
                                        pathname === item.path2 || pathname === item.path2_1 || pathname === item.path2_2 || pathname === item.path2_3
                                        ? "text-white" 
                                        : "text-p594e6a hover:opacity-50"
                                    }  flex items-center h-47px w-full pl-57px `}>
                                        {item.sub2}
                                </button>
                            )}
                            {item.sub3 && (
                                <button 
                                    onClick={() => {
                                        setSelectedSubTab(item.path3)
                                        setSelectedTab(item.path3)
                                        history.push(item.path3)
                                    }}
                                    style={{
                                        background:
                                        pathname === item.path3 || pathname === item.path3_1?
                                        'linear-gradient(to right, #df52ff, #6b22ff)':'#fff'
                                    }}
                                    className={`${
                                        pathname === item.path3 || pathname === item.path3_1
                                        ? "text-white" 
                                        : "text-p594e6a  hover:opacity-50"
                                    } ${item.sub3 === "키론가상게임" && "rounded-b-3xl"} flex items-center h-47px w-full  pl-57px `}>
                                        {item.sub3}
                                </button>
                            )}

                            {item.sub4 && (
                                <button 
                                    onClick={() => {
                                        setSelectedSubTab(item.path4)
                                        setSelectedTab(item.path4)
                                        history.push(item.path4)
                                     }}
                                    style={{
                                        background:
                                        pathname === item.path4?
                                        'linear-gradient(to right, #df52ff, #6b22ff)':'#fff'
                                    }}
                                    className={`${
                                        pathname === item.path4
                                        ? "text-white" 
                                        : "text-p594e6a  hover:opacity-50"
                                    } ${item.text === "미니게임" && "rounded-b-3xl"} flex items-center h-47px w-full  pl-57px `}>
                                        {item.sub4}
                                </button>
                            )}
                        </div>

                    </div>
               )} 
                
            </div>
        ));
    }

  return (
    <div className="rounded-6px p-px shadow-link overflow-hidden flex flex-col items-center"
      style={{ background: 'linear-gradient(to top, #4f3a7a, #a05bf6 50%, #f0d3ff 100%)', width:'200px', marginBottom:'180px' }}
    >
    <div className="rounded-6px overflow-hidden w-full p-5px pb-5px space-y-6px"
        style={{ background: 'linear-gradient(to top, #ccc4ff, #ffd9f5)' }}>
        <MenuList items={array} />
      </div>
    </div>
  )
}

export default LeftMenu


