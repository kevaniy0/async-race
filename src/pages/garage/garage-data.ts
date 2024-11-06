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
export const carSection: ElementParams<'section'> = {
    tag: 'section',
    classNames: ['section-garage'],
};
export const carContainer: ElementParams<'div'> = {
    tag: 'div',
    classNames: ['car-container'],
};

export const carName: ElementParams<'p'> = {
    tag: 'p',
    classNames: ['car-name'],
};
export const carSvgClasses = ['car-image'];
export const finishSvgClasses = ['finish-image'];
