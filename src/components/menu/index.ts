import './style.scss';
import { router } from '../../app';
import { createElement } from '../../utils/dom';
import Button from '../button';
import * as MENU from './menu-data';

const Menu = (): HTMLUListElement => {
    const menu = createElement(MENU.list);

    const garage = createElement(MENU.garage);
    const garageButton = Button(MENU.garageButton, () => {
        router.navigate('/garage');
    });
    garage.append(garageButton);

    const winners = createElement(MENU.winners);
    const winnersButton = Button(MENU.winnersButton, () => {
        router.navigate('/winners');
    });
    winners.append(winnersButton);

    menu.append(garage, winners);
    return menu;
};

export default Menu;
