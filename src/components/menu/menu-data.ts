import { ElementParams } from '../../utils/dom';

export const list: ElementParams<'ul'> = { tag: 'ul', classNames: ['list', 'menu-list'] };
export const garage: ElementParams<'li'> = { tag: 'li', classNames: ['menu-list__item'] };
export const winners: ElementParams<'li'> = { tag: 'li', classNames: ['menu-list__item'] };
export const winnersButton: ElementParams<'button'> = {
    tag: 'button',
    classNames: ['menu-list__button', 'button-primary', 'button-winners'],
    textContent: 'Winners',
};
export const garageButton: ElementParams<'button'> = {
    tag: 'button',
    classNames: ['menu-list__button', 'button-primary', 'button-garage'],
    textContent: 'Garage',
};
