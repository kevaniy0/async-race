import './style.scss';
import { createElement, getElement } from '../../utils/dom';
import * as MODAL from './winnerModal-data';

const closeModal = (): void => {
    const modal = getElement('.modal-wrapper');
    modal.remove();
    document.body.removeEventListener('click', closeModal);
};

const WinnerModal = (name: string, time: number): HTMLDivElement => {
    const wrapper = createElement(MODAL.wrapper);
    const winner = createElement(MODAL.title);
    winner.innerHTML = `${winner.textContent} <span class="modal-span">${String(name)}</span>`;
    const winnerTime = createElement(MODAL.time);
    winnerTime.innerHTML = `${winnerTime.textContent} <span class="modal-span">${String(time)} s</span>`;
    const confirmButton = createElement(MODAL.confirm);
    wrapper.append(winner, winnerTime, confirmButton);
    document.body.addEventListener('click', closeModal);

    return wrapper;
};

export default WinnerModal;
