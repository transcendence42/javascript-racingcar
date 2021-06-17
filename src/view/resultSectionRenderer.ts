import { $ } from '../utils.js';

const resultSection = (winners: string): string => {
  return `
  <section id="result-section" class="d-flex justify-center mt-5">
    <div>
      <h2>🏆 최종 우승자: ${winners} 🏆</h2>
      <div class="d-flex justify-center">
        <button id="restart-button" type="button" class="btn btn-cyan" disabled>다시 시작하기</button>
      </div>
    </div>
  </section>
  `;
};

const renderResultSection = (winners: string): void => {
  ($('#app') as HTMLDivElement).insertAdjacentHTML('beforeend', resultSection(winners));
};

export { renderResultSection };
