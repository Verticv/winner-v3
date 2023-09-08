import React from 'react'

const SportsGamePolicyTable1 = ({array}) => {

    const Cell = ({
        type, 
        typeColor, 
        overtime, 
        ruleText, 
        ruleText2 = null
    }) => (
        <tr className={`${ruleText2 ? "h-73px" : "h-56px"}   text-13px tracking-tight text-r444444  w-full border-b border-dddddd last:border-b-0 pt-px bg-white`}>
            <td style={{width: "162px", color: typeColor}} className="f h-55px text-center">{type}</td>
            <td style={{width: "86px", color: overtime === null ? "#cb694b" : overtime === true ? "#dbae00" : "#929292"}} className=" h-55px text-center">{overtime === null ? "연장포함" : overtime === true ? "연장제외" : "연장없음"}</td>
            <td style={{width: "792px"}} className={`${ruleText2 ? "-space-y-4px" : ""} h-56px pl-20px`}>
                <p style={{letterSpacing:'-0.04em'}}>{ruleText}</p>
                <p style={{letterSpacing:'-0.04em'}}>{ruleText2}</p>
            </td>
        </tr>
    )

    function Cells({ items }) {     
        return items.map(item => (
            <Cell type={item.type} typeColor={item.typeColor} overtime={item.overtime} ruleText={item.ruleText} ruleText2={item.ruleText2} />           
        )
    )}

  return (
      <div className="shadow-table w-full overflow-hidden rounded-10px p-px"
          style={{ background: "linear-gradient(to top, #ededeb, #cb78e6)" }}
        >
        <table className="w-full rounded-10px overflow-hidden">
              <thead className="text-14px tracking-tight  h-54px border-b  pt-px mt-px font-semibold"
              style={{ background: "linear-gradient(to right, #9d3bbb, #5423a0)" , color:"#eeeeee",borderColor:"#dddddd"}}>
                <tr>
                    <td style={{width: "162px"}} className="text-center">베팅타입</td>
                    <td style={{width: "86px"}} className="text-center">적용시간</td>
                    <td style={{width: "772px"}} className="text-center"><span className='-ml-17px'>베팅룰</span></td>
                </tr>
            </thead>
            <tbody className="w-full text-r444444 text-14px tracking-tight">       
                                     
                <Cells items={array} />        

            </tbody>
        </table> 
      </div>    
    )
}

export default SportsGamePolicyTable1
