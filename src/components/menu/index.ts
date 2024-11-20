import './style.scss';
import { router } from '../../app';
import { createElement, getElement } from '../../utils/dom';
import Button from '../button';
import * as MENU from './menu-data';
import { saveState } from '../../state';

const Menu = (): HTMLUListElement => {
    const menu = createElement(MENU.list);

    const garage = createElement(MENU.garage);
    const garageButton = Button(MENU.garageButton, () => {
        const winnerBTN = getElement('.button-winners') as HTMLButtonElement;
        winnerBTN.removeAttribute('disabled');
        garageButton.disabled = true;
        router.navigate('/garage');
    });
    garageButton.disabled = true;
    garage.append(garageButton);

    const winners = createElement(MENU.winners);
    const winnersButton = Button(MENU.winnersButton, () => {
        winnersButton.disabled = true;
        garageButton.disabled = false;
        saveState();
        router.navigate('/winners');
    });
    winners.append(winnersButton);

    menu.append(garage, winners);
    return menu;
};

export default Menu;
