import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./helpers/Scrollbars.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "helpers/scrollToTop";
import { Provider } from "react-redux";
import { store } from "store/store";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
