import {
  configureStore,
  combineReducers,
  // getDefaultMiddleware,
} from "@reduxjs/toolkit";
// import { createBrowserHistory } from "history";

import nonLive from "../reducers/nonLive-reducer";

const rootReducer = combineReducers({
  nonLive,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
