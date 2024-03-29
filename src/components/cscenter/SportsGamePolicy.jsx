import HorizontalMenu from "components/horizontalMenus/HorizontalMenu";
import MyPageTitle from "components/myPage/MyPageTitle";
import React from "react";
import { Route } from "react-router";
import Icon1 from "../../images/myPage/betHistory/icon_3.png";
import Icon2 from "../../images/cscenter/sportsPolicy/tabs/cs_icon_02.png";
import Icon3 from "../../images/cscenter/sportsPolicy/tabs/cs_icon_03.png";
import Icon4 from "../../images/cscenter/sportsPolicy/tabs/cs_icon_04.png";
import Icon5 from "../../images/cscenter/sportsPolicy/tabs/cs_icon_05.png";
import Icon6 from "../../images/cscenter/sportsPolicy/tabs/cs_icon_06.png";
import Icon7 from "../../images/cscenter/sportsPolicy/tabs/cs_icon_07.png";
import Icon8 from "../../images/cscenter/sportsPolicy/tabs/cs_icon_08.png";
import Icon9 from "../../images/myPage/betHistory/icon_7.png";
import Icon1_on from "../../images/myPage/betHistory/Icon3_On.png";
import Icon2_on from "../../images/cscenter/sportsPolicy/tabs/cs_icon_02_on.png";
import Icon3_on from "../../images/cscenter/sportsPolicy/tabs/cs_icon_03_on.png";
import Icon4_on from "../../images/cscenter/sportsPolicy/tabs/cs_icon_04_on.png";
import Icon5_on from "../../images/cscenter/sportsPolicy/tabs/cs_icon_05_on.png";
import Icon6_on from "../../images/cscenter/sportsPolicy/tabs/cs_icon_06_on.png";
import Icon7_on from "../../images/cscenter/sportsPolicy/tabs/cs_icon_07_on.png";
import Icon8_on from "../../images/cscenter/sportsPolicy/tabs/cs_icon_08_on.png";
import Icon9_on from "../../images/myPage/betHistory/Icon7_On.png";
import SportsGamePolicyTable1 from "./tables/SportsGamePolicyTable1";
import SportsGamePolicyTable2 from "./tables/SportsGamePolicyTable2";
import Icon14 from "../../images/myPage/betHistory/icon_12.png";
import IconHighlight14 from "../../images/myPage/betHistory/Icon12_On.png";
import SportsGamePolicyTable3 from "./tables/SportsGamePolicyTable3";

