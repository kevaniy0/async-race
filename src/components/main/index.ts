import { createElement, getElement } from '../../utils/dom';
import mainParams from './main-data';
import './style.scss';

const Main = (): HTMLElement => {
    const main = createElement(mainParams);

    return main;
};

export const clearMain = (): void => {
    const root = getElement('.main');
    while (root.firstElementChild) {
        root.firstElementChild.remove();
    }
};

export default Main;
