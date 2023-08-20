import React from 'react'
import { useHistory } from 'react-router';

const HorizontalMenu7 = ({
    itemsArray, 
}) => {

    const history = useHistory();
    const pathname = window.location.pathname

    function TabsList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                className={`relative overflow-hidden w-full rounded-6px flex items-end p-px`} 
                style={{
                    height:"78px",
                    background: pathname === item.path 
                    ?'linear-gradient( to top, #4f3a7a 0, #a05bf6 50%, #cb78e6 100%)'
                    :'linear-gradient( to top, #4f3a7a 0, #a05bf6 50%, #f0d3ff 100%)',
                    boxShadow: '0 2px 5px 0px rgba(0,0,0,0.6)'
                }}
                onClick={() => {
                    history.push(item.path)
                }}
            >
               
                    <div 
                        style={{
                          background: pathname === item.path
                          ? 'linear-gradient( to top, #491f9c 0%, #9e3cbc 100%)'
                          :'linear-gradient( to top, #ccc4ff 0%, #ffd9f5 100%)'
                        }}
                        className={`w-full rounded-6px flex flex-col justify-end items-center h-76px relative hover:filter hover:brightness-90`}  
                        
                    >
                    <img className="mt-8px ml-2px object-none" src={item.icon} alt="" />
                    <span 
                        style={{
                            color: 
                            pathname === item.path
                            ? '#ffffff'
                            : '#2d2834'
                        }}
                        className={` text-14px tracking-tight  flex items-center mt-4px`}
                    >{item.text}</span>
                    </div>
                
            </button>
        ));
    }

    return (
        <div className="flex w-full h-80px space-x-3px px-4px">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu7
