import { createElemet, getElement } from '../../utils/dom';
import * as WINNERS from './winners-data';

const renderWinnersPage = () => {
    const root = getElement('.main');

    const winners = createElemet(WINNERS.container);
    const title = createElemet(WINNERS.title);

    winners.append(title);
    root.append(winners);
};

export default renderWinnersPage;
