import './style.scss';
import { createElement, getElement } from '../../utils/dom';
import * as WINNERS from './winners-data';

const renderWinnersPage = () => {
    const root = getElement('.main');

    const winners = createElement(WINNERS.container);
    const title = createElement(WINNERS.title);

    winners.append(title);
    root.append(winners);
};

export default renderWinnersPage;
