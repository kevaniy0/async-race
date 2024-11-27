import { WinnerList } from '../../api/winners/winners-data';

type PaginateWinners = {
    data: WinnerList;
    page: number;
    total: number;
};

const paginateWinners = (
    prevBTN: HTMLButtonElement,
    nextBTN: HTMLButtonElement,
    data: PaginateWinners
): void => {
    if (data.page === 1) {
        prevBTN.setAttribute('data-page', 'none');
        prevBTN.setAttribute('disabled', 'true');
    } else {
        prevBTN.setAttribute('data-page', `${data.page - 1}`);
        prevBTN.removeAttribute('disabled');
    }
    if (data.page === Math.ceil(data.total / 10) || data.total === 0) {
        nextBTN.setAttribute('data-page', 'none');
        nextBTN.setAttribute('disabled', 'true');
    } else {
        nextBTN.setAttribute('data-page', `${data.page + 1}`);
        nextBTN.removeAttribute('disabled');
    }
};

export default paginateWinners;
