const inputSection = (): string => {
  return `
  <section id="input-section" class="d-flex justify-center mt-5">
    <form>
      <fieldset>
        <h1 class="text-center">🏎️ 자동차 경주 게임</h1>
        <p>
          5자 이하의 자동차 이름을 콤마로 구분하여 입력해주세요. <br />
          예시) EAST, WEST, SOUTH, NORTH
        </p>
        <div class="d-flex">
          <input id="car-names-input" type="text" class="w-100 mr-2" placeholder="자동차 이름" />
          <button id="car-names-submit" type="button" class="btn btn-cyan">확인</button>
        </div>
      </fieldset>
      <fieldset>
        <p>시도할 횟수를 입력해주세요.</p>
        <div class="d-flex">
          <input id="racing-count-input" type="number" min="0" class="w-100 mr-2" placeholder="시도 횟수" />
          <button id="racing-count-submit" type="button" class="btn btn-cyan">확인</button>
        </div>
      </fieldset>
    </form>
  </section>
  `;
}

export { inputSection };
