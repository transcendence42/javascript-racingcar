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
  it('input값 입력했을때 잘 들어가는지 확인', () => {
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
  it('시도 횟수 입력 했을 때, 알맞은 ⬇️️ 생성', () => {
    typeAndClickCarNameSubmit(basicInput);
    typeAndClickCountSubmit(basicCount);
    // cy.get('.car-player')
  });
  // it("시도 횟수 입력 했을 때, 결과 화면 출력", () => {
  //   ;
  // });
  // it("시도 횟수 입력 했을 때, 알맞은 alert 생성", () => {
  //   ;
  // });
  // it("다시 시작하기 버튼 불렀을 때, html 초기화 확인", () => {
  //   ;
  // });
});
