import { fillGarageSection } from '.';
import getAllCars from '../../api/garage/getAllCars';
import Button from '../../components/button';
import { createElement, getElement } from '../../utils/dom';
import * as GARAGE from './garage-data';
import generateCars, { quantityCars } from './generateCars';

const createRaceButtons = (): HTMLDivElement => {
    const field = createElement(GARAGE.buttonField);
    const buttonRace = Button(GARAGE.buttonRace);
    const buttonReset = Button(GARAGE.buttonReset);
    const buttonGenerateCars = Button(GARAGE.buttonGenerateCars);
    buttonGenerateCars.addEventListener('click', () => {
        generateCars(quantityCars)
            .then(() => getAllCars())
            .then((data) => {
                const section = getElement('.section-garage');
                fillGarageSection(section, data);
            });
    });
    field.append(buttonRace, buttonReset, buttonGenerateCars);
    return field;
};

export default createRaceButtons;
