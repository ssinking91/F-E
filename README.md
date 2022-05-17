





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

- [\[API 명세서 바로가기\]](https://typical-guanaco-54b.notion.site/API-bda198d1807e4eff8de732ebe02f3134)

<br />




## 🌠기능소개

- 소셜 로그인
- 공영 민영 청약 OPEN API에서 가져온 정보 일관적이게 제공
- 찜한 청약공고를 편하게 관리할 수 있도록 마이페이지를 제공
- 마이페이지에서 지역, 이메일 수정 가능
- 찜한 공고의 청약 접수날짜에 메일알림

<br/>

## 프론트엔드_기술 스택

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
	
## ⚙️ Front-End 기술 스택

- Styled-Component
   * CSS-in-JS 라이브러리
   * CSS 파일을 밖에 두지 않고, 컴포넌트 내부에 넣기 때문에, CSS가 전역으로 중첩되지 않도록 만들어주는 장점이 있다.
- Redux, redux-actions, immer, redux-thunk / redux-logger
   * state 관리를 전역으로 할 수 있고, 무분별한 prop-drilling을 방지한다.
   * 데이터가 집중화 되어있어 예측가능하며 데이터 흐름이 단방향이라서 디버깅하기 쉽다는 장점이 있다.
   * 미들웨어로 서버와의 비동기 액션보다 편하게 다루기 위해 redux-thunk, 개발환경에서 state / action 등 쉽게 추적하고 관리하기 위해 redux-logger사용

- sockjs
   * sockjs는 WebSocket과 유사한 객체를 제공하는 브라우저 JavaScript 라이브러리입니다. sockjs는 브라우저와 웹 서버간에 낮은 대기 시간, 전이중, 도메인 간 통신 채널을 생성하는 일관된 크로스 브라우저 Javascript API를 제공합니다.
- stomp
   * stomp는 단순 텍스트 지향 메시징 프로토콜이다. spring에 종속적이고, 웹소켓 위에서 동작하는 프로토콜로써, 클라이언트가 서버와 전송할 메시지 유형, 형식, 내용들을 정의하는 메커니즘이다.
- react-ga
   * 구글 애널리틱스를 사용하기위한 리액트 패키지
- axios
   * 서버와 통신을 위한 라이브러리

- react-spring

   * 기존의 애니메이션 라이브러리 하면 animated 와 react-motion 이 많이 나오는데, animated의 쉬운 사용과 react-motion의 간결한 구조의 장점을 합친것이 react-spring이다.
   * 훅을 이용한 사용법이 간결하고 쉬웠던 장점이 있었고, 애니메이션 움직임 또한 부드러웠다.

<img width="350px" src="https://user-images.githubusercontent.com/85574104/152375860-bc0e2f30-b07f-45c9-81cb-140543d40623.gif"/><img width="350px" src="https://user-images.githubusercontent.com/85574104/152375826-d705b1ca-38b8-45c4-bd47-f086e2398bb2.gif"/>


- React Quill

   * 생드백 작성 시 사용자의 감정을 텍스트 에디터의 글자 색상변경, 밑줄 등으로 좀 더 다채로운 감정표현이 가능하게 하기 위해 사용
   * API 기반 디자인 덕분에 다른 텍스트 편집기 에서처럼 HTML이나 다른 DOM 트리를 구문 분석 할 필요가 없다.
   * 편집기 스타일링을위한 사전 설정으로 사용자 정의 콘텐츠 및 서식 지원.
   * 크로스 플랫폼 및 크로스 브라우저 지원을 제공
   * 쉬운 설정.

<br />

<img width="350px" src=https://user-images.githubusercontent.com/85574104/152324423-dcd1eed5-7a1d-4183-bd2b-6073224eb3a0.gif>

<br />

- swiper.js

   * 모바일 환경에서의 터치 이벤트(스와이프에)에 잘 반응하는 Slider를 표현하기 위해 선택
   * PC, 모바일 상당히 부드럽고 안정적
   * 옵션들을 쉽게 조작 할 수 있다
   * 효과, 기능이 많음 (수직 슬라이드, 수평 슬라이드, 수직수평 슬라이드, 동영상 슬라이드, 3D, 패럴랙스 효과 등등)

<br />

<img width="450px" src=https://user-images.githubusercontent.com/85574104/152328500-104a1e9b-5a49-484b-a79f-6dcb494d429c.gif>
<br />

## ⛔️ Trouble Shooting

### 1. 웹소켓 간헐적 끊김현상
> **문제** - 사용자가 채팅을 작성시 연속적으로 데이터를 보낼경우 간헐적으로 소켓이 끊기는 현상을 발견. => 데이터 흐름이 원할하지 않음

> **해결책** - websocket.readystate 와 callback 함수를 사용하여 소켓의 연결상태를 주기적으로 확인하고, 웹소켓 연결이 끊어질때 빠르게 소켓연결이 될수 있도록 한다.


<img width="350px" src="https://user-images.githubusercontent.com/61734933/151477426-397abc83-c3d8-4e66-9c45-8e1e53efe8f6.gif"/> <img width="350px" src="https://user-images.githubusercontent.com/61734933/151477422-738753df-2e11-4ef9-a25c-886ba877c576.gif"/>
#### &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; Before &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;After

### 2. 애니메이션 타격 효과 적용문제
> **문제** - 사용자가 샌드백을 클릭하면 타격을 하는 느낌으로 애니메이션이 움직이는 모션을 취하는데 모션만 있을경우 타격효과를 내는 것이 부족하다고 판단  

> **해결책** - 타격효과를 내는 애니메이션을 샌드백이 움직이는 순간에만 보이도록 하여 사용자가 직접 타격한다는 느낌을 준다. => 클릭시 샌드백이 움직이는 찰나의 순간을 useState를 통해 상태값을 저장 후 settimeout 함수를 이용해 샌드백이 움직이는 시간을 계산하고 그 시간만큼 타격효과 애니메이션이 보이도록 해준다.


<img width="350px" src="https://user-images.githubusercontent.com/61734933/151477396-16a355f6-77b5-49cf-a031-0a7470896ed3.gif"/> <img width="350px" src="https://user-images.githubusercontent.com/61734933/151477408-98cd88fb-02c8-44d6-8f7a-a8b5203818c3.gif"/>
#### &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; Before &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;After

### 3. 실시간 알림소켓 연결문제
> **문제** - 사용자가 어느 페이지에 있던 실시간알림이 전달되어야하는데 알림페이지에 진입하지 않으면 알림이 오지 않는 현상 => 소켓 연결 x

> **해결책** - 알림페이지에 웹소켓을 위치시키지 않고 따로 분리한뒤 사용자가 처음 웹페이지에 진입함과 동시에 알림 소켓이 연결되도록 설계

<br/>
<br/>
<br/>


### 4. 무한스크롤시 데이터를 다 불러왔음에도 지속적으로 dispatch가 일어나는 현상

> 문제점 : 해당 api 호출을 onScroll에 걸어놨기 때문에 데이터를 다 불러와도 스크롤이 일어날때마다 의미없는 api호출(빈배열)이 지속적으로 일어남.
>
> ❓ As-Is  
> ![image](https://user-images.githubusercontent.com/93691859/151382936-c7e6599d-8294-4343-9f10-295f4094c29c.png)
> 
> 💡 To-Be  
> ![image](https://user-images.githubusercontent.com/93691859/151383020-0dccd112-a3f3-463c-b1af-4ba5fe795629.png)
>
> !![image](https://user-images.githubusercontent.com/93691859/151383713-453f5c64-d737-4238-bb44-71bcd1892012.png)

>❗️ 해결 : is_card_list_load_complete액션을 만들어 다 불러오지 않은 상태를 false로 기본값 지정 후 if문을 사용해 (action.payload.notice.length === 0)
>          즉 더이상 호출할 데이터가 없을경우 상태값을 true로 바꿔줌. 후 해당 컴포넌트에서 useSelector를 활용해 is_card_list_load_complete 상태를 불러온 후
>          해당값이 true일 경우 아무것도 리턴하지 않도록 수정해서 문제를 해결.

<br />
<br />


### 5. 무한스크롤시 전체 데이터가 불러와진 상태에서 페이지 이동 후 해당 무한스크롤 페이지로 돌아왔을때 무한스크롤이 동작하지 않는 현상

> 문제점 : 데이터를 다 불러온 상태에서 추가적인 api호출을 막아주는 상태값(is_card_list_load_complete)의 문제.
>
> ❓ As-Is  
> ![image](https://user-images.githubusercontent.com/93691859/151380276-44afd21d-cd14-41e2-ad75-2ba3e8b391b9.png)
> 
> 💡 To-Be  
> ![image](https://user-images.githubusercontent.com/93691859/151380568-65818e92-1fa1-47be-be3b-3711a0a15320.png)
>
> ![image](https://user-images.githubusercontent.com/93691859/151380770-e268d497-5d47-4c08-ae06-f6c354da020d.png)

>❗️ 해결 : 해당 카드를 클릭할때마다 setPageNumber 액션을 일으켜 무한 스크롤을 초기화(pageNumber를 다시 0으로, 데이터를 다 불러왔을시 더이상의 추가적인 디스패치가 일어나지 않게
>          해주는 is_card_list_load_complete를 다시 flase로 바꿔줌) 시켜주어서 다시 동작할 수 있도록 함.

<br/>
<br />


### 6. 댓글 애니메이션이 Input박스의 크기를 벗어나는 현상

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


## 👀 유저 피드백  
>  \* 피드백 수집일자 : 2022년 1월 22일 ~ 2022년 1월 25일  
>  \* 피드백 수 : 총 30개  
* 서비스 만족도 평균 점수 : 4.23점 (5점)  
* 스트레스 해소 만족도 점수 : 4.2점 (5점)  
* 긍정적인 피드백 Top3  
    * 생드백을 때리면서 스트레스를 해소한다는 아이디어가 참신하고 좋았다.  
    * 생드백을 때릴 때, 생드백이 맞는 모션과 함께 타격감이 있어서 재미있었다.  
    * 간단하게 이용할 수 있고 인터페이스가 익숙하면서 편하다.  
* 개선에 대한 피드백 Top3  
    * 일부 페이지에서 하단 네비게이션 바가 보여지지 않아 불편했다. (네비게이션 바를 모든 페이지에서 볼 수 있도록 개선 완료)  
    * 채팅을 어떨 때 이용할 수 있는지 모르겠다. (채팅 메뉴에서 이용안내 가이드를 볼 수 있도록 개선 완료)  
    * 첫 화면이 로그인이라서, 로그인을 하지 않으면 아무것도 할 수 없다. (게시글 조회는 로그인을 하지 않아도 되도록 개선 완료)  

<br />

## 👣 런칭 성과
>  \* 런칭일자 : 2022년 01월 22일(토)  
>  \* 성과 집계일자 : 2022년 01월 27일(목) 15:00

### 1. 인스타그램 광고 진행 성과 요약
* 3일간 인스타그램 광고 진행을 통해 약 2만명에게 도달하였으며 이 중, 182명이 사이트에 방문하였음  
* 방문자 중 약 67%는 여성이었음  
* 방문자 중 약 91%는 13-17세의 연령층이었음  
![image](https://user-images.githubusercontent.com/87135478/150996596-5a31264d-0eef-4ad4-8d77-9170158c42ea.png)

<br />

### 2. 개발자 커뮤니티/포럼 홍보 성과 요약
* Okky, 뽐뿌 개발자포럼을 통해 서비스 홍보를 진행하였음
* 사용자, 세션수 등에서 인스타그램 광고를 통한 성과 지표보다 높은 성과를 얻었음
![image](https://user-images.githubusercontent.com/87135478/150999046-b5c3e854-37fe-4dfa-b2c9-20cce48e975d.png)


<br />

### 3. 런칭 이후 누적 데이터 분석 (DataBase)
* 가입 회원 수 : 141명
* 작성된 생드백(게시글) 수 : 총 86개 
* 터트린 생드백 수 : 36개 (전체 대비 41.8%)
* 작성된 잽(댓글) 수 : 총 93개
* 가장 많은 생드백이 작성된 고민 카테고리 Top3 : 기타(27개), 공부(13개), 진로고민(13개)
* 기간동안 생드백이 맞은 횟수 : 총 6,995대 (1인 평균 49.6대)

<br />

### 4. 런칭 이후 누적 데이터 분석 (Google Analytics)
* 사용자 : 741명 (First Visit 기준)
* Page View : 1만
* 이벤트 수 : 1.5만
* 모바일 / PC 비율 : 6.5 / 3.5
* 사용자 재방문 : 12.6%

<br />

### 2. 개발자 커뮤니티/포럼 홍보 성과 요약

- Okky, 뽐뿌 개발자포럼을 통해 서비스 홍보를 진행하였음
- 사용자, 세션수 등에서 인스타그램 광고를 통한 성과 지표보다 높은 성과를 얻었음
  ![image](https://user-images.githubusercontent.com/87135478/150999046-b5c3e854-37fe-4dfa-b2c9-20cce48e975d.png)

<br />

### 3. 런칭 이후 누적 데이터 분석

- 가입 회원 수 : 105명
- 작성된 생드백(게시글) 수 : 총 46개
- 터트린 생드백 수 : 17개 (전체 대비 37%)
- 작성된 잽(댓글) 수 : 총 75개
- 가장 많은 생드백이 작성된 고민 카테고리 Top2 : 기타(25개), 대인관계(11개)
- 기간동안 생드백이 맞은 횟수 : 총 4,869대 (1인 평균 46.3대)

<br />
<br />



