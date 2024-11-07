import './style.scss';
import { createElement, createSVG, getElement } from '../../utils/dom';
import * as WINNERS from './winners-data';
import renderWinnersList from '../../api/winners/winners';
import { getCar } from '../../api/garage/garage';

const fillWinnersTable = (params: WINNERS.TableParams): void => {
    const thead = createElement({ tag: 'thead', classNames: ['thead'] });
    const headTR = createElement({ tag: 'tr', classNames: ['head-row'] });
    params.headerRow.forEach((item) => {
        const th = createElement({ tag: 'th', classNames: ['head-th'], textContent: item });
        headTR.append(th);
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
    thead.append(headTR);
    params.table.append(thead, tbody);
};

const renderWinnersPage = (): void => {
    const root = getElement('.main');
    const winners = createElement(WINNERS.container);
    const title = createElement(WINNERS.title);
    const currentPage = createElement(WINNERS.page);
    const winnerTable = createElement(WINNERS.table);
    renderWinnersList().then((data) => {
        const tableParams: WINNERS.TableParams = {
            table: winnerTable,
            headerRow: ['Number', 'Car', 'Name', 'Wins', 'Best Time (seconds)'],
            data,
        };
        fillWinnersTable(tableParams);
        title.textContent = `Winners (${data.total})`;
        currentPage.textContent = `Page # ${data.page}`;
    });
    winners.append(title, currentPage, winnerTable);
    root.append(winners);
};

export default renderWinnersPage;
