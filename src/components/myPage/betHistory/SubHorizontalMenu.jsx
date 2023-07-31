import React from 'react'

const SubHorizontalMenu = ({
    itemsArray, 
    isState = 0, 
    setState
}) => {


    function TabsList({ items }) {
        return items.map(item => (
            <button 
              key={item.id} 
              style={{
                background: isState === item.id ?'linear-gradient( to top, #4f3a7a, #e597ff)':'linear-gradient( to top, #ada8a8, #d0d0d0)',
                height:'81px'
              }}
              className={`overflow-hidden w-full rounded-4px flex  border border-black relative p-px`} 
              onClick={() => setState(item.id)}
          >
            <div style={{
              }} className={`overflow-hidden w-full flex flex-col items-center justify-start rounded-4px`}>
              <div

                style={{
                  background: isState === item.id 
                    ? "linear-gradient( to top, #6b22ff, #df52ff)"
                    : "linear-gradient( to top, #e5e5e5, #ffffff)",
                  height: '79px',
                }}
                  className={`w-full rounded-4px flex flex-col items-center justify-end hover:filter hover:brightness-125`}
                  >
                      <img className="mt-8px ml-2px object-none h-43px" src={item.icon} alt="" />
                <span
                  style={{
                    color: isState === item.id
                      ? "#fff"
                      : "#666"
                  }}
                  className={`text-13px tracking-tight mb-8px mt-1px ${item.custom}`}
                >{item.text}</span>
                  </div>
              </div>   
            </button>
        ));
    }

    return (
        <>
          {itemsArray.length < 10 ? (
            <div className="flex w-full h-80px space-x-2px">
                <TabsList items={itemsArray} />
            </div>
          ) : (
            <div className="grid grid-cols-8 gap-2px w-full">
                <TabsList items={itemsArray} />
            </div>
          )}
            
        </>
    )
}

export default SubHorizontalMenu
