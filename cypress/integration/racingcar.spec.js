const typeAndCheckInput = (location, content, result) => {
  cy.get(location).type(content);
  cy.get(location).should('have.value', result);
};

const typeAndClickCarNameSubmit = (content) => {
  typeAndCheckInput('.w-100[type=text]', content, content);
  cy.get('#car-name-submit').click();
  cy.get('#car-name-submit').should('be.disabled');
  cy.get('.w-100[type=text]').should('be.disabled');
};

const typeAndClickCountSubmit = (count) => {
  typeAndCheckInput('.w-100[type=number]', count, count);
  cy.get('#car-count-submit').click();
  cy.get('#car-count-submit').should('be.disabled');
  cy.get('.w-100[type=number]').should('be.disabled');
};

const checkSpinnerCount = (length) => {
  cy.get('.spinner-container').should('exist');
  cy.get('.mr-2').find('.spinner').should('have.length', length);
};

describe('initial page behavior', () => {
  beforeEach(() => {
    cy.visit('/javascript-racingcar/');
  });
  it('input값 입력 했을때 잘 들어가는지 확인', () => {
    cy.get('.w-100[type=text]').type('holee');
    cy.get('.w-100[type=text]').should('have.value', 'holee');
    cy.get('.w-100[type=number]').type(1);
    cy.get('.w-100[type=number]').should('have.value', 1);
  });
});

describe('racing-game base behavior', () => {
  beforeEach(() => {
    cy.visit('/javascript-racingcar/');
  });
  const basicInput = 'EAST, WEST, SOUTH, NORTH';
  const basicCount = 2;

  it('자동차 이름 입력 했을 때, car name input/button 비활성화', () => {
    typeAndClickCarNameSubmit(basicInput);
  });
  it('자동차 이름 입력 했을 때, 이름에 맞는 자동차/스피너 생성', () => {
    typeAndClickCarNameSubmit(basicInput);
    basicInput.split(', ').map((x, i) => {
      cy.get('.car-player').eq(i).should('have.text', x);
    });
    checkSpinnerCount(basicInput.split(', ').length);
  });
  it('시도 횟수 입력 했을 때, count input/button 비활성화', () => {
    typeAndClickCarNameSubmit(basicInput);
    typeAndClickCountSubmit(basicCount);
  });
  it('시도 횟수 입력 했을 때, 알맞은 ⬇️️ 생성 및 spinner 삭제', () => {
    typeAndClickCarNameSubmit(basicInput);
    typeAndClickCountSubmit(basicCount);
    cy.clock();
    checkSpinnerCount(basicInput.split(', ').length);
    cy.tick(2000);
    cy.get('.forward-icon').should('exist');
    checkSpinnerCount(0);
  });
  it('시도 횟수 입력 했을 때, 결과 화면 출력', () => {
    typeAndClickCarNameSubmit(basicInput);
    typeAndClickCountSubmit(basicCount);
    cy.wait(2000);
    cy.get('section').eq(2).should('exist');
  });
  it('시도 횟수 입력 했을 때, 알맞은 alert 생성', () => {
    typeAndClickCarNameSubmit(basicInput);
    typeAndClickCountSubmit(basicCount);
    cy.wait(2000);
    cy.get('section').eq(2).should('exist');
    cy.wait(1500);
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('🏆 우승 축하합니다 ㅎㅎ 🏆');
    });
  });
  it('다시 시작하기 버튼 불렀을 때, html 초기화 확인', () => {
    typeAndClickCarNameSubmit(basicInput);
    typeAndClickCountSubmit(basicCount);
    cy.wait(3500);
    cy.get('button').eq(2).click();
    cy.get('section').eq(1).should('not.exist');
    cy.get('section').eq(2).should('not.exist');
    cy.get('#car-name-submit').should('not.disabled');
    cy.get('.w-100[type=text]').should('not.disabled');
    cy.get('#car-count-submit').should('not.disabled');
    cy.get('.w-100[type=number]').should('not.disabled');
  });
});

const checkValidInit = () => {
  cy.get('#car-count-submit').should('not.disabled');
  cy.get('.w-100[type=number]').should('not.disabled');
  cy.get('section').eq(1).should('not.exist');
  cy.get('section').eq(2).should('not.exist');
  cy.get('.w-100[type=text]').focus();
};

describe('racing-game exception behavior', () => {
  beforeEach(() => {
    cy.visit('/javascript-racingcar/');
  });
  const basicInput = 'EAST, WEST, SOUTH, NORTH';
  const basicCount = 2;

  it('자동차 이름을 입력하지 않았을 때, 시도할 횟수 버튼 클릭', () => {
    cy.get('#car-name-submit').click();
    cy.get('#car-count-submit').click();
    checkValidInit();
  });
  it('자동차 이름을 입력하지 않았을 때, 시도할 횟수 입력 후 버튼 클릭', () => {
    typeAndCheckInput('.w-100[type=number]', basicCount, basicCount);
    cy.get('#car-name-submit').click();
    cy.get('#car-count-submit').click();
    checkValidInit();
  });
  it('자동차 이름을 입력한 후 확인 버튼을 누르지않았을 때, 시도할 횟수 버튼 클릭', () => {
    typeAndCheckInput('.w-100[type=text]', basicInput, basicInput);
    cy.get('#car-count-submit').click();
    checkValidInit();
  });
  it('자동차 이름을 입력한 후 확인 버튼을 누르지않았을 때, 시도할 횟수 입력 후 버튼 클릭', () => {
    typeAndCheckInput('.w-100[type=text]', basicInput, basicInput);
    typeAndCheckInput('.w-100[type=number]', basicCount, basicCount);
    cy.get('#car-count-submit').click();
    checkValidInit();
  });
});
