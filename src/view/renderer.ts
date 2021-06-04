import { inputSection, progressSection, resultSection } from './templates/index.js';

const renderInputSection = (): void => {
  document.getElementById('app')!.innerHTML = inputSection();
};

const renderProgressSection = (): void => {
  document.getElementById('app')!.insertAdjacentHTML(`beforeend`, progressSection());
};

const renderCarNameDiv = (name: string): void => {};

const renderArrowDiv = (): void => {};

const renderSpinnerDiv = (): void => {};

const renderResultSection = (winners: string): void => {
  document.getElementById('app')!.insertAdjacentHTML(`beforeend`, resultSection(winners));
};

export { renderInputSection, renderProgressSection, renderResultSection };
