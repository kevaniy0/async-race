import { ElementParams } from '../../utils/dom';

export const engineWrapper: ElementParams<'div'> = {
    tag: 'div',
    classNames: ['engine-buttons-wrapper'],
};
export const engineStartButton: ElementParams<'button'> = {
    tag: 'button',
    classNames: ['button', 'engine-button', 'engine-button__start'],
};

export const engineStopButton: ElementParams<'button'> = {
    tag: 'button',
    classNames: ['button', 'engine-button', 'engine-button__stop'],
};
