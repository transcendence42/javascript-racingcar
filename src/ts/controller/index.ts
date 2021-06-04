import { renderRepetitionInput, renderScore } from '../view/index.js'

export function initController() {
    const btns = document.querySelectorAll('button');
    btns[0].addEventListener('click', renderRepetitionInput);
    btns[1].addEventListener('click', renderScore);
    // btns[2].addEventListener('click', renderChampion);
}