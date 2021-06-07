import { MSG } from '../../src/js/constants.js';

const checkStyle = (elem, str) => {
  cy.get(elem).should('have.attr', 'style', str);
};

const inputString = (elem, str) => {
  cy.get(elem).type(str);
};

describe('이름 입력 테스트', () => {
  it('6개 자동차 입력 시, 경고창 뜨는지 확인', () => {
    cy.visit('/');
    cy.get('#names input').type('a, b, c, d, e, f');
    cy.on('window:alert', txt => {
      expect(txt).to.contains(MSG.NAME_ERROR);
    });
  });
  it('6자 이상의 이름을 입력했을 때, 경고창 뜨는지 확인', () => {
    cy.reload();
    cy.get('#names input').type('aaaaaa, b, c, d, e, f');
    cy.on('window:alert', txt => {
      expect(txt).to.contains(MSG.NAME_ERROR);
    });
  });
  it('정상적인 이름 입력 시, 반복 횟수 입력창 뜨는지 확인', () => {
    cy.reload();
    cy.get('#names input').type('aa, bb, cc, dd, ee');
    cy.get('#names button').click();
    checkStyle('#repetition', 'display: block;');
  });
});

describe('숫자 입력 테스트', () => {
  it('음수 입력했을 때, 경고창 뜨고 입력이 지워졌는지 확인', () => {
    cy.get('#repetition input').type('-1');
    cy.get('#repetition button').click();
    cy.on('window:alert', txt => {
      expect(txt).to.contains(MSG.REPETITION_ERROR);
    });
    cy.get('#repetition input').should('have.value', '');
  });
  it('4를 입력했을 때, result 섹션이 뜨는지 확인', () => {
    cy.get('#repetition input').type('4');
    cy.get('#repetition button').click();
    checkStyle('#result', 'display: block;');
  });
  it('이어서 champion 섹션이 뜨는지 확인', () => {
    checkStyle('#champion', 'display: block;');
  });
  it('경기 종료 메세지가 뜨는지 확인', () => {
    cy.wait(2000);
    cy.on('window:alert', txt => {
      expect(txt).to.contains(MSG.GAMEOVER_MSG);
    });
  });
});

describe('다시 시작하기 테스트', () => {
  it('다시 시작하기 버튼을 눌렀을 때, 자동차 이름 입력칸이 비워졌는지 확인', () => {
    cy.get('#champion button').click();
    cy.get('#names input').should('have.value', '');
  });
  it('result와 champion의 style이 display: none으로 설정됐는지 확인', () => {
    checkStyle("#result", 'display: none;');
    checkStyle("#champion", 'display: none;');
  });
});
