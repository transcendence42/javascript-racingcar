const DELAY = {
  // millisecond(s)
  GAME_TURN: 1000,
  GAME_END: 2000,
};

const RULE = {
  // random(0~9) 값이 4 이상일 경우 전진, 3 이하의 값이면 전진하지 않음
  MIN_SCORE: 0,
  MAX_SCORE: 9,
  THRESHOULD_SCORE: 4,

  // 자동차 이름은 5자 이하만 가능
  MAX_CARNAME_LENGTH: 5,

  // 시도 횟수는 원활한 게임을 위해 자체적으로 제한
  MIN_TRY_COUNT: 1,
  MAX_TRY_COUNT: 50,
};

const SELECTOR = {
  APP_DIV: '#app',

  // input-section
  INPUT_SECTION: '#input-section',
  CARNAME_INPUT: '#car-names-input',
  CARNAME_SUBMIT_BUTTON: '#car-names-submit',
  TRYCOUNT_INPUT: '#racing-count-input',
  TRYCOUNT_SUBMIT_BUTTON: '#racing-count-submit',

  // progress-section
  PROGRESS_SECTION: '#progress-section',
  CAR_RACE_TRACK_DIVS: '#progress-section .mr-2',
  CARNAMES_DIV: '#progress-section .mt-4',
  CARNAME_DIVS: '#progress-section .car-player',
  SPINNER_DIVS: '#progress-section .mt-3',

  // result-section
  RESULT_SECTION: '#result-section',
  RESTART_SUBMIT_BUTTON: '#restart-button',
};

const ALERT = {
  // for check valid car name
  CARNAME_NOTHING: '자동차 이름을 입력해주세요',
  CARNAME_ALONE: '자동차 이름을 2개 이상 입력해주세요',
  CARNAME_EMPTY: '비어 있는 자동차 이름이 있습니다',
  CARNAME_DOUBLE: '중복된 자동차 이름이 있습니다',
  CARNAME_LENGTH: '자동차 이름 글자수가 초과되었습니다 (5자 이내)',

  // for check valid try count
  TRYCOUNT_NOTHING: '시도 횟수를 입력해주세요',
  TRYCOUNT_UINT: '시도 횟수는 양의 정수를 입력해주세요 (50 이하)',
  TRYCOUNT_TOO_BIG: '시도 횟수가 너무 많습니다 (50 이하)',

  // etc.
  CONGRATULATION: '님 우승을 축하합니다 👏',
};

export { DELAY, RULE, SELECTOR, ALERT }