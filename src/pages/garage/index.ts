import './style.scss';
import getAllCars from '../../api/garage/getAllCars';
import { createElement, createSVG, getElement } from '../../utils/dom';
import * as GARAGE from './garage-data';
import { CarsData } from '../../api/garage/garage-data';
import createForm from './create-form-field';
import createRaceButtons from './race-button-field';
import createActionButtons from './carActionsButtons';

export const fillGarageSection = (section: HTMLElement, data: CarsData) => {
    while (section.firstElementChild) {
        section.firstElementChild.remove();
    }
    data.collection.forEach((car) => {
        const container = createElement(GARAGE.carContainer);
        const carName = createElement(GARAGE.carName);
        const actionButton = createActionButtons(section, car.id);
        const carImage = createSVG(GARAGE.carSvgClasses, 'auto', car.color);
        const finishImage = createSVG(GARAGE.finishSvgClasses, 'finish', 'white');

        carName.textContent = car.name;
        container.append(carName, actionButton, carImage, finishImage);
        section.append(container);
    });
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
    getAllCars().then((result) => {
        page.textContent = `Page # ${result.page}`;
        title.textContent = `Garage (${result.total})`;
        fillGarageSection(carSection, result);
    });

    garage.append(form, raceField, title, page, carSection);
    root.append(garage);
};

export default renderGaragePage;
