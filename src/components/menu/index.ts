import './style.scss';
import { router } from '../../app';
import { createElement } from '../../utils/dom';
import * as MENU from './menu-data';

const Menu = (): HTMLUListElement => {
    const menu = createElement(MENU.list);

    const garage = createElement(MENU.garage);
    const garageButton = createElement(MENU.garageButton);
    garageButton.addEventListener('click', () => {
        router.navigate('/garage');
    });
    garage.append(garageButton);

    const winners = createElement(MENU.winners);
    const winnersButton = createElement(MENU.winnersButton);
    winnersButton.addEventListener('click', () => {
        router.navigate('/winners');
    });
    winners.append(winnersButton);

    menu.append(garage, winners);
    return menu;
};

export default Menu;
