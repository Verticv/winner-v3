import Footer from 'components/mainPage/Footer';
import DirectoryComponent from 'components/myPage/DirectoryComponent';
import LeftMenu from 'components/myPage/LeftMenu';
import Navbar from '../components/mainPage/NavBar';
import QuickMenu from 'components/QuickMenu';
import React, { useState, useEffect } from 'react';
import { Route, useLocation } from 'react-router';
import Icon1 from '../images/gameResults/leftMenu/icon_1.png';
import Icon2 from '../images/gameResults/leftMenu/icon_2.png';
import Icon1Highlight from '../images/gameResults/leftMenu/icon_1_highlight.png';
import Icon2Highlight from '../images/gameResults/leftMenu/icon_2_highlight.png';
import GameResultsBanner from '../images/gameResults/game_results_banner.png';
import WinDrawLose from 'components/gameResults/WinDrawLose';
import MinigameResults from 'components/gameResults/MinigameResults';

const GameResultsPage = ({ isAuthenticated, setAuthenticated }) => {
  const LeftMenuArray = [
    {
      text: '스포츠',
      icon: Icon1,
      iconHighlight: Icon1Highlight,
      id: 0,
      path: '/gameresults/sports/win-draw-lose',
      sub1: '승무패',
      sub2: '핸디캡',
      sub3: '언오버',
      sub4: '스페셜',
      path2: '/gameresults/sports/handicap',
      path3: '/gameresults/sports/unover',
      path4: '/gameresults/sports/special',
      mainPath: '/gameresults/sports',
    },
    {
      text: '미니게임',
      icon: Icon2,
      iconHighlight: Icon2Highlight,
      id: 1,
      path: '/gameresults/minigame/powerball',
      mainPath: '/gameresults/minigame',
    },
  ];

  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(location.pathname);
  const [selectedSubTab, setSelectedSubTab] = useState(location.pathname);
 
 

 

  return (
    <div className='relative flex flex-col justify-center items-center limit1920:overflow-x-hidden'
      style={{
        background: "linear-gradient(to right, #b644c4, #351894)"
      }}>
      
        
      

      <div style={{ marginTop: '153px' }} className='flex flex-col items-start limit:items-center w-full h-full'>
        <div className='fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center'>
        <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
      </div>
        <Route exact path='/gameresults/sports/win-draw-lose'>
          <DirectoryComponent
            branch1='경기결과'
            branch2='스포츠'
            branch3='승무패'
            mainPath='/gameresults/sports/win-draw-lose'
            setSelectedTab={setSelectedTab}
            setSelectedSubTab={setSelectedSubTab}
          />
        </Route>
        <Route exact path='/gameresults/sports/handicap'>
          <DirectoryComponent
            branch1='경기결과'
            branch2='스포츠'
            branch3='핸디캡'
            mainPath='/gameresults/sports/win-draw-lose'
            setSelectedTab={setSelectedTab}
            setSelectedSubTab={setSelectedSubTab}
          />
        </Route>
        <Route exact path='/gameresults/sports/unover'>
          <DirectoryComponent
            branch1='경기결과'
            branch2='스포츠'
            branch3='언오버'
            mainPath='/gameresults/sports/win-draw-lose'
            setSelectedTab={setSelectedTab}
            setSelectedSubTab={setSelectedSubTab}
          />
        </Route>
        <Route exact path='/gameresults/sports/special'>
          <DirectoryComponent
            branch1='경기결과'
            branch2='스포츠'
            branch3='스페셜'
            mainPath='/gameresults/sports/win-draw-lose'
            setSelectedTab={setSelectedTab}
            setSelectedSubTab={setSelectedSubTab}
          />
        </Route>

        <Route path='/gameresults/minigame'>
          <DirectoryComponent
            branch1='경기결과'
            branch2='미니게임'
            mainPath='/gameresults/minigame'
            setSelectedTab={setSelectedTab}
            setSelectedSubTab={setSelectedSubTab}
          />
        </Route>

        <div style={{height:'136px'}} className='relative'>
          <img className='z-10' src={GameResultsBanner} alt='' />
          
          <div className="font-bold z-20 absolute top-0 text-24px w-full h-full flex items-center justify-center">
              <span style={{textShadow: '0 0 4px rgba(0, 0, 0, 0.6)'}} className="leading-none text-white -mt-2px" >경기결과</span></div>
        </div>

        <div className='flex mt-18px w-default z-30'>
          <div>
            <LeftMenu
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              selectedSubTab={selectedSubTab}
              setSelectedSubTab={setSelectedSubTab}
              array={LeftMenuArray}
            />
          </div>

          <div style={{width:'1040px'}} className='ml-20px'>
            <Route exact path='/gameresults/sports/win-draw-lose'>
              <WinDrawLose />
            </Route>
            <Route exact path='/gameresults/sports/handicap'>
              <WinDrawLose pageTitle='핸디캡' />
            </Route>
            <Route exact path='/gameresults/sports/unover'>
              <WinDrawLose pageTitle='언오버' />
            </Route>
            <Route exact path='/gameresults/sports/special'>
              <WinDrawLose pageTitle='스페셜' />
            </Route>
            <Route path='/gameresults/minigame'>
              <MinigameResults />
            </Route>

            <Route path='*'></Route>
          </div>
        </div>

        <div>
          <Footer />
        </div>
        <div>
          <QuickMenu />
        </div>
      </div>
    </div>
  );
};

export default GameResultsPage;
