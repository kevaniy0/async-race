import { WinnerList } from '../../api/winners/winners-data';
import { ElementParams } from '../../utils/dom';

export type TableParams = {
    table: HTMLTableElement;
    headerRow: string[];
    data: {
        data: WinnerList;
        page: number;
        total: number;
    };
};

export const container: ElementParams<'div'> = {
    tag: 'div',
    classNames: ['winners-container'],
};
export const title: ElementParams<'h1'> = {
    tag: 'h1',
    classNames: ['winners-title', 'title'],
    textContent: 'Winners',
};
export const page: ElementParams<'h2'> = {
    tag: 'h2',
    classNames: ['current-page', 'title'],
    textContent: 'Page',
};

export const table: ElementParams<'table'> = {
    tag: 'table',
    classNames: ['winners-list'],
};

export const paginationWrapper: ElementParams<'div'> = {
    tag: 'div',
    classNames: ['pagination-field', 'pagination-field__garage'],
};
export const leftButton: ElementParams<'button'> = {
    tag: 'button',
    classNames: ['pagination-button', 'pagination-button__left', 'button', 'button-primary'],
    textContent: 'PREV',
};

export const rightButton: ElementParams<'button'> = {
    tag: 'button',
    classNames: ['pagination-button', 'pagination-button__right', 'button', 'button-primary'],
    textContent: 'NEXT',
};
