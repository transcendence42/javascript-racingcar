<p align="middle" >
  <img width="200px;" src="https://user-images.githubusercontent.com/50367798/106415730-2645a280-6493-11eb-876c-ef7172652261.png"/>
</p>
<h2 align="middle">level1 - 자동차 경주 게임</h2>
<p align="middle">자바스크립트로 구현 하는 자동차 경주 게임</p>
<p align="middle">
  <img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square" alt="template version"/>
  <img src="https://img.shields.io/badge/language-html-red.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-css-blue.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-js-yellow.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square"/>
</p>

## 🔥 Projects!

<p align="middle">
  <img width="400" src="https://techcourse-storage.s3.ap-northeast-2.amazonaws.com/7c76e809d82a4a3aa0fd78a86be25427">
</p>

### 🎯 step1

- [ ] 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- [ ] 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- [ ] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- [ ] 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- [ ] 전진하는 조건은 0에서 9 사이에서 random 값을 구한 후 random 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈춘다.
- [ ] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- [ ] 우승자가 여러명일 경우 ,를 이용하여 구분한다.

### 🎯🎯 step2

- [ ] 자동차 경주 게임의 턴이 진행 될 때마다 1초의 텀(progressive 재생)을 두고 진행한다.
  - [ ] 애니메이션 구현을 위해 setInterval, setTimeout, requestAnimationFrame 을 활용한다.
- [ ] 정상적으로 게임의 턴이 다 동작된 후에는 결과를 보여주고, 2초 후에 축하의 alert 메세지를 띄운다.
- [ ] 위 기능들이 정상적으로 동작하는지 Cypress를 이용해 테스트한다.

<br>

## ⚙️ Before Started

#### <img alt="Tip" src="https://img.shields.io/static/v1.svg?label=&message=Tip&style=flat-square&color=673ab8"> 로컬에서 서버 띄워서 손쉽게 static resources 변경 및 확인하는 방법

로컬에서 웹서버를 띄워 html, css, js 등을 실시간으로 손쉽게 테스트해 볼 수 있습니다. 이를 위해서는 우선 npm이 설치되어 있어야 합니다. 구글에 `npm install` 이란 키워드로 각자의 운영체제에 맞게끔 npm을 설치해주세요. 이후 아래의 명령어를 통해 실시간으로 웹페이지를 테스트해볼 수 있습니다.

```
npm install -g live-server
```

실행은 아래의 커맨드로 할 수 있습니다.

```
live-server 폴더명
```

<br>

## 👏 Contributing

만약 미션 수행 중에 개선사항이 보인다면, 언제든 자유롭게 PR을 보내주세요.

<br>

## 🐞 Bug Report

버그를 발견한다면, [Issues](https://github.com/woowacourse/javascript-racingcar/issues) 에 등록 후 @eastjun에게 dm을 보내주세요.

<br>

## 📝 License

This project is [MIT](https://github.com/woowacourse/javascript-racingcar/blob/main/LICENSE) licensed.

## 진행과정

### 환경설정

- [x] prettier
- [x] eslint
- [x] typescript
- [x] cypress
- [x] tsconfig.json
- [x] cypress.json
- [x] package.json

| https://reactjs-kr.firebaseapp.com/docs/thinking-in-react.html 에 기술된 대로 진행

### Component로 분리

- app: 페이지 전체를 표현
  - section: 게임 전 설정 부분
    - form: 게임 관련 설정 부분
      - fieldset: 차 이름 설정 부분
        - h1: 타이틀
        - p: 차 이름 설명
        - div: 차 이름 입력
      - fieldset: 게임 횟수 설정 부분
        - p: 시도 횟수 설명
        - div: 시도 횟수 입력
          - input: 시도 횟수 입력
          - button: 시도 횟수 제출
  - section: 자동차 경주 부분
    - div: 자동차 경주 부분
      - div: 차 1 경주 부분 (총 4개)
        - div: 차 1 이름
        - div: go 표시 ⬇️ (여러개 있을 수 있음)
        - div: wait 표시
          - div
            - span
  - section: 우승자 출력 부분
    - div
      - h2: 우승자 출력
      - div: 다시 시작하기
        - button: 다시 시작하기 버튼

### 정적 버전 만들기

- [ ] app
- [ ] settingSection
- [ ] racingSection
  - [ ] racingCarDiv
- [ ] resultSection

## 테스트

- [ ] 자동차 입력
  - [ ] 5자 이상의 자동차 입력시 경고창 출력 // 123456, EAST, WEST, SOUTH
  - [ ] 콤마를 연속해서 입력시 무시 // EAST,,,WEST,SOUTH,NORTH
  - [ ] 차 이름이 없는 경우 경고창 출력(ex: 공백만 입력) // " " 입력
  - [ ] 공백 무시 여부 // EAST , WEST ,SOUTH,NORTH
  - [ ] 4대 초과시 경고창 출력 // EAST,WEST,SOUTH,NORTH,ABC
- [ ] 시도 횟수 입력
  - [ ] input min 설정 여부
  - [ ] 음수 입력 시 경고창 출력
- [ ] 우승자 출력
  - [ ] 우승자 문서 위에 출력 여부 // should not ""
  - [ ] 우승자가 여러명일 때 ,로 구분 여부
  - [ ] 우승자 alert으로 2초 뒤에 출력 여부
