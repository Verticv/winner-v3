import React from 'react'

const HorizontalMenu5 = ({
    itemsArray, 
    selectedTab = 0, 
    setSelectedTab
}) => {


    function TabsList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                style={{
                    height:"41px",
                    background: selectedTab === item.id
                    ? 'linear-gradient(to top, #4f3a7a 0%, #a05bf6 50%, #cb78e6 100%)'
                    : 'linear-gradient(to top, #4f3a7a 0%, #a05bf6 50%, #f0d3ff 100%)',
                    boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)"
                }}
                className="relative overflow-hidden w-full rounded-6px flex items-end p-px "
                onClick={() => setSelectedTab(item.id)}
            >
            
                <div
                    style={{
                        height: "39px",
                        background: selectedTab === item.id 
                        ? "linear-gradient(to top, #491f9c, #9e3cbc)" 
                        :'linear-gradient(to top, #ccc4ff, #ffd9f5)',
                        boxShadow:selectedTab === item.id?"rgba(255, 240, 214, 15%) 1px 2px 5px 6px inset":''
                    }} className="w-full rounded-6px flex items-center justify-center relative hover:filter hover:brightness-90" >
                    
                    <div 
                        style={{color: selectedTab === item.id ? "#ffff" : "#2d2834"}}
                        className="text-14px tracking-tight  flex h-14px items-center"
                    >
                        {item.text}
                    </div>
                </div>
            </button>
        ));
    }

    return (
        <div className="flex w-full h-47px space-x-3px">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu5
