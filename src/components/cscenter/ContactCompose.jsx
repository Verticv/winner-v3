import DropDownControls from "components/dropdowns/DropDownControls";
import MyPageTitle from "components/myPage/MyPageTitle";
import React, { useState } from "react";
import DownArrowIcon from "../../images/down_arrow_icon.png";

const ContactCompose = () => {
  const [selectedCarrier, setSelectedCarrier] = useState("선택");
  const [isDropdownOpen, setDropdownOpen] = useState(true);
  const [isOptionHovered, setOptionHovered] = useState("");
  const dropDownCellClass = "flex w-full h-30px py-2px bg-gray-1f1f1e items-center hover:bg-brown-r3d3934 px-14px";

  const dropdownButton = (
    <div style={{ width: "130px" }} className="flex h-35px bg-dark-1a1a1a rounded-2px border border-gray-404040 group">
      <input className="w-0 text-16px" />
      <div className="flex w-full text-gray-ccc2b6 font-spoqaMedium text-14px outline-none h-full justify-between items-center tracking-tight">
        <label className="ml-14px cursor-pointer text-r666666 group-hover:text-gray-r8c8c8c">{selectedCarrier}</label>
        <img className="w-10px h-6px object-contain mr-10px" src={DownArrowIcon} alt="arrow" />
      </div>
    </div>
  );

  const buttonLabels = [
    "라이브카지노",
    "슬롯게임",
    "스포츠",
    "호텔카지노",
    "e-스포츠",
    "미니게임",
    "키론가상게임",
    "피싱게임",
    // "티비벳",
    "충전/환전",
    "베팅관련",
    "기타",
  ];
  const OptionButton = ({ title }) => (
    <button
      style={{
        background: isOptionHovered === title ? "linear-gradient(to right, #9d3bbb, #5423a0)" : "",
        color: isOptionHovered === title ? "#fff" : "#444444",
      }}
      className={dropDownCellClass}
      onClick={() => {
        setSelectedCarrier(title);
        setDropdownOpen(false);
      }}
      onMouseEnter={() => setOptionHovered(title)}
      onMouseLeave={() => setOptionHovered("")}
    >
      {title}
    </button>
  );
  const searchDropdown = (
    <div
      style={{ width: "130px" }}
      className="-mt-2px flex flex-col items-center justify-center overflow-hidden bg-gray-1f1f1e rounded-2px border text-r444444 bg-white font-spoqaMedium text-14px tracking-tight"
    >
      {buttonLabels.map((item) => (
        <OptionButton title={item} />
      ))}
    </div>
  );

  return (
    <div>
      <MyPageTitle title="문의하기" />

      <div
        className="shadow-table w-full overflow-hidden rounded-10px p-px mt-10px"
        style={{ background: "linear-gradient(to top, #ededeb, #cb78e6)" }}
      >
        <div className="w-full bg-white rounded-9px overflow-hidden">
          <div className="h-55px bg-gray-2e2e2e border-b border-gray-252525 flex">
            <div
              style={{ width: "139px", borderColor: "#dddddd", background: "#f7f7f7" }}
              className="flex-shrink-0 border-r flex items-center justify-center"
            >
              <p className="text-14px font-spoqaMedium tracking-tight text-r444444 font-bold">유형</p>
            </div>
            <div className="w-full border-r border-gray-252525  bg-gray-323232 px-10px flex items-center">
              <DropDownControls
                buttonChild={dropdownButton}
                isDropdownOpen={isDropdownOpen}
                setDropdownOpen={setDropdownOpen}
              >
                {searchDropdown}
              </DropDownControls>
            </div>
          </div>

          <div className="h-56px bg-gray-2e2e2e border-b border-gray-252525 flex">
            <div
              style={{ width: "139px", borderColor: "#dddddd", background: "#f7f7f7" }}
              className="flex-shrink-0 border-r border-gray-252525 flex items-center justify-center bg-gray-2e2e2e"
            >
              <p className="text-14px font-spoqaMedium tracking-tight text-r444444 font-bold">제목</p>
            </div>
            <div className="w-full  border-r border-gray-252525 bg-gray-323232 px-10px flex items-center">
              <input
                className="outline-none w-full h-35px rounded-4px border border-gray-404040 px-9px text-14px font-spoqa tracking-tight placeholder-gray-828282 bg-dark-1a1a1a text-r444444"
                placeholder="제목을 입력하세요."
              />
            </div>
          </div>

          <div className="bg-gray-2e2e2e border-b border-gray-252525 flex">
            <div
              style={{ width: "139px", borderColor: "#dddddd", background: "#f7f7f7" }}
              className="flex-shrink-0 border-r border-gray-252525 flex items-center justify-center bg-gray-2e2e2e"
            >
              <p className="text-14px font-spoqaMedium tracking-tight text-r444444 font-bold">내용</p>
            </div>
            <div className="w-full border-r border-gray-252525 bg-gray-323232 flex items-center p-10px">
              <textarea
                style={{ height: "325px", resize: "none" }}
                className="scroll-div2 outline-none w-full rounded-4px border border-gray-404040 px-9px py-10px text-14px font-spoqa tracking-tight placeholder-gray-828282 text-r444444 bg-dark-1a1a1a"
                placeholder="욕설, 상대방 비방글, 타사이트 언급, 홍보 등은 경고없이 삭제되며 사이트 이용에 제한을 받을 수 있습니다."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-20px flex items-center justify-center space-x-5px mb-60px">
        <button
          style={{ width: "190px", background: "linear-gradient(to right, #15cfee, #3197e5)" }}
          className="flex items-center justify-center h-52px rounded-6px p-px hover:filter hover:brightness-125 shadow-link"
        >
          <span className=" tracking-tight text-16px text-white text-shadow-5 font-bold">신청하기</span>
        </button>
        <button
          style={{ width: "190px", background: "linear-gradient(to right, #ff7760, #f14a53)" }}
          className="flex items-center justify-center h-52px rounded-6px p-px hover:filter hover:brightness-125 shadow-link"
        >
          <span className=" tracking-tight text-16px text-white text-shadow-5 font-bold">취소하기</span>
        </button>
      </div>
    </div>
  );
};

export default ContactCompose;
