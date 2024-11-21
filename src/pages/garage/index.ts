import './style.scss';
import getAllCars from '../../api/garage/getAllCars';
import { createElement, createSVG, getElement } from '../../utils/dom';
import * as GARAGE from './garage-data';
import { CarsData } from '../../api/garage/garage-data';
import createForm from './create-form-field';
import createRaceButtons from './race-button-field';
import createActionButtons from './carActionsButtons';
import PaginationButtons from '../../components/paginationButtons';
import paginateCars from './paginateCars';
import updatePageNumber from './update-page-number';
import updateTotalCars from './update-total-cars';
import { getState, updateInputsState } from '../../state';
import EngineButtons from '../../components/engineButtons';

export const fillGarageSection = (section: HTMLElement, data: CarsData) => {
    while (section.firstElementChild) {
        section.firstElementChild.remove();
    }
    data.collection.forEach((car) => {
        const container = createElement(GARAGE.carContainer);
        const carName = createElement(GARAGE.carName);
        const actionButton = createActionButtons(section, car.id);
        const carImage = createSVG(GARAGE.carSvgClasses, 'auto', car.color);
        carImage.id = `car-${car.id}`;
        const finishImage = createSVG(GARAGE.finishSvgClasses, 'finish', 'white');
        const engineButtons = EngineButtons(car.id);
        updateInputsState();

        carName.textContent = car.name;
        container.append(carName, actionButton, carImage, finishImage, engineButtons);
        section.append(container);
    });
    updatePageNumber(data.page);
    updateTotalCars(data.total);
    const prevBTN = getElement('.pagination-button__left') as HTMLButtonElement;
    const nextBTN = getElement('.pagination-button__right') as HTMLButtonElement;
    paginateCars(prevBTN, nextBTN, data);
};

const renderGaragePage = (): void => {
    const root = getElement('.main');

    while (root.firstElementChild) {
        root.firstElementChild.remove();
    }

    const garage = createElement(GARAGE.container);
    const title = createElement(GARAGE.title);
    const page = createElement(GARAGE.page);
    const carSection = createElement(GARAGE.carSection);
    const form = createForm(carSection);
    const raceField = createRaceButtons();
    const state = getState();

    getAllCars(state.garagePage).then((result) => {
        page.textContent = `Page # ${result.page}`;
        title.textContent = `Garage (${result.total})`;
        fillGarageSection(carSection, result);
    });
    const paginationField = PaginationButtons(
        GARAGE.paginationWrapper,
        GARAGE.leftButton,
        GARAGE.rightButton
    );

    garage.append(form, raceField, title, page, carSection, paginationField);
    root.append(garage);
};

export default renderGaragePage;
