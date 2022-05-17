## final project

## 👊 집을 모아놓다.zip - FrontEnd

<p align="center">
<img width="600" alt="[dot.zip]" src="https://user-images.githubusercontent.com/80023108/150964817-baf6912d-46f3-4f66-a4c2-b596945846cc.png">
	
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

## ⚙️ Front-End 기술 스택

<p align="center">
<br>
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
<br>
<img src="https://img.shields.io/badge/StyledComponents%20-DB7093?style=for-the-badge&logo=StyledComponents&logoColor=black">
<img src="https://img.shields.io/badge/Axios%20-blueviolet?style=for-the-badge&logo=Axios&logoColor=black">
<img src="https://img.shields.io/badge/CloudFront-D05C4B?style=for-the-badge&logo=CloudFront&logoColor=white">
<img src="https://img.shields.io/badge/Route53-E68B49?style=for-the-badge&logo=Route53s&logoColor=white">
<img src="https://img.shields.io/badge/S3-569A31?style=for-the-badge&logo=S3&logoColor=white">
<br>
<br>
<br>
	
## 👥 멤버

- 팀장
  - 공성훈 🔰
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

![image](https://user-images.githubusercontent.com/89959952/168705957-9f71551b-fac7-4f24-a3a7-edfbb6daa5ad.png)

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

### 서비스가 느리다는 대다수의 의견

> 문제점 : 초기 로딩 속도가 현저히 떨어지는 현상
>
> 💡 To-Be_1  
>
> ![image](https://user-images.githubusercontent.com/89959952/168706016-a2254295-a3d9-4c72-b3e7-b8f9e737b040.png)
> 
>❗️ 해결 
> 1. lighthouse 성능분석
>
> - 서비스가 느린것같다 라는 피드백에 lighthouse로 성능분석을 해보았더니 70점의 점수를 받았습니다. netlify로 서버를 배포하던 것을 aws s3로 바꾸고, cloudfront, route53으로 연결시켜주고, 용량이 큰 이미지들을 avif확장자로 변환하여 10MB이상의 이미지들을 약300KB로 압축하였습니다.이로서 86점의 점수를 받아 사이트 성능을 개선시킬 수 있었습니다.
>
>
> 💡 To-Be_2
```javaScript
# Workflow 이름
name: Actions deploy

# Event 감지
on: 
  push:
    branches:
      - master
	
# Job 설정/실행
jobs: 
  build:
    runs-on: ubuntu-latest
    steps: #순서
      - name: Checkout source code. # Repo checkout
        uses: actions/checkout@v2

      - name: Check Node v # Node v 확인
        run: node -v

      - name: Install Dependencies # 의존 파일 설치
        run: yarn install --frozen-lockfile

      - name: Build # React Build
        run: yarn build
      #############################################################################################################
	
       # Upload build file to S3
      - name: Deploy 
        env: # run이 참조(매개변수)
          AWS_ACCESS_KEY_ID: ${{ secrets.SECRET_KEY }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.SECRET_ACCESS_KEY }}
        run: |
          aws s3 cp --recursive --region ap-northeast-2 build s3://dotzip
	
      #############################################################################################################
      - name: Invalidate Cache CloudFront
        uses: chetan/invalidate-cloudfront-action@master # AWS CloudFront 작업 무효화
        env:
          AWS_ACCESS_KEY_ID: ${{secrets.SECRET_KEY}}
          AWS_SECRET_ACCESS_KEY: ${{secrets.SECRET_ACCESS_KEY}}
          AWS_REGION: ${{secrets.AWS_REGION}}
          DISTRIBUTION: ${{secrets.DEV_DISTRIBUTION_ID}}
          PATHS: "/*"
        continue-on-error: true
	
# 매소드 = 객체의 함수, 객체 내부에 포함되어 있는 함수
# 내장 메소드 = 브라우저 윈도우 객체 내부에 이미 지정되어 있는 함수
# run : 메소드(내장함수개념) / uses : 함수 
```	
>	
>❗️ 해결 
> 2. 배포 환경 변경과 ci/cd
>
> - netlify에서 aws로 바꾸고 github actions로 ci/cd를 하였는데, origin server인 s3에는 배포가 잘 되는것을 확인하였는데 서비스에는 반영이 안되는 문제가 있었습니다.원인파악을 위해 aws문서를 찾아보니 cloudfront가 24시간마다 저장된 캐시를 삭제하고 origin server에서 데이터를 받아와 캐싱을 해주는 특성이 있다는걸 알게됐습니다. 24시간이 지날때까지 기다릴 수는 없기에 해결방법을 찾아보았고, 파일이 만료되기 전 파일을 삭제할 수 있는 파일 무효화가 있다는걸 알게됐습니다. 그런데 이렇게 직접 매번 파일 무효화를 시켜주면 ci/cd 중에서 cd를 제대로 하지 못한 것이라 생각했습니다. 따라서 ci/cd를 하는 작업 마지막에 파일 무효화를 시켜주는 작업을 추가하여 해결해주었고, 저희가 원하는 ci/cd를 구현하였습니다.

<br/>
	



<br />
	
## 👣 Google 애널리틱스 누적 데이터 분석

- 사용자 수 : 986명
- 인구통계 세부정보(국가) : 
	-  South Korea : 926 명
	-  United States : 32 명
	-  Brazil : 21 명
	-  Japan : 7 명
	-  외 4개국
- 인구통계 세부정보(지역) : 
	-  Seoul : 551 명
	-  Gyeonggi-do : 210 명
	-  Incheon : 37 명
	-  Daegu : 36 명
	-  Busan : 28 명
	-  외 5지역
	
<br/>
	
### ⭐ 분석결과
1. 청약에 대한 관심은 서울과 경기권에 쏠려있음
2. 부동산 시장 상승세에 의한 수요자들이 '묻지마 청약'을 할 가능성이 큼
3. 올해 새 정부의 츨범과 동시에 주택 물량 공급에 의한 수도권의 청약시장의 양극화는 심화될 가능성이 있음
4. 또한, 청약에 대한 관심이 서울과 경기권에 쏠려있어 수도권과 지방의 청약시장의 양극화는 심화될 가능성이 있음
	
<br />