const SoccerArray = [
  {
    id: 0,
    type: "승무패",
    typeColor: "#1c92df",
    overtime: true,
    ruleText: "승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  {
    id: 1,
    type: "승무패 (전반전)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "전반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  {
    id: 2,
    type: "승무패 (후반전)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "후반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  {
    id: 3,
    type: "승패 (무X)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)",
  },
  {
    id: 4,
    type: "승패 (무X)(전반전)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "전반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)",
  },
  {
    id: 5,
    type: "승패 (무X)(후반전)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "후반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)",
  },
  {
    id: 6,
    type: "무실점 완승",
    typeColor: "#1c92df",
    overtime: true,
    ruleText: "무실점으로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (상대팀 무득점이어야 함)",
  },
  {
    id: 7,
    type: "전반 & 전후반",
    typeColor: "#1c92df",
    overtime: true,
    ruleText:
      "전반전만의 결과와 최종(전후반포함) 각각의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  { id: 8, type: "더블찬스", typeColor: "#1c92df", overtime: true, ruleText: "두개의 결과를 예측하여 베팅하는 방식" },
  {
    id: 9,
    type: "더블찬스 (전반전)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "전반전만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식",
  },
  {
    id: 10,
    type: "더블찬스 (후반전)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "후반전만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식",
  },

  {
    id: 10,
    type: "핸디캡",
    typeColor: "#fe9429",
    overtime: true,
    ruleText:
      "상대적으로 전력이 우수한 팀에게 불리한 조건을 주어 경기의 균형을 맞추고 승리가 예상되는 팀을 선택하여 베팅하는 방식 홈팀(왼쪽)",
    ruleText2: "기준으로 +, -의 핸디캡 기준점수가 표기됨",
  },
  {
    id: 10,
    type: "핸디캡 (전반전)",
    typeColor: "#fe9429",
    overtime: false,
    ruleText: "핸디캡을 적용하여 전반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },
  {
    id: 10,
    type: "핸디캡 (후반전)",
    typeColor: "#fe9429",
    overtime: false,
    ruleText: "핸디캡을 적용하여 후반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },
  {
    id: 10,
    type: "핸디캡 승무패",
    typeColor: "#fe9429",
    overtime: false,
    ruleText: "핸디캡을 적용하여 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  {
    id: 10,
    type: "핸디캡 승무패 (전반전)",
    typeColor: "#fe9429",
    overtime: false,
    ruleText:
      "핸디캡을 적용하여 전반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  {
    id: 10,
    type: "핸디캡 승무패 (후반전)",
    typeColor: "#fe9429",
    overtime: false,
    ruleText:
      "핸디캡을 적용하여 후반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },

  {
    id: 10,
    type: "언더오버",
    typeColor: "#88b424",
    overtime: true,
    ruleText: "양팀의 최종 득점의 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },
  {
    id: 10,
    type: "언더오버 (전반전)",
    typeColor: "#88b424",
    overtime: false,
    ruleText: "전반전만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },
  {
    id: 10,
    type: "언더오버 (후반전)",
    typeColor: "#88b424",
    overtime: false,
    ruleText: "후반전만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },

  {
    id: 10,
    type: "홀짝",
    typeColor: "#b14ce3",
    overtime: true,
    ruleText: "양팀의 최종 득점의 합이 홀 또는, 짝으로 예상하여 베팅하는 방식",
  },
  {
    id: 10,
    type: "홀짝 (전반전)",
    typeColor: "#b14ce3",
    overtime: false,
    ruleText: "전반전만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식",
  },
  {
    id: 10,
    type: "홀짝 (후반전)",
    typeColor: "#b14ce3",
    overtime: false,
    ruleText: "후반전만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식",
  },

  {
    id: 10,
    type: "양팀득점",
    typeColor: "#1c92df",
    overtime: true,
    ruleText: "경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 베팅하는 방식",
  },
  {
    id: 10,
    type: "양팀득점 (전반전)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "전반전만의 경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 베팅하는 방식",
  },
  {
    id: 10,
    type: "양팀득점 (후반전)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "후반전만의 경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 베팅하는 방식",
  },

  {
    id: 10,
    type: "점수합계~",
    typeColor: "#f04281",
    overtime: true,
    ruleText: "경기결과 양팀에서 발생한 득점의 합(~이상)을 예측하여 베팅하는 방식",
  },
  {
    id: 10,
    type: "점수합계~(전반전)",
    typeColor: "#f04281",
    overtime: false,
    ruleText: "전반전만의 경기결과로 양팀에서 발생한 득점의 합(~이상)을 예측하여 베팅하는 방식",
  },
  {
    id: 10,
    type: "점수합계~(후반전)",
    typeColor: "#f04281",
    overtime: false,
    ruleText: "후반전만의 경기결과로 양팀에서 발생한 득점의 합(~이상)을 예측하여 베팅하는 방식",
  },
  {
    id: 10,
    type: "점수합계",
    typeColor: "#f04281",
    overtime: true,
    ruleText: "경기결과 양팀에서 발생한 득점의 합을 정확히 예측하여 베팅하는 방식",
  },
  {
    id: 10,
    type: "점수합계 (전반전)",
    typeColor: "#f04281",
    overtime: false,
    ruleText: "전반전만의 경기결과로 양팀에서 발생한 득점의 합을 정확히 예측하여 베팅하는 방식",
  },
  {
    id: 10,
    type: "점수합계 (후반전)",
    typeColor: "#f04281",
    overtime: false,
    ruleText: "후반전만의 경기결과로 양팀에서 발생한 득점의 합을 정확히 예측하여 베팅하는 방식",
  },

  {
    id: 10,
    type: "최고득점구간",
    typeColor: "#75943a",
    overtime: true,
    ruleText:
      "경기중 최고 많은 득점이 발생 할 구간(전,후반)을 예측하여 베팅하는 방식(두개 이상의 동일한 최고득점 구간이 발생할 경우 적특저리)",
  },

  {
    id: 10,
    type: "스코어",
    typeColor: "#b14ce3",
    overtime: true,
    ruleText: "양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식",
  },
  {
    id: 10,
    type: "스코어 (전반전)",
    typeColor: "#b14ce3",
    overtime: false,
    ruleText: "전반전만의 양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식",
  },
  {
    id: 10,
    type: "스코어 (후반전)",
    typeColor: "#b14ce3",
    overtime: false,
    ruleText: "후반전만의 양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식",
  },
];

const BasketballArray = [
  {
    id: 0,
    type: "언더오버 (전반전)",
    typeColor: "#1c92df",
    overtime: null,
    ruleText: "승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승패 (무X)(1쿼터)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "1쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)",
  },
  {
    id: 0,
    type: "승패 (무X)(2쿼터)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "2쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)",
  },
  {
    id: 0,
    type: "승패 (무X)(3쿼터)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "3쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)",
  },
  {
    id: 0,
    type: "승패 (무X)(4쿼터)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "4쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)",
  },
  {
    id: 0,
    type: "승무패",
    typeColor: "#1c92df",
    overtime: null,
    ruleText: "승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승무패 (전반전)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "전반전(1,2쿼터)만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승무패 (후반전)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "후반전(3,4쿼터)만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승무패 (1쿼터)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "1쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승무패 (2쿼터)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "2쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승무패 (3쿼터)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "3쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승무패 (4쿼터)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "4쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  { id: 0, type: "더블찬스", typeColor: "#1c92df", overtime: true, ruleText: "두개의 결과를 예측하여 베팅하는 방식" },
  {
    id: 0,
    type: "더블찬스 (전반전)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "전반전(1,2쿼터)만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "더블찬스 (후반전)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "전반전(3,4쿼터)만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "더블찬스 (1쿼터)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "1쿼터만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "더블찬스 (2쿼터)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "2쿼터만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "더블찬스 (3쿼터)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "3쿼터만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "더블찬스 (4쿼터)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "4쿼터만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식",
  },

  {
    id: 0,
    type: "핸디캡 (풀타임)",
    typeColor: "#fe9429",
    overtime: null,
    ruleText: "상대적으로 전력이 우수한 팀에게 불리한 조건을 주어 경기의 균형을 맞추고 승리가 예상되는 팀을 선택하여",
    ruleText2: "베팅하는 방식 홈팀(왼쪽)기준으로 +,-의 핸디캡 기준점수가 표기됨",
  },
  {
    id: 0,
    type: "핸디캡 (전반전)",
    typeColor: "#fe9429",
    overtime: false,
    ruleText:
      "핸디캡을 적용하여 전반전(1,2쿼터)만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "핸디캡 (후반전)",
    typeColor: "#fe9429",
    overtime: false,
    ruleText:
      "핸디캡을 적용하여 후반전(3,4쿼터)만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "핸디캡 (1쿼터)",
    typeColor: "#fe9429",
    overtime: false,
    ruleText: "핸디캡을 적용하여 1쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "핸디캡 (2쿼터)",
    typeColor: "#fe9429",
    overtime: false,
    ruleText: "핸디캡을 적용하여 2쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "핸디캡 (3쿼터)",
    typeColor: "#fe9429",
    overtime: false,
    ruleText: "핸디캡을 적용하여 3쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "핸디캡 (4쿼터)",
    typeColor: "#fe9429",
    overtime: false,
    ruleText: "핸디캡을 적용하여 4쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },

  {
    id: 0,
    type: "언더오버 (풀타임)",
    typeColor: "#88b424",
    overtime: null,
    ruleText: "양팀의 최종 득점의 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "언더오버 (전반전)",
    typeColor: "#88b424",
    overtime: false,
    ruleText: "전반전(1,2쿼터)만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "언더오버 (후반전)",
    typeColor: "#88b424",
    overtime: false,
    ruleText: "후반전(3,4쿼터)만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "언더오버 (1쿼터)",
    typeColor: "#88b424",
    overtime: false,
    ruleText: "1쿼터만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "언더오버 (2쿼터)",
    typeColor: "#88b424",
    overtime: false,
    ruleText: "2쿼터만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "언더오버 (3쿼터)",
    typeColor: "#88b424",
    overtime: false,
    ruleText: "3쿼터만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "언더오버 (4쿼터)",
    typeColor: "#88b424",
    overtime: false,
    ruleText: "4쿼터만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },

  {
    id: 0,
    type: "홀짝 (풀타임)",
    typeColor: "#b14ce3",
    overtime: null,
    ruleText: "양팀의 최종 득점의 합이 홀 또는, 짝으로 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "홀짝 (전반전)",
    typeColor: "#b14ce3",
    overtime: false,
    ruleText: "전반전(1,2쿼터)만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "홀짝 (후반전)",
    typeColor: "#b14ce3",
    overtime: false,
    ruleText: "후반전(3,4쿼터)만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "홀짝 (1쿼터)",
    typeColor: "#b14ce3",
    overtime: false,
    ruleText: "1쿼터만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "홀짝 (2쿼터)",
    typeColor: "#b14ce3",
    overtime: false,
    ruleText: "2쿼터만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "홀짝 (3쿼터)",
    typeColor: "#b14ce3",
    overtime: false,
    ruleText: "3쿼터만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "홀짝 (4쿼터)",
    typeColor: "#b14ce3",
    overtime: false,
    ruleText: "4쿼터만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식",
  },

  {
    id: 0,
    type: "최고득점구간",
    typeColor: "#88b424",
    overtime: true,
    ruleText: "경기중 최고 많은 득점이 발생 할 구간(1쿼터, 2쿼터, 3쿼터, 4쿼터)을 예측하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "첫 2점/3점/자유투",
    typeColor: "#88b424",
    overtime: false,
    ruleText: "먼저 해당 득점을 성공하는 팀을 예상하여 베팅하는 방식",
  },
];

const BaseballArray = [
  {
    id: 0,
    type: "승패 (풀타임)",
    typeColor: "#1c92df",
    overtime: null,
    ruleText: "승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승무패",
    typeColor: "#1c92df",
    overtime: null,
    ruleText: "정규이닝(9이닝)까지만의 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승무패 (1이닝)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "1이닝까지만의 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승무패 (4이닝)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "4이닝까지만의 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },

  {
    id: 0,
    type: "핸디캡 (풀타임)",
    typeColor: "#fe9429",
    overtime: null,
    ruleText:
      "상대적으로 전력이 우수한 팀에게 불리한 조건을 주어 경기의 균형을 맞추고 승리가 예상되는 팀을 선택하여 베팅하는 방식 홈팀(왼쪽)",
    ruleText2: "기준으로 +,-의 핸디캡 기준점수가 표기됨",
  },
  {
    id: 0,
    type: "핸디캡 (1이닝)",
    typeColor: "#fe9429",
    overtime: false,
    ruleText: "핸디캡을 적용하여 1이닝까지만의 승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "핸디캡 (4이닝)",
    typeColor: "#fe9429",
    overtime: false,
    ruleText: "핸디캡을 적용하여 4이닝까지만의 승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "핸디캡 승무패 (풀타임)",
    typeColor: "#fe9429",
    overtime: null,
    ruleText: "핸디캡을 적용하여 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },

  {
    id: 0,
    type: "언더오버 (풀타임)",
    typeColor: "#88b424",
    overtime: null,
    ruleText: "양팀의 최종 득점의 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "언더오버 (1이닝)",
    typeColor: "#88b424",
    overtime: false,
    ruleText: "1이닝까지만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "언더오버 (4이닝)",
    typeColor: "#88b424",
    overtime: false,
    ruleText: "4이닝까지만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },

  {
    id: 0,
    type: "홀짝 (풀타임)",
    typeColor: "#b14ce3",
    overtime: null,
    ruleText: "양팀의 최종 득점의 합이 홀 또는, 짝으로 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "첫볼넷",
    typeColor: "#b14ce3",
    overtime: false,
    ruleText: "데드볼을 제외한 사구(고의사구 포함)를 먼저 획득하는 팀을 예상하여 베팅하는 방식",
  },
];

const VolleyballArray = [
  {
    id: 0,
    type: "승패 (풀타임)",
    typeColor: "#1c92df",
    overtime: null,
    ruleText: "승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승패 (1세트)",
    typeColor: "#1c92df",
    overtime: null,
    ruleText: "1세트만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승패 (2세트)",
    typeColor: "#1c92df",
    overtime: null,
    ruleText: "2세트만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승패 (3세트)",
    typeColor: "#1c92df",
    overtime: null,
    ruleText: "3세트만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },

  {
    id: 0,
    type: "언더오버",
    typeColor: "#88b424",
    overtime: null,
    ruleText: "양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "언더오버 (1세트)",
    typeColor: "#88b424",
    overtime: false,
    ruleText: "1세트만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "언더오버 (2세트)",
    typeColor: "#88b424",
    overtime: false,
    ruleText: "2세트만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "언더오버 (3세트)",
    typeColor: "#88b424",
    overtime: false,
    ruleText: "3세트만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },

  {
    id: 0,
    type: "홀짝 (풀타임)",
    typeColor: "#b14ce3",
    overtime: null,
    ruleText: "양팀의 최종 득점의 합이 홀 또는, 짝으로 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "홀짝 (1세트)",
    typeColor: "#b14ce3",
    overtime: null,
    ruleText: "1세트만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "홀짝 (2세트)",
    typeColor: "#b14ce3",
    overtime: null,
    ruleText: "2세트만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "홀짝 (3세트)",
    typeColor: "#b14ce3",
    overtime: null,
    ruleText: "3세트만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "스코어 (풀타임)",
    typeColor: "#b14ce3",
    overtime: null,
    ruleText: "양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "스코어 (1세트)",
    typeColor: "#b14ce3",
    overtime: false,
    ruleText: "1세트의 양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "스코어 (2세트)",
    typeColor: "#b14ce3",
    overtime: false,
    ruleText: "2세트의 양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "스코어 (3세트)",
    typeColor: "#b14ce3",
    overtime: false,
    ruleText: "3세트의 양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "첫 블로킹/서브 득점",
    typeColor: "#b14ce3",
    overtime: false,
    ruleText: "먼저 해당 득점을 성공하는 팀을 예상하여 베팅하는 방식",
  },
];

const TennisArray = [
  {
    id: 0,
    type: "승패 (풀타임)",
    typeColor: "#1c92df",
    overtime: null,
    ruleText: "승리가 예상되는 팀(선수)을 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승패 (1세트)",
    typeColor: "#1c92df",
    overtime: null,
    ruleText: "1세트만의 양팀(선수)이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승패 (2세트)",
    typeColor: "#1c92df",
    overtime: null,
    ruleText: "2세트만의 양팀(선수)이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승패 (3세트)",
    typeColor: "#1c92df",
    overtime: null,
    ruleText: "3세트만의 양팀(선수)이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },

  {
    id: 0,
    type: "언더오버",
    typeColor: "#88b424",
    overtime: null,
    ruleText: "양팀(선수)이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "언더오버 (1세트)",
    typeColor: "#88b424",
    overtime: false,
    ruleText: "1세트만의 양팀(선수)이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "언더오버 (2세트)",
    typeColor: "#88b424",
    overtime: false,
    ruleText: "2세트만의 양팀(선수)이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "언더오버 (3세트)",
    typeColor: "#88b424",
    overtime: false,
    ruleText: "3세트만의 양팀(선수)이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },

  {
    id: 0,
    type: "홀짝 (풀타임)",
    typeColor: "#b14ce3",
    overtime: null,
    ruleText: "양팀(선수)의 최종 득점의 합이 홀 또는, 짝으로 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "홀짝 (1세트)",
    typeColor: "#b14ce3",
    overtime: null,
    ruleText: "1세트만의 양팀(선수)이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "홀짝 (2세트)",
    typeColor: "#b14ce3",
    overtime: null,
    ruleText: "2세트만의 양팀(선수)이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "홀짝 (3세트)",
    typeColor: "#b14ce3",
    overtime: null,
    ruleText: "3세트만의 양팀(선수)이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "스코어 (풀타임)",
    typeColor: "#b14ce3",
    overtime: null,
    ruleText: "양팀(선수)의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "스코어 (1세트)",
    typeColor: "#b14ce3",
    overtime: false,
    ruleText: "1세트의 양팀(선수)의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "스코어 (2세트)",
    typeColor: "#b14ce3",
    overtime: false,
    ruleText: "2세트의 양팀(선수)의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "스코어 (3세트)",
    typeColor: "#b14ce3",
    overtime: false,
    ruleText: "3세트의 양팀(선수)의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식",
  },
];

const HockeyArray = [
  {
    id: 0,
    type: "승무패",
    typeColor: "#1c92df",
    overtime: true,
    ruleText: "승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승무패 (1피리어드)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "1피어리드의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승무패 (2피리어드)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "2피어리드의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승무패 (3피리어드)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "3피어리드의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승패 (풀타임)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승패 (무X)",
    typeColor: "#1c92df",
    overtime: true,
    ruleText: "승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)",
  },
  {
    id: 0,
    type: "더블찬스",
    typeColor: "#1c92df",
    overtime: true,
    ruleText: "승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)",
  },
  {
    id: 0,
    type: "더블찬스 (1피리어드)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "1피어리드만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "더블찬스 (2피리어드)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "2피어리드만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "더블찬스 (3피리어드)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "3피어리드만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식",
  },

  {
    id: 0,
    type: "핸디캡",
    typeColor: "#fe9429",
    overtime: true,
    ruleText: "상대적으로 전력이 우수한 팀에게 불리한 조건을 주어 경기의 균형을 맞추고 승리가 예상되는 팀을 선택하여",
    ruleText2: "베팅하는 방식 홈팀(왼쪽)기준으로 +,-의 핸디캡 기준점수가 표기됨",
  },
  {
    id: 0,
    type: "핸디캡 (1피리어드)",
    typeColor: "#fe9429",
    overtime: false,
    ruleText: "핸디캡을 적용하여 1피리어드만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "핸디캡 (2피리어드)",
    typeColor: "#fe9429",
    overtime: false,
    ruleText: "핸디캡을 적용하여 2피리어드만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "핸디캡 (3피리어드)",
    typeColor: "#fe9429",
    overtime: false,
    ruleText: "핸디캡을 적용하여 3피리어드만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "핸디캡 승무패",
    typeColor: "#fe9429",
    overtime: true,
    ruleText: "핸디캡을 적용하여 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },

  {
    id: 0,
    type: "언더오버",
    typeColor: "#88b424",
    overtime: true,
    ruleText: "양팀의 최종 득점의 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "언더오버 (풀타임)",
    typeColor: "#88b424",
    overtime: null,
    ruleText: "양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "언더오버 (1피리어드)",
    typeColor: "#88b424",
    overtime: false,
    ruleText: "1피리어드만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "언더오버 (2피리어드)",
    typeColor: "#88b424",
    overtime: false,
    ruleText: "2피리어드만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "언더오버 (3피리어드)",
    typeColor: "#88b424",
    overtime: false,
    ruleText: "3피리어드만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },

  {
    id: 0,
    type: "홀짝",
    typeColor: "#b14ce3",
    overtime: true,
    ruleText: "양팀의 최종 득점의 합이 홀 또는, 짝으로 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "홀짝 (풀타임)",
    typeColor: "#b14ce3",
    overtime: false,
    ruleText: "양팀의 최종 득점의 합이 홀 또는, 짝으로 예상하여 베팅하는 방식",
  },

  {
    id: 0,
    type: "양팀득점",
    typeColor: "#1c92df",
    overtime: true,
    ruleText: "경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "양팀득점 (1피리어드)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "1피리어드만의 경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "양팀득점 (2피리어드)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "2피리어드만의 경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "양팀득점 (3피리어드)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "3피리어드만의 경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 베팅하는 방식",
  },

  {
    id: 0,
    type: "점수합계~",
    typeColor: "#f04281",
    overtime: true,
    ruleText: "경기결과 양팀에서 발생한 득점의 합(~이상)을 예측하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "점수합계~(1피리어드)",
    typeColor: "#f04281",
    overtime: false,
    ruleText: "1피리어드만의 경기결과로 양팀에서 발생한 득점의 합(~이상)을 예측하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "점수합계~(2피리어드)",
    typeColor: "#f04281",
    overtime: false,
    ruleText: "2피리어드만의 경기결과로 양팀에서 발생한 득점의 합(~이상)을 예측하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "점수합계~(3피리어드)",
    typeColor: "#f04281",
    overtime: false,
    ruleText: "3피리어드만의 경기결과로 양팀에서 발생한 득점의 합(~이상)을 예측하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "점수합계",
    typeColor: "#f04281",
    overtime: true,
    ruleText: "경기결과 양팀에서 발생한 득점의 합을 정확히 예측하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "점수합계 (1피리어드)",
    typeColor: "#f04281",
    overtime: false,
    ruleText: "1피리어드만의 경기결과로 양팀에서 발생한 득점의 합을 예측하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "점수합계 (2피리어드)",
    typeColor: "#f04281",
    overtime: false,
    ruleText: "2피리어드만의 경기결과로 양팀에서 발생한 득점의 합을 예측하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "점수합계 (3피리어드)",
    typeColor: "#f04281",
    overtime: false,
    ruleText: "3피리어드만의 경기결과로 양팀에서 발생한 득점의 합을 예측하여 베팅하는 방식",
  },

  {
    id: 0,
    type: "최고득점구간",
    typeColor: "#88b424",
    overtime: true,
    ruleText: "경기중 최고 많은 득점이 발생 할 구간(1,2,3피리어드)을 예측하여 베팅하는 방식",
  },

  {
    id: 0,
    type: "스코어",
    typeColor: "#b14ce3",
    overtime: true,
    ruleText: "양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "스코어 (1피리어드)",
    typeColor: "#b14ce3",
    overtime: false,
    ruleText: "1피리어드만의 양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "스코어 (2피리어드)",
    typeColor: "#b14ce3",
    overtime: false,
    ruleText: "2피리어드만의 양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "스코어 (3피리어드)",
    typeColor: "#b14ce3",
    overtime: false,
    ruleText: "3피리어드만의 양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식",
  },
];

const HandballArray = [
  {
    id: 0,
    type: "승무패",
    typeColor: "#1c92df",
    overtime: true,
    ruleText: "승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승무패 (전반전)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "전반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승무패 (후반전)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "후반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승패 (무X)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)",
  },
  {
    id: 0,
    type: "승패 (무X)(전반전)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "전반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)",
  },
  {
    id: 0,
    type: "승패 (무X)(후반전)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "후반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)",
  },
  {
    id: 0,
    type: "무실점 완승",
    typeColor: "#1c92df",
    overtime: true,
    ruleText: "무실점으로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (상대팀 무득점이어야 함)",
  },
  {
    id: 0,
    type: "전반 & 전후반",
    typeColor: "#1c92df",
    overtime: true,
    ruleText:
      "전반전만의 결과와 최종(전후반포함) 각각의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  { id: 0, type: "더블찬스", typeColor: "#1c92df", overtime: true, ruleText: "두개의 결과를 예측하여 베팅하는 방식" },
  {
    id: 0,
    type: "더블찬스 (전반전)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "전반전만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "더블찬스 (후반전)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "후반전만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식",
  },

  {
    id: 0,
    type: "핸디캡",
    typeColor: "#fe9429",
    overtime: true,
    ruleText: "상대적으로 전력이 우수한 팀에게 불리한 조건을 주어 경기의 균형을 맞추고 승리가 예상되는 팀을 선택하여",
    ruleText2: "베팅하는 방식 홈팀(왼쪽)기준으로 +,-의 핸디캡 기준점수가 표기됨",
  },
  {
    id: 0,
    type: "핸디캡 (전반전)",
    typeColor: "#fe9429",
    overtime: false,
    ruleText: "핸디캡을 적용하여 전반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "핸디캡 (후반전)",
    typeColor: "#fe9429",
    overtime: false,
    ruleText: "핸디캡을 적용하여 후반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "핸디캡 승무패",
    typeColor: "#fe9429",
    overtime: false,
    ruleText: "핸디캡을 적용하여 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "핸디캡 승무패 (전반전)",
    typeColor: "#fe9429",
    overtime: false,
    ruleText:
      "핸디캡을 적용하여 전반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "핸디캡 승무패 (후반전)",
    typeColor: "#fe9429",
    overtime: false,
    ruleText:
      "핸디캡을 적용하여 후반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },

  {
    id: 0,
    type: "언더오버",
    typeColor: "#88b424",
    overtime: true,
    ruleText: "양팀의 최종 득점의 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "언더오버 (전반전)",
    typeColor: "#88b424",
    overtime: false,
    ruleText: "전반전만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "언더오버 (후반전)",
    typeColor: "#88b424",
    overtime: false,
    ruleText: "후반전만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },

  {
    id: 0,
    type: "홀짝",
    typeColor: "#b14ce3",
    overtime: true,
    ruleText: "양팀의 최종 득점의 합이 홀 또는, 짝으로 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "홀짝 (전반전)",
    typeColor: "#b14ce3",
    overtime: false,
    ruleText: "전반전만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "홀짝 (후반전)",
    typeColor: "#b14ce3",
    overtime: false,
    ruleText: "후반전만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식",
  },

  {
    id: 0,
    type: "양팀득점",
    typeColor: "#1c92df",
    overtime: true,
    ruleText: "경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "양팀득점 (전반전)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "전반전만의 경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "양팀득점 (후반전)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "후반전만의 경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 베팅하는 방식",
  },

  {
    id: 0,
    type: "점수합계~",
    typeColor: "#f04281",
    overtime: true,
    ruleText: "경기결과 양팀에서 발생한 득점의 합(~이상)을 예측하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "점수합계~(전반전)",
    typeColor: "#f04281",
    overtime: false,
    ruleText: "전반전만의 경기결과로 양팀에서 발생한 득점의 합(~이상)을 예측하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "점수합계~(후반전)",
    typeColor: "#f04281",
    overtime: false,
    ruleText: "후반전만의 경기결과로 양팀에서 발생한 득점의 합(~이상)을 예측하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "점수합계",
    typeColor: "#f04281",
    overtime: true,
    ruleText: "경기결과 양팀에서 발생한 득점의 합을 정확히 예측하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "점수합계 (전반전)",
    typeColor: "#f04281",
    overtime: false,
    ruleText: "전반전만의 경기결과로 양팀에서 발생한 득점의 합을 정확히 예측하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "점수합계 (후반전)",
    typeColor: "#f04281",
    overtime: false,
    ruleText: "후반전만의 경기결과로 양팀에서 발생한 득점의 합을 정확히 예측하여 베팅하는 방식",
  },

  {
    id: 0,
    type: "최고득점구간",
    typeColor: "#88b424",
    overtime: true,
    ruleText: "경기중 최고 많은 득점이 발생 할 구간(전,후반)을 예측하여 베팅하는 방식",
  },

  {
    id: 0,
    type: "스코어",
    typeColor: "#b14ce3",
    overtime: true,
    ruleText: "양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "스코어 (전반전)",
    typeColor: "#b14ce3",
    overtime: false,
    ruleText: "전반전만의 양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "스코어 (후반전)",
    typeColor: "#b14ce3",
    overtime: false,
    ruleText: "후반전만의 양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식",
  },
];

const FootballArray = [
  {
    id: 0,
    type: "승패 (풀타임)",
    typeColor: "#1c92df",
    overtime: null,
    ruleText: "승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승패 (무X)(1쿼터)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "1쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)",
  },
  {
    id: 0,
    type: "승패 (무X)(2쿼터)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "2쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)",
  },
  {
    id: 0,
    type: "승패 (무X)(3쿼터)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "3쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)",
  },
  {
    id: 0,
    type: "승패 (무X)(4쿼터)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "4쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)",
  },
  {
    id: 0,
    type: "승무패 (전반전)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "전반전(1,2쿼터)만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승무패 (후반전)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "후반전(3,4쿼터)만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승무패 (1쿼터)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "1쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승무패 (2쿼터)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "2쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승무패 (3쿼터)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "3쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승무패 (4쿼터)",
    typeColor: "#1c92df",
    overtime: false,
    ruleText: "4쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "전반 & 전후반",
    typeColor: "#1c92df",
    overtime: true,
    ruleText:
      "전반전만의 결과와 최종(전후반포함) 각각의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "전반 & 전후반(풀타임)",
    typeColor: "#1c92df",
    overtime: null,
    ruleText:
      "전반전만의 결과와 최종(전후반 연장포함) 각각의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식",
  },

  {
    id: 0,
    type: "핸디캡 (풀타임)",
    typeColor: "#fe9429",
    overtime: null,
    ruleText: "상대적으로 전력이 우수한 팀에게 불리한 조건을 주어 경기의 균형을 맞추고 승리가 예상되는 팀을 선택하여",
    ruleText2: "베팅하는 방식 홈팀(왼쪽)기준으로 +,-의 핸디캡 기준점수가 표기됨",
  },
  {
    id: 0,
    type: "핸디캡 (전반전)",
    typeColor: "#fe9429",
    overtime: false,
    ruleText:
      "핸디캡을 적용하여 전반전(1,2쿼터)만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "핸디캡 (후반전)",
    typeColor: "#fe9429",
    overtime: false,
    ruleText:
      "핸디캡을 적용하여 후반전(3,4쿼터)만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "핸디캡 (1쿼터)",
    typeColor: "#fe9429",
    overtime: false,
    ruleText: "핸디캡을 적용하여 1쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "핸디캡 (2쿼터)",
    typeColor: "#fe9429",
    overtime: false,
    ruleText: "핸디캡을 적용하여 2쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "핸디캡 (3쿼터)",
    typeColor: "#fe9429",
    overtime: false,
    ruleText: "핸디캡을 적용하여 3쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "핸디캡 (4쿼터)",
    typeColor: "#fe9429",
    overtime: false,
    ruleText: "핸디캡을 적용하여 4쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식",
  },

  {
    id: 0,
    type: "언더오버 (풀타임)",
    typeColor: "#88b424",
    overtime: null,
    ruleText: "양팀의 최종 득점의 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "언더오버 (전반전)",
    typeColor: "#88b424",
    overtime: false,
    ruleText: "전반전(1,2쿼터)만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "언더오버 (후반전)",
    typeColor: "#88b424",
    overtime: false,
    ruleText: "후반전(3,4쿼터)만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "언더오버 (1쿼터)",
    typeColor: "#88b424",
    overtime: false,
    ruleText: "1쿼터만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "언더오버 (2쿼터)",
    typeColor: "#88b424",
    overtime: false,
    ruleText: "2쿼터만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "언더오버 (3쿼터)",
    typeColor: "#88b424",
    overtime: false,
    ruleText: "3쿼터만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "언더오버 (4쿼터)",
    typeColor: "#88b424",
    overtime: false,
    ruleText: "4쿼터만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식",
  },

  {
    id: 0,
    type: "홀짝 (풀타임)",
    typeColor: "#b14ce3",
    overtime: null,
    ruleText: "양팀의 최종 득점의 합이 홀 또는, 짝으로 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "홀짝 (전반전)",
    typeColor: "#b14ce3",
    overtime: false,
    ruleText: "전반전(1,2쿼터)만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "홀짝 (후반전)",
    typeColor: "#b14ce3",
    overtime: false,
    ruleText: "후반전(3,4쿼터)만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식",
  },

  {
    id: 0,
    type: "최고득점구간",
    typeColor: "#88b424",
    overtime: true,
    ruleText: "경기중 최고 많은 득점이 발생 할 구간(1쿼터, 2쿼터, 3쿼터, 4쿼터)을 예측하여 베팅하는 방식",
  },
];

const ESportsArray = [
  {
    id: 0,
    type: "승패 (풀타임)",
    typeColor: "#1c92df",
    overtime: null,
    ruleText: "승리가 예상되는 팀(선수)을 선택하여 베팅하는 방식",
  },
  {
    id: 0,
    type: "승패 (무X)(풀타임)",
    typeColor: "#1c92df",
    overtime: null,
    ruleText: "승리가 예상되는 팀(선수)을 선택하여 베팅하는 방식 (무승부는 적중특례)",
  },
  {
    id: 0,
    type: "핸디캡 (풀타임)",
    typeColor: "#fe9429",
    overtime: null,
    ruleText: "상대적으로 전력이 우수한 팀(선수)에게 불리한 조건을 주어 경기의 균형을 맞추고 승리가 예상되는",
    ruleText2: "팀(선수)을 선택하여 베팅하는 방식 홈팀(왼쪽)기준으로 +,-의 핸디캡 기준점수가 표기됨",
  },
];

const LiveSportSubArray = [
  {
    id: 0,
    title: "공통사항",
    color: "rgb(240, 66, 129)",
    text: "라이브스포츠는 실시간 경기 진행 상황에 따라 베팅수락,지연 또는 거절 될 수 있습니다.",
    text2:
      "위험지대 베팅 PK, 코너킥, 프리킥, 파울, 부킹, 선수교체, VAR, 투수교체, 안타, 투수교체 등 경기 결과에 영향을 줄 수있는 상황이 진행중인 상태입니다. 대기중인 베팅은 경기에 영향을 끼칠 수 있다고 판단될 시, 거절/취소될 수 있으며 위엄지대 이후 경기 결과가 변동되지 않을 경우 베팅은 지연 수락될 수 있습니다.",
    text3:
      "베팅 종류별(승무패, 핸디캡 등) 정규시간, 연장포함, 특정 이닝/쿼터/세트 등 구분되며 정해진 경기시간 내 결과로 처리됩니다.",
  },
  {
    id: 0,
    title: "축구",
    color: "rgb(240, 66, 129)",
    text: "모든 베팅은 90분 경기 완료전 경기가 종료되었거나 중단될  경우 경기는 모두 무효처리 됩니다.",
    text2:
      "85분 이상 경기 진행 이후 심판이 공식결과를 발표하며 시합을 종료할 경우는 예외입니다.(공식 결과에 따릅니다.)",
    text3: "라이브 핸디캡 베팅의 경우 기존 점수는 포함 되지 않으며, 베팅 시점 핸디캡으로 반영 됩니다.",
    text4: "라이브 언더오버 베팅의 경우 기존 점수를 포함하며, 최종점수에 기준점이 반영 됩니다.",
    text5: "위험지대 베팅으로 대기중 베팅은 취소 될 수 있습니다.(파울, 부킹, 코너킥, 프리킥, PK, 선수교체 등)",
  },
  {
    id: 0,
    title: "야구",
    color: "rgb(240, 66, 129)",
    text: "승패 베팅시 시작 전에 진행된 베팅은 5회말(홈팀이 승리시 5회초 종료시 인정)이 완료되면 유효합니다.",
    text2: "핸디캡 베팅시 9이닝 정규이닝 종료시 정상처리, 홈팀 승리시 9회초 종료를 정규이닝으로 함.(그전 종료시 적특)",
    text3:
      "언더오버 베팅시 9이닝 정규이닝 종료시 정상처리, 홈팀 승리시 9회초 종료를 정규이닝으로 함.(그전 종료시 적특)",
  },
];

const SoccerSubArray = [
  {
    id: 0,
    title: "연장제외",
    title2: "연장없음",
    color: "#dbae00",
    text: "정규시간 (전반전/후반전)의 경기결과만 적용 합니다. (연장전 및 승부차기는 제외 됩니다)",
  },
  {
    id: 0,
    title: "핸디캡 (전체)",
    color: "#fe9429",
    text: "선택한 기준점수는 미만 또는 초과 이므로, 연장을 포함하여 핸디캡 적용 결과가 무승부일 경우는 미당첨 처리됨",
  },
  {
    id: 0,
    title: "언더오버 (전체)",
    color: "#88b424",
    text: "선택한 기준점수는 연장을 포함하여 동일한 기준점수로 종료 될 경우 적중특례 처리됨",
  },
];

const BasketballSubArray = [
  {
    id: 0,
    title: "연장포함",
    color: "#f04281",
    text: "정규(4쿼터)까지 승부 결과가 나지 않을 경우 연장전의 경기 결과 적용됩니다. (승부치기가 있는경우 승부치기의 결과가 적용됩니다.)",
  },
  {
    id: 0,
    title: "연장제외",
    title2: "연장없음",
    color: "#dbae00",
    text: "정규시간 (4쿼터)까지의 경기결과만 적용 합니다. (연장전 및 승부차기는 제외 됩니다)",
  },
  { id: 0, title: "승패 (풀타임)", color: "#1c92df", text: "연장을 포함하여 무승부일 경우는 미당첨 처리됨" },
  {
    id: 0,
    title: "핸디캡 (전체)",
    color: "#fe9429",
    text: "선택한 기준점수는 미만 또는 초과 이므로, 연장을 포함하여 핸디캡 적용 결과가 무승부일 경우는 미당첨 처리됨",
  },
  {
    id: 0,
    title: "언더오버 (전체)",
    color: "#88b424",
    text: "선택한 기준점수는 연장을 포함하여 동일한 기준점수로 종료 될 경우 적중특례 처리됨",
  },
];

const BaseballSubArray = [
  {
    id: 0,
    title: "연장포함",
    color: "#f04281",
    text: "정규(9이닝)까지 승부 결과가 나지 않을 경우 연장전의 경기 결과 적용됩니다. (승부치기가 있는경우 승부치기의 결과가 적용됩니다.)",
  },
  {
    id: 0,
    title: "연장제외",
    title2: "연장없음",
    color: "#dbae00",
    text: "정규시간 (9이닝)까지의 경기결과만 적용 합니다. (연장전 및 승부차기는 제외 됩니다)",
  },
  { id: 0, title: "승패 (풀타임)", color: "#1c92df", text: "연장을 포함하여 무승부일 경우는 미당첨 처리됨" },
  {
    id: 0,
    title: "핸디캡 (전체)",
    color: "#fe9429",
    text: "선택한 기준점수는 미만 또는 초과 이므로, 연장을 포함하여 핸디캡 적용 결과가 무승부일 경우는 미당첨 처리됨",
  },
  {
    id: 0,
    title: "언더오버 (전체)",
    color: "#88b424",
    text: "선택한 기준점수는 연장을 포함하여 동일한 기준점수로 종료 될 경우 적중특례 처리됨",
  },
  {
    id: 0,
    title: "콜드게임",
    color: "#1c92df",
    text: "선택한 기준점수는 연장을 포함하여 동일한 기준점수로 종료 될 경우 적중특례 처리됨",
  },
  {
    id: 0,
    title: "기타",
    color: "#1c92df",
    text: "핸디캡과 언더오버의 경우 정규(9이닝)을 채우지 못한 경기라도 노게임 선언이 아니라면 경기 결과에 반영 합니다.",
    text2: "(해당리그의 공식협회가 정식 경기 결과로 인정시 결과에 반영함)",
  },
];

const VolleyballSubArray = [
  {
    id: 0,
    title: "연장포함",
    color: "#f04281",
    text: "정규(3세트)까지 승부 결과가 나지 않을 경우 연장전의 경기 결과 적용됩니다. (승부치기가 있는경우 승부치기의 결과가 적용됩니다.)",
  },
  {
    id: 0,
    title: "연장제외",
    title2: "연장없음",
    color: "#dbae00",
    text: "정규시간 (3세트)까지의 경기결과만 적용 합니다. (연장전 및 승부차기는 제외 됩니다)",
  },
  { id: 0, title: "승패 (풀타임)", color: "#1c92df", text: "연장을 포함하여 무승부일 경우는 미당첨 처리됨" },
  {
    id: 0,
    title: "언더오버 (전체)",
    color: "#88b424",
    text: "선택한 기준점수는 연장을 포함하여 동일한 기준점수로 종료 될 경우 적중특례 처리됨",
  },
];

const TennisSubArray = [
  {
    id: 0,
    title: "연장포함",
    color: "#f04281",
    text: "정규(3세트,5세트)까지 승부 결과가 나지 않을 경우 연장전의 경기 결과 적용됩니다. (승부치기가 있는경우 승부치기의 결과가 적용됩니다.)",
  },
  {
    id: 0,
    title: "연장제외",
    title2: "연장없음",
    color: "#dbae00",
    text: "정규(3세트,5세트)까지의 경기결과만 적용 합니다. (연장전 및 승부차기는 제외 됩니다)",
  },
  { id: 0, title: "승패 (풀타임)", color: "#1c92df", text: "연장을 포함하여 무승부일 경우는 미당첨 처리됨" },
  {
    id: 0,
    title: "언더오버 (전체)",
    color: "#88b424",
    text: "선택한 기준점수는 연장을 포함하여 동일한 기준점수로 종료 될 경우 적중특례 처리됨",
  },
];

const HockeySubArray = [
  {
    id: 0,
    title: "연장포함",
    color: "#f04281",
    text: "정규(3피리어드)까지 승부 결과가 나지 않을 경우 연장전의 경기 결과 적용됩니다. (승부치기가 있는경우 승부치기의 결과가 적용됩니다.)",
  },
  {
    id: 0,
    title: "연장제외",
    title2: "연장없음",
    color: "#dbae00",
    text: "정규(3피리어드)까지의 경기결과만 적용 합니다. (연장전 및 승부차기는 제외 됩니다)",
  },
  { id: 0, title: "승패 (풀타임)", color: "#1c92df", text: "연장을 포함하여 무승부일 경우는 미당첨 처리됨" },
  {
    id: 0,
    title: "핸디캡 (전체)",
    color: "#fe9429",
    text: "선택한 기준점수는 미만 또는 초과 이므로, 연장을 포함하여 핸디캡 적용 결과가 무승부일 경우는 미당첨 처리됨",
  },
  {
    id: 0,
    title: "언더오버 (전체)",
    color: "#88b424",
    text: "선택한 기준점수는 연장을 포함하여 동일한 기준점수로 종료 될 경우 적중특례 처리됨",
  },
];

const HandballSubArray = [
  {
    id: 0,
    title: "연장제외",
    title2: "연장없음",
    color: "#dbae00",
    text: "정규시간 (전반전/후반전)의 경기결과만 적용 합니다. (연장전 및 승부차기는 제외 됩니다)",
  },
  {
    id: 0,
    title: "핸디캡 (전체)",
    color: "#fe9429",
    text: "선택한 기준점수는 미만 또는 초과 이므로, 연장을 포함하여 핸디캡 적용 결과가 무승부일 경우는 미당첨 처리됨",
  },
  {
    id: 0,
    title: "언더오버 (전체)",
    color: "#88b424",
    text: "선택한 기준점수는 연장을 포함하여 동일한 기준점수로 종료 될 경우 적중특례 처리됨",
  },
];

const FootballSubArray = [
  {
    id: 0,
    title: "연장포함",
    color: "#f04281",
    text: "정규(4쿼터)까지 승부 결과가 나지 않을 경우 연장전의 경기 결과 적용됩니다. (승부치기가 있는경우 승부치기의 결과가 적용됩니다.)",
  },
  {
    id: 0,
    title: "연장제외",
    title2: "연장없음",
    color: "#dbae00",
    text: "정규시간 (4쿼터)까지의 경기결과만 적용 합니다. (연장전 및 승부차기는 제외 됩니다)",
  },
  { id: 0, title: "승패 (풀타임)", color: "#1c92df", text: "연장을 포함하여 무승부일 경우는 미당첨 처리됨" },
  {
    id: 0,
    title: "핸디캡 (전체)",
    color: "#fe9429",
    text: "선택한 기준점수는 미만 또는 초과 이므로, 연장을 포함하여 핸디캡 적용 결과가 무승부일 경우는 미당첨 처리됨",
  },
  {
    id: 0,
    title: "언더오버 (전체)",
    color: "#88b424",
    text: "선택한 기준점수는 연장을 포함하여 동일한 기준점수로 종료 될 경우 적중특례 처리됨",
  },
];

const ESportsSubArray = [
  { id: 0, title: "승패 (풀타임)", color: "#1c92df", text: "연장을 포함하여 무승부일 경우는 미당첨 처리됨" },
  {
    id: 0,
    title: "핸디캡 (전체)",
    color: "#fe9429",
    text: "선택한 기준점수는 미만 또는 초과 이므로, 연장을 포함하여 핸디캡 적용 결과가 무승부일 경우는 미당첨 처리됨",
  },
];

const SportsGamePolicy = ({ setSelectedTab }) => {
  const tabsArray = [
    {
      text: "라이브스포츠",
      icon: Icon14,
      iconHighlight: IconHighlight14,
      id: 0,
      path: "/cscenter/policy/sportsgame/live-sport",
    },
    { text: "축구", icon: Icon1, iconHighlight: Icon1_on, id: 1, path: "/cscenter/policy/sportsgame/soccer" },
    { text: "농구", icon: Icon2, iconHighlight: Icon2_on, id: 2, path: "/cscenter/policy/sportsgame/basketball" },
    { text: "야구", icon: Icon3, iconHighlight: Icon3_on, id: 3, path: "/cscenter/policy/sportsgame/baseball" },
    { text: "배구", icon: Icon4, iconHighlight: Icon4_on, id: 4, path: "/cscenter/policy/sportsgame/volleyball" },
    { text: "테니스", icon: Icon5, iconHighlight: Icon5_on, id: 5, path: "/cscenter/policy/sportsgame/tennis" },
    { text: "하키", icon: Icon6, iconHighlight: Icon6_on, id: 6, path: "/cscenter/policy/sportsgame/hockey" },
    { text: "핸드볼", icon: Icon7, iconHighlight: Icon7_on, id: 7, path: "/cscenter/policy/sportsgame/handball" },
    { text: "미식축구", icon: Icon8, iconHighlight: Icon8_on, id: 8, path: "/cscenter/policy/sportsgame/football" },
    { text: "e-스포츠", icon: Icon9, iconHighlight: Icon9_on, id: 9, path: "/cscenter/policy/sportsgame/e-sports" },
  ];

  return (
    <div>
      <MyPageTitle title="스포츠게임" />

      <div className="mt-12px" />
      <HorizontalMenu itemsArray={tabsArray} setSelectedTab={setSelectedTab} showSub={false} h_space={2} v_space={3} />

      <div className=" mt-25px w-full flex h-16px items-center justify-center text-16px tracking-tight text-white">
        <Route path="/cscenter/policy/sportsgame/live-sport">
          <p className="text-white">라이브스포츠 베팅규정 (모든 종목의 기본규정과 다를 시 별도 표기하고 있습니다.)</p>
        </Route>
        <Route path="/cscenter/policy/sportsgame/soccer">
          <p className="text-white">모든 프로축구 경기는 해당 리그의 공식협회가 인정하는 경기 결과대로 반영됩니다.</p>
        </Route>
        <Route path="/cscenter/policy/sportsgame/basketball">
          <p className="text-white">모든 프로농구 경기는 해당 공식협회가 인정하는 경기 결과대로 반영됩니다.</p>
        </Route>
        <Route path="/cscenter/policy/sportsgame/baseball">
          <p className="text-white">모든 프로야구 경기는 해당 리그의 공식협회가 인정하는 경기 결과대로 반영됩니다.</p>
        </Route>
        <Route path="/cscenter/policy/sportsgame/volleyball">
          <p className="text-white">모든 프로배구 경기는 해당 공식협회가 인정하는 경기 결과대로 반영됩니다.</p>
        </Route>
        <Route path="/cscenter/policy/sportsgame/tennis">
          <p className="text-white">모든 테니스 경기는 해당 리그의 공식협회가 인정하는 경기 결과대로 반영됩니다.</p>
        </Route>
        <Route path="/cscenter/policy/sportsgame/hockey">
          <p className="text-white">모든 아이스하키 경기는 해당 공식협회가 인정하는 경기 결과대로 반영됩니다.</p>
        </Route>
        <Route path="/cscenter/policy/sportsgame/handball">
          <p className="text-white">모든 핸드볼 경기는 해당 공식협회가 인정하는 경기 결과대로 반영됩니다.</p>
        </Route>
        <Route path="/cscenter/policy/sportsgame/football">
          <p className="text-white">모든 미식축구 경기는 해당 공식협회가 인정하는 경기 결과대로 반영됩니다.</p>
        </Route>
        <Route path="/cscenter/policy/sportsgame/e-sports">
          <p className="text-white">모든 e-스포츠 경기는 해당 리그의 공식협회가 인정하는 경기 결과대로 반영됩니다.</p>
        </Route>
      </div>

      <div className="mt-26px" />

      <Route path="/cscenter/policy/sportsgame/soccer">
        <SportsGamePolicyTable1 array={SoccerArray} />
      </Route>
      <Route path="/cscenter/policy/sportsgame/basketball">
        <SportsGamePolicyTable1 array={BasketballArray} />
      </Route>
      <Route path="/cscenter/policy/sportsgame/baseball">
        <SportsGamePolicyTable1 array={BaseballArray} />
      </Route>
      <Route path="/cscenter/policy/sportsgame/volleyball">
        <SportsGamePolicyTable1 array={VolleyballArray} />
      </Route>
      <Route path="/cscenter/policy/sportsgame/tennis">
        <SportsGamePolicyTable1 array={TennisArray} />
      </Route>
      <Route path="/cscenter/policy/sportsgame/hockey">
        <SportsGamePolicyTable1 array={HockeyArray} />
      </Route>
      <Route path="/cscenter/policy/sportsgame/handball">
        <SportsGamePolicyTable1 array={HandballArray} />
      </Route>
      <Route path="/cscenter/policy/sportsgame/football">
        <SportsGamePolicyTable1 array={FootballArray} />
      </Route>
      <Route path="/cscenter/policy/sportsgame/e-sports">
        <SportsGamePolicyTable1 array={ESportsArray} />
      </Route>

      <div className="mt-20px" />

      <Route path="/cscenter/policy/sportsgame/live-sport">
        <SportsGamePolicyTable3 array={LiveSportSubArray} />
      </Route>
      <Route path="/cscenter/policy/sportsgame/soccer">
        <SportsGamePolicyTable2 array={SoccerSubArray} />
      </Route>
      <Route path="/cscenter/policy/sportsgame/basketball">
        <SportsGamePolicyTable2 array={BasketballSubArray} />
      </Route>
      <Route path="/cscenter/policy/sportsgame/baseball">
        <SportsGamePolicyTable2 array={BaseballSubArray} />
      </Route>
      <Route path="/cscenter/policy/sportsgame/volleyball">
        <SportsGamePolicyTable2 array={VolleyballSubArray} />
      </Route>
      <Route path="/cscenter/policy/sportsgame/tennis">
        <SportsGamePolicyTable2 array={TennisSubArray} />
      </Route>
      <Route path="/cscenter/policy/sportsgame/hockey">
        <SportsGamePolicyTable2 array={HockeySubArray} />
      </Route>
      <Route path="/cscenter/policy/sportsgame/handball">
        <SportsGamePolicyTable2 array={HandballSubArray} />
      </Route>
      <Route path="/cscenter/policy/sportsgame/football">
        <SportsGamePolicyTable2 array={FootballSubArray} />
      </Route>
      <Route path="/cscenter/policy/sportsgame/e-sports">
        <SportsGamePolicyTable2 array={ESportsSubArray} />
      </Route>

      <div className="mt-60px" />
    </div>
  );
};

export default SportsGamePolicy;
