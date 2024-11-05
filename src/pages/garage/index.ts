import { createElemet, getElement } from '../../utils/dom';
import * as GARAGE from './garage-data';

const renderGaragePage = (): void => {
    const root = getElement('.main');

    const garage = createElemet(GARAGE.container);
    const title = createElemet(GARAGE.title);
    const page = createElemet(GARAGE.page);

    garage.append(title, page);
    root.append(garage);
};

export default renderGaragePage;
