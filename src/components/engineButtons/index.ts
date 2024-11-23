import switchStatusEngine from '../../api/engine/on-off-engine';
import startDrive from '../../api/engine/startDrive';
import animateCar, { stopAnimation } from '../../pages/garage/animate-car';
import { createElement, createSVG, getElement } from '../../utils/dom';
import { engineStartButton, engineStopButton, engineWrapper } from './engineButtons-data';
import carState from '../../state/car-state';
import './style.scss';

const EngineButtons = (id: number) => {
    const wrapper = createElement(engineWrapper);

    const startButton = createElement(engineStartButton);
    const startSVG = createSVG(['svg-start', 'engine-svg'], 'start-button');
    startButton.append(startSVG);

    const stopButton = createElement(engineStopButton);
    stopButton.disabled = true;
    const stopSVG = createSVG(['svg-stop', 'engine-svg'], 'stop-button');
    stopButton.append(stopSVG);

    if (!(id in carState)) {
        carState[id] = { controller: null, animationId: null };
    }
    wrapper.append(startButton, stopButton);

    const parent = startButton.parentElement!;
    startButton.addEventListener('click', () => {
        switchStatusEngine({ idCar: id, status: 'started' }).then(async (data) => {
            if (typeof data === 'string') return;
            startButton.disabled = true;
            const stopBTN = getElement('.engine-button__stop', parent) as HTMLButtonElement;
            stopBTN.disabled = false;
            const time = data.distance / data.velocity;
            const car = getElement(`#car-${id}`);
            if (carState[id].controller) {
                carState[id].controller = null;
            }
            if (carState[id].animationId !== null) {
                cancelAnimationFrame(carState[id].animationId);
            }
            const controller = new AbortController();
            carState[id].controller = controller;
            animateCar(id, car, time);

            const response = await startDrive(id, controller.signal);

            if (typeof response !== 'string') {
                if (response.success === false) {
                    stopAnimation(id);
                }
            }
        });
    });

    stopButton.addEventListener('click', () => {
        stopAnimation(id);

        switchStatusEngine({ idCar: id, status: 'stopped' }).then(() => {
            const startBTN = getElement('.engine-button__start', parent) as HTMLButtonElement;
            startBTN.disabled = false;
            stopButton.disabled = true;
            const car = getElement(`#car-${id}`);
            car.style.left = '60px';
        });
    });

    return wrapper;
};

export default EngineButtons;
