export function makeCarPlayerTemplate(name: string): string {
    return `<div class="mr-2">
    <div class="car-player" id="player-${name}">${name}</div>
    <div class="d-flex justify-center mt-3">
      <div class="relative spinner-container">
        <span class="material spinner"></span>
      </div>
    </div>
  </div>`;
}

export function makeArrowTemplate(): string {
  return `<div class="forward-icon mt-2">⬇️️</div>`;
}