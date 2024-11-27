import getAllCars from '../../api/garage/getAllCars';
import { fillGarageSection } from '../../pages/garage';
import renderWinnersPage from '../../pages/winners';
import { saveState } from '../../state';
import { createElement, ElementParams, getElement } from '../../utils/dom';
import './style.scss';

const callback = (page: number, view: 'garage' | 'winners'): void => {
    if (view === 'garage') {
        const raceButton = getElement('.button__race') as HTMLButtonElement;
        if (raceButton.disabled) {
            raceButton.disabled = false;
        }
        getAllCars(page).then((result) => {
            const section = getElement('.section-garage');
            fillGarageSection(section, result);
            saveState('garage');
        });
    } else {
        renderWinnersPage(page);
    }
};

const PaginationButtons = (
    wrapper: ElementParams<'div'>,
    leftBTN: ElementParams<'button'>,
    righBTN: ElementParams<'button'>,
    view: 'garage' | 'winners'
): HTMLDivElement => {
    const container = createElement(wrapper);
    const leftButton = createElement(leftBTN);
    const righButton = createElement(righBTN);
    righButton.addEventListener('click', () => {
        const nextPage = Number(righButton.getAttribute('data-page'));
        callback(nextPage, view);
    });
    leftButton.addEventListener('click', () => {
        const prevPage = Number(leftButton.getAttribute('data-page'));
        callback(prevPage, view);
    });

    container.append(leftButton, righButton);
    return container;
};

export default PaginationButtons;
