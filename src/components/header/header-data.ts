import { ElementParams } from '../../utils/dom';

export const headerParams: ElementParams<'header'> = { tag: 'header', classNames: ['header'] };
export const titleParams: ElementParams<'h1'> = {
    tag: 'h1',
    classNames: ['header-title', 'title'],
    textContent: 'Async Race',
};
