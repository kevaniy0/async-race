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
