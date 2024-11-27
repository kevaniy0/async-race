import './style.scss';
import { createElement, createSVG, getElement } from '../../utils/dom';
import * as WINNERS from './winners-data';
import renderWinnersList from '../../api/winners/winners';
import { getCar } from '../../api/garage/getCar';
import PaginationButtons from '../../components/paginationButtons';
import paginateWinners from './paginateWinners';
import { getState } from '../../state';
import sortTable, { toggleSortIcon } from './sortTable';

const fillWinnersTable = (params: WINNERS.TableParams): void => {
    const thead = createElement({ tag: 'thead', classNames: ['thead'] });
    const headTR = createElement({ tag: 'tr', classNames: ['head-row'] });
    params.headerRow.forEach((item) => {
        const th = createElement({ tag: 'th', classNames: ['head-th'], textContent: item });
        headTR.append(th);
        if (th.textContent === 'Wins') {
            th.style.cursor = 'pointer';
            th.classList.add('sort-item', 'sort-wins');
            th.addEventListener('click', () => {
                sortTable('wins');
                toggleSortIcon(th);
            });
        }
        if (th.textContent === 'Best Time (seconds)') {
            th.style.cursor = 'pointer';
            th.classList.add('sort-item', 'sort-time');
            th.addEventListener('click', () => {
                sortTable('time');
                toggleSortIcon(th);
            });
        }
    });
    const tbody = createElement({ tag: 'tbody', classNames: ['tbody'] });
    params.data.data.forEach((item, index) => {
        const bodyRow = createElement({ tag: 'tr', classNames: ['body-row'] });
        const tdN = createElement({
            tag: 'td',
            classNames: ['td-N'],
            textContent: `${String(index + 1)}`,
        });
        const tdCar = createElement({ tag: 'td', classNames: ['td-car'] });
        const tdName = createElement({ tag: 'td', classNames: ['td-name'] });
        getCar(item.id).then((elem) => {
            tdName.textContent = elem.name;
            const carSVG = createSVG(['table-th-svg'], 'auto', elem.color);
            tdCar.append(carSVG);
        });

        const tdWins = createElement({
            tag: 'td',
            classNames: ['td-wins'],
            textContent: `${String(item.wins)}`,
        });
        const tdTime = createElement({
            tag: 'td',
            classNames: ['td-time'],
            textContent: `${String(item.time)}`,
        });
        bodyRow.append(tdN, tdCar, tdName, tdWins, tdTime);
        tbody.append(bodyRow);
    });
    const prevBTN = getElement('.pagination-button__left') as HTMLButtonElement;
    const nextBTN = getElement('.pagination-button__right') as HTMLButtonElement;
    paginateWinners(prevBTN, nextBTN, params.data);

    thead.append(headTR);
    params.table.append(thead, tbody);
};

const renderWinnersPage = (page?: number): void => {
    const root = getElement('.main');

    while (root.firstElementChild) {
        root.firstChild?.remove();
    }
    const winners = createElement(WINNERS.container);
    const title = createElement(WINNERS.title);
    const currentPage = createElement(WINNERS.page);
    const winnerTable = createElement(WINNERS.table);
    const state = getState();
    const findPage = page || state.winnersPage;

    renderWinnersList(findPage, 10)
        .then((data) => {
            if (data.data.length === 0 && data.page === 1) {
                return renderWinnersList(1, 10);
            }
            if (data.data.length === 0) {
                return renderWinnersList(data.page - 1, 10);
            }
            return data;
        })
        .then((data) => {
            const tableParams: WINNERS.TableParams = {
                table: winnerTable,
                headerRow: ['Number', 'Car', 'Name', 'Wins', 'Best Time (seconds)'],
                data,
            };
            fillWinnersTable(tableParams);
            title.textContent = `Winners (${data.total})`;
            currentPage.textContent = `Page # ${data.page}`;
        });
    const pagination = PaginationButtons(
        WINNERS.paginationWrapper,
        WINNERS.leftButton,
        WINNERS.rightButton,
        'winners'
    );
    winners.append(title, currentPage, winnerTable, pagination);
    root.append(winners);
};

export default renderWinnersPage;
