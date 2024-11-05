import './style.scss';
import { router } from '../../app';
import { createElemet } from '../../utils/dom';
import * as MENU from './menu-data';

const Menu = (): HTMLUListElement => {
    const menu = createElemet(MENU.list);

    const garage = createElemet(MENU.garage);
    const garageButton = createElemet(MENU.garageButton);
    garageButton.addEventListener('click', () => {
        router.navigate('/garage');
    });
    garage.append(garageButton);

    const winners = createElemet(MENU.winners);
    const winnersButton = createElemet(MENU.winnersButton);
    winnersButton.addEventListener('click', () => {
        router.navigate('/winners');
    });
    winners.append(winnersButton);

    menu.append(garage, winners);
    return menu;
};

export default Menu;
