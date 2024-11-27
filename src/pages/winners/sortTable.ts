import { getElement } from '../../utils/dom';

let sortDirection = true;
const sortTable = (sorted: 'wins' | 'time') => {
    const table = getElement('.winners-list') as HTMLTableElement;
    const rows = Array.from(table.rows).slice(1);
    const columnIndex = sorted === 'wins' ? 3 : 4;
    rows.sort((rowA, rowB) => {
        const cellA = Number(rowA.cells[columnIndex].innerText);
        const cellB = Number(rowB.cells[columnIndex].innerText);

        const compare = cellA - cellB;

        return sortDirection ? compare : -compare;
    });
    rows.forEach((row) => {
        table.tBodies[0].appendChild(row);
    });
    sortDirection = !sortDirection;
};

export const toggleSortIcon = (item: HTMLElement) => {
    const wins = getElement('.sort-wins');
    const time = getElement('.sort-time');

    if (item.classList.contains('sort-down')) {
        wins.classList.remove('sort-down');
        time.classList.remove('sort-down');
        item.classList.add('sort-up');
        item.classList.remove('sort-down');
    } else if (item.classList.contains('sort-up')) {
        wins.classList.remove('sort-up');
        time.classList.remove('sort-up');
        item.classList.add('sort-down');
        item.classList.remove('sort-up');
    } else {
        wins.classList.remove('sort-up');
        time.classList.remove('sort-up');
        wins.classList.remove('sort-down');
        time.classList.remove('sort-down');
        item.classList.add('sort-down');
    }
};
export default sortTable;
