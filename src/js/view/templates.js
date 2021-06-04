export function makeCarPlayerTemplate(name) {
    return `<div class="mr-2">
    <div class="car-player" id="player-${name}">${name}</div>
    <div class="d-flex justify-center mt-3">
      <div class="relative spinner-container">
        <span class="material spinner"></span>
      </div>
    </div>
  </div>`;
}
export function makeArrowTemplate() {
    return `<div class="forward-icon mt-2">⬇️️</div>`;
}
export function makeChampionText(strs) {
    let result = `🏆 최종 우승자:`;
    strs.forEach(item => {
        result += item + ', ';
    });
    result = result.substr(0, result.length - 2);
    result += ' 🏆';
    return (result);
}
