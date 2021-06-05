const { isExportDeclaration } = require("typescript");

const checkStyle = (elem, str) => {
  cy.get(elem).should('have.attr', 'style', str);
}

const inputString = (elem, str) => {
  cy.get(elem).type(str);
}

describe("이름 입력 테스트", () => {
  it("정상적인 이름 입력 시, 반복 횟수 입력창 뜨는지 확인", () => {
    cy.visit('/');
    cy.get('#names input').type('aa, bb, cc, dd, ee');
    cy.get('#names button').click();
    checkStyle('#repetition', 'display: block;');
  })
  it("6개 자동차 입력 시, 경고창 뜨는지 확인", () => {
    cy.reload();
    cy.get('#names input').type('a, b, c, d, e, f');
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('이름을 올바르게 입력해 주세요.');
    })
  })
  it("6자 이상의 이름을 입력했을 때, 경고창 뜨는지 확인", () => {
    cy.reload();
    cy.get('#names input').type('aaaaaa, b, c, d, e, f');
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('이름을 올바르게 입력해 주세요.');
    })
  })
});
