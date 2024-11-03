import { createElemet } from '../../utils/dom';
import mainParams from './main-data';
import './style.scss';

const Main = (): HTMLElement => {
    const main = createElemet(mainParams);

    return main;
};

export default Main;
