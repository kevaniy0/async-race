import './style.scss';
import getGarageCars from '../../api/garage/garage';
import { createElement, createSVG, getElement } from '../../utils/dom';
import * as GARAGE from './garage-data';
import { CarsData } from '../../api/garage/garage-data';

const fillGarageSection = (section: HTMLElement, data: CarsData) => {
    data.collection.forEach((car) => {
        const container = createElement(GARAGE.carContainer);
        const carName = createElement(GARAGE.carName);
        const carImage = createSVG(GARAGE.carSvgClasses, 'auto', car.color);
        const finishImage = createSVG(GARAGE.finishSvgClasses, 'finish', 'white');

        carName.textContent = car.name;
        container.append(carName, carImage, finishImage);
        section.append(container);
    });
};

const renderGaragePage = (): void => {
    const root = getElement('.main');

    const garage = createElement(GARAGE.container);
    const title = createElement(GARAGE.title);
    const page = createElement(GARAGE.page);
    const carSection = createElement(GARAGE.carSection);
    getGarageCars().then((result) => {
        page.textContent = `Page #${result.page}`;
        title.textContent = `Garage (${result.total})`;
        fillGarageSection(carSection, result);
    });

    garage.append(title, page, carSection);
    root.append(garage);
};

export default renderGaragePage;
