import React, { useState } from 'react'
import DropDownControls from 'components/dropdowns/DropDownControls';
import ArrowDownGray from '../../images/arrows/arrow_down_gray.png'

import CustomDatePicker from 'components/CustomDatePicker'

const DateSearchBar2 = () => {

    const LeagueExampleArray = [
        {id: 0, text: "200"},
        {id: 1, text: "201"},
        {id: 2, text: "202"},
        {id: 3, text: "203"},
        {id: 4, text: "204"},
        {id: 5, text: "205"},
        {id: 6, text: "206"},
        {id: 7, text: "207"},
        {id: 8, text: "208"},
        {id: 9, text: "209"},
    ]


    // const [startDate, setStartDate] = useState(new Date())
    const [isDropdownOpen, setDropdownOpen] = useState(true)
    const [selectedCarrier, setSelectedCarrier] = useState("전체회차")
    const [hoveredOption, setHoveredOption] = useState("");
    const dropDownCellClass = "flex w-full h-30px py-2px bg-gray-1f1f1e items-center hover:bg-brown-r3d3934 px-12px"

    const gameResultButton = (
        <div style={{ width: "138px", height: "42px", borderColor: "#a088d7" }}
            className="flex items-center justify-between placeholder-gray-r8c8c8c outline-none w-138px h-42px rounded-6px border  px-10px  text-14px tracking-tight hover:text-gray-r8c8c8c border-p682aa7 text-r666666 bg-white mb-px " >
            <p className="mt-px">{selectedCarrier}</p>
            <img src={ArrowDownGray} alt="" />
        </div>
    )

    function DropdownCells({ items }) {
        return items.map(item => (
            <button
                style={{
                background:
                    hoveredOption === item.text
                    ? "linear-gradient(to right, #9d3bbb, #5423a0)"
                    : "",
                color: hoveredOption === item.text ? "white" : "#666666",
                }}
                className={dropDownCellClass}
                onClick={() => {
                    setSelectedCarrier(item.text)
                    setDropdownOpen(false)
                }}
                onMouseOver={() => setHoveredOption(item.text)}
                onMouseLeave={() => setHoveredOption("")}>
                {item.text}
            </button>
        ));
    }


    const searchDropdown = (
        <div
            style={{ height: "249px", width: "138px" }}
            className="mt-3px flex flex-col items-center justify-center overflow-hidden rounded-2px border  font-medium text-14px tracking-tight border-gray-404040 text-gray-ccc2b6 bg-white"
        >
            <div className="w-full pt-2px h-full overflow-y-scroll overflow-x-hidden border-gray-2c2c2c scroll-div3">
                <DropdownCells items={LeagueExampleArray} />
            </div>
        </div>
    )

    const InboxSearch = (
        <DropDownControls
            buttonChild={gameResultButton} 
            isDropdownOpen={isDropdownOpen} 
            setDropdownOpen={setDropdownOpen}
        >
            {searchDropdown}
        </DropDownControls>
    )


    return (
        <div className="h-64px w-full mt-20px rounded-6px flex items-center justify-center space-x-10px"
            style={{
            background: "rgba(52, 34, 103, 0.6)",
            width: "1040px",
        }}>

                <div className="flex space-x-10px items-center h-full justify-center">
                <div className="relative">
                    <CustomDatePicker
                        classes={`flex-shrink-0 outline-none w-138px h-42px rounded-7px border border-p682aa7 px-10px font-medium text-14px tracking-tight text-r666666 focus:ml-10px pb-2px`} />
                    </div>
                    <div className="pt-px">{InboxSearch}</div>
                    <div className="flex items-center justify-center h-42px w-75px rounded-6px shadow-link hover:filter hover:brightness-125"
                      style={{ background: "linear-gradient(to top, #4f3a7a, #e597ff)" }}>
                      <div className="flex items-center justify-center h-40px w-73px rounded-6px cursor-pointer"
                      style={{ background: "linear-gradient(0deg, #6b22ff, #df52ff)" }}>
                            <span className="font-medium tracking-tight text-14px  pt-px text-white text-shadow-5">검색</span>
                        </div>
                    </div>
                </div>
             
            </div>
    )
}

export default DateSearchBar2
