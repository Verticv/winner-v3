import React, { useState } from 'react';
import PopupControls from '../../popups/PopupControls';
import LoginPopup from '../../popups/LoginPopup';
import SignupPopup from '../../popups/SignupPopup';
import { useHistory } from 'react-router-dom';

import TopLogo from '../../../images/top_logo.png';
import AuthButton from './AuthButton';
import LoggedInHeader from './LoggedInHeader';

const TopBar = ({ isAuthenticated, setAuth }) => {
  const history = useHistory();
  const [isPopupOpen, setPopupOpen] = useState(true);

  const LoginButton = <AuthButton buttonText='로그인' />;
  const SignUpButton = <AuthButton buttonText='회원가입' />;

  return (
    <div
      style={{ borderBottomWidth: '1px', borderBottomColor: '#414141' }}
      className='relative w-full z-50 bg-black bg-opacity-85 flex flex-col items-start limit:items-center limit1920:items-center'
    >
      <div className='w-full h-full absolute'></div>
      <div style={{ width: '1260px' }} className='z-50 w-full'>
        <div className=''>
          <div
            style={{ height: '44px' }}
            className='relative flex justify-between flex-row flex-shrink-0 -mt-px'
          >
            <div className='flex items-center flex-shrink-0'>
              <img
                style={{ margin: 'auto' }}
                className='cursor-pointer object-none'
                src={TopLogo}
                alt='logo'
                onClick={() => history.push('/')}
              />
            </div>

            <div className='flex justify-end flex-shrink-0'>
              {isAuthenticated ? (
                <div className='mt-16px mr-5px'>
                  <LoggedInHeader />
                </div>
              ) : (
                <div className='flex space-x-10px flex-shrink-0 mt-8px'>
                  <PopupControls
                    buttonChild={LoginButton}
                    isPopupOpen={isPopupOpen}
                    setPopupOpen={setPopupOpen}
                  >
                    <LoginPopup setAuth={setAuth} setPopupOpen={setPopupOpen} />
                  </PopupControls>
                  <PopupControls
                    buttonChild={SignUpButton}
                    isPopupOpen={isPopupOpen}
                    setPopupOpen={setPopupOpen}
                  >
                    <SignupPopup
                      setAuth={setAuth}
                      setPopupOpen={setPopupOpen}
                    />
                  </PopupControls>
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
