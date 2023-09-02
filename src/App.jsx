import React, { useState } from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import { Switch, Route } from "react-router-dom";
import MyPage from "pages/MyPage";
import DistributorPage from "pages/DistributorPage";
import AttendPage from "pages/AttendPage";
import MoneyPage from "pages/MoneyPage";
import CSCenterPage from "pages/CSCenterPage";
import GameResultsPage from "pages/GameResultsPage";
import Freeboard from "pages/Freeboard";
import MinigamesPage from "pages/MinigamesPage";
import EsportsPage from "pages/EsportsPage";
import LiveCasinoPage from "pages/LiveCasinoPage";
import HotelCasino from "pages/HotelCasinoPage";
import TvBetPage from "pages/TvBetPage";
import NonLiveBet from "pages/NonLiveBet";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReauthenticatePopup from "components/popups/ReauthenticatePopup";

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const location = useLocation();
  const [showReauth, setShowReauth] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("/reauth")) {
      setShowReauth(true);
    } else {
      setShowReauth(false);
    }
  }, [location]);

  return (
    <div style={{ backgroundColor: "#000" }}>
      <Switch>
        {/*   
          Example to pass props to a route.
          <Router>
            <Route path="/home" render={() => <Home prop={prop} />} />
          </Router> 
        */}
        <Route path="/mypage">
          <MyPage isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <Route path="/live-casino">
          <LiveCasinoPage isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <Route path="/distributor-page">
          <DistributorPage isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <Route path="/attendance">
          <AttendPage isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <Route path="/money">
          <MoneyPage isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <Route path="/cscenter">
          <CSCenterPage isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <Route path="/gameresults">
          <GameResultsPage isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <Route path="/freeboard">
          <Freeboard isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <Route path="/bet-combination*">
          <NonLiveBet isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <Route path="/minigame">
          <MinigamesPage isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <Route path="/esports">
          <EsportsPage isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <Route path="/hotel-casino">
          <HotelCasino isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <Route path="/tvbet">
          <TvBetPage isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <Route path="*">
          <MainPage isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
        </Route>
      </Switch>

      {showReauth && (
        <div
          onClick={() => setShowReauth(false)}
          className="fixed flex items-center justify-center w-screen h-screen bg-black bg-opacity-60 z-50 left-0 top-0"
        >
          <ReauthenticatePopup setPopupOpen={setShowReauth} />
        </div>
      )}
    </div>
  );
}

export default App;
