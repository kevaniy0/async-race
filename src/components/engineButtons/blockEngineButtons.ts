import { getElement } from '../../utils/dom';

const blockEngineButtons = () => {
    const startButtons = Array.from(
        document.body.querySelectorAll('.engine-button__start')
    ) as HTMLButtonElement[];
    startButtons.forEach((item) => {
        item.setAttribute('disabled', 'true');
    });
    const stopButtons = Array.from(
        document.body.querySelectorAll('.engine-button__stop')
    ) as HTMLButtonElement[];
    stopButtons.forEach((item) => {
        item.removeAttribute('disabled');
    });
};

export const unBlockEngineButtons = () => {
    const raceButton = getElement('.button__race') as HTMLButtonElement;
    if (raceButton.disabled) {
        raceButton.disabled = false;
    }
    const startButtons = Array.from(
        document.body.querySelectorAll('.engine-button__start')
    ) as HTMLButtonElement[];
    startButtons.forEach((item) => {
        item.removeAttribute('disabled');
    });
    const stopButtons = Array.from(
        document.body.querySelectorAll('.engine-button__stop')
    ) as HTMLButtonElement[];
    stopButtons.forEach((item) => {
        item.setAttribute('disabled', 'true');
    });
};

export default blockEngineButtons;
