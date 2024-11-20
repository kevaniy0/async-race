import { createElement, createSVG } from '../../utils/dom';
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
    console.log(id);
    wrapper.append(startButton, stopButton);
    return wrapper;
};

export default EngineButtons;
