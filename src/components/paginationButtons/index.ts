import getAllCars from '../../api/garage/getAllCars';
import { fillGarageSection } from '../../pages/garage';
import { saveState } from '../../state';
import { createElement, ElementParams, getElement } from '../../utils/dom';
import './style.scss';

const callback = (page: number): void => {
    getAllCars(page).then((result) => {
        const section = getElement('.section-garage');
        saveState();
        fillGarageSection(section, result);
    });
};

const PaginationButtons = (
    wrapper: ElementParams<'div'>,
    leftBTN: ElementParams<'button'>,
    righBTN: ElementParams<'button'>
): HTMLDivElement => {
    const container = createElement(wrapper);
    const leftButton = createElement(leftBTN);
    const righButton = createElement(righBTN);
    righButton.addEventListener('click', () => {
        const nextPage = Number(righButton.getAttribute('data-page'));
        callback(nextPage);
    });
    leftButton.addEventListener('click', () => {
        const prevPage = Number(leftButton.getAttribute('data-page'));
        callback(prevPage);
    });

    container.append(leftButton, righButton);
    return container;
};

export default PaginationButtons;
