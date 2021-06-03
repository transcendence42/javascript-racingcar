const startSection = `<section class="d-flex justify-center mt-5">
    <form>
      <fieldset>
        <h1 class="text-center">🏎️ 자동차 경주 게임</h1>
        <p>
          5자 이하의 자동차 이름을 콤마로 구분하여 입력해주세요. <br />
          예시) EAST, WEST, SOUTH, NORTH
        </p>
        <div class="d-flex">
          <input 
            id="car-name-input"
            type="text" 
            class="w-100 mr-2" 
            placeholder="자동차 이름" 
          />
          <button id="car-name-submit" type="button" class="btn btn-cyan">확인</button>
        </div>
      </fieldset>
      <fieldset>
        <p>시도할 횟수를 입력해주세요.</p>
        <div class="d-flex">
          <input 
            id="racing-count-input"
            type="number" 
            class="w-100 mr-2" 
            placeholder="시도 횟수" 
          />
          <button id="car-count-submit" type="button" class="btn btn-cyan">확인</button>
        </div>
      </fieldset>
    </form>
</section>`;
const carNamesSection = (carNames) => {
    return `<section class="d-flex justify-center mt-5">
              <div class="mt-4 d-flex">
                ${carNames}
              </div>
            </section>`;
};
const carNameDiv = (carName) => {
    return `<div class="mr-2">
              <div class="car-player">${carName}</div>
              <div class="d-flex justify-center mt-3">
                <div class="relative spinner-container">
                  <span class="material spinner"></span>
                </div>
              </div>
            </div>`;
};
const winnerSection = (winner) => {
    return `<section class="d-flex justify-center mt-5">
                  <div>
                    <h2>🏆 최종 우승자: ${winner} 🏆</h2>
                    <div class="d-flex justify-center">
                      <button type="button" class="btn btn-cyan">다시 시작하기</button>
                    </div>
                  </div>
              </section>`;
};
export { startSection, carNamesSection, carNameDiv, winnerSection };
