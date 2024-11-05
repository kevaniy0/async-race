import { ElementParams } from '../../utils/dom';

export const container: ElementParams<'div'> = {
    tag: 'div',
    classNames: ['winners-container'],
};
export const title: ElementParams<'h1'> = {
    tag: 'h1',
    classNames: ['winners-title', 'title'],
    textContent: 'Winners',
};
