import DropDownControls from "components/dropdowns/DropDownControls";
import Pagination from "components/myPage/Pagination";
import React, { useState } from "react";
import { useHistory } from "react-router";
import DownArrowIcon from "../../images/arrows/arrow1.png";
import SearchIcon from "../../images/myPage/search.png";
import PurpleSpeaker from "../../images/freeBoard/purple_speaker.png";
import BlueSpeaker from "../../images/freeBoard/blue_speaker_v3.png";
import WinnerLogo from "../../images/freeBoard/winner_logo_v3.png";
import Rank1 from "../../images/freeBoard/1_v3.png";
import Rank2 from "../../images/freeBoard/2_v3.png";
import Rank3 from "../../images/freeBoard/3_v3.png";
import Rank4 from "../../images/freeBoard/4_v3.png";
import Rank5 from "../../images/freeBoard/5_v3.png";

const FreeBoardMain = () => {
  const cellArray = [
    {
      id: 0,
      text: "입금규정 필독",
      isRead: false,
      date: "2021.06.29",
      time: "07:35",
      type: "공지",
      isClicked: true,
      path: "/freeboard/view/0",
    },
    {
      id: 1,
      text: "메신저 고객센터 사칭주의",
      isRead: false,
      date: "2021.06.29",
      time: "07:35",
      type: "공지",
      path: "/freeboard/view/1",
    },
    {
      id: 2,
      text: "슬롯 롤링 보너스 요율 X2배 증가 안내",
      isRead: false,
      date: "2021.06.29",
      time: "07:35",
      type: "공지",
      path: "/freeboard/view/2",
    },
    {
      id: 3,
      text: "진행중 이벤트 안내 (2021.06.02)",
      isRead: true,
      date: "2021.06.29",
      time: "07:35",
      type: "이벤트",
      path: "/freeboard/view/3",
    },
    {
      id: 4,
      text: "스포츠 미니게임 충전 보너스 (변경 21.05.21)",
      isRead: true,
      date: "2021.06.29",
      time: "07:35",
      type: "이벤트",
      path: "/freeboard/view/4",
    },
    {
      id: 5,
      text: "라이브 카지노 충전 보너스",
      isRead: true,
      date: "2021.06.29",
      time: "07:35",
      type: "이벤트",
      path: "/freeboard/view/5",
    },
    {
      id: 6,
      text: "다폴더 적중 보너스 지금 (변경 21.04.16)",
      isRead: true,
      date: "2021.06.29",
      time: "07:35",
      type: "이벤트",
      path: "/freeboard/view/6",
    },
    {
      id: 7,
      text: "카지노 주간 낙첨 이벤트! (변경 21.06.07)",
      isRead: true,
      date: "2021.06.29",
      time: "07:35",
      type: "이벤트",
      path: "/freeboard/view/7",
    },
    {
      id: 8,
      text: "슬롯 충전 남첨 이벤트 (변경 21.06.07)",
      isRead: true,
      date: "2021.06.29",
      time: "07:35",
      type: "이벤트",
      path: "/freeboard/view/8",
    },
    {
      id: 9,
      text: "신규 이벤트 가입",
      isRead: false,
      date: "2021.06.29",
      time: "07:35",
      type: "이벤트",
      path: "/freeboard/view/9",
    },
    {
      id: 10,
      text: "슬롯 페이백 복구",
      isRead: false,
      date: "2021.06.29",
      time: "07:35",
      type: "이벤트",
      path: "/freeboard/view/10",
    },
    {
      id: 2805,
      text: "아챔 올플핸",
      isRead: true,
      isBetHistory: true,
      replies: 20,
      date: "2021.06.28",
      time: "15:36",
      type: "일반",
      path: "/freeboard/view2/2805",
      author: "필라델피아",
      level: 3,
    },
    {
      id: 2804,
      text: "다폴더 이벤트",
      isRead: true,
      isBetHistory: true,
      replies: 2,
      date: "2021.06.28",
      time: "15:36",
      type: "일반",
      path: "/freeboard/view2/2804",
      author: "하이도1207",
      level: 1,
    },
    {
      id: 2803,
      text: "다폴더 이벤트 신청합니다.",
      isRead: true,
      isBetHistory: true,
      date: "2021.06.28",
      time: "15:36",
      type: "일반",
      path: "/freeboard/view2/2803",
      author: "소유",
      level: 1,
    },
    {
      id: 2802,
      text: "다폴드 이벤트 참여",
      isRead: true,
      isBetHistory: true,
      date: "2021.06.28",
      time: "15:36",
      type: "일반",
      path: "/freeboard/view2/2802",
      author: "보라매유아인",
      level: 1,
    },
    {
      id: 2801,
      text: "다폴더 이벤트 신청합니다.",
      isRead: true,
      isBetHistory: true,
      date: "2021.06.28",
      time: "15:36",
      type: "일반",
      path: "/freeboard/view2/2801",
      author: "아기히뽀",
      level: 4,
    },
    {
      id: 2800,
      text: "다폴더 이벤트 신청합니다.",
      isRead: true,
      isBetHistory: true,
      date: "2021.06.28",
      time: "15:36",
      type: "일반",
      path: "/freeboard/view2/2800",
      author: "소유",
      level: 5,
    },
    {
      id: 2799,
      text: "다폴",
      isRead: true,
      isBetHistory: true,
      date: "2021.06.28",
      time: "15:36",
      type: "일반",
      path: "/freeboard/view2/2799",
      author: "야리직",
      level: 1,
    },
    {
      id: 2798,
      text: "다폴더",
      isRead: true,
      isBetHistory: true,
      date: "2021.06.28",
      time: "15:36",
      type: "일반",
      path: "/freeboard/view2/2798",
      author: "신풍사우나",
      level: 2,
    },
    {
      id: 2797,
      text: "아챔 올플핸",
      isRead: true,
      isBetHistory: true,
      date: "2021.06.28",
      time: "15:36",
      type: "일반",
      path: "/freeboard/view2/2797",
      author: "필라델피아",
      level: 3,
    },
    {
      id: 2796,
      text: "다폴더 이벤트",
      isRead: true,
      isBetHistory: true,
      date: "2021.06.28",
      time: "15:36",
      type: "일반",
      path: "/freeboard/view2/2796",
      author: "하이도1207",
      level: 1,
    },
    {
      id: 2795,
      text: "다폴더 이벤트 신청합니다.",
      isRead: true,
      isBetHistory: true,
      date: "2021.06.28",
      time: "15:36",
      type: "일반",
      path: "/freeboard/view2/2795",
      author: "소유",
      level: 1,
    },
    {
      id: 2794,
      text: "다폴더 이벤트 참여",
      isRead: true,
      isBetHistory: true,
      date: "2021.06.28",
      time: "15:36",
      type: "일반",
      path: "/freeboard/view2/2794",
      author: "보라매유아인",
      level: 1,
    },
    {
      id: 2793,
      text: "다폴더 이벤트 신청합니다.",
      isRead: true,
      isBetHistory: true,
      date: "2021.06.28",
      time: "15:36",
      type: "일반",
      path: "/freeboard/view2/2793",
      author: "아기히뽀",
      level: 4,
    },
    {
      id: 2792,
      text: "다폴더 이벤트 신청합니다.",
      isRead: true,
      isBetHistory: true,
      date: "2021.06.28",
      time: "15:36",
      type: "일반",
      path: "/freeboard/view2/2792",
      author: "소유",
      level: 5,
    },
  ];

  const history = useHistory();
  const [page, setPage] = useState(0);
  const [selectedCarrier, setSelectedCarrier] = useState("제목");
  const [isDropdownOpen, setDropdownOpen] = useState(true);

  const dropDownCellClass =
    "flex w-full h-30px py-2px bg-gray-1f1f1e items-center hover:bg-brown-r3d3934 px-12px";

  const searchDropdown = (
    <div className="mt-4px flex flex-col items-center justify-center w-120px overflow-hidden rounded-2px border  font-spoqaMedium text-14px tracking-tight border-gray-404040 text-gray-ccc2b6 bg-dark-1a1a1a ">
      <div className="w-full mt-2px h-full overflow-x-hidden border-gray-2c2c2c">
        <button
          className={dropDownCellClass}
          onClick={() => {
            setSelectedCarrier("제목");
            setDropdownOpen(false);
          }}
        >
          제목
        </button>
        <button
          className={dropDownCellClass}
          onClick={() => {
            setSelectedCarrier("본문");
            setDropdownOpen(false);
          }}
        >
          본문
        </button>
        <button
          className={dropDownCellClass}
          onClick={() => {
            setSelectedCarrier("작성자");
            setDropdownOpen(false);
          }}
        >
          작성자
        </button>
      </div>
    </div>
  );

  const dropdownButton = (
    <div
      style={{ backgroundColor: "#ffffff", borderColor: "#682aa7" }}
      className="flex w-120px h-42px bg-dark-1a1a1a rounded-6px border border-gray-404040 group"
    >
      <input className="w-0 text-16px" />
      <div className="flex w-full text-gray-ccc2b6 font-spoqaMedium text-14px outline-none h-full justify-between items-center tracking-tight">
        <label
          style={{ color: "#666666" }}
          className="ml-13px mb-px cursor-pointer group-hover:text-gray-r8c8c8c"
        >
          {selectedCarrier}
        </label>
        <img className="object-none mr-9px" src={DownArrowIcon} alt="arrow" />
      </div>
    </div>
  );

  const InboxSearch = (
    <div
      style={{
        height: "82px",
        background: "linear-gradient(to right, #622d8a, #3b207b)",
        borderRadius: "6px",
      }}
      className="w-full bg-gray-2e2e2e flex items-center justify-center space-x-10px"
    >
      <DropDownControls
        buttonChild={dropdownButton}
        isDropdownOpen={isDropdownOpen}
        setDropdownOpen={setDropdownOpen}
      >
        {searchDropdown}
      </DropDownControls>

      <div
        style={{ width: "381px", borderColor: "#682aa7", borderRadius: "6px" }}
        className="flex h-42px bg-dark-1a1a1a rounded-6px border border-gray-404040 relative"
      >
        <input
          className="rounded-6px pl-9px pb-px placeholder-gray-r7c7c7c w-full text-gray-c8c8c8 font-spoqaMedium text-14px outline-none h-full justify-between items-center tracking-tight bg-dark-1a1a1a"
          placeholder="검색어를 입력해 주세요"
        />
        <button
          style={{
            background: "linear-gradient(to top, #4f3a7a, #e597ff)",
            boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.6)",
          }}
          className="flex items-center justify-center w-42px h-42px rounded-6px bg-gradient-to-b from-gray-e8b888  to-gray-4b3b09 flex-shrink-0  filter hover:brightness-125 shadow-btn absolute -right-px -top-px z-10"
        >
          <div
            style={{ background: "linear-gradient(to top, #6b22ff, #df52ff)" }}
            className="flex items-center justify-center w-40px  h-40px rounded-6px bg-gradient-to-b from-golden-gradLight  to-golden-gradDark"
          >
            <img src={SearchIcon} alt="" />
          </div>
        </button>
      </div>
    </div>
  );

  function InboxList({ items }) {
    return items.map((item, index) => (
      <button
        key={item.id}
        className={`font-spoqaMedium text-14px tracking-tight text-gray-c8c8c8 h-56px w-full  group`}
        onClick={() => history.push(item.path)}
      >
        <div
          style={{
            backgroundColor:
              item.type === "공지"
                ? "#fae9ff"
                : item.type === "이벤트"
                ? "#e6f5ff"
                : item.id % 2 === 0
                ? "#f7f7f7"
                : "#ffffff",
            borderBottomWidth: index === items.length - 1 ? 0 : 1,
            borderColor: "#dddddd",
          }}
          className="flex items-center font-spoqaMedium text-14px  text-gray-c8c8c8 h-56px border-b border-gray-252525"
        >
          <div
            style={{ width: "126px" }}
            className="font-spoqaMedium text-14px tracking-tight text-gray-c8c8c8 flex items-center justify-center"
          >
            {item.type === "공지" ? (
              <img className="ml-2px mt-px" src={PurpleSpeaker} alt="" />
            ) : item.type === "이벤트" ? (
              <img className="ml-2px mt-px" src={BlueSpeaker} alt="" />
            ) : (
              <span className="mt-px">{item.id}</span>
            )}
          </div>

          <div
            style={{ width: "796px" }}
            className={`flex items-center font-spoqaMedium text-gray-c8c8c8 group ml-px tracking-tight`}
          >
            {item.type === "공지" ? (
              <div
                style={{
                  maxWidth: "92px",
                  minWidth: "45px",
                  marginTop: "1px",
                  backgroundColor: "#9c3bbb",
                }}
                className="px-10px h-25px rounded-full bg-blue-0469a3 flex items-center justify-center text-white text-12px mr-14px flex-shrink-0 "
              >
                공지
              </div>
            ) : item.type === "이벤트" ? (
              <div
                style={{
                  maxWidth: "92px",
                  minWidth: "53px",
                  marginTop: "1px",
                  backgroundColor: "#714ce8",
                }}
                className="pl-10px pr-8px h-25px rounded-full bg-yellow-c08029 flex items-center justify-center text-white text-12px mr-10px flex-shrink-0 tracking-tight"
              >
                이벤트
              </div>
            ) : (
              <div></div>
            )}
            <p
              className={`${
                item.type === "공지"
                  ? "text-blue-6cbbe9 group-hover:text-blue-87eaff mr-5px -ml-px mt-2px"
                  : item.type === "이벤트"
                  ? "text-yellow-d2b28f group-hover:text-yellow-ffdeb3 mr-4px mt-3px"
                  : "group-hover:text-gray-fafafa mr-9px -ml-px mt-px"
              } truncate text-left `}
              style={{
                letterSpacing: "-0.090em",
                maxWidth: "680px",
                color:
                  item.type === "공지"
                    ? "#3b2461"
                    : item.type === "이벤트"
                    ? "#3c3096"
                    : "#666666",
              }}
            >
              {item.text}
            </p>
            {item.replies && (
              <div
                style={{ backgroundColor: "#f04281" }}
                className="h-19px mt-px pl-7px pr-7px rounded-full flex items-center justify-center text-white font-roboto text-12px bg-red-e9441d mr-10px -ml-4px flex-shrink-0"
              >
                <p className="h-12px flex items-center">{item.replies}</p>
              </div>
            )}
            {item.isBetHistory === true && (
              <div
                style={{ backgroundColor: "#936cee", maxWidth: "92px" }}
                className="h-25px pl-10px pr-9px mt-px rounded-full flex items-center justify-center text-white font-spoqaMedium text-12px flex-shrink-0"
              >
                베팅내역
              </div>
            )}
            {item.isRead === false && (
              <div
                style={{ backgroundColor: "#f04281" }}
                className="w-20px h-19px mt-px bg-red-e9441d rounded-full text-12px text-white flex items-center justify-center font-roboto flex-shrink-0"
              >
                <p className="flex items-center h-12px -ml-px">N</p>
              </div>
            )}
          </div>

          <div
            style={{ width: "135px" }}
            className={`flex justify-center items-center font-spoqaMedium tracking-tight text-gray-c8c8c8 text-center`}
          >
            {item.type !== "일반" ? (
              <img
                src={WinnerLogo}
                alt=""
                className="-mt-3px -ml-3px flex-shrink-0"
              />
            ) : (
              <div className="flex space-x-4px flex-shrink-0 ml-3px">
                {item.level === 1 ? (
                  <img className="object-none" src={Rank1} alt="" />
                ) : item.level === 2 ? (
                  <img className="object-none" src={Rank2} alt="" />
                ) : item.level === 3 ? (
                  <img className="object-none" src={Rank3} alt="" />
                ) : item.level === 4 ? (
                  <img className="object-none" src={Rank4} alt="" />
                ) : (
                  <img className="object-none" src={Rank5} alt="" />
                )}
                <p style={{ maxWidth: "120px" }} className="mt-2px truncate">
                  {item.author}
                </p>
              </div>
            )}
          </div>
          <div
            style={{ width: "190px" }}
            className="flex items-center justify-center text-gray-c8c8c8 font-spoqa -ml-10px mt-px"
          >
            {item.type !== "일반" ? (
              ""
            ) : (
              <div>
                {item.date} {item.time}
              </div>
            )}
          </div>
        </div>
      </button>
    ));
  }

  return (
    <div className="w-full mt-5px">
      <div
        className="shadow-table w-full overflow-hidden rounded-4px p-px "
        style={{
          background: "linear-gradient(to top, #ededeb, #cb78e6)",
          borderRadius: "10px",
        }}
      >
        <div
          style={{ borderRadius: "10px" }}
          className="w-full rounded-4px bg-gray-323232 overflow-hidden"
        >
          <div
            style={{
              background: "linear-gradient(to right, #9d3bbb, #5423a0)",
            }}
            className="h-55px bg-gray-2e2e2e w-full flex items-center text-14px font-spoqaMedium tracking-tight text-gray-ccc2b6 rounded-t-4px  border-b border-gray-252525"
          >
            <div
              style={{ width: "124px", color: "#eeeeee" }}
              className="flex items-center justify-center mt-px ml-px mb-2px"
            >
              번호
            </div>
            <div
              style={{ width: "798px", color: "#eeeeee" }}
              className="flex items-center justify-center mt-px mb-2px"
            >
              제목
            </div>
            <div
              style={{ width: "135px", color: "#eeeeee" }}
              className="flex items-center justify-center mt-px mb-2px"
            >
              닉네임
            </div>
            <div
              style={{ width: "190px", color: "#eeeeee" }}
              className="flex items-center justify-center mt-px mb-2px"
            >
              등록일시
            </div>
          </div>
          <div className="flex flex-col w-full">
            <InboxList items={cellArray} />
          </div>
        </div>
      </div>

      <div className="mt-20px flex justify-end">
        <button
          onClick={() => history.push("/freeboard/compose")}
          className="flex items-center justify-center h-36px w-118px mr-px rounded-4px bg-gradient-to-t from-blue-3d4a8d to-blue-88d9e8 hover:filter hover:brightness-125 shadow-link"
        >
          <div
            style={{
              background: "linear-gradient(to right, #15cfee, #3197e5)",
              boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
              borderRadius: "6px",
            }}
            className="flex items-center justify-center h-36px w-118px bg-gradient-to-b from-blue-528ccd to-blue-396084 cursor-pointer"
          >
            <span
              style={{ textShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)" }}
              className="font-spoqaMedium tracking-tight text-14px text-blue-d6f3ff pt-2px text-white mb-3px ml-2px"
            >
              작성하기
            </span>
          </div>
        </button>
      </div>

      <div className="flex w-full justify-center mt-4px mb-60px">
        <Pagination page={page} setPage={setPage} />
      </div>

      <div className="-mt-29px mb-60px mr-px">{InboxSearch}</div>
    </div>
  );
};

export default FreeBoardMain;
