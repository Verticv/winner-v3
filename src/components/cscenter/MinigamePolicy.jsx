import HorizontalMenu7 from 'components/horizontalMenus/HorizontalMenu7';
import MyPageTitle from 'components/myPage/MyPageTitle'
import React from 'react'
import { Route } from 'react-router';
import Icon1 from '../../images/cscenter/minigame/1.png'
import Icon2 from '../../images/cscenter/minigame/2.png'
import Icon3 from '../../images/cscenter/minigame/3.png'
import Icon4 from '../../images/cscenter/minigame/4.png'
import PowerballPolicy from '../../images/cscenter/minigame/powerball_policy_v2.png'
import PowerladderPolicy from '../../images/cscenter/minigame/powerladder_policy.png'
import SpeedKinoPolicy from '../../images/cscenter/minigame/speedkino_policy.png'

const MinigamePolicy = () => {

    const tabsArray = [
        { text: "파워볼", icon: Icon1, id: 0, path: "/cscenter/policy/minigame/powerball" },
        { text: "파워사다리", icon: Icon2, id: 1, path: "/cscenter/policy/minigame/powerladder" },
        { text: "스피드키노", icon: Icon3, id: 2, path: "/cscenter/policy/minigame/speedkino" },
        { text: "키노사다리", icon: Icon4, id: 3, path: "/cscenter/policy/minigame/kinoladder" },
    ];
    
    return (
        <div>
            <MyPageTitle title="미니게임" />


            <div className="mt-12px" />
            <HorizontalMenu7 itemsArray={tabsArray} />

            

           
            <div className=" w-full overflow-hidden rounded-10px p-px mt-28px mr-px ml-px"
              style={{ background: "linear-gradient(to top, #4f3a7a 0% ,#a05bf6 50%, #f0d3ff 100%)" ,boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.5)"}}
              >
                <div  style={{paddingTop:"39px", paddingBottom:"41px", paddingLeft:"40px", background:'#dfdbfa'}} className="w-full  rounded-10px overflow-hidden">
                  <Route path="/cscenter/policy/minigame/powerball">
                      <img src={PowerballPolicy} alt="" />
                  </Route>
                  <Route path="/cscenter/policy/minigame/powerladder">
                      <img src={PowerladderPolicy} alt="" />
                  </Route>
                  <Route path="/cscenter/policy/minigame/speedkino">
                      <img src={SpeedKinoPolicy} alt="" />
                  </Route>
                  <Route path="/cscenter/policy/minigame/kinoladder">
                      <img src={PowerladderPolicy} alt="" />
                  </Route>
                </div>
              </div>
              <div className="mt-60px" />
        </div>
    )
}

export default MinigamePolicy
