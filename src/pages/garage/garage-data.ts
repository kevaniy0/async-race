import { ElementParams } from '../../utils/dom';

export const container: ElementParams<'div'> = {
    tag: 'div',
    classNames: ['garage-container'],
};
export const title: ElementParams<'h1'> = {
    tag: 'h1',
    classNames: ['garage-title', 'title'],
    textContent: 'Garage',
};
export const page: ElementParams<'h2'> = {
    tag: 'h2',
    classNames: ['current-page', 'title'],
    textContent: 'Page',
};
