import { ElementParams } from '../../utils/dom';

export const wrapper: ElementParams<'div'> = {
    tag: 'div',
    classNames: ['modal-wrapper'],
};

export const title: ElementParams<'p'> = {
    tag: 'p',
    classNames: ['modal-winner'],
    textContent: 'Winner: ',
};

export const time: ElementParams<'p'> = {
    tag: 'p',
    classNames: ['modal-time'],
    textContent: 'Time: ',
};

export const confirm: ElementParams<'button'> = {
    tag: 'button',
    classNames: ['button', 'button-primary', 'modal-button'],
    textContent: 'OK',
};
