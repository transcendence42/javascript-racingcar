const progressSection = (): string => {
  return `
  <section class="d-flex justify-center mt-5">
    <div class="mt-4 d-flex">
    </div>
  </section>
  `;
}

const carNameDiv = (name: string): string => {
  return `
  <div class="mr-2">
    <div class="car-player">${name}</div>
  </div>
  `
}

const arrowDiv = (): string => {
  return `
  <div class="forward-icon mt-2">⬇️️</div>
  `
}

const spinnerDiv = (): string => {
  return `
  <div class="relative spinner-container">
    <span class="material spinner"></span>
  </div>
  `
}

export { progressSection, carNameDiv, arrowDiv, spinnerDiv };
