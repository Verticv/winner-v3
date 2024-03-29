import HorizontalMenu3 from 'components/horizontalMenus/HorizontalMenu3';
import Footer from 'components/mainPage/Footer';
import Navbar from '../components/mainPage/NavBar';
import QuickMenu from 'components/QuickMenu';
import React, { useEffect, useState } from 'react';
import PowerballIcon from '../images/minigames/powerball.png';
import PowerLadder from '../images/minigames/powerladder.png';
import SpeedKino from '../images/minigames/speedkino.png';
import KinoLadder from '../images/minigames/kinoladder.png';
import MinigamesRightPanel from 'components/minigames/MinigamesRightPanel';
import MinigamesPanel from 'components/minigames/MinigamesPanel';
import { Route, useLocation } from 'react-router';

const MinigamesPage = ({ isAuthenticated, setAuthenticated }) => {
  const GameTypeArray = [
    {
      id: 0,
      img: PowerballIcon,
      text: '파워볼',
      time: '02:16',
      path: '/minigame/powerball',
    },
    {
      id: 1,
      img: PowerLadder,
      text: '파워사다리',
      time: '02:50',
      path: '/minigame/powerladder',
    },
    {
      id: 2,
      img: SpeedKino,
      text: '스피드키노',
      time: '02:50',
      path: '/minigame/speedkino',
    },
    {
      id: 3,
      img: KinoLadder,
      text: '키노사다리',
      time: '02:50',
      path: '/minigame/kinoladder',
    },
  ];

  const [selectedGame, setSelectedGame] = useState(window.location.pathname);
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedOption, setSelectedOption] = useState([
    {
      type: '',
      name: '',
      selection: '',
      buttonType: '',
      subtitle: null,
    },
  ]);

  const location = useLocation();

  useEffect(() => {
    setSelectedTab(0);
  }, [location]);
 ;

  
  return (
    <div className='relative flex flex-col justify-center items-center limit1920:overflow-x-hidden'
    style={{
          background: "linear-gradient(to right, #b644c4, #351894)"
      }}>
      <div className='fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center'>
        <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
      </div>
      <div className='z-50'>
        <QuickMenu />
        
      </div>
      <div style={{marginTop:'168px'}} className='w-full flex flex-col items-center'>
        <div className='w-default z-30'>
          <Route path='/minigame/powerball'>
            <HorizontalMenu3
              itemsArray={GameTypeArray}
              selectedTab={'/minigame/powerball'}
              setSelectedTab={setSelectedGame}
              setSelectedOption={setSelectedOption}
              setSelectedTab1={setSelectedTab}
            />
          </Route>
          <Route path='/minigame/powerladder'>
            <HorizontalMenu3
              itemsArray={GameTypeArray}
              selectedTab={'/minigame/powerladder'}
              setSelectedTab={setSelectedGame}
              setSelectedOption={setSelectedOption}
              setSelectedTab1={setSelectedTab}
            />
          </Route>
          <Route path='/minigame/speedkino'>
            <HorizontalMenu3
              itemsArray={GameTypeArray}
              selectedTab={'/minigame/speedkino'}
              setSelectedTab={setSelectedGame}
              setSelectedOption={setSelectedOption}
              setSelectedTab1={setSelectedTab}
            />
          </Route>
          <Route path='/minigame/kinoladder'>
            <HorizontalMenu3
              itemsArray={GameTypeArray}
              selectedTab={'/minigame/kinoladder'}
              setSelectedTab={setSelectedGame}
              setSelectedOption={setSelectedOption}
              setSelectedTab1={setSelectedTab}
            />
          </Route>

          <div className='flex w-full mt-8px space-x-7px'>
            <div
              style={{
                width: '905px',
                height: '509px',
                background: 'rgba(20, 3, 59, 0.6)',
                borderColor:'#42194c'
              }}
              className='rounded-10px overflow-hidden border'
            >
              <div className='overflow-hidden flex justify-center pl-24px '>
                <Route path='/minigame/powerball'>
                  <iframe
                    src='https://ntry.com/scores/powerball/live.php'
                    width='860'
                    height='642'
                    scrolling='yes'
                    frameborder='0'
                    style={{
                      WebkitTransform: 'scale(0.77)',
                      marginTop: '-68px',
                    }}
                    title='powerball'
                  ></iframe>
                </Route>
                <Route path='/minigame/powerladder'>
                  <iframe
                    src='https://ntry.com/scores/power_ladder/live.php'
                    width='860'
                    height='642'
                    scrolling='yes'
                    frameborder='0'
                    style={{
                      WebkitTransform: 'scale(0.77)',
                      marginTop: '-68px',
                    }}
                    title='powerball'
                  ></iframe>
                </Route>
                <Route path='/minigame/speedkino'>
                  <iframe
                    src='https://ntry.com/scores/speedkeno/live.php'
                    width='860'
                    height='642'
                    scrolling='yes'
                    frameborder='0'
                    style={{
                      WebkitTransform: 'scale(0.77)',
                      marginTop: '-68px',
                    }}
                    title='powerball'
                  ></iframe>
                </Route>
                <Route path='/minigame/kinoladder'>
                  <iframe
                    src='https://ntry.com/scores/keno_ladder/live.php'
                    width='860'
                    height='642'
                    scrolling='yes'
                    frameborder='0'
                    style={{
                      WebkitTransform: 'scale(0.77)',
                      marginTop: '-68px',
                    }}
                    title='kinoladder'
                  ></iframe>
                </Route>
              </div>
            </div>
            <MinigamesRightPanel
              selectedGame={selectedGame}
              selectedOption={selectedOption}
            />
          </div>

          <div className='mt-7px'>
            <MinigamesPanel
              selectedGame={selectedGame}
              setSelectedGame={setSelectedGame}
              setSelectedOption={setSelectedOption}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          </div>
        </div>
      </div>

      <div className='flex flex-col items-start limit:items-center limit:mt-92px mt-122px w-full h-full'>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MinigamesPage;
