const setEventListener = (): void => {
  document.getElementById('car-names-submit')!.addEventListener('click', () => getCarNames());
  document.getElementById('racing-count-submit')!.addEventListener('click', () => getCount());
};

export { setEventListener };
