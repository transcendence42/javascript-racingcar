const progressSection = () => {
    return `
  <section id="progress-section" class="d-flex justify-center mt-5">
    <div class="mt-4 d-flex">
    </div>
  </section>
  `;
};
const carNameDiv = (carName) => {
    return `
  <div class="mr-2">
    <div class="car-player">${carName}</div>
  </div>
  `;
};
const spinnerDiv = () => {
    return `
  <div class="d-flex justify-center mt-3">
    <div class="relative spinner-container">
      <span class="material spinner"></span>
    </div>
  </div>
  `;
};
const arrowDiv = () => {
    return `
  <div class="forward-icon mt-2">⬇️️</div>
  `;
};
export { progressSection, carNameDiv, spinnerDiv, arrowDiv };
