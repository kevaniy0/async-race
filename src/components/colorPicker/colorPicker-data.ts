import { ElementParams } from '../../utils/dom';

export const colorCreate: ElementParams<'input'> = {
    tag: 'input',
    classNames: ['color-picker', 'color-picker__create'],
};

export const colorUpdate: ElementParams<'input'> = {
    tag: 'input',
    classNames: ['color-picker', 'color-picker__update'],
};
