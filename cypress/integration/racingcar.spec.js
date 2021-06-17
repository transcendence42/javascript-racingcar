import { ALERT, DELAY } from '../../dist/constants.js';

let carNamesSample = 'jwon, yeji, holee, yshin';
let tryCountSample = 3;

const carNameInputAndSubmit = (carNames) => {
  if (carNames) {
    cy.get('#car-names-input').type(carNames);
  }
  cy.get('#car-names-submit').click();
};

const tryCountInputAndSubmit = (tryCount) => {
  if (tryCount) {
    cy.get('#racing-count-input').type(tryCount);
  }
  cy.get('#racing-count-submit').click();
};

const catchAlertMessage = (alertMessage) => {
  cy.on('window:alert', txt => {
    expect(txt).to.contains(alertMessage);
  });
};

describe('0. 초기화면 로딩 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500');
  });

  it('자동차 경주 게임을 실행하면, 인풋 섹션이 보이고 자동차 입력창이 활성화된다.=', () => {
    cy.get('#input-section').should('be.visible');
    cy.get('#car-names-input').should('not.be.disabled');
    cy.get('#car-names-submit').should('not.be.disabled');
  });
});

describe('1. 자동차 이름 입력 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500');
  });

  it('자동차 이름을 입력하지 않고 확인 버튼을 클릭하면, 경고창을 띄운다', () => {
    carNameInputAndSubmit('');
    catchAlertMessage(ALERT.CARNAME_NOTHING);
  });

  it('자동차 이름을 1개만 입력하고 확인 버튼을 클릭하면, 경고창을 띄운다', () => {
    carNameInputAndSubmit('jwon');
    catchAlertMessage(ALERT.CARNAME_ALONE);
  });

  it('비어있는 자동차 이름을 입력하고 확인 버튼을 클릭하면, 경고창을 띄운다', () => {
    carNameInputAndSubmit('jwon, , holee');
    catchAlertMessage(ALERT.CARNAME_EMPTY);
  });

  it('중복된 자동차 이름을 입력하고 확인 버튼을 클릭하면, 경고창을 띄운다', () => {
    carNameInputAndSubmit('jwon, jwon, yechoi, holee, yshin');
    catchAlertMessage(ALERT.CARNAME_DOUBLE);
  });

  it('5글자 넘는 자동차 이름을 입력하고 확인 버튼을 클릭하면, 경고창을 띄운다', () => {
    carNameInputAndSubmit('jwon, yechoi');
    catchAlertMessage(ALERT.CARNAME_LENGTH);
  });

  it('자동차 이름을 정상적으로 입력하고 확인 버튼을 클릭하면, 자동차 이름 입력칸과 클릭 버튼을 비활성화 하고 시도 횟수 입력칸과 시도 횟수 버튼을 활성화한다', () => {
    carNameInputAndSubmit(carNamesSample);
    cy.get('#car-names-input').should('be.disabled');
    cy.get('#car-names-submit').should('be.disabled');
    cy.get('#racing-count-input').should('not.be.disabled');
    cy.get('#racing-count-submit').should('not.be.disabled');
  });

  it('자동차 이름을 정상적으로 입력하고 확인 버튼을 클릭하면, 진행상황 섹션이 로딩된다. ', () => {
    carNameInputAndSubmit(carNamesSample);
    tryCountInputAndSubmit(tryCountSample);
    cy.get('#progress-section').should('be.visible');
  });
});

describe('2. 시도 횟수 입력 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500');
  });

  it('횟수를 입력하지 않고 확인 버튼을 클릭하면, 경고창을 띄운다', () => {
    carNameInputAndSubmit(carNamesSample);
    tryCountInputAndSubmit();
    catchAlertMessage(ALERT.TRYCOUNT_NOTHING);
  });

  it('음수를 입력하고 확인 버튼을 클릭하면, 경고창을 띄운다', () => {
    carNameInputAndSubmit(carNamesSample);
    tryCountInputAndSubmit(-5);
    catchAlertMessage(ALERT.TRYCOUNT_UINT);
  });

  it('50 이상을 입력하고 확인 버튼을 클릭하면, 경고창을 띄운다', () => {
    carNameInputAndSubmit(carNamesSample);
    tryCountInputAndSubmit(51);
    catchAlertMessage(ALERT.TRYCOUNT_TOO_BIG);
  });
});

describe('3. 진행 상황 출력 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500');
  });

  it('자동차 이름과 시도 횟수를 정상적으로 입력하고 확인 버튼을 클릭하면, 게임 진행 후 결과 섹션이 로딩된다', () => {
    carNameInputAndSubmit(carNamesSample);
    tryCountInputAndSubmit(tryCountSample);
  });

  it('게임이 끝나면, 결과를 출력하고 축하 메세지를 띄운다', () => {
    carNameInputAndSubmit(carNamesSample);
    tryCountInputAndSubmit(tryCountSample);
    cy.wait(2000);
    catchAlertMessage(ALERT.CONGRATULATION);
  });
});

describe('4. 게임 재시작 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500');
  });

  it('다시 시작하기 버튼을 클릭하면, 진행 섹션과 결과 섹션이 사라지고, 자동차 이름 입력칸이 빈 상태로 게임 시작 대기상태가 된다', () => {
    carNameInputAndSubmit(carNamesSample);
    tryCountInputAndSubmit(tryCountSample);
    cy.wait(tryCountSample * DELAY.GAME_TURN + DELAY.GAME_END);
    cy.get('#restart-button').click();
    cy.get('#progress-section').should('not.exist');
    cy.get('#result-section').should('not.exist');
    cy.get('#car-names-input').should('have.value', '');
  });
});
