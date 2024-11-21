import switchStatusEngine from '../../api/engine/on-off-engine';
import startDrive from '../../api/engine/startDrive';
import animateCar, { stopAnimation } from '../../pages/garage/animate-car';
import { createElement, createSVG, getElement } from '../../utils/dom';
import { engineStartButton, engineStopButton, engineWrapper } from './engineButtons-data';
import './style.scss';

const EngineButtons = (id: number) => {
    const wrapper = createElement(engineWrapper);

    const startButton = createElement(engineStartButton);
    const startSVG = createSVG(['svg-start', 'engine-svg'], 'start-button');
    startButton.append(startSVG);

    const stopButton = createElement(engineStopButton);
    const stopSVG = createSVG(['svg-stop', 'engine-svg'], 'stop-button');
    stopButton.append(stopSVG);

    startButton.addEventListener('click', () => {
        switchStatusEngine({ idCar: id, status: 'started' }).then(async (data) => {
            if (typeof data === 'string') return;
            const time = data.distance / data.velocity;
            const car = getElement(`#car-${id}`);
            animateCar(car, time);
            const response = await startDrive(id);
            if (typeof response !== 'string') {
                if (response.success === false) {
                    stopAnimation();
                }
            }
        });
    });

    wrapper.append(startButton, stopButton);
    return wrapper;
};

export default EngineButtons;
