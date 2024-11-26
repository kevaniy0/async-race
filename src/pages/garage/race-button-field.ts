import { fillGarageSection } from '.';
import switchStatusEngine from '../../api/engine/on-off-engine';
import startDrive from '../../api/engine/startDrive';
import { Car } from '../../api/garage/garage-data';
import getAllCars from '../../api/garage/getAllCars';
import Button from '../../components/button';
import blockEngineButtons, {
    unBlockEngineButtons,
} from '../../components/engineButtons/blockEngineButtons';
import WinnerModal from '../../components/winnerModal';
import { getState } from '../../state';
import carState from '../../state/car-state';
import { createElement, getElement } from '../../utils/dom';
import animateCar, { stopAnimation } from './animate-car';
import * as GARAGE from './garage-data';
import generateCars, { quantityCars } from './generateCars';

const createRaceButtons = (): HTMLDivElement => {
    const field = createElement(GARAGE.buttonField);
    const buttonRace = Button(GARAGE.buttonRace);
    const buttonReset = Button(GARAGE.buttonReset);
    const buttonGenerateCars = Button(GARAGE.buttonGenerateCars);
    buttonRace.addEventListener('click', async () => {
        const page = getState().garagePage;
        const carsOnPage = (await getAllCars(page)).collection;
        const list = Object.values(carsOnPage);
        const promises: Promise<Car & { time: number }>[] = [];
        buttonRace.disabled = true;
        const resetButton = getElement('.button__reset') as HTMLButtonElement;
        resetButton.disabled = true;
        blockEngineButtons();
        list.forEach((item) => {
            promises.push(
                switchStatusEngine({ idCar: item.id, status: 'started' }).then(async (data) => {
                    if (typeof data === 'string') throw new Error();
                    const car = getElement(`#car-${item.id}`);
                    const time = data.distance / data.velocity;
                    if (carState[item.id]) {
                        carState[item.id].controller = null;
                    }
                    if (carState[item.id].animationId !== null) {
                        cancelAnimationFrame(carState[item.id].animationId!);
                    }
                    const controller = new AbortController();
                    carState[item.id].controller = controller;
                    animateCar(item.id, car, time);
                    const response = await startDrive(item.id, controller.signal);

                    if (typeof response !== 'string') {
                        if (response.success === false) {
                            stopAnimation(item.id);
                            throw new Error();
                        }
                    }
                    return { ...item, time: Number((time / 1000).toFixed(2)) };
                })
            );
        });
        Promise.any([...promises]).then((data) => {
            const modal = WinnerModal(data.name, data.time);
            const main = getElement('.main');
            main.append(modal);
            resetButton.disabled = false;
        });
    });
    buttonGenerateCars.addEventListener('click', () => {
        generateCars(quantityCars)
            .then(() => getAllCars())
            .then((data) => {
                const section = getElement('.section-garage');
                fillGarageSection(section, data);
            });
    });
    buttonReset.addEventListener('click', async () => {
        const page = getState().garagePage;
        const carsOnPage = (await getAllCars(page)).collection;
        const list = Object.values(carsOnPage);
        unBlockEngineButtons();
        list.forEach((item) => {
            stopAnimation(item.id);
            switchStatusEngine({ idCar: item.id, status: 'stopped' }).then(() => {
                const car = getElement(`#car-${item.id}`);
                car.style.left = '60px';
            });
        });
    });
    field.append(buttonRace, buttonReset, buttonGenerateCars);
    return field;
};

export default createRaceButtons;
