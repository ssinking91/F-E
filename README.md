## final project

## 👊 집을 모아놓다.zip - FrontEnd

![집을 모아놓다.zip](https://user-images.githubusercontent.com/80023108/150964817-baf6912d-46f3-4f66-a4c2-b596945846cc.png)

<br />

## 🗂 Summary

### 항해99 4기, 실전 프로젝트 4조

> \* 서비스명 : <img width="30" alt="[dot.zip]" src="https://user-images.githubusercontent.com/80023108/150964817-baf6912d-46f3-4f66-a4c2-b596945846cc.png"> [집을 모아놓다.zip](https://www.dotzip.today) [Frontend]
>	
> \* 서비스 설명 : 여기저기 흩어져 있는 청약 정보를 한눈에 보기 쉽게 모아놓은 dotzip 서비스

- [\[사이트 바로가기\]](https://www.dotzip.today)
- [\[시연영상 바로가기\]](https://www.youtube.com/watch?v=_YiE4AWV-8w&feature=youtu.be)
- [\[팀노션 바로가기\]](https://www.notion.so/kongom2/Team-zip-9e4ad0e0184448fc868950b076008e93)

<br />

## 👥 멤버

- 팀장
  - 공성훈
- 프론트엔드
  - 공성훈 (https://github.com/kongom2)
  - 김형래 (https://github.com/O-h-y-o)
  - 신항민 (https://github.com/ssinking91)
- 백엔드
  - 정하나 (https://github.com/hana-j)
  - 곽태민 (https://github.com/kwak9898)
  - 민수현 (https://github.com/SuHyeon-Eleven)
- 디자이너
  - 서가람
  - 이세은

<br />

## 🗓 프로젝트 설명

- 개발기간: 2021년 12월 18일 ~ 2022년 01월 28일
- 개발언어: JavaScript
- 개발 라이브러리:
	- React.js v17.0.2
		-자바스크립트 라이브러리, 웹 인터페이스를 만들기 위해 사용됨
- 배포 환경:
	- Amazon S3, CloundFront
- Yarn v1.22.10 / npm v6.14.13 / npx v6.14.13
	- 자바스크립트 패키지 매니저
    
- 협업 툴: git / notion / figma / slack
- 프로젝트 취지: 내 집 마련의 꿈을 위한 청약 정보를 한눈에 보기 쉽게 모아놓은 dotzip 서비스

<br />

## ♟ Information Architecture

![image](https://user-images.githubusercontent.com/89959952/168701168-b5126853-aacb-4b02-8a51-9ba1309c2ee7.png)

<br />

## 🧩 Architecture

![image](https://user-images.githubusercontent.com/89959952/168700949-98dec513-8ce2-457b-bf0b-8dffc1b03cba.png)

<br />

<br />

## 📌 API 명세서

- [\[API 명세서 바로가기\]](https://www.notion.so/kongom2/API-bfb3416ac0c14b36bfd8a3752cac2bd7)

<br />

## 🌠기능소개

- 소셜 로그인
- 공영 민영 청약 OPEN API에서 가져온 정보 일관적이게 제공
- 찜한 청약공고를 편하게 관리할 수 있도록 마이페이지를 제공
- 마이페이지에서 지역, 이메일 수정 가능
- 찜한 공고의 청약 접수날짜에 메일알림

<br/>

## ⚙️ Front-End 기술 스택

<p align="center">
<br>
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
<br>
<img src="https://img.shields.io/badge/WebRTC-333333?style=for-the-badge&logo=WebRTC&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/CloudFront-D05C4B?style=for-the-badge&logo=CloudFront&logoColor=white">
<img src="https://img.shields.io/badge/Route53-E68B49?style=for-the-badge&logo=Route53s&logoColor=white">
<img src="https://img.shields.io/badge/S3-569A31?style=for-the-badge&logo=S3&logoColor=white">
<br>
<br>
<br>

## 📕주요 라이브러리

| 라이브러리	| 설명| 	버전|
| ------------- | -------------------------- | ------ |
| @fullpage/react-fullpage | 	풀페이지 스크롤 기능	| ^0.1.19| 
| axios	| 백엔드 통신| 	^0.24.0| 
| connected-react-router| 	히스토리 객체 관리	|^6.9.2| 
| history	| 히스토리| 	4.10.0| 
| immer	| 불변성 관리| 	^9.0.7| 
| lodash	| 이벤트 제어| 	^4.17.21| 
| react-facebook-login| 	페이스북 로그인| 	^4.1.1| 
| react-google-login| 	구글 로그인| 	^5.2.2| 
| react-icons| 	리액트 아이콘| 	^4.3.1| 
| react-naver-login| 	네이버 로그인| 	^0.1.4| 
| react-redux	| 리덕스 상태관리| 	^7.2.6| 
| react-router-dom| 	리액트 라우터 기능| 	5.2.0| 
| react-scripts	| 리액트 스크립트| 	4.0.3| 
| redux	| 리덕스 상태관리	| ^4.1.2| 
| redux-actions| 	액션관리| 	^2.6.5| 
| redux-logger| 	리덕스 디버깅 도구	| ^3.0.6| 
| redux-thunk	| 리덕스 미들웨어	| ^2.4.1| 
| styled-components| 	컴포넌트 내에 CSS	| ^5.3.3| 
| styled-reset	| CSS 리셋	| ^4.3.4| 
| sweetalert2	| alert CSS	| ^11.3.0| 
| swiper	| 스와이프 기능	| 6.8.4| 
| webfontloader| 	웹폰트 로더| 	^1.6.28| 
	
<br/>

- redux, redux-actions, immer, redux-thunk / redux-logger
   * state 관리를 전역으로 할 수 있고, 무분별한 prop-drilling을 방지한다.
   * 데이터가 집중화 되어있어 예측가능하며 데이터 흐름이 단방향이라서 디버깅하기 쉽다는 장점이 있다.
   * 미들웨어로 서버와의 비동기 액션보다 편하게 다루기 위해 redux-thunk, 개발환경에서 state / action 등 쉽게 추적하고 관리하기 위해 redux-logger사용
	
- styled-components
   * CSS-in-JS 라이브러리
   * CSS 파일을 밖에 두지 않고, 컴포넌트 내부에 넣기 때문에, CSS가 전역으로 중첩되지 않도록 만들어주는 장점이 있다.
   * Scss라이브러리 설치 없이 Scss 문법을 사용할 수 있다.
   * 컴포넌트의 props를 참조할 수 있으며, props의 값에 따라 스타일을 다르게 코딩 할 수 있다.

- swiper
   * 모바일 환경에서의 터치 이벤트(스와이프에)에 잘 반응하는 Slider를 표현하기 위해 선택
   * PC, 모바일 상당히 부드럽고 안정적
   * 옵션들을 쉽게 조작 할 수 있다.
   * 효과, 기능이 많음 (수직 슬라이드, 수평 슬라이드, 수직수평 슬라이드, 동영상 슬라이드, 3D, 패럴랙스 효과 등등)
	
- lodash
   * debounce: 동일 이벤트가 반복적으로 시행되는 경우 마지막 이벤트가 실행되고 나서 일정 시간(밀리세컨드)동안 해당 이벤트가 다시 실행되지 않으면 해당 이벤트의 콜백 함수를 실행합니다.
   * throttle: 동일 이벤트가 반복적으로 시행되는 경우 이벤트의 실제 반복 주기와 상관없이 임의로 설정한 일정 시간 간격(밀리세컨드)으로 콜백 함수의 실행을 보장합니다.


<br />


## ⛔️ Trouble Shooting

### 댓글 애니메이션이 Input박스의 크기를 벗어나는 현상

> 문제점 : 해당 애니메이션을 input cursor를 따라가도록 해서 cursor가 input의 크기를 벗어나더라도 애니메이션이 지속적으로 발생.
>
> ❓ As-Is  
> ![image](https://user-images.githubusercontent.com/93691859/151387904-188c0989-3997-4ea3-a61a-ca05af6fb41a.png)
> ![image](https://user-images.githubusercontent.com/93691859/151386592-682910e5-748e-44ce-92e2-a511db7b88ce.png)

> 
> 💡 To-Be  
> ![image](https://user-images.githubusercontent.com/93691859/151386685-ec295c60-7984-4780-accf-1b4a9b8b0655.png)
>
> 
>❗️ 해결 : 먼저 input의 크기(offsetWidth)를 구해서 커서의 위치가 input의 크기보다 작을경우엔 애니메이션이 커서의 위치를 따라가도록 하고
>          그게 아닐경우 애니메이션이 input의 최대 크기 위치에 멈춰 있도록 수정함. 


<br />



