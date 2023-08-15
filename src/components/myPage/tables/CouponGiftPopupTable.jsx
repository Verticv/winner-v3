import React, { useState } from "react";
import '../../myPage/RadioButton.css'

const CouponGiftPopupTable = () => {
    const [isChecked, setChecked] = useState(null);

    const RadioButton = ({ id }) => (
        <input
            type="checkbox"
            name="gender"
            checked={isChecked === id}
            onChange={() => setChecked(id)}
        />
    );

    const username = "louie32"
    const nickname = "위너테스트2"

    return (
        <div style={{width:'550px', height:'330px',background: "linear-gradient(to top, #ededeb, #cb78e6)"}} 
        className="overflow-auto shadow-table rounded-10px p-px scroll-div">
          
            <div className="flex flex-col justify-center rounded-10px">
                <div className="bg-gray-2b2b2a rounded-t-10px text-14px tracking-tight text-gray-ccc2b6 h-56px border-b  flex items-center"
                style={{ background: "linear-gradient(to right, #9d3bbb, #5423a0)" , color:"#eeeeee",borderColor:"#dddddd"}}>
                    <div>
                        <td style={{width:'143px'}} className="text-center">선택</td>
                        <td style={{width:'198px'}} className="text-center">아이디</td>
                        <td style={{width:'199px'}}className="text-center">별명</td>
                    </div>
                </div>
                <div
                    style={{ height: "280px" }}
                    className="w-full text-585858 text-14px tracking-tight"
                >
                <div className=" text-14px tracking-tight text-r666666 h-56px w-full border-b border-gray-dddddd flex items-center bg-white">
                        <td style={{width:'143px'}} className="text-center pt-6px">
                            <RadioButton id={0} />
                        </td>
                        <td style={{width:'198px'}} className="text-center flex justify-center">
                            <p style={{ width: '118px', textOverflow: 'unset', overflow: 'hidden', whiteSpace: 'nowrap' }}>{"louie32examplelouie32example".length > 16 ? `${"louie32examplelouie32example".slice(0, 16)}...` : "louie32examplelouie32example"}</p>
                        </td>
                        <td style={{width:'199px'}} className="text-center flex justify-center">
                            <p style={{ width: '151px', textOverflow: 'unset', overflow: 'hidden', whiteSpace: 'nowrap' }}>{"위너테스트2위너테스트2위너테스트".length > 12 ? `${"위너테스트2위너테스트2위너테스트".slice(0, 12)}...` : "위너테스트2위너테스트2위너테스트"}</p>
                        </td>
                    </div>
                    <div style={{background:'#f7f7f7'}} className="text-14px tracking-tight text-r666666 h-56px w-full border-b border-gray-dddddd flex items-center">
                        <td style={{width:'143px'}} className="text-center pt-6px">
                            <RadioButton id={1} />
                        </td>
                        <td style={{width:'198px'}} className="text-center flex justify-center">
                            <p style={{ width: '118px', textOverflow: 'unset', overflow: 'hidden', whiteSpace: 'nowrap' }}>{username.length > 16 ? `${username.slice(0, 16)}...` : username}</p>
                        </td>
                        <td style={{width:'199px'}} className="text-center flex justify-center">
                            <p style={{ width: '151px', textOverflow: 'unset', overflow: 'hidden', whiteSpace: 'nowrap' }}>{nickname.length > 12 ? `${nickname.slice(0, 12)}...` : nickname}</p>
                        </td>
                    </div>
                    <div className="bg-white text-14px tracking-tight text-r666666 h-56px w-full border-b border-gray-dddddd flex items-center">
                        <td style={{width:'143px'}} className="text-center pt-6px">
                            <RadioButton id={2} />
                        </td>
                        <td style={{width:'198px'}} className="text-center flex justify-center">
                            <p style={{ width: '118px', textOverflow: 'unset', overflow: 'hidden', whiteSpace: 'nowrap' }}>{username.length > 16 ? `${username.slice(0, 16)}...` : username}</p>
                        </td>
                        <td style={{width:'199px'}} className="text-center flex justify-center">
                            <p style={{ width: '151px', textOverflow: 'unset', overflow: 'hidden', whiteSpace: 'nowrap' }}>{nickname.length > 12 ? `${nickname.slice(0, 12)}...` : nickname}</p>
                        </td>
                    </div>
                    <div style={{background:'#f7f7f7'}} className="text-14px tracking-tight text-r666666 h-56px w-full border-b border-gray-dddddd flex items-center">
                        <td style={{width:'143px'}} className="text-center pt-6px">
                            <RadioButton id={3} />
                        </td>
                        <td style={{width:'198px'}} className="text-center flex justify-center">
                            <p style={{ width: '118px', textOverflow: 'unset', overflow: 'hidden', whiteSpace: 'nowrap' }}>{username.length > 16 ? `${username.slice(0, 16)}...` : username}</p>
                        </td>
                        <td style={{width:'199px'}} className="text-center flex justify-center">
                            <p style={{ width: '151px', textOverflow: 'unset', overflow: 'hidden', whiteSpace: 'nowrap' }}>{nickname.length > 12 ? `${nickname.slice(0, 12)}...` : nickname}</p>
                        </td>
                    </div>
                    <div className="bg-white text-14px tracking-tight text-r666666 h-56px w-full border-b border-gray-dddddd flex items-center">
                        <td style={{width:'143px'}} className="text-center pt-6px">
                            <RadioButton id={4} />
                        </td>
                        <td style={{width:'198px'}} className="text-center flex justify-center">
                            <p style={{ width: '118px', textOverflow: 'unset', overflow: 'hidden', whiteSpace: 'nowrap' }}>{username.length > 16 ? `${username.slice(0, 16)}...` : username}</p>
                        </td>
                        <td style={{width:'199px'}} className="text-center flex justify-center">
                            <p style={{ width: '151px', textOverflow: 'unset', overflow: 'hidden', whiteSpace: 'nowrap' }}>{nickname.length > 12 ? `${nickname.slice(0, 12)}...` : nickname}</p>
                        </td>
                    </div>
                    <div style={{background:'#f7f7f7'}} className="text-14px tracking-tight text-r666666 h-56px w-full border-b border-gray-dddddd flex items-center">
                        <td style={{width:'143px'}} className="text-center pt-6px">
                            <RadioButton id={5} />
                        </td>
                        <td style={{width:'198px'}} className="text-center flex justify-center">
                            <p style={{ width: '118px', textOverflow: 'unset', overflow: 'hidden', whiteSpace: 'nowrap' }}>{username.length > 16 ? `${username.slice(0, 16)}...` : username}</p>
                        </td>
                        <td style={{width:'199px'}} className="text-center flex justify-center">
                            <p style={{ width: '151px', textOverflow: 'unset', overflow: 'hidden', whiteSpace: 'nowrap' }}>{nickname.length > 12 ? `${nickname.slice(0, 12)}...` : nickname}</p>
                        </td>
                    </div>
                    <div className="bg-white text-14px tracking-tight text-r666666 h-56px w-full border-b border-gray-dddddd flex items-center">
                        <td style={{width:'143px'}} className="text-center pt-6px">
                            <RadioButton id={6} />
                        </td>
                        <td style={{width:'198px'}} className="text-center flex justify-center">
                            <p style={{ width: '118px', textOverflow: 'unset', overflow: 'hidden', whiteSpace: 'nowrap' }}>{username.length > 16 ? `${username.slice(0, 16)}...` : username}</p>
                        </td>
                        <td style={{width:'199px'}} className="text-center flex justify-center">
                            <p style={{ width: '151px', textOverflow: 'unset', overflow: 'hidden', whiteSpace: 'nowrap' }}>{nickname.length > 12 ? `${nickname.slice(0, 12)}...` : nickname}</p>
                        </td>
                    </div>
                    <div style={{background:'#f7f7f7'}} className="text-14px tracking-tight text-r666666 h-56px w-full flex items-center">
                        <td style={{width:'143px'}} className="text-center pt-6px">
                            <RadioButton id={7} />
                        </td>
                        <td style={{width:'198px'}} className="text-center flex justify-center">
                            <p style={{ width: '118px', textOverflow: 'unset', overflow: 'hidden', whiteSpace: 'nowrap' }}>{username.length > 16 ? `${username.slice(0, 16)}...` : username}</p>
                        </td>
                        <td style={{width:'199px'}} className="text-center flex justify-center">
                            <p style={{ width: '151px', textOverflow: 'unset', overflow: 'hidden', whiteSpace: 'nowrap' }}>{nickname.length > 12 ? `${nickname.slice(0, 12)}...` : nickname}</p>
                        </td>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CouponGiftPopupTable;
