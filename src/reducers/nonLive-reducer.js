import { createSlice } from "@reduxjs/toolkit";
import england from "../images/nonLivePage/CenterAccordion/Flag.png";

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
          },
        ],
      },
      {
        id: 2,
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
          },
        ],
      },
    ],
  },
  reducers: {
    setNonLiveData: (_state, action) => ({
      data: action.payload,
    }),
  },
});

const { actions, reducer } = nonLiveSlice;
export const { setNonLiveData } = actions;
export default reducer;
