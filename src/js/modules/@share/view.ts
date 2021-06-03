const carNamesSection = (carNames: string): string => {
  return `<section class="d-flex justify-center mt-5">
              <div class="mt-4 d-flex">
                ${carNames}
              </div>
            </section>`;
};

const carNameDiv = (carName: string): string => {
  return `<div class="mr-2">
              <div class="car-player">${carName}</div>
              <div class="d-flex justify-center mt-3">
                <div class="relative spinner-container">
                  <span class="material spinner"></span>
                </div>
              </div>
            </div>`;
};

const winnerSection = (winner: string): string => {
  return `<section class="d-flex justify-center mt-5">
                  <div>
                    <h2>🏆 최종 우승자: ${winner} 🏆</h2>
                    <div class="d-flex justify-center">
                      <button type="button" class="btn btn-cyan">다시 시작하기</button>
                    </div>
                  </div>
              </section>`;
};

export { carNamesSection, carNameDiv, winnerSection };
