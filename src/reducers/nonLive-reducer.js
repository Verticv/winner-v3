import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import england from "../images/nonLivePage/CenterAccordion/Flag.png";
import spain from "../images/nonLivePage/CenterAccordion/Flag1.png";
import germany from "../images/nonLivePage/CenterAccordion/Flag2.png";

const nonLiveSlice = createSlice({
  name: "nonLive",
  initialState: {
    data: [
      {
        id: 1,
        title: "축구 / 잉글랜드 - 프리미어리그",
        icon: england, // TODO: update this
        date: "2023-03-22 13:00",
        isFavorite: false,
        teams: [
          {
            id: 1,
            team1: "아스널",
            team2: "리버풀",
            score1: 1.25,
            score1ArrowUp: false,
            score1ArrowDown: false,
            score2: 3.15,
            score2ArrowUp: false,
            score2ArrowDown: false,
            score3: 1.16,
            score3ArrowUp: false,
            score3ArrowDown: false,
            difference: "+123",
            isFavorite: false,
            type: "프리미어리그",
          },
          {
            id: 2,
            team1: "첼시",
            team2: "토트넘",
            score1: 2.25,
            score2: 3.88,
            score3: 2.76,
            difference: "+45",
            isFavorite: false,
            type: "프리미어리그",
          },
        ],
      },
      {
        id: 2,
        title: "축구 / 스페인 - 라리가",
        icon: spain, // TODO: update this
        date: "2023-03-22 15:00",
        isFavorite: false,
        teams: [
          {
            id: 3,
            team1: "FC바르셀로나",
            team2: "아틀레티코",
            score1: 2.21,
            score1ArrowUp: false,
            score1ArrowDown: false,
            score2: 2.99,
            score2ArrowUp: false,
            score2ArrowDown: false,
            score3: 3.86,
            score3ArrowUp: false,
            score3ArrowDown: false,
            difference: "+24",
            isFavorite: false,
            type: "라리가",
          },
          {
            id: 4,
            team1: "레알마드리드",
            team2: "레알베티스",
            score1: 1.77,
            score2: 3.87,
            score3: 3.76,
            difference: "+55",
            isFavorite: false,
            type: "라리가",
          },
          {
            id: 5,
            team1: "비야레알",
            team2: "마요르카",
            score1: 2.34,
            score2: 3.88,
            score3: "2.90",
            difference: "+132",
            isFavorite: false,
            type: "라리가",
          },
        ],
      },
      {
        id: 3,
        title: "축구 / 독일 - 분데스리가",
        icon: germany, // TODO: update this
        date: "2023-03-22 17:00",
        isFavorite: false,
        teams: [
          {
            id: 6,
            team1: "아인트라흐트프랑크푸르트",
            team2: "SC프라이부르크",
            score1: 1.11,
            score1ArrowUp: true,
            score1ArrowDown: false,
            score2: "3.10",
            score2ArrowUp: true,
            score2ArrowDown: false,
            score3: 1.77,
            score3ArrowUp: false,
            score3ArrowDown: true,
            difference: "+99",
            isFavorite: false,
            type: "분데스리가",
          },
          {
            id: 7,
            team1: "바이어레버쿠젠",
            team2: "바이에른뮌헨",
            score1: 33.65,
            score1ArrowUp: false,
            score1ArrowDown: true,
            score2: 33.88,
            score2ArrowUp: false,
            score2ArrowDown: true,
            score3: 33.65,
            score3ArrowUp: true,
            score3ArrowDown: false,
            difference: "+44",
            isFavorite: false,
            type: "분데스리가",
          },
          {
            id: 8,
            team1: "RB라이프치히",
            team2: "FC샬케04",
            score1: 2.78,
            score1ArrowUp: false,
            score1ArrowDown: false,
            score2: "3.90",
            score2ArrowUp: false,
            score2ArrowDown: false,
            score3: 2.99,
            score3ArrowUp: false,
            score3ArrowDown: false,
            difference: "+155",
            isFavorite: false,
            type: "분데스리가",
          },
          {
            id: 9,
            team1: "보루시아도르트문트",
            team2: "FSV마인츠05",
            score1: "",
            score1ArrowUp: false,
            score1ArrowDown: false,
            score2: "",
            score2ArrowUp: false,
            score2ArrowDown: false,
            score3: "",
            score3ArrowUp: false,
            score3ArrowDown: false,
            difference: "+99",
            isFavorite: false,
            type: "분데스리가",
          },
        ],
      },
      {
        id: 4,
        title: "축구 / 스페인 - 라리가",
        icon: spain, // TODO: update this
        date: "2023-03-22 19:00",
        isFavorite: false,
        teams: [
          {
            id: 10,
            team1: "세비야",
            team2: "지로나",
            score1: 1.67,
            score1ArrowUp: false,
            score1ArrowDown: false,
            score2: 3.12,
            score2ArrowUp: false,
            score2ArrowDown: false,
            score3: 1.64,
            score3ArrowUp: false,
            score3ArrowDown: false,
            difference: "+45",
            isFavorite: false,
            type: "라리가",
          },
          {
            id: 11,
            team1: "레알소스에다드",
            team2: "카디스",
            score1: "2.10",
            score2: 3.79,
            score3: 3.87,
            difference: "+99",
            isFavorite: false,
            type: "라리가",
          },
        ],
      },
      {
        id: 5,
        title: "축구 / 잉글랜드 - 프리미어리그",
        icon: england, // TODO: update this
        date: "2023-03-22 13:00",
        isFavorite: false,
        teams: [
          {
            id: 12,
            team1: "아스널",
            team2: "리버풀",
            score1: 1.25,
            score1ArrowUp: false,
            score1ArrowDown: false,
            score2: 3.15,
            score2ArrowUp: false,
            score2ArrowDown: false,
            score3: 1.16,
            score3ArrowUp: false,
            score3ArrowDown: false,
            difference: "+123",
            isFavorite: false,
            type: "프리미어리그",
          },
          {
            id: 13,
            team1: "첼시",
            team2: "토트넘",
            score1: 2.25,
            score2: 3.88,
            score3: 2.76,
            difference: "+45",
            isFavorite: false,
            type: "프리미어리그",
          },
        ],
      },
      {
        id: 6,
        title: "축구 / 스페인 - 라리가",
        icon: spain, // TODO: update this
        date: "2023-03-22 15:00",
        isFavorite: false,
        teams: [
          {
            id: 14,
            team1: "FC바르셀로나",
            team2: "아틀레티코",
            score1: 2.21,
            score1ArrowUp: false,
            score1ArrowDown: false,
            score2: 2.99,
            score2ArrowUp: false,
            score2ArrowDown: false,
            score3: 3.86,
            score3ArrowUp: false,
            score3ArrowDown: false,
            difference: "+24",
            isFavorite: false,
            type: "라리가",
          },
          {
            id: 15,
            team1: "레알마드리드",
            team2: "레알베티스",
            score1: 1.77,
            score2: 3.87,
            score3: 3.76,
            difference: "+55",
            isFavorite: false,
            type: "라리가",
          },
          {
            id: 16,
            team1: "비야레알",
            team2: "마요르카",
            score1: 2.34,
            score2: 3.88,
            score3: "2.90",
            difference: "+132",
            isFavorite: false,
            type: "라리가",
          },
        ],
      },
      {
        id: 7,
        title: "축구 / 독일 - 분데스리가",
        icon: germany, // TODO: update this
        date: "2023-03-22 17:00",
        isFavorite: false,
        teams: [
          {
            id: 17,
            team1: "아인트라흐트프랑크푸르트",
            team2: "SC프라이부르크",
            score1: 1.11,
            score1ArrowUp: false,
            score1ArrowDown: false,
            score2: "3.10",
            score2ArrowUp: false,
            score2ArrowDown: false,
            score3: 1.77,
            score3ArrowUp: false,
            score3ArrowDown: false,
            difference: "+99",
            isFavorite: false,
            type: "분데스리가",
          },
          {
            id: 18,
            team1: "바이어레버쿠젠",
            team2: "바이에른뮌헨",
            score1: 2.65,
            score1ArrowUp: false,
            score1ArrowDown: false,
            score2: 3.88,
            score2ArrowUp: false,
            score2ArrowDown: false,
            score3: 2.12,
            score3ArrowUp: false,
            score3ArrowDown: false,
            difference: "+44",
            isFavorite: false,
            type: "분데스리가",
          },
          {
            id: 19,
            team1: "RB라이프치히",
            team2: "FC샬케04",
            score1: 2.78,
            score1ArrowUp: false,
            score1ArrowDown: false,
            score2: "3.90",
            score2ArrowUp: false,
            score2ArrowDown: false,
            score3: 2.99,
            score3ArrowUp: false,
            score3ArrowDown: false,
            difference: "+155",
            isFavorite: false,
            type: "분데스리가",
          },
          {
            id: 20,
            team1: "보루시아도르트문트",
            team2: "FSV마인츠05",
            score1: 2.25,
            score1ArrowUp: false,
            score1ArrowDown: false,
            score2: 4.15,
            score2ArrowUp: false,
            score2ArrowDown: false,
            score3: 2.22,
            score3ArrowUp: false,
            score3ArrowDown: false,
            difference: "+99",
            isFavorite: false,
            type: "분데스리가",
          },
        ],
      },
      {
        id: 8,
        title: "축구 / 스페인 - 라리가",
        icon: spain, // TODO: update this
        date: "2023-03-22 19:00",
        isFavorite: false,
        teams: [
          {
            id: 21,
            team1: "세비야",
            team2: "지로나",
            score1: 1.67,
            score1ArrowUp: false,
            score1ArrowDown: false,
            score2: 3.12,
            score2ArrowUp: false,
            score2ArrowDown: false,
            score3: 1.64,
            score3ArrowUp: false,
            score3ArrowDown: false,
            difference: "+45",
            isFavorite: false,
            type: "라리가",
          },
          {
            id: 22,
            team1: "레알소스에다드",
            team2: "카디스",
            score1: "2.10",
            score2: 3.79,
            score3: 3.87,
            difference: "+99",
            isFavorite: false,
            type: "라리가",
          },
        ],
      },
      {
        id: 9,
        title: "축구 / 잉글랜드 - 프리미어리그",
        icon: england, // TODO: update this
        date: "2023-03-22 17:00",
        isFavorite: false,
        teams: [
          {
            id: 23,
            team1: "아스널",
            team2: "리버풀",
            score1: 1.25,
            score1ArrowUp: false,
            score1ArrowDown: false,
            score2: 3.15,
            score2ArrowUp: false,
            score2ArrowDown: false,
            score3: 1.16,
            score3ArrowUp: false,
            score3ArrowDown: false,
            difference: "+123",
            isFavorite: false,
            type: "프리미어리그",
          },
          {
            id: 24,
            team1: "첼시",
            team2: "토트넘",
            score1: 2.25,
            score2: 3.88,
            score3: 2.76,
            difference: "+45",
            isFavorite: false,
            type: "프리미어리그",
          },
        ],
      },
      {
        id: 10,
        title: "축구 / 스페인 - 라리가",
        icon: spain, // TODO: update this
        date: "2023-03-22 19:00",
        isFavorite: false,
        teams: [
          {
            id: 25,
            team1: "세비야",
            team2: "지로나",
            score1: 1.67,
            score1ArrowUp: false,
            score1ArrowDown: false,
            score2: 3.12,
            score2ArrowUp: false,
            score2ArrowDown: false,
            score3: 1.64,
            score3ArrowUp: false,
            score3ArrowDown: false,
            difference: "+45",
            isFavorite: false,
            type: "라리가",
          },
          {
            id: 26,
            team1: "레알소스에다드",
            team2: "카디스",
            score1: "2.10",
            score2: 3.79,
            score3: 3.87,
            difference: "+99",
            isFavorite: false,
            type: "라리가",
          },
        ],
      },
    ],

    data1: [
      {
        id: 1,
        teams: [
          {
            id: 1,
            team1: "아스널",
            score1: "1.98",
            team3: "무승부",
            score2: "4.20",
            team2: "리버플",
            score3: "3.31",
          },
        ],
      },
    ],

    data2: [
      {
        id: 1,
        teams: [
          {
            id: 1,
            team1: "1팀승 또는 무승부",
            score1: "1.32",
            team3: "1팀승 또는 2팀승",
            score2: "1.23",
            team2: "무승부 또는 2팀승",
            score3: "1.77",
          },
        ],
      },
    ],

    data3: [
      {
        id: 1,
        teams: [
          {
            id: 1,
            team1: "아스널 (리저브)",
            score1: "1.52",
            team2: "리버플 (리저브)",
            score3: "2.53",
          },
        ],
      },
    ],

    data4: [
      {
        id: 1,
        teams: [
          {
            id: 0,
            team1: "오버 (0.5)",
            score1: "1.05",
            team2: "언더 (0.5)",
            score3: "12.80",
            marginBottom: "2px",
          },
          {
            id: 1,
            team1: "오버 (1)",
            score1: "1.06",
            team2: "언더 (1)",
            score3: "11.50",
            marginBottom: "2px",
          },
          {
            id: 2,
            team1: "오버 (1.5)",
            score1: "1.27",
            team2: "언더 (1.5)",
            score3: "4.12",
            marginBottom: "3px",
          },
        ],
      },
    ],

    data5: [
      {
        id: 1,
        teams: [
          {
            id: 1,
            team1: "(-1.75)",
            score1: "32.75",
            team2: "(+1.75)",
            score3: "31.45",

            team3: "(-1.25)",
            score2: "2.09",
            team4: "(+1.25)",
            score4: "1.75",

            team5: "(-0.75)",
            score5: "1.67",
            team6: "(+0.75)",
            score6: "2.20",

            team7: "(-0.25)",

            team8: "(+0.25)",
          },
        ],
      },
    ],

    data6: [
      {
        id: 1,
        teams: [
          {
            id: 0,
            team1: "(-2)",
            score1: "4.30",
            team3: "(+2)",
            score2: "4.50",
            team2: "(+2)",
            score3: "1.56",
          },
          {
            id: 1,
            team1: "(-1)",
            score1: "2.29",
            team3: "(+1)",
            score2: "4.00",
            team2: "(+1)",
            score3: "2.41",
          },
        ],
      },
    ],
    betSlip: {
      data: [],
      isSingle: true,
    },
    liveGame: {
      data: [],
    },
    favoritePreMatch: [
      {
        title: "프리미어리그",
        items: [
          // {
          //   team1: "맨체스터유나이티드",
          //   time: "18:30",
          //   team2: "맨체스터시티",
          //   dateAndTime: "2023-05-14 18:30",
          //   type: "프리미어리그",
          //   t1: "1",
          //   t2: "2.12",
          //   t3: "무",
          //   t4: "3.59",
          //   t5: "2",
          //   t6: "3.62",
          // },
          // {
          //   team1: "맨체스터유나이티드",
          //   time: "18:30",
          //   team2: "맨체스터시티",
          //   dateAndTime: "2023-05-14 18:30",
          //   type: "프리미어리그",
          //   t1: "1",
          //   t2: "2.12",
          //   t3: "무",
          //   t4: "3.59",
          //   t5: "2",
          //   t6: "3.62",
          // },
        ],
      },
    ],
    favoriteLaLiga: [
      {
        title: "라리가",
        items: [
          // {
          //   team1: "FC바르셀로나",
          //   time: "18:30",
          //   team2: "아틀레티코",
          //   dateAndTime: "2023-05-14 18:30",
          //   type: "프리미어리그",
          //   t1: "1",
          //   t2: "icon",
          //   t3: "무",
          //   t4: "icon",
          //   t5: "2",
          //   t6: "icon",
          // },
        ],
      },
    ],
    bundesliga: [
      {
        title: "분데스리가",
        items: [],
      },
    ],
    League: [],
  },
  reducers: {
    setNonLiveData: (_state, action) => ({
      ...action.payload,
      data: action.payload,
    }),
    setBetSlipData: (_state, action) => ({
      ..._state,
      betSlip: {
        data: [
          ..._state.betSlip.data,
          { ...action.payload.data, id: uuidv4() },
        ],
        isSingle: Boolean(
          [..._state.betSlip.data, action.payload.data].length <= 1
        ),
      },
    }),
    setLiveGameData: (_state, action) => ({
      ..._state,
      liveGame: {
        data: [..._state.liveGame.data, { ...action.payload, id: uuidv4() }],
      },
    }),
    addToPreMatchPremierLeague: (_state, action) => ({
      ..._state,
      favoritePreMatch: [
        ..._state.favoritePreMatch,
        action.payload.payload.items,
      ].filter((item) => item.type === "프리미어리그"),
    }),
    addToFavoriteLaLiga: (_state, action) => ({
      ..._state,
      favoriteLaLiga: [
        ..._state.favoriteLaLiga,
        action.payload.payload.items,
      ].filter((item) => item.type === "라리가"),
    }),
    addToBundesliga: (_state, action) => ({
      ..._state,
      bundesliga: [..._state.bundesliga, action.payload.payload.items].filter(
        (item) => item.type === "분데스리가"
      ),
    }),
    addToLeague: (_state, action) => ({
      ..._state,
      League: [..._state.League, action.payload.payload.title],
    }),
    deleteFavoriteLeagueById: (_state, action) => ({
      ..._state,
      League: [..._state.League].filter((item) => {
        return item.id !== action.payload.id;
      }),
    }),
    deleteAllFavoriteCards: (_state, action) => ({
      ..._state,
      favoritePreMatch: [],
      favoriteLaLiga: [],
      bundesliga: [],
      League: [],
    }),
    deleteFavoritePreMatchCardById: (_state, action) => ({
      ..._state,
      favoritePreMatch: [..._state.favoritePreMatch].filter((item) => {
        return item.id !== action.payload.id;
      }),
    }),
    deleteFavoriteLaLigaCardById: (_state, action) => ({
      ..._state,
      favoriteLaLiga: [..._state.favoriteLaLiga].filter(
        (item) => item.id !== action.payload.id
      ),
    }),
    deleteFavoriteBundesligaCardById: (_state, action) => ({
      ..._state,
      bundesliga: [..._state.bundesliga].filter(
        (item) => item.id !== action.payload.id
      ),
    }),
    deleteBetSlipCardById: (_state, action) => ({
      ..._state,
      betSlip: {
        data: [..._state.betSlip.data].filter(
          (item) => item.id !== action.payload.id
        ),
        isSingle: Boolean(
          [..._state.betSlip.data].filter(
            (item) => item.id !== action.payload.id
          ).length <= 1
        ),
      },
    }),
    deleteAllBetSlipCards: (_state, action) => ({
      ..._state,
      betSlip: {
        data: [],
        isSingle: true,
      },
    }),
  },
});

const { actions, reducer } = nonLiveSlice;
export const {
  setNonLiveData,
  setBetSlipData,
  deleteBetSlipCardById,
  deleteAllBetSlipCards,
  setLiveGameData,
  addToPreMatchPremierLeague,
  addToFavoriteLaLiga,
  addToBundesliga,
  addToLeague,
  deleteAllFavoriteCards,
  deleteFavoritePreMatchCardById,
  deleteFavoriteLaLigaCardById,
  deleteFavoriteLeagueById,
  deleteFavoriteBundesligaCardById,
} = actions;
export default reducer;
