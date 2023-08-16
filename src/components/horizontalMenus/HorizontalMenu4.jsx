import React, { useState } from 'react'

const HorizontalMenu4 = ({
    itemsArray, 
    selectedTab = 0, 
    setSelectedTab
}) => {

    const [isHover, setHover] = useState(null)
    console.log(isHover)
    function TabsList({ items }) {
        return items.map(item => (
            <button 
              key={item.id} 
              style={{
                background: selectedTab === item.id
                  ? 'linear-gradient(to top, #4f3a7a 0%, #a05bf6 50%, #cb78e6 100%)'
                      : 'linear-gradient(to top, #4f3a7a 0%, #a05bf6 50%, #f0d3ff 100%)',
                  boxShadow: "0 8px 0 rgba(0, 0, 0, 0.5)"
              }} 
                className={`relative overflow-hidden h-41px w-full rounded-t-4px flex justify-center p-px`} 
                onClick={() => setSelectedTab(item.id)}
                onMouseOver={() => setHover(item.id)}
                onMouseLeave={() => setHover(null)}
            >
                <div 
                  style={{
                    height: "39px",
                    background: selectedTab === item.id 
                    ? "linear-gradient(to top, #491f9c, #9e3cbc)" 
                    :'linear-gradient(to top, #ccc4ff, #ffd9f5)',
                  }}
                  className="w-full  rounded-t-4px flex items-start justify-center pt-9px hover:filter hover:brightness-90"
                  >
                    <div className="flex items-center">
                        <div 
                            style={{color: selectedTab === item.id ? "#ffff" : "#2d2834"}}
                            className="text-16px tracking-tight flex h-16px items-center pt-5px"
                        >
                            {item.text}
                        </div>
                    </div>
                </div>
            </button>
        ));
    }

    return (
        <div className="flex w-full h-41px space-x-3px">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu4
