import { CarsData } from '../../api/garage/garage-data';

const paginateCars = (
    prevBTN: HTMLButtonElement,
    nextBTN: HTMLButtonElement,
    data: CarsData
): void => {
    if (data.page === 1) {
        prevBTN.setAttribute('data-page', 'none');
        prevBTN.setAttribute('disabled', 'true');
    } else {
        prevBTN.setAttribute('data-page', `${data.page - 1}`);
        prevBTN.removeAttribute('disabled');
    }
    if (data.page === Math.ceil(data.total / 7) || data.total === 0) {
        nextBTN.setAttribute('data-page', 'none');
        nextBTN.setAttribute('disabled', 'true');
    } else {
        nextBTN.setAttribute('data-page', `${data.page + 1}`);
        nextBTN.removeAttribute('disabled');
    }
};

export default paginateCars;
