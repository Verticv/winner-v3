import React, { useState } from "react";
import PopupControls from "../../popups/PopupControls";
import LoginPopup from "../../popups/LoginPopup";
import SignupPopup from "../../popups/SignupPopup";

import TopLogo from "../../../images/top_logo.png";
import AuthButton from "./AuthButton";
import LoggedInHeader from "./LoggedInHeader";
import CountryButton from "./CountryButton";
import { Link } from "react-router-dom";

const TopBar = ({ isAuthenticated, setAuth }) => {
  const [isPopupOpen, setPopupOpen] = useState(true);

  const LoginButton = <AuthButton buttonText="로그인" />;
  const SignUpButton = <AuthButton buttonText="회원가입" />;

  return (
    <div className="relative w-full z-50 bg-r362574 flex flex-col items-start limit:items-center limit1920:items-center">
      <div className="w-full h-full absolute"></div>
      <div style={{ width: "1260px" }} className="z-50 w-full">
        <div className="">
          <div style={{ height: "43px" }} className="relative flex justify-between flex-row flex-shrink-0">
            <div className="flex items-end flex-shrink-0 pb-7px">
              <Link to="/">
                <img className="cursor-pointer object-none" src={TopLogo} alt="logo" />
              </Link>
            </div>

            <div className="flex justify-end flex-shrink-0">
              {isAuthenticated ? (
                <div>
                  <LoggedInHeader setAuth={setAuth} />
                </div>
              ) : (
                <div className="flex space-x-10px flex-shrink-0 items-center -mt-px">
                  <div className="flex space-x-5px flex-shrink-0 items-center -mt-px">
                    <PopupControls buttonChild={LoginButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                      <LoginPopup setAuth={setAuth} setPopupOpen={setPopupOpen} />
                    </PopupControls>
                    <PopupControls buttonChild={SignUpButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                      <SignupPopup setAuth={setAuth} setPopupOpen={setPopupOpen} />
                    </PopupControls>
                  </div>
                  <CountryButton />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
