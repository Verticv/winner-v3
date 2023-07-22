import React, {useState} from 'react'
import { useHistory } from 'react-router';
import Reflect from '../../images/myPage/betHistory/Reflect.png'
const HorizontalMenu = ({
    itemsArray, 
    setSelectedSubTab = null,
    showSub = true,
  hasRows = false,
      
}) => {

    const history = useHistory();
    const pathname = window.location.pathname
    const [isHover, setHover] = useState(null)
    const [selectedTab, setSelectedTab] = useState(0)
  
    function TabsList({ items }) {
      return items.map(item => (
        <div className='relative w-full'>
          <button
          key={item.id}
          style={{
            background: pathname === item.path 
              ?'linear-gradient(to top, #4f3a7a, #a05bf6 50%, #cb78e6 100%)'
              :'linear-gradient(to top, #4f3a7a, #a05bf6 50%, #f0d3ff 100%)',
            boxShadow: '0 5px 5px -2px rgba(0,0,0,0.5)'
          }}
          className={`${
              pathname === item.path
              ? "flex-shrink" 
              : "flex-shrink"
          } relative overflow-hidden h-78px w-full flex items-center rounded-4px p-px`} 
          onClick={() => {
              history.push(item.path)
              setSelectedTab(item.id)
              if (setSelectedSubTab !== null) {
                  setSelectedSubTab(0)
              }
            }}
            onMouseOver={() => setHover(item.id)}
            onMouseLeave={() => setHover(null)}
        >
            <div style={{
                background: pathname === item.path
                  ? 'linear-gradient(to top, #491f9c, #9e3cbc)'
                 
                  :'linear-gradient(to top, #ccc4ff, #ffd8f5)'
              }} className={`w-full rounded-3px flex flex-col justify-end items-center relative hover:filter hover:brightness-90 h-76px`}>
              <img className='object-none h-40px'  src={pathname === item.path ? item.iconHighlight : item.icon} alt="" />
             
              <span className={`${
                  pathname === item.path 
                  ? "text-black"
                : "text-golden-ccc2b6"} 
                  text-14px font-spoqaMedium tracking-tight mt-2px`}
              style={{
                color: pathname === item.path
                  ? '#fff'
                  :'#2d2834'
              }} >{item.text}</span>
          </div>
          </button>
          {(showSub && selectedTab !== 0 && selectedTab !== 3 && selectedTab !== 5  && selectedTab !== 9 && selectedTab === item.id) && (
          <div className={`absolute bottom-0 left-40px w-20px -mb-12px overflow-hidden inline-block `}>
            <div style={{
              background:'#342267'
            }} className="h-15px w-15px bg-gradient-to-br from-gray-d2dfea via-gray-eff3f6 to-gray-eff3f6 rotate-45 transform origin-bottom-left"></div>
          </div>
        )}
        </div>
        ));
    }


  return (
    <>
    {!hasRows ? (
      <div className="flex justify-start w-full h-78px space-x-3px pl-4px pr-4px">
          <TabsList items={itemsArray} />
      </div>
    ) : (
      <div className="grid grid-cols-8 gap-3px justify-between w-full pl-4px pr-5px">
          <TabsList items={itemsArray} />
      </div>
    )}
      
  </>
  )
}

export default HorizontalMenu


